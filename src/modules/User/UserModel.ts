import { iUser } from "./interfaces/User";
import { AppDataSource } from "../../database/data-source";

class UserModel {
  async findOne(columnName: string, value: string | number) {
    try {
      const clause =
        columnName === "email"
          ? `${columnName} = '${value}'`
          : `${columnName} = '${value}'`;

      const user: iUser[] = await AppDataSource.query(
        `
          SELECT 
            * 
          FROM 
            api_ts.users
          WHERE 
            ${clause}
        `
      );

      return {
        status: "success",
        message: "Usuário encontrado na base de dados!",
        result: user,
      };
    } catch (error) {
      const err = error as Error;

      console.log(err);

      return { status: "error", message: err, code: 500 };
    }
  }
}

export default new UserModel();
