import visibilidadeDaLixeira from '../utils/visibilidadeDaLixeira.js';

function limparCampo() {
  const iconesLixeiras = document.querySelectorAll('.icone-lixeira');
  iconesLixeiras.forEach((lixeira) => {
    lixeira.addEventListener('click', () => {
      const deQualCard = lixeira.closest('.principal__cards');
      if (deQualCard instanceof HTMLElement) {
        const carroInputado = deQualCard.querySelector('.carro-input');
        const infoCarro = deQualCard.querySelector('.plus');
        if (
          carroInputado instanceof HTMLInputElement &&
          infoCarro instanceof HTMLSpanElement
        ) {
          infoCarro.textContent = '';
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
