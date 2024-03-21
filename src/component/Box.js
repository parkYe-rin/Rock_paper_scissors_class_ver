import React from 'react';

const Box = ({ title, img, result }) => {
  return (
    <div className={`box ${result}`}>
      <div>{title}</div>
      <div>
        <img src={img} alt="" className="img-height" />
      </div>
      <div>{result}</div>
    </div>
  );
};

export default Box;
