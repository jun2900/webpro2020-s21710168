import React from "react";
import "../App.css";
import {sortByPower} from '../utils/sort'

const List = props => {
    console.log(props.data)
    return (
        <div>
            <ul className = "list">
                {props.data.sort(sortByPower).map(person => 
                    <li key={person.name} className="list-item">
                        <div className="list-item-image-container">
                            <img src={person.thumbnail} />
                        </div>
                        <span className="list-item-name">
                            {person.name} (Power:{' '}
                            <span className="list-item-power">{person.power}</span>)
                        </span>
                    </li>
                )}                                
            </ul>
        </div>
    );
};

export default List;
