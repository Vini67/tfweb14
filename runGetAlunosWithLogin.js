import axios from 'axios';

const API_LOGIN = 'http://localhost:8080/login';  // ajuste se seu endpoint for diferente
const API_ALUNOS = 'http://localhost:8080/api/alunos';

const credentials = {
  username: 'seu_usuario_aqui',
  password: 'sua_senha_aqui'
};

async function run() {
  try {
    // Login para obter token
    const loginResp = await axios.post(API_LOGIN, credentials);
    const token = loginResp.data.token;  // ajuste conforme sua API retorna o token

    console.log('Token recebido:', token);

    // Agora usa o token para chamar /api/alunos
    const alunosResp = await axios.get(API_ALUNOS, {
      headers: { Authorization: `Bearer ${token}` }
    });

    console.log('Alunos:', alunosResp.data);

  } catch (error) {
    if (error.response) {
      console.error('Erro:', error.response.status, error.response.data);
    } else {
      console.error('Erro:', error.message);
    }
  }
}

run();
