import { useRef } from 'react';

export default function LandingPage({ onSearch }) {
    
    const searchBoxReference = useRef();

    return (
        <div>
            <h1>Landing</h1>
            <input type="text" ref={searchBoxReference}></input>
            <button type="button" onClick={() => onSearch(searchBoxReference.current.value) }>Search</button>
        </div>
    );
}