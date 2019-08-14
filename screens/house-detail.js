import React, { Component } from 'react'
import { Container, Content, Text } from 'native-base'

export default class HouseDetail extends Component {

    render() {
        // const title = this.props.navigation.state.params.house.title
        // const price = this.props.navigation.state.params.house.price
        // const description = this.props.navigation.state.params.house.description
        const { title, price, description } = this.props.navigation.state.params.house

        return (
            <Container>
                <Content>
                    <Text style={{fontSize: 50}}>
                        {title}
                    </Text>
                    <Text style={{fontSize: 30, color: 'red'}}>
                        {price}
                    </Text>
                    <Text style={{fontSize: 20, color: 'gray'}}>
                        {description}
                    </Text>
                </Content>
            </Container>
        )
    }

}