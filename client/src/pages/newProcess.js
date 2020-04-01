// newProvider.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import {
  Title,
  Label,
  ErrorLabel,
  Input,
  Select,
  Button
} from '../components/components.js';
import { Top, Form, FormWrap } from '../components/form.js';
import RSKLink from '../components/RSKLink';
import Footer from '../components/footer.js';
import Spinner from 'react-bootstrap/Spinner';
import I18n from '../i18n';
import { useForm } from 'react-hook-form';

export default function NewProcess() {
  const [users, setUsers] = useState();
  const [event, setEvent] = useState();
  const [loading, setLoading] = useState(false);
  const { register, handleSubmit, errors } = useForm();

  useEffect(() => {
    axios.get('/api/user/get').then(({ data }) => setUsers(data));
  }, []);

  function onSubmit(form) {
    setLoading(true);
    axios({
      method: 'post',
      url: '/api/process/',
      data: { ...form },
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    })
      .then(({ data }) => {
        setLoading(false);
        setEvent(data);
      })
      .catch(e => setLoading(false));
  }
  return (
    <>
      <Top>
        <Title>
          <I18n t="forms.newProcess" />
        </Title>
      </Top>
      {event ? (
        <FormWrap>
          <Form>
            <p>El proceso fue creado con exito</p>
            <ul>
              <li>
                Transaction Hash: <RSKLink hash={event} type="tx" testnet />
              </li>
            </ul>
            <Button as={Link} to="/processes">
              VER PROCESOS
            </Button>
          </Form>
        </FormWrap>
      ) : (
        <FormWrap>
          <Form>
            <Label>
              <I18n t="forms.name" />
            </Label>
            <Input
              error={errors.processTitle}
              name="processTitle"
              ref={register({ required: true })}
            ></Input>
            <ErrorLabel>
              {errors.processTitle && 'Este campo es obligatorio'}
            </ErrorLabel>
            <Label>
              <I18n t="forms.supplier" />
            </Label>
            <Select
              error={errors.supplierAddress}
              name="supplierAddress"
              ref={register({
                required: true,
                validate: value => value !== '0'
              })}
            >
              <option value="0">Select one...</option>
              {users &&
                users.map(user => (
                  <option value={user.address} key={user.address}>
                    {user.username}
                  </option>
                ))}
            </Select>
            <ErrorLabel>
              {errors.supplierAddress &&
                errors.supplierAddress.type === 'validate' &&
                'Este campo es obligatorio'}
            </ErrorLabel>
            <Button className="submit" onClick={handleSubmit(onSubmit)}>
              {loading ? (
                <Spinner animation="border" role="status" size="sm"></Spinner>
              ) : (
                'CREAR'
              )}
            </Button>
          </Form>
        </FormWrap>
      )}
      <Footer />
    </>
  );
}
