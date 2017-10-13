/* -----------------    IMPORTS     ------------------ */
import axios from 'axios'
// import history from '../history'

/* -----------------    ACTION TYPES     ------------------ */
const GET_ACCOUNT = 'GET_ACCOUNT'


/* ------------   ACTION CREATORS     ------------------ */
const getAccount = user => ({type: GET_ACCOUNT, user})


/* ------------       THUNK CREATORS     ------------------ */
export const fetchAccount = email =>
  dispatch =>
    axios.post('/api/users', {email})
      .then(res =>
        dispatch(getAccount(res.data)))
      .catch(err => console.log(err))


/* ------------       REDUCERS     ------------------ */
export default function (state = {}, action) {
  switch (action.type) {
  case GET_ACCOUNT:
    return action.user
  default:
    return state
  }
}
