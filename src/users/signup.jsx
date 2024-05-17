import React, { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";


const Signup = ({ newAccount }) => {


    const history = useHistory();
    const emptyState = {
        username: "",
        password: "",
        firstName: "",
        lastName: "",
        email: ""
    };

    const [formData, setFormData] = useState(emptyState);

    async function submit(e) {
        e.preventDefault();
        let result = await newAccount(formData);
        if (result.success) {
            history.push("/companies")
        } else {
            // what do i do here?
        }
    }

    function handleChange(event) {
        const { name, value } = event.target;
        setFormData(data => ({ ...data, [name]: value }));
    }


    return (
        <div>
            <h3>Make an account today</h3>
            <div>
                <Form onSubmit={submit}>
                    <FormGroup>
                        <Label for="username">Username</Label>
                        <Input
                            type="text"
                            name="username"
                            value={FormData.username}
                            onChange={handleChange}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="password">Username</Label>
                        <Input
                            type="password"
                            name="password"
                            value={FormData.password}
                            onChange={handleChange}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="email">Email</Label>
                        <Input
                            type="email"
                            name="email"
                            value={FormData.email}
                            onChange={handleChange}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="firstName">First Name</Label>
                        <Input
                            type="text"
                            name="firstName"
                            value={FormData.firstName}
                            onChange={handleChange}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="lastName">Last Name</Label>
                        <Input
                            type="text"
                            name="lastName"
                            value={FormData.lastName}
                            onChange={handleChange}
                        />
                    </FormGroup>
                    <Button
                        type="submit"
                        onSubmit={submit}
                    />
                </Form>
            </div>
        </div>

    )
}

export default Signup