import React, { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import fetchTrackAPI from "../../redux/thunk/fetchTrackingAPI";
import Result from "../Result";
import Error from "../ui/Error";
import Loading from "../ui/Loading";
import Success from "../ui/Success";

export default function Tracking() {
  const [orderID, setOrderID] = useState("");
  const trackAPI = useSelector((state) => state.trackAPI);
  const { loading, success, trackingAPI, isError } = trackAPI || [];
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(fetchTrackAPI(orderID));
  };
  let content = null;
  if (loading) content = <Loading />;
  if (!loading && isError)
    content = <Error message="There is an error on tracking api" />;
  if (!loading && !isError && success && trackingAPI.length === 0)
    content = <Success message="No Data Found! Please Search Again?" />;
  if (!loading && !isError && success && trackingAPI.length > 0) {
    content = <Result trackingAPI={trackingAPI} />;
  }
  return (
    <Container>
      <h2>Live Shipment Tracking </h2>
      <br />
      <br />
      <Form
        className="d-flex align-items-center"
        style={{ marginBottom: "70px" }}
        onSubmit={handleSubmit}
      >
        <Form.Label>Enter Order ID</Form.Label>
        <Form.Group className="mx-4">
          <Form.Control
            type="search"
            style={{ width: "400px" }}
            placeholder="Ex-23-00120"
            value={orderID}
            onChange={(e) => setOrderID(e.target.value)}
            aria-label="Search"
          ></Form.Control>
        </Form.Group>
        <Button variant="primary" className="mx-2" type="submit">
          Search
        </Button>
      </Form>
      <br />
      <br />
      {content}
    </Container>
  );
}
