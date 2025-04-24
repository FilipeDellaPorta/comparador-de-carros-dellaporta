import carregarLista from '../components/carregarLista.js';
import ehDeQualCard from '../utils/ehDeQualCard.js';
function ouvirInputCarro() {
    const carrosInput = document.querySelectorAll('.carro-input');
    const carros = Array.from(carrosInput);
    carros.forEach((carro) => {
        if (carro instanceof HTMLInputElement) {
            const ehDeQualDiv = ehDeQualCard(carro);
            if (ehDeQualDiv instanceof HTMLElement) {
                carro.addEventListener('input', () => carregarLista(ehDeQualDiv));
            }
        }
    });
}
export default ouvirInputCarro;
