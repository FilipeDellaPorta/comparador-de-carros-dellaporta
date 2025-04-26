import carregarLista from '../components/carregarLista.js';
import ehDeQualCard from '../utils/ehDeQualCard.js';
import limparCampos from '../utils/limparCampos.js';
import visibilidadeLixeira from '../utils/visibilidadeLixeira.js';
function ouvirInputCarro() {
    const carrosInput = document.querySelectorAll('.carro-input');
    const carros = Array.from(carrosInput);
    carros.forEach((carro) => {
        if (carro instanceof HTMLInputElement) {
            const ehDeQualDiv = ehDeQualCard(carro);
            const lixeira = ehDeQualDiv.querySelector('.icone-lixeira');
            carro.addEventListener('input', () => {
                if (carro.value.trim() === '') {
                    limparCampos(carro, ehDeQualDiv);
                    visibilidadeLixeira(carro, lixeira);
                }
                else {
                    carregarLista(ehDeQualDiv, carro);
                    visibilidadeLixeira(carro, lixeira);
                }
            });
        }
    });
}
export default ouvirInputCarro;
