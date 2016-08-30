import React, { Component } from 'react';
import { View, StyleSheet, ListView, RecyclerViewBackedScrollView } from 'react-native';
import POListEntry from './POListEntry';

let POList = ({parkingOffenders, onParkingOffenderClick}) => {
    var ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    return (
        <ListView style={styles.listView}
            dataSource={ ds.cloneWithRows(parkingOffenders) }
            renderRow={(rowData, sectionID, rowID, highlightRow) => {
                return <POListEntry {...rowData} onParkingOffenderClick={onParkingOffenderClick}/>;
            } }
            renderSeparator={this._renderSeparator}
            renderScrollComponent={props => <RecyclerViewBackedScrollView {...props} />}
            />
    );
}

function _renderSeparator(sectionID, rowID, adjacentRowHighlighted) {
    return (
        <View
            key={`${sectionID}-${rowID}`}
            style={{
                height: adjacentRowHighlighted ? 2 : 1,
                backgroundColor: adjacentRowHighlighted ? '#3B5998' : '#C5CAE9',
            }}
            />
    );
}

const styles = StyleSheet.create({
    listView: {
        alignSelf: 'stretch',
    }
});

export default POList;