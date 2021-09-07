import React from 'react';

export default function Dashboard() {
  return (
    <React.Fragment>
      <div className="d-flex">
        <div className="mr-auto p-2">
          <h2 className="display-4 titulo">Dashboard</h2>
        </div>
      </div>
      <hr />
      <div className="d-flex flex-column justify-content-center">
        <h2>Minus Store</h2>
      </div>
    </React.Fragment>
  );
}
