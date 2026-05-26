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

app.post("/products", (req, res) => {
  const { name, price, quantity } = req.body;

  if (!name || !price) {
    return res.status(400).json({
      success: false,
      message: "Name and price are required",
    });
  }

  const newProduct = {
    id: String(Date.now()),
    name: name,
    price: price,
    quantity: quantity || 1,
  };

  products.push(newProduct);

  res.status(201).json({
    success: true,
    data: newProduct,
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

app.patch("/products/:id", (req, res) => {
  const productId = req.params.id;
  const product = products.find((currentProduct) => {
    return currentProduct.id === productId;
  });

  if (!product) {
    return res.status(404).json({
      success: false,
      message: "Product not found",
    });
  }

  const { name, price, quantity } = req.body;

  if (price !== undefined && (typeof price !== "number" || price <= 0)) {
    return res.status(400).json({
      success: false,
      message: "Price must be a positive number",
    });
  }

  if (
    quantity !== undefined &&
    (typeof quantity !== "number" || quantity <= 0)
  ) {
    return res.status(400).json({
      success: false,
      message: "Quantity must be a positive number",
    });
  }

  if (name !== undefined) {
    product.name = name;
  }

  if (price !== undefined) {
    product.price = price;
  }

  if (quantity !== undefined) {
    product.quantity = quantity;
  }

  res.json({
    success: true,
    data: product,
  });
});

app.delete("/products/:id", (req, res) => {
  const productId = req.params.id;
  const productIndex = products.findIndex((currentProduct) => {
    return currentProduct.id === productId;
  });

  if (productIndex === -1) {
    return res.status(404).json({
      success: false,
      message: "Product not found",
    });
  }

  products.splice(productIndex, 1);

  res.json({
    success: true,
    message: "Product deleted successfully",
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
