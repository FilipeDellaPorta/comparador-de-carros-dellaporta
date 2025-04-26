import filtrarCarros from '../services/filtrarCarros.js';
import { Carro } from '../types/carro.js';
import criarItensNaListaDeSugestoes from './criarItensNaListaDeSugestoes.js';
function carregarLista(ehDeQualDiv: HTMLElement, carro: HTMLInputElement) {
  const listaSugerida = ehDeQualDiv.querySelector('.lista-sugerida') as HTMLElement;
  listaSugerida.style.display = 'none';
  listaSugerida.innerHTML = '';
  const sugestoes = filtrarCarros(carro) as Carro[];
  if (sugestoes.length > 0 && carro.value !== '') {
    criarItensNaListaDeSugestoes(sugestoes, listaSugerida, carro);
  } else {
    listaSugerida.style.display = 'none';
  }
}
export default carregarLista;
