import React, {useState} from 'react'
import ActorGrid from '../components/actor/ActorGrid';
import MainPageLayout from '../components/MainPageLayout';
import ShowGrid from '../components/show/ShowGrid';
import { apiGet } from '../misc/config.jsx'

const Home = () => {

    const [input, setInput] = useState('');
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
            // return results[0].show 
            // ? results.map(item =><div key={item.show.id}>{item.show.name}</div>)
            //  : results.map(item => {
            //     <div key={item.person.id}>{item.person.name}</div>
            // });

            return results[0].show? ( <ShowGrid data={results}/> ): ( <ActorGrid data={results}/>)
        };
        return null;
    }
    return (
        <MainPageLayout>
            <input type="text" placeholder='Search for something' onChange={onInputChange} onKeyDown={onKeyDown} value={input} />

            <div>
                <label htmlFor='show-search'>
                    Shows
                    <input id='show-search' type="radio" value="shows" checked={isShowSearch} onChange={onRadioChange} />
                </label>
                <label htmlFor='actor-search'>
                    Actors
                    <input id='actor-search' type="radio" value="people" checked={!isShowSearch} onChange={onRadioChange} />
                </label>
            </div>
            <button type='button' onClick={onSearch}>Search</button>
            {renderResults()}
        </MainPageLayout>
    )
};

export default Home
