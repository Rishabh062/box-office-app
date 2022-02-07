import React, {useState} from 'react'
import ActorGrid from '../components/actor/ActorGrid';
import MainPageLayout from '../components/MainPageLayout';
import ShowGrid from '../components/show/ShowGrid';
import { apiGet } from '../misc/config.jsx'
import { useLastQuery } from '../misc/custom-hooks';
import { RadioInputWrapper,SearchInput, SearchButtonWrapper } from './Home.styled';



const Home = () => {

    const [input, setInput] = useLastQuery('');
    const [results, setResults] = useState(null);
    const [searchOption, setSearchOption] = useState('shows')
    const isShowSearch = searchOption === 'shows';
    const onSearch = () => {

        apiGet(`/search/shows?q=${input}`).then(result => {
            setResults(result)
            console.log(result);
        });

    };

    const onInputChange = (e) => {
        setInput(e.target.value);

    }

    const onKeyDown = (e) => {
        onSearch()
    }

    const onRadioChange = (e) => {
        setSearchOption(e.target.value)
    }
    const renderResults = () => {
        if (results && results.length === 0) {
            return <div>No results</div>
        }
        if (results && results.length > 0) {
            return results[0].show? ( <ShowGrid data={results}/> ): ( <ActorGrid data={results}/>)
        };
        return null;
    }
    return (
        <MainPageLayout>
            <SearchInput type="text" placeholder='Search for something' onChange={onInputChange} onKeyDown={onKeyDown} value={input} />

            
            <RadioInputWrapper>
                <div>
                    <label htmlFor="shows-search">
                        Shows
                        <input id='shows-search' value='shows' checked={isShowSearch} onChange={onRadioChange} type="radio" />
                    </label>
                    {/* <CustomRadio label="Shows" id='shows-search' value="shows" checked={isShowSearch} onChange={onRadioChange}/> */}
                </div>

                <div>
                    <label htmlFor="actors-search">
                        Actors
                        <input id='actors-search' value='people' checked={!isShowSearch} onChange={onRadioChange} type="radio" />
                    </label>
                {/* <CustomRadio label="Actors" id='actors-search' value="people" checked={!isShowSearch} onChange={onRadioChange}/> */}
                </div>

                </RadioInputWrapper>

         
        <SearchButtonWrapper><button type='button' onClick={onSearch}>Search</button></SearchButtonWrapper> 
        
            {renderResults()}
        </MainPageLayout>
    )
};

export default Home
