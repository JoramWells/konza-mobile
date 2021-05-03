import React from "react";
import { Row, Card, Button } from "antd";
import { GlobalOutlined, HourglassFilled} from '@ant-design/icons'
// import { Link } from "react-router-dom";

export default function HomeScreen() {

  return (
    <div style={{ marginTop: "5rem" }}>
      <Row justify="space-around" align="middle" style={{ marginTop: ".5rem" }}>
        <Card
          style={{
            width: "20rem",
            borderRadius: "5px",
            backgroundColor: "rgb(54,69,79)",
            color: "white",
          }}
        >
          <h2 style={{ color: "white" }}>Welcome to Xpress Cloud</h2>
        </Card>
      </Row>
      <Row
        justify="space-around"
        align="middle"
        style={{ marginTop: ".5rem", textAlign: "center" }}
      >
        <Card
          style={{
            width: "20rem",
            backgroundColor: "#006d75",
            borderRadius: "5px",
          }}
        >
          <h2>About us</h2>

          <p>
            Xpress Cloud is an online based platform that uses ML and AI to
            provide realtime information about traffic flow.
          </p>
          <Button
            style={{
              backgroundColor: "#ad8b00",
              borderRadius: "5px",
              border: "0",
            }}
          >
            Learn more
          </Button>
        </Card>
      </Row>
      <Row
        justify="space-around"
        align="middle"
        style={{ marginTop: ".5rem", textAlign: "center" }}
      >
        <Card
          style={{
            width: "20rem",
            borderRadius: "5px",
            backgroundColor: "rgb(46,139,87)",
            color: "white",
          }}
        >
          <p style={{ color: "white", fontSize:"18px", margin:"0" }}> 
          <div style={{backgroundColor:"#262626", width:"1.5rem", display:"block", margin:"auto", borderRadius:"100px"}}>
            <HourglassFilled spin />
          </div>
           Stuck on traffic ?</p>
          <p style={{ fontSize: "14px", marginBottom:"0" }}>
            Find shortest route ...
            
          </p>

        </Card>
      </Row>
      <Row
        justify="space-around"
        align="middle"
        style={{ marginTop: ".5rem", textAlign: "center" }}
      >
        <Card
          style={{
            backgroundColor: "rgb(27,85,131)",
            width: "20rem",
            borderRadius: "5px",
            color: "white",
          }}
        >
          <p style={{ color: "white", fontSize:"18px",margin:"0" }}>
          <div style={{backgroundColor:"#262626", width:"1.5rem", display:"block", margin:"auto", borderRadius:"100px"}}>
            <GlobalOutlined spin />
          </div>
             Lost a vehicle?</p>
          <p style={{ marginBottom:"0"}}>
            Track your lost vehicle ...
          </p>

          
        </Card>
      </Row>
      {/* <Row justify="space-around" align="middle" style={{ marginTop: ".5rem" }}>
        <Card
          style={{
            width: "20rem",
            backgroundColor: "#d46b08",
            borderRadius: "5px",
            color:"white",
            textAlign:"center"
          }}
        >
          <h3 style={{color:"white"}}>Parking spaces</h3>
          <p>Find parking spaces on time..</p>
        </Card>
      </Row>
      <Row justify="space-around" align="middle" style={{ marginTop: ".5rem" }}>
        <Card
          style={{
            width: "20rem",
            backgroundColor: "#006d75",
            borderRadius: "5px",
            color:"white",
            textAlign:"center"
          }}
        >
          <h3 style={{color:"white"}}>Find a cab</h3>
          <p>Send parcel for as low as 20/=</p>
        </Card>
      </Row> */}
    </div>
  );
}
