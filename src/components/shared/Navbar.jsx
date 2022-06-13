import {Link} from 'react-router-dom'

const Navbar = () => {
  const handleClick = () => {
    window.open(
      `https://login.microsoftonline.com/common/oauth2/v2.0/logout?post_logout_redirect_uri=https://www.halommr.com/`,
      '_blank'
    )
  }

  // const blogLink = () => {
  // window.location.assign(process.env.REACT_APP_AUTH_URL)
  // }
  return (
    <div className='w-full h-[75px] bg-[#202125] text-white fixed z-10 '>
      <div className='container h-full w-full m-auto flex justify-between items-center px-3 sm:px-0'>
        <h1 className='text-[#5e61fa] text-2xl font-bold tracking-wide'>
          HALO<span className='text-[white]'> MMR</span>
        </h1>
        <div>
          <Link to='/' className='px-2' onClick={handleClick}>
            Logout
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar
