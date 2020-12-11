"use strict";
exports.__esModule = true;
var NegociacaoController_1 = require("./controllers/NegociacaoController");
var controller = new NegociacaoController_1.NegociacaoController();
$('.form').submit(controller.adiciona.bind(controller));
$('#botao-importa').click(controller.importaDados.bind(controller));
