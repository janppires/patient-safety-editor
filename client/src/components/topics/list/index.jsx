import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { categorySelector, addCategory } from "redux/modules/categories";
import ListHeader from "components/common/list-header";
import AddItemButton from "components/common/add-item-button";
import TopicsListGroup from "components/topics/list/list-group";
import TopicsListEmpty from "components/topics/topics-list-empty";
import CreateCategoryDialog from "components/categories/create-dialog";

export class TopicsList extends PureComponent {
  static propTypes = {
    topics: PropTypes.array.isRequired,
    selectedTopic: PropTypes.object,
    toggleAddTopicModal: PropTypes.func.isRequired,
    onSelectTopic: PropTypes.func.isRequired,
    isAddTopicModalOpen: PropTypes.bool.isRequired,
    addTopic: PropTypes.func.isRequired
  };

  state = {
    modal: false
  };

  handleToggleModal = () => {
    this.setState({
      modal: !this.state.modal
    });
  };

  handleSelectTopic = category => {};

  render() {
    const { category, selectedTopic, addTopic } = this.props;
    const isTopicsListEmpty = category.topics.length === 0;
    return (
      <div style={styles.container}>
        <ListHeader title={"Topics"}>
          <AddItemButton
            onClick={this.handleToggleModal}
            tooltip={"Add Topic"}
          />
        </ListHeader>
        {isTopicsListEmpty
          ? <TopicsListEmpty category={category} />
          : <TopicsListGroup
              topics={category.topics}
              selectedTopic={selectedTopic}
              onSelectTopic={this.handleSelectTopic}
            />}
        <CreateCategoryDialog
          toggle={this.handleToggleModal}
          isOpen={this.state.modal}
          submit={addTopic}
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
  connect(mapStateToProps, mapDispatchToProps)(TopicsList)
);

const styles = {
  container: {
    display: "flex",
    flex: 1,
    flexDirection: "column"
  }
};
