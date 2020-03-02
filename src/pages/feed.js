import React, { useContext } from 'react'
import FeedCard from '../FeedCard'
import FeedForm from '../FeedForm'
import LoadFeed from '../LoadFeed'
import AppContext from '../AppContext'
import CardLayout from '../CardLayout'

function Feed() {
    const[globalState,setGlobalState]=useContext(AppContext)
  
        return (
            <div>
            <FeedForm/>

            
            <LoadFeed/>
                

            </div>
        )
        }
        export default Feed