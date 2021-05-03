import React from "react";
import { Row, Card, Button } from "antd";

export default function HomeScreen() {
  return (
    <>
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
          <Button type="primary" style={{ borderRadius: "150px", border: "0" }}>
            Learn more
          </Button>
        </Card>
      </Row>
      <Row justify="space-around" align="middle"
        style={{ marginTop: ".5rem", textAlign: "center" }}

      >
          <Card style={{width:"20rem"}}>
              <h2>About us</h2>
          </Card>
      </Row>
      <Row
        justify="space-around"
        align="middle"
        style={{ marginTop: ".5rem", textAlign: "center" }}
      >
        <Card style={{ width: "20rem", borderRadius: "5px", backgroundColor:"rgb(46,139,87)", color:"white" }}>
          <h3 style={{color:"white"}}>Traffic jam</h3>
          <p>
              Xpress cloud is an online platform that helps you get to work on time ...
          </p>
        </Card>
      </Row>
      <Row
      justify="space-around"
      align="middle"
      style={{ marginTop: ".5rem", textAlign: "center" }}

      >
      <Card style={{backgroundColor:"rgb(27,85,131)", width:"20rem", borderRadius:"5px"}}>
          <h3 style={{color:"white"}}>Car theft</h3>

</Card>
      </Row>
    </>
  );
}
