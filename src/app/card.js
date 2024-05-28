// ProjetoCard.js
import React from 'react';
import Image from 'next/image'
import Link from 'next/link'

function ProjetoCard({ nome, descricao, imagem, slug }) {
    return (
        <div className="col-12 col-md-6 mt-2">
            <div className="card">
                <Image className='card-img-top' src={imagem} alt={nome} width={300} height={300} />
                <div className="card-body">
                    <h5 className="card-title">{nome}</h5>
                    <p className="card-text">{descricao}</p>
                    <Link className='btn btn-primary' href={`project/${slug}`}>Ver mais</Link>
                </div>
            </div>
        </div>
    );
}

export default ProjetoCard;
