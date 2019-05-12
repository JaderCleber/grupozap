import React from 'react'
import PropTypes from 'prop-types'
import { Label } from '../../atoms'

const TrackList = ({ tracks, ...props }) => {
  const list = tracks.map((track, index) => {
    const { duration_ms, name, href } = track;
    const duration = new Date(duration_ms);
    const seconds = duration.getSeconds();
    const minutes = duration.getMinutes();
    return (<div className="col track" key={href}>
      <Label>{index}.</Label>
      <Label>{name}</Label>
      <Label>{`${minutes}:${seconds}`}</Label>
    </div>)
  });
  return (<div {...props}>
    {list}
  </div>);
}

TrackList.PropTypes = {
  tracks: PropTypes.array
}

TrackList.defaultProps = {
  tracks: []
}

export default TrackList
