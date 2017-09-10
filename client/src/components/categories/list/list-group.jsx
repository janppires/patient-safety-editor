import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { ListGroup } from "reactstrap";
import CategoryItem from "components/categories/list/item";

export default class CategoriesListGroup extends PureComponent {
  static propTypes = {
    categories: PropTypes.array.isRequired,
    selectedCategory: PropTypes.object,
    onSelectCategory: PropTypes.func.isRequired
  };

  isCategoryActive = (category, selectedCategory) => {
    return category === selectedCategory;
  };

  render() {
    const { categories, selectedCategory, onSelectCategory } = this.props;

    return (
      <ListGroup>
        {categories.map(category =>
          <CategoryItem
            key={category.id}
            category={category}
            active={this.isCategoryActive(category, selectedCategory)}
            onClick={() => onSelectCategory(category)}
          />
        )}
      </ListGroup>
    );
  }
}
