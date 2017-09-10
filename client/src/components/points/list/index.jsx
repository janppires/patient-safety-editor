import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { categorySelector, addCategory } from "redux/modules/categories";
import ListHeader from "components/common/list-header";
import AddItemButton from "components/common/add-item-button";
import PointsListGroup from "components/points/list/list-group";
import PointsListEmpty from "components/points/points-list-empty";
import CreateCategoryDialog from "components/categories/create-dialog";

export class PointsList extends PureComponent {
  static propTypes = {
    points: PropTypes.array.isRequired,
    selectedPoint: PropTypes.object,
    toggleAddPointModal: PropTypes.func.isRequired,
    onSelectPoint: PropTypes.func.isRequired,
    isAddPointModalOpen: PropTypes.bool.isRequired,
    addPoint: PropTypes.func.isRequired
  };

  state = {
    modal: false
  };

  handleToggleModal = () => {
    this.setState({
      modal: !this.state.modal
    });
  };

  handleSelectPoint = category => {};

  render() {
    const { category, selectedPoint, addPoint } = this.props;
    const isPointsListEmpty = category.points.length === 0;
    return (
      <div style={styles.container}>
        <ListHeader title={"Points"}>
          <AddItemButton
            onClick={this.handleToggleModal}
            tooltip={"Add Point"}
          />
        </ListHeader>
        {isPointsListEmpty
          ? <PointsListEmpty category={category} />
          : <PointsListGroup
              points={category.points}
              selectedPoint={selectedPoint}
              onSelectPoint={this.handleSelectPoint}
            />}
        <CreateCategoryDialog
          toggle={this.handleToggleModal}
          isOpen={this.state.modal}
          submit={addPoint}
        />
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    category: categorySelector(state, props.match.params.categoryId)
  };
};

const mapDispatchToProps = dispatch => ({
  addCategory: category => dispatch(addCategory(category))
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(PointsList)
);

const styles = {
  container: {
    display: "flex",
    flex: 1,
    flexDirection: "column"
  }
};
