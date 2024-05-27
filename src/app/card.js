// ProjetoCard.js
import React from 'react';
import Image from 'next/image'
import Link from 'next/link'

function ProjetoCard({ nome, descricao, imagem, slug }) {
    return (
        <div className="projeto-card">
            <Image src={imagem} alt={nome} width="300" height="300" />
            <h3>{nome}</h3>
            <p>{descricao}</p>
            <Link href={`project/${slug}`}>Ver mais</Link>
        </div>
    );
}

export default ProjetoCard;
