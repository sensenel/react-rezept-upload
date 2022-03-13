import PropTypes from 'prop-types'
import Button from './Button'

const Header = ( { title } ) => {

  const onClick= () => {
    console.log('click hier');
  }

    return (
        <header className='container'>
			<h1>{ title }</h1>
			<Button onClick={onClick} color='green' text='Hinzufügen'/>
        </header>
    )
}

//Header Title über defaultProps
Header.defaultProps = {
  title: 'Rezepte App',
}

Header.propTypes = {
  title: PropTypes.string,
}


export default Header;