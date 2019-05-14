import React from 'react'
import PropTypes from 'prop-types'

import { Label, Input } from '../../atoms'

const Field = ({
  label, ...props
}) => {
  const { id } = props;
  return (
    <div>
      <div className="row">
        {label && <Label htmlFor={id}>{label}</Label>}
      </div>
      <div className="row">
        <Input id={id} {...props} />
      </div>
    </div>
  )
}

Field.propTypes = {
  label: PropTypes.string
}

export default Field
