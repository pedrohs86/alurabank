"use strict";
exports.__esModule = true;
exports.imprime = void 0;
function imprime() {
    var objetos = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        objetos[_i] = arguments[_i];
    }
    objetos.forEach(function (objeto) { return objeto.paraTexto(); });
}
exports.imprime = imprime;
