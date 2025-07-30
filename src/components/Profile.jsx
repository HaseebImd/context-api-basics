import React, {useContext} from 'react';
import UserContext from "../context/UserContext.js";

const Profile = () => {
    const { user } = useContext(UserContext);
    if(!user) {
        return <div style={{ textAlign: 'center', marginTop: '20px' }}>Please log in to view your profile.</div>;
    }
    return (
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
            <h1>Profile</h1>
            <p><strong>Username:</strong> {user.username}</p>
            <p><strong>Status:</strong> Active</p>
            <p><strong>Last Login:</strong> {new Date().toLocaleString()}</p>
        </div>
    );
};

export default Profile;