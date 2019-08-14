import React, { Component } from 'react'
import { Container, Content, List, ListItem, Text, Spinner, Fab, Icon } from 'native-base'
import ProviderTodos from '../providers/todos'

class Todos extends Component {

    componentDidMount(){
        this.props.allTodos()
    }

    render(){
        return (
            <Container>
                <Content>
                    
                    { this.props.isLoading? (
                        <Spinner/>
                    ): (
                        <List>
                            {this.props.todos.map((todo, index)=> (
                                <ListItem key={index}>
                                    <Text>{todo.title}</Text>
                                </ListItem>
                            ))}  
                        </List>                  
                    ) }                        
                    
                </Content>
                <Fab
                    style={{ backgroundColor: '#5067FF' }}
                    position="bottomRight"
                    onPress={() => this.props.navigation.navigate('TodoAdd')}
                >
                    <Icon name="add" />                
                </Fab>
            </Container>
        )
    }
}

export default ProviderTodos(Todos)