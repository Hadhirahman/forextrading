import React, { useEffect } from 'react';
import logo from '../../assets/img/tradefxfund_logo.png';

const Header = () => {
  useEffect(() => {
    const addGoogleTranslateScript = () => {
      const script = document.createElement('script');
      script.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      script.type = "text/javascript";
      document.body.appendChild(script);
    };

    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement({
        pageLanguage: 'en',
        autoDisplay: true,
      }, 'google_translate_element');
    };

    addGoogleTranslateScript();
  }, []);

  const translateLanguage = (language, countryCode) => {
    const translateDropdown = document.querySelector('.goog-te-combo');
    if (translateDropdown) {
      translateDropdown.value = language;
      translateDropdown.dispatchEvent(new Event('change'));

      document.getElementById("selected-flag").src = `https://cdn.jsdelivr.net/npm/flag-icon-css/flags/4x3/${countryCode}.svg`;
      document.getElementById("selected-language").innerText = document.querySelector(
        `a[onClick="translateLanguage('${language}', '${countryCode}')"]`
      )?.innerText || '';
    }
  };

  return (
    <div className="nav-bg sticky-top">
      <div className="container">
        <nav id="navbar-area" className="navbar navbar-expand-lg navbar-light py-3">
          <a className="navbar-brand d-inline-flex align-items-center me-0 py-0" href="./index">
            <img className="logo-img" src={logo} alt="TTF" />
            <span className="text-primary fw-bold ms-3"></span>
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <a className="nav-link nav-active" href="./index">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="./affiliated.php">Affiliate Program</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="./merchandise.php">Merchandise</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="./about.php">About Us</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="./faq.php">Faq</a>
              </li>
            </ul>

            <div className="d-flex align-items-center justify-content-end">
              <div id="lang" className="lang">
                <div id="google_translate_element" style={{ display: 'none' }}></div>

                <div className="custom-dropdown">
                  <button className="dropbtn">
                    <img id="selected-flag" src="https://cdn.jsdelivr.net/npm/flag-icon-css/flags/4x3/us.svg"
                      alt="flag" style={{ width: '20px', height: '15px' }} />
                    <span id="selected-language"></span>
                    <i className="fa fa-caret-down" style={{ fontSize: '14px', marginLeft: '5px' }}></i>
                  </button>
                  <div className="dropdown-content">
                    {[
                      { lang: 'en', code: 'us', label: 'English' },
                      { lang: 'ar', code: 'sa', label: 'Arabic' },
                      { lang: 'zh-CN', code: 'cn', label: 'Chinese (Simplified)' },
                      { lang: 'fr', code: 'fr', label: 'French' },
                      { lang: 'hi', code: 'in', label: 'Hindi' },
                      { lang: 'ms', code: 'my', label: 'Malay' },
                      { lang: 'ru', code: 'ru', label: 'Russian' },
                      { lang: 'tr', code: 'tr', label: 'Turkish' },
                      { lang: 'th', code: 'th', label: 'Thai' },
                    ].map(({ lang, code, label }) => (
                      <a key={lang} href="#" onClick={() => translateLanguage(lang, code)}>
                        <img src={`https://cdn.jsdelivr.net/npm/flag-icon-css/flags/4x3/${code}.svg`} alt={`${code} Flag`}
                          style={{ width: '20px', height: '15px' }} /> {label}
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              <a target="_blank" href="https://app.tradefxfunds.com/login.php" className="card1 btn btn-primary me-2 ml-1">Log In</a>
              <a target="_blank" href="https://app.tradefxfunds.com/register/" className="btn btn-secondary me-2 ml-1">Sign Up</a>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;
