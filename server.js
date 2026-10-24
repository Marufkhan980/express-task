const express = require("express");
const cookieParser = require("cookie-parser");

const app = express();
const PORT = 3000;

// Middleware
app.use((req, res, next) => {
  console.log("Request Received");
  next();
});

app.use(cookieParser());

// Home Route
app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Welcome to Express Server"
  });
});

// User controller
const getUser = (req, res) => {
  res.json({
    name: "John Doe",
    role: "Student"
  });
};

// User Route
app.get("/user", getUser);

// Login Route
app.get("/login", (req, res) => {
  res.cookie("user", "john");
  res.json({
    message: "Cookie set successfully"
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});