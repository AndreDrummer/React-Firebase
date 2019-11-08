import React, { Component } from 'React';
import { Table, TableBody, TableCell, TableHead, TableRow, Typography } from '@material-ui/core';

export const DataTable = ({ data }) => {
    return <React.Fragement>
        <Typography variant='headline' component='h2'>Add New</Typography>
        <Table selectable={false}>
            <TableHead>
                <TableRow>
                    <TableCell>Key</TableCell>
                    <TableCell>Temperature</TableCell>
                    <TableCell>Humidity</TableCell>
                    <TableCell>Client</TableCell>
                    <TableCell>Data</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {
                    data.map((item, index) =>
                        <TableRow>
                            <TableCell>{item.key}</TableCell>
                            <TableCell>{item.temperature}</TableCell>
                            <TableCell>{item.humidity}</TableCell>
                            <TableCell>{item.client}</TableCell>
                            <TableCell>{item.data}</TableCell>
                        </TableRow>
                    )
                }
            </TableBody>
        </Table>
    </React.Fragement>
}