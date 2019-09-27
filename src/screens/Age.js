import React, { useState } from 'react'
import { View, Text, Button, TextInput } from 'react-native'
import { useStoreActions, useStoreState } from 'easy-peasy'

const Age = ({ navigation }) => {
  const [age, setAge] = useState('')
  const data = useStoreState(state => state.user.items)
  const { from, gender, name } = data
  const onNewData = useStoreActions(actions => actions.user.newData)
  const actionButton = () => {
    onNewData({ age, from, gender, name })
    return navigation.navigate('Home')
  }
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#1abc9c', padding: 10 }}>
      <Text style={{ fontSize: 25, fontWeight: 'bold' }}>Berapa umur kamu ?</Text>
      <TextInput onChangeText={(text) => setAge(text)} placeholder='5 Tahun' keyboardType='number-pad' style={{ width: '100%', borderWidth: 1, height: 50, textAlign: 'center', borderRadius: 10, backgroundColor: '#fff', margin: 20, fontWeight: 'bold', fontSize: 15 }} />
      <Button title='INPUT' onPress={actionButton} />
    </View>
  )
}

export default Age
