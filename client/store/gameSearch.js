/* -----------------    IMPORTS     ------------------ */
import axios from 'axios'


/* -----------------    ACTION TYPES     ------------------ */
const GET_SEARCHED_GAMES = 'GET_SEARCHED_GAMES'
const SEARCH_GAME = 'SEARCH_GAME'


/* ------------   ACTION CREATORS     ------------------ */
const getSearchedGames = games => ({type: GET_SEARCHED_GAMES, games})
const searchGame = games => ({type: SEARCH_GAME, games})


/* ------------       THUNK CREATORS     ------------------ */
export const findGames = (search) =>
  dispatch =>
    axios.post('/api/games/search', search)
    .then(res =>
      dispatch(searchGame(res.data)))
    .catch(err => console.log(err))


/* ------------       REDUCERS     ------------------ */
export default function (state = [], action) {
  switch (action.type) {
  case GET_SEARCHED_GAMES:
    return action.games
  case SEARCH_GAME:
    return action.games
  default:
    return state
  }
}
