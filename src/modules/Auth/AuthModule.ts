import { AppDataSource } from "../../database/data-source";
import UserModel from "../User/UserModel";
import { iUser } from "../User/interfaces/User";
import { sigup } from "./interfaces/sigup";

class AuthModel {
  async signup(userInfo: sigup) {
    try {
      const findOneByEmailResp = await UserModel.findOne(
        "email",
        userInfo.email
      );

      if (findOneByEmailResp.status === "error") {
        console.log(findOneByEmailResp);
        return findOneByEmailResp;
      }

      const isEmailRegistered = findOneByEmailResp.result as iUser[];

      if (isEmailRegistered.length !== 0) {
        return {
          status: "error",
          message: "E-mail já registrado na base de dados",
          code: 406,
        };
      }
      await AppDataSource.query(
        `
                INSERT INTO
                    api_ts.users
                (name, email, pass, phone)
                    VALUES ('${userInfo.name}','${userInfo.email}','${userInfo.password}','${userInfo.phone}')
                `
      );

      return {
        status: "success",
        message: "Cadastro realizado com sucesso!",
      };
    } catch (error) {}
  }
}

export default new AuthModel();
