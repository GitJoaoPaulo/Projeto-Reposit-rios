import React, {useState, useCallback} from 'react';
import api from '../../service/api';
import { FaGithub, FaPlus } from 'react-icons/fa';
import {Container, Form, SubmitButton} from './styles';

export default function Main() {

  const [newRepo, setNewRepo] = useState('');
  const [repository, setRepository] = useState('');

  const handleSubmit = useCallback((e) => {
    e.preventDefault()
    async function submit(e){
      
      const response = await api.get(`repos/${newRepo}`)
  
      const data = {
        name: response.data.full_name,
      }
  
      setRepository([...repository, data]);
      setNewRepo('');
    }

    submit();

  }, [newRepo, repository]);

  function handleinputCharge(e){
    setNewRepo(e.target.value);
  }

  

  return (
    <Container>
      <h1>
        <FaGithub size={25}/>
        Meus repositórios
      </h1>

      <Form onSubmit={handleSubmit}>
        <input type="text" placeholder='Adicionar Repositórios' value={newRepo} onChange={handleinputCharge}/>

        <SubmitButton>
          <FaPlus color='#fff' size={14}/>
        </SubmitButton>

      </Form>

    </Container>

  );
}