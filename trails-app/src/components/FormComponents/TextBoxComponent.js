import React from "react";

class TextBoxComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            resultNumber:10,
            error:''
        };
      }
      
      changeValue = (event) => {
        this.setState({
            ratingChoice: event.target.value,
        });
        this.props.resultsChange(event.target.value);
    }
    
      render() {
        return (
            <div className="resultNumber">
                <p>I don't want to see more than this many results: </p>
                    <input
                        id='results'
                        className={ this.state.error ? 'error' : '' }
                        name='results'
                        type='text'
                        placeholder = {'Enter Number of Results to see'}
                        onChange={this.changeValue}
                    />
                <p className='error'>{ this.state.error }</p>
            </div>
                        
            
        );
      }
    }

export default TextBoxComponent