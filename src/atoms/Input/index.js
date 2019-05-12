import React from 'react'
import PropTypes from 'prop-types'
// import styles from './style'

const Input = ({ ...props }) => {
    return <input {...props} />
}

Input.propTypes = {
    type: PropTypes.string,
    placeholder: PropTypes.string,
    value: PropTypes.arrayOf([PropTypes.string, PropTypes.number]),
}

Input.defaultProps = {
    type: 'text',
}

export default Input
