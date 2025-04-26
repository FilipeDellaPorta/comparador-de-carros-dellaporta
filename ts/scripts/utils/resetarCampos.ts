function resetarCampos(carro: HTMLInputElement, deQualDiv: HTMLElement) {
    const infoCarro = deQualDiv.querySelector('.info-carro') as HTMLElement;
    infoCarro.classList.remove('preenchido');
    infoCarro.innerHTML = '';
    carro.value = '';
    carro.focus();
}
export default resetarCampos;
