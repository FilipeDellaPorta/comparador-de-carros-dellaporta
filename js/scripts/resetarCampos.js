function resetarCampos(carro, deQualDiv) {
    const infoCarro = deQualDiv.querySelector('.plus');
    infoCarro.classList.remove('preenchido');
    carro.value = '';
    carro.focus();
}
export default resetarCampos;
