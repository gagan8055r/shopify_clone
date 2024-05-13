import React, { useState, useEffect } from "react";
// import {useParams} from "react-router-dom";
import './ProductsGrid.css'
function ProductsGrid({storeId}) {
    // const {storeId} = useParams();
    const [products, setProducts] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [editingProduct, setEditingProduct] = useState(null);
    const [formData, setFormData] = useState({
        name: "",
        price: "",
        description: "",
    });

    useEffect(() => {
        const headers = {
            "Content-Type": "application/json",
            "x-hasura-admin-secret":
                "7qN1gqjjqtf1QXkkW435OMGfAkmbMpSwSMc3EdUtVFnworAdDKosz6k8LB0nuL4v",
        };

        fetch(
            `https://capital-duck-18.hasura.app/api/rest/products?store_id=${storeId}`,
            {
                headers,
                method: "GET",
            }
        )
            .then((response) => response.json())
            .then((data) => {
                setProducts(data.products);
            })
            .catch((error) => console.error("Error fetching products:", error));
    }, [storeId]);



    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (event) => {

        event.preventDefault();


        if (editingProduct) {

            fetch("https://capital-duck-18.hasura.app/api/rest/update-product", {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    "x-hasura-admin-secret":
                        "7qN1gqjjqtf1QXkkW435OMGfAkmbMpSwSMc3EdUtVFnworAdDKosz6k8LB0nuL4v",
                },
                body: JSON.stringify({
                    id: editingProduct.id,
                    store_id: `${storeId}`,
                    name: formData.name,
                    price: formData.price,
                    description: formData.description,
                }),
            })
                .then((response) => response.json())
                .then((data) => {
                    const updatedProducts = products.map((product) =>
                        product.id === editingProduct.id
                            ? {
                                ...product,
                                name: formData.name,
                                price: formData.price,
                                description: formData.description,
                            }
                            : product
                    );
                    setProducts(updatedProducts);
                    setEditingProduct(null);
                    setShowModal(false);
                    setFormData({ name: "", price: "", description: "" });
                })
                .catch((error) => console.error("Failed to update product:", error));
        }
        else {


            fetch("https://capital-duck-18.hasura.app/api/rest/create-product", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "x-hasura-admin-secret":
                        "7qN1gqjjqtf1QXkkW435OMGfAkmbMpSwSMc3EdUtVFnworAdDKosz6k8LB0nuL4v",
                },
                body: JSON.stringify({
                    store_id: `${storeId}`,
                    name: formData.name,
                    price: formData.price,
                    description: formData.description,
                }),
            })
                .then((response) => response.json())
                .then((data) => {
                    const newProduct = {
                        description: formData.description,
                        name: formData.name,
                        price: formData.price,
                        id: data.insert_products_one.id,
                    };
                    setProducts([...products, newProduct]);
                    setShowModal(false);
                    setFormData({name: "", price: "", description: ""}); // Reset form
                })
                .catch((error) => console.error("Failed to add product:", error));
        }
    };

    const handleDelete = (id) => {
        fetch("https://capital-duck-18.hasura.app/api/rest/delete-product", {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "x-hasura-admin-secret":
                    "7qN1gqjjqtf1QXkkW435OMGfAkmbMpSwSMc3EdUtVFnworAdDKosz6k8LB0nuL4v",
            },
            body: JSON.stringify({ id }),
        })
            .then(() => {
                setProducts(products.filter((product) => product.id !== id));
            })
            .catch((error) => console.error("Failed to delete product:", error));
    };

    const handleEdit = (product) => {
        setEditingProduct({
            id: product.id,
            name: product.name,
            price: product.price,
            description: product.description,
        });
        setFormData({
            name: product.name,
            price: product.price.toString(),
            description: product.description,
        });
        setShowModal(true);
    };
    return (
        <div className="product-grid">
            {products.map((product, index) => (
                <div className="product-card">
                    <h2>{product.name}</h2>
                    <p className="price">Rs.{product.price}</p>
                    <p>{product.description}</p>
                    <div className="actions">

                        <button onClick={() => handleDelete(product.id)}>Delete</button>
                        <button
                            onClick={() => handleEdit(product)}>
                            Edit
                        </button>
                    </div>
                </div>
            ))}
            <button onClick={() => setShowModal(true)} style={{width:'100px' ,height:'50px' ,borderRadius:'10px'}}>
                Add Product
            </button>
            {showModal && (
                <div>
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="name">Name:</label>
                        <br />
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                        />
                        <br />
                        <label htmlFor="price">Price:</label>
                        <br />
                        <input
                            type="number"
                            id="price"
                            name="price"
                            value={formData.price}
                            onChange={handleInputChange}
                            required
                        />
                        <br />
                        <label htmlFor="description">Description:</label>
                        <br />
                        <textarea
                            id="description"
                            name="description"
                            value={formData.description}
                            onChange={handleInputChange}
                            required
                        />
                        <br />
                        <button type="submit">Add</button>
                        <button
                            type="button"
                            onClick={() => {setShowModal(false)
                                setEditingProduct(null);
                                setFormData({ name: "", price: "", description: "" });
                        }}
                            style={{ marginLeft: "10px" }}
                        >
                            Cancel
                        </button>
                    </form>
                </div>
            )}
        </div>
    );
}

export default ProductsGrid;