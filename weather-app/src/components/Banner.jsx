import React from 'react'
import {Card, CardMedia, Typography} from '@mui/material'

function Banner() {
  return (
    <Card className="w-full h-2/5 rounded-full relative">
      <CardMedia
        component="img"
        // height="100%"
        image="\src\assets\night.jpg"
        alt="Paella dish"
        className='h-full z-'
      />
      <div className="absolute flex w-full h-full top-8 left-5 text-white ">
            <div className='w-1/2'>
                <img src="" alt="image" className='size-16'/>
                <Typography variant='h1'>13&deg;C</Typography>
                <Typography variant='h3'>Location</Typography>
            </div>
            <div className="w-1/2 bg-blue-400">
                
            </div>
      </div>
    </Card>
  );
}

export default Banner