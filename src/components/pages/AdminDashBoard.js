import React, { useEffect, useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import fetchAddTrack from "../../redux/thunk/fetchAddTrack";
import fetchAddWords from "../../redux/thunk/fetchAddWords";
import ListOfTable from "../ListOfTable";
import Error from "../ui/Error";
import Success from "../ui/Success";

export default function AdminDashBoard() {
  // word, replaceWord
  const [trackingNumber, setTrackingNumber] = useState("");
  const [orderNumber, setOrderNumber] = useState("");
  const [blacklistWord, setBlacklistWord] = useState("");
  const [replaceBlacklistWord, setReplaceBlacklistWord] = useState("");
  const trackOrderAdd = useSelector((state) => state.trackOrderAdd);
  const addWords = useSelector((state) => state.addWords);
  const login = useSelector((state) => state.login);
  const { userInfo } = login || {};
  const {
    loading: trackAddLoading,
    success: trackAddSuccess,
    isError: trackAddError,
  } = trackOrderAdd || {};
  const {
    loading: addWordsLoading,
    success: addWordsSuccess,
    isError: addWordsError,
  } = addWords || {};

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const resetTracking = () => {
    setTrackingNumber("");
    setOrderNumber("");
    setBlacklistWord("");
    setReplaceBlacklistWord("");
  };
  let trackAddContent = "";
  let addWordsContent = "";
  const addTracking = (e) => {
    e.preventDefault();
    dispatch(fetchAddTrack(trackingNumber, orderNumber));
    resetTracking();
    addWordsContent = "";
  };
  const addBlackList = (e) => {
    e.preventDefault();
    dispatch(fetchAddWords(blacklistWord, replaceBlacklistWord));
    resetTracking();
    trackAddContent = null;
  };
  if (!trackAddLoading && trackAddError)
    trackAddContent = <Error message="There is an error in add track" />;
  if (!trackAddLoading && !trackAddError && trackAddSuccess)
    trackAddContent = <Success message="Tracking ID Added Successfully" />;

  if (!addWordsLoading && addWordsError)
    addWordsContent = (
      <Error message="There is an error in add blacklisted word" />
    );
  if (!addWordsLoading && !addWordsError && addWordsSuccess)
    addWordsContent = <Success message="Blacklisted Word Added Successfully" />;

  useEffect(() => {
    if (!userInfo) navigate("/");
  }, [userInfo, navigate]);
  return (
    <Container>
      <Row>
        <Col sm={12} md={6} lg={6} xl={6}>
          <Form onSubmit={addTracking}>
            <h1>Tracking Add : </h1>
            <hr />
            <br />
            <Form.Group controlId="orderId">
              <Form.Label>Order ID</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Order Id"
                value={orderNumber}
                onChange={(e) => setOrderNumber(e.target.value)}
                required
              ></Form.Control>
            </Form.Group>
            <br />
            <Form.Group controlId="trackingId">
              <Form.Label>Tracking ID</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Tracking ID"
                value={trackingNumber}
                onChange={(e) => setTrackingNumber(e.target.value)}
                required
              ></Form.Control>
            </Form.Group>
            <br />
            <Button
              type="submit"
              variant="success"
              style={{ marginBottom: "30px" }}
              disabled={trackAddLoading}
            >
              Add Track ID
            </Button>
          </Form>
          <br />
          {trackAddContent}
        </Col>
        <Col sm={12} md={6} lg={6} xl={6}>
          <Form onSubmit={addBlackList}>
            <h1>Blacklist Word Add : </h1>
            <hr />
            <br />
            <Form.Group controlId="word">
              <Form.Label>Blacklist Word</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Blacklist Word"
                value={blacklistWord}
                onChange={(e) => setBlacklistWord(e.target.value)}
                required
              ></Form.Control>
            </Form.Group>
            <br />
            <Form.Group controlId="replaceword">
              <Form.Label>Replace Word</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Replace Word"
                value={replaceBlacklistWord}
                onChange={(e) => setReplaceBlacklistWord(e.target.value)}
                required
              ></Form.Control>
            </Form.Group>
            <br />
            <Button
              type="submit"
              variant="danger"
              style={{ marginBottom: "30px" }}
              disabled={addWordsLoading}
            >
              Add Modify Word
            </Button>
          </Form>
          <br />
          {addWordsContent}
        </Col>
      </Row>
      <br />
      <br />
      <ListOfTable />
    </Container>
  );
}
