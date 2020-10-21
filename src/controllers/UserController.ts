`--unhandled-rejections=strict`;

import { Request, Response } from "express";
import { getRepository } from "typeorm";
import User from "../entity/User";

interface MulterRequest extends Request {
  files: any;
}

export default {
  async create(req: Request, resp: Response) {
    const { email, name, password } = req.body;

    try {
      //verifica se o email ja existe
      await getRepository(User).findOneOrFail({
        email: email,
      });
      return resp.status(200).json({ error: "Esse email já foi registrado" });
    } catch (next) {
      //se o email não existir faz o tratamento para cria-lo
      const user = getRepository(User).create({ email, name, password });
      if (email != null && name != null && password != null) {
        await getRepository(User).save(user);
        return resp.status(200).json(user);
      } else {
        return resp
          .status(400)
          .json({ error: "Você não preencheu o formulario" });
      }
    }
  },

  async index(req: Request, resp: Response) {
    const { id_user } = req.params;

    try {
      const userRepository = getRepository(User);
      const user = await userRepository.findOneOrFail(id_user);
      console.log(user);
      return resp.status(200).json(user);
    } catch (err) {
      return resp.status(400).json({ error: "email não encontrado" });
    }
  },
  async show(req: Request, resp: Response) {
    try {
      const userRepository = getRepository(User);
      const user = await userRepository.find();

      return resp.status(200).json(user);
    } catch (err) {
      return resp.status(400).json({ error: "email não encontrado" });
    }
  },
};
