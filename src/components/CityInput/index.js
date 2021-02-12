import React from 'react';
import {Button, Container, Form} from "react-bootstrap";

const CityInput = ({city,setCity,fetchCityWeather,click,setClick}) => {
  const [error,setError]=React.useState("");

  const handleInputChange=(event)=>{
    setCity(event.target.value);
  };

  // console.log("City is ",city);
  const handleSubmit=(event)=>{
    setClick(true);
    if(!city){
      // alert("Field is empty");
      setError("City field is empty");
    }else{
      setError("");
      // Make API call
      fetchCityWeather();
    }
  };
  return (
  <Container>
    <Form>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>City</Form.Label>
        <Form.Control 
          value={city}
          type="text" 
          placeholder="Enter city" 
          onChange={handleInputChange}
        />
        <p className="text-danger">{error}</p>
      </Form.Group>

      <Button variant="primary" onClick={handleSubmit}>
        Submit
      </Button>
    </Form>
  </Container>
  );
};

export default CityInput;