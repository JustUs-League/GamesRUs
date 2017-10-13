/* -----------------    IMPORTS     ------------------ */
import axios from 'axios'


/* -----------------    ACTION TYPES     ------------------ */
const GET_GAMES = 'GET_GAMES'


/* ------------   ACTION CREATORS     ------------------ */
const getGames = games => ({type: GET_GAMES, games})


/* ------------       THUNK CREATORS     ------------------ */
export const loadGames = () =>
  dispatch =>
    axios.get('/api/games')
      .then(res =>
        dispatch(getGames(res.data)))
      .catch(err => console.log(err))


/* ------------       REDUCERS     ------------------ */
export default function (state = [], action) {
  switch (action.type) {
  case GET_GAMES:
    return action.games
  default:
    return state
  }
}
