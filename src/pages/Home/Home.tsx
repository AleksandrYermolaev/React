import { useEffect, useState } from 'react';
import Search from 'components/inputs/Search/Search';
import Button from 'components/Button/Button';
import HomeGrid from 'components/HomeGrid/HomeGrid';
import classes from './Home.module.scss';
import getInitialState from 'helpers/getHomeInitialState';
import { CharacterResponse, CharacterType } from 'types/types';
import { useSearchParams } from 'react-router-dom';
import Pagination from 'components/Pagination/Pagination';
import getUrlSearchParams from 'helpers/getUrlSearchParams';

const BASE_URL = 'https://rickandmortyapi.com/api';
const CHARACTER_ENDPOINT = '/character';

const Home: React.FC = () => {
  const [searchValue, setSearchValue] = useState(getInitialState());
  const [searchParam, setSearchParam] = useSearchParams();
  const [apiData, setApiData] = useState<Array<CharacterType>>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [isLastPage, setIsLastPage] = useState<boolean>(false);

  const searchQuery = searchParam.get('name');

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>): void =>
    setSearchValue(event.target.value);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    localStorage.setItem('search', searchValue);
    if (searchValue) {
      setSearchParam({ search: searchValue });
      setCurrentPage(1);
    } else {
      setSearchParam({});
    }
  };

  useEffect(() => {
    (async () => {
      const response = await fetch(
        `${BASE_URL}${CHARACTER_ENDPOINT}${getUrlSearchParams(searchQuery, currentPage)}`
      );
      const { info, results }: CharacterResponse = await response.json();
      if (results) {
        setApiData(results);
        setIsLastPage(!info.next);
      } else {
        setApiData([]);
      }
    })();
  }, [searchQuery, currentPage]);

  useEffect(() => {
    getInitialState() && setSearchParam({ name: getInitialState() });
  }, [setSearchParam]);

  return (
    <div className={classes.wrapper}>
      <form className={classes.form} onSubmit={handleSubmit}>
        <Search value={searchValue} setValue={handleInput} placeholder="search..." />
        <Button type="submit">Search</Button>
      </form>
      <HomeGrid data={apiData} />
      {apiData.length ? (
        <Pagination
          next={() => setCurrentPage((prevPage) => prevPage + 1)}
          prev={() => setCurrentPage((prevPage) => prevPage - 1)}
          page={currentPage}
          isLastPage={isLastPage}
        />
      ) : null}
    </div>
  );
};

export default Home;
