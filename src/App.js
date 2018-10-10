import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import reducers from './reducers';
import LoginForm from './components/LoginForm';

class App extends Component {

    componentWillMount() {
        console.log('Hello');
        const config = {
            apiKey: 'AIzaSyCDF_YFPi-AO_AhFJWsGDldibmPM6SFo2U',
        authDomain: 'authentication-bed0b.firebaseapp.com',
        databaseURL: 'https://authentication-bed0b.firebaseio.com',
        projectId: 'authentication-bed0b',
        storageBucket: 'authentication-bed0b.appspot.com',
        messagingSenderId: '718859423026'
        }

        firebase.initializeApp(config);    
    }

    render() {
        return (
            <Provider store={createStore(reducers)}>
                <LoginForm />
            </Provider>
        );
    }
}

export default App;
