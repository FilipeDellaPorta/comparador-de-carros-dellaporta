import ehDeQualCard from '../utils/ehDeQualCard.js';
import resetarCampos from '../utils/resetarCampos.js';
import visibilidadeLixeira from '../utils/visibilidadeLixeira.js';

function limparCampo() {
  const iconesLixeiras = document.querySelectorAll('.icone-lixeira');
  iconesLixeiras.forEach((lixeira) => {
    lixeira.addEventListener('click', () => {
      const deQualDiv = ehDeQualCard(lixeira);
      if (deQualDiv instanceof HTMLElement) {
        const carro = deQualDiv.querySelector('.carro-input');
        if (carro instanceof HTMLInputElement) {
          resetarCampos(carro, deQualDiv);
          if (lixeira instanceof HTMLElement) {
            visibilidadeLixeira(carro, lixeira);
          }
        }
      }
    });
  });
}

export default limparCampo;
