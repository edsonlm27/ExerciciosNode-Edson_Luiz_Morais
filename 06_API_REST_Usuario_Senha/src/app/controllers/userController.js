import { getUsuarios } from "../database/conexao.js";

class userController {
  index(req, res) {
    res.status(200).send(getUsuarios());
  }
}

export default new userController();
