"use strict";
exports.__esModule = true;
exports.throttle = void 0;
function throttle(milissegundos) {
    if (milissegundos === void 0) { milissegundos = 500; }
    return function (target, propertyKey, descriptor) {
        var metodoOriginal = descriptor.value;
        var timer = 0;
        descriptor.value = function () {
            var _this = this;
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            if (event)
                event.preventDefault();
            clearInterval(timer);
            timer = setTimeout(function () { return metodoOriginal.apply(_this, args); }, milissegundos);
        };
        return descriptor;
    };
}
exports.throttle = throttle;
