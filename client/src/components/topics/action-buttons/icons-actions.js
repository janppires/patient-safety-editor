import { openDeleteDialog } from "redux/modules/dialogs";

export const getTopicIconsActions = (categoryId, topicId) => [
  getDeleteTopicIconAction(categoryId, topicId),
  getEditTopicIconAction()
];

const getDeleteTopicIconAction = (categoryId, topicId) => ({
  name: "MdDelete",
  action: openDeleteDialog(categoryId, topicId)
});

const getEditTopicIconAction = () => ({
  name: "MdModeEdit",
  action: null,
  url: "/topics/new"
});
