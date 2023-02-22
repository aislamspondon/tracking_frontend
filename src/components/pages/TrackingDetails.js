import React, { useEffect } from "react";
import { Container, Image } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import usps from "../../assets/USPS.png";
import fetchTrackingDetails from "../../redux/thunk/fetchTrackingDetails";
import Result from "../Result";
import Error from "../ui/Error";
import Loading from "../ui/Loading";
import Success from "../ui/Success";

export default function TrackingDetails() {
  const { orderId } = useParams();
  const dispatch = useDispatch();
  const trackAPIDetails = useSelector((state) => state.trackAPIDetails);
  const { loading, isError, success, trackingAPI } = trackAPIDetails || {};
  const { estimateDelivery, status } = trackingAPI || {};
  const date = new Date(estimateDelivery);
  const options = {
    month: "long",
    day: "numeric",
  };
  const estimateDeliveryDate = date.toLocaleString("en-US", options);

  let content = null;
  if (loading) content = <Loading />;
  if (!loading && isError)
    content = <Error message="There is an error on tracking api" />;
  if (!loading && !isError && success && status.length === 0)
    content = <Success message="No Data Found! Please Search Again?" />;
  if (!loading && !isError && success && status.length > 0) {
    content = <Result trackingAPI={status} />;
  }
  let deliverymsg = <p style={{ fontSize: "24px" }}>Delivered</p>;
  if (estimateDelivery !== null)
    deliverymsg = <p style={{ fontSize: "24px" }}>{estimateDeliveryDate}</p>;

  useEffect(() => {
    dispatch(fetchTrackingDetails(orderId));
  }, [dispatch, orderId]);
  return (
    <Container>
      <h2 className="text-center">Live Shipment Tracking Details</h2>
      <Link to="https://www.usps.com/">
        <Image src={usps} alt="USPS" style={{ width: "300px" }} />
      </Link>
      <p>
        <i>
          [This tool displays all shipping updates scanned by USPS using MID
          technology. Please do not panic if your shipment does not seem to be
          making progress. Often USPS will expedite live parcels bypassing the
          scanning process.]
        </i>
      </p>
      <br />
      <div style={{ display: "flex" }}>
        <p
          style={{ fontWeight: "bold", fontSize: "24px", marginRight: " 5px" }}
        >
          Estimated Delivery:{" "}
        </p>
        {deliverymsg}
      </div>

      <br />
      {content}
    </Container>
  );
}
