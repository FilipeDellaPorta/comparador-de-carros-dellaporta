import carregarLista from '../components/carregarLista.js';
import ehDeQualCard from '../utils/ehDeQualCard.js';
import limparCampos from '../utils/limparCampos.js';
import visibilidadeLixeira from '../utils/visibilidadeLixeira.js';
function ouvirInputCarro() {
  const carrosInput = document.querySelectorAll(
    '.carro-input'
  ) as NodeListOf<HTMLInputElement>;
  const carros = Array.from(carrosInput) as HTMLInputElement[];
  carros.forEach((carro) => {
    if (carro instanceof HTMLInputElement) {
      const ehDeQualDiv = ehDeQualCard(carro) as HTMLElement;
      const lixeira = ehDeQualDiv.querySelector(
        '.icone-lixeira'
      ) as HTMLElement;
      carro.addEventListener('input', () => {
        if (carro.value.trim() === '') {
          limparCampos(carro, ehDeQualDiv);
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
