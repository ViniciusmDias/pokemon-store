import React from 'react'
import { Link } from 'react-router-dom'
import { Menu } from './styles'

const SubMenu:React.FC = () => {
  return (
    <Menu>
      <Link to="/comprar">sobre</Link>
      <Link to="/comprar">comprar</Link>
      <Link to="/comprar">contato</Link>
    </Menu>
  )
}

export default SubMenu
