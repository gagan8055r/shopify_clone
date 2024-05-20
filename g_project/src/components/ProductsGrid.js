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
        nameFont: "Arial",
        priceFont: "Arial",
        descriptionFont: "Arial"
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
        const { name, price, description, nameFont, priceFont, descriptionFont } = formData;

        const content_styles = {
            nameFont,
            priceFont,
            descriptionFont
        };

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
                    name,
                    price,
                    description,
                    content_styles: JSON.stringify(content_styles)
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
                    // setFormData({ name: "", price: "", description: "" });
                    setFormData({ name: "", price: "", description: "", nameFont: formData.nameFont, priceFont: formData.priceFont, descriptionFont: formData.descriptionFont });

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
                    name,
                    price,
                    description,
                    content_styles: JSON.stringify(content_styles)
                }),
            })
                .then((response) => response.json())
                .then((data) => {
                    const newProduct = {
                        description: formData.description,
                        name: formData.name,
                        price: formData.price,
                        id: data.insert_products_one.id,
                        content_styles: JSON.stringify(content_styles)
                    };
                    setProducts([...products, newProduct]);
                    setShowModal(false);
                    setShowModal(false);
                    setFormData({
                        name: "",
                        price: "",
                        description: "",
                        nameFont: formData.nameFont,
                        priceFont: formData.priceFont,
                        descriptionFont: formData.descriptionFont
                    });
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
    const handleFontChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };
    return (
        <div className="product-grid">
            <div className="card-container">
            {products.map((product, index) => (
                <div className="product-card" key={product.id}>
                    <h2 style={{fontFamily: product.content_styles ? JSON.parse(product.content_styles).nameFont : "Arial"}}>{product.name}</h2>
                    <p className="price"
                       style={{fontFamily: product.content_styles ? JSON.parse(product.content_styles).priceFont : "Arial"}}>Rs.{product.price}</p>
                    <p style={{fontFamily: product.content_styles ? JSON.parse(product.content_styles).descriptionFont : "Arial"}}>{product.description}</p>
                    <div className="actions">

                        <button onClick={() => handleDelete(product.id)}>Delete</button>
                        <button
                            onClick={() => handleEdit(product)}>
                            Edit
                        </button>
                    </div>
                </div>
            ))}
            <button onClick={() => setShowModal(true)} style={{width:'100px', height:'50px',padding:'inherit',margin:'10px'}}>
                Add Product
            </button>
            {showModal && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        <h2>{editingProduct ? 'Edit Product' : 'Add Product'}</h2>
                        <form onSubmit={handleSubmit}>
                            <label htmlFor="name">Name:</label>

                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                                required
                            />

                            <label htmlFor="price">Price:</label>

                            <input
                                type="number"
                                id="price"
                                name="price"
                                value={formData.price}
                                onChange={handleInputChange}
                                required
                            />

                            <label htmlFor="description">Description:</label>

                            <textarea
                                id="description"
                                name="description"
                                value={formData.description}
                                onChange={handleInputChange}
                                required
                            />

                            <label htmlFor="nameFont">Name Font:</label>
                            <select
                                id="nameFont"
                                name="nameFont"
                                value={formData.nameFont}
                                onChange={handleFontChange}
                            >
                                <option value="Arial">Arial</option>
                                <option value="Georgia">Georgia</option>
                                <option value="Times New Roman">Times New Roman</option>
                                <option value="Verdana">Verdana</option>
                            </select>

                            <label htmlFor="priceFont">Price Font:</label>
                            <select
                                id="priceFont"
                                name="priceFont"
                                value={formData.priceFont}
                                onChange={handleFontChange}
                            >
                                <option value="Arial">Arial</option>
                                <option value="Georgia">Georgia</option>
                                <option value="Times New Roman">Times New Roman</option>
                                <option value="Verdana">Verdana</option>
                            </select>

                            <label htmlFor="descriptionFont">Description Font:</label>
                            <select
                                id="descriptionFont"
                                name="descriptionFont"
                                value={formData.descriptionFont}
                                onChange={handleFontChange}
                            >
                                <option value="Arial">Arial</option>
                                <option value="Georgia">Georgia</option>
                                <option value="Times New Roman">Times New Roman</option>
                                <option value="Verdana">Verdana</option>
                            </select>

                            <button type="submit">{editingProduct ? 'Update' : 'Add'}</button>
                            <button
                                type="button"
                                onClick={() => {
                                    setShowModal(false)
                                    setEditingProduct(null);
                                    setFormData({ name: "", price: "", description: "" });
                                }}
                                style={{ marginLeft: "10px" }}
                            >
                                Cancel
                            </button>
                        </form>
                    </div>
                </div>

            )}
            </div>
        </div>
    );
}

export default ProductsGrid;