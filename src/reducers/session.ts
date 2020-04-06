import {INITIALIZE_NEW_SESSION, SEND_KLIK, SUCCESS_KLIK } from '../constants/actionTypes'

function uniqueIDString() {
  return (Math.round( (Date.now() + Math.random())*100000 ).toString(36))
}

// alternative using Entropy module
// import { Entropy } from 'entropy-string';
// function uniqueIDString() {
//   const entropy = new Entropy()
//   return(entropy.string());
// }

const session = (state: SessionState = {}, action: any) => {
  switch (action.type) {
    case INITIALIZE_NEW_SESSION:
      return {...state, session_string: uniqueIDString(), team_name: action.team_name};
    case SEND_KLIK:
      return state;
    case SUCCESS_KLIK: 
      return {...state, 
        your_clicks: action.payload.your_clicks,
        team_clicks: action.payload.team_clicks,
      }
    default:
      return state;
  }
}

export interface SessionState {
  your_clicks?: string,
  team_clicks?: string,
  session_string?: string,
  team_name?: string,
}

export default session

