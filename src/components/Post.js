import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPost } from '../slice/Slice'

function Post() {
    const dispatch = useDispatch()
    const state = useSelector(state => state.post)
    console.log(state)
    useEffect(() => {
        dispatch(fetchPost())
    }, [dispatch])
    return (
        <>
          {state.map((state) => (
              <div key={state.id}>{state.title}</div>
          ))}  
        </>
    )
}

export default Post
