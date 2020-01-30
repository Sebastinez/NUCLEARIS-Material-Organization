// processes.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Title, Button, Wrap } from '../components/components.js';
import { Top, Form, FormWrap } from '../components/form.js';
import { Row, HeadRow, Col4 } from '../components/tableComponents.js';
import { ReactComponent as Eye } from '../img/eye.svg';
import { ReactComponent as Pen } from '../img/pen.svg';
import Footer from '../components/footer.js';
import Header from '../components/header.js';

function Processes() {
  const [processes, setProcesses] = useState([]);

  useEffect(() => {
    axios({
      method: 'get',
      url: '/api/process/get',
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
    }).then(({ data }) => {
      setProcesses(data);
    });
  }, []);

  return (
    <>
      <Header />
      <Wrap>
        <Top>
          <Title>PROCESOS</Title>
        </Top>
        <FormWrap>
          <Form>
            <HeadRow>
              <Col4>NOMBRE</Col4>
              <Col4>PROVEEDOR</Col4>
              <Col4>VER DOC.</Col4>
              <Col4>AGREGAR DOC.</Col4>
              <Col4>CONTRACT</Col4>
            </HeadRow>
            {processes.map(process => (
              <Row key={process.processContracts}>
                <Col4>{process.processName}</Col4>
                <Col4>{process.supplierName}</Col4>
                <Col4>
                  <Link to="/documents/0x1EdcdE414000B0B182761168CC72B4c01B21fD0A">
                    <Eye />
                    VER DOC.
                  </Link>
                </Col4>
                <Col4>
                  <Link to="/documents/add/0x1EdcdE414000B0B182761168CC72B4c01B21fD0A">
                    <Pen />
                    AGREGAR DOC.
                  </Link>
                </Col4>
                <Col4>{process.processContracts}</Col4>
              </Row>
            ))}
            <Button as={Link} className="submit" to="/processes/add">
              NUEVO PROCESO
            </Button>
          </Form>
        </FormWrap>
      </Wrap>
      <Footer />
    </>
  );
}
export default Processes;