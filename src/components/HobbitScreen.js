import React from 'react'
import { MovieList } from './MovieList'

export const HobbitScreen = () => {
    return (
        <div>
            <h1>The Hobbit</h1>
            <hr/>
            <MovieList category="hobbit"/>
        </div>
    )
}
