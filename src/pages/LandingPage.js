import { useRef } from 'react';
import { useRouter } from 'next/router';

export default function LandingPage() {
    
    const searchBoxReference = useRef();
    const router = useRouter();

    const onSearch = () => {
        const keyword = searchBoxReference?.current?.value;
        if(keyword) {
            router.push({
                pathname: '/search',
                query: { keyword }
            });
        }
    };

    return (
        <div>
            <h1>Landing</h1>
            <input type="text" ref={searchBoxReference}></input>
            <button type="button" onClick={ onSearch }>Search</button>
        </div>
    );
}