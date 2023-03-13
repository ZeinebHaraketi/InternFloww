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
import axios from "axios";
import { API } from "config";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";

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
  Col,
  Label
} from "reactstrap";

function CreateSkills() {
    // const [name, setName]= useState('');
    const [formData, setFormData] = useState({
        name: "",
      });

    const history = useHistory();

    const [id, setId] = useState(''); // définir l'état local pour l'ID
  const handleRegisterSkills = async () => {
    try {
      const response = await fetch(`${API}/skills/registerSkills/${id}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: 'nom_de_la_compétence'
        })
      });
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };
    
    // const handleSubmit = async(e)=>{
    //     e.preventDefault();

    //     fetch('/registerSkills/' + id, {
    //         method: 'POST',
    //         headers: {
    //           'Content-Type': 'application/json',
    //           'Authorization': 'Bearer ' + token // inclure un jeton d'authentification si nécessaire
    //         },
    //         body: JSON.stringify({
    //           name: 'nom_de_la_compétence' // remplacer par la valeur souhaitée
    //         })
    //       })
    //       .then(response => {
    //         if (!response.ok) {
    //           throw new Error(response.statusText);
    //         }
    //         return response.json();
    //       })
    //       .then(data => {
    //         console.log(data); // afficher la réponse du serveur dans la console
    //       })
    //       .catch(error => {
    //         console.error(error); // gérer les erreurs éventuelles
    //       });
          

    //     // try {
    //     //     const response = await fetch(`${API}/skills/addSkill`, {
    //     //         method: "POST",
    //     //       headers: {
    //     //         "Content-Type": "application/json"
    //     //       },
    //     //       // body: JSON.stringify({ name,email, password })
    //     //       body: JSON.stringify(formData)
        
    //     //     });
    //     //     history.push("/admin/dashboard");
        
    //     // } catch (error) {
    //     //     console.error("There was a problem with the fetch operation:", error);
    //     // }

    // }

  return (
    <>
      <div className="content">
        <Row>
          
          <Col md="8">
            <Card className="card-user">
              <CardHeader>
                <CardTitle tag="h5" style={{fontWeight: "bold" }}>Add a new Skill</CardTitle>
              </CardHeader>
              <CardBody>
                <Form>
                  
                  <Row>
                    <Col className="pr-1" md="6">
                      <FormGroup>
                        <label>Name</label>
                        <Input
                        placeholder="Name"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                    <Label for="exampleSelect">Select</Label>
                    <Input type="select" name="select" id="exampleSelect"
                    value={id}
                    onChange={(e)=> setId(e.target.value)}
                    >
                        <option value="">Sélectionnez un utilisateur</option>
                        <option value="1">Utilisateur 1</option>
                        <option value="2">Utilisateur 2</option>
                        <option value="3">Utilisateur 3</option>
                    </Input>
                  </Row>

                  
                  <Row>
                    <div className="update ml-auto mr-auto">
                      <Button
                        className="btn-round"
                        color="primary"
                        type="submit"
                        onClick={handleRegisterSkills}
                      >
                        Add a Skill
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

export default CreateSkills;
