const listaCarros = ['Silverado', 'F-150', 'Ram 1500'];

verificarCardCarro();
limparCampo();

function verificarCardCarro() {
  const carrosInput = document.querySelectorAll('.carro-input');
  const carros = Array.from(carrosInput);
  carros.forEach((carro) => {
    ouvirInputCarro(carro);
  });
}

function ouvirInputCarro(carro) {
  const input = carro.closest('.principal__cards');
  const debounceCarregarLista = debounce(() => {
    carregarLista(carro, input);
  }, 100);
  carro.addEventListener('input', debounceCarregarLista);
}

/*sugestão do chat gpt para evitar múltiplas chamadas enquanto o carro é digitado no input*/
function debounce(func, delay = 300) {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      func(...args);
    }, delay);
  };
}

function carregarLista(carro, input) {
  const listaSugerida = input.querySelector('.lista-sugerida');
  const lixeira = input.querySelector('.icone-lixeira');
  listaSugerida.style.display = 'none';
  listaSugerida.innerHTML = '';
  visibilidadeDaLixeira(carro, lixeira);
  const sugestoes = filtrarCarros(carro);
  if (sugestoes.length > 0 && carro.value !== '') {
    criarItensNaListaDeSugestoes(sugestoes, listaSugerida, carro);
  } else {
    listaSugerida.style.display = 'none';
  }
}

function visibilidadeDaLixeira(carro, lixeira) {
  if (carro.value.trim() !== '') {
    lixeira.hidden = false;
  } else {
    lixeira.hidden = true;
  }
}

function filtrarCarros(carro) {
  const carroDigitado = carro.value.toLowerCase();
  return listaCarros.filter((carro) =>
    carro.toLowerCase().includes(carroDigitado)
  );
}

function criarItensNaListaDeSugestoes(sugestoes, listaSugerida, carro) {
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
}

function limparCampo() {
  const iconesLixeiras = document.querySelectorAll('.icone-lixeira');
  iconesLixeiras.forEach((lixeira) => {
    lixeira.addEventListener('click', () => {
      const deQualCard = lixeira.closest('.principal__cards');
      const carroInputado = deQualCard.querySelector('.carro-input');
      if (carroInputado) {
        carroInputado.value = '';
        carroInputado.focus();
        visibilidadeDaLixeira(carroInputado, lixeira);
      }
    });
  });
}
