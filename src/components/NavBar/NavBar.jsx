import { Link } from 'react-router-dom'

const NavBar = ({ user, handleLogout }) => {
  return (
    <div className='text-xs md:text-md'>
      {user ?
        <nav className='bg-emerald-700'>
          <ul className='flex p-2'>
            <li className='flex-1 ml-5'><Link to="/profiles">Profiles</Link></li>
            <li className='flex-1'><Link to="" onClick={handleLogout}>LOG OUT</Link></li>
            <li className='flex-1'><Link to="/changePassword">Change Password</Link></li>
            <li className='mr-5'>{user.name}</li>
          </ul>
        </nav>
      :
        <nav className='bg-emerald-700'>
          <ul className='flex p-2'>
            <li className='flex-1 ml-5'><Link to="/login">Log In</Link></li>
            <li className='mr-5'><Link to="/signup">Sign Up</Link></li>
          </ul>
        </nav>
      }
    </div>
  )
}

export default NavBar
