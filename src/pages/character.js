import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import axios from "axios";

function Character() {
    const [character, setCharacter] = useState(null);
    const {char_id} = useParams();
    console.log(char_id)
    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_BASE_URL}/characters/${char_id}`).then((res) => {
            setCharacter(res.data[0])
        })
    }, [char_id])
    return (
        <div>
            <div>{character?.name}</div>
            <img src={character?.img} alt=""/>
        </div>
    );
}

export default Character;