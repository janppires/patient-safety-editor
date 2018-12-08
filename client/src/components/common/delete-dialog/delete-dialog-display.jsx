import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input,
  ModalFooter
} from "reactstrap";

export default class DeleteDialog extends PureComponent {
  static propTypes = {
    category: PropTypes.object,
    topic: PropTypes.object,
    showDialog: PropTypes.func.isRequired,
    closeDialog: PropTypes.func.isRequired
  };

  getEntityName = () => {
    const { category, topic } = this.props;
    if (topic) {
      return topic.name;
    }
    return category.name;
  };

  render() {
    const { category, showDialog, closeDialog } = this.props;
    return (
      <div>
        {category &&
          <Modal isOpen={showDialog} toggle={closeDialog}>
            <ModalHeader toggle={closeDialog}>
              Confirm delete <strong>{this.getEntityName()} </strong> ?
            </ModalHeader>
            <ModalBody>blablalb</ModalBody>
            <ModalFooter>
              <Button color="danger">Delete</Button>
              {"  "}
              <Button>Cancel</Button>
            </ModalFooter>
          </Modal>}
      </div>
    );
  }
}

const styles = {

}