import React from 'react'
import User from './User'
import UserClass from './UserClass'

const About = () => {
  return (
    <div className='about'>
      <h1>About</h1>
      <User name="Saurav Pandey"/>
      <UserClass name="Saurav" location="UP"/>
    </div>
  )
}

export default About

