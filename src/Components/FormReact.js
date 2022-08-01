import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

class FromReact extends React.Component {

    render() {
        return (
            <div className="p-5">
                <Form>
                    <Form.Group className="mb-3" controlId="formEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter Name" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formAge">
                        <Form.Label>Age</Form.Label>
                        <Form.Control type="number" placeholder="Enter Age" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formCI">
                        <Form.Label>CI</Form.Label>
                        <Form.Control type="text" placeholder="Enter CI" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formHaveLaptop">
                        <Form.Check type="checkbox" label="Have laptop" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Registrar
                    </Button>
                </Form>
            </div>
        );
    }
}
export default FromReact;