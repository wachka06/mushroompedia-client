import React from 'react';

const Mushroom = ({mushroom, handleClick}) => {
    return (
      <div className="mushroom-card" onClick={() => handleClick(mushroom)}>
        <img className="mushroom-img" src={mushroom.img_url} alt="" />
        <div>{mushroom.common_name[0]}</div>
      </div>
    );
}

export default Mushroom;
