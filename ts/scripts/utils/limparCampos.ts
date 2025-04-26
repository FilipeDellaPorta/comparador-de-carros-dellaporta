function limparCampos(carro: HTMLInputElement, deQualDiv: HTMLElement) {
    const infoCarro = deQualDiv.querySelector('.info-carro') as HTMLElement;
    infoCarro.innerHTML = '';
    carro.value = '';
    carro.focus();
}
export default limparCampos;
