import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Col, Row, Container } from "reactstrap";
import CategoriesList from "components/categories/list";
import TopicsList from "components/topics/list";
import NoCategorySelected from "components/categories/no-category-selected";
import { getCategories } from "redux/modules/categories";

export class CategoriesPage extends Component {
  static propTypes = {
    getCategories: PropTypes.func.isRequired
  };

  componentWillMount() {
    this.props.getCategories();
  }

  isCategorySelected = () => {
    return this.props.match.params.categoryId !== undefined;
  };

  render() {
    const showTopicsList = this.isCategorySelected();
    return (
      <Container className="bg-faded" style={styles.container}>
        <Row style={styles.row}>
          <Col xs="6" style={styles.list}>
            <CategoriesList />
          </Col>
          <Col xs="6" style={styles.list}>
            {showTopicsList ? <TopicsList /> : <NoCategorySelected />}
          </Col>
        </Row>
      </Container>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => {
  return {
    getCategories: () => dispatch(getCategories())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CategoriesPage);

const styles = {
  container: {
    paddingTop: 15,
    paddingBottom: 15,
    borderRadius: "0.25rem"
  },
  row: {
    height: 600
  },
  list: {
    display: "flex",
    flex: 1
  }
};
