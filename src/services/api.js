
const apikey = `5a8cbfec69b3cd2c90a85d2dbdfdf623`
const hash = `6276eb0d557388dce1106bb0c29add9c`
const URL = `http://gateway.marvel.com/v1/public/characters?ts=1&apikey=${apikey}&hash=${hash}`;
const api = {
  getAll: () => fetch(URL).then((response) => response.json()),
};

export default api;
