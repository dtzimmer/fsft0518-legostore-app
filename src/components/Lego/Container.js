import React, { Fragment, Component } from 'react'
import { withRouter } from 'react-router-dom'

const getLego = async id =>
  await fetch(`http://localhost:3000/${id}`, {})
    .then(response => response.json())


class Container extends Component {

  state = {
    lego: {}
  }


  async componentDidMount() {
    try {
      const id = this.props.match.params.id
      const lego = await getLego(id)
      this.setState({ lego })
    } catch(err) {
      console.log(err)
    }
  }
  // async componentDidMount() {
  //   const id = this.props.match.params.id
  //   const lego = await getLego(id).catch(err => console.error(err))
  //   this.setState({ lego })
  // }

  render() {
    const lego = this.state.lego

    return (
      <Fragment>
        <h1><a href={lego.linkUri}>{lego.name}</a></h1>
        <div>{lego.price}</div>
      </Fragment>
    )
  }

}

export default withRouter(Container)
