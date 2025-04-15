import Select, { components } from 'react-select';
import { Controller } from 'react-hook-form';
import sprite from '../../assets/sprite.svg';

// 🔹 Кастомна іконка пошуку
const DropdownIndicator = props => (
  <components.DropdownIndicator {...props}>
    <svg className='fill-transparent stroke-text-dark' width={18} height={18}>
      <use href={`${sprite}#icon-search`} />
    </svg>
  </components.DropdownIndicator>
);

// 🔹 Кастомний компонент опції з підсвіченням тексту
const CustomOption = props => {
  const { data, selectProps } = props;
  const inputValue = selectProps.inputValue.toLowerCase();
  const label = data.label;
  const index = label.toLowerCase().indexOf(inputValue);

  let content;
  if (index !== -1 && inputValue.length > 0) {
    content = (
      <>
        {label.slice(0, index)}
        <span className='text-text-dark font-bold'>
          {label.slice(index, index + inputValue.length)}
        </span>
        {label.slice(index + inputValue.length)}
      </>
    );
  } else {
    content = label;
  }

  return <components.Option {...props}>{content}</components.Option>;
};

// 🔹 Стилі
const customStyles = {
  control: (base, { isFocused }) => ({
    ...base,

    borderRadius: '30px',
    backgroundColor: 'var(--color-text-white)',
    border: isFocused
      ? '1px solid var(--color-brand)'
      : '1px solid transparent',
    borderColor: isFocused ? 'var(--color-brand)' : 'none',
    padding: '12px 12px',
    boxShadow: 'none',
    fontSize: '14px',
    boxSizing: 'border-box',
    outline: 'none',
    ':hover': {
      border: '1px solid var(--color-brand)', // для hover
    },
  }),
  input: base => ({
    ...base,
    margin: 0,
    padding: 0,
  }),
  indicatorsContainer: base => ({
    ...base,
    padding: 0,
  }),
  indicatorSeparator: () => ({
    display: 'none',
  }),
  dropdownIndicator: base => ({
    ...base,
    padding: 0,
  }),
  option: (base, { isFocused }) => ({
    ...base,
    backgroundColor: 'var(--color-text-white)',
    color: isFocused ? 'var(--color-brand)' : 'var(--color-text-gray-dark)',
    fontSize: '14px',
    borderRadius: '10px',
    padding: '10px 12px',
  }),
  menu: base => ({
    ...base,
    borderRadius: '10px',
    marginTop: 4,
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
  }),
  valueContainer: base => ({
    ...base,
    paddingLeft: '0',
  }),
  placeholder: base => ({
    ...base,
    color: 'var(--color-text-dark)',
  }),
  menuList: base => ({
    ...base,
    scrollbarWidth: 'thin',
    '::-webkit-scrollbar': {
      background: 'var(--error-color)',
      width: '10px',
    },
    '::-webkit-scrollbar-thumb': {
      background: 'var(--error-color)',
      borderRadius: '10px',
    },
  }),
};

// 🔹 Основний компонент
export const CitySelect = ({
  name,
  control,
  cities,
  placeholder = 'Location',
}) => {
  const options = cities.map(city => ({
    value: city._id,
    label: `${city.cityEn}, ${city.stateEn}`,
  }));

  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <Select
          {...field}
          options={options}
          placeholder={placeholder}
          isSearchable
          components={{ DropdownIndicator, Option: CustomOption }}
          styles={customStyles}
        />
      )}
    />
  );
};
