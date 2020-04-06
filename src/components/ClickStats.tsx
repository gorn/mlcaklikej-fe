import React from 'react';

const ClickStats: React.FunctionComponent<ClickStatsProps> = ({your_clicks, team_clicks}) => (
  <table className="click-stats">
    <tbody>
      <tr><th>Tvoje kliky</th><th>Kliky celého teamu</th></tr>
      <tr>
        <td>{ your_clicks }</td>
        <td>{ team_clicks }</td>
      </tr>
    </tbody>
  </table>
);

interface ClickStatsProps {
  your_clicks?: string,
  team_clicks?: string,
}


export default ClickStats;

// {your_clicks: number, team_clicks: number}