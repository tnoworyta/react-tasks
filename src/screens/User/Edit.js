import React from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'

import UIMenu from '../../components/UI/Menu'

const ScreensUserEdit = withRouter(props => {
  const {
    match: {
      params: { id },
    },
  } = props

  const handleClick = () => props.history.push('/user/list')

  return (
    <div>
      <UIMenu />
      Editing User #{id}
      <button onClick={handleClick}>Programatically redirect to user list</button>
    </div>
  )
})

ScreensUserEdit.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
}

export default ScreensUserEdit
