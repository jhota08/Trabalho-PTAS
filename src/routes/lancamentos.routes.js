import { Router } from 'express';
import * as controller from "../controllers/lancamentos.controller.js"

const roteador = Router();

let lancamentos = {
    
        id: 1,
        usuarioId: 1,
        contaId: 1,
        categoriaId: 3,
        descricao: "Salário",
        valor: 2000,
        tipo: "receita",
        data: "2026-10-01"
};

roteador.get('/', controller.listarTodos());

roteador.post('/', (req, res) => {
    const novolancamento = {
        id: lancamentos.length + 1,
        usuarioId: req.body.usuarioId,
        contaId: req.body.contaId,
        categoriaId: req.body.categoriaId,
        descricao: req.body.descricao,
        valor: req.body.valor,
        tipo: req.body.tipo,
        data: req.body.data
    };

    categorias.push(novolancamento);

    res.status(201).json(novolancamento);
});

roteador.get('/:id', (req, res) => {
    const id = parseInt(req.params.id);

    const lancamentos = lancamentos.find(l => l.id === id);

    if (!lancamentos) {
        return res.status(404).json({
            erro: "lancamento não encontrado"
        });
    }

    res.json(lancamento);
});

export default roteador;