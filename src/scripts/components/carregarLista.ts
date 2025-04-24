import visibilidadeDaLixeira from '../utils/visibilidadeDaLixeira.js';
import filtrarCarros from '../services/filtrarCarros.js';
import criarItensNaListaDeSugestoes from './criarItensNaListaDeSugestoes.js';

function carregarLista(ehDeQualDiv: HTMLElement) {
  const listaSugerida = ehDeQualDiv.querySelector('.lista-sugerida');
  const lixeira = ehDeQualDiv.querySelector('.icone-lixeira');
  const carro = ehDeQualDiv.querySelector('.carro-input');
  if (
    listaSugerida instanceof HTMLElement &&
    lixeira instanceof HTMLElement &&
    carro instanceof HTMLInputElement
  ) {
    listaSugerida.style.display = 'none';
    listaSugerida.innerHTML = '';
    visibilidadeDaLixeira(carro, lixeira);
    const sugestoes = filtrarCarros(carro);
    if (sugestoes.length > 0 && carro.value !== '') {
      criarItensNaListaDeSugestoes(sugestoes, listaSugerida, carro);
    } else {
      listaSugerida.style.display = 'none';
    }
  }
}

export default carregarLista;
