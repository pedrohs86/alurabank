"use strict";
exports.__esModule = true;
exports.NegociacaoService = void 0;
var index_1 = require("../models/index");
var NegociacaoService = /** @class */ (function () {
    function NegociacaoService() {
    }
    NegociacaoService.prototype.obterNegociacoes = function (handler) {
        return fetch('http://localhost:8080/dados')
            .then(function (res) { return handler(res); })
            .then(function (res) { return res.json(); })
            .then(function (dados) {
            return dados
                .map(function (dado) { return new index_1.Negociacao(new Date(), dado.vezes, dado.montante); });
        })["catch"](function (err) {
            console.log(err);
            throw new Error('Não foi possível importar as negociações');
        });
    };
    return NegociacaoService;
}());
exports.NegociacaoService = NegociacaoService;
