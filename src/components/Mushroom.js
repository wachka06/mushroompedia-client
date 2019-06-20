import React from 'react';

const Mushroom = (props) => {
    // console.log('Mushroom', props)
    return (
      <div className="mushroom-card" onClick={() => props.handleClick(props.mushroom)}>
        <img className="mushroom-img" src={props.mushroom.img_url} alt="" />
        <div>{props.mushroom.common_name[0]}</div>
      </div>
    );
}

export default Mushroom;
