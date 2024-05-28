// App.js
import React from 'react';
import Header from '../../../app/header';
import Details from '../../../app/details';
import '../../../app/style.css';
import projeto1Image from "../../../public/images/projeto1.jpeg";
import projeto1EstampaImage from "../../../public/images/indumentaria-estampa.png";
import projeto2Image from "../../../public/images/projeto2.jpeg";
import projeto2FigurinoImage from "../../../public/images/figurino2-coreldraw.png";

function Project({ params }) {

    if(params.slug == 'project1'){
        return (
            <div>
                <Header showLinks={false} />
                <section id="projetos">
                    <div className="container">
                        <h2>Projetos de moda 1</h2>
                        <div>
                            <Details
                                imagem={projeto1Image}
                                nome="Projeto de moda Indumentária"
                                descricao="Analise e desenho da estampa da Indumentária, baseada no tema de Festa Junina."
                            />
                        </div>
                        <div>
                            <Details
                                imagem={projeto1EstampaImage}
                                nome="Projeto de moda Indumentária"
                                descricao="Desenho de estampa baseado no tema de Festa Junina."
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
                            </p>
                            <p>
                                Nas regiões urbanas, o vestuário caipira ou sertanejo é interpretado. A base é o hábito de confeccionar roupas femininas com tecido de chita florido. Enquanto as dos homens, com tecidos de algodão listrados e xadrezes.
                            </p>
                            <p>
                                Os cavalheiros usam normalmente camisa de estampa xadrez, com remendos, calça, chapéu de palha, lenço colorido no pescoço e botas de cano.
                            </p>
                            <p>
                                As mulheres, por sua vez, de modo geral usam vestidos com estampas florais bastante coloridos, com babados e rendas, mangas bufantes e laçarotes no cabelo ou chapéu de palha.
                            </p>
                        </div>
                    </div>
                </section>
                <footer>
                    Produzido por IPS SOLUTIONS. Todos os direitos reservados.
                </footer>
            </div>
        );
    } else if(params.slug == 'project2') {
        return (
            <div>
                <Header showLinks={false} />
                <section id="projetos">
                    <div className="container">
                        <h2>Projetos de Moda 2</h2>
                        <div>
                            <Details
                                imagem={projeto2Image}
                                nome="Projeto de moda Figurino"
                                descricao="Implementar traje de figurino utilizando CorelDRAW."
                            />
                        </div>
                        <div>
                            <Details
                                imagem={projeto2FigurinoImage}
                                nome="Projeto de moda Figurino"
                                descricao="Traje implementado no CorelDraw."
                            />
                        </div>
                        <div className="projeto-card w-full">
                            <h2>Caracterização do traje e do personagem</h2>
                            <p>
                                Depois de quase 5 anos fora das telas, Catherine Zeta-Jones fez seu retorno triunfal em
                                "Wandinha", dando vida a Mortícia Addams, matriarca da Família Addams.
                            </p>
                            <h2>Traje do personagem</h2>
                            <p>
                                Morticia é descrita como uma bruxa, ela tem a pele pálida e longos cabelos preto. Ela
                                geralmente se veste de vestidos góticos, na cor preta para combinar com os seus cabelos
                            </p>
                        </div>
                    </div>
                </section>
                <footer>
                    Produzido por IPS SOLUTIONS. Todos os direitos reservados.
                </footer>
            </div>
        );
    } else if(params.slug == 'project3') {
        return (
            <div>
                <Header showLinks={false} />
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