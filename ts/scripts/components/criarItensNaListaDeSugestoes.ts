import { Carro } from '../types/carro.js';
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
      const inputs = document.querySelectorAll(
        '.carro-input'
      ) as NodeListOf<HTMLInputElement>;
      preencherInfoDoCardDoCarro(sugestao, carro);
    };
    listaSugerida.appendChild(itemLista);
  });
  listaSugerida.style.display = 'block';
}
export default criarItensNaListaDeSugestoes;
