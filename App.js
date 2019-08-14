import { createStackNavigator, createAppContainer } from "react-navigation"

import Houses from './screens/houses'
import HouseDetail from './screens/house-detail'
// import AddHouse from './screens/add-house'

const AppNavigator = createStackNavigator({
  Houses: {
    screen: Houses,
    navigationOptions: {
      title: 'Kos Normal',
    },
  },
  HouseDetail: {
    screen: HouseDetail,
    navigationOptions: {
      title: 'Detail Kos Normal',
    },
  },
  // AddHouse: {
  //   screen: AddHouse,
  //   navigationOptions: {
  //     title: 'Add Kos Normal',
  //   },
  // }
})

export default createAppContainer(AppNavigator)