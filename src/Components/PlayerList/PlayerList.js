import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPlus } from '@fortawesome/free-solid-svg-icons'
import './PlayerList.css'

const PlayerList = (props) => {
    const {name,img,club,baseValue} = props.player;
    const handlePlayer=props.handleAddedPlayer;
    return (
        <div className='all-player'>
            <div className='playerCard rounded'>
                <img src={img} alt="" className="rounded-top"/>
                <h4 className='mt-2'>{name}</h4>
                <p>Club Name:<span className='font-weight-bold'> {club}</span></p>
                <p>Salary Per Year:<span className='font-weight-bold'>${baseValue} million </span></p>
                <button className="btn btn-primary" onClick={()=>handlePlayer(props.player)}><FontAwesomeIcon icon={faPlus} />  Add to your team</button>
            </div>
        </div>
    );
};

export default PlayerList;