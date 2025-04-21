import debounce from '../utils/debounce.js';
import carregarLista from '../components/carregarLista.js';

function ouvirInputCarro(carroDigitadoNoInput: HTMLInputElement) {
  const deQualCard = carroDigitadoNoInput.closest('.principal__cards');
  const debounceCarregarLista = debounce(() => {
    if (deQualCard instanceof HTMLElement) {
      carregarLista(carroDigitadoNoInput, deQualCard);
    }
  }, 100);
  carroDigitadoNoInput.addEventListener('input', debounceCarregarLista);
}

export default ouvirInputCarro;
