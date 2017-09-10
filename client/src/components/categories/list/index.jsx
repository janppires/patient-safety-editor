import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import {
  categoriesSelector,
  categorySelector,
  addCategory
} from "redux/modules/categories";
import ListHeader from "components/common/list-header";
import AddItemButton from "components/common/add-item-button";
import CategoriesListGroup from "components/categories/list/list-group";
import CreateCategoryDialog from "components/categories/create-dialog";

export class CategoriesList extends PureComponent {
  static propTypes = {
    categories: PropTypes.array.isRequired,
    selectedCategory: PropTypes.object,
    addCategory: PropTypes.func.isRequired
  };

  state = {
    modal: false
  };

  handleToggleModal = () => {
    this.setState({
      modal: !this.state.modal
    });
  };

  handleSelectCategory = category => {
    this.props.history.push(`/categories/${category._id}`);
  };

  render() {
    const { categories, selectedCategory, addCategory } = this.props;
    return (
      <div style={styles.container}>
        <ListHeader title={"Categories"}>
          <AddItemButton
            onClick={this.handleToggleModal}
            tooltip={"Add Category"}
          />
        </ListHeader>
        <CategoriesListGroup
          categories={categories}
          selectedCategory={selectedCategory}
          onSelectCategory={this.handleSelectCategory}
        />
        <CreateCategoryDialog
          toggle={this.handleToggleModal}
          isOpen={this.state.modal}
          submit={addCategory}
        />
      </div>
    );
  }
}

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

const styles = {
  container: {
    display: "flex",
    flex: 1,
    flexDirection: "column"
  }
};
