import React from 'react';
import {
    StyleSheet,
    Text,
    View,
} from 'react-native';

import moment from 'moment/min/moment-with-locales.min';

export default class CustomTime extends React.Component {
    render() {
        return (
            <View style={[styles[this.props.position].container, this.props.containerStyle[this.props.position]]}>
                <Text style={[styles[this.props.position].text, this.props.textStyle[this.props.position]]}>
                    {moment(this.props.currentMessage.createdAt).locale(this.props.locale).format('LT')}
                </Text>
            </View>
        );
    }
}

const containerStyle = {
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 5,
};

const textStyle = {
    fontSize: 10,
    backgroundColor: 'transparent',
    textAlign: 'right',
};

const styles = {
    left: StyleSheet.create({
        container: {
            ...containerStyle,
        },
        text: {
            color: '#aaa',
            ...textStyle,
        },
    }),
    right: StyleSheet.create({
        container: {
            ...containerStyle,
        },
        text: {
            color: '#fff',
            ...textStyle,
        },
    }),
};

CustomTime.contextTypes = {
    getLocale: React.PropTypes.func,
};

CustomTime.defaultProps = {
    position: 'left',
    currentMessage: {
        createdAt: null,
    },
    containerStyle: {},
    textStyle: {},
};

CustomTime.propTypes = {
    position: React.PropTypes.oneOf(['left', 'right']),
    currentMessage: React.PropTypes.object,
    containerStyle: React.PropTypes.shape({
        left: View.propTypes.style,
        right: View.propTypes.style,
    }),
    textStyle: React.PropTypes.shape({
        left: Text.propTypes.style,
        right: Text.propTypes.style,
    }),
};
