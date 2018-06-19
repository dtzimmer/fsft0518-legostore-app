import React, { Component, Fragment } from 'react'
import List from './List'

const getLegos = async () => {
  const response = await fetch('http://localhost:3000', { mode: 'cors'})
  return await response.json()
}


export default class extends Component {

  state = {
    legos: []
      // {
      //   name: 'Emmet',
      //   price: 9.99,
      //   description: `
      //     <p>“Good morning, city!”</p>
      //     <p>Every day, Emmet goes to work exactly by the steps in the instructions booklet that he always keeps in his hand. As part of Bricksburg’s busy construction crew, he helps to rebuild the city as briefed by President Business.</p>
      //     <p>Emmet wants to be popular, but he struggles to stand out in the crowd. Even his fellow construction workers hardly know he’s there. But all of that is about to change, thanks to a mysterious stranger and a legendary Prophecy about the most special minifigure in the entire world!</p>
      //   `,
      //   imageUri: 'https://lc-imageresizer-live-s.legocdn.com/resize?mode=landscape&size=xlarge&ratio=2&imageUrl=https%3a%2f%2fwww.lego.com%2fr%2fwww%2fr%2fcatalogs%2f-%2fmedia%2fcatalogs%2fcharacters%2fminifigures%2fthe%2520lego%2520movie%2f71004_detail_constructionemmet.jpg%3fl.r%3d-185741075',
      //   linkUri: 'https://www.lego.com/en-us/themes/minifigures/characters/hard-hat-emmet-28dfc1f274b048938f908ae73fdc1ab6',
      //   isActive: true
      // },
      // {
      //   name: 'Mermaid Batman',
      //   price: 9.99,
      //   description: `Batman™ is the best at everything, including swimming and holding his breath. But when a mission is going to take him deep down beneath the waves, he puts on his special mermaid suit and grabs his trident for epically awesome underwater adventures. Move over, Aquaman™ – there’s a new guardian of the ocean, and his name is Mermaid Batman!`,
      //   imageUri: 'https://lc-imageresizer-live-s.legocdn.com/resize?mode=landscape&size=xlarge&ratio=2&imageUrl=https%3a%2f%2fwww.lego.com%2fr%2fwww%2fr%2fcatalogs%2f-%2fmedia%2fcatalogs%2fcharacters%2fminifigures%2fbatman%25202%2f1488x837-character-full_mermaidbatman.jpg%3fl.r%3d847280168',
      //   linkUri: 'https://www.lego.com/en-us/themes/minifigures/characters/mermaid-batman-23e87606b81245c49adc597c62a92c83',
      //   isActive: true
      // }
  }

  async componentDidMount() {
    const legos = await getLegos()
    this.setState({ legos })
  }

  render() {
    return (
      <Fragment>
        <List legos={this.state.legos} />
      </Fragment>
    )
  }

}
