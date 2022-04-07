import { Request, Response } from "express";
import { Post } from "../models/Post";

export const deletePostController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    !id ? res.status(400).json({ message: "No id provided" }) : null;

    const post = await Post.findOne({ _id: id });

    const deleted = await post.delete();

    if (deleted) {
      console.log("Deleted post!");
      res.status(200).json({
        message: "Post deleted successfully",
      });
    } else {
      res.status(400).json({
        message: "Post not found",
      });
    }
  } catch (err) {
    console.log(err);
  }
};
