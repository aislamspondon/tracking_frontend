import React, { useState } from "react";
import { Col, Form, Row } from "react-bootstrap";
import BlackList from "./pages/BlackList";
import TrackList from "./pages/TrackList";

export default function ListOfTable() {
  const [tracklistChecked, setTracklistChecked] = useState(true);
  const [blacklistChecked, setBlacklistChecked] = useState(false);
  const handleTracklistChange = (e) => {
    setTracklistChecked(e.target.checked);
    setBlacklistChecked(false);
  };

  const handleBlacklistChange = (e) => {
    setBlacklistChecked(e.target.checked);
    setTracklistChecked(false);
  };
  return (
    <>
      <Form className="d-flex m-5">
        <Form.Check
          type="checkbox"
          label="Tracklist"
          checked={tracklistChecked}
          onChange={handleTracklistChange}
          style={{ margin: "0px 20px" }}
        />
        <Form.Check
          type="checkbox"
          label="Blacklist"
          checked={blacklistChecked}
          onChange={handleBlacklistChange}
          style={{ margin: "0px 20px" }}
        />
      </Form>
      <Row>
        <Col sm={12} md={12} lg={12} xl={12}>
          {tracklistChecked && <TrackList />}
          {blacklistChecked && <BlackList />}
        </Col>
        {/* <Col sm={12} md={6} lg={6} xl={6}>
        </Col> */}
      </Row>
    </>
  );
}
