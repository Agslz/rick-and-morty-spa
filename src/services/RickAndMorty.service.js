import { API_RICKMORTY } from '../constants/Api.Constants';

class RinckAndMortyService {
  async getAllCharacters() {
    const response = await fetch(API_RICKMORTY.CHARACTERS());
    return response.json();
  }

  async getCharacterById(id) {
    const response = await fetch(API_RICKMORTY.CHARACTER_BY_ID(id));
    return response.json();
  }
}

export default new RinckAndMortyService();
