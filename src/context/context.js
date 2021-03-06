import { useState, useEffect, createContext, useContext } from 'react'
import { mockRepos } from './mockRepos'
import { mockUser } from './mockUser'
import { mockFollowers } from './mockFollowers'

const githubAPI = 'https://api.github.com/users/'

const GithubContext = createContext()

const GithubProvider = ({ children }) => {
    const [githubUser, setGithubUser] = useState(mockUser)
    const [githubRepos, setGithubRepos] = useState(mockRepos)
    const [githubFollowers, setGithubFollowers] = useState(mockFollowers)
    return (
        <GithubContext.Provider
            value={{
                githubUser,
                githubRepos,
                githubFollowers,
            }}
        >
            {children}
        </GithubContext.Provider>
    )
}

export const useGithubContext = () => {
    return useContext(GithubContext)
}

export { GithubProvider, GithubContext }
