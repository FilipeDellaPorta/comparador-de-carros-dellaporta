import debounce from './debounce.js';
import carregarLista from './carregarLista.js';
function ouvirInputCarro(carro) {
    const input = carro.closest('.principal__cards');
    const debounceCarregarLista = debounce(() => {
        if (input instanceof HTMLElement) {
            carregarLista(carro, input);
        }
    }, 100);
    carro.addEventListener('input', debounceCarregarLista);
}
export default ouvirInputCarro;
