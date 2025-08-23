// Comprehensive Services Data with Detailed Information
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
        duration: {
            hindi: '2-3 घंटे',
            english: '2-3 hours'
        },
        materials: {
            hindi: 'मोदक, दूर्वा, बिल्व पत्र, फूल, फल, मिठाई',
            english: 'Modak, Durva grass, Bilva leaves, flowers, fruits, sweets'
        },
        bestTime: {
            hindi: 'गणेश चतुर्थी, मंगलवार, शुक्ल पक्ष की चतुर्थी',
            english: 'Ganesh Chaturthi, Tuesday, Shukla Paksha Chaturthi'
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
        duration: {
            hindi: '3-4 घंटे',
            english: '3-4 hours'
        },
        materials: {
            hindi: 'सोने का सिक्का, कमल के फूल, दीपक, मिठाई, फल',
            english: 'Gold coin, lotus flowers, diyas, sweets, fruits'
        },
        bestTime: {
            hindi: 'दीपावली, शुक्रवार, पूर्णिमा',
            english: 'Diwali, Friday, Purnima'
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
        duration: {
            hindi: '4-5 घंटे',
            english: '4-5 hours'
        },
        materials: {
            hindi: 'पंचामृत, फल, मिठाई, पंचगव्य, कथा पुस्तक',
            english: 'Panchamrit, fruits, sweets, Panchagavya, katha book'
        },
        bestTime: {
            hindi: 'पूर्णिमा, गुरुवार, शुक्ल पक्ष',
            english: 'Purnima, Thursday, Shukla Paksha'
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
        duration: {
            hindi: '1-2 दिन',
            english: '1-2 days'
        },
        materials: {
            hindi: 'मंगल कलश, अग्नि, पंचगव्य, वस्त्र, आभूषण',
            english: 'Mangal Kalash, fire, Panchagavya, clothes, ornaments'
        },
        bestTime: {
            hindi: 'विवाह मुहूर्त, शुक्ल पक्ष, शुभ नक्षत्र',
            english: 'Marriage muhurat, Shukla Paksha, auspicious nakshatra'
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
        duration: {
            hindi: '3-4 घंटे',
            english: '3-4 hours'
        },
        materials: {
            hindi: 'नवग्रह यंत्र, रत्न, मंत्र, हवन सामग्री',
            english: 'Navagraha yantra, gemstones, mantras, havan materials'
        },
        bestTime: {
            hindi: 'ग्रह दोष के अनुसार, शुभ मुहूर्त',
            english: 'According to planetary dosha, auspicious muhurat'
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
        duration: {
            hindi: '2-3 घंटे',
            english: '2-3 hours'
        },
        materials: {
            hindi: 'कलश, नारियल, मिट्टी, पंचगव्य, मंगल सामग्री',
            english: 'Kalash, coconut, soil, Panchagavya, auspicious materials'
        },
        bestTime: {
            hindi: 'शुक्ल पक्ष, शुभ मुहूर्त, गुरुवार या शुक्रवार',
            english: 'Shukla Paksha, auspicious muhurat, Thursday or Friday'
        }
    }
};

// Service Categories
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
        services: ['navagrahaShanti']
    },

    lifeCycleRituals: {
        title: {
            hindi: 'षोडश संस्कार (जीवन-चक्र के अनुष्ठान)',
            english: 'Sixteen Sanskaras (Life-cycle Rituals)'
        },
        description: {
            hindi: 'ये सोलह संस्कार हैं जो व्यक्ति के जीवन के महत्वपूर्ण पड़ावों पर किए जाते हैं, जन्म से पूर्व से लेकर मृत्यु के बाद तक।',
            english: 'These are sixteen rituals performed at important milestones in a person\'s life, from before birth to after death.'
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
        services: ['houseWarming']
    }
};

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { servicesData, serviceCategories };
}