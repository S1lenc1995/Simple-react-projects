import {useRef, useState, useEffect} from "react";
import {Link} from 'react-router-dom';
import './Modal.scss';
import PropTypes from 'prop-types'; 
import {ReactComponent as CloseModal} from './icons/modal-close.svg';
// class Modal extends Component {
// 	constructor() {
// 		super();
// 		this.wrapperRef = createRef(); // https://ru.reactjs.org/docs/refs-and-the-dom.html
// 		// createRef это что то типо id элемента индификатор уникальный
// 		this.handleClickOutside = this.handleClickOutside.bind(this);
// 	}

// 	componentDidMount() {
// 		document.addEventListener("mousedown", this.handleClickOutside); // когда монтируем то добавляем ивент
// 	}

// 	componentWillUnmount() {
// 		document.removeEventListener("mousedown", this.handleClickOutside); // когда наша модалка пропадает то очищаем ивет, иначе будет накапливаться в памяти пустые ивенты, будет утечка памяти. и приложение может подтормаживать
// 	}

// 	handleClickOutside(event) {
// 		if (this.wrapperRef && !this.wrapperRef.current.contains(event.target)) { // проверям где произошел клик если в не блока то выполняем функцию
// 			this.props.closeModal()
// 		}
// 	}
// 	render() {
// 		const {handlerModal, closeModal, title} = this.props;

		// return (
		// 	<div className="modal-wrapper">
		// 		<div className="modal" ref={this.wrapperRef}>
		// 			<div className="modal-box">
		// 				<button type="button" className="modal-close" onClick={closeModal}>
		// 					<svg viewBox="0 0 16 16" width="16" height="16">
		// 						<path
		// 							d="m9.3 8 6.1-6.1c.4-.4.4-.9 0-1.3s-.9-.4-1.3 0L8 6.7 1.9.6C1.6.3 1 .3.6.6c-.3.4-.3 1 0 1.3L6.7 8 .6 14.1c-.4.4-.3.9 0 1.3l.1.1c.4.3.9.2 1.2-.1L8 9.3l6.1 6.1c.4.4.9.4 1.3 0s.4-.9 0-1.3L9.3 8z"/>
		// 					</svg>
		// 				</button>
		// 				<div className="modal-header">
		// 					<h4>Modal</h4>
		// 				</div>
		// 				<div className="modal-content">
		// 					Улюблене КІНО => {title}
		// 				</div>
		// 				<div className="modal-footer">
		// 					<div className="button-wrapper">
		// 						<button className="btn" type="button" onClick={handlerModal}>OK</button>
		// 						<button className="btn" type="button" onClick={closeModal}>Cancel</button>
		// 					</div>
		// 				</div>
		// 			</div>
		// 		</div>
		// 	</div>
		// )
// 	}
// }

const Modal = ({handlerModal, closeModal, title, handleInfoModal, url}) => {

	const wrapperRef = useRef();

	useEffect(() =>{
		document.addEventListener("mousedown", handleClickOutside);

		return(() => {
			document.removeEventListener("mousedown", handleClickOutside);
		})
	})
	
	const handleClickOutside = (event) => {
		if (wrapperRef && ! wrapperRef.current.contains(event.target)) { 
			closeModal();
		}
	}



	return (
		<div className="modal-wrapper">
			<div className="modal" ref={wrapperRef}>
				<div className="modal-box">
					<button type="button" className="modal-close" onClick={closeModal}>
						<CloseModal />
					</button>
					<div className="modal-header">
						<h4>Modal</h4>
					</div>
					<div className="modal-content">
						Улюблене КІНО = {title}
					</div>
					<div className="modal-footer">
						<div className="button-wrapper">
							<button className="btn" type="button" onClick={handlerModal}>Favorite</button>
							<Link to={url} className="btn" onClick={closeModal}>Info</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	)

}
Modal.propTypes = {
    temperature: PropTypes.number,
    closeModal: PropTypes.func,
	title: PropTypes.string,
}

export default Modal;