import * as actionT from '../constants/actionTypes';
import { Options } from 'react-redux';
import { requestKlik } from './asyncActions'

// plain action creators

export function initializeNewSession(team_name: string) { 
  return {type: actionT.INITIALIZE_NEW_SESSION, team_name} 
}

export function sendKlik() {
  return {type: actionT.SEND_KLIK}  
}

export function successKlik(payload: Array<Options>) {     
  return {
    type: actionT.SUCCESS_KLIK,
    payload
  }
}
