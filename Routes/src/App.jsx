import { Routes, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      {/* Barra de navegação superior em bootstap 4 */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <Link className="navbar-brand" to="/">IPO</Link>
          <div className="navbar-nav">
            <Link className="nav-link" to="/clientes">Clientes</Link>
            <Link className="nav-link" to="/veiculos">Veículos</Link>
            <Link className="nav-link" to="/inspecoes">Inspeções</Link>
          </div>
        </div>
      </nav>
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/clientes" element={<ClientesList />} />
          <Route path="/veiculos" element={<VeiculosList />} />
          <Route path="/inspecoes" element={<InspecoesList />} />
        </Routes>
      </div>
    </div>
  );
}
// Estas páginas serão criadas nas próximas etapas
function Inicio() {
  return <div className="jumbotron">
    <div className="text-center">
      <h1>Centro de Inspeções de Automóveis</h1>
      <p>IPO - ESDS1</p>
    </div>
  </div>

}

function ClientesList() {
  return <div className="ClientesList">

    <div className="row">
      <div className="col-md-6 text-left">
        <h2>Clientes</h2>
      </div>
      <div className="col-md-6 text-right">
          <button className="btn btn-dark mb-3"><i class="fa fa-plus-square"></i> Adicionar Cliente</button>
          <button className="btn btn-dark mb-3 ml-2"><i class="fa fa-refresh"></i> Atualizar</button>
      </div>

    </div>
    <div className="Tabela">

    </div>

    <div className="row">
      <div className="col-md-12">
        <div className="table-responsive-sm">
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Código</th>
                <th>Nome</th>
                <th>Morada</th>
                <th>NIF</th>
                <th>Opções</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>
                  <button className="btn btn-sm btn-dark"><i className="fa fa-eye"></i></button>
                  <button className="btn btn-sm btn-dark ml-2"><i className="fa fa-pencil"></i></button>
                  <button className="btn btn-sm btn-dark ml-2"><i className="fa fa-trash"></i></button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
}
function VeiculosList() {
  return (<h2>Página de Veículos</h2>);
}
function InspecoesList() {
  return (<h2>Página de Inspeções</h2>);
}

export default App