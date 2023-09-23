function aplicarDesconto(livros) {
  const desconto = 0.3;
  livroscomDesconto = livros.map((livro) => {
    return { ...livro, preco: livro.preco - livro.preco * desconto };  });

  return livroscomDesconto;}
