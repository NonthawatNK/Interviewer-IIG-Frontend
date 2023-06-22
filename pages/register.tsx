import { data } from "autoprefixer";
import Head from "next/head";
import { useRouter } from 'next/router';
import { useState } from 'react';


export default function Register() {


    const [formData, setFormData] = useState({
        username: "",
        password: "",
        firstname: "",
        lastname: "",
        file: ""
    });


    const [formSuccess, setFormSuccess] = useState(false)
    const [formSuccessMessage, setFormSuccessMessage] = useState("")

    const handleInput = (e: any) => {
        const fieldName = e.target.name;
        const fieldValue = e.target.value;

        setFormData((prevState) => ({
            ...prevState,
            [fieldName]: fieldValue
        }));
    }

    const submitForm = (e: any) => {

        e.preventDefault()

        const formURL = e.target.action
        const data = new FormData()

        // data.append("profile_picture", e.target.files[0]);

        Object.entries(formData).forEach(([key, value]) => {
            data.append(key, value);
        })


        fetch(formURL, {
            method: "POST",
            body: data,
            headers: {
                'accept': 'application/json',
            },
        }).then((response) => {

            return response.json()
        })

            .then((data) => {
                console.log(data)
                setFormData({
                    username: "",
                    password: "",
                    firstname: "",
                    lastname: "",
                    file: ""
                })
                setFormSuccess(true)
                setFormSuccessMessage(data.submission_text)
            })
            .catch(err => console.log(err))
    }


    




    return (
        <div>
            <title> REGISTER </title>
            <h1>REGISTER</h1>
            {formSuccess ?
                <div>{formSuccessMessage}</div>
                :
                <form action="http://localhost:3000/users/create" method="post" onSubmit={submitForm}>

                    <div>
                        <label htmlFor="username">Username:</label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            required
                            autoFocus
                            minLength={4}
                            maxLength={12}
                            size={12}
                            onChange={handleInput}
                        // pattern="[A-Z|a-z|0-9|_]"

                        />
                    </div>

                    <div>
                        <label htmlFor="password">Password:</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            required
                            minLength={6}
                            onChange={handleInput}
                        />
                    </div>

                    <div>
                        <label htmlFor="Firstname">Firstname:</label>
                        <input
                            type="Firstname"
                            id="Firstname"
                            name="Firstname"
                            required
                            minLength={1}
                            maxLength={60}
                            size={60}
                            onChange={handleInput}
                        />
                    </div>

                    <div>
                        <label htmlFor="Lastname">Lastname:</label>
                        <input
                            type="Lastname"
                            id="Lastname"
                            name="Lastname"
                            minLength={1}
                            maxLength={60}
                            size={60}
                            onChange={handleInput}
                        />
                    </div>

                    <div>
                        <label htmlFor="file"> Select a file:</label>
                        <input
                            type="file"
                            id="file"
                            name="file"
                            onChange={handleInput}

                        />
                    </div>


                    

                    <button type="submit">Register</button>
                </form>

            }
        </div>
    )
}