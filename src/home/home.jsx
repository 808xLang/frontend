import React, {  createContext, useState, useContext } from 'react';
import UserContext from '../users/userContext';
import { withRouter } from 'react-router-dom/cjs/react-router-dom.min';
import { Button } from 'reactstrap';

const Home = () => {
    const { currentUser } = useContext(UserContext);

    return (
        <div>
            {currentUser ? (
                <p>Hey welcome back, {currentUser?.username}!</p>
            ) : (
                <div>
                    <p>Welcome to Jobly please sign in</p>
                    <Button />
                </div>
            )}
        </div>
    )
}

export default withRouter(Home)