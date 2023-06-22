import { useState } from 'react';

export default function Login() {

    const [formData, setFormData] = useState({
        username: "",
        password: ""
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
                })
                setFormSuccess(true)
                setFormSuccessMessage(data.submission_text)
            })
            .catch(err => console.log(err))
    }

    return (
        <div>
            <h1>LOGING</h1>
            {formSuccess ?
                <div>{formSuccessMessage}</div>
                :
                <form method="POST" action="http://localhost:3000/users/login" onSubmit={submitForm}>
                    <div>
                        <label>Username</label>
                        <input
                            type="text"
                            name="username"
                            required
                            autoFocus
                            minLength={4}
                            maxLength={12}
                            size={12}
                            onChange={handleInput}
                            value={formData.username}
                        />
                    </div>

                    <div>
                        <label>Password</label>
                        <input
                            type="password"
                            name="password"
                            required
                            minLength={6}
                            onChange={handleInput}
                            value={formData.password}
                        />
                    </div>

                    <button type="submit">Login</button>
                </form>
            }
        </div>
    )

}
