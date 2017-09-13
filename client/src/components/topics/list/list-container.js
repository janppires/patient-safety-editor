import { connect } from "react-redux";
import { withRouter } from "react-router";
import {
  categorySelector,
  topicSelector,
  addCategory
} from "redux/modules/categories";
import TopicsList from "./list-display";

const mapStateToProps = (state, { match }) => {
  const { params } = match;
  const selectedCategory = categorySelector(state, params.categoryId);
  const selectedTopic = topicSelector(state, params.categoryId, params.topicId);
  const isTopicsListEmpty = selectedCategory.topics.length === 0;
  return {
    selectedCategory,
    selectedTopic,
    isTopicsListEmpty
  };
};

const mapDispatchToProps = dispatch => ({
  addCategory: category => dispatch(addCategory(category))
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(TopicsList)
);
