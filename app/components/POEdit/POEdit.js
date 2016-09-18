import React, { Component } from 'react';
import { Dimensions, View, StyleSheet, TextInput, Text, Image } from 'react-native';

class POEdit extends Component {
    constructor(props) {
        super(props);
        this.state = Object.assign({}, props.parkingOffender);
    }

    render() {
        return (
            <View style={styles.detailContainer}>
                <Image style={styles.image}
                    source={this.props.parkingOffender.image || require('../../404.png') }
                    resizeMode="contain"/>

                <View style={styles.detailLineContainer}>
                    <TextInput style={styles.licensePlate}
                        value={this.state.licensePlate}  
                        onChangeText={(text) => this.setState({ licensePlate: text })}
                        editable={true}
                        maxLength={15}
                        placeholder="License Plate">
                    </TextInput>
                </View>

                <View style={styles.separator}/>

                <View style={styles.detailLineContainer}>
                    <TextInput style={styles.date}
                        value={this.state.date.toLocaleDateString()}
                        onChangeText={(text) => this.setState({ date: text })}
                        editable={true}>
                    </TextInput>
                </View>
                <View style={styles.detailLineContainer}>
                    <TextInput style={styles.street}
                        value={this.state.address.street}
                        onChangeText={(text) => this.setState({ address: {text: street} })}
                        editable={true}
                        maxLength={15}
                        placeholder="Street">
                    </TextInput>
                    <TextInput style={styles.streetNumber}
                        value={this.state.address.streetNumber}
                        onChangeText={(text) => this.setState({ address: {streetNumber: text} })}
                        editable={true}
                        maxLength={5}
                        placeholder="No">
                    </TextInput>
                </View>

                <View style={styles.detailLineContainer}>
                    <TextInput style={styles.zipCode}
                        value={this.state.address.zipCode}
                        onChangeText={(text) => this.setState({ address: {zipCode: text} })}
                        editable={true}
                        maxLength={5}
                        placeholder="ZIP">
                    </TextInput>
                    <TextInput style={styles.city}
                        value={this.state.address.city}
                        onChangeText={(text) => this.setState({ address: {city: text} })}
                        editable={true}
                        maxLength={25}
                        placeholder="City">
                    </TextInput>
                </View>

                <View style={styles.separator}/>

                <View style={styles.detailLineContainerComment}>
                    <TextInput style={styles.comment}
                        value={this.props.parkingOffender.comment}
                        onChangeText={(text) => this.setState({ licensePlate: text })}
                        editable={true}
                        maxLength={100}>
                    </TextInput>
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
        alignItems: 'stretch',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    detailLineContainerComment: {
        flex: 1,
        justifyContent: 'center',
        flexDirection: 'row',
        height: 64
    },
    licensePlate: {
        borderWidth: 1,
        width: width,
        fontWeight: 'bold'
    },
    date: {
        width: width,
    },
    street: {
        width: width-100,
    },
    streetNumber: {
        width: 100,
    },
    zipCode: {
        width: 100,
    },
    city: {
        width: width-100,
    },
    comment: {
        width: width,
        width: width,
    },
    separator: {
        height: 1,
        width: width,
        backgroundColor: '#BBDEFB',
    },
});

export default POEdit;