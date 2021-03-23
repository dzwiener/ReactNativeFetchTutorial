import React, { Component } from 'react'
import { View, Text, Header } from 'react-native'

const link = 'https://www.augustana.edu/files/2018-08/westerlin%20desk.jpg';

class HttpExample extends Component {

   state = {
      data: []
   }
   componentDidMount = () => {
      fetch(link, {
         method: 'GET'
      })
      .then((response) => response.data())
      .then((responseData) => {
         console.log(responseData);
      })
      .catch((error) => {
         console.error(error);
      });
   }
   render() {
      return (
         <View>
            <Text>
                {'Saved Jpeg'}
            </Text>
         </View>
      )
   }
}
export default HttpExample
