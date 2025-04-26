import listaCarros from './lista-carros.js';
function filtrarCarros(carro) {
    const carroDigitado = carro.value.toLowerCase();
    return listaCarros.filter((carroDaLista) => carroDaLista.carro.toLowerCase().includes(carroDigitado));
}
export default filtrarCarros;
