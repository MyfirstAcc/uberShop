import React, { useState } from 'react';

function FilterBar({ onFilterChange }) {
    const [minPrice, setMinPrice] = useState('');
    const [maxPrice, setMaxPrice] = useState('');
    const [name, setName] = useState('');
    const [minRating, setMinRating] = useState('');

    const handleFilterChange = () => {
        onFilterChange({
            minPrice: parseFloat(minPrice) || undefined,
            maxPrice: parseFloat(maxPrice) || undefined,
            name: name.trim() || undefined,
            minRating: parseInt(minRating) || undefined,
        });
    };

    return (
        <div className="filter-bar">
            <div className="mb-2">
                <label htmlFor="minPrice" className="form-label">
                    Мин. цена:
                </label>
                <input
                    type="number"
                    id="minPrice"
                    className="form-control"
                    value={minPrice}
                    onChange={(e) => setMinPrice(e.target.value)}
                />
            </div>
            <div className="mb-2">
                <label htmlFor="maxPrice" className="form-label">
                    Макс. цена:
                </label>
                <input
                    type="number"
                    id="maxPrice"
                    className="form-control"
                    value={maxPrice}
                    onChange={(e) => setMaxPrice(e.target.value)}
                />
            </div>
            <div className="mb-2">
                <label htmlFor="minRating" className="form-label">
                    Мин. рейтинг:
                </label>
                <input
                    type="number"
                    id="minRating"
                    className="form-control"
                    value={minRating}
                    onChange={(e) => setMinRating(e.target.value)}
                />
            </div>
            <button className="btn btn-primary" onClick={handleFilterChange}>
                Применить фильтр
            </button>
        </div>
    );
}

export default FilterBar;