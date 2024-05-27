// App.js
import React from 'react';
import Header from '../../../app/header';
import Details from '../../../app/details';
import '../../../app/style.css';
import projeto1Image from "../../../public/images/projeto1.jpeg";
import projeto2Image from "../../../public/images/projeto2.jpeg";

function Project({ params }) {

    if(params.slug == 'project1'){
        return (
            <div>
                <Header />
                <section id="projetos">
                    <div className="container">
                        <h2>Projetos de Moda 1</h2>
                        <div>
                            <Details
                                imagem={projeto1Image}
                                nome="Projeto de moda Indumentária"
                                descricao="Analise e desenho da estampa da Indumentária, baseada no tema de Festa junina."
                            />
                        </div>
                        <div className="projeto-card w-full">
                            <h2>Indumentária</h2>
                            <p>
                                Antigamente, por serem festas promovidas pelas cortes, 
                                as mulheres tinham que usar vestidos volumosos e rodados, 
                                por baixa das saias elas usavam anáguas para dar volume.
                            </p>
                            <h2>História</h2>
                            <p>
                                Na atualidade, os homens e as mulheres do campo se vestem com suas melhores roupas durante as festas juninas.

                                Nas regiões urbanas, o vestuário caipira ou sertanejo é interpretado. A base é o hábito de confeccionar roupas femininas com tecido de chita florido. Enquanto as dos homens, com tecidos de algodão listrados e xadrezes.

                                Os cavalheiros usam normalmente camisa de estampa xadrez, com remendos, calça, chapéu de palha, lenço colorido no pescoço e botas de cano.

                                As mulheres, por sua vez, de modo geral usam vestidos com estampas florais bastante coloridos, com babados e rendas, mangas bufantes e laçarotes no cabelo ou chapéu de palha.
                            </p>
                        </div>
                    </div>
                </section>
            </div>
        );
    } else if(params.slug == 'project2') {
        return (
            <div>
                <Header />
                <section id="projetos">
                    <div className="container">
                        <h2>Projetos de Moda 2</h2>
                        <div>
                            <Details
                                imagem={projeto2Image}
                                nome="Projeto 2"
                                descricao="Descrição breve do projeto 2."
                            />
                        </div>
                    </div>
                </section>
            </div>
        );
    } else if(params.slug == 'project3') {
        return (
            <div>
                <Header />
                <section id="projetos">
                    <div className="container">
                        <h2>Projetos de Moda 3</h2>
                        <div className="projeto-cards">
                            <Details
                                imagem={projeto3Image}
                                nome="Projeto 3"
                                descricao="Descrição breve do projeto 3."
                            />
                        </div>
                    </div>
                </section>
            </div>
        );
    } else {
        return (
            <div>Página de erro</div> 
        );
    }
}

export default Project;