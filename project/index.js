const express = require("express");

const app = express();
const PORT = 3000;

const products = [
  {
    id: "1",
    name: "Keyboard",
    price: 49.99,
    quantity: 10,
  },
  {
    id: "2",
    name: "Mouse",
    price: 24.99,
    quantity: 15,
  },
  {
    id: "3",
    name: "Monitor",
    price: 199.99,
    quantity: 5,
  },
];

// express.json() lets Express read JSON request bodies from POST/PATCH requests.
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "Express server is running",
  });
});

app.get("/products", (req, res) => {
  res.json({
    success: true,
    data: products,
  });
});

app.get("/products/:id", (req, res) => {
  const product = products.find((currentProduct) => {
    return currentProduct.id === req.params.id;
  });

  if (!product) {
    return res.status(404).json({
      success: false,
      message: "Product not found",
    });
  }

  res.json({
    success: true,
    data: product,
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
