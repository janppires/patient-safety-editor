const INITIAL_STATE = [
    {
        title: 'Edit Topics',
        description: 'Edit all the topics',
        icon: {name: 'MdBorderColor', height: 60},
        path: '/edit'
    }, {
        title: 'Show Topics',
        description: 'Show all the topics',
        icon: {name: 'MdFormatListBulleted', height: 70},
        path: '/show'
    }
]

export default function dashboard (state = INITIAL_STATE, action) {
  return state;
}