"use strict";
exports.__esModule = true;
exports.logarTempoDeExecucao = void 0;
function logarTempoDeExecucao(emSegundos) {
    if (emSegundos === void 0) { emSegundos = false; }
    return function (target, propertyKey, descriptor) {
        var metodoOriginal = descriptor.value;
        descriptor.value = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            var divisor = 1;
            var unidade = 'milisegundos';
            if (emSegundos) {
                divisor = 1000;
                unidade = 'segundos';
            }
            console.log('-----------------------');
            console.log("Par\u00E2metros do m\u00E9todo " + propertyKey + ": " + JSON.stringify(args));
            var t1 = performance.now();
            var resultado = metodoOriginal.apply(this, args);
            console.log("Resultado do m\u00E9todo: " + JSON.stringify(resultado));
            var t2 = performance.now();
            console.log(propertyKey + " demorou " + (t2 - t1) / divisor + " " + unidade);
            console.log('-----------------------');
            return resultado;
        };
        return descriptor;
    };
}
exports.logarTempoDeExecucao = logarTempoDeExecucao;
