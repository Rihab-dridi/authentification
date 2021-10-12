import React from 'react'
import { useSelector } from 'react-redux'

export default function Dashboard() {
 
const user = useSelector(state => state.auth.user)

    return (
        <div>
           <h1> {user?.name}  </h1>
            <img src='/images/profile.png' alt='pic' />
        </div>
    )
}
