import React from 'react'

  const Card = ({name, car}) => {

    return (
      <div className='tarjeta'>
          <h3>Hola {name}!</h3>
          <h3>Sabemos que tu auto favorito es:</h3>
          <span >{car}</span>
      </div>
    )
}

export default Card