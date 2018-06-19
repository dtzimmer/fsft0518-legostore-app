import React, { Fragment } from 'react'

export default (props) => (
  <Fragment>
    <h1>Id: {props.match.params.id}</h1>
  </Fragment>
)
