import React, { Component } from 'react'
import { View, Text } from 'react-native'

const link1 = 'https://sendeyo.com/up/d/f76b188650';
const link2 = 'https://sendeyo.com/up/d/9b394a9d7d';
const link3 = 'https://sendeyo.com/up/d/5f1d5513b8';

class HttpExample extends Component {

   state = {
      data: []
   }

   componentDidMount = () => {
      fetch(link3, {
         method: 'GET' //What does GET do?
      })
      .then((response) => response.json())
      .then((responseJson) => {
         console.log(responseJson);
         this.setState({
            data: responseJson
         })
      })
      .catch((error) => {
         console.error(error);
      });
   }
   render() {
     //What goes in render?
      return (
         <View>
            <Text>
                {"\n\n\n"}
                First class: {this.state.data.CSC490} {"\n"}
                Second class: {this.state.data.MATH490} {"\n"}
                Note to self: {this.state.data.PERSONAL}
            </Text>
         </View>
      )
   }
}
export default HttpExample
