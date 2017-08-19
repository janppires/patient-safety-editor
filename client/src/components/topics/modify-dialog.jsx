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
  Col
} from "reactstrap";
import IconsSelector from "components/common/icons-selector";

const MODE_LABELS = {
  edit: { titleText: "Edit Topic", submitText: "Modify" },
  create: { titleText: "Add New Topic", submitText: "Add" }
};

export default class ModifyTopicModal extends PureComponent {
  static propTypes = {
    topic: PropTypes.object,
    mode: PropTypes.string,
    submit: PropTypes.func.isRequired
  };

  static defaultProps = {
    mode: "create"
  };

  state = {
    name: this.props.topic.name,
    icon: this.props.topic.icon,
    titleText: MODE_LABELS[this.props.mode].titleText,
    submitText: MODE_LABELS[this.props.mode].submitText
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.submit({
      name: this.state.name,
      icon: this.state.icon
    });
    this.setState({ name: "", icon: "" });
    this.props.toggle();
  };

  handleTopicNameInput = ev => {
    this.setState({
      name: ev.target.value
    });
  };

  handleIconChange = icon => {
    this.setState({
      icon: icon ? icon.value : ""
    });
  };

  isValidName = () => {
    return this.state.name.length > 3;
  };

  isValidIcon = () => {
    return this.state.icon.length > 0;
  };

  isValidForm = () => {
    return this.isValidName() && this.isValidIcon();
  };

  render() {
    const { isOpen, toggle } = this.props;
    const { titleText, submitText } = this.state;

    return (
      <div>
        <Modal isOpen={isOpen} toggle={toggle}>
          <ModalHeader toggle={toggle}>
            {titleText}
          </ModalHeader>
          <ModalBody>
            <Form>
              <FormGroup row>
                <Label for="topicName" sm={2}>
                  Name
                </Label>
                <Col sm={10}>
                  <Input
                    type="text"
                    name="topicName"
                    id="topicName"
                    placeholder="Type topic name..."
                    value={this.state.name}
                    onChange={this.handleTopicNameInput}
                  />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label for="topicIcon" sm={2}>
                  Icon
                </Label>
                <Col sm={10}>
                  <IconsSelector
                    handleSelection={this.handleIconChange}
                    icon={this.state.icon}
                  />
                </Col>
              </FormGroup>
              <FormGroup check row>
                <Col sm={{ size: 10, offset: 2 }}>
                  <Button
                    color="danger"
                    disabled={!this.isValidForm()}
                    onClick={this.handleSubmit}
                  >
                    {submitText}
                  </Button>
                </Col>
              </FormGroup>
            </Form>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}
