import React, {Component, Fragment} from 'react'
import List from './List'
import {getLegos, createAndGetAll} from './api'
import Form from './Legoform'


export default class extends Component {

    state = {
        legos: []
    }

    async componentDidMount() {
        const legos = await getLegos()
        this.setState({legos})
    }

    handleCreated = async lego => {
        const legos = await createAndGetAll(lego).catch(console.log)
        this.setState({legos})
    }

    render() {
        return (
            <Fragment>
                <Form onCreated={this.handleCreated}/>
                <List legos={this.state.legos}/>
            </Fragment>
        )
    }

}
