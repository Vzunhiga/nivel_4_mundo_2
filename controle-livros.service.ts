import { Injectable } from '@angular/core';
import { Livro } from './livro';

@Injectable({
  providedIn: 'root',
})
export class ControleLivrosService {
  private livros: Livro[]; 

  constructor() {
    this.livros = [
      new Livro(1, 1, 'Use a Cabeça: Java', 'Use a Cabeça: Java é uma experiência completa de aprendizado em programação orientada a objetos e Java', ['Bert Bates', 'Kathy Sierra']),
      new Livro(2, 2, 'Java, como Programar', 'Milhões de alunos e profissionais aprenderam programação e desenvolvimento de software com os livros de Deitel', ['Paul Deitel', 'Harvey Deitel']),
      new Livro(3, 1, 'Livro 3', 'Resumo do Livro 3', ['Autor 5', 'Autor 6']),
    ];
  }

  obterLivros(): Livro[] {
    return this.livros;
  }

  incluir(novoLivro: Livro): void {
    const codigos = this.livros.map((livro) => livro.codigo);
    const novoCodigo = Math.max(...codigos) + 1;

    novoLivro.codigo = novoCodigo;
    this.livros.push(novoLivro);
  }

  excluir(codigo: number): void {
    const indice = this.livros.findIndex((livro) => livro.codigo === codigo);
    if (indice !== -1) {
      this.livros.splice(indice, 1);
    }
  }
}