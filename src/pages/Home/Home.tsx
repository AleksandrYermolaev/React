import { useCallback, useMemo, useState } from 'react';
import classes from './Home.module.scss';
import Search from 'components/inputs/Search/Search';
import Button from 'components/Button/Button';
import HomeGrid from 'components/HomeGrid/HomeGrid';
import Pagination from 'components/Pagination/Pagination';
import { useAppDispatch, useAppSelector } from 'hooks/stateHooks';
import { selectSearch, setSearchQuery } from 'store/searchQuerySlice';
import { useGetCharactersQuery } from 'services/apiService';
import { CharacterType, InfoType } from 'types/types';

const Home: React.FC = () => {
  const searchValue = useAppSelector(selectSearch);
  const dispatch = useAppDispatch();

  const [currentPage, setCurrentPage] = useState<number>(1);
  const [inputValue, setInputValue] = useState<string>(searchValue);

  const { data, isFetching, isSuccess } = useGetCharactersQuery({
    search: searchValue,
    page: currentPage,
  });

  const info: InfoType = useMemo(() => {
    if (isSuccess) {
      return data.info;
    }
    return {
      count: 0,
      pages: 0,
      next: null,
      prev: null,
    };
  }, [isSuccess, data?.info]);

  const characters: Array<CharacterType> = useMemo(() => {
    if (isSuccess) {
      return data.results;
    }
    return [];
  }, [isSuccess, data?.results]);

  const isLastPage = !info.next;

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setCurrentPage(1);
    dispatch(setSearchQuery(inputValue));
  };

  const nextPage = useCallback(() => {
    setCurrentPage((prevPage) => prevPage + 1);
  }, []);

  const prevPage = useCallback(() => {
    setCurrentPage((prevPage) => prevPage - 1);
  }, []);

  return (
    <div className={classes.wrapper}>
      <form className={classes.form} onSubmit={handleSubmit}>
        <Search value={inputValue} setValue={handleInput} placeholder="search..." />
        <Button type="submit">Search</Button>
      </form>
      <HomeGrid data={characters} isLoaded={!isFetching} />
      {characters.length ? (
        <Pagination next={nextPage} prev={prevPage} page={currentPage} isLastPage={isLastPage} />
      ) : null}
    </div>
  );
};

export default Home;
