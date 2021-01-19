const speakers = [
  {
    "name": "Paul Hudson",
    "company": "Hacking with Swift",
    "imageUrl": "../speakers/paul.jpg",
    "companyUrl": "https://www.hackingwithswift.com/",
    "twitter": "twostraws",
    "linkedin": "",
    "bio": "Paul is the author of Hacking with Swift, Pro Swift, Swift Design Patterns, Server-Side Swift, Hacking with macOS, Hacking with watchOS, Hacking with tvOS, Swift Coding Challenges, and more. Suffice it to say, he quite likes Swift. And coffee. (But mostly Swift.) (And coffee.)",
    "talkTitle": "Global Variable Oriented Programming"
  },
  {
    "name": "Peter Steinberger",
    "company": "PSPDFKit",
    "imageUrl": "../speakers/peter.jpg",
    "companyUrl": "https://pspdfkit.com",
    "twitter": "steipete",
    "linkedin": "",
    "bio": "Peter founded and bootstrapped PSPDFKit in 2011, and has since expanded the company with the goal of providing the highest quality PDF framework for all platforms. While Peter is responsible for the day-to-day management of the team, he never misses the chance to go under PSPDFKit’s hood and get his hands dirty with writing and debugging code. Peter has worked with iOS since the inception of the iPhone, and is regularly invited to speak at conferences around the world. He also organizes [Cocoaheads] , a meetup for developers that work with Apple platforms. Prior to PSPDFKit, he worked as a Senior iOS Engineer at a startup in San Francisco and taught iOS and Mac development at his alma mater, the Vienna University of Technology."
  },
  {
    "name": "Ben Scheirman",
    "company": "NSScreencast",
    "imageUrl": "../speakers/ben.jpg",
    "companyUrl": "https://nsscreencast.com",
    "twitter": "subdigital",
    "linkedin": "",
    "bio": "Ben is an iOS, Mac, and Ruby on Rails developer from Houston, Texas. Under his company, Fickle Bits, he builds apps for clients ranging from startups to established companies from multiple industries. He also runs NSScreencast.com, a site with over 400 videos on app development. When not writing software, Ben is probably playing board games with his 5 children, playing guitar, or making award-winning Texas BBQ."
  },

  {
    "name": "Mugunth Kumar",
    "company": "Xero",
    "imageUrl": "../speakers/mugunth.jpg",
    "companyUrl": "https://www.xero.com",
    "twitter": "mugunthkumar",
    "linkedin": "",
    "bio": "Dad first, iOS next. Co-author: iOS Programming Pushing the Limits. Wrote MKStoreKit, MKNetworkKit. Conf Speaker: Bluetooth SIG, iOS Conf SG, try! Swift.",
    "talkTitle": "Global Variable Oriented Programming"
  },
  {
    "name": "Malin Sundberg",
    "company": "Orbit",
    "imageUrl": "../speakers/malin.jpg",
    "companyUrl": "https://timeinorbit.com",
    "twitter": "malinsundberg",
    "linkedin": "",
    "bio": "Malin is an indie developer working on an app called Orbit, and co-founder of Triple Glazed Studios. Being one half of a two-person team, Malin keeps herself busy developing apps and backends (using server-side Swift and Vapor), designing apps, product pages, icons, and other app artwork. Malin is also passionate about the development community and regularly organizes local meetups in Vancouver, Canada. She also chats about tech and indie development on the Cup of Tech podcast."
  },
  {
    "name": "Patrick Balestra",
    "company": "Spotify",
    "imageUrl": "../speakers/patrick.jpg",
    "companyUrl": "https://www.spotify.com",
    "twitter": "BalestraPatrick",
    "linkedin": "",
    "bio": "Patrick is a Senior iOS Engineer at Spotify in Stockholm where he works on build systems and developer experience"
  },
  {
    "name": "Alexander Repty",
    "company": "Sketch",
    "imageUrl": "../speakers/alexander.jpg",
    "companyUrl": "https://www.sketch.com",
    "twitter": "arepty",
    "linkedin": "",
    "bio": "Alexander is a veteran software engineer from Germany, specialises in creating awesome apps for macOS, iOS, tvOS and watchOS using Swift, Objective-C and all kinds of native Apple frameworks. His work has been featured in Apple TV commercials and on Apple WWDC banners. He has also worked on an Apple Design Award winning app."
  },
  {
    "name": "Madushan Gamage",
    "company": "Grab",
    "imageUrl": "../speakers/madushan.jpg",
    "companyUrl": "https://www.grab.com/sg",
    "twitter": "itsmadnik",
    "linkedin": "",
    "bio": "Madushan is a lead software engineer at Grab working on the mobile platform team."
  },
  {
    "name": "Roxana Jula",
    "company": "Nodes",
    "imageUrl": "../speakers/roxana.jpg",
    "companyUrl": "https://www.nodesagency.com/",
    "twitter": "roxanajula",
    "linkedin": "",
    "bio": "Roxana is a Romanian mobile developer based in Dubai with a passion for augmented reality. She started coding when she was 13 years old and so far has been part of the development team of over 20 apps including one of the biggest digital public services app in Scandinavia. She is involved in the tech community, both online and offline at local events. As an advocate for women in tech, Roxana is encouraging other girls to join the tech world."
  },
  {
    "name": "Maciej Piotrowski",
    "company": "Allegro",
    "imageUrl": "../speakers/maciej.jpg",
    "companyUrl": "https://allegro.tech",
    "twitter": "paciej00",
    "linkedin": "",
    "bio": "Maciej is a passionate iOS developer that pays much attention to details and code quality. He likes improving things, always looking for better solutions because he's amazed that in the programming world, issues can be solved in 100s of ways. In 2016 he kicked off with his friends the swifting.io blog, where he has been posting his thoughts about various topics."
  },
  {
    "name": "Rongyan (蓝容) Zheng",
    "company": "Shopee",
    "imageUrl": "../speakers/rongyan.jpg",
    "companyUrl": "https://shopee.sg",
    "twitter": "",
    "linkedin": "in/rongyanzheng",
    "bio": ""
  },
  {
    "name": "Erick Camacho",
    "company": "Spotify",
    "imageUrl": "../speakers/eric.jpg",
    "companyUrl": "https://www.spotify.com",
    "twitter": "ecamacho",
    "linkedin": "",
    "bio": "Erick works as a Senior iOS infrastructure engineer at Spotify taking care of the iOS developer experience."
  },
  {
    "name": "Benoit Pasquier",
    "company": "ShopBack",
    "imageUrl": "../speakers/benoit.jpg",
    "companyUrl": "https://www.shopback.sg",
    "twitter": "BenoitPasquier_",
    "linkedin": "",
    "bio": "Benoit is a French iOS engineer working at ShopBack, here in Singapore.  He has previously worked on a number of international e-commerce apps in Europe and SouthEast Asia. When not blogging about mobile development and personal growth, he’s outside, discovering the best running routes in Singapore."
  },
  {
    "name": "Jason Nam",
    "company": "OOZOU",
    "imageUrl": "../speakers/jason.jpg",
    "companyUrl": "https://oozou.com/",
    "twitter": "seokhyeoneee",
    "linkedin": "",
    "bio": "Jason is an iOS developer who is passionate about finding better software architecture and improving his development process so that he can deliver the best UX/UI. He enjoys discussing his approaches and other developers' experiences. Besides his interest in software, he also enjoys reading books about history."
  },
  {
    "name": "Kenneth Poon",
    "company": "SPDigital",
    "imageUrl": "../speakers/kenneth.jpg",
    "companyUrl": "https://www.spdigital.io",
    "twitter": "",
    "linkedin": "in/kenneth-poon-84217019",
    "bio": "Kenneth works as a Principal Software Engineer at SPDigital. He is passionate about TDD and BDD. He likes to bring agile software practices into iOS development space. He is also a prominent speaker at iOS Dev Scout, especially on iOS topics like Testing and IPA Code Injection. He enjoys running and playing the piano while not thinking about failed tests."
  },
  {
    "name": "Pavel Tarasevich",
    "company": "foodpanda",
    "imageUrl": "../speakers/pavel.jpg",
    "companyUrl": "https://www.foodpanda.com",
    "twitter": "",
    "linkedin": "in/pavel-tarasevich",
    "bio": "Pavel Tarasevich is a senior iOS developer at Foodpanda, here in Singapore. He has 9+ years of iOS experience. Pavel is passionate about architectures and augmented reality."
  },
]

export default speakers
