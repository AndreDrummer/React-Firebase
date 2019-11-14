import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableRow, Typography, Button } from '@material-ui/core';
import firebaseService from '../../services/firebaseServices';

export const DataTable = ({ data }) => {
    const remove = (id) => {
        firebaseService.remove(id, 'leituras');
    };

    return <React.Fragment>
        <Typography variant='headline' component='h2'>Dados</Typography>
        <Table selectable={false}>
            <TableHead>
                <TableRow>
                    <TableCell>Key</TableCell>
                    <TableCell>Temperature</TableCell>
                    <TableCell>Humidity</TableCell>
                    <TableCell>Client</TableCell>
                    <TableCell>Data</TableCell>
                    <TableCell>Ação</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {
                    data.map((item, index) =>
                        <TableRow>
                            <TableCell>{item.key}</TableCell>
                            <TableCell>{item.temperatura}</TableCell>
                            <TableCell>{item.umidade}</TableCell>
                            <TableCell>{item.cliente}</TableCell>
                            <TableCell>{item.data}</TableCell>                        
                            <TableCell>
                                <Button onClick={() => { remove(item.key)}}>Remove</Button>
                            </TableCell>
                        </TableRow>
                    )
                }
            </TableBody>
        </Table>
    </React.Fragment>
}