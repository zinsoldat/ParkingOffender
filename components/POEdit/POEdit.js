import React, { Component } from 'react';
import { Dimensions, View, StyleSheet, Text, TextInput, DatePickerAndroid, Image } from 'react-native';

export default class POList extends Component {
    constructor(props) {
        super(props);

        // bind functions
    }

    render() {
        return (
            <View style={styles.container}>
                <Image style={styles.image}
                    source={{ uri: 'http://facebook.github.io/react/img/logo_og.png' } || require('../../404.png') }>
                </Image>
                <View style={styles.details}>
                    <TextInput style={styles.text}
                        placeholder="License Plate">
                    </TextInput>
                    <TextInput style={styles.text}
                        placeholder="Street">
                    </TextInput>
                    <TextInput style={styles.text}
                        placeholder="Street Number">
                    </TextInput>
                    <TextInput style={styles.text}
                        placeholder="ZIP Code">
                    </TextInput>
                    <TextInput style={styles.text}
                        placeholder="Address">
                    </TextInput>
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
        alignSelf: 'stretch',
        marginTop: 16,
        fontSize: 20,
    }
});