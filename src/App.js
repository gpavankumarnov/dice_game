import "./App.css";
// import RoutesComp from './RoutesComp';
import Header from "./pages/Header/Header";
import styled from "styled-components";
import Sidebar from "./components/SideBar/Sidebar";
import RoutesComp from "./RoutesComp";

function App() {
  const Container = styled.div`
    display: flex;
  `;

  return (
    <div className="App">
      {/* <RoutesComp/> */}
      <Header />
      
      <Container >
      <Sidebar />
        <RoutesComp />
      </Container>
    </div>
  );
}

export default App;
