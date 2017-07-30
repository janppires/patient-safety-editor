import React, { PureComponent } from "react";
import AddTopicButton from "./AddTopicButton";

class Header extends PureComponent {
  constructor(props) {
    super(props);
    this.title = "Topics";
  }

  render() {
    return (
      <div className="d-flex justify-content-between align-items-center my-2">
        <h2>
          {this.title}
        </h2>
        <AddTopicButton onClick={this.props.onAddTopic} />
      </div>
    );
  }
}

export default Header;
