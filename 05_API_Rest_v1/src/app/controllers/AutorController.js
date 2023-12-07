import {
  buscarAutorPorId,
  buscarIndexAutorPorId,
  getAutors,
} from "../database/conexao.js";

class AutorController {
  // Listar tudo (get)
  index(req, res) {
    res.status(200).send(getAutors());
  }

  // Listar por Id (get by Id)
  show(req, res) {
    let autor = buscarAutorPorId(req.params.id);
    res.status(200).json(autor);
  }

  // Salvar novo registro (post)
  store(req, res) {
    autors.push(req.body);
    res.status(201).send("Autor cadastrado com sucesso!");
  }

  // Atualizar registro (update)
  update(req, res) {
    let indexAutor = buscarIndexAutorPorId(req.params.id);
    autors[indexAutor].nome = req.body.nome;
    autors[indexAutor].ano = req.body.ano;
    autors[indexAutor].contribuicao = req.body.contribuicao;
    res.status(200).json(autors[indexAutor]);
  }

  // Deletar registro (delete)
  delete(req, res) {
    let indexAutor = buscarIndexAutorPorId(req.params.id);
    autors.splice(indexAutor, 1);
    res.status(200).send(`Autor ${req.params.id} excluído com sucesso!`);
  }
}

// padrão Singleton (Design Patterns)
export default new AutorController();
