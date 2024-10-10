import React from 'react'
import '../App.less'

export default function MainContent() {
  return(
    <main className="main-content">
      <div className='form'>
        <label className='form--label'>
          Top Text
        <input type='text' id='topText' placeholder='Top text' className='form--input' />
        </label>
        <label className='form--label'>
          Bottom Text
        <input type='text' id='bottomText' placeholder='Bottom text' className='form--input' />
        </label>
      </div>
      <button className='form--button'>Get a new meme image  🖼</button>
    </main>
  )
}