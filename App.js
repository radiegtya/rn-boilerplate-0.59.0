import React from 'react'
import { createStackNavigator, createAppContainer } from "react-navigation"

import Movies from './screens/movies'
import MovieAdd from './screens/movie-add'
import MovieDetail from './screens/movie-detail'

const AppNavigator = createStackNavigator({
  Movies: {
    screen: Movies,
    navigationOptions: {
      title: 'Movies',
    },
  },
  MovieAdd: {
    screen: MovieAdd,
    navigationOptions: {
      title: 'Add Movie',
    },
  },
  MovieDetail: {
    screen: MovieDetail,
    navigationOptions: {
      title: 'Movie Detail',
    },
  },  
})

export default createAppContainer(AppNavigator)