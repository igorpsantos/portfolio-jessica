import React from 'react';
import Image from 'next/image';

function Details({ imagem, nome, descricao }) {
    return (
        <div className="projeto-card w-full">
            <Image src={imagem} alt={nome} />
            <h3>{nome}</h3>
            <p>{descricao}</p>
        </div>
    );
}

export default Details;