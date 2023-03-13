/*!

=========================================================
* Paper Dashboard React - v1.3.1
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

* Licensed under MIT (https://github.com/creativetimofficial/paper-dashboard-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import { API } from "../../config";
import React, { useState } from "react";
import { useHistory, useParams } from "react-router-dom";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  FormGroup,
  Form,
  Input,
  Row,
  Col
} from "reactstrap";

function EditUser({ user = { name: "", lastName: "", email: "", role: "" } }) {
    const { id } = useParams();
    const [name, setName] = useState(user.name);
    const [lastName, setLastName] = useState(user.lastName);
    const [email, setEmail] = useState(user.email);
    const [password, setPassword] = useState("");
    const [role, setRole] = useState(user.role);
  
    const formData = new FormData();
    formData.append("name", name);
    formData.append("lastName", lastName);
    formData.append("email", email);
    formData.append("password", password);
    formData.append("role", role);


    const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`${API}/Admin/users/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      //   onUpdate(data.user);

      history.push("/admin/dashboard");
    } catch (error) {
      console.error("There was a problem with the fetch operation:", error);
    }
  };
 

  return (
    <>
      <div className="content">
        <Row>
          
          <Col md="8">
            <Card className="card-user">
              <CardHeader>
                <CardTitle tag="h5" style={{fontWeight: "bold" }}>Edit a  User</CardTitle>
              </CardHeader>
              <CardBody>
                <Form onSubmit={handleSubmit}>
                  

                  <Row>
                  <Col  md="6">
                      <FormGroup>
                        <label>Name</label>
                        <Input
                        placeholder="Name"
                        type="text"
                        value={name}
                          onChange={(event) => setName(event.target.value)}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="6">
                      <FormGroup>
                        <label>Last Name</label>
                        <Input
                          placeholder="Last Name"
                          type="text"
                          value={lastName}
                          onChange={(event) => setLastName(event.target.value)}

                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="6">
                      <FormGroup>
                        <label>Email</label>
                        <Input
                          placeholder="Email"
                          type="email"
                          value={email}
                          onChange={(event) => setEmail(event.target.value)}

                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="6">
                      <FormGroup>
                        <label>Password</label>
                        <Input
                          placeholder="Password"
                          type="password"
                          value={password}
                          onChange={(event) => setPassword(event.target.value)}

                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="6">
                      <FormGroup>
                        <label>Role</label>
                        <select id="role" value={role} onChange={(event) => setRole(event.target.value)}>
                            <option value="admin">Admin</option>
                            <option value="formateur">Trainer</option>
                            <option value="company">Company</option>
                            <option value="condidat">Intern</option>
                        </select>
                        {/* <Input
                          placeholder="Role"
                          type="text"
                          value={formData.role}
                          onChange= {(e)=> setFormData({ ...formData, role: e.target.value})}

                        /> */}
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <div className="update ml-auto mr-auto">
                      <Button
                        className="btn-round"
                        color="primary"
                        type="submit"
                      >
                        Update User
                      </Button>
                    </div>
                  </Row>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default EditUser;
