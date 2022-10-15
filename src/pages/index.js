import { useEffect, useState } from 'react';

import LandingPage from './LandingPage';
import SearchResultsPage from './SearchResultsPage';

export default function Index() {

  const [keyword, setKeyword] = useState('');
  const [showResults, setShowResults] = useState(false);

  useEffect(()=> {
    if(keyword !== '') {
      setShowResults(true);
    }
  }, [keyword]);

  const onSearch = (text) => {
    setKeyword(text);
  }

  return (<div>
    { !showResults && <LandingPage onSearch={onSearch} /> }
    { showResults && <SearchResultsPage keyword={keyword} /> }
    </div>);
}
