import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'
import Button from '@material-ui/core/Button';
import styled from 'styled-components'
const HeroContainer = styled.div`
    background: linear-gradient( to right, rgba(0,0,0,0.7), rgba(0,0,0,0.1)),url('/images/egypt2.jpg');
    height: 100vh;
    background-position: center;
    background-size: cover;
    width:100vw;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    overflow:hidden;
`;


export default function App() {
  const [talk, settalk] = useState('');
  useEffect(() => { 
    const idd = setInterval (fetchData(),3000)
    return () => {
      clearInterval(idd)
    }
  },[talk])

  const fetchData = () => {
    axios.get('https://api.adviceslip.com/advice')
      .then(res => settalk(prev => prev = res.data.slip.advice))
      .catch(err => console.log(err))
  }
    return (
      <HeroContainer>
      <div className='advice'>
        <div className="advice2">
          <h3 id='h3'>{talk}</h3>
        </div>
        <Button onClick={fetchData} variant="contained" color="secondary" >
          Get Advice!
        </Button>
      </div>
      <a href="https://github.com/Alireza9651501005" target='_blank' rel="noreferrer">
        <i class='fab fa-github'></i>
      </a>
      </HeroContainer>
    )
}
