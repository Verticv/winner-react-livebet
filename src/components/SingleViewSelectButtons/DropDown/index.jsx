import React from "react";
import "./style.css";

class SelectBox extends React.Component {
  state = {
    items: this.props.items || [],
    showItems: false,
    selectedItem: this.props.items && this.props.items[0]
  };

  dropDown = () => {
    this.setState(prevState => ({
      showItems: !prevState.showItems
    }));
  };

  selectItem = item => {
    this.setState({
      selectedItem: item,
      showItems: false
    });
  };
  
  render() {
    return (
      <div className="select-box--box">
        <div className="select-box--container">
          <div className="select-box--selected-item" onClick={this.dropDown} >
          <img src='../../../imagesHold/ico_16.png' alt="" />
            <span className="text">{this.state.selectedItem.value}</span>
          <div className="select-box--arrow">
            <span
              className={`${
                this.state.showItems
                  ? "select-box--arrow-up"
                  : "select-box--arrow-down"
              }`}
            />
          </div>
          </div>
          <div
            style={{ display: this.state.showItems ? "block" : "none" }}
            className={"select-box--items"}
          >
            <img src="../../../imagesHold/ico_16.png" alt="" />
            {this.state.items.map(item => (
              <div
                key={item.id}
                onClick={() => this.selectItem(item)}
                className={this.state.selectedItem === item ? "selected" : ""}
              >
                {item.value}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default SelectBox;
