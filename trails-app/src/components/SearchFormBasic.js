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
        this.props.history.push('/loading')
        this.props.searchObj.update(zip).then(() => {
            this.props.history.push('/search/results-list');
        });
    }


    validate = (zip) => {
        const zipLength = zip.trim().length;
        const currentZip = zip.trim();
        const isNumeric = this.validateNumericInput(currentZip);
        if (!isNumeric) return 'Please enter valid ZIP code characters';
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

    validateNumericInput = (zip) => {
        for (var i = 0; i < zip.length; i++) {
            if (i != 5) {
                console.log(zip[i]);
                if (isNaN(parseInt(zip[i]))) return false;
            }
        }
        return true;
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