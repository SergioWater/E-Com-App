import './Modal.css'
function Modal({title, asd123, confirmModal}){

    return(
        <div>
    <div className="modal">
      <p className="modal__title">{title}</p>
      <div className="modal__buttons">
        <button className="btn btn__cancel" onClick={asd123}>Cancel</button>
        <button className="btn" onClick={confirmModal}>Confirm</button>
      </div>
    </div>
    <div className="backdrop" />
     </div>
    )
}
export default Modal;