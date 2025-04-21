import visibilidadeDaLixeira from './visibilidadeDaLixeira.js';
import filtrarCarros from './filtrarCarros.js';
import criarItensNaListaDeSugestoes from './criarItensNaListaDeSugestoes.js';
function carregarLista(carro, input) {
    const listaSugerida = input.querySelector('.lista-sugerida');
    const lixeira = input.querySelector('.icone-lixeira');
    if (listaSugerida instanceof HTMLElement && lixeira instanceof HTMLElement) {
        listaSugerida.style.display = 'none';
        listaSugerida.innerHTML = '';
        visibilidadeDaLixeira(carro, lixeira);
        const sugestoes = filtrarCarros(carro);
        if (sugestoes.length > 0 && carro.value !== '') {
            criarItensNaListaDeSugestoes(sugestoes, listaSugerida, carro);
        }
        else {
            listaSugerida.style.display = 'none';
        }
    }
}
export default carregarLista;
