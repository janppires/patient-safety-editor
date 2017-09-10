import { connect } from "react-redux";
import { withRouter } from "react-router";
import {
  getCategories,
  isFetchingCategoriesSelector,
  categorySelector
} from "redux/modules/categories";
import CategoriesPage from "./categories-display";

const mapStateToProps = (state, props) => {
  const category = categorySelector(state, props.match.params.categoryId);
  return {
    isFetching: isFetchingCategoriesSelector(state),
    showTopicsList: category !== undefined
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getCategories: () => dispatch(getCategories())
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(CategoriesPage)
);
