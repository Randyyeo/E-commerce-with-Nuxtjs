import styles from './Login.module.css'
import { useState, useRef } from 'react';


export default function Register({ register, toggleForm }) {
    
    const name = useRef();
    const email = useRef();
    const password = useRef();
    const re_password = useRef();

    function submit(e) {
        e.preventDefault();

        const enteredName = name.current.value;
        const enteredEmail = email.current.value;
        const enteredPassword = password.current.value;
        const enteredRePassword = re_password.current.value;

        const data = {
            name: enteredName,
            email: enteredEmail,
            password: enteredPassword,
            re_password: enteredRePassword
        }

        register(data);
        /* router.push('./login'); */

    }

    return (
        <>
            <form className={styles.form} onSubmit={submit}>
                <label htmlFor="username"><strong>Name</strong></label>
                <input className={styles.username} type="text" ref={name}/><br />
                <label htmlFor="username"><strong>Email</strong></label>
                <input className={styles.username} type="text" ref={email}/><br />
                <label htmlFor="password"><strong>Password</strong></label>
                <input className={styles.username} type="password" ref={password}/>
                <label htmlFor="password"><strong>Re-confirm Password</strong></label>
                <input className={styles.username} type="password" ref={re_password}/>
                <button className={styles.button}>Register</button>
                
            </form>
            <div className={styles.signup}>
                <p>Already have an account? <span className={styles.toggle} onClick={toggleForm}><u>Let's sign in!</u></span></p>
            </div>
            
        </>
    )
}