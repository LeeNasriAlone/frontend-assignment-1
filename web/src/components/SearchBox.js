import React from 'react';

const SearchBox = (props) => {
    return (
        <div className="app-searchBox">
            <input 
                value={props.searchValue}
                onChange = { (event) => props.setSearchValue(event.target.value)}
                placeholder={props.placeHolder}>
             </input>
         </div>
    );
};

export default SearchBox;