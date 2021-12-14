import './Auth.css';
import logo from '../../images/logo.svg';
import {Link} from 'react-router-dom';


function Auth(props) {

  const {
    header,
    submit,
    question,
    link,
    road,
    children,
  } = props;


  return (
    <section className="auth">
      <div className="auth__container">
        <img src={logo} alt="Лого" className="auth__logo"/>
        <h2 className="auth__header">{header}</h2>
        <form className="auth__form">
          <div className="auth__items"> {children} </div>

          <button type="submit" className="auth__button">{submit}</button>
        </form>
        <p className="auth__text">
          {question}
          <Link to={road} className="auth__link">{link}</Link>
        </p>
      </div>
    </section>
  );
}

export default Auth;