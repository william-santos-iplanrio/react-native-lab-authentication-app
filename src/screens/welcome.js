import React from 'react';
import { View, Text, Button } from 'react-native';

export default class WelcomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>       
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Welcome</Text>
        </View>
        
        <View style={{ flex: 1 }}>
          <Button 
            raised
            title='Get In'
            onPress={() => this.props.navigation.navigate('Auth')}
          />
        </View>
      </View>
    );
  }
}
