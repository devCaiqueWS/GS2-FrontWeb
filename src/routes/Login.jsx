import React, { useState } from "react";
import loginImg from '../assets/login.png';
import '../style/Login.css'
import "bootstrap/dist/css/bootstrap.min.css";

function Login() {
  const [usuarios, setUsuarios] = useState({
    usuario: "",
    senha: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUsuarios({ ...usuarios, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!usuarios.usuario || !usuarios.senha) {
      alert("Por favor, preencha todos os campos.");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/usuarios");
      if (response.ok) {
        const users = await response.json();
        const foundUser = users.find(user => user.usuario === usuarios.usuario);

        if (foundUser) {
          // Simulação de comparação de senha segura (usando texto simples por simplicidade)
          if (foundUser.senha === usuarios.senha) {
            sessionStorage.setItem("usuarioLogado", JSON.stringify(foundUser));
            window.location = "/projeto";
          } else {
            alert("Senha incorreta. Por favor, tente novamente.");
            setUsuarios({
              usuario: "",
              senha: "",
            });
          }
        } else {
          alert("Usuário não encontrado. Por favor, verifique o nome de usuário.");
          setUsuarios({
            usuario: "",
            senha: "",
          });
        }
      } else {
        throw new Error("Erro ao buscar usuários.");
      }
    } catch (error) {
      console.error(error);
      alert("Erro ao processar a solicitação. Tente novamente mais tarde.");
      setUsuarios({
        usuario: "",
        senha: "",
      });
    }
  };

  return (
    <div className="container-fluid d-flex justify-content-center align-items-center vh-100">
      <div className="row" id="formulario">
        <div className="col-md-6">
          <img
            src={loginImg}
            className="img-fluid"
            alt="Imagem de Login"
          />
        </div>
        <div className="col-md-6">
          <h1>Login</h1>
          <form onSubmit={handleSubmit} className="p-4">
            <div className="mb-3">
              <label htmlFor="idUsuario" className="form-label">
                Usuário:
              </label>
              <input
                type="text"
                name="usuario"
                value={usuarios.usuario}
                placeholder="Digite seu usuário"
                onChange={handleChange}
                className="form-control"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="idSenha" className="form-label">
                Senha:
              </label>
              <input
                type="password"
                name="senha"
                value={usuarios.senha}
                placeholder="Digite sua senha"
                onChange={handleChange}
                className="form-control"
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Entrar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
