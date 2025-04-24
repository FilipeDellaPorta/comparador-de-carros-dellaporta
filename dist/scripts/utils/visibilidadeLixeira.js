function visibilidadeLixeira(carro, lixeira) {
    if (carro.value.trim() !== '') {
        lixeira.hidden = false;
    }
    else {
        lixeira.hidden = true;
    }
}
export default visibilidadeLixeira;
