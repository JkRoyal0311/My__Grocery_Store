const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

const products = [
  { id: 1, name: "Sugar", price: 43, image: "images/sugar.jpg" },
  { id: 2, name: "Toor Dal", price: 100, image: "images/dal.jpg" },
  { id: 3, name: "Rice", price: 50, image: "images/rice.jpg" }
];

app.get("/api/products", (req, res) => {
  res.json(products);
});

app.listen(4000, () => console.log("✅ Server running at http://localhost:4000"));
