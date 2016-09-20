import React, { Component } from 'react';
import { Dimensions, View, StyleSheet, TextInput, Text, Image } from 'react-native';
import ImagePicker from 'react-native-image-picker';
import { Platform } from 'react-native';
import Button from 'react-native-button'

class POEdit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            parkingOffender: Object.assign({}, props.parkingOffender)
        };
        console.log(this.state);
        this.choosePhotoSource = this.choosePhotoSource.bind(this);
    }

    render() {
        return (
            <View style={styles.detailContainer}>
                <Image style={styles.image}
                    source={this.state.parkingOffender.image || require('../../404.png') }
                    resizeMode="contain"/>
                <Button style={styles.buttonText} 
                    containerStyle={styles.buttonContainer} 
                    onPress={() => this.choosePhotoSource()}>
                    Get/Take Photo
                </Button>
                <View style={styles.detailLineContainer}>
                    <TextInput style={styles.licensePlate}
                        value={this.state.parkingOffender.licensePlate}
                        onChangeText={(text) => {
                            let po = Object.assign({}, this.state.parkingOffender)
                            po.licensePlate = text;
                            this.setState({ parkingOffender: po });
                        }}
                        editable={true}
                        maxLength={15}
                        placeholder="License Plate">
                    </TextInput>
                    <TextInput style={styles.witness}
                        value={this.state.parkingOffender.witness}
                        onChangeText={(text) => {
                            let po = Object.assign({}, this.state.parkingOffender)
                            po.witness = text;
                            this.setState({ parkingOffender: po });
                        }}
                        editable={true}
                        maxLength={15}
                        placeholder="Witness">
                    </TextInput>
                </View>

                <View style={styles.separator}/>

                <View style={styles.detailLineContainer}>
                    <TextInput style={styles.date}
                        value={this.state.parkingOffender.date.toLocaleDateString() }
                        onChangeText={(text) => {
                            let po = Object.assign({}, this.state.parkingOffender)
                            po.date = text;
                            this.setState({ parkingOffender: po });
                        }}
                        editable={true}>
                    </TextInput>
                </View>
                <View style={styles.detailLineContainer}>
                    <TextInput style={styles.street}
                        value={this.state.parkingOffender.address.street}
                        onChangeText={(text) => {
                            let po = Object.assign({}, this.state.parkingOffender)
                            po.address.street = text;
                            this.setState({ parkingOffender: po });
                        }}
                        editable={true}
                        maxLength={15}
                        placeholder="Street">
                    </TextInput>
                    <TextInput style={styles.streetNumber}
                        value={this.state.parkingOffender.address.streetNumber}
                        onChangeText={(text) => {
                            let po = Object.assign({}, this.state.parkingOffender)
                            po.address.streetNumber = text;
                            this.setState({ parkingOffender: po });
                        }}
                        editable={true}
                        maxLength={5}
                        placeholder="No">
                    </TextInput>
                </View>

                <View style={styles.detailLineContainer}>
                    <TextInput style={styles.zipCode}
                        value={this.state.parkingOffender.address.zipCode}
                        onChangeText={(text) => {
                            let po = Object.assign({}, this.state.parkingOffender)
                            po.address.zipCode = text;
                            this.setState({ parkingOffender: po });
                        }}
                        editable={true}
                        maxLength={5}
                        placeholder="ZIP">
                    </TextInput>
                    <TextInput style={styles.city}
                        value={this.state.parkingOffender.address.city}
                        onChangeText={(text) => {
                            let po = Object.assign({}, this.state.parkingOffender)
                            po.address.city = text;
                            this.setState({ parkingOffender: po });
                        }}
                        editable={true}
                        maxLength={25}
                        placeholder="City">
                    </TextInput>
                </View>

                <View style={styles.separator}/>

                <View style={styles.detailLineContainerComment}>
                    <TextInput style={styles.comment}
                        value={this.state.parkingOffender.comment}
                        onChangeText={(text) => {
                            let po = Object.assign({}, this.state.parkingOffender)
                            po.comment = text;
                            this.setState({ parkingOffender: po });
                        }}
                        editable={true}
                        maxLength={100}
                        placeholder="Comment">
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

                let po = Object.assign({}, this.state.parkingOffender)
                po.image = source;
                this.setState({
                    parkingOffender: po
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
        width: 150,
        fontWeight: 'bold'
    },
    witness: {
        width: width-150
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