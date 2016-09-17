import React, { Component } from 'react';
import { Dimensions, View, StyleSheet, Text, Image } from 'react-native';

class POShow extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        console.log(this.props.parkingOffender.address.zipCode || 'zipCode');
        // address: {
        //     zipCode: '12345',
        //     city: 'Abtsteinach',
        //     street: 'Weinheimer Str.',
        //     streetNumber: '7'
        // },
        return (
            <View style={styles.detailContainer}>
                <Image style={styles.image}
                    source={this.props.parkingOffender.image || require('../404.png') }
                    resizeMode="contain"/>

                <View style={styles.detailLineContainer}>
                    <Text style={styles.licensePlate}>
                        {this.props.parkingOffender.licensePlate || '<licensePlate>'}
                    </Text>
                </View>

                <View style={styles.separator}/>

                <View style={styles.detailLineContainer}>
                    <Text style={styles.date}>
                        {this.props.parkingOffender.date.toLocaleDateString() }
                    </Text>
                    <Text style={styles.date}>
                        {' '}
                    </Text>
                    <Text style={styles.time}>
                        {this.props.parkingOffender.date.toLocaleTimeString() }
                    </Text>
                </View>
                <View style={styles.detailLineContainer}>
                    <Text style={styles.date}>
                        {this.props.parkingOffender.address.street || '<street>'}
                    </Text>
                    <Text style={styles.date}>
                        {' '}
                    </Text>
                    <Text style={styles.time}>
                        {this.props.parkingOffender.address.streetNumber || '<no>'}
                    </Text>
                </View>

                <View style={styles.detailLineContainer}>
                    <Text style={styles.date}>
                        {this.props.parkingOffender.address.zipCode || '<zipCode>'}
                    </Text>
                    <Text style={styles.date}>
                        {' '}
                    </Text>
                    <Text style={styles.time}>
                        {this.props.parkingOffender.address.city || '<city>'}
                    </Text>
                </View>

                <View style={styles.separator}/>

                <View style={styles.detailLineContainerComment}>
                    <Text style={styles.comment}>
                        {this.props.parkingOffender.comment || '<comment>'}
                    </Text>
                </View>
            </View>
        );
    }

}

const width = Dimensions.get('window').width; //full width
const height = Dimensions.get('window').height; //full height

const styles = StyleSheet.create({
    detailContainer: {
        flex: 1,
        justifyContent: 'flex-start'
    },
    image: {
        width: width,
        height: 300
    },
    detailLineContainer: {
        flex: 1,
        justifyContent: 'center',
        flexDirection: 'row',
    },
    detailLineContainerComment: {
        flex: 1,
        justifyContent: 'center',
        flexDirection: 'row',
        height: 56
    },
    licensePlate: {
        fontSize: 24,
        fontWeight: 'bold'
    },
    date: {
        fontSize: 24,
    },
    time: {
        fontSize: 24,
    },
    comment: {
        fontSize: 16
    },
    separator: {
        height: 1,
        width: width,
        backgroundColor: '#BBDEFB',
  },
});

export default POShow;