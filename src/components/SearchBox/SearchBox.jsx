import PropTypes from 'prop-types';
import css from './SearchBox.module.css';

const SearchBox = ({ filterValue = '', setFilter }) => {

    return (
        <div className={css.searchBar}>
            <p className={css.searchHint}>Find contacts by name</p>
            <input className={css.searchInput} type="text" value={filterValue} onChange={(evt) => setFilter(evt.target.value)} />
        </div>
  )
}

SearchBox.propTypes = {
    filterValue: PropTypes.string,
    setFilter: PropTypes.func.isRequired,
}

export default SearchBox