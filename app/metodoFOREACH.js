const elementoInsereLivros = document.getElementById("livros");
const valorTotalLivrosDisponiveis = document.getElementById(
  "valor_total_livros_disponiveis");

function exibirLivrosNaTela(listaDeLivros) {
  valorTotalLivrosDisponiveis.innerHTML = "";
  elementoInsereLivros.innerHTML = "";
  listaDeLivros.forEach((livro) => {
    let disponibilidade = verificaEstoque(livro);
    elementoInsereLivros.innerHTML += `
    
    <div class="livro">
      <img class="${disponibilidade}" src="${livro.imagem}"
        alt="${livro.alt}" />
      <h2 class="livro__titulo">
      ${livro.titulo}
      </h2>
      <p class="livro__descricao">${livro.autor}</p>
      <p class="livro__preco" id="preco">R$${livro.preco.toFixed(2)}</p>
      <div class="tags">
        <span class="tag">${livro.categoria}</span>
      </div>
    </div>    `;  });}

// verifica se a quantidade de livros é maior que 0 e adiciona na classe o seletor CSS correto
function verificaEstoque(livro) {
  if (livro.quantidade > 0) {
    return "livro__imagens"; } 
  else {
    return "livro__imagens indisponivel";  }}
