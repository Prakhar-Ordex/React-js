import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Table from "react-bootstrap/Table";

const Tables = () => {

  const tableData = [
    { id: 1, name: "John", email: "john@example.com", phone: "1234567890" },
    { id: 2, name: "Jane", email: "jane@example.com", phone: "0987654321" },
    { id: 3, name: "Bob", email: "bob@example.com", phone: "9876543210" },
    { id: 4, name: "Alice", email: "alice@example.com", phone: "1234567890" },
    { id: 5, name: "Tom", email: "tom@example.com", phone: "0987654321" },
    { id: 6, name: "Sarah", email: "sarah@example.com", phone: "1234567890" },
    { id: 7, name: "David", email: "david@example.com", phone: "0987654321" },
    {
      id: 8,
      name: "Emily",
      email: "emily@example.com",
      phone: "1233333333456778",
    },
  ];
  return (
    <div>
      <h4>Bootstrap table </h4>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Username</th>
          </tr>
        </thead>
              <tbody>
                  {
                      tableData.map((data, index) => (
                        <tr key={data.id}>
                          <td>{data.id}</td>
                          <td>{data.name}</td>
                          <td>{data.email}</td>
                          <td>{data.phone}</td>
                        </tr>
                      ))
                  }
       
        </tbody>
      </Table>
    </div>
  );
};

export default Tables;
