import React from 'react';
import TrelloList from "./TrelloList";
import TrelloActionButton from "./TrelloActionButton";
import { connect } from "react-redux";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import { sort } from "../actions";
import styled from "styled-components";

const ListContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

function App(props) {
  const onDragEnd = (result) => {
    const { destination, source, draggableId, type } = result;

    if (!destination) {
      return;
    }

    props.dispatch(sort(source.droppableId, destination.droppableId, source.index, destination.index, draggableId, type))
  }
  const { lists } = props;
  return (
    <DragDropContext onDragEnd={onDragEnd}>
        <p>Trello Clone</p>
        <Droppable droppableId="all-lists" direction="horizontal" type="list">
        {provided => (
          <ListContainer {...provided.droppableProps} ref={provided.innerRef}>
  
            {
              lists.map((list, index) => (
                <TrelloList 
                listID={list.id} 
                key={list.id} 
                title={list.title} 
                cards={list.cards} 
                index={index}
                />
              ))
            }
            {provided.placeholder}
            <TrelloActionButton list />
          </ListContainer>
        )}
        </Droppable>
    </DragDropContext>
  );
}


const mapStateToProps = state => ({
  lists: state.lists
})
export default connect(mapStateToProps)(App);
