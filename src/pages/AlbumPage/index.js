import React from 'react'
import { Link } from "react-router-dom";
import { connect } from 'react-redux'
import { actions } from '../../store/actions'

import { Card } from '../../molecules'
import { TrackList } from '../../organisms'
import TemplateSpotify from '../../templates/TemplateSpotify';

const mapStateToProps = (state) => ({
  tracks: state.tracks,
  album: state.album
})

const AlbumPage = ({ album, tracks }) => {
  return (<div>
    <TemplateSpotify>
      <div className="row">
        <div className="col">
          <Link to="/">Back</Link>
          <Card className="col" key={album.id}
            name={album.name}
            artist={album.artists[0].name}
            image={album.images[0].url}
            id={album.href} />
        </div>
        <div className="col">
          <TrackList className="col" tracks={tracks} />
        </div>
      </div>
    </TemplateSpotify>
  </div>)
}

export default connect(mapStateToProps)(AlbumPage)