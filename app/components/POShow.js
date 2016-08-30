import React, { Component } from 'react';
import { Dimensions, View, StyleSheet, Text, Image } from 'react-native';

class POShow extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View>
                <Image style={styles.image}
                       source={this.props.parkingOffender.image || require('../404.png') }
                       resizeMode="contain"/>

                <View style={styles.dateTime}>
                    <Text>
                            {this.props.parkingOffender.date.toLocaleDateString() }
                    </Text>
                    <Text>
                            {this.props.parkingOffender.date.toLocaleTimeString() }
                    </Text>
                </View>
            </View>
        );
    }

}

const width = Dimensions.get('window').width; //full width
const height = Dimensions.get('window').height; //full height

const styles = StyleSheet.create({
    image: {
        width: width,
        height: 300
    },
    dateTime: {

    }
});

export default POShow;