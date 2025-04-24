import ehDeQualCard from '../utils/ehDeQualCard.js';
import visibilidadeDaLixeira from '../utils/visibilidadeDaLixeira.js';

function limparCampo() {
  const iconesLixeiras = document.querySelectorAll('.icone-lixeira');
  iconesLixeiras.forEach((lixeira) => {
    lixeira.addEventListener('click', () => {
      const deQualDiv = ehDeQualCard(lixeira);
      if (deQualDiv instanceof HTMLElement) {
        const carroInputado = deQualDiv.querySelector('.carro-input');
        const infoCarro = deQualDiv.querySelector('.plus');
        const infoBorda = deQualDiv.querySelector('.car-slot');
        if (
          carroInputado instanceof HTMLInputElement &&
          infoCarro instanceof HTMLSpanElement &&
          infoBorda instanceof HTMLDivElement
        ) {
          infoCarro.textContent = '+';
          infoCarro.classList.remove('preenchido');
          infoBorda.classList.remove('hidden');
          carroInputado.value = '';
          carroInputado.focus();
          if (lixeira instanceof HTMLElement) {
            visibilidadeDaLixeira(carroInputado, lixeira);
          }
        }
      }
    });
  });
}

export default limparCampo;
