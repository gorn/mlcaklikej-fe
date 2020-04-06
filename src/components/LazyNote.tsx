import React from 'react';
import { FE_SERVER_URL } from '../constants/urls'

const LazyNote: React.FunctionComponent<LazyNoteProps> = ({ team }) => (
  <p className='lazy'>
    <small>Jsi moc líný? Pozvi kámoše: <br/>
    <span>{FE_SERVER_URL}/team/{ team }</span></small>
  </p>
);

interface LazyNoteProps {
  team?: string,
}

export default LazyNote;

