import React from 'react';
import { ReactComponent as Paper } from '../../images/icon-paper.svg';
import { ReactComponent as Rock } from '../../images/icon-rock.svg';
import { ReactComponent as Scissors } from '../../images/icon-scissors.svg';

import './styles.css';

export default function Hand(props) {
  const { shape, onHandClick } = props;
  // console.log("HAND PROPS",props)

  const handleClick = (event) => {
    event.preventDefault();
    console.log("clickedevent",event)
    onHandClick(shape);
  };
  
  switch (shape) {
    case 'paper':
      return (
        <button className='disk1button' onClick={handleClick}>
          <Paper className='paper' />
        </button>
      );

    case 'scissors':
      return (
        <button className='disk2button' onClick={handleClick}>
          <Scissors className='scissors' />
        </button>
      );

    case 'rock':
      return (
        <button className='disk3button' onClick={handleClick}>
          <Rock className='rock' />
        </button>
      );

    default:
      return null;
  }
}
