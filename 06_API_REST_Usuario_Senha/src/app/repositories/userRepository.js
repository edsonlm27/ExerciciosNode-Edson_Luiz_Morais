import { getUsuarios } from "../database/conexao.js";

class userRepository {
  findAll() {
    return getUsuarios();
  }
}

export default new userRepository();
