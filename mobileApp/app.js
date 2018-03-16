import React, { Component } from 'react';
import { View, Text } from 'react-native';


//create an empty array called locations
//watch for the device changes location
// get latitude and longitude
//store it to the variable named location
//push location variable to the locations array
//display as string (JSON.stringfy(locations)) on the device screen in purpose of testing
// once you successfull on previus step, watch for the length of locations array
// if (length of locations equal to 6){  "SEND" it to the server and delete first stored location using shift() method}
export default class testApp extends Component{
constructor(props){
  super(props);
  this.state = {
    locations: [],
     
    error: null
  };
};
  componentDidMount(){
    this.watchId = navigator.geolocation.watchPosition(
      (position) => {
        var locations = this.state.locations;
        locations.push({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude
        });

        this.setState({
          locations,
          error: null
        });
      },
      (error) => this.setState({error: error.message }),
      {enableHighAccuracy:true, timeout:20000, maximumAge: 1000, distanceFilter: 10}
    );
  };
  render() {
    return (
      <View>
        <Text>"Hellow World"</Text>
        <Text>Latitude: {this.state.latitude}</Text>
        <Text>Longitude: {this.state.longitude}</Text>
        {this.state.error ? <Text>Error: {this.state.error}</Text> : null}
      </View>
    );
  }
}
const
let
var
