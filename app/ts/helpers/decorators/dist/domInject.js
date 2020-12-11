"use strict";
exports.__esModule = true;
exports.DomInject = void 0;
function DomInject(seletor) {
    return function (target, key) {
        var elemento;
        var getter = function () {
            if (!elemento) {
                console.log("buscando  " + seletor + " para injetar em " + key);
                elemento = $(seletor);
            }
            return elemento;
        };
        Object.defineProperty(target, key, {
            get: getter
        });
    };
}
exports.DomInject = DomInject;
