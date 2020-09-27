"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.IdCard = void 0;
var product_1 = require("./product");
var IdCard = /** @class */ (function (_super) {
    __extends(IdCard, _super);
    function IdCard(owner) {
        var _this = _super.call(this) || this;
        console.log(owner + "さんのカードを作ります。");
        _this.owner = owner;
        return _this;
    }
    IdCard.prototype.use = function () {
        console.log(this.owner + "さんのカードを使います。");
    };
    return IdCard;
}(product_1.Product));
exports.IdCard = IdCard;
