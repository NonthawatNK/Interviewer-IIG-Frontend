import Head from "next/head";
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

export default function Register() {

    const  router = useRouter()


    


  






        
    return (
        <>
            <Head>
                <title> REGISTER </title>

            </Head>
            <div>


                <Head>
                    <body>
                        {/* <meta name="page login pless login" content="Login page" /> */}
                        <h1 > Register </h1>
                    </body>

                    <form action="/send-data-here" method="post">

                        <label htmlFor="Username">Username:</label>
                        <input
                            type="text"
                            id="Username"
                            name="Username"
                            required
                            autoFocus
                            minLength={4}
                            maxLength={12}
                            size={12}
                            pattern="[A-Z|a-z|0-9|_]"

                        />
                        <label htmlFor="password">Password:</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            required
                            minLength={6}
                        />

                        <label htmlFor="Firstname">Firstname:</label>
                        <input
                            type="Firstname"
                            id="Firstname"
                            name="Firstname"
                            required
                            minLength={1}
                            maxLength={60}
                            size={60}
                        />

                        <label htmlFor="Lastname">Lastname:</label>
                        <input
                            type="Lastname"
                            id="Lastname"
                            name="Lastname"
                            minLength={1}
                            maxLength={60}
                            size={60}
                        />

                        <label htmlFor = "myfile"> Select a file:</label>
                        <input type="file" id ="myfile" name="myfile"></input>




                        <button type="submit">Register</button>
                    </form>



                </Head>




            </div>




        </>
    )
}