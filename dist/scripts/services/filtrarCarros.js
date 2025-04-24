import listaCarros from './lista-carros.js';
function filtrarCarros(carroDigitadoNoInput) {
    const carroDigitado = carroDigitadoNoInput.value.toLowerCase();
    return listaCarros.filter((carroDaLista) => carroDaLista.carro.toLowerCase().includes(carroDigitado));
}
export default filtrarCarros;
