import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { sum } from '../utils';
import { Cell } from './cell';

export class Row extends Component {
  render() {
    const { data, style, widthArr, height, flexArr, textStyle, onPress, activeOpacity = 0.8, ...props } = this.props;
    let width = widthArr ? sum(widthArr) : 0;

    return data ? (
      <TouchableOpacity activeOpacity={activeOpacity} onPress={onPress} disabled={!onPress} style={[height && { height }, width && { width }, styles.row, style]}>
        {data.map((item, i) => {
          const flex = flexArr && flexArr[i];
          const wth = widthArr && widthArr[i];
          return <Cell key={i} data={item} width={wth} height={height} flex={flex} textStyle={textStyle} {...props} />;
        })}
      </TouchableOpacity>
    ) : null;
  }
}

export class Rows extends Component {
  render() {
    const { data, style, widthArr, heightArr, flexArr, textStyle, ...props } = this.props;
    const flex = flexArr ? sum(flexArr) : 0;
    const width = widthArr ? sum(widthArr) : 0;

    return data ? (
      <View style={[flex && { flex }, width && { width }]}>
        {data.map((item, i) => {
          const height = heightArr && heightArr[i];
          return <Row key={i} data={item} widthArr={widthArr} height={height} flexArr={flexArr} style={style} textStyle={textStyle} {...props} />;
        })}
      </View>
    ) : null;
  }
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    overflow: 'hidden'
  }
});
