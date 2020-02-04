import React from 'react';
import TrelloList from "./TrelloList";
import TrelloActionButton from "./TrelloActionButton";
import { connect } from "react-redux";

function App(props) {
  const { lists } = props;
  return (
    <div className="App">
      <p>This is my app component!</p>
      <div style={styles.listsContainer}>
      {
        lists.map(list => (
          <TrelloList listID ={list.id} key={list.id} title={list.title} cards={list.cards} />
        ))
      }
      <TrelloActionButton list />
      </div>
    </div>
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
