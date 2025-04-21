import ouvirInputCarro from './js/ouvirInputCarro.js';

function verificarCardCarro() {
  const carrosInput = document.querySelectorAll('.carro-input');
  const carros = Array.from(carrosInput);
  carros.forEach((carro) => {
    ouvirInputCarro(carro);
  });
}

export default verificarCardCarro;
