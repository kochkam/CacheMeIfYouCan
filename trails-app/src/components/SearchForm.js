import React from 'react';
import { withRouter } from 'react-router-dom';

class SearchForm extends React.Component{
    state = {
        zip: '',
        error: '',
    }

    onInputChange = (event) => {
        this.setState({
            zip: event.target.value,
            error: '',
        });
    }

    onFormSubmit = async (event) => {
        event.preventDefault();
        const zip = this.state.zip;
        const error = this.validate(zip);
        this.setState({error});
        if (error.length > 0) return;
        this.setState({zip:''});
        this.props.searchObj.zip = zip;
        this.props.searchObj.translateZip(zip).then(() => {
            this.props.history.push('/results-list');
        });
    }


    validate = (zip) => {
        const zipLength = zip.trim().length;
        if (zipLength === 0) return 'Please enter a ZIP code';
        if (isNaN(zipLength)) return 'Please enter a ZIP code';
        return '';
    }

    render() {
        return (
            <form className="searchField" onSubmit={this.onFormSubmit}>
                <div>
                    <input
                        id='zip'
                        className={ this.state.error ? 'error' : '' }
                        name='zip'
                        type='text'
                        value={this.state.zip}
                        placeholder = 'Enter ZIP Code....'
                        onChange={this.onInputChange}
                    />
                    <button className='SearchBtn' type='submit'>Search
                        <i className='SearchBtn'></i>
                    </button>
                </div>
            <p className='error'>{ this.state.error }</p>
            </form>
        );
      }
}

export default withRouter(SearchForm);