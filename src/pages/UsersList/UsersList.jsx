import React from "react";
import styled from "styled-components";
import { DataGrid } from "@material-ui/data-grid";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { Link } from "react-router-dom";
const Container = styled.section`
  flex: 4;
`;

const Image = styled.img`
  border-radius: 50%;
  height: 2.5rem;
  width: 2.5rem;
  cursor: pointer;
`;

const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const Button = styled.button`
  border: none;
  border-radius: 10px;
  padding: 5px 10px;
  background-color: #3bb077;
  color: white;
  cursor: pointer;
`;

const UsersList = () => {
  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "user",
      headerName: "User",
      renderCell: (params) => {
        return (
          <ImageContainer>
            <Image src={params.row.avatar} alt="" />
            {params.row.username}
          </ImageContainer>
        );
      },
      width: 150,
      editable: true,
    },
    {
      field: "email",
      headerName: "Email",
      width: 200,
      editable: true,
    },
    {
      field: "status",
      headerName: "Status",
      width: 150,
      editable: true,
    },
    {
      field: "transaction",
      headerName: "Transaction",
      width: 180,
      editable: true,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      editable: true,
      renderCell: (params) => {
        return (
          <div style={{display:'flex', alignItems:'center', gap:'1rem'}}>
            <Link to={`/users/ ${params.row.id}`}>
            <Button>Edit</Button>
            </Link>
              <DeleteOutlineIcon style={{color:'red'}}/>
            
          </div>
        );
      },
    },
  ];

  const rows = [
    {
      id: 1,
      email: "john@gmail.com",
      status: "active",
      transaction: "$120.00",
      action: "edit",
      avatar: "https://picsum.photos/536/354",
      username: "Snow",
    },
    {
      id: 2,
      email: "john@gmail.com",
      status: "active",
      transaction: "$120.00",
      action: "edit",
      avatar: "https://picsum.photos/536/354",
      username: "Snow",
    },
    {
      id: 3,
      email: "john@gmail.com",
      status: "active",
      transaction: "$120.00",
      action: "edit",
      avatar: "https://picsum.photos/536/354",
      username: "Snow",
    },
    {
      id: 4,
      email: "john@gmail.com",
      status: "active",
      transaction: "$120.00",
      action: "edit",
      avatar: "https://picsum.photos/536/354",
      username: "Snow",
    },
    {
      id: 5,
      email: "john@gmail.com",
      status: "active",
      transaction: "$120.00",
      action: "edit",
      avatar: "https://picsum.photos/536/354",
      username: "Snow",
    },
    {
      id: 6,
      email: "john@gmail.com",
      status: "active",
      transaction: "$120.00",
      action: "edit",
      avatar: "https://picsum.photos/536/354",
      username: "Snow",
    },
    {
      id: 7,
      email: "john@gmail.com",
      status: "active",
      transaction: "$120.00",
      action: "edit",
      avatar: "https://picsum.photos/536/354",
      username: "Snow",
    },
    {
      id: 8,
      email: "john@gmail.com",
      status: "active",
      transaction: "$120.00",
      action: "edit",
      avatar: "https://picsum.photos/536/354",
      username: "Snow",
    },
    {
      id: 9,
      email: "john@gmail.com",
      status: "active",
      transaction: "$120.00",
      action: "edit",
      avatar: "https://picsum.photos/536/354",
      username: "Snow",
    },
    {
      id: 10,
      email: "john@gmail.com",
      status: "active",
      transaction: "$120.00",
      action: "edit",
      avatar: "https://picsum.photos/536/354",
      username: "Snow",
    },
    {
      id: 11,
      email: "john@gmail.com",
      status: "active",
      transaction: "$120.00",
      action: "edit",
      avatar: "https://picsum.photos/536/354",
      username: "Snow",
    },
  ];

  return (
    <Container>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={8}
        checkboxSelection
        disableSelectionOnClick
      />
    </Container>
  );
};

export default UsersList;
