System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function DomInject(seletor) {
        return function (target, key) {
            let elemento;
            const getter = function () {
                if (!elemento) {
                    console.log(`buscando  ${seletor} para injetar em ${key}`);
                    elemento = $(seletor);
                }
                return elemento;
            };
            Object.defineProperty(target, key, {
                get: getter
            });
        };
    }
    exports_1("DomInject", DomInject);
    return {
        setters: [],
        execute: function () {
        }
    };
});
