import './Popup.css';

const Popup = () => {
  return (
    <section className="popup popup_opened">

      <div className="popup__container">
        <p className="popup__message">
          сообщеньки
        </p>
        <button className="popup__close" type="button"/>

      </div>
    </section>
  );
}

export default Popup;