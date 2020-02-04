import React from 'react';
import TrelloList from "./TrelloList";
import TrelloActionButton from "./TrelloActionButton";
import { connect } from "react-redux";
import { DragDropContext } from "react-beautiful-dnd";
import { sort } from "../actions";

function App (props) {
  const onDragEnd = (result) => {
    const { destination, source, draggableId } = result;

    if (!destination) {
      return;
    }

    props.dispatch(sort(source.droppableId, destination.droppableId, source.index, destination.index, draggableId))
  }
  const { lists } = props;
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="App">
        <p>Trello Clone</p>
        <div style={styles.listsContainer}>
          {
            lists.map(list => (
              <TrelloList listID={list.id} key={list.id} title={list.title} cards={list.cards} />
            ))
          }
          <TrelloActionButton list />
        </div>
      </div>
    </DragDropContext>
  );
}

const styles = {
  listsContainer: {
    display: "flex",
    flexDirection: "row"
  }
}
const mapStateToProps = state => ({
  lists: state.lists
})
export default connect(mapStateToProps)(App);
