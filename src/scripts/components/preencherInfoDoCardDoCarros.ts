import { Carro } from '../interfaces/carro.js';
import ehDeQualCard from '../utils/ehDeQualCard.js';

function preencherInfoDoCardDoCarro(sugestao: Carro, carro: HTMLInputElement) {
  const infoDeQualCarro = ehDeQualCard(carro);
  if (infoDeQualCarro) {
    const infoCarro = infoDeQualCarro.querySelector('.plus');
    const infoBorda = infoDeQualCarro.querySelector('.car-slot');
    if (infoCarro && infoBorda) {
      infoCarro.textContent = '';
      infoCarro.classList.add('preenchido');
      infoBorda.classList.add('hidden');
      infoCarro.textContent = `
      Motor: ${sugestao.motor}
      Autonomia Inmetro: ${sugestao.autonomia_inmetro}
      Torque em Newton-metro: ${sugestao.torque_nm}
      Torque em quilograma-força por metro: ${sugestao.torque_kgfm}
      Peso: ${sugestao.peso}
      Velocidade máxima: ${sugestao.velocidade_maxima}
      Carregador rápido: ${sugestao.carregador_rapido_suportado}
      Tempo de carregamento: ${sugestao.tempo_de_carregamento}
      Capacidade de bateria: ${sugestao.bateria}
      Potência: ${sugestao.potencia}
      Preço tabela fipe: ${sugestao.preco_tabela_fipe}
      `;
    }
  }
}

export default preencherInfoDoCardDoCarro;
