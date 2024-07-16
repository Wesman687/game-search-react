import axios from "axios";

export async function fetchNews() {
    let array = []
    const options = {
        method: 'GET',
        url: 'https://mmo-games.p.rapidapi.com/latestnews',
        headers: {
          'x-rapidapi-key': '477cc3938dmsh3d6acb4fdba02afp1d7380jsn03a9325cb48a',
          'x-rapidapi-host': 'mmo-games.p.rapidapi.com'
        }
      };
      
      try {
          const response = await axios.request(options);
          array = response.data
          console.log(response.data);
      } catch (error) {
          console.error(error);
      }
    
    
    return(array)
  }