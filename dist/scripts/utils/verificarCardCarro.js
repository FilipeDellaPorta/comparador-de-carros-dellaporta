import ouvirInputCarro from '../handlers/ouvirInputCarro.js';
function verificarCardCarro() {
    const carrosInput = document.querySelectorAll('.carro-input');
    const carros = Array.from(carrosInput);
    carros.forEach((carro) => {
        if (carro instanceof HTMLInputElement) {
            ouvirInputCarro(carro);
        }
    });
}
export default verificarCardCarro;
