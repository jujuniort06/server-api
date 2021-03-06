"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var decorators_1 = require("../decorators");
var action_1 = require("../kernel/action");
var route_types_1 = require("../kernel/route-types");
var kernel_utils_1 = require("../kernel/kernel-utils");
var SaboresAction = /** @class */ (function (_super) {
    __extends(SaboresAction, _super);
    function SaboresAction() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SaboresAction.prototype.Get = function () {
        var tamanho = this.req.params.tamanho;
        new kernel_utils_1.KernelUtils().createExceptionApiError('1002', 'Tamanho da pizza não informado', (tamanho == null || tamanho == undefined));
        new kernel_utils_1.KernelUtils().createExceptionApiError('1003', 'Tamanho da pizza inválido', (tamanho < 1 || tamanho > 3));
        var pizzas = [];
        if (tamanho == 1) {
            pizzas.push(this.createPizzaObject('Calabresa', 12.00));
            pizzas.push(this.createPizzaObject('Quatro Queijos', 15.00));
            pizzas.push(this.createPizzaObject('Bacon', 13.00));
            pizzas.push(this.createPizzaObject('Chocolate', 14.00));
            pizzas.push(this.createPizzaObject('Brocolis', 16.00));
        }
        if (tamanho == 2) {
            pizzas.push(this.createPizzaObject('Calabresa', 18.00));
            pizzas.push(this.createPizzaObject('Quatro Queijos', 21.00));
            pizzas.push(this.createPizzaObject('Bacon', 19.00));
            pizzas.push(this.createPizzaObject('Chocolate', 20.00));
            pizzas.push(this.createPizzaObject('Brocolis', 22.00));
        }
        if (tamanho == 3) {
            pizzas.push(this.createPizzaObject('Calabresa', 25.00));
            pizzas.push(this.createPizzaObject('Quatro Queijos', 28.00));
            pizzas.push(this.createPizzaObject('Bacon', 26.00));
            pizzas.push(this.createPizzaObject('Chocolate', 27.00));
            pizzas.push(this.createPizzaObject('Brocolis', 29.00));
        }
        this.sendAnswer(pizzas);
    };
    SaboresAction.prototype.createPizzaObject = function (name, price) {
        return {
            sabor: name,
            preco: price
        };
    };
    SaboresAction.prototype.defineVisibility = function () {
        this.actionEscope = route_types_1.ActionType.atPublic;
    };
    __decorate([
        decorators_1.Get('/sabores/:tamanho'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], SaboresAction.prototype, "Get", null);
    return SaboresAction;
}(action_1.Action));
exports.SaboresAction = SaboresAction;
