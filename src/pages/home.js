import React, {useEffect} from 'react';
import {useSelector, useDispatch} from "react-redux";
import {fetchCharacters} from "../store/actions";
import {PlaceholderImage} from "../components";
import {Button} from "semantic-ui-react";
import {Link} from "react-router-dom";

function Home() {
    const characters = useSelector((state) => state.characters.items)
    const nextPage = useSelector((state) => state.characters.page)
    const isLoading = useSelector((state) => state.characters.isLoading)
    const hasNextPage = useSelector((state) => state.characters.hasNextPage)
    const error = useSelector((state) => state.characters.error)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchCharacters());
    }, [dispatch])

    if(error){
        return <div>error: {error}</div>
    }

    if (isLoading){
        return (
            <div className="characters">
                <div className="ui container">
                    <div className="ui grid">
                        <div className="four wide column">
                            <div className="character-wrapper">
                                <PlaceholderImage count={20} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="characters">
            <div className="ui container">
                <div className="title">
                    CHARACTERS
                </div>
                <div className="ui grid">
                    {characters?.map((character) => (
                       <div key={character.char_id} className="four wide column">
                           <div className="character-wrapper">
                               <img src={character.img} alt=""/>
                               <Link to={`character/${character.char_id}`}>
                                   <h3>{character.name}</h3>
                               </Link>
                           </div>
                       </div>
                    ))}
                </div>
                {hasNextPage &&
                    <div className="button-wrapper">
                        <Button onClick={() => dispatch(fetchCharacters(nextPage))}>Load More</Button>
                    </div>
                }
            </div>
        </div>
    );
}

export default Home;