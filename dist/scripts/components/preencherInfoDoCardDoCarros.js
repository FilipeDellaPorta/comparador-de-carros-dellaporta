import ehDeQualCard from "../utils/ehDeQualCard.js";
function preencherInfoDoCardDoCarro(sugestao, carro) {
    const infoDeQualCarro = ehDeQualCard(carro);
    if (infoDeQualCarro) {
        const infoDoCarroNoInput = infoDeQualCarro.querySelector('.plus');
        if (infoDoCarroNoInput) {
            infoDoCarroNoInput.textContent = `Motor: ${sugestao.motor}`;
        }
    }
}
export default preencherInfoDoCardDoCarro;
