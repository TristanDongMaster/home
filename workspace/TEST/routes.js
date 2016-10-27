import React from 'react'
import { Route } from 'react-router'
import App from './containers/App'
import * as AppConst from './constants/AppConst'

let base = AppConst.BASE
export default (
  <Route path={base} component={App}>
    <Route path={base+"/wallet"} component={Index} />
  </Route>
)
