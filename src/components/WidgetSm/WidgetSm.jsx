import { Visibility } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";

const WidgetWrapper = styled.div`
  -webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  padding: 1.25rem;
  flex: 1;
  height: 25rem;
  flex-wrap: wrap;
  overflow-y: scroll;
  font: -webkit-small-control;
`;

const Container = styled.div`
  display: flex;
  padding: 1rem;
  gap: 2rem;
  align-items: center;
  width: 100%;

`;

const Image = styled.img`
  border-radius: 50%;
  height: 2.5rem;
  width: 2.5rem;
  cursor: pointer;
`;
const MemberInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  width: 45%;
`;

const Button = styled.button`
display: flex;
gap:0.25rem;
align-items: center;
background-color: #eeeef7;
border:none;
padding:0.25rem;
border-radius: 5px;
cursor: pointer;
outline:none;
`

const WidgetSm = () => {
  const data = [
    {
      name: "Anna Keller",
      Designation: "Software Developer",
      image:
        "https://images.pexels.com/photos/19812948/pexels-photo-19812948/free-photo-of-woman-in-a-headscarf-in-the-light-of-the-setting-sun.png?auto=compress&cs=tinysrgb&w=600",
    },
    {
      name: "Brant Fabin",
      Designation: "Art Director",
      image:
        "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      name: "Aryana Merrill",
      Designation: "UI/UX Developer",
      image:
        "https://images.pexels.com/photos/7585607/pexels-photo-7585607.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      name: "Russ Linville",
      Designation: "Manager",
      image:
        "https://images.pexels.com/photos/428364/pexels-photo-428364.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      name: "Alisha Davidson",
      Designation: "Software tester",
      image:
        "https://images.pexels.com/photos/19812948/pexels-photo-19812948/free-photo-of-woman-in-a-headscarf-in-the-light-of-the-setting-sun.png?auto=compress&cs=tinysrgb&w=600",
    },
    {
      name: "Tarun",
      Designation: "Test lead",
      image:
        "https://images.pexels.com/photos/810775/pexels-photo-810775.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      name: "Abinav",
      Designation: "Product Manager",
      image:
        "https://images.pexels.com/photos/19812948/pexels-photo-19812948/free-photo-of-woman-in-a-headscarf-in-the-light-of-the-setting-sun.png?auto=compress&cs=tinysrgb&w=600",
    },
    {
      name: "Atul",
      Designation: "Software Developer",
      image:
        "https://images.pexels.com/photos/3764119/pexels-photo-3764119.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      name: "Shanavi",
      Designation: "Business Analyst",
      image:
        "https://images.pexels.com/photos/19812948/pexels-photo-19812948/free-photo-of-woman-in-a-headscarf-in-the-light-of-the-setting-sun.png?auto=compress&cs=tinysrgb&w=600",
    },
  ];

  let membersData = data.map((item) => {
    return (
      <Container>
        <Image src={item.image} alt={item.name} />
        <MemberInfo>
          <h4>{item.name}</h4>
          <p>{item.Designation}</p>
        </MemberInfo>
       <Button> <Visibility /> Display</Button>
      </Container>
    );
  });

  return (
    <WidgetWrapper>
      <h3>New Join Members</h3>
      {membersData}
    </WidgetWrapper>
  );
};

export default WidgetSm;
