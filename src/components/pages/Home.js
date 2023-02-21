import React, { useEffect } from "react";
import { Container, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import fetchViewTrack from "../../redux/thunk/fetchViewTrackOrder";
import OrderList from "../OrderList";
import Error from "../ui/Error";
import Loading from "../ui/Loading";
import Success from "../ui/Success";
// order_number
export default function Home() {
  const trackOrderView = useSelector((state) => state.trackOrderView);
  const { loading, success, trackOrder, isError } = trackOrderView || [];
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchViewTrack);
  }, [dispatch]);
  let content = null;
  if (loading) content = <Loading />;
  if (!loading && isError)
    content = <Error message="There is an error on tracking api" />;
  if (!loading && !isError && success && trackOrder.length === 0)
    content = <Success message="No Data Found! Please Search Again?" />;
  if (!loading && !isError && success && trackOrder.length > 0) {
    content = trackOrder?.map((track, index) => (
      <OrderList
        key={track._id}
        index={index + 1}
        orderNumber={track.order_number}
      />
    ));
  }
  return (
    <Container>
      <h2>Order List </h2>
      <br />
      <br />
      <Table striped bordered hover variant="dark">
        <thead>
          <tr style={{ textAlign: "center" }}>
            <th>ID</th>
            <th>OrderID</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>{content}</tbody>
      </Table>
      <br />
      <br />
    </Container>
  );
}
