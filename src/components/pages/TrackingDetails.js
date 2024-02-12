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
  console.log(estimateDelivery, "This is estimated Delivery")

  let estimateDateStart = ""
  let estimateDateEnd = ""
  let deliverymsg

  // Estimate Date Increase Calculate --------------------->
  if (estimateDelivery !== undefined){
    let first_level_date = status[0].date
    console.log(status[0].date, "Status")
    const orginalestimateDate = new Date(first_level_date)
    orginalestimateDate.setDate(orginalestimateDate.getDate() + 1)
    estimateDateStart = orginalestimateDate.toISOString()
    orginalestimateDate.setDate(orginalestimateDate.getDate() + 2)
    estimateDateEnd = orginalestimateDate.toISOString()
    // console.log(estimateDateStart, "Formated Date Start")
    // console.log(estimateDateEnd, "Formated Date End")
  }


  // ---------------------------------------------------------------
  // const date = new Date(estimateDelivery);
  const date_start = new Date(estimateDateStart);
  const date_end = new Date(estimateDateEnd);

  const options = {
    month: "long",
    day: "numeric",
  };
  // console.log(date)
  // const estimateDeliveryDate = date.toLocaleString("en-US", options);
  const estimateDeliveryDateStart = date_start.toLocaleString("en-US", options);
  const estimateDeliveryDateEnd = date_end.toLocaleString("en-US", options);
  console.log(estimateDeliveryDateEnd, 'This ')
  // const estimateDeliveryDateIncrease = date.setDate(estimateDeliveryDate.getDate() + 2)
  // console.log(estimateDeliveryDateIncrease)

  let content = null;
  if (loading) content = <Loading />;
  if (!loading && isError)
    content = <Error message="There is an error on tracking api" />;
  if (!loading && !isError && success && status.length === 0)
    content = <Success message="No Data Found! Please Search Again?" />;
  if (!loading && !isError && success && status.length > 0) {
    content = <Result trackingAPI={status} />;
  }
  deliverymsg = <p style={{ fontSize: "24px" }}>Delivered</p>;
  if (estimateDelivery !== null)
    // Previous Work --------------
    // deliverymsg = <p style={{ fontSize: "24px" }}>{estimateDeliveryDate}</p>;
    deliverymsg = <p style={{ fontSize: "24px" }}>{estimateDeliveryDateStart} - {estimateDeliveryDateEnd}</p>;

    let msg;

    if (estimateDelivery === undefined) {
      msg = <p style={{fontSize: "24px" }}>Loading ....</p>;
    }else{
      msg = deliverymsg
    }
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
          [This tool displays all shipping updates scanned by USPS using MID technology. Please do not panic if your shipments estimated delivery displays a later date than expected OR does not seem to be making progress. USPS expedites live parcels bypassing the scanning process often causing incorrect estimated delivery to display. This is industry wide and not specific to Valley Hatchery.]
        </i>
      </p>
      <br />
      <div style={{ display: "flex", alignItems: 'center' }}>
        <p
          style={{ fontWeight: "bold", fontSize: "24px", marginRight: " 5px" }}
        >
          Estimated Delivery:{" "}
        </p>
        {msg}
      </div>

      <br />
      {content}
    </Container>
  );
}
