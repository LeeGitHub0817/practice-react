const defaultState = {
  inputValue: '添加你的事项...',
  list: []
};

export default (state = defaultState, action) => {
  if(action.type === 'changeInput') {
    let newState = JSON.parse(JSON.stringify(state));
    newState.inputValue = action.value;
    return newState;
  }

  if(action.type === 'addNewItem') {
    let newState = JSON.parse(JSON.stringify(state));
    newState.list.push(newState.inputValue);
    newState.inputValue = '添加你的事项...';
    return newState;
  }

  return state;
}