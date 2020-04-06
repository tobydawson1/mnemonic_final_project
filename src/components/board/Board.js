import React from 'react'
import PropTypes from 'prop-types'
import Card from '../card/Card'

export default function Board({
 disabled, dimension, cards, flipped, solved, handleClick
}) {
return (
    <div className="board">
      <div id="allcards">
      {
        cards.map((card) => (
          <Card
          key ={card.id}
          id = {card.id}
          type = {card.type}
          width = {dimension / 6 }
          height = {dimension / 4}
          flipped = {flipped.includes(card.id)}
          solved = {solved.includes(card.id)}
          handleClick = {handleClick}
          disabled = {disabled || solved.includes(card.id)}
          />
        ))}
        </div>
    </div>
  )
}
Board.propTypes = {
disabled: PropTypes.bool.isRequired,
dimension: PropTypes.number.isRequired,
cards: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
flipped: PropTypes.arrayOf(PropTypes.number).isRequired,
solved: PropTypes.arrayOf(PropTypes.number).isRequired,
handleClick: PropTypes.func.isRequired,

}