import { Button, TextField, Typography } from '@material-ui/core';
import React, { Component } from 'react';
import  FirebaseService from '../../services/firebaseServices';
import { urls } from '../../utils/urlUtils';
import { withRouter } from 'react-router-dom';

class Add extends Component {
    submit = (event) => {
        event.preventDefault();

        const { temperatura } = this;
        const { umidade } = this;
        const { data } = this;
        const { cliente } = this;

        const newid = FirebaseService.pushData('leituras', {
            temperatura,
            umidade,
            data,
            cliente
        });

        this.props.history.push(urls.data.path);
    };

    render = () => (
    <React.Fragment>
        <Typography variant='headline' component='h2'>Add New</Typography>
        <form onSubmit={this.submit}>
            <TextField className="input=field"
                       type="text"
                       defaultValue={''}
                       label="Temperature"
                       required
                       onChange={e => this.temperatura = e.target.value}/>
            
            <Button type="submit"
                    style={{marginTop: '20px', display: 'inline-block'}}>Add</Button>
        </form>
    </React.Fragment>)
}

export default withRouter (Add);