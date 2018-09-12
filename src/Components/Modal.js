import React from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'

class ModalExample extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			modal: this.props.isOpen
		}

	}

	render() {
		return (
			<div>
				<Modal isOpen={this.props.isOpen} toggle={this.props.toggle} className={this.props.className}>
					<ModalHeader toggle={this.toggle}>{this.props.message}</ModalHeader>
					<ModalBody>
						{this.props.bodyMessage}
					</ModalBody>
					<ModalFooter>
						<Button color="primary" onClick={this.props.toggle}>OK</Button>
					</ModalFooter>
				</Modal>
			</div>
		)
	}
}

export default ModalExample