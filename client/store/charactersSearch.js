/* -----------------    IMPORTS     ------------------ */
import axios from 'axios'


/* -----------------    ACTION TYPES     ------------------ */
const SEARCH_CHARACTERS = 'SEARCH_CHARACTERS'


/* ------------   ACTION CREATORS     ------------------ */
const searchCharacters = characters => ({type: SEARCH_CHARACTERS, characters})


/* ------------       THUNK CREATORS     ------------------ */
export const findCharacters = (search) =>
  dispatch =>
    axios.post('/api/characters/search', search)
    .then(res =>
      dispatch(searchCharacters(res.data)))
    .catch(err => console.log(err))


/* ------------       REDUCERS     ------------------ */
export default function (state = [], action) {
  switch (action.type) {
  case SEARCH_CHARACTERS:
    return action.characters
  default:
    return state
  }
}
