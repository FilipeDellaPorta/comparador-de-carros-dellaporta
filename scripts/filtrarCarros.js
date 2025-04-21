const listaCarros = ['Silverado', 'F-150', 'Ram 1500'];

function filtrarCarros(carro) {
  const carroDigitado = carro.value.toLowerCase();
  return listaCarros.filter((carro) =>
    carro.toLowerCase().includes(carroDigitado)
  );
}

export default filtrarCarros;
