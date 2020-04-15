import { createStore } from 'redux';

const incrementCount = ({incrementBy=1} = {}) => ({
  type: 'INCREMENT',
  incrementBy
});

const store = createStore((state = { count: 0 }, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        count: state.count + action.incrementBy
      };

    default:
      return state;
  }
});

const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(incrementCount({ incrementBy: 5 }))
store.dispatch(incrementCount());

