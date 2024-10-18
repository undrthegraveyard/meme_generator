import '../App.less'
import React, { useState, useEffect } from 'react'

export default function MainContent() {
  const [meme, setMeme] = useState({
    topText: '',
    bottomText: '',
    randomImage: 'https://i.imgflip.com/1ur9b0.jpg'
  })
  
  const [allMemeImages, setAllMemeImages] = useState([])
  
  useEffect(()=> {
    fetch('https://api.imgflip.com/get_memes')
      .then(res=>res.json())
      .then(data=>setAllMemeImages(data.data.memes))
  }, [])

  function getMemeImage(){
    const randomNumber = Math.floor(Math.random() * allMemeImages.length)
    const url = allMemeImages[randomNumber].url
    setMeme(prevMeme => ({
      ...prevMeme, 
      randomImage: url
    }))
  }
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
            placeholder='Bottom Text!' 
            className='form--input'
            value={meme.bottomText}
            onChange={(e) => setMeme(prevMeme => ({...prevMeme, bottomText: e.target.value}))}
          />
        </label>
      </div>
      <button className='form--button' onClick={getMemeImage}>Get a new meme image 🖼</button>
      <div className='meme'>
        <img src={meme.randomImage} alt='A meme image' className='meme-image' />
        <h2 className='meme-text top'>{meme.topText}</h2>
        <h2 className='meme-text bottom'>{meme.bottomText}</h2>
      </div>
    </main>
  )
}
