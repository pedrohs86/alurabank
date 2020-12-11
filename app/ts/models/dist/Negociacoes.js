"use strict";
exports.__esModule = true;
exports.Negociacoes = void 0;
var Negociacoes = /** @class */ (function () {
    function Negociacoes() {
        this._negociacoes = [];
    }
    Negociacoes.prototype.adiciona = function (negociacao) {
        this._negociacoes.push(negociacao);
    };
    Negociacoes.prototype.paraArray = function () {
        return [].concat(this._negociacoes);
    };
    Negociacoes.prototype.paraTexto = function () {
        console.log('-- paraTexto --');
        console.log(JSON.stringify(this._negociacoes));
    };
    Negociacoes.prototype.ehIgual = function (objeto) {
        return JSON.stringify(this._negociacoes) === JSON.stringify(objeto);
    };
    return Negociacoes;
}());
exports.Negociacoes = Negociacoes;
