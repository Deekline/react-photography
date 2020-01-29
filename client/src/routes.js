import React from "react";
import {Switch, Route, BrowserRouter as Router} from 'react-router-dom';

import {MainPage} from './pages/MainPage';
import { AdminPage } from "./pages/AdminPage";
import { ContactUs } from "./pages/ContactUs";
import {AuthPage}  from "./pages/AuthPage";
import { Portfolio } from './pages/Portfolio'
import AllMenu from './components/AllMenu/AllMenu';


export const useRoutes = () => {

    return (
      <Router>
        <Switch>
          <Route path='/auth' component={AuthPage} />
          <Route path='/admin' component={AdminPage} />
            <div>
              <AllMenu exact/>
              <Route path='/' component={MainPage} exact/>
              <Route path='/portfolio' component={Portfolio} />
              <Route path='/contact' component={ContactUs} />

            </div>
        </Switch>
      </Router>

    );
};