import { Request, Response } from "express";
import { getRepository } from "typeorm";
import Post from "../entity/Post";
import User from "../entity/User";

interface MulterRequest extends Request {
  files: any;
}

export default {
  async create(req: MulterRequest, resp: Response) {
    const { id_user, post_text } = req.body;

    const requestImage = req.files as Express.Multer.File[];
    const post_image = requestImage.map((image) => {
      return image.filename;
    });

    try {
      await getRepository(User).findOneOrFail({
        id_user: id_user,
      });

      const data = {
        id_user,
        post_text,
        post_image,
      };
      //problema na criação
      const post = getRepository(Post).create(data);

      if (post_text != null && post_image.length != 0) {
        await getRepository(Post).save(post);
        return resp.status(200).json(post);
      } else {
        return resp.status(400).json({ error: "falta informações" });
      }
    } catch (next) {
      return resp.status(400).json(next);
    }
  },
  async show(req: MulterRequest, resp: Response) {
    try {
      const posts = await getRepository(Post).find();

      return resp.status(200).json(posts);
    } catch (err) {
      return resp.status(400).json(err);
    }
  },
};
