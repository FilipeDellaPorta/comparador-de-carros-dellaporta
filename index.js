const listaCarros = ['Silverado', 'F-150', 'Ram 1500'];
const carrosInput = document.querySelectorAll('.carro-input');

carrosInput.forEach((carro) => {
  const elementoPaiDoCarrosInput = carro.closest('.principal__cards');
  carroClicado(carro, elementoPaiDoCarrosInput);
});

function carroClicado(carro, input) {
  const listaSugerida = input.querySelector('.lista-sugerida');
  carro.addEventListener('input', () => {
    const carroDigitado = carro.value.toLowerCase();
    const sugestoes = filtrarCarros(carroDigitado);
    carregarLista(sugestoes, carroDigitado, carro, listaSugerida);
  });
}
  
function filtrarCarros(carroDigitado) {
  return listaCarros.filter((carro) =>
    carro.toLowerCase().includes(carroDigitado)
  );
}

function carregarLista(sugestoes, carroDigitado, carro, listaSugerida) {
  listaSugerida.innerHTML = '';

  if (sugestoes.length > 0 && carroDigitado !== '') {
    sugestoes.forEach((sugestao) => {
      const itemLista = document.createElement('li');
      itemLista.textContent = sugestao;
      itemLista.onclick = () => {
        carro.value = sugestao;
        listaSugerida.style.display = 'none';
      };
      listaSugerida.appendChild(itemLista);
    });
    listaSugerida.style.display = 'block';
  } else {
    listaSugerida.style.display = 'none';
  }
}
