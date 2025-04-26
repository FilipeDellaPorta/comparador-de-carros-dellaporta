import ehDeQualCard from '../utils/ehDeQualCard.js';
import limparCampos from '../utils/limparCampos.js';
import visibilidadeLixeira from '../utils/visibilidadeLixeira.js';
function ouvirQualLixeira() {
    const iconesLixeiras = document.querySelectorAll('.icone-lixeira');
    iconesLixeiras.forEach((lixeira) => {
        lixeira.addEventListener('click', () => {
            const deQualDiv = ehDeQualCard(lixeira);
            const carro = deQualDiv.querySelector('.carro-input');
            limparCampos(carro, deQualDiv);
            if (lixeira instanceof HTMLElement) {
                visibilidadeLixeira(carro, lixeira);
            }
        });
    });
}
export default ouvirQualLixeira;
