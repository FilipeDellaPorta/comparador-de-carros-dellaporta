import ehDeQualCard from '../utils/ehDeQualCard.js';
function preencherInfoDoCardDoCarro(sugestao, carro) {
    const infoDeQualCarro = ehDeQualCard(carro);
    if (infoDeQualCarro) {
        const infoCarro = infoDeQualCarro.querySelector('.plus');
        const infoBorda = infoDeQualCarro.querySelector('.car-slot');
        if (infoCarro && infoBorda) {
            if (carro.value.trim() === '') {
                infoCarro.textContent = '+';
                infoCarro.classList.remove('preenchido');
                infoBorda.classList.remove('hidden');
                return;
            }
            infoCarro.textContent = '';
            infoCarro.classList.add('preenchido');
            infoBorda.classList.add('hidden');
            infoCarro.innerHTML = `
      Motor: ${sugestao.motor} <br>
      Autonomia Inmetro: ${sugestao.autonomia_inmetro} <br>
      Torque em Newton-metro: ${sugestao.torque_nm} <br>
      Torque em quilograma-força por metro: ${sugestao.torque_kgfm} <br>
      Peso: ${sugestao.peso} <br>
      Velocidade máxima: ${sugestao.velocidade_maxima} <br>
      Carregador rápido: ${sugestao.carregador_rapido_suportado} <br>
      Tempo de carregamento: ${sugestao.tempo_de_carregamento} <br>
      Capacidade de bateria: ${sugestao.bateria} <br>
      Potência: ${sugestao.potencia} <br>
      Preço tabela fipe: ${sugestao.preco_tabela_fipe}
      `;
        }
    }
}
export default preencherInfoDoCardDoCarro;
