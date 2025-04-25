import ehDeQualCard from '../utils/ehDeQualCard.js';
function preencherInfoDoCardDoCarro(sugestao, carro) {
    const infoDeQualCarro = ehDeQualCard(carro);
    const infoCarro = infoDeQualCarro.querySelector('.plus');
    const infoBorda = infoDeQualCarro.querySelector('.car-slot');
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
      Peso total: ${sugestao.peso_total} <br>
      Peso em ordem de marcha: ${sugestao.peso_em_ordem_de_marcha} <br>
      Velocidade máxima: ${sugestao.velocidade_maxima} <br>
      Tem de recarga AC: ${sugestao.tempo_de_carregamento_ac} <br>
      Tempo de recarga DC: ${sugestao.tempo_de_carregamento_dc} <br>
      Capacidade de bateria: ${sugestao.bateria} <br>
      Potência: ${sugestao.potencia} <br>
      Preço no site: ${sugestao.preco_site} <br>
      Link:  <a href="${sugestao.link}" target="_blank" rel="noopener noreferrer">${sugestao.carro}</a>
      `;
}
export default preencherInfoDoCardDoCarro;
