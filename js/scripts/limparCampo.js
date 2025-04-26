import ehDeQualCard from './ehDeQualCard.js';
import resetarCampos from './resetarCampos.js';
import visibilidadeLixeira from './visibilidadeLixeira.js';
function limparCampo() {
  const iconesLixeiras = document.querySelectorAll('.icone-lixeira');
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
