const content = {
    'en': {
        'col-1-title': 'About Me',
        'col-1-desc': 'Freelance Data Entry Expert and AI/ML Enthusiast. I focus on precision and automation.',
        'col-2-title': 'Services',
        'col-2-desc': 'Fast Data Entry, Web Research, Python Automation, and Predictive Modeling.',
        'col-3-title': 'Skills',
        'col-3-desc': 'Python, SQL, Excel, Pandas, Machine Learning, Data Cleaning.',
        'col-4-title': 'Contact',
        'col-4-desc': 'Email: your-email@gmail.com. Available for freelance projects worldwide.'
    },
    'ml': {
        'col-1-title': 'എന്നെക്കുറിച്ച്',
        'col-1-desc': 'ഞാൻ ഒരു ഫ്രീലാൻസ് ഡാറ്റാ എൻട്രി വിദഗ്ധനും AI/ML പഠിതാവുമാണ്. കൃത്യതയിലാണ് എന്റെ ശ്രദ്ധ.',
        'col-2-title': 'സേവനങ്ങൾ',
        'col-2-desc': 'ഡാറ്റാ എൻട്രി, വെബ് റിസർച്ച്, പൈത്തൺ ഓട്ടോമേഷൻ, മെഷീൻ ലേണിംഗ് മോഡലുകൾ.',
        'col-3-title': 'കഴിവുകൾ',
        'col-3-desc': 'പൈത്തൺ, എക്സൽ, ഡാറ്റാ അനാലിസിസ്, മെഷീൻ ലേണിംഗ്, പാണ്ഡാസ്.',
        'col-4-title': 'ബന്ധപ്പെടുക',
        'col-4-desc': 'ഇമെയിൽ: your-email@gmail.com. ഫ്രീലാൻസ് പ്രോജക്റ്റുകൾക്കായി ബന്ധപ്പെടാം.'
    },
    'hi': {
        'col-1-title': 'मेरे बारे में',
        'col-1-desc': 'मैं एक फ्रीलांस डेटा एंट्री विशेषज्ञ और AI/ML उत्साही हूं।',
        'col-2-title': 'सेवाएं',
        'col-2-desc': 'डेटा एंट्री, वेब रिसर्च, पायथन ऑटोमेशन और मशीन लर्निंग।',
        'col-3-title': 'कौशल',
        'col-3-desc': 'पायथन, एक्सेल, डेटा विश्लेषण, मशीन लर्निंग।',
        'col-4-title': 'संपर्क',
        'col-4-desc': 'ईमेल: your-email@gmail.com. परियोजनाओं के लिए संपर्क करें।'
    },
    'ta': {
        'col-1-title': 'என்னை பற்றி',
        'col-1-desc': 'நான் ஒரு ஃப்ரீலான்ஸ் தரவு உள்ளீடு நிபுணர் மற்றும் AI/ML ஆர்வலர்.',
        'col-2-title': 'சேவைகள்',
        'col-2-desc': 'தரவு உள்ளீடு, வலை ஆராய்ச்சி, பைதான் ஆட்டோமேஷன், மெஷின் லேர்னிங்.',
        'col-3-title': 'திறன்கள்',
        'col-3-desc': 'பைதான், எக்செல், தரவு பகுப்பாய்வு, மெஷின் லேர்னிங்.',
        'col-4-title': 'தொடர்பு',
        'col-4-desc': 'மின்னஞ்சல்: your-email@gmail.com. திட்டங்களுக்கு என்னை தொடர்பு கொள்ளவும்.'
    }
};

window.changeLang = function(lang) {
    const langData = content[lang];
    if (!langData) return;

    for (let id in langData) {
        const element = document.getElementById(id);
        if (element) {
            element.innerText = langData[id];
        }
    }
    localStorage.setItem('preferredLang', lang);
};

window.onload = () => {
    const savedLang = localStorage.getItem('preferredLang') || 'en';
    window.changeLang(savedLang);
};
