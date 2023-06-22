import { Request, Response } from "express";
import { sigup } from "./interfaces/sigup";
import AuthModule from "./AuthModule";

class AuthController {
  async signup(req: Request, res: Response) {
    const user: sigup = req.body;

    const resp = await AuthModule.signup(user);

    res.status(200);
    res.json({ resp });
  }

  async signin() {}
}

export default new AuthController();
