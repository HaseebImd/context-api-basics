import React from "react";
import { useUser } from "../context/index.js"; // Adjust the import path as necessary

export default function UserProfile() {
    const { user, login, logout } = useUser();

    return (
        <div className="card">
            <h2>User Profile</h2>
            {user.loggedIn ? (
                <>
                    <p>Name: {user.name}</p>
                    <button onClick={logout}>Logout</button>
                </>
            ) : (
                <>
                    <p>User not logged in</p>
                    <button onClick={() => login("Jane Smith")}>Login as Jane</button>
                </>
            )}
        </div>
    );
}
