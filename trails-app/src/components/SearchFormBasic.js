import React from 'react';
import { withRouter } from 'react-router-dom';

class SearchFormBasic extends React.Component{
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
        this.props.history.push('/')
        this.props.searchObj.update(zip).then(() => {
            this.props.history.push('/results-list');
        });
    }


    validate = (zip) => {
        const zipLength = zip.trim().length;
        var currentZip = zip.trim();
        if (zipLength === 0) return 'Please enter a ZIP code';
        if (zipLength === 9) {
            return '9 digit ZIP codes must include a \'-\', e.g. 11111-1111';
        }
        if (zipLength === 10) {
            if (currentZip[5] != '-') {
                return 'Please enter a valid ZIP code';
            } else {
                return '';
            }
        }
        if (zipLength !== 5) return 'Please enter a valid ZIP code';
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

export default withRouter(SearchFormBasic);