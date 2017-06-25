const INITIAL_STATE = [
    {
        title: 'Topics Editor',
        description: 'Here you can create or modify topics and points content',
        icon: {name: 'MdBorderColor', height: 60},
        path: '/topics'
    }, {
        title: 'Images Manager',
        description: 'Here you can list existing images and remove deprecaded ones',
        icon: {name: 'MdCameraRoll', height: 65},
        path: '/images'
    }
]

export default function dashboard (state = INITIAL_STATE, action) {
  return state;
}