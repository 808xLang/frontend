import React, {useState, useEffect, useContext} from "react";
import { useHistory } from "react-router-dom";
import JoblyApi from "../api/api";
import UserContext from "./userContext";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";


const Profile = () => {
    const history = useHistory();
    const { currentUser, SetCurrentUser } = useContext(UserContext);
    useEffect(() => {
        if(currentUser) {
            setFormData({
                firstName: currentUser.firstName,
                lastName: currentUser.lastName,
                email: currentUser.email,
                username: currentUser.username,
            });
        }
    }, [currentUser]);

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        username: "",
    });
    const [formErrors, setFormErrors] = useState([]);

    console.debug(
        "ProfileForm",
        "currentUser=", currentUser,
        "formData=", formData,
        "formErrors", formErrors,
    );

    async function handleSubmit(event) {
        event.preventDefault();

        let profileData = {
            firstName: formData.firstName,
            lastName: formData.lastName,
            email: formData.email,
        };

        let username = formData.username;
        let updatedUser;
        
        try {
            updatedUser = await JoblyApi.saveProfile(username, profileData);
        } catch (errors) {
            debugger;
            setFormErrors(errors)
            return;
        }
        
        setFormData(f=> ({ ...f, password: ""}));
        setFormErrors([]);

        SetCurrentUser(updatedUser);
        history.push("/")
    }


    function handleChange(evt) {
        const { name, value } = evt.target;
        setFormData(f => ({
            ...f,
            [name]: value,
        }));
        setFormErrors([]);
    }


    return (
        <div>
        <h3>
            Edit your profile!!
        </h3>
        <div>
            <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <Label for="email">Email</Label>
                    <Input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                        />
                </FormGroup>
                <FormGroup >
                        <Label for="firstName">First Name</Label>
                        <Input
                            type="text"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                        />
                    </FormGroup>
                    <FormGroup >
                        <Label for="lastName">Last Name</Label>
                        <Input
                            type="text"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                        />
                    </FormGroup>
                    <Button
                        type="submit"
                        color="primary"
                        onSubmit={handleSubmit}
                    >
                        Submit
                    </Button>
            </Form>
        </div>
        </div>

    )
}

export default Profile;