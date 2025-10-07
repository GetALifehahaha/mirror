import React, {useState, useEffect} from 'react'
import {Link, useParams, useLocation} from 'react-router-dom'

const Breadcrumbs = ({initialBreadcrumbs}) => {

  const {id} = useParams();

  const url = useLocation();
  const hasSpecs = url.pathname.includes('/specs') || null

  const breadcrumbs = [...initialBreadcrumbs, ...(hasSpecs ? [{ name: "Specs", path: `/products/${id}/specs` }] : [])];

  const listBreadcrumbs = breadcrumbs.map((crumb, index) => 
    <Link key={index} to={crumb.path} className='text-sm text-text/50 font-medium cursor-pointer hover:text-text duration-100 ease-out'>
      {crumb.name}
      {index < breadcrumbs.length - 1 && <span className='mx-2'>{'>'}</span>}
    </Link>)

  return (
    <div>
      {listBreadcrumbs}
    </div>
  )
}

export default Breadcrumbs
