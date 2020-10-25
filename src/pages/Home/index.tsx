import React from 'react';
import { FiLogIn } from 'react-icons/fi'; // Para garantir SPA (Single Page Application), trocar a por a href por Link to 

import { Link } from 'react-router-dom';

import './styles.css'; // Como o styles não tem nenhuma exportação de dentro dele, podemos colocar apenas o nome do arquivo já que só queremos executar o código dele

// import logo from '../../assets/logo.svg';


const Home = () => {
    return (
        <div id="page-home">
            <div className="content">
                <header>
                    {/* <img src={logo} alt="logo"/> */}
                </header>

                <main>
                    <h1>Plataforma de Doações</h1>
                    <p>Viabilizamos a troca de produtos e rações, criando uma rede de ajuda e cuidado aos animais.</p>

                    <Link to="/create-point">
                        <span>
                            <FiLogIn />
                        </span>
                        <strong>Quero participar!</strong>
                    </Link>
                </main>
            </div>
        </div>
    );
}

export default Home;