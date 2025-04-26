function resetarCampos(carro, deQualDiv) {
    const infoCarro = deQualDiv.querySelector('.info-carro');
    infoCarro.classList.remove('preenchido');
    infoCarro.innerHTML = '';
    carro.value = '';
    carro.focus();
}
export default resetarCampos;
