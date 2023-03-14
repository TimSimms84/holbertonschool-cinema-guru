import './general.css';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function SearchBar({ title, setTitle, className }) {
  return (
    <div className="search-bar">
      <FontAwesomeIcon icon={faSearch} className="search-icon" />
      <input
        type="text"
        placeholder={title}
        onChange={(event) => setTitle(event.target.value)}
        className={`search-input ${className}`}
      />
    </div>
  );
};
