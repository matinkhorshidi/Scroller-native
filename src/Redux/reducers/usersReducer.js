import { GET_USERS } from '../actions/actions';
const initialState = {
  users: [],
};
function usersReducer(state = initialState, action) {
  switch (action.type) {
    case GET_USERS:
      return { ...state, users: action.payload };
    default:
      return state;
  }
}
export default usersReducer;
