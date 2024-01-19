import React from 'react'
import { Link } from 'react-router-dom'

function PageNotFound() {
  return (
    <>
    <h1>404- sayfa bulunamadı</h1>
    <Link to= '/'className='btn-btn-info'>ANA SAYFATA GİTMEK İÇN TIKLAYINIZ</Link>

    </>
  )
}

export default PageNotFound