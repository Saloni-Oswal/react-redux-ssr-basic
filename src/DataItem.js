import React, { PureComponent } from "react";
import { connect } from "react-redux";

import "./DataItem.css";
import { onItemClick, onHideButtonClick } from "./store/actions";

class DataItem extends PureComponent {
  onHideButtonClick = (event) => {
    event.preventDefault();
    event.stopPropagation();
    this.props.onHideButtonClick(this.props.user.id);
  };

  onItemClick = () => {
    this.props.onItemClick(this.props.user.id);
  };

  render() {
    const {
      user: { firstName, lastName, image, isExpanded },
    } = this.props;
    return (
      <div className="data-item" onClick={this.onItemClick}>
        {isExpanded && (
          <span className="data-image">
            <img src={image} alt="img"></img>
          </span>
        )}
        <span className="data-name">
          {firstName} {lastName}
        </span>
        <span>
          <button onClick={this.onHideButtonClick} className="data-button">
            Hide user
          </button>
        </span>
      </div>
    );
  }
}

// const mapDispatchToProps = (dispatch) => ({
//   onItemClick: (id) => {
//     dispatch({ type: "EXPAND_USER", payload: { id } });
//   },
// });

export default connect(null, { onItemClick, onHideButtonClick })(DataItem);
