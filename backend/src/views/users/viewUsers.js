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
import React, { useEffect, useState } from "react";

// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Table,
  Row,
  Col,
  Pagination,
  Button
} from "reactstrap";
import ReactPaginate from "react-paginate";
import axios from "axios";
import { useHistory } from "react-router-dom";

function ViewUsers() {
    const [users, setUsers] = useState([]);
    const [pageNumber, setPageNumber] = useState(0);
    const usersPerPage = 5;
    const pagesVisited = pageNumber * usersPerPage;
    const history = useHistory();

    useEffect(()=>{

        fetch(`${API}/Admin/allU`)
      .then((response) => response.json())
      .then((data) => setUsers(data));
    },[])

    const deleteUser = async (id) => {
      const result = window.confirm("Are you sure you want to delete?");
      await axios.delete(`${API}/Admin/deleteU/${id}`)
      .then((res) => {
        history.push("/admin/viewUser");
      })

    }

    const editUser =  (id)=>{
      history.push(`/admin/editUser/${id}`)
    }

    const pageCount = Math.ceil(users.length / usersPerPage);
    const changePage = ({ selected }) => {
      setPageNumber(selected);
    };

  return (
    <>
      <div className="content">
        <Row>
          <Col md="12">
            <Card>
              <CardHeader>
                <CardTitle tag="h4" style={{fontWeight: "bold"}}>Display All Users</CardTitle>
              </CardHeader>
              <CardBody>
                <Table responsive>
                  <thead className="text-primary">
                    <tr>
                      <th>Name</th>
                      <th>LastName</th>
                      <th>Email</th>
                      <th>Role</th>
                      <th>Action</th>

                    </tr>
                  </thead>
                  <tbody>                  
                  {users
                  // .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .slice(pagesVisited, pagesVisited + usersPerPage)
                  .map((user) => (
                     <tr key={user._id} >
                     <td>{user.name}</td>
                     <td>{user.lastName}</td>
                     <td>{user.email}</td>
                     <td>{user.role}</td>
                     <td><Button
                      style={{marginTop: "22px" }}
                      variant="danger"
                      onClick={()=> deleteUser(user._id)}
                     >Delete</Button></td>

                     <td>
                      <Button
                       style={{marginTop: "22px" }}
                       variant="secondary"
                       onClick={()=> editUser(user._id)}
                      >Edit</Button>
                     </td>
                 </tr>
                  ))}
                  </tbody>
                </Table>
                <ReactPaginate
                  previousLabel={'Previous'}
                  nextLabel={'Next'}
                  pageCount={pageCount}
                  onPageChange={changePage}
                  containerClassName={'pagination'}
                  previousLinkClassName={'previous_page'}
                  nextLinkClassName={'next_page'}
                  disabledClassName={'disabled'}
                  activeClassName={'active'}
                />
              </CardBody>
            </Card>
          </Col>
         
        </Row>
      </div>
    </>
  );
}

export default ViewUsers;
