import { createStore , applyMiddleware} from "redux";
import thunk from "redux-thunk"
import Actions from "./actions";
const initialState = {
  followers :[],
  error: ''
};

const getFollowersFromGithub = (state = initialState, action) => {
  let newState = {...state};
    switch (action.type) {
      case Actions.findAction:
        newState.followers = action.payload;
        break;
      case Actions.notFound:
        console.log('Error Hitted')
        return {}
    }
    return newState;
};

const store = createStore(getFollowersFromGithub, applyMiddleware(thunk));
export default store;
