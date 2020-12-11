"use strict";
exports.__esModule = true;
exports.View = void 0;
var View = /** @class */ (function () {
    function View(seletor, escapar) {
        if (escapar === void 0) { escapar = true; }
        this._elemento = $(seletor);
        this._escapar = escapar;
    }
    // @logarTempoDeExecucao(true)
    View.prototype.update = function (model) {
        var template = this.template(model);
        if (this._escapar)
            template = template.replace(/<script>[\s\S]*?<\/script>/, '');
        this._elemento.html(template);
    };
    return View;
}());
exports.View = View;
