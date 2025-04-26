import carregarLista from '../components/carregarLista.js';
import ehDeQualCard from './ehDeQualCard.js';
import resetarCampos from './resetarCampos.js';
import visibilidadeLixeira from './visibilidadeLixeira.js';
function ouvirInputCarro() {
  const carrosInput = document.querySelectorAll('.carro-input');
  const carros = Array.from(carrosInput);
  carros.forEach((carro) => {
    if (carro instanceof HTMLInputElement) {
      const ehDeQualDiv = ehDeQualCard(carro);
      const lixeira = ehDeQualDiv.querySelector('.icone-lixeira');
      carro.addEventListener('input', () => {
        if (carro.value.trim() === '') {
          resetarCampos(carro, ehDeQualDiv);
          visibilidadeLixeira(carro, lixeira);
        } else {
          carregarLista(ehDeQualDiv, carro);
          visibilidadeLixeira(carro, lixeira);
        }
      });
    }
  });
}
export default ouvirInputCarro;
