import { DELETE_PERSON, SET_PEOPLE } from "../actions/people";

const initialState = {
  allPeople: []
}

function people(state = initialState, action) {
  switch (action.type) {
    case SET_PEOPLE:
      return {
        ...state,
        allPeople: action.people
      };
    case DELETE_PERSON:
      return {
        ...state,
        allPeople: state.allPeople.filter(person => person.id !== action.id)
      }
    default:
      return state;
  }
}

export default people;  