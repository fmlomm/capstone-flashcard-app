import React from "react";
import { Link, } from "react-router-dom";

function DeckCards({ decks, handleDelete }) {
return (
<div>
    {decks.map((deck) => (
        <div className="card py-3">
            <div className="card-body">
                <div className="row">
                    <div className="col-9">
                        <h3 className="card-title">{deck.name}</h3>
                    </div>
                    <div className="col-3">
                        <p>{deck.cards.length} cards</p>
                    </div>
                </div>
            </div>

                <p className="card-text">{deck.description}</p>
                    <div className="container">
                        <div className = "row justify-content-between">
                            <div className="col-4">
                                <Link to={`/decks/${deck.id}`}>
                                    <button className="btn btn-secondary mr-1">
                                        <i class="bi bi-eye"></i>
                                        View
                                    </button>
                                </Link>
                                <Link to={`/decks/${deck.id}/study`}>
                                    <button className="btn btn-primary">
                                        <i className="bi bi-book"></i>
                                        Study
                                    </button>
                                </Link>
                            </div>
                            <div className="col-2">
                                <button value={deck.id} className="btn btn-danger" onClick={handleDelete}><i className="bi bi-trash"></i>
                                </button>
                            </div>
                        </div>
                    </div>
            </div>
    ))}
</div>
 )
}

export default DeckCards;