import React from "react";

class CheckboxComponent extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props);
    this.state = {
      checked: this.props.currentVal,
    };
  }
  
  handleCheckClick = () => {
    this.props.handler(!this.state.checked);
    this.setState({ checked: !this.state.checked });
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