import './Form.css';
import logo from '../../images/logo.svg';
import {Link} from 'react-router-dom';


function Form(props) {

  const {
    header,
    submit,
    question,
    link,
    road,
    children,
  } = props;


  return (
    <section className="form">
      <div className="form__container">
        <img src={logo} alt="Лого" className="form__logo"/>
        <h2 className="form__header">{header}</h2>
        <form className="form__form">
          <div className="form__items"> {children} </div>

          <button type="submit" className="form__button">{submit}</button>
        </form>
        <p className="form__text">
          {question}
          <Link to={road} className="form__link">{link}</Link>
        </p>
      </div>
    </section>
  );
}

export default Form;