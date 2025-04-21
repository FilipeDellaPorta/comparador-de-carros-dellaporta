function visibilidadeDaLixeira(carroDigitadoNoInput, lixeira) {
    if (carroDigitadoNoInput.value.trim() !== '') {
        lixeira.hidden = false;
    }
    else {
        lixeira.hidden = true;
    }
}
export default visibilidadeDaLixeira;
