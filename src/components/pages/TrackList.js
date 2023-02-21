import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import fetchViewTrack from "../../redux/thunk/fetchViewTrackOrder";
import TrackSingleTable from "../TrackSingleTable";
import Error from "../ui/Error";
import Loading from "../ui/Loading";
import Success from "../ui/Success";
export default function TrackList() {
  const dispatch = useDispatch();
  const trackOrderView = useSelector((state) => state.trackOrderView);
  const trackOrderAdd = useSelector((state) => state.trackOrderAdd);
  const [deleteId, setDeleteId] = useState(0);
  const { success: trackAddSuccess } = trackOrderAdd || {};
  const { loading, trackOrder, success, isError } = trackOrderView || {};
  useEffect(() => {
    dispatch(fetchViewTrack);
  }, [dispatch, trackAddSuccess]);
  const handleChildClick = (id) => {
    setDeleteId(id);
  };
  let content = null;
  if (loading) content = <Loading />;
  if (!loading && isError)
    content = <Error message="There is an error in this table" />;
  if (!loading && !isError && success && trackOrder.length === 0)
    content = <Success message="Data Not Found" />;
  if (!loading && !isError && success && trackOrder.length > 0) {
    let trackOrders = trackOrder.filter((item) => item._id !== deleteId);
    content = trackOrders.map((trackOrderSingle, index) => (
      <TrackSingleTable
        key={trackOrderSingle?._id}
        trackOrderSingle={trackOrderSingle}
        index={index}
        onChildClick={handleChildClick}
      />
    ));
  }

  return (
    <div>
      <h1>Track List</h1>
      <hr />
      <br />
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>ID</th>
            <th>Tracking ID</th>
            <th>OrderID</th>
            <th>#</th>
            <th>#</th>
          </tr>
        </thead>
        <tbody>{content}</tbody>
      </Table>
    </div>
  );
}
