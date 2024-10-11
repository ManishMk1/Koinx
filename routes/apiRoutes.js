import { Router } from "express";
import statsController from "../controllers/stats.js";
import deviationController from "../controllers/deviation.js";
import { welcomeController } from "../controllers/welcome.js";
const router = Router();
router.get("/",welcomeController)
router.get("/stats", statsController);
router.get("/deviation", deviationController);

export default router;