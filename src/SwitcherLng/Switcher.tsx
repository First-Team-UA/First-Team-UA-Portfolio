import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Select, { StylesConfig } from 'react-select';

interface OptionType {
  value: string;
  label: string;
}

const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();


  const storedLanguage = localStorage.getItem('i18nextLng');


  useEffect(() => {
    if (!storedLanguage) {
      i18n.changeLanguage('en');
      localStorage.setItem('i18nextLng', 'en');
    }
  }, [i18n, storedLanguage]);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    localStorage.setItem('i18nextLng', lng);
  };

  const customStyles: StylesConfig<OptionType, false> = {
    control: (provided) => ({
      ...provided,
      backgroundColor: 'transparent',
      color: '#DDD',
      border: 'none',
      width: '52px',
      marginRight: '60px',
      transition: '1s',
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isSelected ? 'orange' : 'none',
      color: state.isSelected ? '#DDD' : '#DDD',
      cursor: 'pointer',
      padding: '10px',
      transition: '1s',
      borderBottom: '1px solid orange',
      '&:hover': {
        backgroundColor: 'orange',
        transition: '1s',
        color: '#DDD',
      },
    }),
    singleValue: (provided) => ({
      ...provided,
      color: '#DDD',
      transition: '1s',
    }),
    menu: (provided) => ({
      ...provided,
      width: '52px',
      backgroundColor: 'black',
      padding: '0',
      borderRadius: '5px',
      marginTop: '2px',
      transition: '1s',
      border:'1px solid orange'
    }),
    menuList: (provided) => ({
      ...provided,
      padding: '0',

    }),
    dropdownIndicator: () => ({ display: 'none' }), 
    indicatorSeparator: () => ({ display: 'none' }), 
  };
  

  const languageOptions: OptionType[] = [
    { value: 'en', label: 'EN' },
    { value: 'ua', label: 'UA' },
  ];

  const defaultLanguage = languageOptions.find((option) => option.value === storedLanguage) || languageOptions[0];

  return (
    <div style={{ 
        width: '52px',
        marginRight: '60px',
        marginTop: '31px'
        }}>
      <Select
        options={languageOptions}
        defaultValue={defaultLanguage}
        onChange={(selectedOption) => changeLanguage(selectedOption!.value)}
        styles={customStyles}
      />
    </div>
  );
};

export default LanguageSwitcher;
