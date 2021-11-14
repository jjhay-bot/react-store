import React, { useState } from 'react'
// import style from "./SearchBar.module.css"

const SearchBar = (props) => {
    const [searchValue, setSearchValue] = useState("")            // default, updated

    const handleInputChange = (e) => {
        setSearchValue(e.target.value)
    }

    const handleClearClick = () => {
        setSearchValue("")
    }

    const displayClear = searchValue.length > 0

    const filteredProducts = props.products.filter(function(creature) {
      return toString(creature.habitat) ==- "555";
    });
    

    // const search = props.products.filter(x => {
    //   x['name']
    // })

    console.log(filteredProducts);
    
    

    const capitalize = (s) => {
        if (typeof s !== 'string') return ''
        return s.charAt(0).toUpperCase() + s.slice(1)
    }


    return (
        <div className={'center'}>
            <div className={'search_field'}>
                <input type="text" value={capitalize(searchValue)} onChange={handleInputChange} placeholder="search..." />
                {displayClear && <button onClick={handleClearClick}>clear</button>}  
            </div>

            <ul className={'center'}>
                {filteredProducts.map((product) => {
                    return (
                        <div className={'card'}>
                            <li  key={product}>{product}</li>
                        </div>
                    )
                })}
            </ul>
            
        </div>
    )
  
}

export default SearchBar;
