import './general.css';

export default function SelectInput({ label, options, className, value, setValue }) {
  return (
    <div className={`select-container ${className}`}>
      <label>{label}
        <select value={value} onChange={(e) => setValue(e.target.value)}>
          {options.map((option, index) => {
            return <option key={index} value={option.value}>{option.label}</option>
          })}
        </select>
      </label>
    </div>

  )
}
