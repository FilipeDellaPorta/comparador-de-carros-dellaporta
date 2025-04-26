function resetarCampos(carro, deQualDiv) {
    const infoCarro = deQualDiv.querySelector('.info-carro');
    infoCarro.innerHTML = '';
    carro.value = '';
    carro.focus();
}
export default resetarCampos;
