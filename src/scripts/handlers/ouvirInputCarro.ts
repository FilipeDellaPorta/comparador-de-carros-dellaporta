import debounce from '../utils/debounce.js';
import carregarLista from '../components/carregarLista.js';

function ouvirInputCarro(carro: HTMLInputElement) {
  const input = carro.closest('.principal__cards');
  const debounceCarregarLista = debounce(() => {
    if (input instanceof HTMLElement) {
      carregarLista(carro, input);
    }
  }, 100);
  carro.addEventListener('input', debounceCarregarLista);
}

export default ouvirInputCarro;
