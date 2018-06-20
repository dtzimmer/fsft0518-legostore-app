import React, {Component, Fragment} from 'react'
import {createAndGetAll} from './api'


export default class Legoform extends Component {

    state = {
        name: "",
        price: "",
        description: "",
        imageUri: "",
        linkUri: "",
        isActive: "true",
    }

    render() {
        console.log(this);

        return (
            <Fragment>
                <h1> Make a Character </h1>

                <form onSubmit={e => {
                    e.preventDefault()

                    this.props.onCreated(this.state)
                }}>
                    <div>
                        <input type="text"
                               placeholder="Name"
                               value={this.state.name}
                               onChange={event => this.setState({name: event.target.value})}/>
                    </div>
                    <div>
                        <input type="text"
                               placeholder="Price"
                               value={this.state.price}
                               onChange={event => this.setState({price: event.target.value})}/>
                    </div>
                    <div>
                        <input type="text"
                               placeholder="Description"
                               value={this.state.description}
                               onChange={event => this.setState({description: event.target.value})}/>
                    </div>
                    <div>
                        <input type="text"
                               placeholder="Image Address"
                               value={this.state.imageUri}
                               onChange={event => this.setState({imageUri: event.target.value})}/>
                    </div>
                    <div>
                        <input type="text"
                               placeholder="URL Address"
                               value={this.state.linkUri}
                               onChange={event => this.setState({linkUri: event.target.value})}/>
                    </div>
                    <div>
                        <input type="text"
                               placeholder="isActive"
                               value={this.state.isActive}
                               onChange={event => this.setState({isActive: event.target.value})}/>
                    </div>
                    <button type="submit">Save</button>
                </form>

            </Fragment>
        )
    }

}