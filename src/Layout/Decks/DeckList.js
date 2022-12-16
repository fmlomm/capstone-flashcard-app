
import React from "react";
import { Link } from "react-router-dom";
import { deleteDeck } from "../../utils/api/index";

function ListDecks({ decks }) {
        


    const handleDelete = async ({ target }) => {
        const confirm = window.confirm("Delete this deck? You will not be able to recover it.")
      
        if(confirm) {
            const id = target.parentNode.value;
            await deleteDeck(id);
            window.location.reload();
          
        }
    };

        return (
                <div>
                    {decks.map((deck, index) => (
                        <div className="card w-100 my-3" key={index}>
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-9">
                                        <h3 className="card-title">{deck.name}</h3>
                                    </div>
                                    <div className="col-3">
                                        <p>{deck.cards.length} cards</p>
                                    </div>
                                </div>
                                <p className="card-text">{deck.description}</p>
                                    <div className="container">
                                        <div className = "row justify-content-between">
                                            <div className="col-4">
                                                <Link to={`/decks/${deck.id}`}>
                                                    <button className="btn btn-secondary mr-1"> 
                                                    <i className="bi bi-eye mr-1"></i>
                                                        View
                                                    </button>
                                                </Link>
                                                <Link to={`/decks/${deck.id}/study`}>
                                                    <button className="btn btn-primary">
                                                    <i className="bi bi-book mr-1"></i>
                                                        Study
                                                    </button>
                                                </Link>
                                            </div>
                                           <div className="col-2">
                                                <button value={deck.id} className="btn btn-danger" onClick={handleDelete}>
                                                <i className="bi bi-trash"></i>
                                                </button>
                                                </div>
                                        </div>
                                    </div>
                            </div>
                        </div>
                    ))}
                </div>
                 )

}

export default ListDecks;