import React, { Component } from 'react';
import { Dimensions, View, StyleSheet, Text, Image, TouchableHighlight } from 'react-native';

export default class POList extends Component {
    constructor(props) {
        super(props);

        // bind functions
    }

    render() {
        return (
            <View style={styles.container}>
                <Image style={styles.image}
                    source={this.props.image || require('../../404.png')}>
                </Image>
                <View style={styles.details}>
                    <Text style={styles.text}>
                        {this.props.date.toLocaleDateString() + ' ' + this.props.date.toLocaleTimeString() }
                    </Text>
                    <Text style={styles.text}>
                        {(this.props.address.street || '<Street>') + ' ' + (this.props.address.streetNumber || '<Street>') }
                    </Text>
                    <Text style={styles.text}>
                        {(this.props.address.zipCode || '<ZIPCode>') + ' ' + (this.props.address.city || '<City>') }
                    </Text>
                </View>
            </View>
        );
    }
}

const width = Dimensions.get('window').width; //full width
const height = Dimensions.get('window').height; //full height

const styles = StyleSheet.create({
    container: {
        alignSelf: 'stretch',
        flex: 1
    },
    image: {
        width: width,
        height: 300,
        alignSelf: 'stretch',
    },
    details: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        marginTop: 16,
        fontSize: 20,
    }
});