import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {BsTwitter} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
      <a href='https://www.linkedin.com/in/koshika-dulanjana-7a3aba216/' target='_blank'><BsLinkedin /></a>
      <a href='https://github.com/KoshikaDul1999' target='_blank'><FaGithub /></a>
      <a href='https://twitter.com/login' target='_blank'><BsTwitter /></a>
    </div>
  )
}

export default HeaderSocials
