import React, { useState } from "react";
import { Button, Image } from "react-bootstrap";
import { useDispatch } from "react-redux";
import deleteImg from "../assets/delete.svg";
import editImg from "../assets/edit.svg";
import fetchDeleteWords from "../redux/thunk/fetchDeleteWords";
import fetchListWords from "../redux/thunk/fetchListWords";
import fetchUpdateWords from "../redux/thunk/fetchUpdateWords";

export default function BlacklistSingleTable({
  index,
  singleBlacklistWord,
  onChildClick,
}) {
  const { id, word, replace_word } = singleBlacklistWord || {};
  const [convertForm, setConvertForm] = useState(false);
  const [blacklistWord, setBlacklistWord] = useState(word);
  const [replaceBlacklistWord, setReplaceBlacklistWord] =
    useState(replace_word);
  const dispatch = useDispatch();
  const cancel = () => {
    setConvertForm(false);
  };

  const save = () => {
    dispatch(fetchUpdateWords(id, blacklistWord, replaceBlacklistWord));
    setConvertForm(false);
  };
  const editHandler = () => {
    setConvertForm(true);
  };
  const deleteHandler = () => {
    if (window.confirm("Are you sure you want to delete ?")) {
      dispatch(fetchDeleteWords(id));
      onChildClick(id);
      dispatch(fetchListWords);
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
            value={blacklistWord}
            style={{
              background: "#3E444A",
              border: "none",
              color: "#FFFFFF",
              outline: "none",
              width: "100%",
              height: "45px",
              textAlign: "center",
            }}
            onChange={(e) => setBlacklistWord(e.target.value)}
          />
        ) : (
          blacklistWord
        )}
      </td>
      <td>
        {convertForm ? (
          <input
            type="text"
            name="trackId"
            value={replaceBlacklistWord}
            style={{
              background: "#3E444A",
              border: "none",
              color: "#FFFFFF",
              outline: "none",
              width: "100%",
              height: "45px",
              textAlign: "center",
            }}
            onChange={(e) => setReplaceBlacklistWord(e.target.value)}
          />
        ) : (
          replaceBlacklistWord
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
