
import './App.css';
import React, {useState} from "react";
import Products from "./components/Products";
import Form from "./components/Form";
import { Navbar} from "react-bootstrap";



function App() {

  return (
      <div>
        <Form
          />
      <Navbar collapseOnSelect expand="md" bg="light" variant='light'>
<Products/>
      </Navbar>
      </div>
  );
}
export default App;
