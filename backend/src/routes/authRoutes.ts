import express, { Request, Response } from "express";
import { registerUser, loginUser } from "../controllers/authController";
import { protect } from "../middleware/authMiddleware";

const router = express.Router();

router.post("/register", async (req: Request, res: Response) => {
  await registerUser(req, res);
});
router.post("/login", async (req: Request, res: Response) => {
  await loginUser(req, res);
});

// Protect profile route (Example: Only logged-in users can access)
// router.get("/profile", protect, (req, res) => {
//   res.json({ message: "This is a protected route", user: req.user });
// });


export default router;
