import { Response, Request } from "express";
import { Post } from "../models/Post";

interface PostInterface {
  title: string;
  content: string;
}

export const editPostController = async (req: Request, res: Response) => {
  const { title, content }: PostInterface = req.body;
  const { id } = req.params;

  !id ? res.status(400).json({ message: "No id provided" }) : null;

  try {
    console.log("Updating post...");

    const date = new Date();

    const updatedPost = await Post.findByIdAndUpdate(id, {
      created_datetime: date.toLocaleDateString("pt-BR"),
      title,
      content,
    });

    res.status(200).json({ updatedPost });
  } catch (err) {
    console.log("UPDATE ERROR", err);
  }
};
