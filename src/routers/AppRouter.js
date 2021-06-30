import React, { useContext } from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";

import { AuthContext } from "../auth/AuthContext";
import { DashboardRouter } from "./DashboardRouter";
import { LoginScreen } from "../components/login/LoginScreen";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";

export const AppRouter = () => {
    const { user } = useContext(AuthContext);

    return (
        <Router>
            <div>
                <Switch>
                    <PublicRoute
                        isAuth={user.logged}
                        component={LoginScreen}
                        exact
                        path="/login"
                    />
                    <PrivateRoute
                        isAuth={user.logged}
                        component={DashboardRouter}
                        path="/"
                    />
                </Switch>
            </div>
        </Router>
    )
}
