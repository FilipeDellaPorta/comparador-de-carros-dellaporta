import visibilidadeDaLixeira from './visibilidadeDaLixeira.js';

function limparCampo() {
  const iconesLixeiras = document.querySelectorAll('.icone-lixeira');
  iconesLixeiras.forEach((lixeira) => {
    lixeira.addEventListener('click', () => {
      const deQualCard = lixeira.closest('.principal__cards');
      const carroInputado = deQualCard.querySelector('.carro-input');
      if (carroInputado) {
        carroInputado.value = '';
        carroInputado.focus();
        visibilidadeDaLixeira(carroInputado, lixeira);
      }
    });
  });
}

export default limparCampo;
