import React, { useState } from 'react'
import { Container, Content, Form, Item, Input, Label, Text, Button } from 'native-base'

import MoviesProvider from '../providers/movies'

export default (props)=> {
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
        <Container>
            <Content>
                <Form>
                    <Item fixedLabel>
                        <Label>Title</Label>
                        <Input 
                            onChangeText={title => setMovie({title})}
                            value={movie.title}
                        />
                    </Item>
                    <Button onPress={()=> handleSubmit()}>
                        <Text>Submit</Text>
                    </Button>
                </Form>
            </Content>
        </Container>
    )
}


