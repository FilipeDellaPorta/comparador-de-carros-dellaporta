import filtrarCarros from '../services/filtrarCarros.js';
import criarItensNaListaDeSugestoes from './criarItensNaListaDeSugestoes.js';
function carregarLista(ehDeQualDiv, carro) {
    const listaSugerida = ehDeQualDiv.querySelector('.lista-sugerida');
    listaSugerida.style.display = 'none';
    listaSugerida.innerHTML = '';
    const sugestoes = filtrarCarros(carro);
    if (sugestoes.length > 0 && carro.value !== '') {
        criarItensNaListaDeSugestoes(sugestoes, listaSugerida, carro);
    }
    else {
        listaSugerida.style.display = 'none';
    }
}
export default carregarLista;
