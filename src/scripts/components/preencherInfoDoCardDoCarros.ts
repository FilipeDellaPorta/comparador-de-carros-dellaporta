function preencherInfoDoCardDoCarro(
  sugestao: { carro: string; motor: string },
  carroDigitadoNoInput: HTMLInputElement
) {
  const infoDeQualCarro = carroDigitadoNoInput.closest('.principal__cards');
  if (infoDeQualCarro) {
    const infoDoCarroNoInput = infoDeQualCarro.querySelector('.plus');
    if (infoDoCarroNoInput) {
      infoDoCarroNoInput.textContent = `Motor: ${sugestao.motor}`;
    }
  }
}

export default preencherInfoDoCardDoCarro;
