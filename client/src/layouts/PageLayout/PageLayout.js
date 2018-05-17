import React from 'react'
import PropTypes from 'prop-types'
import logoUrl from '../../img/anyvision.png'
import './PageLayout.scss'

export const PageLayout = ({ children }) => (
  <div className='container text-center'>
    <img className='page-layout__container-image' src={logoUrl} alt='Mountain View' />
    <div className='page-layout__viewport'>
      {children}
    </div>
  </div>
)
PageLayout.propTypes = {
  children: PropTypes.node,
}

export default PageLayout
