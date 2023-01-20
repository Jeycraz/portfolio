
import ReactDOM from 'react-dom'
import { NavLink } from 'react-router-dom'
import './Modal.css'

function Modal(props) {
  // if(!props.open)return nulls
  return ReactDOM.createPortal(
    <div className={props.open ? 'overlay-wrapper active' : 'overlay-wrapper'}>
      <div className={props.open ? 'modal-wrapper active' : 'modal-wrapper'}>
        <button className='modal-close-btn' onClick={props.onClose}>X</button>
        <div className='modal-words'>
          <div className='survey-heading'>

          </div>
          <div className='survey-description-wrapper'>
            <h3 className='survey-title'>May I bother you for 1 minute?</h3>
            <p className='survey-description'>First of all, i'm grateful you made all the way to my page.As i'm currently doing my FYP Thesis, i need some responses for my survey in regards to marketing strategies that cater for youngsters.<br /><br />
              If you have a little bit of time, you can click on the button below to get redirected to my Google Forms. Thank You!</p>
            <NavLink to={'./portfolio'} onClick={props.onClose}>Alright, i'll do the survey.</NavLink>
          </div>
        </div>
      </div>
    </div>,
    document.getElementById('portal')
  )
}

export default Modal