import React from "react";
import { Row, Card, Button } from "antd";
import {
  GlobalOutlined,
  HourglassFilled,
  WarningFilled,
} from "@ant-design/icons";
// import { Link } from "react-router-dom";

export default function HomeScreen() {
  return (
    <div style={{ marginTop: "3.5rem" }}>
      <Row
        justify="space-around"
        align="middle"
        style={{ marginTop: ".5rem" }}
      >
        <header
          style={{
            width: "25rem",
            backgroundColor: "rgb(54,69,79)",
            color: "white",
            textAlign: "center"
          }}
        >
          <h2 style={{ color: "white" }}>Welcome to Xpress Cloud</h2>
          <div style={{width:"235px", display:"flex", margin:"auto"}}>
          <p>Online cloud platform that provides realtime information about traffic status.</p>

          </div>
        </header>
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
          <h2 style={{ margin: "0" }}>About us</h2>

          <p style={{ margin: "0" }}>
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
          <div
            style={{
              backgroundColor: "",
              width: "2.4rem",
              display: "block",
              margin: "auto",
              borderRadius: "150px",
            }}
          >
            <HourglassFilled style={{ color: "#262626", fontSize: "1.9rem" }} />
          </div>
          <p style={{ color: "white", fontSize: "18px", margin: "0" }}>
            Stuck in traffic ?
          </p>
          <p style={{ fontSize: "14px", marginBottom: "0" }}>
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
            backgroundColor: "rgb(46,139,87)",
            width: "20rem",
            borderRadius: "5px",
            color: "white",
          }}
        >
          <div
            style={{
              backgroundColor: "",
              width: "1.5rem",
              display: "block",
              margin: "auto",
              borderRadius: "100px",
            }}
          >
            <GlobalOutlined style={{ color: "#262626", fontSize: "1.9rem" }} />
          </div>
          <p style={{ color: "white", fontSize: "18px", margin: "0" }}>
            Lost a vehicle?
          </p>
          <p style={{ marginBottom: "0" }}>Track your lost vehicle ...</p>
        </Card>
      </Row>
      <Row
        justify="space-around"
        align="middle"
        style={{ marginTop: ".5rem", textAlign: "center" }}
      >
        <Card
          style={{
            backgroundColor: "rgb(46,139,87)",
            width: "20rem",
            borderRadius: "5px",
            color: "white",
          }}
        >
          <div
            style={{
              backgroundColor: "",
              width: "1.5rem",
              display: "block",
              margin: "auto",
              borderRadius: "100px",
            }}
          >
            <WarningFilled style={{ color: "#262626", fontSize: "1.9rem" }} />
          </div>
          <p style={{ color: "white", fontSize: "18px", margin: "0" }}>
            Find accidents
          </p>
          <p style={{ marginBottom: "0" }}>Identify black spots ...</p>
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
