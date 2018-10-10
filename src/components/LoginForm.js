import React, { Component } from 'react';
import { Card, CardSection, Input, Button } from './common';

class LoginForm extends Component {

    onEmailChange(text) {
        
    }

    render() {
        return (
            <Card>
                <CardSection>
                    <Input
                    label="Email"
                    placeholder="abc@gmail.com"
                    onChangeText={this.onEmailChange.bind(this)} // A callback of onEmail Change, so Bind here
                    />
                </CardSection>

                <CardSection>
                    <Input
                    label="Password"
                    placeholder="******"
                    secureTextEntry
                    />
                </CardSection>

                <CardSection>
                    <Button>Login</Button>
                </CardSection>


            </Card>
        );
    }
}

export default LoginForm;
