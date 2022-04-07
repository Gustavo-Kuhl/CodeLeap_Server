import { Request, Response } from "express";
import { Post } from "../models/Post";

interface PostInterface {
  username: string;
  title: string;
  content: string;
}

export const postController = async (req: Request, res: Response) => {
  const { username, title, content }: PostInterface = req.body;

  try {
    if (username && title && content) {
      const data = new Date();

      const newPost = await Post.create({
        username,
        created_datetime: data.toLocaleDateString("pt-BR"),
        title,
        content,
      });

      await newPost.save();
      res.send(newPost).json();
    } else {
      res.send({ message: "Missing fields" }).json();
    }
  } catch (err) {
    console.log("error", err);
    res.status(400).json({ err });
  }
};
