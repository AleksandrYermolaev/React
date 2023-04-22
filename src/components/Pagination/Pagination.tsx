import Button from 'components/Button/Button';
import classes from './Pagination.module.scss';
import React from 'react';

type PaginationProps = {
  next: () => void;
  prev: () => void;
  page: number;
  isLastPage: boolean;
};

const Pagination: React.FC<PaginationProps> = ({ next, prev, page, isLastPage }) => {
  return (
    <section className={classes.wrapper} data-testId="pagination">
      <Button onClick={prev} disabled={page === 1}>
        ← Prev
      </Button>
      {page}
      <Button onClick={next} disabled={isLastPage}>
        Next →
      </Button>
    </section>
  );
};

export default React.memo(Pagination);
