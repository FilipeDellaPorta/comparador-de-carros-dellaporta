import carregarLista from '../components/carregarLista.js';
import ehDeQualCard from '../utils/ehDeQualCard.js';
import resetarCampos from '../utils/resetarCampos.js';

function ouvirInputCarro() {
  const carrosInput = document.querySelectorAll('.carro-input');
  const carros = Array.from(carrosInput);
  carros.forEach((carro) => {
    if (carro instanceof HTMLInputElement) {
      const ehDeQualDiv = ehDeQualCard(carro);
      if (ehDeQualDiv instanceof HTMLElement) {
        carro.addEventListener('input', () => {
          if (carro.value.trim() === '') {
            resetarCampos(carro, ehDeQualDiv);
          } else {
            carregarLista(ehDeQualDiv);
          }
        });
      }
    }
  });
}

export default ouvirInputCarro;
