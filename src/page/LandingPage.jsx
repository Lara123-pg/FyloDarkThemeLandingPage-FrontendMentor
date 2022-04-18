import React, { useState } from 'react';


import background from '../assets/bg-curvy-desktop.svg';

import quotes from '../assets/bg-quotes.png';

import iconAccessAnywhere from '../assets/icon-access-anywhere.svg';
import iconAnyFile from '../assets/icon-any-file.svg';
import iconArrow from '../assets/icon-arrow.svg';
import arrowHover from '../assets/arrowHover.svg';
import iconCollaboration from '../assets/icon-collaboration.svg';
import iconEmail from '../assets/icon-email.svg';
import iconLocation from '../assets/icon-location.svg';
import iconPhone from '../assets/icon-phone.svg';
import iconSecurity from '../assets/icon-security.svg';

import illustrationIntro from '../assets/illustration-intro.png';
import illustrationStayProductive from '../assets/illustration-stay-productive.png';

import logo from '../assets/logo.svg';

import profile1 from '../assets/profile-1.jpg';
import profile2 from '../assets/profile-2.jpg';
import profile3 from '../assets/profile-3.jpg';

import facebook from '../assets/facebook.png';
import instagram from '../assets/instagram.png';
import twitter from '../assets/twitter.png';

import '../scss/main.scss';

import { Post } from '../components/Post';

export function LandingPage() {
    const [icon, setIcon] = useState(false);
    const [email, setEmail] = useState('');

    const [errorEmail, setErrorEmail] = useState(null);


    const validate = () => {
        let error = false;

        setErrorEmail(null);
        const regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if(email == '') {
            setErrorEmail('Email Address cannot be empty');
            error = true;
        } else if(!regexEmail.test(String(email).toLowerCase())) {
            setErrorEmail('Please enter a valid email address');
            error = true;
        }


        return !error;
    }

    return(
        <div className='container'>
            <header>
                <div className='menu'>
                    <img className='logo' src={logo} alt="Logo da Fylo"/>

                    <nav className='menu'>
                        <ul>
                            <li><a href="#">Features</a></li>
                            <li><a href="#">Team</a></li>
                            <li><a href="#">Sign In</a></li>
                        </ul>
                    </nav>
                </div>

                <div className='contentIntro'>
                    <img className='intro' src={illustrationIntro} alt="Imagem de uma pasta com vários arquivos com pessoas retirando esses arquivos." />
                    <h1>All your files in one secure location, accessible anywhere.</h1>
                    <p>Fylo stores all your most important files in one secure location. Access them wherever you need, share and collaborate with friends family, and co-workers.</p>

                    <button type='button' className='styleButton'>Get Started</button>
                </div>
            </header>
            <main>
                <img src={background} alt="Background de montanha da cor azul escuro." />

                <div className='infos'>
                    <div className='info1'>
                        <img src={iconAccessAnywhere} alt="Imagem de um computador ao lado de um celular." />
                        <h2>Access your files, anywhere</h2>
                        <p>The ability to use a smartphone, tablet, or computer to access your account means your files follow you everywhere.</p>
                    </div>

                    <div className='info2'>
                        <img src={iconSecurity} alt="Ícone de segurança que tem um símbolo de OK" />
                        <h2>Security you can trust</h2>
                        <p>2-factor authentication and user-controlled encryption are just a couple of the security features we allow to help secure your files.</p>
                    </div>

                    <div className='info3'>
                        <img src={iconCollaboration} alt="Ícone de um relógio com um símbolo de OK ao lado de pessoas." />
                        <h2>Real-time collaboration</h2>
                        <p>Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required.</p>
                    </div>

                    <div className='info4'>
                        <img src={iconAnyFile} alt="Ícone de arquivos." />
                        <h2>Store any type of file</h2>
                        <p>Whether you´re sharing holidays photos or work documents, Fylo has you covered allowing for all file types to be securely stored and shared.</p>
                    </div>
                </div>

                <div className='containerInfo'>
                    <img src={illustrationStayProductive} alt="Imagem com pessoas e caixas de mensagens." />

                    <div className='texts'>
                        <h2>Stay productive, wherever you are</h2>
                        <p>Never let location be an issue when accessing your files. Fylo has you covered for all of your file storage needs.</p>
                        <p>Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required.</p>

                        <a 
                            href="#" 
                            onMouseOver = {() => setIcon(true)}
                            onMouseOut = {() => setIcon(false)}
                        >
                        See how Fylo works { icon ?  <img src={arrowHover} alt="Ícone de uma seta que aparecerá quando passar o mouse sobre o link." />
                        : <img src={iconArrow} alt="Ícone de uma seta direcionada para direita."/>
                        }</a>
                    </div>
                </div>

                <img className='quotes' src={quotes} alt="Imagem de aspas." />
                
                <div className='posts'>
                    <Post 
                        classname = 'post1'

                        image = {profile1}
                        name = 'Satish Patel'
                    />

                    <Post 
                        classname = 'post2'

                        image = {profile2}
                        name = 'Bruce McKenzie'
                    />

                    <Post 
                        classname = 'post3'

                        image = {profile3}
                        name = 'Iva Boyd'
                    />
                </div>

                <div className='containerInput'>
                    <div className='textInput'>
                        <strong>Get early access today</strong>
                        <p>It only takes a minute to sign up and our free starter tier is extremely generous. If you have any questions, our support team would be happy to help you.</p>

                        <div className='input'>
                            <div className='inputButton'>
                                <input 
                                    type="text" 
                                    placeholder='email@example.com'
                                    onChange={(event) => { 
                                        setEmail(event.target.value)
                                        setErrorEmail(null)}}
                                        
                                    value = {email}
                                />

                                <button type='button' className='styleButton' onClick={() => validate()}>Get Started For Free</button>
                            </div>

                            <p className='error'>{errorEmail}</p>
                        </div>
                    </div>
                </div>
            </main>

            <footer>
                <div className='containerFooter'>
                    <div className='logoLocation'>
                        <img src={logo} alt="Logo da Fylo."/>

                        <div className='text2'>
                            <img src={iconLocation} alt="Ícone simbolizando localização." />
                            <p>Lorem ipsum, dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                        </div>
                    </div>

                    <div className='phoneEmail'>
                        <div className='phone'>
                            <img src={iconPhone} alt="Ícone de telefone." />
                            <p>+1-543-123-4567</p>
                        </div>

                        <div className='email'>
                            <img src={iconEmail} alt="Ícone de do gmail - Descrição: Uma quadrado branco com a letra M no centro e tem cor preta." />
                            <p>example@fylo.com</p>
                        </div>
                    </div>

                    <div className='links'>
                        <nav>
                            <ul>
                                <li id='link1'><a href="#">About Us</a></li>
                                <li id='link2'><a href="#">Jobs</a></li>
                                <li id='link3'><a href="#">Press</a></li>
                                <li id='link4'><a href="#">Blog</a></li>
                                <li id='link5'><a href="#">Contact Us</a></li>
                                <li id='link6'><a href="#">Terms</a></li>
                                <li id='link7'><a href="#">Privacy</a></li>
                            </ul>
                        </nav>
                    </div>

                    <div className='socialMedias'>
                        <div><img  className='facebookInstagram' src={facebook} alt="Ícone do Facebook - Descrição: Letra F branca."/></div>
                        
                        <div><img className='twitter' src={twitter} alt="Ícone do Twitter - Descrição: Um passáro branco." /></div>

                        <div><img className='facebookInstagram' src={instagram} alt="Ícone do Instagram - Descrição Uma câmera branca." /></div>
                    </div>
                </div>
                <p class="attribution">
                    Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
                    Coded by <a href="https://github.com/Lara123-pg">Lara Fernanda</a>.
                </p>
            </footer>
        </div>
    );
}