var ContaController = /** @class */ (function () {
    function ContaController() {
        this.repositorioContas = new RepositorioContas();
    }
    ContaController.prototype.adicionarConta = function (conta) {
        this.repositorioContas.adicionar(conta);
    };
    ContaController.prototype.listar = function () {
        var _this = this;
        this.repositorioContas.getContas().forEach(function (conta) {
            return _this.inserirContaNoHTML(conta);
        });
    };
    ContaController.prototype.inserir = function (evento) {
        evento.preventDefault();
        var elementoNumero = document.querySelector('#numero');
        var elementoSaldo = document.querySelector('#saldo');
        var conta = new Conta(elementoNumero.value, Number(elementoSaldo.value));
        this.repositorioContas.adicionar(conta);
        this.inserirContaNoHTML(conta);
    };
    ContaController.prototype.inserirContaNoHTML = function (conta) {
        var _this = this;
        var elementoP = document.createElement('p');
        elementoP.textContent = 'Conta ' + conta.numero + ': ' + conta.getSaldo();
        var botaoApagar = document.createElement('button');
        botaoApagar.textContent = 'X';
        botaoApagar.addEventListener('click', function (event) {
            _this.repositorioContas.remover(conta.numero);
            event.target.parentElement.remove();
        });
        elementoP.appendChild(botaoApagar);
        document.body.appendChild(elementoP);
    };
    return ContaController;
}());
