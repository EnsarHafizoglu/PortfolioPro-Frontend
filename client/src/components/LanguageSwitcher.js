import React from 'react';
import { useTranslation } from 'react-i18next';

function LanguageSwitcher() {
  const { i18n } = useTranslation();

  return (
    <div style={{ margin: '1rem 0' }}>
      <button onClick={() => i18n.changeLanguage('tr')}>Türkçe</button>
      <button onClick={() => i18n.changeLanguage('en')}>English</button>
    </div>
  );
}

export default LanguageSwitcher;