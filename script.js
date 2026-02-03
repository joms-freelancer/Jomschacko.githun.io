

const content = {
	'en': {
		'hero-title': 'Hi, I am Joms',
		'hero-desc': 'Data Entry Expert & AI/ML Enthusiast',
		'col-1-title': 'About Me',
		'col-1-desc': 'A dedicated freelancer specialized in precision data management and exploring the world of Artificial Intelligence.',
		'col-2-title': 'Services',
		'col-2-desc': 'Offering professional Data Entry, Web Research, Python scripting, and basic Machine Learning models.',
		'col-3-title': 'Skills',
		'col-3-desc': 'Expertise in Microsoft Excel, Python, SQL, Data Cleaning, and Predictive Analytics.',
		'col-4-title': 'Contact',
		'col-4-desc': 'Available for freelance projects. Email: jomschacko@example.com (Replace with yours)'
	},
	'ml': {
		'hero-title': 'ഹലോ, ഞാൻ ജോംസ്',
		'hero-desc': 'ഡാറ്റാ എൻട്രി വിദഗ്ധനും AI/ML പഠിതാവുമാണ്',
		'col-1-title': 'എന്നെക്കുറിച്ച്',
		'col-1-desc': 'കൃത്യതയാർന്ന ഡാറ്റാ മാനേജ്‌മെന്റിലും ആർട്ടിഫിഷ്യൽ ഇന്റലിജൻസിലും താല്പര്യമുള്ള ഒരു ഫ്രീലാൻസറാണ് ഞാൻ.',
		'col-2-title': 'സേവനങ്ങൾ',
		'col-2-desc': 'ഡാറ്റാ എൻട്രി, വെബ് റിസർച്ച്, പൈത്തൺ ഓട്ടോമേഷൻ, മെഷീൻ ലേണിംഗ് എന്നിവ ചെയ്തു നൽകുന്നു.',
		'col-3-title': 'കഴിവുകൾ',
		'col-3-desc': 'പൈത്തൺ, എക്സൽ, ഡാറ്റാ അനാലിസിസ്, മെഷീൻ ലേണിംഗ് എന്നിവയിൽ പ്രാവീണ്യമുണ്ട്.',
		'col-4-title': 'ബന്ധപ്പെടുക',
		'col-4-desc': 'പ്രോജക്റ്റുകൾക്കായി എന്നെ ബന്ധപ്പെടാം. ഇമെയിൽ: jomschacko@example.com'
	},
	'hi': {
		'hero-title': 'नमस्ते, मैं जोम्स हूँ',
		'hero-desc': 'डेटा एंट्री विशेषज्ञ और AI/ML उत्साही',
		'col-1-title': 'मेरे बारे में',
		'col-1-desc': 'मैं डेटा प्रबंधन और आर्टिफिशियल इंटेलिजेंस की दुनिया में काम करने वाला एक फ्रीलांसर हूं।',
		'col-2-title': 'सेवाएं',
		'col-2-desc': 'डेटा एंट्री, वेब रिसर्च और पायथन ऑटोमेशन सेवाएं उपलब्ध हैं।',
		'col-3-title': 'कौशल',
		'col-3-desc': 'पायथन, एक्सेल, डेटा विश्लेषण और मशीन लर्निंग में निपुण।',
		'col-4-title': 'संपर्क',
		'col-4-desc': 'परियोजनाओं के लिए संपर्क करें: jomschacko@example.com'
	},
	'ta': {
		'hero-title': 'வணக்கம், நான் ஜோம்ஸ்',
		'hero-desc': 'தரவு உள்ளீடு நிபுணர் மற்றும் AI/ML ஆர்வலர்',
		'col-1-title': 'என்னை பற்றி',
		'col-1-desc': 'துல்லியமான தரவு மேலாண்மை மற்றும் செயற்கை நுண்ணறிவு துறையில் ஆர்வமுள்ள ஒரு ஃப்ரீலான்ஸர்.',
		'col-2-title': 'சேவைகள்',
		'col-2-desc': 'தரவு உள்ளீடு, வலை ஆராய்ச்சி மற்றும் பைதான் ஆட்டோமேஷன் சேவைகளை வழங்குகிறேன்.',
		'col-3-title': 'திறன்கள்',
		'col-3-desc': 'பைதான், எக்செல் மற்றும் தரவு பகுப்பாய்வு ஆகியவற்றில் நிபுணத்துவம் பெற்றவர்.',
		'col-4-title': 'தொடர்பு',
		'col-4-desc': 'திட்டங்களுக்கு என்னை தொடர்பு கொள்ளவும்: jomschacko@example.com'
	}
};
window.changeLang = function(lang) {
	const langData = content[lang];
	if (langData) {
		for (let id in langData) {
			const element = document.getElementById(id);
			if (element) {
				element.classList.add('fade-in'); // അനിമേഷൻ ആഡ് ചെയ്യുന്നു
				element.innerText = langData[id];
				// അനിമേഷൻ കഴിഞ്ഞാൽ ക്ലാസ് മാറ്റുന്നു
				setTimeout(() => element.classList.remove('fade-in'), 500);
			}
		}
	}
	localStorage.setItem('preferredLang', lang);
};
// പേജ് ലോഡ് ആകുമ്പോൾ
document.addEventListener('DOMContentLoaded', () => {
	const savedLang = localStorage.getItem('preferredLang') || 'en';
	window.changeLang(savedLang);
});
// Chatbot Functions
function toggleChat() {
	const chat = document.getElementById('chat-window');
	chat.classList.toggle('hidden');
}

window.sendMessage = function() {
    const input = document.getElementById('chat-input');
    const messages = document.getElementById('chat-messages');
    
    if (!input || !messages || input.value.trim() === "") return;

    const userText = input.value.trim();
    messages.innerHTML += `<div class="bg-blue-500/30 p-2 rounded-lg text-right ml-10 mb-2">${userText}</div>`;
    
    // മലയാളം വാക്കുകൾക്ക് lowerCase ആവശ്യമില്ലെങ്കിലും ഇംഗ്ലീഷിന് ഇത് വേണം
    const lowerText = userText.toLowerCase();
    input.value = "";

    setTimeout(() => {
        let reply = "I'm still learning! / എനിക്ക് ഇതിനെക്കുറിച്ച് കൂടുതൽ അറിയില്ല. ജോംസിനെ ബന്ധപ്പെടുക.";

        // മലയാളം വാക്കുകൾ നേരിട്ട് ഇവിടെ നൽകുന്നു
        if (lowerText.includes("ഹലോ") || lowerText.includes("നമസ്കാരം") || lowerText.includes("hi") || lowerText.includes("hello")) {
            reply = "നമസ്കാരം! എനിക്ക് എങ്ങനെ സഹായിക്കാനാകും? / Hi, how can I help you?";
        } 
        else if (lowerText.includes("സേവനം") || lowerText.includes("services") || lowerText.includes("ജോലി")) {
            reply = "ഡാറ്റാ എൻട്രി, വെബ് റിസർച്ച്, പൈത്തൺ പ്രോഗ്രാമിംഗ് എന്നിവ ജോംസ് ചെയ്തു നൽകുന്നു.";
        } 
        else if (lowerText.includes("വിദ്യാഭ്യാസം") || lowerText.includes("പഠനം") || lowerText.includes("skills")) {
            reply = "പൈത്തൺ, മെഷീൻ ലേണിംഗ്, എക്സൽ എന്നിവയിൽ ജോംസ് വിദഗ്ധനാണ്.";
        }
        else if (lowerText.includes("നന്ദി") || lowerText.includes("thanks")) {
            reply = "നന്ദി! വീണ്ടും കാണാം.";
        }

        messages.innerHTML += `<div class="bg-white/10 p-2 rounded-lg mr-10 mb-2 border border-white/5">${reply}</div>`;
        messages.scrollTop = messages.scrollHeight;
    }, 600);
};
