import React, { Component } from 'react'
import { Container, Content, List, ListItem, Text } from 'native-base'


export default class Houses extends Component {


  state = {
    houses: [
      {
        id: 1,
        title: "Kos Murah",
        price: 2000,
        description: "Untuk yg tiap hari makan warteg"
      },
      {
        id: 2,
        title: "Kos Sultan",
        price: 100000000000,
        description: "Untuk yg ...."
      },
    ]
  }

  render(){
    return (
      <Container>
        <Content>
          <List>
            {this.state.houses.map(house=>(              
              <ListItem 
                key={house.id} 
                onPress={()=>{
                  this.props.navigation.navigate('HouseDetail', {
                    house: house
                  })
                }}
              > 
                <Text style={{fontSize: 50}}>
                  {house.title} - {house.price}
                </Text>
              </ListItem>
            ))}             
          </List>
        </Content>
      </Container>      
    )
  }
}