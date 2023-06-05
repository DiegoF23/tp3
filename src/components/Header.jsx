import NavBar from './navBar/NavBar';
const Header = ({navArrayLinks,User}) => {
  return (
      <NavBar navArrayLinks={navArrayLinks} User={User}/>
  )
}
export default Header