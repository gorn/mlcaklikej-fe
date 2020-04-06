import React from 'react';
import axios from 'axios';
import { LEADERBOARD_API_URL } from '../constants/urls'

export class LeaderBoard extends React.Component<LeaderBoardProps, LeaderboardState> {
  timer: any;

  // This should be noved to Redux in larger project. 
  // In this small one it is not absolutely necessary
  constructor(props: LeaderBoardProps) {
    super(props)
    this.state = {
      leaderboard: [{
        order:' ', 
        team:'Fetching data ...', 
        clicks: ''
      }],
    };
  }

  // lifecycle methods
  componentDidMount() {
    this.fetchData();               //  the first time          
    this.timer = setInterval(       // refresh data periodically
      () => this.fetchData(), 1000 
    );
  }

  componentWillUnmount() {
    clearInterval(this.timer);                   // clear timer
  }

  // fetching leaderboard data from API
  fetchData () {
    fetch(LEADERBOARD_API_URL)
      .then(res => res.json() )
      .then(res => { this.setState({leaderboard: res}) })
      .catch(console.log);
  }

  render() {
    return (<div className="leaderboard">
      <h2>Top clickers </h2>
      <table>
        <thead><tr>
            <th>&nbsp;</th><th>tým</th><th>kliků</th>
        </tr></thead>
        <tbody>
          {this.state.leaderboard.map((line) => (
          <tr key={line.order} className={ (line.team===this.props.selectedTeam) ? 'currentTeam' : ''}>
            <td>{line.order}</td>
            <td>{line.team}</td>
            <td>{line.clicks}</td>
          </tr>))}
        </tbody>
      </table>
    </div>);
  }
}

interface LeaderBoardProps { selectedTeam?: string }
interface LeaderboardState { leaderboard: Array<any> }

export default LeaderBoard;