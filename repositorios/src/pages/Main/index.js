import React, { useState, useCallback, useEffect } from 'react';
import api from '../../service/api';
import { FaGithub, FaPlus, FaSpinner, FaBars, FaTrash } from 'react-icons/fa';
import { Container, Form, SubmitButton, List, DeleteButton } from './styles';

export default function Main() {

  const [newRepo, setNewRepo] = useState('');
  const [loading, setLoading] = useState(false);
  const [repository, setRepository] = useState([]);
  const [alert, setAlert] = useState(null);


  useEffect(() => {
    const repoStorage = localStorage.getItem('repos');

    if(repoStorage){
      setRepository(JSON.parse(repoStorage));
    }

  }, [])

  useEffect(() => {
    localStorage.setItem('repos', JSON.stringify(repository));
  }, [repository])

  const handleSubmit = useCallback((e) => {
    e.preventDefault()
    
    async function submit(){
      setAlert(null);
      setLoading(true);

      try {

        if(newRepo === ''){
          throw new Error('Você precisa indicar um repositório');
        }

        const response = await api.get(`repos/${newRepo}`);

        const hasRepo = repository.find(repo => repo.name === newRepo);

        if(hasRepo){
          throw new Error('Repositório Duplicado');
        }

        const data = {
          name: response.data.full_name,
        }

        setRepository([...repository, data]);
        setNewRepo('');
      }
      catch(error){
        setAlert(true);
        console.log(error);
      }
      finally{
        setLoading(false);
      }
      
      
    }

    submit();

  }, [newRepo, repository]);

  function handleinputCharge(e) {
    setNewRepo(e.target.value);
    setAlert(null);
  }

  const handleDelete = useCallback((repo) =>{
    const find = repository.filter(r => r.name !== repo);
    setRepository(find);

  }, [repository])



  return (
    <Container>
      <h1>
        <FaGithub size={25} />
        Meus repositórios
      </h1>

      <Form onSubmit={handleSubmit} error={alert}>
        <input type="text" placeholder='Adicionar Repositórios' value={newRepo} onChange={handleinputCharge} />

        <SubmitButton loading={loading ? 1 : 0}>
          {loading ? (
            <FaSpinner color='#fff' size={14}/>
          ): (
            <FaPlus color='#fff' size={14} />
          )}
          
        </SubmitButton>

      </Form>

      <List>
        {repository.map(repo => (
          <li key={repo.name}>
            <span>
              <DeleteButton onClick= {() => handleDelete(repo.name)}>
                <FaTrash size={14}/>
              </DeleteButton>

              {repo.name}
            </span>
            <a href="">
              <FaBars size={20} />
            </a>
          </li>
        ))}
      </List>

    </Container>

  );
}