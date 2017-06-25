const INITIAL_STATE = [
    {
        title: 'Edit Topics',
        subtitle: 'blablba',
        description: 'Edit all the topics',
        icon: {name: 'MdBorderColor'},
        path: '/edit'
    }, {
        title: 'Show Topics',
        subtitle: 'blebleble',
        description: 'Show all the topics',
        icon: {name: 'MdFormatListBulleted'},
        path: '/show'
    }
]

export default function dashboard (state = INITIAL_STATE, action) {
  return state;
}