import React, { Component } from 'react';
import { Dimensions, View, StyleSheet, TextInput, Text, Image } from 'react-native';
import ImagePicker from 'react-native-image-picker';
import { Platform } from 'react-native';
import Button from 'react-native-button'

class POEdit extends Component {
    constructor(props) {
        super(props);
        this.state = Object.assign({}, props.parkingOffender);

        this.choosePhotoSource = this.choosePhotoSource.bind(this);
    }

    render() {
        return (
            <View style={styles.detailContainer}>
                <Image style={styles.image}
                    source={this.state.image || require('../../404.png') }
                    resizeMode="contain"/>
                <Button style={styles.buttonText} 
                    containerStyle={styles.buttonContainer} 
                    onPress={() => this.choosePhotoSource()}>
                    Get/Take Photo
                </Button>
                <View style={styles.detailLineContainer}>
                    <TextInput style={styles.licensePlate}
                        value={this.state.licensePlate}
                        onChangeText={(text) => this.setState({ licensePlate: text }) }
                        editable={true}
                        maxLength={15}
                        placeholder="License Plate">
                    </TextInput>
                </View>

                <View style={styles.separator}/>

                <View style={styles.detailLineContainer}>
                    <TextInput style={styles.date}
                        value={this.state.date.toLocaleDateString() }
                        onChangeText={(text) => this.setState({ date: text }) }
                        editable={true}>
                    </TextInput>
                </View>
                <View style={styles.detailLineContainer}>
                    <TextInput style={styles.street}
                        value={this.state.address.street}
                        onChangeText={(text) => this.setState({ address: { text: street } }) }
                        editable={true}
                        maxLength={15}
                        placeholder="Street">
                    </TextInput>
                    <TextInput style={styles.streetNumber}
                        value={this.state.address.streetNumber}
                        onChangeText={(text) => this.setState({ address: { streetNumber: text } }) }
                        editable={true}
                        maxLength={5}
                        placeholder="No">
                    </TextInput>
                </View>

                <View style={styles.detailLineContainer}>
                    <TextInput style={styles.zipCode}
                        value={this.state.address.zipCode}
                        onChangeText={(text) => this.setState({ address: { zipCode: text } }) }
                        editable={true}
                        maxLength={5}
                        placeholder="ZIP">
                    </TextInput>
                    <TextInput style={styles.city}
                        value={this.state.address.city}
                        onChangeText={(text) => this.setState({ address: { city: text } }) }
                        editable={true}
                        maxLength={25}
                        placeholder="City">
                    </TextInput>
                </View>

                <View style={styles.separator}/>

                <View style={styles.detailLineContainerComment}>
                    <TextInput style={styles.comment}
                        value={this.props.parkingOffender.comment}
                        onChangeText={(text) => this.setState({ licensePlate: text }) }
                        editable={true}
                        maxLength={100}>
                    </TextInput>
                </View>
            </View>
        );
    }

    choosePhotoSource() {
        // More info on all the options is below in the README...just some common use cases shown here
        var options = {
            title: 'Take/Get Photo',
            storageOptions: {
                skipBackup: true,
                path: 'images'
            }
        };

        /**
         * The first arg is the options object for customization (it can also be null or omitted for default options),
         * The second arg is the callback which sends object: response (more info below in README)
         */
        ImagePicker.showImagePicker(options, (response) => {
            if (response.didCancel) {
            }
            else if (response.error) {
            }
            else if (response.customButton) {
            }
            else {
                // You can display the image using either data...
                const source = { uri: 'data:image/jpeg;base64,' + response.data, isStatic: true };

                // or a reference to the platform specific asset location
                if (Platform.OS === 'ios') {
                    const source = { uri: response.uri.replace('file://', ''), isStatic: true };
                } else {
                    const source = { uri: response.uri, isStatic: true };
                }

                this.setState({
                    image: source
                });
            }
        });
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
    buttonContainer: {
        borderRadius: 8,
        padding: 8,
        marginLeft: 16,
        marginRight: 16,
        backgroundColor: '#3F51B5'
    },
    buttonText: {
        color: 'white'
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
        width: width - 100,
    },
    streetNumber: {
        width: 100,
    },
    zipCode: {
        width: 100,
    },
    city: {
        width: width - 100,
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