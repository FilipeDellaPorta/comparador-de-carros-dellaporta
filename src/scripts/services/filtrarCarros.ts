import listaCarros from '../../json/lista-carros.js';

function filtrarCarros(carroDigitadoNoInput: HTMLInputElement) {
  const carroDigitado = carroDigitadoNoInput.value.toLowerCase();
  return listaCarros.filter((carroDaLista) =>
    carroDaLista.carro.toLowerCase().includes(carroDigitado)
  );
}

export default filtrarCarros;
