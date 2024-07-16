import axios from "axios";

export async function fetchNews() {
    let array = []
    const options = {
      method: "GET",
      headers: {
        "x-rapidapi-key": "85145a591amshddc656a65b714a4p1741e9jsn73084d441036",
        "x-rapidapi-host": "mmo-games.p.rapidapi.com",
      },
    };

    const response = await axios.get(
      "https://mmo-games.p.rapidapi.com/latestnews",
      options
    );
    array = response.data
    return
  }