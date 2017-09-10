import { connect } from "react-redux";
import { withRouter } from "react-router";
import {
  categoriesSelector,
  categorySelector,
  addCategory
} from "redux/modules/categories";
import CategoriesList from "./list-display";

const mapStateToProps = (state, props) => {
  return {
    categories: categoriesSelector(state),
    selectedCategory: categorySelector(state, props.match.params.categoryId)
  };
};

const mapDispatchToProps = dispatch => ({
  addCategory: category => dispatch(addCategory(category))
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(CategoriesList)
);
