import axios from "axios";
import { gameDetailsURL, gameScreenshotsURL } from "../api";

export const loadDetail = (game_id) => async (dispatch) => {
  dispatch({
    type: "LOADING_DETAIL",
  });
  const gameDetailData = await axios.get(gameDetailsURL(game_id));
  const gameScreenshotsData = await axios.get(gameScreenshotsURL(game_id));
  dispatch({
    type: "FETCH_DETAILS",
    payload: {
      details: gameDetailData.data,
      screenshots: gameScreenshotsData.data,
    },
  });
};
