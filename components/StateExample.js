import React, { Component } from 'react';
import { View, Image, Button } from 'react-native';

class StateExample extends Component {
    constructor(props) {
        super(props);
        this.onPress = this.onPress.bind(this)
        this.state = {
            url : 'https://parismatch.be/app/uploads/2018/04/Macaca_nigra_self-portrait_large-e1524567086123-1100x715.jpg'
        }
    }
    onPress() {
        this.setState({ url: 'https://codepo8.github.io/canvas-images-and-pixels/img/horse.png' });
    }
    render() {
        return (
            <View>
                <Image style={{height: 100, width: 100 }} source={{ uri: this.state.url }} />
                <Button title='Press me' onPress={this.onPress} />
            </View>
        );
    }
}

export default StateExample;