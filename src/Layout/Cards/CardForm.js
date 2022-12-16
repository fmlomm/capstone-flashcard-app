import React from "react";

function CardForm({ formData, handleChange, handleSubmit }) { 

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="front">
                Front
                <br />
                <textarea 
                    id="front" 
                    name="front" 
                    className="form-control"
                    value={formData.front} 
                    onChange={handleChange}
                    placeholder="Front of Card"
                    rows="4"
                    style={{ width: "100% "}}
                    required
                    />
            </label>
            <br />
            <label htmlFor="back">
                Back
                <br />
                <textarea
                    id="back"
                    name="back"
                    className="form-control"
                    value={formData.back}
                    onChange={handleChange}
                    placeholder="Back of Card"
                    rows="4"
                    style={{ width: "100% "}}
                    required
                />
            </label>
        </form>
    )
}

export default CardForm;