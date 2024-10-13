import { useDispatch } from 'react-redux';
import { changeFilter } from '../../redux/filtersSlice';
import css from './SearchBox.module.css';

export const SearchBox = () => {
  const dispatch = useDispatch();

  const handleChange = (evt) => {
    dispatch(changeFilter(evt.target.value));
  };

  return (
    <div className={css.searchbox}>
      <p className={css.searchbox_title}>Find contacts by name</p>
      <input type='text' className={css.searchbox_input} onChange={handleChange} />
    </div>
  );
};
