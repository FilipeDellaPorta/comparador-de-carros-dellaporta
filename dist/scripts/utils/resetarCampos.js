function resetarCampos(carro, deQualDiv) {
    const infoCarro = deQualDiv.querySelector('.plus');
    const infoBorda = deQualDiv.querySelector('.car-slot');
    infoCarro.textContent = '+';
    infoCarro.classList.remove('preenchido');
    infoBorda.classList.remove('hidden');
    carro.value = '';
    carro.focus();
}
export default resetarCampos;
