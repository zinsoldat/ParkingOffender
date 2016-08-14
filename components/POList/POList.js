import React, { Component } from 'react';
import { View, StyleSheet, ListView, Text, Image, ScrollView, TouchableHighlight, RecyclerViewBackedScrollView } from 'react-native';

export default class POList extends Component {
    constructor(props) {
        super(props);

        // bind functions
        this._renderRow = this._renderRow.bind(this);
        this._renderSeparator = this._renderSeparator.bind(this);
    }

    render() {
        var ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        return (
            <ListView style={styles.listView}
                dataSource={ds.cloneWithRows(this.props.parkingOffenders) }
                renderRow={this._renderRow}
                renderSeparator={this._renderSeparator}
                renderScrollComponent={props => <RecyclerViewBackedScrollView {...props} />}
                />
        );
    }

    _renderSeparator(sectionID, rowID, adjacentRowHighlighted) {
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

    _renderRow(rowData, sectionID, rowID, highlightRow) {
        return (
            <ListRow {...rowData} rowId={rowID} onForward={this.props.onForward}/>
        );
    }
}

class ListRow extends Component {
    constructor(props) {
        super(props);

        this._getTitleStyle = this._getTitleStyle.bind(this);
    }

    render() {
        return (
            <TouchableHighlight onPress={() => {
                this.props.onForward(1, this.props);
            }}>
                <View style={styles.row}>
                    <Image style={styles.thumbnail}
                        source={this.props.image || require('../../404.png')}/>
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
        );
    }

    _getTitleStyle() {

        var style = {
            paddingTop: 8,
            fontWeight: 'bold',
            fontSize: 20
        };
        if (!this.props.sended.status) {
            style.color = '#D32F2F';
        } else {
            style.color = '#CDDC39';
        }
        return StyleSheet.create({rowTitle: style});
    }
}

const styles = StyleSheet.create({
    listView: {
        alignSelf: 'stretch',
    },
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
    },
    rowStatus: {
        textAlign: 'right',
        textAlignVertical: 'center',
    }
});