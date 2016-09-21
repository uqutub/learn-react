
import React, { Component } from 'react';
import { connect } from 'react-redux';

import Chart from '../components/chart';
import GoogleMap from '../components/google_map';

class WeatherList extends Component {
    constructor(props){
        super(props);
    }

    renderWeather(weather) {
        console.log('weather', weather);
        const name = weather.city.name;
        const temps = weather.list.map(weather => weather.main.temp);
        const pressures = weather.list.map(weather => weather.main.pressure);
        const humidities = weather.list.map(weather => weather.main.humidity);
        const { lon, lat } = weather.city.coord;
        return (
            <tr key={name}> 
                <td><GoogleMap lon={lon} lat={lat} /></td>
                <td><Chart data={temps} color="orange" units="K" /></td>
                <td><Chart data={pressures} color="green" units="hPa" /></td>
                <td><Chart data={humidities} color="black" units="%" /></td>
            </tr>
        );
    }

    render() {
        return (
            <table>
                <thead>
                    <tr>
                        <th style={{width:'50%'}}>City</th>
                        <th>Temperature (K)</th>
                        <th>Pressure (hPa)</th>
                        <th>Humidity (%)</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.weather.map(this.renderWeather)}
                </tbody>
            </table>
        );
    }
}


function mapStateToProps(state) {
  return { weather: state.weather };
}

export default connect(mapStateToProps)(WeatherList);