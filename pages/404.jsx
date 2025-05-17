import React from 'react';

function NotFound() {
  const style = {
    width: '100%',
    height: '90dvh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '20px',
    flexDirection: 'column',
  };

  return (
    <div style={style}>
      <h1>404 !</h1>
      <h3>this page is not found</h3>
    </div>
  );
}

export default NotFound;
