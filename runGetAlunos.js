import axios from 'axios';

const API_URL = 'http://localhost:8080/api/alunos';

const token = 'SEU_TOKEN_JWT_AQUI';

async function getAlunos() {
  try {
    console.log('Chamando GET /api/alunos ...');
    const response = await axios.get(API_URL, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    console.log('Status:', response.status);
    console.log('Dados:', response.data);
  } catch (error) {
    if (error.response) {
      console.log('Erro na requisição:', error.message);
      console.log('Status:', error.response.status);
      console.log('Dados:', error.response.data);
    } else {
      console.log('Erro:', error.message);
    }
  }
}

getAlunos();


