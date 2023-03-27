class Pessoa {
    private _nome: string;
    private _idade: number;
    private _dataNascimento: Date;
  
    constructor(nome: string, idade: number, dataNascimento: Date) {
      this._nome = nome;
      this._idade = idade;
      this._dataNascimento = dataNascimento;
    }
  
    //getters

    get nome(): string {
      return this._nome;
    }
  
    get idade(): number {
      return this._idade;
    }
  
    get dataNascimento(): Date {
      return this._dataNascimento;
    }

    //setters

    set nome(novoNome: string) {
      this._nome = novoNome;
    }
  
    set idade(novaIdade: number) {
      this._idade = novaIdade;
    }
  
    set dataNascimento(novaDataNascimento: Date) {
      this._dataNascimento = novaDataNascimento;
    }
  }




