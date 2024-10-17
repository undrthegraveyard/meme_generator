import '../App.less'
import React, { useState } from 'react'

export default function MainContent() {
  const [meme, setMeme] = useState({
    topText: '',
    bottomText: '',
    randomImage: "https://i.imgflip.com/30b1gx.jpg"
  })

  return (
    <main className="main-content">
      <div className='form'>
        <label className='form--label'>
          Top Text
          <input 
            type='text' 
            placeholder='Top text' 
            className='form--input'
            value={meme.topText}
            onChange={(e) => setMeme(prevMeme => ({...prevMeme, topText: e.target.value}))}
          />
        </label>
        <label className='form--label'>
          Bottom Text
          <input 
            type='text' 
            placeholder='Bottom text!' 
            className='form--input'
            value={meme.bottomText}
            onChange={(e) => setMeme(prevMeme => ({...prevMeme, bottomText: e.target.value}))}
          />
        </label>
      </div>
      <button className='form--button'>Get a new meme image 🖼</button>
      <div className='meme'>
        <img src={meme.randomImage} alt='A meme image' className='meme-image' />
        <h2 className='meme-text top'>{meme.topText}</h2>
        <h2 className='meme-text bottom'>{meme.bottomText}</h2>
      </div>
    </main>
  )
}
