import React from 'react';
import { FiLogIn } from 'react-icons/fi'; // Para garantir SPA (Single Page Application), trocar a por a href por Link to 

import { Link } from 'react-router-dom';

import './styles.css'; // Como o styles não tem nenhuma exportação de dentro dele, podemos colocar apenas o nome do arquivo já que só queremos executar o código dele
import artezananda from "../../assets/artezananda.jpg";

// import logo from '../../assets/logo.svg';


const Home = () => {
    return (
        <div id="page-home">
            <div className="content">
                <main>
                    <h1>Pet Collab</h1>
                    <p>Viabilizamos a troca de produtos e rações, criando uma rede de ajuda e cuidado aos animais.</p>

                    <Link to="/create-point">
                        <span>
                            <FiLogIn />
                        </span>
                        <strong>Quero participar!</strong>
                    </Link>
                </main>
                <img src={artezananda} alt="Arte"/>
                <span>Artista: Ananda Oda (@artezananda)</span>
            </div>
        </div>
    );
}

export default Home;