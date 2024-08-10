import React from 'react'
import Table from 'react-bootstrap/Table'
import { Container } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';


export default function URLTable() {

    const arr = JSON.parse(localStorage.getItem('URLarr')) || []
  return (
    <Container>
        <Table striped bordered hover>
            <thead>
                <tr>
                <th>#</th>
                <th>URL</th>
                </tr>
            </thead>
            <tbody>
                {arr.map((e ,index) => {
                    return (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{e.url}</td>
                            <td><a className='text-danger fa-xl' href={e.url}><FontAwesomeIcon icon={faArrowUpRightFromSquare} /></a></td>
                        </tr> 
                    ) 
                } )}
                
            </tbody>
        </Table>
    </Container>
  )
}
