import React from 'react';
import { View, Text } from 'react-native';
import { Button, Icon, FormLabel, FormInput } from 'react-native-elements';

export default class RecoveryScreen extends React.Component {
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
          <Text>Recovery</Text>
        </View>

        <View style={{ flex: 1 }}>
          <View>
            <FormLabel>Email</FormLabel>
            <FormInput
              value={'exemple@gmail.com'}
            />
          </View>
        </View>

        <View style={{ flex: 1 }}>
          <Button
            raised
            title='Send'
            onPress={() => this.props.navigation.goBack()}
          />
        </View>
      </View>
    );
  }
}
