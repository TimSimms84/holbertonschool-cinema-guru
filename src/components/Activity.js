import './components.css';

const Activity = ({ username, action, title, list, date,}) => {
  return (
    <div className="activity">
      <span>{username} </span>
      <span>added </span>
      <span>{title} </span>
      <span>to watch later - {date}</span>
    </div>
  );
}

export default Activity;
