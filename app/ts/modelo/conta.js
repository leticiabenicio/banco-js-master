var Conta = /** @class */ (function () {
    function Conta(numero, saldo) {
        if (saldo === void 0) { saldo = 0; }
        this.saldo = saldo;
        this._numero = numero;
    }
    Object.defineProperty(Conta.prototype, "numero", {
        get: function () {
            return this._numero;
        },
        enumerable: false,
        configurable: true
    });
    Conta.prototype.getSaldo = function () {
        return this.saldo;
    };
    Conta.prototype.debitar = function (valor) {
        if (this.saldo >= valor) {
            this.saldo -= valor;
        }
    };
    Conta.prototype.creditar = function (valor) {
        this.saldo += valor;
    };
    Conta.prototype.transferir = function (destino, valor) {
        this.debitar(valor);
        destino.creditar(valor);
    };
    return Conta;
}());
