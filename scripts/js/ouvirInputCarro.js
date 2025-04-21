import debounce from '../utils/debounce.js';
import carregarLista from './carregarLista.js';

function ouvirInputCarro(carro) {
  const input = carro.closest('.principal__cards');
  const debounceCarregarLista = debounce(() => {
    carregarLista(carro, input);
  }, 100);
  carro.addEventListener('input', debounceCarregarLista);
}

export default ouvirInputCarro;
