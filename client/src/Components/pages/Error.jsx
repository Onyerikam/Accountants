import { Button } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

export default function Error() {
  return (
    <div>
      <img src="https://i.imgur.com/qIufhof.png" alt="404"/>
            <div id="info">
              <h3>This page could not be found! <Button><Link to="/">Go Back Home</Link></Button></h3> 
            </div>
    </div>
  )
}
