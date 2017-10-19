/* -----------------    IMPORTS     ------------------ */
import axios from 'axios'


/* -----------------    ACTION TYPES     ------------------ */
const SEARCH_CHARACTER = 'SEARCH_CHARACTER'


/* ------------   ACTION CREATORS     ------------------ */
const searchCharacter = character => ({type: SEARCH_CHARACTER, character})


/* ------------       THUNK CREATORS     ------------------ */
export const findCharacter = (search) =>
  dispatch =>
    axios.post('/api/character/search', search)
    .then(res =>
      dispatch(searchCharacter(res.data)))
    .catch(err => console.log(err))


/* ------------       REDUCERS     ------------------ */
export default function (state = [], action) {
  switch (action.type) {
  case SEARCH_CHARACTER:
    return action.character
  default:
    return state
  }
}
