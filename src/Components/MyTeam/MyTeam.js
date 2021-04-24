import React from 'react';
import './myteam.css'

const MyTeam = (props) => {
    const playerCount=props.myTeam;
    const totalBudget=playerCount.reduce((sum,player) => sum + player.baseValue,0);
    return (
        <div className='team-details'>
            <h2>My Team</h2>
            <br/>
            <h3>Total Player added : <span className='font-weight-bold'>{playerCount.length}</span> </h3>
            <br/>
            <h3>Total budget : <span className='font-weight-bold'> ${totalBudget} </span> million dollar</h3>
            <br/>
            <h4>Added Player List:</h4>
            <table className="table">
            <thead className="thead-dark">
                <tr>
                <th scope="col">Player Name</th>
                <th scope="col">Salary</th>
                </tr>
            </thead>
            <tbody>
                {
                playerCount.map(player =>{
                    const {id, name,baseValue}=player;
                    return <tr>
                        <td>{name}</td>
                        <td>${baseValue} million</td>
                    </tr>
                })
               }
            </tbody>
            </table>
        </div>

    );
};

export default MyTeam;