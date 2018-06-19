import React, { Fragment } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import styled from 'styled-components'
import LegosPage from '../Legos'
import LegoPage from '../Lego'

const Header = styled.header`
  background: #222222;
  padding: 16px;
  color: white;
`

const Main = styled.main`
  flex: 1;
  padding: 16px;
`

const Footer = styled.header`
  background: #cdcdcd;
  padding: 16px;
  color: #222222;
`

export default () => (
  <Fragment>
    <Header>Lego Store</Header>
    <Main>
      <Router>
        <Switch>
          <Route exact path="/" component={LegosPage} />
          <Route path="/:id" component={LegoPage} />
          <Route component={() => (<Fragment><h1>Not Found</h1></Fragment>)} />
        </Switch>
      </Router>
    </Main>
    <Footer>
      Footer Information
    </Footer>
  </Fragment>
)
