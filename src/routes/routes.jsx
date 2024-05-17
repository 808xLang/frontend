// import React from "react";
import React, { useState, useEffect, createContext, useContext } from 'react'

import { Route, Switch } from 'react-router-dom'
import axios from 'axios'
import JoblyApi from "../api/api";
import Home from '../home/home'
import Companies from '../companies/companies'
import Jobs from '../jobs/jobs'
import Login from '../users/login'
import Signup from '../users/signup'
import Profile from '../users/profile'
import companyDetails from '../companies/companyDetails'


function Routes({ signup, login }) {
    const [isLoading, setIsLoading] = useState(true);
    const [companies, setCompanies] = useState([]);
    const [jobs, setJobs] = useState([]);
    const [user, setUser] = useState(null);

    useEffect(() => {

        const fetchCompanies = async () => {
            let response = await axios.get('http://localhost:3001/companies');
            // console.log(response)
            setCompanies(response.data.companies);
            console.log({ response });
        };
        const allJobs = async () => {
            let jobs = await JoblyApi.getJobs();
            setJobs(jobs);
            console.log({ jobs })
        }
        fetchCompanies();
        allJobs();
    }, [])



    return (
        <div>
            <Switch>
                <Route exact path="/">
                    <Home {...{ user, setUser }} />
                </Route>
                <Route exact path="/companies">
                    <Companies companies={companies} />
                </Route>
                <Route exact path="/companies/:id">
                    <Companies />
                </Route>
                <Route exact path="/jobs">
                    <Jobs jobs={jobs} />
                </Route>
                <Route exact path="/login" component={Login}>
                    <Login login={login} />
                </Route>
                <Route exact path="/signup" component={Signup}>
                    <Signup signup={signup} />
                </Route>
                <Route exact path="/profile">
                    <Profile />
                </Route>

            </Switch>
        </div>
    )
}

export default Routes