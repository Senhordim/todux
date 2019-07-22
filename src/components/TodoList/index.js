import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import PropTypes from 'prop-types';
import { View, Text, StyleSheet, Button } from 'react-native';

import * as TodosActions from '../../store/actions/todos';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center', // vertical
    alignItems: 'center', // horizontal
  },

  text: {
    color: '#333',
    fontSize: 28,
  },

  textMarked: {
    color: '#cc4340',
  },
});

const TodoList = ({ todos, addTodo, markdTodo }) => {
  const { container, text, textMarked } = styles;
  return (
    <View style={container}>
      <Text style={text}>Hi!</Text>

      {todos.map(todo => (
        <View key={todo.id}>
          <Text
            style={todo.done && textMarked}
            onPress={() => markdTodo(todo.id)}
          >
            {todo.name}
          </Text>
        </View>
      ))}

      <Button title="Adicionar todo" onPress={addTodo} />
    </View>
  );
};

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      done: PropTypes.bool,
    })
  ).isRequired,
  addTodo: PropTypes.func.isRequired,
  markdTodo: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  todos: state,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(TodosActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
