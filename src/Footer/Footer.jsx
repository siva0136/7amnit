import React from 'react'
import style from './Footer.module.css'

const Footer = () => {
  return (
    <div className={`bg-info bottom-0 position-fixed py-2 text-center w-100  ${style.footer}`}>
      &copy; rights belong R
    </div>
  )
}

export default Footer
