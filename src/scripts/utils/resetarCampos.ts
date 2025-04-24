function resetarCampos(carro: HTMLInputElement, deQualDiv: HTMLElement) {
  const infoCarro = deQualDiv.querySelector('.plus');
  const infoBorda = deQualDiv.querySelector('.car-slot');
  if (
    carro instanceof HTMLInputElement &&
    infoCarro instanceof HTMLSpanElement &&
    infoBorda instanceof HTMLDivElement
  ) {
    infoCarro.textContent = '+';
    infoCarro.classList.remove('preenchido');
    infoBorda.classList.remove('hidden');
    carro.value = '';
    carro.focus();
  }
}

export default resetarCampos;
