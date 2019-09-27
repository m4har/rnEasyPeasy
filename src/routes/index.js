import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { fromRight } from 'react-navigation-transitions'
import { useScreens } from 'react-native-screens'
import { Name, From, Gender, Age, Home } from '../screens'

// useScreens()

const AppNavigator = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      header: null
    }
  },
  Name: {
    screen: Name,
    navigationOptions: {
      header: null
    }
  },
  FromHome: {
    screen: From,
    navigationOptions: {
      header: null
    }
  },
  Gender: {
    screen: Gender,
    navigationOptions: {
      header: null
    }
  },
  Age: {
    screen: Age,
    navigationOptions: {
      header: null
    }
  }
}, {
  transitionConfig: () => fromRight(400)
})

export default createAppContainer(AppNavigator)
