import React from 'react'
import { Container, Content, Text } from 'native-base'

export default (props) => {
    const { id, title } = props.navigation.state.params.movie

    return (
        <Container>
            <Content>
                <Text style={{fontSize: 30, color: 'red'}}>
                    {id}
                </Text>
                <Text style={{fontSize: 50}}>
                    {title}
                </Text>
            </Content>
        </Container>
    )
}