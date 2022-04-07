import { Request, Response } from "express";
import { Post } from "../models/Post";

export const getPosts = async (req: Request, res: Response) => {
  try {
    const posts: object = await Post.find({});

    !posts && res.status(404).json({ message: "No posts found" });

    console.log("GETTING POSTS...");

    res.status(200).json({ posts });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error });
  }
};
