import * as topicsSelector from '../index';

describe('topics selectors', () => {
  test('get topics array from state', () => {
    const state = prepareStateWithTopics();
    const topics = topicsSelector.getTopics(state);
    expect(topics).toMatchSnapshot();
  })

  test('get undefined topic when no topic is selected', () => {
    const state = prepareStateWithTopics();
    const topic = topicsSelector.getSelectedTopic(state);
    expect(topic).toMatchSnapshot();
  })

  test('get selected topic', () => {
    const state = prepareStateWithTopicsAndSelectedTopic();
    const topic = topicsSelector.getSelectedTopic(state);
    expect(topic).toMatchSnapshot();
  })

  const prepareStateWithTopics = () => ({
    topics: {
      list: [1, 2],
      byId: {
        1: { name: 'random' }, 
        2: { name: 'random 2' }
      },
      selected: null
    }
  })

  const prepareStateWithTopicsAndSelectedTopic = () => {
    const state = prepareStateWithTopics();
    state.topics.selected = 2;
    return state;
  }
})