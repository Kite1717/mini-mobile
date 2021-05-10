import React from 'react'
import Background from '../components/Background'
import Header from '../components/Header'
import BackButton from '../components/BackButton'
import { FlatList,View,Text,StyleSheet} from 'react-native'
export default function Blog({ navigation }) {





  const renderItem = ({ item }) => {

    return (
      <View style={styles.blogContainer}>
      <Text style ={styles.title}>{item.title}</Text>
      <Text style = {styles.des}>{item.des}</Text>
      <View style = {styles.sep}></View>
      </View>
    );
  };


  const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'Lorem Ipsum',
      des:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Lorem Ipsum',
      des:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."

    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Lorem Ipsum',
      des:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."

    },
  ];
  return (
    <Background navigation ={navigation}>
      <BackButton goBack={navigation.goBack} />
      <Header>Blog</Header>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </Background>
  )
}


const styles = StyleSheet.create({
  blogContainer:{
    flex:1,
    display:"flex",
    flexDirection:"column"
  },
  title:{
    color:"blue",
    fontWeight:'bold',
    fontSize:18,
    marginVertical:10,
  },
  des:{
    color:"black",
    fontSize:14,
  },
  sep:{
    width :"100%",
    height:1,
    marginVertical:5,
    backgroundColor:"grey"
  }

})
