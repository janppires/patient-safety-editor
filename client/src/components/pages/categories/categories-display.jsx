import React, { Component } from "react";
import PropTypes from "prop-types";
import { Col, Row, Container } from "reactstrap";
import CategoriesList from "components/categories/list";
import TopicsList from "components/topics/list";
import NoCategorySelected from "components/categories/no-category-selected";

export default class CategoriesPage extends Component {
  static propTypes = {
    getCategories: PropTypes.func.isRequired
  };

  componentWillMount() {
    this.props.getCategories();
  }

  render() {
    const { showTopicsList, isFetching } = this.props;
    return (
      <Container className="bg-faded" style={styles.container}>
        {isFetching
          ? <p> Loading ... </p>
          : <Row style={styles.row}>
              <Col xs="6" style={styles.list}>
                <CategoriesList />
              </Col>
              <Col xs="6" style={styles.list}>
                {showTopicsList ? <TopicsList /> : <NoCategorySelected />}
              </Col>
            </Row>}
      </Container>
    );
  }
}

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
