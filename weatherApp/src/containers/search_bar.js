import React, {Component} from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/action_search_bar';

class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = { term: '' };
        this.bindFunction();
    }

    bindFunction() {
        this.onInputChangeHandler = this.onInputChangeHandler.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    onInputChangeHandler(event) {
        this.setState({term: event.target.value});
    }

    onFormSubmit(event) {
        event.preventDefault();
        // We need to go and fetch weather data
        this.props.fetchWeather(this.state.term);
        this.setState({ term: '' });
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onFormSubmit}>
                    <input 
                        type="text"
                        placeholder="Get a five-day forecast in your favorite cities"
                        value={this.state.term} 
                        onChange={this.onInputChangeHandler} 
                    />
                    <input 
                        type="submit" 
                        value="Submit" 
                    />
                </form>
            </div>
        );
    }

}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchWeather }, dispatch);
}


export default connect(null, mapDispatchToProps)(SearchBar);