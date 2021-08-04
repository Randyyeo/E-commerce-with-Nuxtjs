import styles from '../styles/Login.module.css'
import Login from '../components/Login'
import Register from '../components/Register'
import { useState } from 'react'
import API from '../api/express'
import { useRouter } from 'next/router';

export default function login() {
    const router = useRouter();

    const [signin, setSignin] = useState(true);

    function toggle() {
        setSignin(!signin);
    }

    async function register(data){
        
        try {
            const res = await API.register;
            router.push('./login');
        } catch (error) {
            console.err(error)
        }
        
    }
    
    async function login(data){
        
        try {
            const res = await API.login;
            router.push('./main');
        } catch (error) {
            console.err(error)
        }
        
 
      }

    return (
        <div className={styles.container}>
            {signin ? <Login toggleForm={toggle} login={login} /> : <Register toggleForm={toggle} register={register}/>}
        </div>  
    )
}