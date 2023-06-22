import { Request, Response } from "express";
import UserModel from "./UserModel";
import { iUser } from "./interfaces/User";

class UserController {
  async finduser(req: Request, res: Response) {
    const user: iUser = req.body;

    // const resp = await UserModel.createUser(user);

    res.status(200);
    // res.json({ resp });
  }
}

export default new UserController();
