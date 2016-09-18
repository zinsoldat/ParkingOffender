import React, { Component } from 'react';
import { View, StyleSheet, ListView, RecyclerViewBackedScrollView } from 'react-native';
import POListEntry from './POListEntry';

class POList extends Component {
    constructor(props) {
        super(props);
        this.ds = new ListView.DataSource({ rowHasChanged: (row1, row2) => row1 !== row2 })

        this._renderRow = this._renderRow.bind(this);
        this._renderSeparator = this._renderSeparator.bind(this);
    }

    render() {
        return (
            <ListView style={styles.listView}
                dataSource={this.ds.cloneWithRows(this.props.parkingOffenders) }
                enableEmptySections={true}
                renderRow={this._renderRow}
                renderSeparator={this._renderSeparator}
                renderScrollComponent={props => <RecyclerViewBackedScrollView {...props} />}
                />
        );
    }

    _renderRow(parkingOffender) {
        return (
            <POListEntry parkingOffender={parkingOffender} onShowPo={this.props.onShowPo}/>
        );
    }

    _renderSeparator(sectionID, rowID, adjacentRowHighlighted) {
        return (
            <View
                key={`${sectionID}-${rowID}`}
                style={{
                    height: adjacentRowHighlighted ? 2 : 1,
                    backgroundColor: adjacentRowHighlighted ? '#3B5998' : '#C5CAE9',
                }}/>
        );
    }

}


const styles = StyleSheet.create({
    listView: {
        alignSelf: 'stretch',
    }
});

export default POList;