function resetarCampos(carro: HTMLInputElement, deQualDiv: HTMLElement) {
  const infoCarro = deQualDiv.querySelector('.plus') as HTMLSpanElement;
  const infoBorda = deQualDiv.querySelector('.car-slot') as HTMLDivElement;

  infoCarro.textContent = '+';
  infoCarro.classList.remove('preenchido');
  infoBorda.classList.remove('hidden');
  carro.value = '';
  carro.focus();
}

export default resetarCampos;
