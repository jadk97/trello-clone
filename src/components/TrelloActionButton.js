import React, { useState } from "react";
import Icon from "@material-ui/core/Icon";
import TextareaAutosize from 'react-textarea-autosize';
import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";
import { connect } from "react-redux";
import { addList, addCard } from "../actions/index";

const TrelloActionButton = (props) => {
  const [formOpen, setFormOpen] = useState(false);
  const [text, setText] = useState("");


  const openForm = () => {
    setFormOpen(true);
  }

  const closeForm = () => {
    setFormOpen(false);
  }

  const handleInputChange = (e) => {
    setText(e.target.value);
  }

  const handleAddList = () => {
    const { dispatch } = props;
    // const { text } = text;
    if (text) {
      setText("");
      dispatch(addList(text))
    }
    return;
  }

  const handleAddCard = () => {
    const { dispatch, listID } = props;

    if (text) {
      setText("");
      dispatch(addCard(listID, text))
    }
  }


  const renderAddButton = () => {
    const { list } = props;
    const buttonText = list ? "Add another list" : "Add another card";
    const buttonTextOpacity = list ? 1 : 0.5;
    const buttonTextColor = list ? "white" : "inherit";
    const buttonTextBackground = list ? "rgba(0, 0, 0, .15)" : "inherit";

    return (
      <div
        onClick={openForm}
        style={
          {
            ...styles.openFormButtonGroup,
            opacity: buttonTextOpacity,
            color: buttonTextColor,
            backgroundColor: buttonTextBackground
          }}>
        <Icon>add</Icon>
        <p>{buttonText}</p>
      </div>
    )
  }
  const renderForm = () => {
    const { list } = props;

    const placeholder = list ? "Enter list title." : "Enter a title for this card.";
    const buttonTitle = list ? "Add List" : "Add Card";

    return (
      <div>
        <Card style={{
          minHeight: 85,
          minWidth: 272,
          padding: "6px 8px 2px"
        }}>
          <TextareaAutosize
            placeholder={placeholder}
            autoFocus
            onBlur={closeForm}
            value={text}
            onChange={handleInputChange}
            style={{
              overflow: "hidden",
              resize: "none",
              width: "100%",
              outline: "none",
              border: "none"
            }}
          />
        </Card>
        <div style={styles.formButtonGroup}>
          <Button onMouseDown={list ? handleAddList : handleAddCard}
            variant="contained"
            style={{ color: "white", backgroundColor: "#5aac44" }}>
            {buttonTitle}
          </Button>
          <Icon style={{ marginLeft: 8, cursor: "pointer" }}>close</Icon>
        </div>
      </div>
    )
  }

  return (
    formOpen ? renderForm() : renderAddButton()

  )
}

const styles = {
  openFormButtonGroup: {
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
    borderRadius: 3,
    height: 36,
    width: 272,
    paddingLeft: 10
  },
  formButtonGroup: {
    marginTop: 8,
    display: "flex",
    alignItems: "center"
  }
}
export default connect()(TrelloActionButton);