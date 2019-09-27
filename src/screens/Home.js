import React from 'react'
import { View, Text, Button, ScrollView } from 'react-native'
import { useStoreState } from 'easy-peasy'

const Home = ({ navigation }) => {
  const dataUser = useStoreState(state => state.user.data)
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home</Text>
      <Button title='Data Baru' onPress={() => navigation.navigate('Name')} />
      <ScrollView contentContainerStyle={{ width: '100%' }}>
        {dataUser.map((item, index) => (
          <View key={index} style={{ borderWidth: 1, width: '50%', padding: 20, margin: 10 }}>
            <Text>{`Nama : ${item.name}`}</Text>
            <Text>{`Umur : ${item.age}`}</Text>
            <Text>{`Gender : ${item.gender}`}</Text>
            <Text>{`Dari : ${item.from}`}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  )
}

export default Home
