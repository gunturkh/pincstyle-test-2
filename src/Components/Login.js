import React from 'react'
import axios from 'axios'
import { Button, Form, FormGroup, Label, Input, Col } from 'reactstrap'

let request = axios.create({
	baseURL: 'https://www.reqres.in/',
	timeout: 10000,
	headers: {'Authorization': ''}
})

class Login extends React.Component {
	constructor(props){
		super(props)
		this.state={
			email: '',
            password: '',
            isLogin: false
        }
        this.isLoginValidation=this.isLoginValidation.bind(this)

    }
    
    isLoginValidation=(item)=>{
        console.log("Validation from Login : ", item)
        this.props.validation(item)
    }
    
	handleSubmit=event=>{
		event.preventDefault()
		console.log('Submit: ', this.state)
        const payload = {
            email: this.state.email,
            password: this.state.password
        }
		request
			.post('/api/login',payload)
			.then(response => {
                this.setState({isLogin: true})
                this.isLoginValidation(this.state.isLogin)
                console.log('Response: ', response)
                console.log('isLogin: ', this.state.isLogin)
                localStorage.setItem('token',response.data.token)
            })
			.catch(error=>{
				this.setState({isLogin: false})
				this.isLoginValidation(this.state.isLogin)
				console.log(error)
            
			})
	}

	handleChange=event=>{
        this.setState({ 
			[event.target.name]: event.target.value 
		})
        console.log("State: ", this.state);
        
	}
	render() {
		return (
			<Col>
			<Form inline onSubmit={this.handleSubmit.bind(this)}>
			<Col md="auto">
				<FormGroup>
					<Label for="exampleEmail" className="mr-sm-2">Email</Label>
					<Input onChange={this.handleChange} type="email" name="email" id="exampleEmail" placeholder="email@email.com" />
				</FormGroup>
			</Col>
			<Col md="auto">
				<FormGroup>
					<Label for="examplePassword" className="mr-sm-2">Password</Label>
					<Input onChange={this.handleChange.bind(this)} type="password" name="password" id="examplePassword" placeholder="Password" />
				</FormGroup>
			</Col>
			<Col justify-content="center">
				<Button type="submit">Submit</Button>
			</Col>
			</Form>
			</Col>
		)
	}
}
export default Login