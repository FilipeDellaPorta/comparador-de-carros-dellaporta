import visibilidadeDaLixeira from '../utils/visibilidadeDaLixeira.js';
import filtrarCarros from '../services/filtrarCarros.js';
import criarItensNaListaDeSugestoes from './criarItensNaListaDeSugestoes.js';

function carregarLista(carroDigitadoNoInput: HTMLInputElement, deQualCard: HTMLElement) {
  const listaSugerida = deQualCard.querySelector('.lista-sugerida');
  const lixeira = deQualCard.querySelector('.icone-lixeira');
  if (listaSugerida instanceof HTMLElement && lixeira instanceof HTMLElement) {
    listaSugerida.style.display = 'none';
    listaSugerida.innerHTML = '';
    visibilidadeDaLixeira(carroDigitadoNoInput, lixeira);
    const sugestoes = filtrarCarros(carroDigitadoNoInput);
    if (sugestoes.length > 0 && carroDigitadoNoInput.value !== '') {
      criarItensNaListaDeSugestoes(sugestoes, listaSugerida, carroDigitadoNoInput);
    } else {
      listaSugerida.style.display = 'none';
    }
  }
}

export default carregarLista;
