function visibilidadeDaLixeira(carroDigitadoNoInput: HTMLInputElement, lixeira: HTMLElement) {
  if (carroDigitadoNoInput.value.trim() !== '') {
    lixeira.hidden = false;
  } else {
    lixeira.hidden = true;
  }
}

export default visibilidadeDaLixeira;
