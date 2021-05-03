import React from "react";
import { Row, Card, Button } from "antd";
import { RightOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

export default function HomeScreen() {
  return (
    <div style={{marginTop:"5rem"}}>
      <Row justify="space-around" align="middle" style={{ marginTop: ".5rem"}}>
        <Card
          style={{
            width: "20rem",
            borderRadius: "5px",
            backgroundColor: "rgb(54,69,79)",
            color: "white",
          }}
        >
          <h2 style={{ color: "white" }}>Welcome to Xpress Cloud</h2>
          <Button type="primary" style={{ borderRadius: "5px", border: "0" }}>
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
            backgroundColor: "#006d75",
            borderRadius: "5px",
          }}
        >
          <h2>About us</h2>

          <p>
              Xpress Cloud is an online based platform that uses ML and AI to provide realtime information about traffic flow.
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
          <h3 style={{ color: "white" }}>Stuck on traffic ?</h3>
          <p style={{ fontSize: "14px" }}>
            Xpress cloud is an online platform that helps you get to work on
            time ...
          </p>
          <Button
            style={{
              backgroundColor: "#ad6800",
              borderRadius: "100px",
              border: "0",
            }}
          >
            <Link to="/traffic" style={{ color: "white" }}>
              More
            </Link>
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
            backgroundColor: "rgb(27,85,131)",
            width: "20rem",
            borderRadius: "5px",
          }}
        >
          <h3 style={{ color: "white" }}>Lost a vehicle ?</h3>
        </Card>
      </Row>
    </div>
  );
}
