
import React from 'react';

function Coins() {
  return (
    <div id="coins" className="coins">
      <div className="coins_container">
        <div className="coins_frame">
          <h2>Coins</h2>
          <div className="coins_container">
            <img
              src="./img/spinning_coin_gif_by_opalautumns_dd442co.gif"
              alt="Spinning Coin"
            />
            <p>0</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Coins;
