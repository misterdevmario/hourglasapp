const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");
const User = require("../Models/Users/usersModel");

const protect = asyncHandler(async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer") 
  ) {
    try {
      // Get token from header
      token = req.headers.authorization.split(" ")[1];

      // Verify token
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      // Get user from the token
      req.user = await User.findById(decoded.id).select("-password");
      

      next();
    } catch (error) {
      console.log(error);
      res.status(401);
      throw new Error("Not authorized/No autorizado");
    }
  }
  
  if (!token) {
    res.status(401);
    throw new Error("Not authorized, no token/No autorizado, falta de token");
  }
  // if (req.user.admin === false) {
  //   res.status(401);
  //   throw new Error("Not authorized/No autorizado");
  // }
});

module.exports = { protect };
