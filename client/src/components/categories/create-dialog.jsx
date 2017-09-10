import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import UUID from "node-uuid";
import ModifyCategoryDialog from "components/categories/modify-dialog";

const getEmptyCategory = () => ({
  name: "",
  icon: ""
});

export default class CreateCategoryDialog extends PureComponent {
  static propTypes = {
    toggle: PropTypes.func.isRequired,
    isOpen: PropTypes.bool.isRequired,
    submit: PropTypes.func.isRequired
  };

  state = {
    category: getEmptyCategory()
  };

  handleSubmit = category => {
    const newCategory = Object.assign({}, category, { id: UUID.v4() });
    this.props.submit(newCategory);
    this.setState({ category: getEmptyCategory() });
  };

  render() {
    return (
      <div>
        <ModifyCategoryDialog
          mode="create"
          submit={this.handleSubmit}
          category={this.state.category}
          toggle={this.props.toggle}
          isOpen={this.props.isOpen}
        />
      </div>
    );
  }
}
