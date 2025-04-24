import preencherInfoDoCardDoCarro from './preencherInfoDoCardDoCarros.js'

function criarItensNaListaDeSugestoes(
  sugestoes: { carro: string; motor: string }[],
  listaSugerida: HTMLElement,
  carroDigitadoNoInput: HTMLInputElement
) {
  sugestoes.forEach((sugestao) => {
    const itemLista = document.createElement('li');
    itemLista.textContent = sugestao.carro;
    itemLista.onclick = () => {
      carroDigitadoNoInput.value = sugestao.carro;
      listaSugerida.style.display = 'none';

      preencherInfoDoCardDoCarro(sugestao, carroDigitadoNoInput)
    };
    listaSugerida.appendChild(itemLista);
  });
  listaSugerida.style.display = 'block';
}

export default criarItensNaListaDeSugestoes;
