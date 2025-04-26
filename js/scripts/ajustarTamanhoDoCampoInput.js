function ajustarTamanhoDoCampoInput(inputs) {
    inputs.forEach((input) => {
        input.addEventListener('input', function () {
            if (this.value.length > 0) {
                this.style.width = 'auto';
            }
            else {
                this.style.width = '90%';
            }
        });
    });
}
export default ajustarTamanhoDoCampoInput;
