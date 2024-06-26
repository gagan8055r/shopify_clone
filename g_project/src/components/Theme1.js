// import React, { useState, useEffect } from "react";
//
// function ProductsGrid() {
//     const [products, setProducts] = useState([]);
//     const [showModal, setShowModal] = useState(false);
//     const [formData, setFormData] = useState({
//         name: "",
//         price: "",
//         description: "",
//     });
//
//     useEffect(() => {
//         const headers = {
//             "Content-Type": "application/json",
//             "x-hasura-admin-secret":
//                 "7qN1gqjjqtf1QXkkW435OMGfAkmbMpSwSMc3EdUtVFnworAdDKosz6k8LB0nuL4v",
//         };
//
//         fetch(
//             "https://capital-duck-18.hasura.app/api/rest/products?store_id=75ec68b5-fd10-4251-9688-d7646a62c728",
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
//     }, []);
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
//         fetch("https://capital-duck-18.hasura.app/api/rest/create-product", {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json",
//                 "x-hasura-admin-secret":
//                     "7qN1gqjjqtf1QXkkW435OMGfAkmbMpSwSMc3EdUtVFnworAdDKosz6k8LB0nuL4v",
//             },
//             body: JSON.stringify({
//                 store_id: "75ec68b5-fd10-4251-9688-d7646a62c728",
//                 name: formData.name,
//                 price: formData.price,
//                 description: formData.description,
//             }),
//         })
//             .then((response) => response.json())
//             .then((data) => {
//                 const newProduct = {
//                     description: formData.description,
//                     name: formData.name,
//                     price: formData.price,
//                     id: data.insert_products_one.id,
//                 };
//                 setProducts([...products, newProduct]);
//                 setShowModal(false);
//                 setFormData({ name: "", price: "", description: "" }); // Reset form
//             })
//             .catch((error) => console.error("Failed to add product:", error));
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
//                 setProducts(products.filter((product) => product.id !== id)); // Remove the product from local state
//             })
//             .catch((error) => console.error("Failed to delete product:", error));
//     };
//
//     return (
//         <div
//             style={{
//                 display: "flex",
//                 flexWrap: "wrap",
//                 gap: "20px",
//                 justifyContent: "center",
//                 padding: "20px",
//             }}
//         >
//             {products.map((product, index) => (
//                 <div
//                     key={index}
//                     style={{
//                         flex: "1 0 30%",
//                         border: "1px solid #ccc",
//                         borderRadius: "10px",
//                         padding: "10px",
//                         boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
//                     }}
//                 >
//                     <h2 style={{ fontSize: "18px", marginBottom: "10px" }}>
//                         {product.name}
//                     </h2>
//                     <p style={{ marginBottom: "10px" }}>{product.description}</p>
//                     <p style={{ fontWeight: "bold" }}>${product.price}</p>
//                     <button onClick={() => handleDelete(product.id)}>Delete</button>
//                 </div>
//             ))}
//             <button onClick={() => setShowModal(true)} style={{ marginTop: "20px" }}>
//                 Add Product
//             </button>
//             {showModal && (
//                 <div
//                     style={{
//                         position: "fixed",
//                         top: "50%",
//                         left: "50%",
//                         transform: "translate(-50%, -50%)",
//                         backgroundColor: "white",
//                         padding: "20px",
//                         zIndex: 1000,
//                         border: "1px solid #ccc",
//                         borderRadius: "10px",
//                         boxShadow: "0 4px 6px rgba(0,0,0,0.2)",
//                     }}
//                 >
//                     <form onSubmit={handleSubmit}>
//                         <label htmlFor="name">Name:</label>
//                         <br />
//                         <input
//                             type="text"
//                             id="name"
//                             name="name"
//                             value={formData.name}
//                             onChange={handleInputChange}
//                             required
//                         />
//                         <br />
//                         <label htmlFor="price">Price:</label>
//                         <br />
//                         <input
//                             type="number"
//                             id="price"
//                             name="price"
//                             value={formData.price}
//                             onChange={handleInputChange}
//                             required
//                         />
//                         <br />
//                         <label htmlFor="description">Description:</label>
//                         <br />
//                         <textarea
//                             id="description"
//                             name="description"
//                             value={formData.description}
//                             onChange={handleInputChange}
//                             required
//                         />
//                         <br />
//                         <button type="submit">Add</button>
//                         <button
//                             type="button"
//                             onClick={() => setShowModal(false)}
//                             style={{ marginLeft: "10px" }}
//                         >
//                             Cancel
//                         </button>
//                     </form>
//                 </div>
//             )}
//         </div>
//     );
// }
//
// export default ProductsGrid;




