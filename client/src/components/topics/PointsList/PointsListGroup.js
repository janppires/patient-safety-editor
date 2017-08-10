import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { ListGroup } from "reactstrap";
import PointItem from "./PointItem";

class PointsListGroup extends PureComponent {
  static propTypes = {
    points: PropTypes.array.isRequired,
    selectedPoint: PropTypes.object,
    onSelectPoint: PropTypes.func.isRequired
  };

  isPointActive = (point, selectedPoint) => {
    return point === selectedPoint;
  };

  render() {
    const { points, selectedPoint, onSelectPoint } = this.props;

    return (
      <ListGroup>
        {points.map(point =>
          <PointItem
            key={point.id}
            point={point}
            active={this.isPointActive(point, selectedPoint)}
            onClick={() => onSelectPoint(point)}
          />
        )}
      </ListGroup>
    );
  }
}

export default PointsListGroup;
