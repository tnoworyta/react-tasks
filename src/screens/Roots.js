import React from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'

import ScreensUserList from './User/List'
import ScreensUserEdit from './User/Edit'
import ScreensProductList from './Product/List'

const ScreensRoot = () => (
  <Router>
    <Switch>
      <Route path="/user/list" component={ScreensUserList} />
      <Route path="/user/:id/edit" component={ScreensUserEdit} />
      <Route path="/product/list" component={ScreensProductList} />
      <Redirect from="/" to="/user/list" />
    </Switch>
  </Router>
)

export default ScreensRoot
