import React, { Component } from 'react';
import { Image } from 'react-native';

const ProfilePhoto = ({ size, imageProfile }) => {
// class ProfilePhoto extends Component {
    // render() {
        return (
            <Image 
                style={{ width: size, height: size }}
                source={{ uri: imageProfile}}    
            />
        );
    // }
}

export default ProfilePhoto;