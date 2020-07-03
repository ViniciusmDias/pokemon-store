import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { AiOutlineClose } from 'react-icons/ai';
import { FiSearch } from 'react-icons/fi';

import Drawer from '../../containers/Drawer';
import Product from '../ProductSearch';
import Debounce from '../../hooks/useDebounce';

import { SearchButton, SearchDrawer, SearchHeader, SearchBody } from './styles';

interface RootState {
  productsReducer: {
    data: any
  }
}

const Search: React.FC = () => {
  const items = useSelector((state: RootState) => state.productsReducer.data)
  const [showSearch, toggleShowSearch] = useState(false);
  const [results, setResults] = useState([]);
  const [value, setValue] = useState('');

  const debouncedSearchTerm = Debounce(value, 500);

  useEffect(() => {
    if(debouncedSearchTerm) {
      const products = items.filter((item: any) => item.name.toLowerCase().includes(debouncedSearchTerm));
      setResults(products);
    }
  }, [debouncedSearchTerm, items])

  function handleProducts(event: any) {
    event.preventDefault();
    const string = event.target.value;
    setValue(string.toLowerCase());
  }

  function handleSearch() {
    if(showSearch) {
      toggleShowSearch(false);
      setValue('');
      setResults([]);
    } else {
      toggleShowSearch(true)
    }
  }

  return (
    <>
      <SearchButton
        onClick={handleSearch}
      >
        <FiSearch size={24} />
      </SearchButton>

      {showSearch && (
        <Drawer>
          <SearchDrawer>
            <div>
              <h3>Buscar Produtos</h3>
              <button onClick={handleSearch}>
                <AiOutlineClose size={18} color='#fff' />
              </button>
            </div>

            <SearchHeader>
              <input
                type='text'
                placeholder='Pesquisar'
                onChange={(event) => handleProducts(event)}
              />
              <button>
                <FiSearch />
              </button>
            </SearchHeader>

            <SearchBody>
              <ul>
                {results && results.map((item:any) => (
                  <li key={item.id} onClick={handleSearch}>
                    <Product product={item} />
                  </li>
                ))}
              </ul>
            </SearchBody>
          </SearchDrawer>
        </Drawer>
      )}
    </>
  );
};


export default Search
