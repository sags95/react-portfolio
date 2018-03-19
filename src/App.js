import React, { Component } from 'react';
import { Grid, Button, Container, Icon, Image } from 'semantic-ui-react';
import './App.css';

class App extends Component {
  render() {
    return (

        <Grid className='page-wrap'>
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
                        <a href='#'>
                            <Icon name='github' size='big' color='grey'className='icon'/>
                        </a>
                        <a href='#'>
                            <Icon name='linkedin' size='big' color='grey' className='icon'/>
                        </a>
                        <a href='#'>
                            <Icon name='angellist' size='big' color='grey' className='icons'/>
                        </a>
                    </div>
                    <Button color='blue' size='huge' className='header-btn'>Say Hello!</Button>
                </div>
            </Grid.Column>
            <Grid.Column mobile={16} computer={9} className='right-col'>
                <div className='right-wrap1'>
                        <Image src={require('./03_iphone8spacegrey_portrait.png')} centered/>
                    <div className='block-header'>Mobile App</div>
                    <p className='block-p'>Montuto</p>
                </div>
                <div className='right-wrap2'>
                    <Image src={require('./iphone-B6Fh_iphone8spacegrey_portrait.png')} centered/>
                    <div className='block-header'>Chat-based delivery</div>
                    <p className='block-p'>Wizrd</p>
                </div>
            </Grid.Column>

        </Grid>

    );
  }
}

export default App;
