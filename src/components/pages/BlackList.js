import React, { useEffect, useState } from "react";
import { Container, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import fetchListWords from "../../redux/thunk/fetchListWords";
import BlacklistSingleTable from "../BlacklistSingleTable";
import Error from "../ui/Error";
import Loading from "../ui/Loading";
import Success from "../ui/Success";

export default function BlackList() {
  const dispatch = useDispatch();
  const wordsList = useSelector((state) => state.wordsList);
  const addWords = useSelector((state) => state.addWords);
  const [deleteId, setDeleteId] = useState(0);
  const { success: addWordsSuccess } = addWords || {};
  const { loading, words, success, isError } = wordsList || {};
  useEffect(() => {
    dispatch(fetchListWords);
  }, [dispatch, addWordsSuccess]);
  const handleChildClick = (id) => {
    setDeleteId(id);
  };

  let content = null;
  if (loading) content = <Loading />;
  if (!loading && isError)
    content = <Error message="There is an error in this table" />;
  if (!loading && !isError && success && words.length === 0)
    content = <Success message="Data Not Found" />;
  if (!loading && !isError && success && words.length > 0) {
    let blacklistWords = words.filter((item) => item.id !== deleteId);
    content = blacklistWords.map((blacklistWord, index) => (
      <BlacklistSingleTable
        key={blacklistWord?.id}
        singleBlacklistWord={blacklistWord}
        index={index}
        onChildClick={handleChildClick}
      />
    ));
  }

  return (
    <Container>
      <h1>Blacklist Word</h1>
      <hr />
      <br />
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>ID</th>
            <th>Blacklist Word</th>
            <th>Replace Word</th>
            <th>#</th>
            <th>#</th>
          </tr>
        </thead>
        <tbody>{content}</tbody>
      </Table>
    </Container>
  );
}
