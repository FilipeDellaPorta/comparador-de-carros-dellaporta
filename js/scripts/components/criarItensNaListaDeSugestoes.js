import preencherInfoDoCardDoCarro from './preencherInfoDoCardDoCarro.js';
function criarItensNaListaDeSugestoes(sugestoes, listaSugerida, carro) {
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
