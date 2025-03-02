import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

// Extend Request interface to include userId
interface AuthRequest extends Request {
  user?: any;
}

// Middleware to authenticate user using JWT
export const protect = (req: AuthRequest, res: Response, next: NextFunction) => {
  let token;

  // Check if authorization header exists and starts with "Bearer"
  if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
    try {
      // Extract token from header
      token = req.headers.authorization.split(" ")[1];

      // Verify token
      const decoded = jwt.verify(token, "secretkey");

      // Attach user to request object
      req.user = decoded;

      next(); // Proceed to next middleware/controller
    } catch (error) {
      res.status(401).json({ message: "Unauthorized - Invalid Token" });
    }
  } else {
    res.status(401).json({ message: "Unauthorized - No Token Provided" });
  }
};
