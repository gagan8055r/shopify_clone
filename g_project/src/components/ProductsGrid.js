//
// import React, { useState, useEffect } from "react";
// import './ProductsGrid.css';
//
// function ProductsGrid({ storeId }) {
//     const [products, setProducts] = useState([]);
//     const [showModal, setShowModal] = useState(false);
//     const [editingProduct, setEditingProduct] = useState(null);
//
//     const [formData, setFormData] = useState({
//         name: "",
//         price: "",
//         description: "",
//         nameFont: "Arial",
//         priceFont: "Arial",
//         descriptionFont: "Arial",
//         cardBackgroundColor: "#000000",
//         cardContainerBackgroundColor: "#ffffff"
//     });
//     const { cardContainerBackgroundColor } = formData;
//
//     useEffect(() => {
//         const headers = {
//             "Content-Type": "application/json",
//             "x-hasura-admin-secret": "7qN1gqjjqtf1QXkkW435OMGfAkmbMpSwSMc3EdUtVFnworAdDKosz6k8LB0nuL4v",
//         };
//         fetch(
//             `https://capital-duck-18.hasura.app/api/rest/products?store_id=${storeId}`,
//             {
//                 headers,
//                 method: "GET",
//             }
//         )
//             .then((response) => response.json())
//             .then((data) => {
//                 setProducts(data.products);
//             })
//             .catch((error) => console.error("Error fetching products:", error));
//     }, [storeId]);
//
//     const handleInputChange = (event) => {
//         const { name, value } = event.target;
//         setFormData({
//             ...formData,
//             [name]: value,
//         });
//     };
//
//     const handleSubmit = (event) => {
//         event.preventDefault();
//         const { name, price, description, nameFont, priceFont, descriptionFont, cardBackgroundColor,cardContainerBackgroundColor} = formData;
//
//         const content_styles = {
//             nameFont,
//             priceFont,
//             descriptionFont,
//             cardBackgroundColor,
//         };
//
//         if (editingProduct) {
//             fetch("https://capital-duck-18.hasura.app/api/rest/update-product", {
//                 method: "PUT",
//                 headers: {
//                     "Content-Type": "application/json",
//                     "x-hasura-admin-secret":
//                         "7qN1gqjjqtf1QXkkW435OMGfAkmbMpSwSMc3EdUtVFnworAdDKosz6k8LB0nuL4v",
//                 },
//                 body: JSON.stringify({
//                     id: editingProduct.id,
//                     store_id: `${storeId}`,
//                     name,
//                     price,
//                     description,
//                     content_styles: JSON.stringify(content_styles),
//                 }),
//             })
//                 .then((response) => response.json())
//                 .then((data) => {
//                     const updatedProducts = products.map((product) =>
//                         product.id === editingProduct.id
//                             ? {
//                                 ...product,
//                                 name: formData.name,
//                                 price: formData.price,
//                                 description: formData.description,
//                                 content_styles: JSON.stringify(content_styles),
//                             }
//                             : product
//                     );
//                     setProducts(updatedProducts);
//                     setEditingProduct(null);
//                     setShowModal(false);
//                     setFormData({
//                         name: "",
//                         price: "",
//                         description: "",
//                         nameFont: "Arial",
//                         priceFont: "Arial",
//                         descriptionFont: "Arial",
//                         cardBackgroundColor: "#000000",
//                         cardContainerBackgroundColor: "#000000"
//                     });
//                 })
//                 .catch((error) => console.error("Failed to update product:", error));
//         } else {
//             fetch("https://capital-duck-18.hasura.app/api/rest/create-product", {
//                 method: "POST",
//                 headers: {
//                     "Content-Type": "application/json",
//                     "x-hasura-admin-secret":
//                         "7qN1gqjjqtf1QXkkW435OMGfAkmbMpSwSMc3EdUtVFnworAdDKosz6k8LB0nuL4v",
//                 },
//                 body: JSON.stringify({
//                     store_id: `${storeId}`,
//                     name,
//                     price,
//                     description,
//                     content_styles: JSON.stringify(content_styles),
//                 }),
//             })
//                 .then((response) => response.json())
//                 .then((data) => {
//                     const newProduct = {
//                         description: formData.description,
//                         name: formData.name,
//                         price: formData.price,
//                         id: data.insert_products_one.id,
//                         content_styles: JSON.stringify(content_styles),
//                     };
//                     setProducts([...products, newProduct]);
//                     setShowModal(false);
//                     setFormData({
//                         name: "",
//                         price: "",
//                         description: "",
//                         nameFont: "Arial",
//                         priceFont: "Arial",
//                         descriptionFont: "Arial",
//                         cardBackgroundColor: "#000000",
//                         cardContainerBackgroundColor: "#000000"
//                     });
//                 })
//                 .catch((error) => console.error("Failed to add product:", error));
//         }
//     };
//
//     const handleDelete = (id) => {
//         fetch("https://capital-duck-18.hasura.app/api/rest/delete-product", {
//             method: "DELETE",
//             headers: {
//                 "Content-Type": "application/json",
//                 "x-hasura-admin-secret":
//                     "7qN1gqjjqtf1QXkkW435OMGfAkmbMpSwSMc3EdUtVFnworAdDKosz6k8LB0nuL4v",
//             },
//             body: JSON.stringify({ id }),
//         })
//             .then(() => {
//                 setProducts(products.filter((product) => product.id !== id));
//             })
//             .catch((error) => console.error("Failed to delete product:", error));
//     };
//
//     const handleEdit = (product) => {
//         const content_styles = product.content_styles ? JSON.parse(product.content_styles) : {};
//         setEditingProduct(product);
//         setFormData({
//             name: product.name,
//             price: product.price.toString(),
//             description: product.description,
//             nameFont: content_styles.nameFont || "Arial",
//             priceFont: content_styles.priceFont || "Arial",
//             descriptionFont: content_styles.descriptionFont || "Arial",
//             cardBackgroundColor: content_styles.cardBackgroundColor || "#000000",
//             cardContainerBackgroundColor: content_styles.cardContainerBackgroundColor || "#000000",
//         });
//         setShowModal(true);
//     };
//
//     const handleFontChange = (event) => {
//         const { name, value } = event.target;
//         setFormData({
//             ...formData,
//             [name]: value,
//         });
//     };
//
//     return (
//         <div className="product-grid">
//             <div className="card-container" style={{ backgroundColor: cardContainerBackgroundColor }}>
//                 {products.map((product) => {
//                     const content_styles = product.content_styles ? JSON.parse(product.content_styles) : {};
//                     return (
//                         <div className="product-card" key={product.id} style={{ backgroundColor: content_styles.cardBackgroundColor }}>
//                             <h2 style={{ fontFamily: content_styles.nameFont || "Arial" }}>{product.name}</h2>
//                             <p className="price" style={{ fontFamily: content_styles.priceFont || "Arial" }}>Rs.{product.price}</p>
//                             <p style={{ fontFamily: content_styles.descriptionFont || "Arial" }}>{product.description}</p>
//                             <div className="actions">
//                                 <button onClick={() => handleDelete(product.id)}>Delete</button>
//                                 <button onClick={() => handleEdit(product)}>Edit</button>
//                             </div>
//                         </div>
//                     );
//                 })}
//                 <button onClick={() => setShowModal(true)} style={{ width: '100px', height: '50px', padding: 'inherit', margin: '10px' }}>
//                     Add Product
//                 </button>
//                 {showModal && (
//                     <div className="modal-overlay">
//                         <div className="modal-content">
//                             <h2>{editingProduct ? 'Edit Product' : 'Add Product'}</h2>
//                             <form onSubmit={handleSubmit}>
//                                 <label htmlFor="name">Name:</label>
//                                 <input
//                                     type="text"
//                                     id="name"
//                                     name="name"
//                                     value={formData.name}
//                                     onChange={handleInputChange}
//                                     required
//                                 />
//
//                                 <label htmlFor="price">Price:</label>
//                                 <input
//                                     type="number"
//                                     id="price"
//                                     name="price"
//                                     value={formData.price}
//                                     onChange={handleInputChange}
//                                     required
//                                 />
//
//                                 <label htmlFor="description">Description:</label>
//                                 <textarea
//                                     id="description"
//                                     name="description"
//                                     value={formData.description}
//                                     onChange={handleInputChange}
//                                     required
//                                 />
//
//                                 <label htmlFor="nameFont">Name Font:</label>
//                                 <select
//                                     id="nameFont"
//                                     name="nameFont"
//                                     value={formData.nameFont}
//                                     onChange={handleFontChange}
//                                 >
//                                     <option value="Arial">Arial</option>
//                                     <option value="Georgia">Georgia</option>
//                                     <option value="Times New Roman">Times New Roman</option>
//                                     <option value="Verdana">Verdana</option>
//                                 </select>
//
//                                 <label htmlFor="priceFont">Price Font:</label>
//                                 <select
//                                     id="priceFont"
//                                     name="priceFont"
//                                     value={formData.priceFont}
//                                     onChange={handleFontChange}
//                                 >
//                                     <option value="Arial">Arial</option>
//                                     <option value="Georgia">Georgia</option>
//                                     <option value="Times New Roman">Times New Roman</option>
//                                     <option value="Verdana">Verdana</option>
//                                 </select>
//
//                                 <label htmlFor="descriptionFont">Description Font:</label>
//                                 <select
//                                     id="descriptionFont"
//                                     name="descriptionFont"
//                                     value={formData.descriptionFont}
//                                     onChange={handleFontChange}
//                                 >
//                                     <option value="Arial">Arial</option>
//                                     <option value="Georgia">Georgia</option>
//                                     <option value="Times New Roman">Times New Roman</option>
//                                     <option value="Verdana">Verdana</option>
//                                 </select>
//
//                                 <label htmlFor="cardBackgroundColor">Card Background Color:</label>
//                                 <input
//                                     type="color"
//                                     id="cardBackgroundColor"
//                                     name="cardBackgroundColor"
//                                     value={formData.cardBackgroundColor}
//                                     onChange={handleInputChange}
//                                 />
//                                 <label htmlFor="cardContainerBackgroundColor">Card Container Background Color:</label>
//                                 <input
//                                     type="color"
//                                     id="cardContainerBackgroundColor"
//                                     name="cardContainerBackgroundColor"
//                                     value={formData.cardContainerBackgroundColor}
//                                     onChange={handleInputChange}
//                                 />
//
//                                 <button type="submit">{editingProduct ? 'Update' : 'Add'}</button>
//                                 <button
//                                     type="button"
//                                     onClick={() => {
//                                         setShowModal(false);
//                                         setEditingProduct(null);
//                                         setFormData({
//                                             name: "",
//                                             price: "",
//                                             description: "",
//                                             nameFont: "Arial",
//                                             priceFont: "Arial",
//                                             descriptionFont: "Arial",
//                                             cardBackgroundColor: "#000000",
//                                             cardContainerBackgroundColor: "#000000",
//                                         });
//                                     }}
//                                     style={{marginLeft: "10px"}}
//                                 >
//                                     Cancel
//                                 </button>
//                             </form>
//                         </div>
//                     </div>
//                 )}
//             </div>
//         </div>
//     );
// }
//
// export default ProductsGrid;
//
//
// import React, { useState, useEffect } from "react";
// import './ProductsGrid.css';
//
// function ProductsGrid({ storeId }) {
//     const [products, setProducts] = useState([]);
//     const [showModal, setShowModal] = useState(false);
//     const [editingProduct, setEditingProduct] = useState(null);
//
//     const [formData, setFormData] = useState({
//         name: "",
//         price: "",
//         description: "",
//         nameFont: "Arial",
//         priceFont: "Arial",
//         descriptionFont: "Arial",
//         cardBackgroundColor: "#000000",
//         cardContainerBackgroundColor: "#ffffff"
//     });
//
//     useEffect(() => {
//         const headers = {
//             "Content-Type": "application/json",
//             "x-hasura-admin-secret": "7qN1gqjjqtf1QXkkW435OMGfAkmbMpSwSMc3EdUtVFnworAdDKosz6k8LB0nuL4v",
//         };
//         fetch(`https://capital-duck-18.hasura.app/api/rest/products?store_id=${storeId}`, {
//             headers,
//             method: "GET",
//         })
//             .then((response) => response.json())
//             .then((data) => {
//                 setProducts(data.products);
//             })
//             .catch((error) => console.error("Error fetching products:", error));
//     }, [storeId]);
//
//     const handleInputChange = (event) => {
//         const { name, value } = event.target;
//         setFormData({
//             ...formData,
//             [name]: value,
//         });
//     };
//
//     const handleSubmit = (event) => {
//         event.preventDefault();
//         const { name, price, description, nameFont, priceFont, descriptionFont, cardBackgroundColor ,cardContainerBackgroundColor} = formData;
//
//         const content_styles = {
//             nameFont,
//             priceFont,
//             descriptionFont,
//             cardBackgroundColor,
//             cardContainerBackgroundColor
//         };
//
//         if (editingProduct) {
//             fetch("https://capital-duck-18.hasura.app/api/rest/update-product", {
//                 method: "PUT",
//                 headers: {
//                     "Content-Type": "application/json",
//                     "x-hasura-admin-secret": "7qN1gqjjqtf1QXkkW435OMGfAkmbMpSwSMc3EdUtVFnworAdDKosz6k8LB0nuL4v",
//                 },
//                 body: JSON.stringify({
//                     id: editingProduct.id,
//                     store_id: `${storeId}`,
//                     name,
//                     price,
//                     description,
//                     content_styles: JSON.stringify(content_styles),
//                 }),
//             })
//                 .then((response) => response.json())
//                 .then((data) => {
//                     const updatedProducts = products.map((product) =>
//                         product.id === editingProduct.id
//                             ? { ...product, name, price, description, content_styles: JSON.stringify(content_styles) }
//                             : product
//                     );
//                     setProducts(updatedProducts);
//                     resetForm();
//                 })
//                 .catch((error) => console.error("Failed to update product:", error));
//         } else {
//             fetch("https://capital-duck-18.hasura.app/api/rest/create-product", {
//                 method: "POST",
//                 headers: {
//                     "Content-Type": "application/json",
//                     "x-hasura-admin-secret": "7qN1gqjjqtf1QXkkW435OMGfAkmbMpSwSMc3EdUtVFnworAdDKosz6k8LB0nuL4v",
//                 },
//                 body: JSON.stringify({
//                     store_id: `${storeId}`,
//                     name,
//                     price,
//                     description,
//                     content_styles: JSON.stringify(content_styles),
//                 }),
//             })
//                 .then((response) => response.json())
//                 .then((data) => {
//                     const newProduct = {
//                         description,
//                         name,
//                         price,
//                         id: data.insert_products_one.id,
//                         content_styles: JSON.stringify(content_styles),
//                     };
//                     setProducts([...products, newProduct]);
//                     resetForm();
//                 })
//                 .catch((error) => console.error("Failed to add product:", error));
//         }
//     };
//
//     const handleDelete = (id) => {
//         fetch("https://capital-duck-18.hasura.app/api/rest/delete-product", {
//             method: "DELETE",
//             headers: {
//                 "Content-Type": "application/json",
//                 "x-hasura-admin-secret": "7qN1gqjjqtf1QXkkW435OMGfAkmbMpSwSMc3EdUtVFnworAdDKosz6k8LB0nuL4v",
//             },
//             body: JSON.stringify({ id }),
//         })
//             .then(() => {
//                 setProducts(products.filter((product) => product.id !== id));
//             })
//             .catch((error) => console.error("Failed to delete product:", error));
//     };
//
//     const handleEdit = (product) => {
//         const content_styles = product.content_styles ? JSON.parse(product.content_styles) : {};
//         setEditingProduct(product);
//         setFormData({
//             name: product.name,
//             price: product.price.toString(),
//             description: product.description,
//             nameFont: content_styles.nameFont || "Arial",
//             priceFont: content_styles.priceFont || "Arial",
//             descriptionFont: content_styles.descriptionFont || "Arial",
//             cardBackgroundColor: content_styles.cardBackgroundColor || "#000000",
//             cardContainerBackgroundColor: content_styles.cardContainerBackgroundColor || "#000000",
//         });
//         setShowModal(true);
//     };
//
//     const resetForm = () => {
//         setEditingProduct(null);
//         setShowModal(false);
//         setFormData({
//             name: "",
//             price: "",
//             description: "",
//             nameFont: "Arial",
//             priceFont: "Arial",
//             descriptionFont: "Arial",
//             cardBackgroundColor: "#000000",
//             cardContainerBackgroundColor: "#ffffff"
//         });
//     };
//
//     return (
//         <div className="product-grid">
//             <div className="card-container" style={{ backgroundColor: formData.cardContainerBackgroundColor }}>
//                 {products.map((product) => {
//                     const content_styles = product.content_styles ? JSON.parse(product.content_styles) : {};
//                     return (
//                         <div className="product-card" key={product.id} style={{ backgroundColor: content_styles.cardBackgroundColor }}>
//                             <h2 style={{ fontFamily: content_styles.nameFont || "Arial" }}>{product.name}</h2>
//                             <p className="price" style={{ fontFamily: content_styles.priceFont || "Arial" }}>Rs.{product.price}</p>
//                             <p style={{ fontFamily: content_styles.descriptionFont || "Arial" }}>{product.description}</p>
//                             <div className="actions">
//                                 <button onClick={() => handleDelete(product.id)}>Delete</button>
//                                 <button onClick={() => handleEdit(product)}>Edit</button>
//                             </div>
//                         </div>
//                     );
//                 })}
//                 <button onClick={() => setShowModal(true)} style={{ width: '100px', height: '50px', padding: 'inherit', margin: '10px' }}>
//                     Add Product
//                 </button>
//                 {showModal && (
//                     <div className="modal-overlay">
//                         <div className="modal-content">
//                             <h2>{editingProduct ? 'Edit Product' : 'Add Product'}</h2>
//                             <form onSubmit={handleSubmit}>
//                                 <label htmlFor="name">Name:</label>
//                                 <input
//                                     type="text"
//                                     id="name"
//                                     name="name"
//                                     value={formData.name}
//                                     onChange={handleInputChange}
//                                     required
//                                 />
//
//                                 <label htmlFor="price">Price:</label>
//                                 <input
//                                     type="number"
//                                     id="price"
//                                     name="price"
//                                     value={formData.price}
//                                     onChange={handleInputChange}
//                                     required
//                                 />
//
//                                 <label htmlFor="description">Description:</label>
//                                 <textarea
//                                     id="description"
//                                     name="description"
//                                     value={formData.description}
//                                     onChange={handleInputChange}
//                                     required
//                                 />
//
//                                 <label htmlFor="nameFont">Name Font:</label>
//                                 <select
//                                     id="nameFont"
//                                     name="nameFont"
//                                     value={formData.nameFont}
//                                     onChange={handleInputChange}
//                                 >
//                                     <option value="Arial">Arial</option>
//                                     <option value="Georgia">Georgia</option>
//                                     <option value="Times New Roman">Times New Roman</option>
//                                     <option value="Verdana">Verdana</option>
//                                 </select>
//
//                                 <label htmlFor="priceFont">Price Font:</label>
//                                 <select
//                                     id="priceFont"
//                                     name="priceFont"
//                                     value={formData.priceFont}
//                                     onChange={handleInputChange}
//                                 >
//                                     <option value="Arial">Arial</option>
//                                     <option value="Georgia">Georgia</option>
//                                     <option value="Times New Roman">Times New Roman</option>
//                                     <option value="Verdana">Verdana</option>
//                                 </select>
//
//                                 <label htmlFor="descriptionFont">Description Font:</label>
//                                 <select
//                                     id="descriptionFont"
//                                     name="descriptionFont"
//                                     value={formData.descriptionFont}
//                                     onChange={handleInputChange}
//                                 >
//                                     <option value="Arial">Arial</option>
//                                     <option value="Georgia">Georgia</option>
//                                     <option value="Times New Roman">Times New Roman</option>
//                                     <option value="Verdana">Verdana</option>
//                                 </select>
//
//                                 <label htmlFor="cardBackgroundColor">Card Background Color:</label>
//                                 <input
//                                     type="color"
//                                     id="cardBackgroundColor"
//                                     name="cardBackgroundColor"
//                                     value={formData.cardBackgroundColor}
//                                     onChange={handleInputChange}
//                                 />
//
//                                 <label htmlFor="cardContainerBackgroundColor">Card Container Background Color:</label>
//                                 <input
//                                     type="color"
//                                     id="cardContainerBackgroundColor"
//                                     name="cardContainerBackgroundColor"
//                                     value={formData.cardContainerBackgroundColor}
//                                     onChange={handleInputChange}
//                                 />
//
//                                 <button type="submit">{editingProduct ? 'Update' : 'Add'}</button>
//                                 <button
//                                     type="button"
//                                     onClick={resetForm}
//                                     style={{ marginLeft: "10px" }}
//                                 >
//                                     Cancel
//                                 </button>
//                             </form>
//                         </div>
//                     </div>
//                 )}
//             </div>
//         </div>
//     );
// }
//
// export default ProductsGrid;
//

import React, { useState, useEffect } from "react";
import './ProductsGrid.css';

function ProductsGrid({ storeId }) {
    const [products, setProducts] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [editingProduct, setEditingProduct] = useState(null);

    const [formData, setFormData] = useState({
        name: "",
        price: "",
        description: "",
        nameFont: "Arial",
        priceFont: "Arial",
        descriptionFont: "Arial",
        cardBackgroundColor: "#000000",
        cardContainerBackgroundColor: "#ffffff"
    });

    useEffect(() => {
        const headers = {
            "Content-Type": "application/json",
            "x-hasura-admin-secret": "7qN1gqjjqtf1QXkkW435OMGfAkmbMpSwSMc3EdUtVFnworAdDKosz6k8LB0nuL4v",
        };
        fetch(`https://capital-duck-18.hasura.app/api/rest/products?store_id=${storeId}`, {
            headers,
            method: "GET",
        })
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
        const { name, price, description, nameFont, priceFont, descriptionFont, cardBackgroundColor } = formData;

        const content_styles = {
            nameFont,
            priceFont,
            descriptionFont,
            cardBackgroundColor,
        };

        if (editingProduct) {
            fetch("https://capital-duck-18.hasura.app/api/rest/update-product", {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    "x-hasura-admin-secret": "7qN1gqjjqtf1QXkkW435OMGfAkmbMpSwSMc3EdUtVFnworAdDKosz6k8LB0nuL4v",
                },
                body: JSON.stringify({
                    id: editingProduct.id,
                    store_id: `${storeId}`,
                    name,
                    price,
                    description,
                    content_styles: JSON.stringify(content_styles),
                }),
            })
                .then((response) => response.json())
                .then((data) => {
                    const updatedProducts = products.map((product) =>
                        product.id === editingProduct.id
                            ? { ...product, name, price, description, content_styles: JSON.stringify(content_styles) }
                            : product
                    );
                    setProducts(updatedProducts);
                    resetForm();
                })
                .catch((error) => console.error("Failed to update product:", error));
        } else {
            fetch("https://capital-duck-18.hasura.app/api/rest/create-product", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "x-hasura-admin-secret": "7qN1gqjjqtf1QXkkW435OMGfAkmbMpSwSMc3EdUtVFnworAdDKosz6k8LB0nuL4v",
                },
                body: JSON.stringify({
                    store_id: `${storeId}`,
                    name,
                    price,
                    description,
                    content_styles: JSON.stringify(content_styles),
                }),
            })
                .then((response) => response.json())
                .then((data) => {
                    const newProduct = {
                        description,
                        name,
                        price,
                        id: data.insert_products_one.id,
                        content_styles: JSON.stringify(content_styles),
                    };
                    setProducts([...products, newProduct]);
                    resetForm();
                })
                .catch((error) => console.error("Failed to add product:", error));
        }
    };

    const handleDelete = (id) => {
        fetch("https://capital-duck-18.hasura.app/api/rest/delete-product", {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "x-hasura-admin-secret": "7qN1gqjjqtf1QXkkW435OMGfAkmbMpSwSMc3EdUtVFnworAdDKosz6k8LB0nuL4v",
            },
            body: JSON.stringify({ id }),
        })
            .then(() => {
                setProducts(products.filter((product) => product.id !== id));
            })
            .catch((error) => console.error("Failed to delete product:", error));
    };

    const handleEdit = (product) => {
        const content_styles = product.content_styles ? JSON.parse(product.content_styles) : {};
        setEditingProduct(product);
        setFormData({
            name: product.name,
            price: product.price.toString(),
            description: product.description,
            nameFont: content_styles.nameFont || "Arial",
            priceFont: content_styles.priceFont || "Arial",
            descriptionFont: content_styles.descriptionFont || "Arial",
            cardBackgroundColor: content_styles.cardBackgroundColor || "#000000",
            cardContainerBackgroundColor: formData.cardContainerBackgroundColor,  // Keep current container background color
        });
        setShowModal(true);
    };

    const resetForm = () => {
        setFormData({
            name: "",
            price: "",
            description: "",
            nameFont: "Arial",
            priceFont: "Arial",
            descriptionFont: "Arial",
            cardBackgroundColor: "#000000",
            cardContainerBackgroundColor: formData.cardContainerBackgroundColor,
        });
        setEditingProduct(null);
        setShowModal(false);
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
            <div className="card-container" style={{ backgroundColor: formData.cardContainerBackgroundColor }}>
                {products.map((product) => {
                    const content_styles = product.content_styles ? JSON.parse(product.content_styles) : {};
                    return (
                        <div className="product-card" key={product.id} style={{ backgroundColor: content_styles.cardBackgroundColor }}>
                            <h2 style={{ fontFamily: content_styles.nameFont || "Arial" }}>{product.name}</h2>
                            <p className="price" style={{ fontFamily: content_styles.priceFont || "Arial" }}>Rs.{product.price}</p>
                            <p style={{ fontFamily: content_styles.descriptionFont || "Arial" }}>{product.description}</p>
                            <div className="actions">
                                <button onClick={() => handleDelete(product.id)}>Delete</button>
                                <button onClick={() => handleEdit(product)}>Edit</button>
                            </div>
                        </div>
                    );
                })}
                <button onClick={() => setShowModal(true)} style={{ width: '100px', height: '50px', padding: 'inherit', margin: '10px' }}>
                    Add Product
                </button>
                {showModal && (
                    <div className="modal-overlay">
                        <div className="modal-content1">
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

                                <label htmlFor="cardBackgroundColor">Card Background Color:</label>
                                <input
                                    type="color"
                                    id="cardBackgroundColor"
                                    name="cardBackgroundColor"
                                    value={formData.cardBackgroundColor}
                                    onChange={handleInputChange}
                                />
                                {/*<label htmlFor="cardContainerBackgroundColor">Card Container Background Color:</label>*/}
                                {/*<input*/}
                                {/*    type="color"*/}
                                {/*    id="cardContainerBackgroundColor"*/}
                                {/*    name="cardContainerBackgroundColor"*/}
                                {/*    value={formData.cardContainerBackgroundColor}*/}
                                {/*    onChange={handleInputChange}*/}
                                {/*/>*/}

                                <button type="submit">{editingProduct ? 'Update' : 'Add'}</button>
                                <button
                                    type="button"
                                    onClick={resetForm}
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

