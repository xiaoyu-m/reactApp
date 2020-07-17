import { GET_MUSIC_DATA } from "../constants";
export const music = (music = {}, action) => {
  switch (action.type) {
    case GET_MUSIC_DATA:
      return music;
    default:
      return music;
  }
};
