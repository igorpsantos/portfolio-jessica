// ProjetoCard.js
'use client';
import React from 'react';
import Image from 'next/image'
import Link from 'next/link'
import { InstagramEmbed } from 'react-social-media-embed';

function PostCard({ url }) {
    return (
        <InstagramEmbed url={url} width={328} />
    );
}

export default PostCard;
