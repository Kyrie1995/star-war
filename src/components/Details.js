import React from "react";

function Details({ currentPerson }) {
  return (
    <div>
      <div>
        <h1 className="text-primary mb-3">Details</h1>
      </div>
      <ul className="list-inline">
        <li className="list-inline-item font-weight-bold">Name:</li>
        <li className="list-inline-item">{currentPerson.name}</li>
      </ul>
      <ul className="list-inline">
        <li className="list-inline-item font-weight-bold">Birth year:</li>
        <li className="list-inline-item">{currentPerson.birthYear}</li>
      </ul>
      <ul className="list-inline">
        <li className="list-inline-item font-weight-bold">Gender:</li>
        <li className="list-inline-item">{currentPerson.gender}</li>
      </ul>
      <ul className="list-inline">
        <li className="list-inline-item font-weight-bold">List of films:</li>
        <ul className="list-unstyled">
          {currentPerson.films.map(film => (
            <li key={film}>{film}</li>
          ))}
        </ul>
      </ul>
    </div>
  );
}

export default Details;
