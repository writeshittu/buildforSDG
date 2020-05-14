import React, { Component } from 'react';
import { Button,Form,Modal } from 'react-bootstrap';


 class SignUp extends Component {
     constructor(props){
         super(props)
         this.state={
             Surname : "",
             email : "",
             password : [],
             modalShow: false,
             modalTitle: "",
         }
         this.onChange = this.onChange.bind(this);
         this.onSubmit = this.onSubmit.bind(this);
         
     }
        onChange(event){
            this.setState({
                [event.target.name]: event.target.value
            })
        }

        onSubmit(event){
            event.preventDefault();

        }
        setModalHide = () => {
            this.setState({ modalShow: false, modalTitle: "", });
          };
        
          setModalShow = () => {
            this.setState({ modalShow: true ,modalTitle: "Please Sign Up here."});
          };
    render() {
        return (<div>
            <p onClick={() =>
              this.setModalShow(true)
            }>Sign Up</p>
           
            <Modal
            closeButton
            size="md"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            show={this.state.modalShow}
            onHide={() => this.setModalHide(false)}
          >
            <Modal.Header className="tc5 br4" closeButton>
             {this.state.modalTitle}
            </Modal.Header>
            <Modal.Body className="center">
            <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label> Name</Form.Label>
                    <Form.Control type="text" name="name" placeholder="Enter Fullname" />
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="password" placeholder="Password" />
                </Form.Group>
               
                <Button className="w-100" variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
            </Modal.Body>
           
          </Modal>
        </div>
        )
    }
}

export default SignUp;
