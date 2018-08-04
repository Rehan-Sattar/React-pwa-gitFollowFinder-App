import Actions from "./actions";
export function downloadAllFollowers (state) {
    return dispatch => {
      console.log('hit')
      fetch(`https://api.github.com/users/${state.developerName}/followers`)
        .then( response => {
           return response.json()
        }).then( data => {
          if( data.message !== "Not Found") {
            dispatch({
              type: Actions.findAction,
              payload : data
            })
          } else {
            dispatch({
              type: Actions.notFound,
            })
          }
        }).catch( error => {
          console.log('Error: ', error);
        })
    }
}


{/*
  {
    "message": "Not Found",
    "documentation_url": "https://developer.github.com/v3/users/followers/#list-followers-of-a-user"
   }

*/}
