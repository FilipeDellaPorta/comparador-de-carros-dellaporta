import visibilidadeDaLixeira from './visibilidadeDaLixeira.js';

function limparCampo() {
  const iconesLixeiras = document.querySelectorAll('.icone-lixeira');
  iconesLixeiras.forEach((lixeira) => {
    lixeira.addEventListener('click', () => {
      const deQualCard = lixeira.closest('.principal__cards');
      if (deQualCard instanceof HTMLElement) {
        const carroInputado = deQualCard.querySelector('.carro-input');
        if (carroInputado instanceof HTMLInputElement) {
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
