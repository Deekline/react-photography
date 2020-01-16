import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { MainPage } from './pages/MainPage'
import { AdminPage } from "./pages/AdminPage";
import { ContactUs } from "./pages/ContactUs";
import { AuthPage } from "./pages/AuthPage";
import { Portfolio } from './pages/Portfolio'


export const useRoutes = isAuthenticated => {
  if (!isAuthenticated) {
    return (
      <Switch>
        <Route path='/' exact>
          <MainPage />
        </Route>
        <Route path='/portfolio'>
          <Portfolio />
        </Route>
        <Route path='/contact'>
          <ContactUs />
        </Route>
        <Route path='/auth'>
          <AuthPage />
        </Route>
        <Redirect to='/' />
      </Switch>
    );
  }
  return (
    <Switch>
      <Route path='/admin' exact>
        <AdminPage />
      </Route>
    </Switch>
  );
};