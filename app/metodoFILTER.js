const botoes = document.querySelectorAll(".btn");
botoes.forEach((btn) => btn.addEventListener("click", filtrarLivros));

function filtrarLivros() {
  const elementoBtn = document.getElementById(this.id);
  const categoria = elementoBtn.value;
  let livrosFiltrados =
    categoria == "disponivel"
      ? fitroDisponibilidade()
      : filtroCategoria(categoria);
  exibirLivrosNaTela(livrosFiltrados);
  if (categoria == "disponivel") {
    const valorTotal = ValorTotalDISPONIVEIS(livrosFiltrados)
    exibirValorTotal(valorTotal);  }}

function filtroCategoria(categoria) {
  return livros.filter((livro) => livro.categoria == categoria);}

function fitroDisponibilidade() {
  return livros.filter((livro) => livro.quantidade > 0);}

function exibirValorTotal(valorTotal) {
  valorTotalLivrosDisponiveis.innerHTML = `
  <div class="livros__disponiveis">
      <p>Todos os livros disponíveis por R$ <span id="valor">${valorTotal}</span></p>
    </div>
    `;}
