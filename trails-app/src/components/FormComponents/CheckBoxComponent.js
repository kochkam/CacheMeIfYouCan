import React from "react";

class CheckboxComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: true,
    };
  }
  
  handleCheckClick = () => {
    this.setState({ checked: !this.state.checked });
    this.props.handler();
  }
  
  render() {
    return (
        <div>
          <input type="checkbox" checked={this.state.checked} onChange={this.handleCheckClick} className="filled-in" id={this.props.id}/>
          <label for={this.props.id}>Include {this.props.id} Hikes</label>

        </div>  
        
    );
  }
}

export default CheckboxComponent