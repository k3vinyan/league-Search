import React from 'react'
import { getLeagueImage } from '../js/helpers.js'




const Champion = ({champion, id, onClick }) => {
    const { name } = champion
    
    return (
        <li className="champions-list-item border"  onClick={onClick} id={id}>
            <img src={getLeagueImage(champion, 'square')} />
            <h2 className="item-name">{name}</h2>
        </li>
    )
}


const ChampionsList = ({selectedChampions, allChampions, searchValue, handleChampionSelect}) => {
    
    return (
        <div className="champions-list-container">
            <ul className="champions-list">
                { (searchValue.length > 0) ?
                    selectedChampions.map( (champ, index) => {
                        return (
                            <Champion   key={champ.id} 
                                        champion={champ} 
                                        onClick={handleChampionSelect}
                                        id={index} 
                            />
                            )
                    })

                    : allChampions.map( (champ, index) => {
                        return (
                            <Champion   
                                        key={champ.id} 
                                        champion={champ}
                                        onClick={handleChampionSelect}
                                        id={index}
                                        
                            />
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default ChampionsList