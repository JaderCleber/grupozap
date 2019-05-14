import React from 'react'
import PropTypes from 'prop-types'
import { Card } from '../../molecules'

const List = ({ cards, ...props }) => {
  const list = cards.map(card => (
    <Card className="col" key={card.id} 
    album={card.name} 
    artist={card.artists[0].name} 
    image={card.images[0].url}
    id={card.href}
    album={card}
    {...props} />
  ));
//   album_type: "single"
// artists: (5) [{…}, {…}, {…}, {…}, {…}]
// available_markets: (79) ["AD", "AE", "AR", "AT", "AU", "BE", "BG", "BH", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "SA", "SE", "SG", "SK", "SV", "TH", "TN", "TR", "TW", "US", "UY", "VN", "ZA"]
// external_urls: {spotify: "https://open.spotify.com/album/5yl46ykkODW4AE8vZ2qQ0N"}
// href: "https://api.spotify.com/v1/albums/5yl46ykkODW4AE8vZ2qQ0N"
// id: "5yl46ykkODW4AE8vZ2qQ0N"
// images: (3) [{…}, {…}, {…}]
// name: "A Gentleman"
// release_date: "2017-08-17"
// release_date_precision: "day"
// total_tracks: 5
// type: "album"
// uri: "spotify:album:5yl46ykkODW4AE8vZ2qQ0N"
  return (<div className="row">
    {list}
  </div>)
}

List.PropTypes = {
  cards: PropTypes.array
}

export default List
