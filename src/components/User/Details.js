import React from 'react'
import PropTypes from 'prop-types'

const UserDetails = ({ user }) => {
  return (
    <div>
      {user.name} {user.surname}
    </div>
  )
}

UserDetails.propTypes = {
  user: PropTypes.exact({
    name: PropTypes.string.isRequired,
    surname: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  }),
}

export default UserDetails
