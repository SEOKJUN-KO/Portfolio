import React from 'react';
import { Pressable, Text } from 'react-native';
import PropTypes from 'prop-types';

const MyButton = props => {
    return (
        <Pressable style={{backgroundColor: '#3498db', padding: 8, margin: 5, borderRadius: 8,}} onPress={ () => props.onPress()}>
            <Text style={{fontSize: 20,}}>{props.children|| props.title}</Text>
        </Pressable>
    );
};

MyButton.defaultProps = {
    title: 'Default Button',
};

MyButton.propTypes = {
    title: PropTypes.string.isRequired,
    onPress: PropTypes.func.isRequired,
};

export default MyButton;

