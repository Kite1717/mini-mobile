import React from 'react'
import Background from '../components/Background'
import Header from '../components/Header'
import BackButton from '../components/BackButton'
import { FlatList, View, Text, StyleSheet, Dimensions } from 'react-native'


import { BarChart, Grid } from 'react-native-svg-charts'
import { Text as TextS } from 'react-native-svg'


const screenWidth = Dimensions.get("window").width;


export default function BookEx({ navigation }) {



  const data = [10, 5, 25, 15, 20]

  const CUT_OFF = 20
  const Labels = ({ x, y, bandwidth, data }) => (
    data.map((value, index) => (
      <TextS
        key={index}
        x={x(index) + (bandwidth / 2)}
        y={value < CUT_OFF ? y(value) - 10 : y(value) + 15}
        fontSize={14}
        fill={value >= CUT_OFF ? 'white' : 'black'}
        alignmentBaseline={'middle'}
        textAnchor={'middle'}
      >
        {value}
      </TextS>
    ))
  )



  return (
    <Background >
      <BackButton goBack={navigation.goBack} />
      <Header>MİNİPOİ 2-3 YAŞ KİTABI</Header>
      <Text style={styles.title}>Progress Chart</Text>
      <View style={styles.line}></View>


      <View style={{ flexDirection: 'row', height: 200, paddingVertical: 16 }}>
        <BarChart
          style={{ flex: 1 }}
          data={data}
          svg={{ fill: 'rgba(134, 65, 244, 0.8)' }}
          contentInset={{ top: 10, bottom: 10 }}
          spacing={0.2}
          gridMin={0}
        >
          <Grid direction={Grid.Direction.HORIZONTAL} />
          <Labels />
        </BarChart>


      </View>

    </Background>
  )
}

const styles = StyleSheet.create({

  container: {
    marginBottom: 10,
  },
  bookContainer: {
    flex: 1,
    display: "flex",
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    color: "blue",
    fontWeight: 'bold',
    fontSize: 18,
    marginVertical: 10,
    marginLeft: 10,
  },
  sep: {
    width: "100%",
    height: 1,
    marginVertical: 5,
    backgroundColor: "grey"
  },
  title: {
    fontSize: 17,

  },
  line: {
    marginTop: 5,
    marginBottom: 5,
    height: 1,
    width: '100%',
    backgroundColor: 'blue',

  }



})