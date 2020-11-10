import React from "react";

const Contacts = props => {
    return (
        <div>
            <p>Name: {props.name}</p>
            <p>Motto: {props.motto}</p>
        </div>
    );
};

export default Contacts;
