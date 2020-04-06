import React from 'react';
import LeaderBoard from './LeaderBoard';
import SelectTeam  from "./SelectTeam";

const HomePage: React.FunctionComponent<{}> = () => (
  <div>
    <h1>Mlč a klikej</h1>
    <p><em>"Je to jednoduchý, prostě klikej tak rychle jak to svedeš."</em> - neznámý</p>
    <div className="content">
      <SelectTeam />
      <LeaderBoard />
    </div>
  </div>

)

export default HomePage;