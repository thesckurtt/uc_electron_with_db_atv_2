import React from 'react'
import { useAuth } from '../context/AuthContext'

const Dashboard = () => {
  const {user} = useAuth();
  return (
    <>
      <nav className="navbar navbar-dark bg-dark w-100">
        <div className="container-fluid">
          <span className="navbar-brand mb-0 h1">Dashboard App</span>
        </div>
      </nav>

      <div className="container my-4 h-100 w-100">

        <h2 className="mb-4">Bem-vindo {user.name}</h2>

        <div className="row g-3">
          <div className="col-md-4">
            <div className="card text-white bg-primary">
              <div className="card-body">
                <h5 className="card-title">Usuários</h5>
                <p className="card-text fs-4">125</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card text-white bg-success">
              <div className="card-body">
                <h5 className="card-title">Vendas</h5>
                <p className="card-text fs-4">R$ 15.320</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card text-white bg-warning">
              <div className="card-body">
                <h5 className="card-title">Produtos</h5>
                <p className="card-text fs-4">58</p>
              </div>
            </div>
          </div>
        </div>

        <h2 className="my-4">Atividades Recentes</h2>

        <table className="table table-striped">
          <thead>
            <tr>
              <th>Data</th>
              <th>Usuário</th>
              <th>Ação</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>27/05/2025</td>
              <td>João Silva</td>
              <td>Cadastro de produto</td>
              <td><span className="badge bg-success">Concluído</span></td>
            </tr>
            <tr>
              <td>27/05/2025</td>
              <td>Maria Souza</td>
              <td>Venda realizada</td>
              <td><span className="badge bg-primary">Processando</span></td>
            </tr>
            <tr>
              <td>26/05/2025</td>
              <td>Pedro Santos</td>
              <td>Atualização de perfil</td>
              <td><span className="badge bg-warning text-dark">Pendente</span></td>
            </tr>
          </tbody>
        </table>

      </div>

      <footer className="bg-dark text-white text-center py-3 w-100">
        &copy; 2025 Dashboard App - Todos os direitos reservados.
      </footer>
    </>
  )
}

export default Dashboard
