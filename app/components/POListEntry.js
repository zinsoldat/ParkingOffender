import React, { Component } from 'react';
import { View, StyleSheet, Text, Image, TouchableHighlight } from 'react-native';

class POListEntry extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <TouchableHighlight onPress={() => {this.props.onShowPo(this.props.parkingOffender)}}>
                <View style={styles.row}>
                    <Image style={styles.thumbnail}
                        source={this.props.parkingOffender.image || require('../404.png') }/>
                    <View style={styles.rowDetails}>
                        <Text style={this._getTitleStyle().rowTitle }>
                            {this.props.parkingOffender.title}
                        </Text>
                        <Text style={styles.rowSubTitle}>
                            {this.props.parkingOffender.date.toLocaleDateString() 
                                + '  -  ' 
                                + this.props.parkingOffender.date.toLocaleTimeString() }
                        </Text>
                    </View>
                </View>
            </TouchableHighlight>
        )
    }

    _getTitleStyle() {

        var style = {
            paddingTop: 8,
            fontWeight: 'bold',
            fontSize: 20
        };
        if (!this.props.parkingOffender.sended.status) {
            style.color = '#D32F2F';
        } else {
            style.color = '#CDDC39';
        }
        return StyleSheet.create({ rowTitle: style });
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