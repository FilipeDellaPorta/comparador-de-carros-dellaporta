function criarItensNaListaDeSugestoes(sugestoes, listaSugerida, carroDigitadoNoInput) {
    sugestoes.forEach((sugestao) => {
        const itemLista = document.createElement('li');
        itemLista.textContent = sugestao;
        itemLista.onclick = () => {
            carroDigitadoNoInput.value = sugestao;
            listaSugerida.style.display = 'none';
        };
        listaSugerida.appendChild(itemLista);
    });
    listaSugerida.style.display = 'block';
}
export default criarItensNaListaDeSugestoes;
