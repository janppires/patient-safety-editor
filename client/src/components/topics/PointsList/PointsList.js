import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import ListHeader from "../../common/ListHeader";
import AddItemButton from "../../common/AddItemButton";
import PointsListGroup from "./PointsListGroup";
import CreateTopicDialog from "../CreateTopicDialog";

class PointsList extends PureComponent {
  static propTypes = {
    points: PropTypes.array.isRequired,
    selectedPoint: PropTypes.object,
    toggleAddPointModal: PropTypes.func.isRequired,
    onSelectPoint: PropTypes.func.isRequired,
    isAddPointModalOpen: PropTypes.bool.isRequired,
    addPoint: PropTypes.func.isRequired
  };
  render() {
    const {
      points,
      selectedPoint,
      toggleAddPointModal,
      onSelectPoint,
      isAddPointModalOpen,
      addPoint
    } = this.props;
    return (
      <div>
        <ListHeader title={"Points"}>
          <AddItemButton onClick={toggleAddPointModal} tooltip={"Add Point"} />
        </ListHeader>
        <PointsListGroup
          points={points}
          selectedPoint={selectedPoint}
          onSelectPoint={onSelectPoint}
        />
        <CreateTopicDialog
          toggle={toggleAddPointModal}
          isOpen={isAddPointModalOpen}
          submit={addPoint}
        />
      </div>
    );
  }
}

export default PointsList;
