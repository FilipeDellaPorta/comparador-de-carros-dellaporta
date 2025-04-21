/*sugestão do chat gpt para evitar múltiplas chamadas enquanto o carro é digitado no input*/
function debounce(func, delay = 300) {
    let timeout;
    return (...args) => {
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            func(...args);
        }, delay);
    };
}
export default debounce;
