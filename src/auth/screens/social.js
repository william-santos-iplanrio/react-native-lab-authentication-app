import React from 'react';
import { WebView } from 'react-native';

export default class SocialScreen extends React.Component {
  render() {
    return (
      <WebView
        source={{ uri: 'http://localhost:3000/auth/facebook' }}
      />
    );
  }
}
