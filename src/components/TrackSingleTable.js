import React, { useState } from "react";
import { Button, Image } from "react-bootstrap";
import { useDispatch } from "react-redux";
import deleteImg from "../assets/delete.svg";
import editImg from "../assets/edit.svg";
import fetchDeleteTrack from "../redux/thunk/fetchDeleteTrackOrder";
import fetchUpdateTrack from "../redux/thunk/fetchUpdateTrackOrder";
import fetchViewTrack from "../redux/thunk/fetchViewTrackOrder";

export default function TrackSingleTable({
  index,
  trackOrderSingle,
  onChildClick,
}) {
  const { _id: id, tracking_number, order_number } = trackOrderSingle || {};
  const [convertForm, setConvertForm] = useState(false);
  const [trackingNumber, setTrackingNumber] = useState(tracking_number);
  const [orderNumber, setOrderNumber] = useState(order_number);
  const dispatch = useDispatch();
  const cancel = () => {
    setConvertForm(false);
  };

  const save = () => {
    dispatch(fetchUpdateTrack(id, trackingNumber, orderNumber));
    console.log();
    setConvertForm(false);
  };
  const editHandler = () => {
    setConvertForm(true);
  };
  const deleteHandler = () => {
    if (window.confirm("Are you sure you want to delete this case?")) {
      dispatch(fetchDeleteTrack(id));
      onChildClick(id);
      dispatch(fetchViewTrack);
    }
  };
  return (
    <tr>
      <td>{index + 1}</td>
      <td>
        {convertForm ? (
          <input
            type="text"
            name="trackId"
            value={trackingNumber}
            style={{
              background: "#3E444A",
              border: "none",
              color: "#FFFFFF",
              outline: "none",
              width: "100%",
              height: "45px",
              textAlign: "center",
            }}
            onChange={(e) => setTrackingNumber(e.target.value)}
          />
        ) : (
          trackingNumber
        )}
      </td>
      <td>
        {convertForm ? (
          <input
            type="text"
            name="trackId"
            value={orderNumber}
            style={{
              background: "#3E444A",
              border: "none",
              color: "#FFFFFF",
              outline: "none",
              width: "100%",
              height: "45px",
              textAlign: "center",
            }}
            onChange={(e) => setOrderNumber(e.target.value)}
          />
        ) : (
          orderNumber
        )}
      </td>
      <td style={{ textAlign: "center" }}>
        {convertForm ? (
          <Button variant="success" onClick={save}>
            Save
          </Button>
        ) : (
          <Image
            src={editImg}
            alt="edit"
            style={{
              width: "20px",
              height: "20px",
              cursor: "pointer",
            }}
            onClick={editHandler}
          />
        )}
      </td>
      <td style={{ textAlign: "center" }}>
        {convertForm ? (
          <Button variant="danger" onClick={cancel}>
            Cancel
          </Button>
        ) : (
          <Image
            src={deleteImg}
            alt="delete"
            style={{
              width: "20px",
              height: "20px",
              cursor: "pointer",
            }}
            onClick={deleteHandler}
          />
        )}
      </td>
    </tr>
  );
}
