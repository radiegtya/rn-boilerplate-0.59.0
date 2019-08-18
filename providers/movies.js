import { createProvider } from 'reactn'

const INITIAL_STATE = {
    isLoading: false,
    movies: []
}

export default createProvider(INITIAL_STATE)
