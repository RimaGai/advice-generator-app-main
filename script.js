function getAdvice(response) {
  console.log(response);
}

let apiUrl = `https://api.adviceslip.com/advice`;
axios.get(apiUrl).then(getAdvice);
