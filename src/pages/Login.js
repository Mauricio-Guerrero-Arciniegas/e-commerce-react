import axios from "axios";
import React from "react";
import { Button, Card, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const Login = () => {

    const { register, handleSubmit } = useForm();

    const navigate = useNavigate();

    const submit = data => {
        axios.post("https://ecommerce-api-react.herokuapp.com/api/v1/users/login", data)
            .then(res => {
            console.log(res.data.data.token)
            localStorage.setItem("token", res.data.data.token)
            navigate("/")
            alert("Sesión iniciada correctamente")
            })
                .catch(error => {
                    console.log(error.response.status)
                    if(error.response?.status === 404){
                        alert("Credenciales incorrectas")
                    }
                })
        
    }


  return (
    <div className="main">
        <Card style={{maxWidth:"500px"}} className="mx-auto">
            <Card.Body className="cardbody">
        <h2 className="welcome">Welcome ! Enter your email and <br></br> password to continue</h2>
                <Form onSubmit={handleSubmit(submit)}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control {...register("email")} type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                       
                    </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control {...register("password")} type="password" placeholder="Password" />
                    </Form.Group>
                   
                    <Button className="loginbutton" type="submit">
                    Login
                    </Button>
                </Form>

            </Card.Body>
        </Card>
    </div>
  );
};

export default Login;
