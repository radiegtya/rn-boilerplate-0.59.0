# React Native Boilerplate with React Hook

This React Native boilerplate is using React Native version 0.59.0 because I think for now this is the most stable release. 

This boilerplate also using React Hook and Reactn for global state management. I don't use React Context, because your code will get ugly, when u have multiple Providers! 

I want to make this as simple as possible, with single HOC on root, or Not a single one! But... You can still use the power of Global State Management like Redux, with simplicity in mind!

## Installation

Make sure that You already had NodeJs installed on Your PC, then:

```
$ git clone https://github.com/radiegtya/rn-boilerplate-0.59.0

$ cd rn-boilerplate-0.59.0

$ npm install
```

## Whats Inside?

You will have these plugins worked and installed:

- React Navigation: Navigating Between Screen
- Reactn: Global State Management
- NativeBase: UI Framework
- Formik: Form Management
- Yup: Form Validation and Schema

Simply remove them if you don't need it, I just use them because they always used for my production environment for YEARS. 

## Included Example

I did include simple Movie app, that hopefully able to make U understand the whole idea of this boilerplate.

**App.js**

react navigation initialization with all the screens component imported here

```javascript
...
export default createAppContainer(AppNavigator)

```

**/providers/movies.js**

reactn provider for Movies, that simply consist of movies initial state, then create provider to be used in all components!

```javascript
import { createProvider } from 'reactn'

const INITIAL_STATE = {
    isLoading: false,
    movies: []
}

export default createProvider(INITIAL_STATE)
```

**/screens/movies.js**

List of movies, that the data are populated from the MoviesProvider. UseEffect are used for set the value of Movies. In real world, You can use FETCH API like axios, inside those useEffect.

```javascript
...
import MoviesProvider from '../providers/movies'

...
const [movies, setMovies] = MoviesProvider.useGlobal('movies')

useEffect(() => { 
    ...
    setMovies([    
        {
          id: 1,
          title: "Boboiboy Movie 2"
        },
        {
          id: 2,
          title: "Weathering"
        },
    ]) 
    ...
}, [])  

return (
    ...
    {movies.map(movie=>(              
        ...
            {movie.title} 
        ...
    ))}   
    ...
)

```

**/screens/movie-add.js**

Simulating add movie, and you will pop back to list movies, with new data added! The global state management works with super simple approach!

```javascript
import React, { useState } from 'react'
...
import MoviesProvider from '../providers/movies'

...
const [movies, setMovies] = MoviesProvider.useGlobal('movies')
const [movie, setMovie] = useState({})

function handleSubmit() {
    const lastMovie = movies[movies.length -1]
    setMovies([
        ...movies,
        {
            id: lastMovie.id + 1,
            title: movie.title
        }
    ])
    
    props.navigation.goBack()        
}

return (
    ...
        <Input 
            onChangeText={title => setMovie({title})}
            value={movie.title}
        />
        
        <Button onPress={()=> handleSubmit()}>
            <Text>Submit</Text>
        </Button>
    ...
)
```