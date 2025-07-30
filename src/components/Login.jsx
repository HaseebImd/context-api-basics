import React from 'react';
    import UserContext from "../context/UserContext.js";

    const styles = {
        container: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            background: '#f5f6fa',
        },
        card: {
            background: '#fff',
            padding: '2rem',
            borderRadius: '8px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
            minWidth: '320px',
        },
        input: {
            width: '100%',
            padding: '0.5rem',
            margin: '0.5rem 0 1rem 0',
            borderRadius: '4px',
            border: '1px solid #ccc',
            fontSize: '1rem',
        },
        button: {
            width: '100%',
            padding: '0.75rem',
            background: '#4f8cff',
            color: '#fff',
            border: 'none',
            borderRadius: '4px',
            fontSize: '1rem',
            cursor: 'pointer',
            fontWeight: 'bold',
        },
        label: {
            fontWeight: '500',
            marginBottom: '0.25rem',
            display: 'block',
        }
    };

    const Login = () => {
        const [username, setUsername] = React.useState('');
        const [password, setPassword] = React.useState('');
        const { setUser } = React.useContext(UserContext);
        const handleLogin = (e) => {
            e.preventDefault();

            if (username && password) {
                setUser({ username });
                alert(`Welcome, ${username}!`);
            } else {
                alert('Please enter both username and password.');
            }
        };
        return (
            <div style={styles.container}>
                <div style={styles.card}>
                    <h2 style={{textAlign: 'center', marginBottom: '1.5rem'}}>Login</h2>
                    <form>
                        <div>
                            <label htmlFor="username" style={styles.label}>Username:</label>
                            <input
                                type="text"
                                id="username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                style={styles.input}
                            />
                        </div>
                        <div>
                            <label htmlFor="password" style={styles.label}>Password:</label>
                            <input
                                type="password"
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                style={styles.input}
                            />
                        </div>
                        <button type="submit" onClick={handleLogin} style={styles.button}>Login</button>
                    </form>
                </div>
            </div>
        );
    };

    export default Login;