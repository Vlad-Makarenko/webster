import { Router } from "express";
import ProjectsController from "./controller";
import passport from "passport";

const router = Router();

const controller = new ProjectsController();

router.post("/", passport.authenticate("jwt", { session: false }), controller.create.bind(controller));
// router.post("/:id", passport.authenticate("jwt", { session: false }), controller.update.bind(controller));
router.get("/:id", passport.authenticate("jwt", { session: false }), controller.retrieveOne.bind(controller));
router.get("/", passport.authenticate("jwt", { session: false }), controller.retrieveAll.bind(controller));
router.post("/:id", passport.authenticate("jwt", { session: false }), controller.addItem.bind(controller));
router.put("/:id", passport.authenticate("jwt", { session: false }), controller.updateItem.bind(controller));

export default router;
