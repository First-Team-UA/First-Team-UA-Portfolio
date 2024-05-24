import React from 'react';
import { useTranslation } from 'react-i18next';
import Select, { StylesConfig } from 'react-select';

interface OptionType {
  value: string;
  label: string;
}

const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  const customStyles: StylesConfig<OptionType, false> = {
    control: (provided) => ({
      ...provided,
      backgroundColor: 'black',
      color: 'orange',
      border: '1px solid orange',
      borderRadius: '5px',
      width: '150px',
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isSelected ? 'orange' : 'black',
      color: state.isSelected ? 'black' : 'orange',
      cursor: 'pointer',
      padding: '10px',
    }),
    singleValue: (provided) => ({
      ...provided,
      color: 'orange',
    }),
    menu: (provided) => ({
      ...provided,
      backgroundColor: 'black',
      padding: '0',
      borderRadius: '5px',
      marginTop: '2px',
    }),
    menuList: (provided) => ({
      ...provided,
      padding: '0',
    }),
  };

  const languageOptions: OptionType[] = [
    { value: 'en', label: 'English' },
    { value: 'ua', label: 'Українська' },
  ];

  return (
    <div style={{ width: '200px' }}>
      <Select
        options={languageOptions}
        defaultValue={languageOptions.find((option) => option.value === i18n.language)}
        onChange={(selectedOption) => changeLanguage(selectedOption!.value)}
        styles={customStyles}
      />
    </div>
  );
};

export default LanguageSwitcher;
