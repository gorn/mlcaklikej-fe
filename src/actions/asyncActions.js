import { successKlik, sendKlik } from './index'
import { KLIK_API_URL } from '../constants/urls'

// async action creators

// api call itself
function apiKlik(session_string, team_name) {
  return fetch(KLIK_API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'text/plain', },
      body: JSON.stringify({ session: session_string, team: team_name })
    })
    .then(response => Promise.all([response, response.json()] ))
    .catch(console.log);
}

// Thunk action creator
export function requestKlik() {
  return (dispatch, getState) => {
    dispatch(sendKlik());
    return apiKlik(getState().session.session_string, getState().session.team_name).then(([response, json]) => {
      if(response.status === 200){
        dispatch(successKlik(json))
      }
      else{
        // should handle error here, i.e. by calling something like
        // dispatch(failureKlik())
      }
    })
  
  }
}
