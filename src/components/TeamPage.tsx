import React from 'react';
import { connect } from 'react-redux';

import LeaderBoard from './LeaderBoard';
import ClickStats from './ClickStats'
import LazyNote from './LazyNote'

import { initializeNewSession } from '../actions';
import { requestKlik } from '../actions/asyncActions'
import { SessionState } from '../reducers/session'

class TeamPage extends React.Component<TeamPageProps> {

  componentDidMount() {
    // begin new session when on page entry
    this.props.dispatch(initializeNewSession(
      this.props.match.params.team_name
    ));
    // entry counts as first click (we had to click to get there)
    this.props.dispatch(requestKlik());
  } 

  handleClick() { 
    this.props.dispatch(requestKlik())
  };

  render() {
    return (<>
      <h1>Klikáš za team<br /><b>{this.props.team_name}</b></h1>
      <LazyNote team={this.props.team_name} />

      <div className="content">
        <button onClick={this.handleClick.bind(this)} className="big-button">KLIK</button>
        <ClickStats your_clicks={this.props.your_clicks} team_clicks={this.props.team_clicks} />
        <LeaderBoard selectedTeam={this.props.team_name} />
      </div>
    </>);
  }
}

function mapStateToProps({session} : {session: SessionState} ) {
  return { 
    session_string: session.session_string,
    your_clicks: session.your_clicks || '...',
    team_clicks: session.team_clicks || '...',
    team_name: session.team_name || '...',
  };
}

type TeamPageProps = SessionState & {
  dispatch?: any,
  match?: any,
}

export default connect(mapStateToProps)(TeamPage)
