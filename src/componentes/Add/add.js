import { Button, TextField, Typography } from '@material-ui/core';
import React, { Component } from 'react';
import FirebaseService from '../../services/firebaseServices';
import { urls } from '../../utils/urlUtils';
import { withRouter } from 'react-router-dom';
import '../../index.css';

class Add extends Component {
    state = { id: null, temperatura: '', umidade: '', cliente: '', data: '' };

    componentWillMount = () => {
        const { id } = this.props.match.params;

        if (!(id === undefined || !id)) {
            this.state({ id });
            FirebaseService.getUniqueDataBy('leituras', id, (data) =>
                this.setState({ ...data }, () => console.log(this.state))); 
        }
    };


    submit = (event) => {
        event.preventDefault();

        const { temperatura } = this.state;
        const { umidade } = this.state;
        const { data } = this.state;
        const { cliente } = this.state;

        let objToSubmit  = {
            temperatura,
            umidade,
            data,
            cliente
        };

        if(this.props.match.params.id === undefined) {
            FirebaseService.pushData('leituras', objToSubmit);
        } else {
            FirebaseService.updateData(this.props.match.params.id, 'leituras', objToSubmit)
        }        

        this.props.history.push(urls.data.path);
    };

    handleChange = name => event  => {
        this.setState({
            [name]: event.target.value,
        });
    };

    render = () => (
        <React.Fragment>
            <Typography variant='headline' component='h2'>Add New</Typography>
            <form onSubmit={this.submit}>
                <TextField className="input-field"
                    type="text"
                    defaultValue={''}
                    label="Temperature"
                    required
                    onChange={e => this.temperatura = e.target.value} />

                <TextField className='input-field'
                    type="text"
                    defaultValue={''}
                    label='Humidity'
                    required
                    onChange={e => this.umidade = e.target.value} />

                <TextField className='input-field'
                    type='text'
                    defaultValue={''}
                    label='Date'
                    required
                    onChange={e => this.data = e.target.value} />

                <TextField className='input-field'
                    type="text"
                    defaultValue={''}
                    label='Cliente'
                    required
                    onChange={e => this.cliente = e.target.value} />

                <Button type="submit"
                    style={{ marginTop: '20px', display: 'inline-block' }}>Add
            </Button>
            </form>
        </React.Fragment>)
}

export default withRouter(Add);