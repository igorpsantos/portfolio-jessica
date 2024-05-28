// ProjetoCard.js
'use client';
import React from 'react';
import Image from 'next/image'
import Link from 'next/link'
import { InstagramEmbed } from 'react-social-media-embed';

function PostCard({ url }) {
    return (
        <div className='col-12 col-md-4'>   
            <InstagramEmbed url={url} width={328} />
        </div>
    );
}

export default PostCard;
