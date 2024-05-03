import { StyleSheet, Text, View, Image, Button, Alert, Appearance, SafeAreaView, FlatList, StatusBar, Pressable} from 'react-native'
import React from 'react'
import mainPic from "../images/Vase_1.png"
export default function App() {
const onButtonPress = () => {
    Alert.alert('button pressed')
}
    return (
        <SafeAreaView style={styles.container}>
           <Image style={styles.vase} source={mainPic} />
           <Text style={styles.title}>Treasure Trove</Text>
           <FlatList data={DATA}
                renderItem={({item}) => <Item title={item.title} />}
                keyExtractor={item => item.id}/>
           <Pressable style = {styles.button} onPress={onButtonPress}>
                <Text style = {styles.text}>New Collection</Text>
           </Pressable>
        </SafeAreaView>
    )
}

const Item = ({title}) => (
  <View style={styles.item}>
    <Text style={styles.item}>{title}</Text>
  </View>
);

const styles = StyleSheet.create({
    container: {
        marginTop: 40,
        paddingHorizontal: 24,
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#ddd',
    },
    vase: {
        marginLeft: 50,
        marginTop: 20,
        marginBottom: 20
    },
    title: {
        fontSize: 24,
        fontWeight: '600',
        color: 'rgb(33 27 4)',
    },
    item: {
        backgroundColor: 'rgb(255 249 238)',
        padding: 5,
        marginVertical: 3,
        marginHorizontal: 4,
        fontSize: 18,
        color: 'rgb(33 27 4)',
      },
    text: {
        color: 'rgb(255 249 238)',
        fontSize: 18,
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderRadius: 25,
        elevation: 3,
        marginBottom: 100,
        backgroundColor: 'rgb(110 93 14)',
    },
});

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
];