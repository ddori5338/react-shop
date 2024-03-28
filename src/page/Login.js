import React from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from "react-router-dom";

const Login = ({setAuthenticate}) => {
    const navigate = useNavigate();
    // Form 태그 안의 로그인 버튼의 type이 submit이면 onClick으로 이벤트를 주면 안 됨.
    // onSubmit으로 이벤트를 줘야 함.
    // Form이 매번 새로고침을 하는 것을 막기 위해 event.preventDefault()를 해야 함.
    // Form 자체에서 주는 이벤트가 있는데 이것을 파라미터로 받아와서 쓰는 것임.
    const loginUser = (event) => {
        event.preventDefault();
        setAuthenticate(true);
        navigate('/');
    }

    return (
        <Container>
            <Form onSubmit={(event) => loginUser(event)}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="danger" type="submit">
                    로그인
                </Button>
            </Form>
        </Container>
    )
}

export default Login
