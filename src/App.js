import React, { Component } from "react";
import { useState, useEffect } from "react";
import Coin from "./components/Coin";
import axios from "axios";
import Search from "./components/Search";
import "./App.css";
import Header from "./components/Header";

function App() {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=INR&order=market_cap_desc&per_page=100&page=1&sparkline=false"
      )
      .then((res) => {
        setCoins(res.data);
      });
  }, []);

  function handleChange(event) {
    setSearch(event.target.value);
  }

  const filteredCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="app">
      <Header />
      <Search change={handleChange} />
      <div className="coin-column">
        {filteredCoins.map((coin) => {
          return (
            <Coin
              id={coin.id}
              title={coin.name}
              image={coin.image}
              price={coin.current_price}
              change={coin.price_change_percentage_24h}
              marketValue={coin.market_cap}
            />
          );
        })}
      </div>
    </div>
  );
}
export default App;
