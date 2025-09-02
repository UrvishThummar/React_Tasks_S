import React, { useState } from "react";

function Navbarr({ user, onLogout, theme, toggleTheme }) {
    return (
        <nav
            style={{
                padding: "10px",
                background: theme === "dark" ? "#222" : "#eee",
                color: theme === "dark" ? "#fff" : "#000",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
            }}
        >
            <div>
                <span style={{ fontWeight: "bold", fontSize: "18px" }}>MySite</span>
                <span style={{ marginLeft: "20px" }}>
                    {user ? `Welcome, ${user} `: "Guest"}
                </span>
            </div>

            <div>
                <button
                    onClick={toggleTheme}
                    style={{
                        marginRight: "10px",
                        padding: "5px 10px",
                        cursor: "pointer",
                    }}
                >
                    {theme === "dark" ? "Light Mode" : "Dark Mode"}
                </button>

                {user && (
                    <button
                        onClick={onLogout}
                        style={{
                            padding: "5px 10px",
                            cursor: "pointer",
                        }}
                    >
                        Logout
                    </button>
                )}
            </div>
        </nav>
    );
}

export default function Nav1() {
    const [user, setUser] = useState(null); // logged-in user
    const [users, setUsers] = useState([]); // registered users list
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [isRegister, setIsRegister] = useState(false); // toggle login/register
    const [theme, setTheme] = useState("light"); // light by default

    const toggleTheme = () =>
        setTheme((prev) => (prev === "light" ? "dark" : "light"));

    const handleRegister = () => {
        if (!username.trim() || !password.trim()) {
            alert("Please enter username and password!");
            return;
        }

        if (users.find((u) => u.username === username)) {
            alert("User already exists! Please login.");
            return;
        }

        setUsers([...users, { username, password }]);
        alert("Registration successful! Now login.");
        setIsRegister(false);
        setUsername("");
        setPassword("");
    };

    const handleLogin = () => {
        const foundUser = users.find(
            (u) => u.username === username && u.password === password
        );

        if (foundUser) {
            setUser(foundUser.username);
            setUsername("");
            setPassword("");
        } else {
            alert("Invalid username or password!");
        }
    };

    const handleLogout = () => setUser(null);

    return (
        <div
            style={{
                minHeight: "100vh",
                background: theme === "dark" ? "#111" : "#fafafa",
                color: theme === "dark" ? "#fff" : "#000",
                transition: "all 0.3s ease",
            }}
        >
            <Navbar user={user} onLogout={handleLogout} theme={theme} toggleTheme={toggleTheme} />

            {!user && (
                <div style={{ padding: "20px" }}>
                    <h2>{isRegister ? "Register" : "Login"}</h2>
                    <input
                        type="text"
                        placeholder="Enter username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        style={{ padding: "5px", marginRight: "10px" }}
                    />
                    <input
                        type="password"
                        placeholder="Enter password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        style={{ padding: "5px", marginRight: "10px" }}
                    />
                    {isRegister ? (
                        <button onClick={handleRegister} style={{ padding: "5px 10px" }}>
                            Register
                        </button>
                    ) : (
                        <button onClick={handleLogin} style={{ padding: "5px 10px" }}>
                            Login
                        </button>
                    )}

                    <div style={{ marginTop: "10px" }}>
                        {isRegister ? (
                            <span>
                                Already have an account?{" "}
                                <button onClick={() => setIsRegister(false)}>Login here</button>
                            </span>
                        ) : (
                            <span>
                                Don't have an account?{" "}
                                <button onClick={() => setIsRegister(true)}>
                                    Register here
                                </button>
                            </span>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}
