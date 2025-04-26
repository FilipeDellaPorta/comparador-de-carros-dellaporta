import ehDeQualCard from '../utils/ehDeQualCard.js';
function preencherInfoDoCardDoCarro(sugestao, carro) {
    const infoDeQualCarro = ehDeQualCard(carro);
    const infoCarro = infoDeQualCarro.querySelector('.info-carro');
    if (carro.value.trim() === '') {
        infoCarro.classList.remove('preenchido');
        return;
    }
    infoCarro.textContent = '';
    infoCarro.classList.add('preenchido');
    infoCarro.innerHTML = `
      Motor: ${sugestao.motor} <br>
      Autonomia Inmetro: ${sugestao.autonomia_inmetro} <br>
      Torque em Newton-metro: ${sugestao.torque_nm} <br>
      Torque em quilograma-força por metro: ${sugestao.torque_kgfm} <br>
      Velocidade máxima: ${sugestao.velocidade_maxima} <br>
      Tempo da recarga AC: ${sugestao.tempo_de_carregamento_ac} <br>
      Tempo da recarga mais rápida DC: ${sugestao.tempo_de_carregamento_dc} <br>
      Capacidade de bateria: ${sugestao.bateria} <br>
      Potência: ${sugestao.potencia} <br>
      Preço no site: ${sugestao.preco_site} <br>
      Link: <a href="${sugestao.link}" target="_blank" rel="noopener noreferrer" class="link-carro">${sugestao.carro}</a>
      `;
}
export default preencherInfoDoCardDoCarro;
