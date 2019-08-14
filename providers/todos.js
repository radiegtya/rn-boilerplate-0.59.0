import { createProvider } from 'reactn'

const INITIAL_STATE = {
    isLoading: false,
    todos: []
}

const Provider = createProvider(INITIAL_STATE)

export default Provider.withGlobal(

    global => ({
        isLoading: global.isLoading,
        todos: global.todos,      
    }),
  
    setGlobal => ({

      allTodos: () => {

        setGlobal({isLoading: true})

        const todos = [
            {
                title: 'Todo 1'
            },
            {
                title: 'Todo 2'
            }
        ]
        
        setTimeout(()=>{
            setGlobal(global => ({
                todos,
                isLoading: false
            }))
        }, 2000)        

      }

    })

)