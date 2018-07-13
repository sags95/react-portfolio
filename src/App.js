import React, { Component } from 'react';
import { Grid, Button, Container, Icon, Image, Form } from 'semantic-ui-react';
import $ from 'jquery';
import './App.css';

class App extends Component {
    constructor(props){
        super(props);

        this.state = {
            name: '',
            email: '',
            message: '',
            formError: null,
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange = (e) => {
        let newState = {};

        newState[e.target.name] = e.target.value;
        newState[e.target.email] = e.target.value;
        newState[e.target.message] = e.target.value;
        this.setState(newState);
    };

    /**
     * Calls a Google Sheet script to send form data (state) to Sheet.
     */

    handleSubmit = (e, message) => {

        if (this.state.name || this.state.email || this.state.message === ''){
            this.setState({formError: true});
        } else {
            this.setState({formError: false})
        }


        if (this.state.formError === false){
            const formUrl = 'https://script.google.com/macros/s/AKfycbzWhmdI0yAy3juKvWjNQ4S3JTZzJCUWJbMjAFBISIXUVzxPZcQ/exec';
            e.preventDefault();
    
            $.ajax({
                url: formUrl,
                dataType: 'json',
                type: 'GET',
                data: this.state,
                success: function(data){
                    console.log('Form sent: ' + this.state)
                },
                error: function(xhr, status, err){
                    console.log('Form error:' + xhr + 'status: ' + status + 'error: ' + err);
                }
            });
    
            this.setState({
                name: '',
                email: '',
                message: '',
            })
        } if (this.state.formError === true){
            e.preventDefault();
            const formAlert = () => {
                alert('Form error: please make sure all the fields are filled!')
            }
        }
    };

    render() {
    return (
        <Grid>
            <Grid.Column mobile={16} computer={7} className="left-background">
                <div className="left-wrap">
                    <h2 className="header-text">Programmer</h2>
                    <h2 className="header-text">Founder</h2>
                    <h2 className="header-text">Thinker</h2>
                    <p className="header-p">
                        I'm Alex, a front-end web developer and a software engineering
                        student at McGill University in Montreal, Canada. Checkout my projects
                        and reach out if you have a project in mind!
                    </p>
                    <div className="icon-group">
                        <a target='_blank' href='https://github.com/sags95'>
                            <Icon name='github' size='big' color='grey'className='icon'/>
                        </a>
                        <a target='_blank' href='https://www.linkedin.com/in/alex-sagel-66505991/'>
                            <Icon name='linkedin' size='big' color='grey' className='icon'/>
                        </a>
                        <a target='_blank' href='https://angel.co/alex-sagel7587-gmail-com'>
                            <Icon name='angellist' size='big' color='grey' className='icons'/>
                        </a>
                    </div>
                    <Button color='blue' size='huge' className='header-btn'>Say Hello!</Button>
                </div>
            </Grid.Column>
            <Grid.Column mobile={16} computer={9} className='right-col'>
                <div className='right-wrap1'>
                    <div className='center'>
                            <Image src={require('./03_iphone8spacegrey_portrait.png')} centered/>
                        <div style={{marginBottom: 10}}>
                            <div className='block-header'>Mobile App</div>
                            <p className='block-p'>Montuto - Developer</p>
                        </div>
                    </div>
                </div>
                <div className='right-wrap2'>
                    <Image src={require('./iphone-B6Fh_iphone8spacegrey_portrait.png')} centered/>
                    <div className='block-header'>Chat-based delivery</div>
                    <p className='block-p'> Wizrd - Project Manager</p>
                </div>
                <div className='right-wrap3'>
                    <Image src={require('./Marketplace_iphone8spacegrey_portrait.png')} centered/>
                    <div className='block-header'>Local bartering app</div>
                    <p className='block-p'>Tradepost - Project Manager</p>
                </div>
                <div className='right-wrap4'>
                    <div className='black-header'>Get in touch</div>
                    <Form className='form-wrap' onSubmit={this.handleSubmit}>
                        <Form.Group widths='equal'>
                            <Form.Input fluid label='Name' placeholder='Full name' value={this.state.name} name='name' onChange={this.handleChange}/>
                            <Form.Input fluid label='Email' placeholder='Email' value={this.state.email} name='email' onChange={this.handleChange}/>
                        </Form.Group>
                        <Form.TextArea label='Message' placeholder='Say a few words about your project...' value={this.state.message} name='message' onChange={this.handleChange}/>
                        <Form.Button>Submit</Form.Button>
                    </Form>
                </div>
                <div className='footer'>
                    <p style={{color: '#999'}}> © 2018 Alex Sagel, Made in Canada</p>
                </div>
            </Grid.Column>
        </Grid>
    );
  }
}

export default App;
