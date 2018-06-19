import React, { Fragment } from 'react'

export default ({ match }) => (
  <Fragment>
    <h1>Id: {match.params.id}</h1>
  </Fragment>
)
