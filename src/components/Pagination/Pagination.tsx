import Button from 'components/Button/Button';
import classes from './Pagination.module.scss';

type PaginationProps = {
  next: () => void;
  prev: () => void;
  page: number;
  isLastPage: boolean;
};

const Pagination: React.FC<PaginationProps> = ({ next, prev, page, isLastPage }) => {
  return (
    <section className={classes.wrapper}>
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

export default Pagination;
