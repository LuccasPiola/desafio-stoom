import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from '../pages/Home'
import StepController from '../pages/Steps'
import Suggestion from '../pages/Suggestion/controller'

export default function Routes(): JSX.Element {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/sugestao" component={Suggestion} />
      <Route path="/pizza" component={StepController} />
    </Switch>
  )
}
