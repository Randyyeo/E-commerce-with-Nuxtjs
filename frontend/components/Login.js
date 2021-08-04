import styles from './Login.module.css'
import { useRef } from 'react'

export default function Login({ toggleForm, login }) {
    const email = useRef();
    const password = useRef();


    function submit(e) {
        e.preventDefault();

        
        const enteredEmail = email.current.value;
        const enteredPassword = password.current.value;
        

        const data = {
            email: enteredEmail,
            password: enteredPassword,
        }

        login(data);
        /* router.push('./login'); */

    }

    return (
        <>
            <form className={styles.form} onSubmit={submit}>
                <label htmlFor="username"><strong>Email</strong></label>
                <input className={styles.username} type="text" id="username" ref={ email }/><br />
                <label htmlFor="password"><strong>Password</strong></label>
                <input className={styles.username} type="password" id="password" ref={password}/>
                <button className={styles.button}>Login</button>
            </form>
            <div className={styles.signup}>
                <p>New User? <span className={styles.toggle} onClick={toggleForm}><u>Create an account</u></span></p>
            </div>
            <div>
                
            </div>
        </>
    )
}