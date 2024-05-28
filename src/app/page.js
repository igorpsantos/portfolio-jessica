import React from 'react';
import Header from './header';
import PostCard from './post-card';
import ProjetoCard from './card';
import SobreMim from './about';
import './style.css';
import projeto1Image from "../public/images/projeto1.jpeg";
import projeto2Image from "../public/images/projeto2.jpeg";
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
    return (
        <div>
            <Header showLinks={true} />
            <section id="projetos">
                <div className="container">
                    <h2 className="title-border">Projetos de Moda</h2>
                    <div className="row justify-content-center">
                        <ProjetoCard
                            nome="Projeto de moda indumentária"
                            descricao="Trabalho realizado no 1º período de Design de Moda."
                            imagem={projeto1Image}
                            slug="project1"
                        />
                        <ProjetoCard
                            nome="Projeto de moda figurino"
                            descricao="Trabalho realizado no 2º período de Design de Moda."
                            imagem={projeto2Image}
                            slug="project2"
                        />
                    </div>
                </div>
            </section>
            <section id="posts">
                <div className="container">
                    <h2 className="title-border">Meus Posts</h2>
                    <div className='row justify-content-start p-2'>
                        <PostCard url="https://www.instagram.com/p/CQtUIAxDItPBgn4YFOvitvqapEemi9MK3H-Mpw0/?igsh=MXVxbnFnOTJ0cGR5cg%3D%3D&img_index=1"/>
                        <PostCard url="https://www.instagram.com/p/CREeqV5jQ3h/?img_index=1"/>
                        <PostCard url="https://www.instagram.com/p/CRROVXdjMjE/?img_index=1"/>
                        <PostCard url="https://www.instagram.com/p/CQyiZnAjJLR/?img_index=1" />
                        <PostCard url="https://www.instagram.com/p/C7eMaDeuS6I/" />
                    </div>
                </div>
            </section>
            <SobreMim />
            <footer>
                Produzido por IPS SOLUTIONS. Todos os direitos reservados.
            </footer>
        </div>
    );
}

export default App;