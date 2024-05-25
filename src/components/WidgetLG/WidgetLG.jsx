import React from "react";
import styled from "styled-components";

const WidgetWrapper = styled.div`
  -webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  padding: 1.25rem;
  flex: 2;
  gap: 2rem;
`;

const Table = styled.table`
  width: 100%;
  border-spacing: 20px;
`;

const Image = styled.img`
  border-radius: 50%;
  height: 2.5rem;
  width: 2.5rem;
  cursor: pointer;
`;

const Th = styled.th`
text-align: left;
align-items: center;
`
const Td = styled.td`

display: ${props => props.Name ? 'flex' : ""};
gap: ${props => props.Name ? '0.75rem' : ""};
font-weight:  ${props => props.weight ? '600' : "300"};
align-items: center;
`

const Button = styled.button`
outline: none;
border-radius: 5px;
padding: 0.5rem;
border: none;
background-color: ${(props) => props.$Approved ? '#e5faf2' : props.$Declined ? '#fff0f1' : props.$Pending ? '#ebf1fe': 'white'};
color:  ${(props) => props.$Approved ? '#3bb077' : props.$Declined ? '#d95087' : props.$Pending ? '#3bb077': 'white'};;
`


const WidgetLG = () => {
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

  return (
    <WidgetWrapper>
      <h3>Latest Transactions</h3>
      <Table>
        <thead>
          <tr>
            <Th>Customer</Th>
            <Th>Date</Th>
            <Th>Amount</Th>
            <Th>Status</Th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <Td Name weight>
              <Image src={data[0].image} alt={data[0].name} />
              <span>name</span>
            </Td>
            <Td>
              <p>23 May 2021</p>
            </Td>
            <Td>
              <p>$122.00</p>
            </Td>
            <Td >
              <Button $Approved>Approved</Button>
            </Td>
            </tr>
            <tr>
            <Td Name weight>
              
              <Image src={data[1].image} alt={data[1].name} />
              <span>name</span>
            </Td>
            <Td>
              <p>23 May 2021</p>
            </Td>
            <Td>
              <p>$122.00</p>
            </Td>
            <Td>
              <Button $Declined>Approved</Button>
            </Td>
          </tr>
          <tr>
            <Td Name weight> 
              <Image src={data[2].image} alt={data[2].name} />
              <span>name</span>
            </Td>
            <Td>
              <p>23 May 2021</p>
            </Td>
            <Td>
              <p>$122.00</p>
            </Td>
            <Td>
              <Button $Pending>Approved</Button>
            </Td>
          </tr>
        </tbody>
      </Table>
    </WidgetWrapper>
  );
};

export default WidgetLG;
