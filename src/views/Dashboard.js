import React from 'react';

function Dashboard(props) {
    const handleLogout = () => {
        props.history.push('/login');
    }

    return (
        <div>
            You're logged in!
            <input type="button" onClick={handleLogout} value ="Logout"></input>
        </div>
    );
}

export default Dashboard;