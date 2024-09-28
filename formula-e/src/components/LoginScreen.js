import React, { useState } from "react";
import styles from "../styles/login.module.css"; // Importa o CSS module

function Login({ onLogin }) {
    const [username, setUsername] = useState(""); // Estado para capturar o username

    const handleSubmit = (e) => {
        e.preventDefault(); // Impede o comportamento padrão do formulário

        // Salva o username no localStorage
        localStorage.setItem("username", username);

        // Informa ao App.js que o login foi bem-sucedido
        onLogin();
    };

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Login</h1>
            <form onSubmit={handleSubmit} className={styles.form}>
                <label>Username</label>
                <input
                    type="text"
                    required
                    className={styles.input}
                    value={username}
                    onChange={(e) => setUsername(e.target.value)} // Atualiza o estado do username
                />
                <label>Email</label>
                <input type="email" required className={styles.input} />
                <label>Password</label>
                <input type="password" required className={styles.input} />
                <button type="submit" className={styles.button}>Login</button>
            </form>
        </div>
    );
}

export default Login;

