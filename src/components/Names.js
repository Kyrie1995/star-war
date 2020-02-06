import React from "react";

function Names({ nameLists, currentPage, itemsPerPage, loading, dispatch }) {
  if (loading) {
    return <div>Loading...</div>;
  }

  // get current names list
  const currentEndIndex = currentPage * itemsPerPage;
  const currentStartIndex = currentEndIndex - itemsPerPage;
  const currentNamesList = nameLists.slice(currentStartIndex, currentEndIndex);
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Height</th>
          <th scope="col">Mass</th>
        </tr>
      </thead>
      <tbody>
        {currentNamesList.map(r => (
          <tr key={r.name}>
            <td onClick={() => dispatch({ type: "DISPLAY", payload: r })}>
              <button type="button" className="btn btn-link">
                {r.name}
              </button>
            </td>
            <td>{r.height}</td>
            <td>{r.mass}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Names;
