/*sugestão do chat gpt para evitar múltiplas chamadas enquanto o carro é digitado no input*/
function debounce(func: any, delay = 300) {
  let timeout: any;
  return (...args: any) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      func(...args);
    }, delay);
  };
}

export default debounce;
