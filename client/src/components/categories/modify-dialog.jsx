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
  edit: { titleText: "Edit Category", submitText: "Modify" },
  create: { titleText: "Add New Category", submitText: "Add" }
};

export default class ModifyCategoryModal extends PureComponent {
  static propTypes = {
    category: PropTypes.object,
    mode: PropTypes.string,
    submit: PropTypes.func.isRequired
  };

  static defaultProps = {
    mode: "create"
  };

  state = {
    name: this.props.category.name,
    icon: this.props.category.icon,
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

  handleCategoryNameInput = ev => {
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
                <Label for="categoryName" sm={2}>
                  Name
                </Label>
                <Col sm={10}>
                  <Input
                    type="text"
                    name="categoryName"
                    id="categoryName"
                    placeholder="Type category name..."
                    value={this.state.name}
                    onChange={this.handleCategoryNameInput}
                  />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label for="categoryIcon" sm={2}>
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
