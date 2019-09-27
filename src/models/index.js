import { action } from 'easy-peasy'

const userModel = {
  data: [],
  items: {
    name: '',
    from: '',
    gender: '',
    age: ''
  },
  changeName: action((state, payload) => state.items.name = payload),
  changeFrom: action((state, payload) => state.items.from = payload),
  changeGender: action((state, payload) => state.items.gender = payload),
  newData: action((state, payload) => state.data = [...state.data, payload])
}

const dataModel = {
  user: userModel
}

export default dataModel
