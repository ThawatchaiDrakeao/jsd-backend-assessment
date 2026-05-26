const express = require("express");

const app = express();
const PORT = 3000;

// express.json() lets Express read JSON request bodies from POST/PATCH requests.
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "Express server is running",
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
