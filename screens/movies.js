import React, { useEffect } from 'react'
import { Container, Content, List, ListItem, Text, Spinner, Fab, Icon } from 'native-base'

import MoviesProvider from '../providers/movies'

export default (props)=>{

  const [isLoading, setIsLoading] = MoviesProvider.useGlobal('isLoading')
  const [movies, setMovies] = MoviesProvider.useGlobal('movies')

  useEffect(() => {    
    
    //simulating loading
    setIsLoading(true)

    setTimeout(()=> {
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
      setIsLoading(false)
    }, 2000)
    
  }, [])

  return (
    <Container>
      <Content>
        {isLoading? (
          <Spinner/>
        ): (
          <List>
            {movies.map(movie=>(              
              <ListItem 
                key={movie.id} 
                onPress={()=>{
                  props.navigation.navigate('MovieDetail', {
                    movie
                  })
                }}
              > 
                <Text style={{fontSize: 50}}>
                  {movie.title} 
                </Text>
              </ListItem>
            ))}             
          </List> 
        )}     
      </Content>
      <Fab
        style={{ backgroundColor: '#5067FF' }}
        position="bottomRight"
        onPress={() => props.navigation.navigate('MovieAdd')}
      >
        <Icon name="add" />        
      </Fab>
    </Container>      
  )
}