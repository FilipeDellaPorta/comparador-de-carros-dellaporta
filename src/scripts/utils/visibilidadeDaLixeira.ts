function visibilidadeDaLixeira(carro: HTMLInputElement, lixeira: HTMLElement) {
  if (carro.value.trim() !== '') {
    lixeira.hidden = false;
  } else {
    lixeira.hidden = true;
  }
}

export default visibilidadeDaLixeira;
