import React, { useState } from 'react'
import { View, Text, Button, FlatList, TouchableOpacity } from 'react-native'
import { useStoreActions } from 'easy-peasy'

const gender = ['Pria', 'Wanita']

const Wadon = ({ navigation }) => {
  const [select, setSelect] = useState('')
  const onChangeGender = useStoreActions(actions => actions.user.changeGender)
  const renderItem = ({ item }) => (
    <View style={{ flex: 1, alignItems: 'center' }}>
      <TouchableOpacity onPress={() => setSelect(item)} style={{ backgroundColor: select === item ? '#555555' : '#fff', borderRadius: 20, height: 50, width: 100, justifyContent: 'center', alignItems: 'center' }}>
        <Text>{item}</Text>
      </TouchableOpacity>
    </View>
  )
  const actionButton = () => {
    onChangeGender(select)
    return navigation.navigate('Age')
  }
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#9b59b6', padding: 10 }}>
      <Text style={{ fontSize: 25, fontWeight: 'bold' }}>Gender kamu ?</Text>
      <View style={{ height: 60, width: '100%' }}>
        <FlatList
          data={gender}
          extraData={select}
          columnWrapperStyle={{ justifyContent: 'space-between' }}
          style={{ width: '100%' }}
          keyExtractor={(item, index) => index.toLocaleString()}
          renderItem={renderItem}
          numColumns={2}
        />
      </View>
      <Button title='Lanjut' onPress={actionButton} />
    </View>
  )
}

export default Wadon
