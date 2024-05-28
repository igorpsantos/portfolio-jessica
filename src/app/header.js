// Header.js
import React from 'react';
import Image from 'next/image'
import JessicaImage from '../public/images/jessica.jpg'

function Header({ showLinks }) {

    if(!showLinks){
        return (
            <header>
                <div className="row">
                    <div className="header-photo">
                        <div>
                            <h1>Jéssica Stefani Parize</h1>
                        </div>
                        <Image className="header-img" src={JessicaImage} alt="Jessica imagem" width="300" height="auto" />
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="https://www.instagram.com/jessica_parize16/">Instagram</a></li>
                        </ul>
                    </div>
                </div>
            </header>
        );
    } else {
        return (
            <header>
                <div className="row">
                    <div className="header-photo">
                        <div>
                            <h1>Jéssica Stefani Parize</h1>
                        </div>
                        <Image className="header-img" src={JessicaImage} alt="Jessica imagem" width="300" height="auto"/>
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="#projetos">Projetos</a></li>
                            <li><a href="#posts">Posts</a></li>
                            <li><a href="#sobre">Sobre</a></li>
                            <li><a href="https://www.instagram.com/jessica_parize16/">Instagram</a></li>
                        </ul>
                    </div>
                </div>
            </header>
        );
    }

}

export default Header;
