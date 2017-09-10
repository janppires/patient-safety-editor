import { connect } from "react-redux";
import { withRouter } from "react-router";
import { categorySelector, addCategory } from "redux/modules/categories";
import TopicsList from "./list-display";

const mapStateToProps = (state, props) => {
  const category = categorySelector(state, props.match.params.categoryId);
  const isTopicsListEmpty = category.topics.length === 0;
  return {
    category,
    isTopicsListEmpty
  };
};

const mapDispatchToProps = dispatch => ({
  addCategory: category => dispatch(addCategory(category))
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(TopicsList)
);
