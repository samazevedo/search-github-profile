import { useState, useEffect, createContext, useContext } from 'react'

const githubAPI = 'https://api.github.com/users/'

const GithubContext = createContext()

const GithubProvider = ({ children }) => {
    return (
        <GithubContext.Provider value='hello it works'>
            {children}
        </GithubContext.Provider>
    )
}

export const useGithubContext = () => {
    return useContext(GithubContext)
}

export { GithubProvider, GithubContext }
