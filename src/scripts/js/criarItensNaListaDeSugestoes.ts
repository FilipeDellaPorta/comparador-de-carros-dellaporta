function criarItensNaListaDeSugestoes(
  sugestoes: string[],
  listaSugerida: HTMLElement,
  carro: HTMLInputElement
) {
  sugestoes.forEach((sugestao) => {
    const itemLista = document.createElement('li');
    itemLista.textContent = sugestao;
    itemLista.onclick = () => {
      carro.value = sugestao;
      listaSugerida.style.display = 'none';
    };
    listaSugerida.appendChild(itemLista);
  });
  listaSugerida.style.display = 'block';
}

export default criarItensNaListaDeSugestoes;
