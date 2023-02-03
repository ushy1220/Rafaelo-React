import styles from './Login.module.scss';
import axios from 'axios';
import { useRef, useState, useEffect } from 'react';
import ColumnList from '../MessagesColumnList/ColumnList';

const Login = () => {

    const loginRef = useRef();
    const errRef = useRef();

    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [err, setErr] = useState('');
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        loginRef.current.focus();
    }, [])

    useEffect(() => {
        setErr('');
    }, [login, password])

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(login, password);
        setLogin('');
        setPassword('');
        if(login === "rafal" && password === "plewinski") {
            setSuccess(true);
        } else {
            <Login />
        }
        
    }

    return (
        <>
            {success ? (
                <ColumnList />
            ) : (
                <section className={styles.container}>
                    <form className={styles.form} onSubmit={handleSubmit} method='post'>
                        <label className={styles.label}>Login:</label>
                        <input 
                            className={styles.input} 
                            type="text" 
                            name="login" 
                            id="login"
                            ref={loginRef}
                            onChange={(e) => setLogin(e.target.value)}
                            value={login}
                            required>
                        </input><br />

                        <label className={styles.label}>Password:</label>
                        <input 
                            className={styles.input} 
                            type="password" 
                            name="password" 
                            id="password"
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                            required>
                        </input><br />

                        <input 
                            className={styles.submit} 
                            type="submit" 
                            name="submit" 
                            value="Log in">
                        </input>

                        <p 
                            ref={errRef} 
                            className={err ? "Error" : "offscreen"} aria-live="assertive"
                        >
                            {err}
                        </p>
                    </form>
                </section>
            )}
            
        </>
    )
}

export default Login;