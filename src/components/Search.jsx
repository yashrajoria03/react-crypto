import React from "react";

function Search(props) {
  return (
    <div className="Container">
      <input
        type="text"
        placeholder="Search coins here"
        onChange={props.change}
      ></input>
    </div>
  );
}
export default Search;
