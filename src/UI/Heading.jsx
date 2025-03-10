import React from 'react'
import classes from './Heading.module.scss'

const Heading = (label) => {
  return (
    <h1 className={classes.header}>{label}</h1>
  )
}

export default Heading