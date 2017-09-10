const initialState = [
  {
    title: "Categories Editor",
    description: "Here you can create or modify categories and points content",
    icon: { name: "MdBorderColor", height: 60 },
    path: "/categories"
  },
  {
    title: "Images Manager",
    description: "Here you can list existing images and remove deprecaded ones",
    icon: { name: "MdCameraRoll", height: 65 },
    path: "/images"
  }
];

export default function reducer(state = initialState, action) {
  return state;
}

export const getDashboardItems = globalState => {
  return globalState.dashboard;
};
