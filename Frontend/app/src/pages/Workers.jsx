import React from 'react'
import WorkerCard from '../components/WorkerCard'

const Workers = ({data}) => {
    console.log(data)
  return (

    <div className='worker-container'>



     {data?.map((index) =>{
        return <WorkerCard

        image= {index.image}
        username = {index.username}
        about = {index.about}
        skill = {index.skill}
        rate = {index.rate}
        rating = {index.rating}
        location= {index.location}
        />
     })}
        </div>

  )
}

export default Workers