import Head from "next/head";
import axios from 'axios';
import { useState } from 'react';
import { userAgent } from "next/server";
import { useRouter } from "next/router";
import { useForm, SubmitHandler } from 'react-hook-form';

type user = {
    username: string;
    password: string;
}

export default function Login() {

    const [userDetail, setUserDetail] = useState<string>('');


    const [username, setName] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    var bodyFormData = new FormData();
    bodyFormData

    console.log(userDetail)

    const login = async () => {
        console.log("Mamai")
        await axios.post('http://localhost:3000/users/login', {
            username: username,
            password: password
        })

            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }



    const router = useRouter();


    // get functions to build form with useForm() hook
    const { register, handleSubmit, formState } = useForm<user>();
    const { errors } = formState;


    const onSubmit: SubmitHandler<user> = (data) => console.log(data)
    // function onSubmit(user: user) {
    //     return login()
    //         .then(() => {
    //             // get return url from query parameters or default to '/'
    //             const returnUrl = 'http://localhost:3000/users/login';
    //             router.push(returnUrl);
    //         })
    //         .catch(err => { });
    // }

    // const handleSubmit = (event: any) => {
    //     event.preventDefault();
    //     console.log(`${username} ${password}`)
    //     // alert(`The name you entered was: ${username}`)




    const user = async () => {
        await localStorage.setItem("username", userDetail)
    }

    const nextPage = () => "window.location.href = 'http://localhost:3001/';"



    return (
        <>
            <Head>
                <title> LOGIN </title>

            </Head>
            <div>


                <Head>
                    <body>
                        {/* <meta name="page login pless login" content="Login page" /> */}
                        <h1 > Login </h1>
                        <a href="http://localhost:3001/register" target="_blank">Register</a>
                    </body>

                    <form onSubmit={handleSubmit(onSubmit)}>

                        <label >Username:</label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            required
                            autoFocus
                            minLength={4}
                            maxLength={12}
                            size={12}
                            onChange={(e) => setName(e.target.value)}
                        // pattern="[A-Z|a-z|0-9|_]{4,}"

                        />
                        <label >Password:</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            required
                            minLength={6}
                            onChange={(e) => setPassword(e.target.value)}
                        />






                        <button disabled={formState.isSubmitting}>
                        {formState.isSubmitting && <span>Loging</span>}
                        Login
                    </button>
                    {/* <input type="submit" value="Login"></input> */}


                </form>


                {/* <button onClick={() => { login() }}>Login</button> */}
                {/* 
                    <a href="http://localhost:3001/">
                        <button type="submit" onClick={()=>setUserDetail(userDetail)} formTarget="_blank"> Login </button>
                    </a> */}


            </Head>




        </div >




        </>





    )

}
