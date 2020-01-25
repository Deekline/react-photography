import React from "react";
import {BrowserRouter as Router} from 'react-router-dom'
import "materialize-css";
import { useRoutes } from "./routes";


export const App = () => {
    const routes = useRoutes( false);
    return (
      <Router>
        <div>
          { routes }
        </div>
      </Router>
    );
}
