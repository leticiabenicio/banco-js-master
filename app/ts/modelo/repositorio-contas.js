var RepositorioContas = /** @class */ (function () {
    function RepositorioContas() {
        this.contas = new Array();
    }
    RepositorioContas.prototype.adicionar = function (conta) {
        this.contas.push(conta);
    };
    RepositorioContas.prototype.pesquisar = function (numero) {
        return this.contas.find(function (conta) { return conta.numero === numero; });
    };
    RepositorioContas.prototype.getContas = function () {
        return this.contas;
    };
    RepositorioContas.prototype.remover = function (numero) {
        var contaARemover = this.pesquisar(numero);
        if (contaARemover) {
            var indiceARemover = this.contas.indexOf(contaARemover);
            if (indiceARemover > -1) {
                this.contas.splice(indiceARemover, 1);
            }
        }
    };
    return RepositorioContas;
}());
