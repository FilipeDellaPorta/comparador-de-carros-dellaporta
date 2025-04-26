import ehDeQualCard from '../utils/ehDeQualCard.js';
import resetarCampos from '../utils/resetarCampos.js';
import visibilidadeLixeira from '../utils/visibilidadeLixeira.js';
function limparCampo() {
  const iconesLixeiras = document.querySelectorAll(
    '.icone-lixeira'
  ) as NodeListOf<HTMLElement>;
  iconesLixeiras.forEach((lixeira) => {
    lixeira.addEventListener('click', () => {
      const deQualDiv = ehDeQualCard(lixeira);
      const carro = deQualDiv.querySelector('.carro-input');
      resetarCampos(carro, deQualDiv);
      if (lixeira instanceof HTMLElement) {
        visibilidadeLixeira(carro, lixeira);
      }
    });
  });
}
export default limparCampo;
