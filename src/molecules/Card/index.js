import React from 'react'
import PropTypes from 'prop-types'

import { Label, Image } from '../../atoms'

const Card = ({
  album, name, artist, image, id, ...props
}) => {

  const { className, onClick } = props;
  return (
    <div {...props} onClick={() => onClick(album)} className={`${className} card`}>
      <div className="row justify-content-center">
        <Image src={image} />
      </div>
      <div className="row justify-content-center">
        <Label>{name}</Label>
      </div>
      <div className="row justify-content-center">
        <Label>{artist}</Label>
      </div>
    </div>
  )
}

Card.propTypes = {
  album: PropTypes.string,
  artist: PropTypes.string,
  image: PropTypes.string,
  id: PropTypes.string,
}

export default Card
