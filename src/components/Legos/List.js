import React, { Fragment } from 'react'
import styled from 'styled-components'

const LegoItem = styled.div`
  border: 1px solid #222222;
  padding: 16px;
  background: #e6e6e6;
  display: flex;
  flex-direction: column;
  margin: 8px;
`
const LegoHeader = styled.section`
  display: flex;
`
const Title = styled.h1`
  padding: 0;
  margin: 0;
`
const Image = styled.img`
  width: 50%;
  height: 50%;
  float: right;
`
const Description = styled.p`
  
`
const Content = styled.section`
  display: flex;
`


export default props => (
  <Fragment>
    <div>
      <h1> Make a Character </h1>
      <input type="text" placeholder="Name" />
    </div>
    <div>
      <input type="text" placeholder="Price" />
    </div>
    { props.legos.map(lego => (
      <LegoItem key={lego._id}>
        <Title><a href={`/${lego._id}`}>{lego.name}</a></Title>
        <Content>
          {/*<Description>{lego.description}</Description>*/}
          <Description dangerouslySetInnerHTML={{__html: lego.description}} />
          <Image src={lego.imageUri} />
        </Content>
      </LegoItem>
    ))}
  </Fragment>
)
