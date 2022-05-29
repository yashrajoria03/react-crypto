import React from "react";

function Coin(props) {
  return (
    <div className="coin-row">
      <div className="display">
        <img src={props.image} className="logo"></img>
        <h5>{props.title}</h5>
      </div>
      <h6>Rs. {props.price}</h6>

      {props.change < 0 ? (
        <h6 className="negative-price">{props.change} %</h6>
      ) : (
        <h6 className="positive-price">{props.change} %</h6>
      )}
      <div className="market-container">
        <h6>Mkt Cap:</h6>
        <h6>Rs.{props.marketValue}</h6>
      </div>
    </div>
  );
}

export default Coin;
