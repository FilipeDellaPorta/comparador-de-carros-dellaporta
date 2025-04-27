import ehDeQualCard from '../utils/ehDeQualCard.js';
function preencherInfoDoCardDoCarro(sugestao, carro) {
    const infoDeQualCarro = ehDeQualCard(carro);
    const infoCarro = infoDeQualCarro.querySelector('.info-carro');
    infoCarro.textContent = '';
    infoCarro.innerHTML = `
      Motor: <span class="specs-carro">${sugestao.motor}</span> <br>
      Autonomia Inmetro: <span class="specs-carro">${sugestao.autonomia_inmetro}</span> <br>
      Torque em Newton-metro: <span class="specs-carro">${sugestao.torque_nm}</span> <br>
      Torque em quilograma-força por metro: <span class="specs-carro">${sugestao.torque_kgfm}</span> <br>
      Velocidade máxima: <span class="specs-carro">${sugestao.velocidade_maxima}</span> <br>
      Tempo da recarga AC: <span class="specs-carro">${sugestao.tempo_de_carregamento_ac}</span> <br>
      Tempo da recarga mais rápida DC: <span class="specs-carro">${sugestao.tempo_de_carregamento_dc}</span> <br>
      Capacidade de bateria: <span class="specs-carro">${sugestao.bateria}</span> <br>
      Potência: <span class="specs-carro">${sugestao.potencia}</span> <br>
      Preço no site: <span class="specs-carro">${sugestao.preco_site}</span> <br>
      Link: <a href="${sugestao.link}" target="_blank" rel="noopener noreferrer" class="link-carro">${sugestao.carro}</a>
      `;
}
export default preencherInfoDoCardDoCarro;
