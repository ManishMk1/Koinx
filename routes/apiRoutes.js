import { Router } from "express";
import statsController from "../controllers/stats.js";
import deviationController from "../controllers/deviation.js";

const router = Router();

router.get("/stats", statsController);
router.get("/deviation", deviationController);

export default router;