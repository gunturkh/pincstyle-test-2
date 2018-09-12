import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap'
import './App.css'
import Login from './Components/Login'
import Navbar from './Components/Navbar'
import Modal from './Components/Modal'

class App extends Component {
	constructor(props){
		super(props)
		this.state={
			modal: false,
			isLogin: false
		}
		this.loginValidation=this.loginValidation.bind(this)
	}

	toggle() {
		this.setState({
			modal: !this.state.modal
		})
	}

	loginValidation=(item)=>{
		this.setState({
			modal:true,
			isLogin: item
		})
		console.log('Validation : ', item)
	}

	render() {
		let ModalMessage
		
		!this.state.modal
			? ModalMessage = <div></div>
			: this.state.isLogin
			? ModalMessage = <Modal isOpen={this.state.modal} toggle={this.toggle.bind(this)} message="Login Success" bodyMessage="Succes"/>
			: ModalMessage = <Modal isOpen={this.state.modal} toggle={this.toggle.bind(this)} message="Login Failed" bodyMessage="You Must Fill Every Fields"/>
		return (
			<Container fluid>
				{ModalMessage}
				<Row>
					<Col md={{ size: 8, offset: 2 }}>
						<Row>
							<Col>
								<Navbar/>
							</Col>
						</Row>
						<Row>
								<Login validation={this.loginValidation}/>
						</Row>
					</Col>
				</Row>
			</Container>
		)
	}
}

export default App
