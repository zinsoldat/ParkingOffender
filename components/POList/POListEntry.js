import React, { Component } from 'react';
import { View, StyleSheet, Text, Image, TouchableHighlight } from 'react-native';

class POListEntry extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <TouchableHighlight onPress={this.props.onParkingOffenderClick}>
                <View style={styles.row}>
                    <Image style={styles.thumbnail}
                        source={this.props.image || require('../../404.png') }/>
                    <View style={styles.rowDetails}>
                        <Text style={this._getTitleStyle().rowTitle }>
                            {this.props.title}
                        </Text>
                        <Text style={styles.rowSubTitle}>
                            {this.props.date.toLocaleDateString() + '  -  ' + this.props.date.toLocaleTimeString() }
                        </Text>
                    </View>
                </View>
            </TouchableHighlight>
        )
    }
};

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
    },
    thumbnail: {
        width: 64,
        height: 64,
    },
    rowDetails: {
        paddingLeft: 8,
    },
    rowSubTitle: {
        paddingBottom: 8,
    }
});

export default POListEntry;