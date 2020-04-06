import React from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';

class SelectTeam extends React.Component<SelectTeamProps,SelectTeamState> {
  constructor(props : SelectTeamProps) {
    super(props);
    this.state = { value: '' };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event :  React.SyntheticEvent<EventTarget>) {
    let target = event.target as HTMLInputElement; 
    this.setState({ value: target.value }); 
  }

  handleKlik = () => {
    this.props.history.push('/team/'+this.state.value);
  }

  render() {
    return (
    <div className="selectTeam">
      <div className="cont1">
        <p>Za který team klikáš</p>
        <input type="text" id="team_name" value={this.state.value} onChange={this.handleChange} />
      </div>
      <div className="cont2">
        <button onClick={this.handleKlik}>KLIK</button>
      </div>
    </div>
    )
  }
}

type SelectTeamProps = { history: any } & RouteComponentProps;
interface SelectTeamState { value: string }


export default withRouter(SelectTeam)
