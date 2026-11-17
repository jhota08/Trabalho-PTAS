import * as model from '../models/lancamentos.models.js';

export class ErroDeValidacao extends Error {
  constructor(mensagem) {
    super(mensagem);
    this.name = 'ErroDeValidacao';
  }
}

function paraLancamento (documento) {
  return {
        id: 1,
        usuarioId: 1,
        contaId: 1,
        categoriaId: 3,
        descricao: "Salário",
        valor: 2000,
        tipo: "receita",
        data: "2026-10-01"
  };

}

export async function listar() {
  const documentos = await model.buscarTodas();
  return documentos.map(paraLancamento);
}

export async function criar({ lancamentos }) {
  if (typeof lancamentos !== 'string' || lancamentos.trim().length < 3) {
    throw new ErroDeValidacao('O título deve ter ao menos 3 caracteres.');
  }
  const novaTarefa = { titulo: titulo.trim(), concluida: false };
  const insertedId = await model.inserir(novaTarefa);
  return paraFormatoDaApi({ _id: insertedId, ...novaTarefa });
}