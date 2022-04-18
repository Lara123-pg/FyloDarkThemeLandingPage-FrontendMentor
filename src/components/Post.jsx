import React from 'react';

export function Post(props) {
    return(
        <div className={props.classname}>
            <p>Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-olled collaboration machine.</p>

            <div className='profile'>
                <img src={props.image} alt="Imagem de uma pessoa"/>

                <div className='names'>
                    <p className='nameP'>{props.name}</p>
                    <p className='profession'>Founder &amp; CEO, Huddle</p>
                </div>
            </div>
        </div>
    );
}