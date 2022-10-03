import React, { useState, useCallback } from 'react';
import api from '../../service/api';
import { FaGithub, FaPlus, FaSpinner, FaBars, FaTrash } from 'react-icons/fa';
import { Container, Form, SubmitButton, List, DeleteButton } from './styles';

export default function Main() {

  const [newRepo, setNewRepo] = useState('');
  const [loading, setLoading] = useState(false);
  const [repository, setRepository] = useState([]);

  const handleSubmit = useCallback((e) => {
    e.preventDefault()
    
    async function submit(){
      
      setLoading(true);

      try {
        const response = await api.get(`repos/${newRepo}`)

        const data = {
          name: response.data.full_name,
        }

        setRepository([...repository, data]);
        setNewRepo('');
      }
      catch(error){
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

      <Form onSubmit={handleSubmit}>
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