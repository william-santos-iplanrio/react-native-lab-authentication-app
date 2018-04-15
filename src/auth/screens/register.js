import React from 'react';
import { View, Text } from 'react-native';
import { Button, Icon, FormLabel, FormInput } from 'react-native-elements';

export default class RegisteryScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <Icon
            name='ios-person'
            type='ionicon'
            size={96}
          />
          <Text>Register</Text>
        </View>

        <View style={{ flex: 1 }}>
          <View>
            <FormLabel>Name</FormLabel>
            <FormInput
              value={'User Name'}
            />
          </View>
          <View>
            <FormLabel>Email</FormLabel>
            <FormInput
              value={'exemple@gmail.com'}
            />
          </View>
          <View>
            <FormLabel>Password</FormLabel>
            <FormInput
              value={'teste'}
              secureTextEntry
            />
          </View>
        </View>

        <View style={{ flex: 1 }}>
          <Button
            raised
            title='Save'
            onPress={() => this.props.navigation.goBack()}
          />
        </View>
      </View>
    );
  }
}
