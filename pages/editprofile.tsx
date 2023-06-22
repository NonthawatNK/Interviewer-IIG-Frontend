import Head from "next/head";


export default function EditProfile(){

  return  (
    <>
        <Head>
            <title> EditPROFILE </title>
            

        </Head>
        <div>


            <Head>
                <body>
                    {/* <meta name="page login pless login" content="Login page" /> */}
                    <h1 > Editprofile </h1>
                </body>

                <form action="/send-data-here" method="post">

                    <label htmlFor="Username">Username:</label>
                    <input
                        type="text"
                        id="Username"
                        name="Username"
                        // value ต้องไปเอา username ณ ขนาดที่เขา Login อยู่
                        value="qwerqwer"
                        disabled

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




                    <button type="submit">Editprofile</button>
                    <a href="http://localhost:3000/login" target="_top">Logout</a>
                </form>



            </Head>




        </div>




    </>
)
}