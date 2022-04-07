import express from "express";
import { deletePostController } from "../controllers/deletePostController";
import { editPostController } from "../controllers/editPostController";
import { postController } from "../controllers/postController";
import { getPosts } from "../controllers/getPostController";
const router = express.Router();

router.get("/", (req,  res) => {
  res.status(200).json({message: "go to /getPosts"});
})
router.get("/getPosts", getPosts);
router.post("/createPost", postController);
router.patch("/editPost/:id", editPostController);
router.delete("/deletePost/:id", deletePostController);

export default router;
