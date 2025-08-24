// Comprehensive Services Data with Detailed Information including Muhurat & Lagn
const servicesData = {
    ganeshPuja: {
        id: 'ganesh-puja',
        title: {
            hindi: 'गणेश पूजा / गणेश चतुर्थी',
            english: 'Ganesh Puja / Ganesh Chaturthi'
        },
        deity: {
            hindi: 'भगवान गणेश',
            english: 'Lord Ganesha'
        },
        description: {
            hindi: 'भगवान गणेश को \'विघ्नहर्ता\' (बाधाओं को दूर करने वाला) और \'प्रथम पूज्य\' माना जाता है। किसी भी नए कार्य के शुभारंभ से पहले उनकी पूजा अनिवार्य है।',
            english: 'Lord Ganesha is considered \'Vighnaharta\' (remover of obstacles) and \'Pratham Pujya\' (first worshipped). His worship is essential before starting any new endeavor.'
        },
        significance: {
            hindi: 'गणेश पुराण और मुद्गल पुराण उन्हें समर्पित प्रमुख ग्रंथ हैं। गणेश चतुर्थी उनके जन्म का 10 दिवसीय उत्सव है।',
            english: 'Ganesh Purana and Mudgal Purana are the main texts dedicated to him. Ganesh Chaturthi is a 10-day festival celebrating his birth.'
        },
        benefits: {
            hindi: 'बाधाओं का निवारण, ज्ञान और बुद्धि की प्राप्ति, किसी भी कार्य में सफलता, घर और व्यवसाय में शुभता।',
            english: 'Removal of obstacles, attainment of knowledge and wisdom, success in any work, auspiciousness in home and business.'
        },
        detailedBenefits: {
            hindi: 'शारीरिक लाभ: स्वास्थ्य में सुधार, रोगों से मुक्ति, शक्ति की प्राप्ति। मानसिक लाभ: एकाग्रता, बुद्धि, स्मृति में वृद्धि। आध्यात्मिक लाभ: आत्मविश्वास, आंतरिक शांति, आध्यात्मिक उन्नति।',
            english: 'Physical Benefits: Improved health, freedom from diseases, gain of strength. Mental Benefits: Increased concentration, intelligence, memory. Spiritual Benefits: Self-confidence, inner peace, spiritual progress.'
        },
        procedure: {
            hindi: [
                '1. स्वच्छता और तैयारी: पूजा स्थल की शुद्धता और गंगाजल से शुद्धीकरण',
                '2. कलश स्थापना: मंगल कलश स्थापना और प्राण प्रतिष्ठा',
                '3. गणेश आवाहन: "गणपति बप्पा मोरया" के उद्घोष के साथ गणेश जी का आह्वान',
                '4. षोडशोपचार पूजा: 16 प्रकार की उपचारों से पूजा (आसन, पाद्य, अर्घ्य, आचमन, स्नान, वस्त्र, उपवीत, गंध, पुष्प, धूप, दीप, नैवेद्य, आचमन, ताम्बूल, दक्षिणा, आरती)',
                '5. मंत्र जाप: "ओम गं गणपतये नमः" का 108 बार जाप',
                '6. मोदक भोग: भगवान गणेश के प्रिय मोदक का भोग',
                '7. आरती: गणेश आरती के साथ दीप प्रदीप्त करना',
                '8. प्रसाद वितरण: सभी श्रद्धालुओं में प्रसाद वितरण',
                '9. विसर्जन (वैकल्पिक): यदि मूर्ति की स्थापना की गई हो तो उचित विसर्जन'
            ],
            english: [
                '1. Cleanliness & Preparation: Purification of worship area with Ganga water',
                '2. Kalash Installation: Sacred pot establishment with prana pratishtha',
                '3. Ganesh Invocation: Calling Lord Ganesha with "Ganpati Bappa Morya" chants',
                '4. Shodashopachara Puja: 16 types of offerings (asana, padya, arghya, achamana, snana, vastra, upavita, gandha, pushpa, dhupa, dipa, naivedya, achamana, tambula, dakshina, aarti)',
                '5. Mantra Chanting: 108 repetitions of "Om Gam Ganapataye Namaha"',
                '6. Modak Offering: Offering the favorite sweet modak to Lord Ganesha',
                '7. Aarti: Lighting of lamps with Ganesha aarti',
                '8. Prasad Distribution: Distribution of blessed food to all devotees',
                '9. Visarjan (Optional): Proper immersion if an idol has been installed'
            ]
        },
        duration: {
            hindi: '2-3 घंटे',
            english: '2-3 hours'
        },
        materials: {
            hindi: 'मोदक, दूर्वा, बिल्व पत्र, फूल, फल, मिठाई, कुमकुम, चंदन, अगरबत्ती, दीपक',
            english: 'Modak, Durva grass, Bilva leaves, flowers, fruits, sweets, kumkum, sandalwood, incense, diya'
        },
        bestTime: {
            hindi: 'गणेश चतुर्थी, मंगलवार, शुक्ल पक्ष की चतुर्थी',
            english: 'Ganesh Chaturthi, Tuesday, Shukla Paksha Chaturthi'
        },
        muhurat: {
            hindi: 'प्रातः 6:00 से 10:00 बजे (सूर्योदय के बाद), मध्याह्न 12:00 से 2:00 बजे, सायं 4:00 से 6:00 बजे',
            english: 'Morning 6:00 AM to 10:00 AM (after sunrise), Noon 12:00 PM to 2:00 PM, Evening 4:00 PM to 6:00 PM'
        },
        lagn: {
            hindi: 'मेष, वृषभ, मिथुन, कर्क, सिंह, कन्या, तुला, वृश्चिक, धनु, मकर, कुंभ, मीन राशि में शुभ',
            english: 'Aries, Taurus, Gemini, Cancer, Leo, Virgo, Libra, Scorpio, Sagittarius, Capricorn, Aquarius, Pisces signs are auspicious'
        },
        scientificBasis: {
            hindi: 'गणेश पूजा से मस्तिष्क में सकारात्मक ऊर्जा का प्रवाह होता है, जो तनाव कम करने और मानसिक स्पष्टता बढ़ाने में सहायक है।',
            english: 'Ganesh Puja creates positive energy flow in the brain, which helps reduce stress and increase mental clarity.'
        },
        specialFeatures: {
            hindi: [
                'प्राणप्रतिष्ठित गणेश मूर्ति की स्थापना',
                'प्रामाणिक वैदिक मंत्रों का उच्चारण',
                'विशेष गणेश स्तोत्र और चालीसा पाठ',
                'मोदक और लड्डू का विशेष प्रसाद',
                '21 या 108 दुर्वा दल अर्पण',
                'पारंपरिक गणेश आरती'
            ],
            english: [
                'Installation of consecrated Ganesha idol',
                'Authentic Vedic mantra recitation',
                'Special Ganesha stotra and chalisa reading',
                'Special prasadam of modak and laddu',
                'Offering of 21 or 108 durva grass blades',
                'Traditional Ganesha aarti'
            ]
        },
        spiritualSignificance: {
            hindi: 'गणेश जी को "विघ्नहर्ता" कहा जाता है क्योंकि वे सभी बाधाओं का नाश करते हैं। वे बुद्धि और विवेक के स्वामी हैं। उनकी उपासना से व्यक्ति के जीवन में सकारात्मक परिवर्तन आता है और आध्यात्मिक उन्नति होती है।',
            english: 'Lord Ganesha is called "Vighnaharta" as he removes all obstacles. He is the lord of wisdom and intelligence. His worship brings positive transformation in life and spiritual advancement.'
        },
        preparationRequired: {
            hindi: [
                'पूजा से एक दिन पहले व्रत रखना (वैकल्पिक)',
                'पूजा स्थल की सफाई और सजावट',
                'आवश्यक पूजा सामग्री की व्यवस्था',
                'मन की शुद्धता और सकारात्मक भावना',
                'पूजा के लिए उपयुक्त वस्त्र धारण'
            ],
            english: [
                'Optional fasting one day before puja',
                'Cleaning and decoration of worship area',
                'Arrangement of required puja materials',
                'Mental purity and positive mindset',
                'Wearing appropriate attire for worship'
            ]
        },
        postPujaGuidance: {
            hindi: [
                'प्रसाद का सेवन पवित्र भाव से करें',
                'गणेश मंत्र का नियमित जाप करते रहें',
                'सद्कर्मों में लगे रहें',
                'दान-पुण्य का कार्य करें',
                'गणेश चतुर्थी का व्रत रखें'
            ],
            english: [
                'Consume prasadam with devotion',
                'Continue regular chanting of Ganesha mantras',
                'Engage in good deeds',
                'Perform charitable activities',
                'Observe Ganesha Chaturthi fast'
            ]
        }
    },

    lakshmiPujan: {
        id: 'lakshmi-pujan',
        title: {
            hindi: 'लक्ष्मी पूजा (दीपावली)',
            english: 'Lakshmi Puja (Diwali)'
        },
        deity: {
            hindi: 'देवी लक्ष्मी',
            english: 'Goddess Lakshmi'
        },
        description: {
            hindi: 'देवी लक्ष्मी धन, समृद्धि, सौभाग्य और ऐश्वर्य की अधिष्ठात्री देवी हैं। दीपावली, जो अंधकार पर प्रकाश की विजय का प्रतीक है, पर उनकी पूजा का विशेष महत्व है।',
            english: 'Goddess Lakshmi is the presiding deity of wealth, prosperity, fortune, and opulence. Her worship during Diwali, which symbolizes the victory of light over darkness, holds special significance.'
        },
        significance: {
            hindi: 'पौराणिक कथाओं के अनुसार, समुद्र मंथन के दौरान उनका प्राकट्य हुआ था। ऐसा माना जाता है कि वे स्वच्छ और प्रकाशित घरों में प्रवेश कर आशीर्वाद देती हैं।',
            english: 'According to mythology, she appeared during the churning of the ocean. It is believed that she enters clean and illuminated homes to give blessings.'
        },
        benefits: {
            hindi: 'धन और समृद्धि में वृद्धि, वित्तीय स्थिरता, घर में सुख-शांति, व्यावसायिक सफलता।',
            english: 'Increase in wealth and prosperity, financial stability, peace and happiness at home, business success.'
        },
        detailedBenefits: {
            hindi: 'शारीरिक लाभ: स्वास्थ्य में सुधार, ऊर्जा का संचार। मानसिक लाभ: मानसिक शांति, सकारात्मक सोच। आध्यात्मिक लाभ: आंतरिक संतुष्टि, आध्यात्मिक विकास।',
            english: 'Physical Benefits: Improved health, energy circulation. Mental Benefits: Mental peace, positive thinking. Spiritual Benefits: Inner satisfaction, spiritual development.'
        },
        procedure: {
            hindi: 'लक्ष्मी पूजा में कलश स्थापना, लक्ष्मी आवाहन, षोडशोपचार पूजा, सोने का सिक्का नैवेद्य, दीपावली आरती और प्रसाद वितरण शामिल है।',
            english: 'Lakshmi Puja includes Kalash establishment, Lakshmi invocation, Shodashopachara puja, gold coin offering, Diwali Aarti and prasad distribution.'
        },
        duration: {
            hindi: '3-4 घंटे',
            english: '3-4 hours'
        },
        materials: {
            hindi: 'सोने का सिक्का, कमल के फूल, दीपक, मिठाई, फल, कुमकुम, चंदन, अगरबत्ती, रोली',
            english: 'Gold coin, lotus flowers, diyas, sweets, fruits, kumkum, sandalwood, incense, roli'
        },
        bestTime: {
            hindi: 'दीपावली, शुक्रवार, पूर्णिमा',
            english: 'Diwali, Friday, Purnima'
        },
        muhurat: {
            hindi: 'सूर्यास्त के 2 घंटे बाद से मध्यरात्रि तक, विशेष रूप से पूजा मुहूर्त में',
            english: '2 hours after sunset until midnight, especially during puja muhurat'
        },
        lagn: {
            hindi: 'कर्क, सिंह, कन्या, तुला, वृश्चिक, धनु राशि में विशेष शुभ',
            english: 'Cancer, Leo, Virgo, Libra, Scorpio, Sagittarius signs are especially auspicious'
        },
        scientificBasis: {
            hindi: 'दीपावली पर घरों को साफ करने और दीप जलाने से वातावरण शुद्ध होता है और सकारात्मक ऊर्जा का प्रवाह होता है।',
            english: 'Cleaning homes and lighting lamps on Diwali purifies the environment and creates positive energy flow.'
        }
    },

    satyanarayanVrat: {
        id: 'satyanarayan-vrat',
        title: {
            hindi: 'श्री सत्यनारायण पूजा',
            english: 'Shri Satyanarayan Puja'
        },
        deity: {
            hindi: 'भगवान विष्णु (सत्यनारायण स्वरूप)',
            english: 'Lord Vishnu (Satyanarayan form)'
        },
        description: {
            hindi: 'यह भगवान विष्णु के \'सत्य\' स्वरूप की पूजा है। इसका शास्त्रीय आधार स्कंद पुराण और भविष्य पुराण में मिलता है।',
            english: 'This is the worship of Lord Vishnu in his \'Satya\' form. Its scriptural basis is found in Skanda Purana and Bhavishya Purana.'
        },
        significance: {
            hindi: 'कथाओं के माध्यम से सत्य और निष्ठा के महत्व पर बल दिया गया है। यह पूजा पूर्णिमा या किसी भी शुभ अवसर पर की जाती है।',
            english: 'Through stories, emphasis is placed on the importance of truth and devotion. This puja is performed on Purnima or any auspicious occasion.'
        },
        benefits: {
            hindi: 'पारिवारिक सुख-शांति, कठिनाइयों और संकटों से मुक्ति, लक्ष्यों और आकांक्षाओं की पूर्ति, स्वास्थ्य और समृद्धि में सुधार।',
            english: 'Family peace and happiness, freedom from difficulties and crises, fulfillment of goals and aspirations, improvement in health and prosperity.'
        },
        detailedBenefits: {
            hindi: 'शारीरिक लाभ: स्वास्थ्य में सुधार, रोगों से मुक्ति। मानसिक लाभ: मानसिक शांति, तनाव से मुक्ति। आध्यात्मिक लाभ: आंतरिक शांति, आध्यात्मिक विकास।',
            english: 'Physical Benefits: Improved health, freedom from diseases. Mental Benefits: Mental peace, freedom from stress. Spiritual Benefits: Inner peace, spiritual development.'
        },
        procedure: {
            hindi: 'सत्यनारायण पूजा में कलश स्थापना, सत्यनारायण आवाहन, कथा पाठ, षोडशोपचार पूजा, पंचामृत नैवेद्य और आरती शामिल है।',
            english: 'Satyanarayan Puja includes Kalash establishment, Satyanarayan invocation, katha recitation, Shodashopachara puja, Panchamrit offering and Aarti.'
        },
        duration: {
            hindi: '4-5 घंटे',
            english: '4-5 hours'
        },
        materials: {
            hindi: 'पंचामृत, फल, मिठाई, पंचगव्य, कथा पुस्तक, कुमकुम, चंदन, अगरबत्ती',
            english: 'Panchamrit, fruits, sweets, Panchagavya, katha book, kumkum, sandalwood, incense'
        },
        bestTime: {
            hindi: 'पूर्णिमा, गुरुवार, शुक्ल पक्ष',
            english: 'Purnima, Thursday, Shukla Paksha'
        },
        muhurat: {
            hindi: 'सूर्योदय के 2 घंटे बाद से सूर्यास्त के 2 घंटे पहले तक, विशेष रूप से मध्याह्न',
            english: '2 hours after sunrise until 2 hours before sunset, especially at noon'
        },
        lagn: {
            hindi: 'मेष, वृषभ, मिथुन, कर्क, सिंह, कन्या, तुला, वृश्चिक, धनु, मकर, कुंभ, मीन सभी राशियों में शुभ',
            english: 'All zodiac signs are auspicious: Aries, Taurus, Gemini, Cancer, Leo, Virgo, Libra, Scorpio, Sagittarius, Capricorn, Aquarius, Pisces'
        },
        scientificBasis: {
            hindi: 'सत्यनारायण कथा सुनने से मन में सकारात्मक विचार आते हैं और तनाव कम होता है।',
            english: 'Listening to Satyanarayan katha brings positive thoughts to mind and reduces stress.'
        }
    },

    marriageCeremonies: {
        id: 'marriage-ceremonies',
        title: {
            hindi: 'विवाह संस्कार',
            english: 'Marriage Ceremonies'
        },
        deity: {
            hindi: 'भगवान विष्णु, अग्नि देव',
            english: 'Lord Vishnu, Agni Dev'
        },
        description: {
            hindi: 'विवाह संस्कार गृहस्थ आश्रम में प्रवेश हेतु किया जाने वाला पवित्र संस्कार है, जो दो आत्माओं का मिलन है।',
            english: 'Marriage ceremony is a sacred ritual for entering the Grihastha Ashram, which is the union of two souls.'
        },
        significance: {
            hindi: 'यह सोलह संस्कारों में से एक है जो वैदिक परंपरा के अनुसार सात फेरों के साथ पूरा होता है।',
            english: 'This is one of the sixteen sanskaras that is completed with seven pheras according to Vedic tradition.'
        },
        benefits: {
            hindi: 'पारिवारिक एकता, सामाजिक स्थिरता, आध्यात्मिक विकास, पितृ ऋण से मुक्ति।',
            english: 'Family unity, social stability, spiritual development, freedom from pitru debt.'
        },
        detailedBenefits: {
            hindi: 'शारीरिक लाभ: स्वास्थ्य में सुधार, दीर्घायु। मानसिक लाभ: मानसिक शांति, सुख। आध्यात्मिक लाभ: आध्यात्मिक विकास, कर्म फल।',
            english: 'Physical Benefits: Improved health, longevity. Mental Benefits: Mental peace, happiness. Spiritual Benefits: Spiritual development, karma fruits.'
        },
        procedure: {
            hindi: 'विवाह संस्कार में मंगल कलश, वर-वधू स्वागत, कन्यादान, पाणिग्रहण, सप्तपदी, अग्नि परिक्रमा, मंगलसूत्र बंधन और आशीर्वाद शामिल है।',
            english: 'Marriage ceremony includes Mangal Kalash, groom-bride welcome, Kanyadaan, Panigrahan, Saptapadi, Agni parikrama, Mangalsutra bandhan and blessings.'
        },
        duration: {
            hindi: '1-2 दिन',
            english: '1-2 days'
        },
        materials: {
            hindi: 'मंगल कलश, अग्नि, पंचगव्य, वस्त्र, आभूषण, फूल, मिठाई, फल',
            english: 'Mangal Kalash, fire, Panchagavya, clothes, ornaments, flowers, sweets, fruits'
        },
        bestTime: {
            hindi: 'विवाह मुहूर्त, शुक्ल पक्ष, शुभ नक्षत्र',
            english: 'Marriage muhurat, Shukla Paksha, auspicious nakshatra'
        },
        muhurat: {
            hindi: 'विवाह मुहूर्त: सूर्योदय के 3 घंटे बाद से सूर्यास्त के 3 घंटे पहले तक, विशेष रूप से मध्याह्न 12:00 से 2:00 बजे',
            english: 'Marriage Muhurat: 3 hours after sunrise until 3 hours before sunset, especially from 12:00 PM to 2:00 PM'
        },
        lagn: {
            hindi: 'मेष, वृषभ, मिथुन, कर्क, सिंह, कन्या, तुला, वृश्चिक, धनु, मकर, कुंभ, मीन राशि में शुभ, विशेष रूप से लग्न के अनुसार',
            english: 'All zodiac signs are auspicious, especially according to the ascendant (Lagn)'
        },
        scientificBasis: {
            hindi: 'वैदिक विवाह संस्कार से दंपति के बीच आध्यात्मिक बंधन मजबूत होता है और जीवन में स्थिरता आती है।',
            english: 'Vedic marriage ceremony strengthens the spiritual bond between couples and brings stability in life.'
        }
    },

    navagrahaShanti: {
        id: 'navagraha-shanti',
        title: {
            hindi: 'नवग्रह शांति पूजा',
            english: 'Navagraha Shanti Puja'
        },
        deity: {
            hindi: 'नौ ग्रह (सूर्य, चंद्र, मंगल, बुध, गुरु, शुक्र, शनि, राहु, केतु)',
            english: 'Nine Planets (Sun, Moon, Mars, Mercury, Jupiter, Venus, Saturn, Rahu, Ketu)'
        },
        description: {
            hindi: 'जन्म कुंडली में नौ ग्रहों के अशुभ प्रभावों को शांत करने और सकारात्मक ऊर्जा को बढ़ाने के लिए।',
            english: 'To pacify the adverse effects of the nine planets in the birth chart and enhance positive energy.'
        },
        significance: {
            hindi: 'ज्योतिष शास्त्र के ग्रंथ जैसे \'बृहत् पराशर होरा शास्त्र\' में ग्रहों के प्रभाव और उनके शांति उपायों का विस्तृत वर्णन है।',
            english: 'The effects of planets and their pacification measures are described in detail in astrological texts like \'Brihat Parashara Hora Shastra\'.'
        },
        benefits: {
            hindi: 'स्वास्थ्य, करियर, विवाह और आर्थिक स्थिति में आने वाली बाधाओं का निवारण, मानसिक शांति, जीवन में संतुलन और सफलता की प्राप्ति।',
            english: 'Removal of obstacles in health, career, marriage and financial status, mental peace, balance in life and attainment of success.'
        },
        detailedBenefits: {
            hindi: 'शारीरिक लाभ: स्वास्थ्य में सुधार, रोगों से मुक्ति। मानसिक लाभ: मानसिक शांति, तनाव से मुक्ति। आध्यात्मिक लाभ: जीवन में संतुलन, सफलता।',
            english: 'Physical Benefits: Improved health, freedom from diseases. Mental Benefits: Mental peace, freedom from stress. Spiritual Benefits: Balance in life, success.'
        },
        procedure: {
            hindi: 'नवग्रह शांति पूजा में नवग्रह यंत्र स्थापना, ग्रह आवाहन, षोडशोपचार पूजा, हवन, रत्न धारण और मंत्र जाप शामिल है।',
            english: 'Navagraha Shanti Puja includes Navagraha yantra establishment, planet invocation, Shodashopachara puja, havan, gemstone wearing and mantra chanting.'
        },
        duration: {
            hindi: '3-4 घंटे',
            english: '3-4 hours'
        },
        materials: {
            hindi: 'नवग्रह यंत्र, रत्न, मंत्र, हवन सामग्री, कुमकुम, चंदन, अगरबत्ती, फूल',
            english: 'Navagraha yantra, gemstones, mantras, havan materials, kumkum, sandalwood, incense, flowers'
        },
        bestTime: {
            hindi: 'ग्रह दोष के अनुसार, शुभ मुहूर्त',
            english: 'According to planetary dosha, auspicious muhurat'
        },
        muhurat: {
            hindi: 'ग्रह शांति मुहूर्त: सूर्योदय के 2 घंटे बाद से सूर्यास्त के 2 घंटे पहले तक, विशेष रूप से ग्रह के शुभ समय में',
            english: 'Planetary Peace Muhurat: 2 hours after sunrise until 2 hours before sunset, especially during the planet\'s auspicious time'
        },
        lagn: {
            hindi: 'सभी राशियों में शुभ, विशेष रूप से ग्रह के अनुसार निर्धारित लग्न में',
            english: 'Auspicious in all zodiac signs, especially in the ascendant determined according to the planet'
        },
        scientificBasis: {
            hindi: 'ग्रहों की शांति से जीवन में सकारात्मक ऊर्जा का प्रवाह होता है और बाधाएं दूर होती हैं।',
            english: 'Pacification of planets creates positive energy flow in life and removes obstacles.'
        }
    },

    houseWarming: {
        id: 'house-warming',
        title: {
            hindi: 'गृहप्रवेश',
            english: 'House Warming'
        },
        deity: {
            hindi: 'वास्तु देव, गणेश जी',
            english: 'Vastu Dev, Lord Ganesha'
        },
        description: {
            hindi: 'नए घर में प्रवेश करने से पहले वास्तु पूजा और घर आशीर्वाद समारोह।',
            english: 'Vastu puja and house blessing ceremony before entering a new home.'
        },
        significance: {
            hindi: 'यह पूजा घर को नकारात्मक ऊर्जाओं से मुक्त करती है और सकारात्मक ऊर्जा का आगमन कराती है।',
            english: 'This puja frees the house from negative energies and brings positive energy.'
        },
        benefits: {
            hindi: 'घर में सुख-शांति, परिवार का कल्याण, वास्तु दोष का निवारण, सकारात्मक ऊर्जा का आगमन।',
            english: 'Peace and happiness at home, family welfare, removal of vastu dosha, arrival of positive energy.'
        },
        detailedBenefits: {
            hindi: 'शारीरिक लाभ: स्वास्थ्य में सुधार, नींद में सुधार। मानसिक लाभ: मानसिक शांति, तनाव से मुक्ति। आध्यात्मिक लाभ: घर में सकारात्मक ऊर्जा, आध्यात्मिक विकास।',
            english: 'Physical Benefits: Improved health, better sleep. Mental Benefits: Mental peace, freedom from stress. Spiritual Benefits: Positive energy at home, spiritual development.'
        },
        procedure: {
            hindi: 'गृहप्रवेश पूजा में वास्तु पूजा, गणेश पूजा, कलश स्थापना, षोडशोपचार पूजा, हवन और घर आशीर्वाद शामिल है।',
            english: 'House warming puja includes Vastu puja, Ganesh puja, Kalash establishment, Shodashopachara puja, havan and house blessing.'
        },
        duration: {
            hindi: '2-3 घंटे',
            english: '2-3 hours'
        },
        materials: {
            hindi: 'कलश, नारियल, मिट्टी, पंचगव्य, मंगल सामग्री, कुमकुम, चंदन, अगरबत्ती',
            english: 'Kalash, coconut, soil, Panchagavya, auspicious materials, kumkum, sandalwood, incense'
        },
        bestTime: {
            hindi: 'शुक्ल पक्ष, शुभ मुहूर्त, गुरुवार या शुक्रवार',
            english: 'Shukla Paksha, auspicious muhurat, Thursday or Friday'
        },
        muhurat: {
            hindi: 'गृहप्रवेश मुहूर्त: सूर्योदय के 2 घंटे बाद से सूर्यास्त के 2 घंटे पहले तक, विशेष रूप से मध्याह्न',
            english: 'House Warming Muhurat: 2 hours after sunrise until 2 hours before sunset, especially at noon'
        },
        lagn: {
            hindi: 'मेष, वृषभ, मिथुन, कर्क, सिंह, कन्या, तुला, वृश्चिक, धनु, मकर, कुंभ, मीन राशि में शुभ',
            english: 'Aries, Taurus, Gemini, Cancer, Leo, Virgo, Libra, Scorpio, Sagittarius, Capricorn, Aquarius, Pisces signs are auspicious'
        },
        scientificBasis: {
            hindi: 'वास्तु पूजा से घर का वातावरण शुद्ध होता है और सकारात्मक ऊर्जा का प्रवाह होता है।',
            english: 'Vastu puja purifies the home environment and creates positive energy flow.'
        }
    }
};

// Service Categories with detailed information including Muhurat & Lagn
const serviceCategories = {
    majorDeityWorship: {
        title: {
            hindi: 'प्रमुख देव पूजाएं एवं त्यौहार',
            english: 'Major Deity Worship & Festivals'
        },
        description: {
            hindi: 'ये पूजाएं विशिष्ट देवी-देवताओं को समर्पित हैं और अक्सर प्रमुख त्योहारों के दौरान की जाती हैं। इनका उद्देश्य दिव्य आशीर्वाद प्राप्त करना, कृतज्ञता व्यक्त करना और जीवन में शुभता का आह्वान करना है।',
            english: 'These worships are dedicated to specific deities and are often performed during major festivals. Their purpose is to receive divine blessings, express gratitude, and invoke auspiciousness in life.'
        },
        detailedInfo: {
            hindi: 'सनातन धर्म में पूजा, अनुष्ठान और कर्मकांड केवल धार्मिक क्रियाएं नहीं हैं, बल्कि ये जीवन जीने की एक समग्र प्रणाली का अभिन्न अंग हैं। ये प्रथाएं व्यक्ति को ब्रह्मांडीय ऊर्जाओं के साथ सामंजस्य स्थापित करने, जीवन के विभिन्न चरणों को पवित्र करने और धर्म, अर्थ, काम और मोक्ष नामक चार पुरुषार्थों को प्राप्त करने में सहायता करती हैं।',
            english: 'In Sanatan Dharma, worship, rituals and ceremonies are not just religious activities, but are an integral part of a comprehensive system of living. These practices help individuals establish harmony with cosmic energies, sanctify various stages of life and help achieve the four purusharthas called Dharma, Artha, Kama and Moksha.'
        },
        muhuratInfo: {
            hindi: 'प्रत्येक देवता के लिए विशिष्ट मुहूर्त और लग्न निर्धारित हैं। सूर्योदय के बाद से सूर्यास्त तक का समय विशेष रूप से शुभ माना जाता है।',
            english: 'Specific muhurat and lagn are determined for each deity. The time from sunrise to sunset is considered especially auspicious.'
        },
        services: ['ganeshPuja', 'lakshmiPujan', 'satyanarayanVrat']
    },

    yajnaHavan: {
        title: {
            hindi: 'यज्ञ एवं हवन (अग्नि अनुष्ठान)',
            english: 'Yajna & Havan (Fire Rituals)'
        },
        description: {
            hindi: 'यज्ञ या हवन वैदिक परंपरा के केंद्र में हैं, जहाँ अग्नि को देवताओं का मुख माना जाता है और उसके माध्यम से आहुतियां अर्पित की जाती हैं।',
            english: 'Yajna or Havan are central to Vedic tradition, where fire is considered the mouth of the deities and offerings are made through it.'
        },
        detailedInfo: {
            hindi: 'यज्ञ या हवन वैदिक परंपरा के केंद्र में हैं, जहाँ अग्नि को देवताओं का मुख माना जाता है और उसके माध्यम से आहुति दी जाती है। उद्देश्य देवताओं को प्रसन्न करना, वातावरण को शुद्ध करना और ब्रह्मांडीय व्यवस्था को बनाए रखना है।',
            english: 'Yajna or Havan are central to Vedic tradition, where fire is considered the mouth of the deities and offerings are made through it. The purpose is to please the deities, purify the environment and maintain cosmic order.'
        },
        muhuratInfo: {
            hindi: 'अग्नि अनुष्ठान के लिए ब्रह्म मुहूर्त (सूर्योदय से 2 घंटे पहले) और अभिजित मुहूर्त (मध्याह्न) विशेष रूप से शुभ माने गए हैं।',
            english: 'Brahma Muhurat (2 hours before sunrise) and Abhijit Muhurat (noon) are considered especially auspicious for fire rituals.'
        },
        services: ['navagrahaShanti']
    },

    lifeCycleRituals: {
        title: {
            hindi: 'षोडश संस्कार (जीवन-चक्र के अनुष्ठान)',
            english: 'Sixteen Sanskaras (Life-cycle Rituals)'
        },
        description: {
            hindi: 'ये सोलह संस्कार हैं जो व्यक्ति के जीवन के महत्वपूर्ण मील के पत्थरों पर किए जाते हैं, जन्म से पूर्व से लेकर मृत्यु के बाद तक।',
            english: 'These are sixteen rituals performed at important milestones in a person\'s life, from before birth to after death.'
        },
        detailedInfo: {
            hindi: 'ये सोलह संस्कार हैं जो व्यक्ति के जीवन में महत्वपूर्ण मील के पत्थरों पर किए जाते हैं, जन्म से पूर्व से लेकर मृत्यु के बाद तक। इनका उद्देश्य व्यक्ति को शारीरिक, मानसिक और आध्यात्मिक रूप से परिष्कृत करना है।',
            english: 'These are sixteen rituals performed at important milestones in a person\'s life, from before birth to after death. Their purpose is to refine a person physically, mentally and spiritually.'
        },
        muhuratInfo: {
            hindi: 'प्रत्येक संस्कार के लिए विशिष्ट मुहूर्त और लग्न निर्धारित हैं। जन्म कुंडली के अनुसार शुभ समय का चयन किया जाता है।',
            english: 'Specific muhurat and lagn are determined for each sanskara. Auspicious time is selected according to the birth chart.'
        },
        services: ['marriageCeremonies']
    },

    vastuRituals: {
        title: {
            hindi: 'वास्तु एवं गृह अनुष्ठान',
            english: 'Vastu & House Rituals'
        },
        description: {
            hindi: 'घर और व्यवसाय स्थल के लिए वास्तु शास्त्र के अनुसार पूजा और अनुष्ठान।',
            english: 'Puja and rituals for home and business place according to Vastu Shastra.'
        },
        detailedInfo: {
            hindi: 'वास्तु शास्त्र के अनुसार घर और व्यवसाय स्थल के लिए पूजा और अनुष्ठान। ये अनुष्ठान स्थान को नकारात्मक ऊर्जाओं से मुक्त करते हैं और सकारात्मक ऊर्जा का आगमन कराते हैं।',
            english: 'Puja and rituals for home and business place according to Vastu Shastra. These rituals free the place from negative energies and bring positive energy.'
        },
        muhuratInfo: {
            hindi: 'वास्तु अनुष्ठान के लिए शुक्ल पक्ष, गुरुवार या शुक्रवार, मध्याह्न का समय विशेष रूप से शुभ माना जाता है।',
            english: 'Shukla Paksha, Thursday or Friday, noon time is considered especially auspicious for Vastu rituals.'
        },
        services: ['houseWarming']
    }
};

// Muhurat & Lagn Specialist Information
const muhuratSpecialist = {
    title: {
        hindi: 'मुहूर्त एवं लग्न विशेषज्ञ',
        english: 'Muhurat & Lagn Specialist'
    },
    description: {
        hindi: 'वैदिक ज्योतिष के अनुसार सभी शुभ कार्यों के लिए उचित मुहूर्त और लग्न का निर्धारण।',
        english: 'Determination of proper muhurat and lagn for all auspicious works according to Vedic astrology.'
    },
    services: {
        muhuratCalculation: {
            title: {
                hindi: 'मुहूर्त गणना',
                english: 'Muhurat Calculation'
            },
            description: {
                hindi: 'जन्म कुंडली के अनुसार विवाह, गृहप्रवेश, व्यापार आरंभ, यात्रा आदि के लिए शुभ मुहूर्त का निर्धारण।',
                english: 'Determination of auspicious muhurat for marriage, house warming, business start, travel etc. according to birth chart.'
            }
        },
        lagnAnalysis: {
            title: {
                hindi: 'लग्न विश्लेषण',
                english: 'Lagn Analysis'
            },
            description: {
                hindi: 'जन्म समय के अनुसार लग्न का निर्धारण और उसके अनुसार शुभ समय का चयन।',
                english: 'Determination of ascendant (Lagn) according to birth time and selection of auspicious time accordingly.'
            }
        },
        panchangAnalysis: {
            title: {
                hindi: 'पंचांग विश्लेषण',
                english: 'Panchang Analysis'
            },
            description: {
                hindi: 'तिथि, वार, नक्षत्र, योग और करण के अनुसार शुभ मुहूर्त का निर्धारण।',
                english: 'Determination of auspicious muhurat according to tithi, vara, nakshatra, yoga and karana.'
            }
        }
    }
};

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { servicesData, serviceCategories, muhuratSpecialist };
}