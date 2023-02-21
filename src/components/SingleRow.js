import React from "react";

import { Col, Row } from "react-bootstrap";
export default function SingleRow({ tracking }) {
  const { status, date: datetime } = tracking || {};
  const date = new Date(datetime);
  const options = {
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  };
  const formattedDate = date.toLocaleString("en-US", options);
  return (
    <Row style={{ border: "1px solid black", padding: "5px 10px" }}>
      <Col
        sm={6}
        md={4}
        lg={4}
        xl={4}
        style={{ borderRight: "1px solid black", textAlign: "center" }}
      >
        {formattedDate}
      </Col>
      <Col
        sm={6}
        md={8}
        lg={8}
        xl={8}
        style={{
          textAlign: "center",
          textTransform: "uppercase",
          fontWeight: "bold",
        }}
      >
        {status}
      </Col>
    </Row>
  );
}
