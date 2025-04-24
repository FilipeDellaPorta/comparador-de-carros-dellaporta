import { Carro } from '../interfaces/carro.js';
import preencherInfoDoCardDoCarro from './preencherInfoDoCardDoCarros.js';

function criarItensNaListaDeSugestoes(
  sugestoes: Carro[],
  listaSugerida: HTMLElement,
  carro: HTMLInputElement
) {
  sugestoes.forEach((sugestao) => {
    const itemLista = document.createElement('li');
    itemLista.textContent = sugestao.carro;
    itemLista.onclick = () => {
      carro.value = sugestao.carro;
      listaSugerida.style.display = 'none';

      preencherInfoDoCardDoCarro(sugestao, carro);
    };
    listaSugerida.appendChild(itemLista);
  });
  listaSugerida.style.display = 'block';
}

export default criarItensNaListaDeSugestoes;
