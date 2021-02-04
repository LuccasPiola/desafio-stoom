import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from '../pages/Home'
import Suggestion from '../pages/Suggestion'

export default function Routes(): JSX.Element {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/suggestion" component={Suggestion} />
    </Switch>
  )
}
