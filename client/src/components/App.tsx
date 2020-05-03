import { hot } from 'react-hot-loader/root'
import React, { PureComponent } from 'react'
import { withRouter, RouteComponentProps, Route } from 'react-router-dom'

class App extends PureComponent<RouteComponentProps> {
  constructor(props: RouteComponentProps) {
    super(props)
  }

  componentDidMount() {

  }

  render() {
    return (
      <Route path='/' exact={true}>
        <>
          Hello
        </>
      </Route>
    )
  }
}

export default withRouter(hot(App))