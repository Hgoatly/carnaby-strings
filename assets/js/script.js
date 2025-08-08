//import data from "/assets/json/carnaby-repertoire.json" assert { type: "json" }; 

const data = [
  {
    "genre": "Classical",
    "composer": "Bach",
    "title": "Air"
  },
  {
    "genre": "Classical",
    "composer": "Morricone",
    "title": "Gabriel's Oboe"
  },
  {
    "genre": "Classical",
    "composer": "Pachelbel",
    "title": "Canon"
  },
  {
    "genre": "Classical",
    "composer": "Mendelssohn",
    "title": "Wedding March"
  },
  {
    "genre": "Classical",
    "composer": "Purcell",
    "title": "Trumpet Tune"
  },
  {
    "genre": "Classical",
    "composer": "Handel",
    "title": "La Rejoissance"
  },
  {
    "genre": "Classical",
    "composer": "Schubert",
    "title": "Ave Maria"
  },
  {
    "genre": "Classical",
    "composer": "Debussy",
    "title": "Clair de Lune"
  },
  {
    "genre": "Classical",
    "composer": "Handel",
    "title": "Queen of Sheba"
  },
  {
    "genre": "Classical",
    "composer": "Bach",
    "title": "Brandenberg Concerto no.3"
  },
  {
    "genre": "Classical",
    "composer": "Bach",
    "title": "Arioso from Cantata no.156"
  },
  {
    "genre": "Classical",
    "composer": "Bizet",
    "title": "Flower Song from Carmen"
  },
  {
    "genre": "Classical",
    "composer": "Traditional",
    "title": "Greensleeves"
  },
  {
    "genre": "Classical",
    "composer": "Borodin",
    "title": "Polovtsian Dances"
  },
  {
    "genre": "Classical",
    "composer": "Handel",
    "title": "Allegro I from Sonata Op.1 No.11"
  },
  {
    "genre": "Classical",
    "composer": "Handel",
    "title": "Alla Siciliana from Sonata Op.1 No.11"
  },
  {
    "genre": "Classical",
    "composer": "Handel",
    "title": "Allegro II from Sonata Op.1 No.11"
  },
  {
    "genre": "Classical",
    "composer": "Mozart",
    "title": "Quartet in G major"
  },
  {
    "genre": "Classical",
    "composer": "Vivaldi",
    "title": "Winter"
  },
  {
    "genre": "Classical",
    "composer": "Vivaldi",
    "title": "Spring"
  },
  {
    "genre": "Classical",
    "composer": "Vivaldi",
    "title": "Summer"
  },
  {
    "genre": "Classical",
    "composer": "Vivaldi",
    "title": "Autumn"
  },
  {
    "genre": "Classical",
    "composer": "Mozart",
    "title": "Divertimento in D "
  },
  {
    "genre": "Classical",
    "composer": "Boccherini",
    "title": "Minuet"
  },
  {
    "genre": "Classical",
    "composer": "Handel",
    "title": "Largo"
  },
  {
    "genre": "Classical",
    "composer": "Vivaldi",
    "title": "Concerto Grosso"
  },
  {
    "genre": "Classical",
    "composer": "Faure",
    "title": "Pavane"
  },
  {
    "genre": "Classical",
    "composer": "Haydn",
    "title": "Cello Concerto"
  },
  {
    "genre": "Classical",
    "composer": "Bach",
    "title": "Concerto for 2 violins"
  },
  {
    "genre": "Classical",
    "composer": "Elgar",
    "title": "Salut d'Amour"
  },
  {
    "genre": "Classical",
    "composer": "Elgar",
    "title": "Chanson de Matin"
  },
  {
    "genre": "Classical",
    "composer": "Massenet",
    "title": "Meditation"
  },
  {
    "genre": "Classical",
    "composer": "Bizet",
    "title": "Entracte to Act 3 of Carmen"
  },
  {
    "genre": "Classical",
    "composer": "Puccini",
    "title": "Musetta's Waltz"
  },
  {
    "genre": "Classical",
    "composer": "Mascagni",
    "title": "Intermezzo"
  },
  {
    "genre": "Classical",
    "composer": "Delibes",
    "title": "Flower Duet"
  },
  {
    "genre": "Classical",
    "composer": "Elgar",
    "title": "Nimrod"
  },
  {
    "genre": "Classical",
    "composer": "Tchaikovsky",
    "title": "Sleeping Beauty Waltz"
  },
  {
    "genre": "Classical",
    "composer": "Bach",
    "title": "Jesu, Joy of Man's Desiring"
  },
  {
    "genre": "Classical",
    "composer": "Mozart",
    "title": "Eine Kleine Nachtmusik"
  },
  {
    "genre": "Classical",
    "composer": "Saint-Saens",
    "title": "The Swan"
  },
  {
    "genre": "Classical",
    "composer": "Bernstein",
    "title": "Somewhere"
  },
  {
    "genre": "Classical",
    "composer": "Gershwin",
    "title": "The Man I Love"
  },
  {
    "genre": "Classical",
    "composer": "Handel",
    "title": "Hornpipe from Water Music"
  },
  {
    "genre": "Classical",
    "composer": "Clarke",
    "title": "Trumpet Voluntary"
  },
  {
    "genre": "Classical",
    "composer": "Beethoven",
    "title": "Ode to Joy"
  },
  {
    "genre": "Classical",
    "composer": "Puccini",
    "title": "O mio babbino caro"
  },
  {
    "genre": "Pop",
    "composer": "Beach Boys",
    "title": "God only knows"
  },
  {
    "genre": "Pop",
    "composer": "Sigur Ros",
    "title": "Hoppipolla"
  },
  {
    "genre": "Pop",
    "composer": "Etta James",
    "title": "At Last"
  },
  {
    "genre": "Pop",
    "composer": "Elbow",
    "title": "One day like this"
  },
  {
    "genre": "Pop",
    "composer": "Bruno Mars",
    "title": "Marry you"
  },
  {
    "genre": "Pop",
    "composer": "Des'ree",
    "title": "Kissing you"
  },
  {
    "genre": "Pop",
    "composer": "Beatles",
    "title": "All you need is love"
  },
  {
    "genre": "Pop",
    "composer": "The Verve",
    "title": "Bittersweet Symphony"
  },
  {
    "genre": "Pop",
    "composer": "Coldplay",
    "title": "Viva la Vida"
  },
  {
    "genre": "Pop",
    "composer": "Clean Bandit",
    "title": "Rather be"
  },
  {
    "genre": "Pop",
    "composer": "Stevie Wonder",
    "title": "Isn't she lovely"
  },
  {
    "genre": "Pop",
    "composer": "Queen",
    "title": "Crazy little thing called love"
  },
  {
    "genre": "Pop",
    "composer": "Gardel",
    "title": "Tango: Por una Cabeza"
  },
  {
    "genre": "Pop",
    "composer": "Hello Dolly",
    "title": "Theme from Hello Dolly"
  },
  {
    "genre": "Pop",
    "composer": "Joseph Kosma",
    "title": "Autumn leaves"
  },
  {
    "genre": "Pop",
    "composer": "Nat King Cole",
    "title": "When I fall in love"
  },
  {
    "genre": "Pop",
    "composer": "Lionel Richie",
    "title": "Hello"
  },
  {
    "genre": "Pop",
    "composer": "Abba",
    "title": "Gimme, gimme, gimme"
  },
  {
    "genre": "Pop",
    "composer": "Dionne Warwick",
    "title": "Walk on by"
  },
  {
    "genre": "Pop",
    "composer": "Blur",
    "title": "The Universal"
  },
  {
    "genre": "Pop",
    "composer": "Elvis Costello",
    "title": "She"
  },
  {
    "genre": "Pop",
    "composer": "Stevie Wonder",
    "title": "Signed, sealed, delivered"
  },
  {
    "genre": "Pop",
    "composer": "Tommy Dorsey",
    "title": "Getting sentimental over you"
  },
  {
    "genre": "Pop",
    "composer": "John Travolta & Olivia Newton-John",
    "title": "We go together from Grease"
  },
  {
    "genre": "Pop",
    "composer": "Bread",
    "title": "If"
  },
  {
    "genre": "Pop",
    "composer": "Alicia Keys",
    "title": "No one"
  },
  {
    "genre": "Pop",
    "composer": "Justin Bieber",
    "title": "Somebody in love"
  },
  {
    "genre": "Pop",
    "composer": "Pharrell Williams",
    "title": "Happy"
  },
  {
    "genre": "Pop",
    "composer": "Justin Bieber",
    "title": "Baby"
  },
  {
    "genre": "Pop",
    "composer": "Post Malone",
    "title": "Sunflower"
  },
  {
    "genre": "Pop",
    "composer": "Seal",
    "title": "Kiss from a rose"
  },
  {
    "genre": "Pop",
    "composer": "Prince",
    "title": "Kiss"
  },
  {
    "genre": "Pop",
    "composer": "George Michael",
    "title": "Faith"
  },
  {
    "genre": "Pop",
    "composer": "Maroon 5",
    "title": "Moves like Jagger"
  },
  {
    "genre": "Pop",
    "composer": "Ariana Grande",
    "title": "Thank you next"
  },
  {
    "genre": "Pop",
    "composer": "Queen",
    "title": "Bohemian Rhapsody"
  },
  {
    "genre": "Pop",
    "composer": "Queen",
    "title": "Don't stop me now"
  },
  {
    "genre": "Pop",
    "composer": "The mamas and the paps",
    "title": "California dreamin'"
  },
  {
    "genre": "Pop",
    "composer": "Michael Jackson",
    "title": "Billie Jean"
  },
  {
    "genre": "Pop",
    "composer": "Whitney Houston",
    "title": "The greatest love of all"
  },
  {
    "genre": "Pop",
    "composer": "Britney Spears",
    "title": "Toxic"
  },
  {
    "genre": "Pop",
    "composer": "Oasis",
    "title": "Don’t look back in anger"
  },
  {
    "genre": "Classical",
    "composer": "Andrea Bocelli",
    "title": "Con te Partiro"
  },
  {
    "genre": "Pop",
    "composer": "Maroon 5",
    "title": "Girls like you"
  },
  {
    "genre": "Pop",
    "composer": "Bridgerton",
    "title": "Bridgerton: main theme"
  },
  {
    "genre": "Pop",
    "composer": "Dixie Cups",
    "title": "Chapel of love"
  },
  {
    "genre": "Pop",
    "composer": "Take That",
    "title": "Rule the world"
  },
  {
    "genre": "Pop",
    "composer": "Muse",
    "title": "Starlight"
  },
  {
    "genre": "Pop",
    "composer": "Taylor Swift",
    "title": "Wildest Dreams"
  },
  {
    "genre": "Pop",
    "composer": "Avicii",
    "title": "Wake Me Up"
  },
  {
    "genre": "Pop",
    "composer": "Tangled",
    "title": "I See the Light"
  },
  {
    "genre": "Pop",
    "composer": "Clean Bandit",
    "title": "Rockabye"
  },
  {
    "genre": "Pop",
    "composer": "The Calling",
    "title": "Wherever you will go"
  },
  {
    "genre": "Pop",
    "composer": "Oasis",
    "title": "Wonderwall "
  },
  {
    "genre": "Pop",
    "composer": "Ben E King",
    "title": "Stand by Me"
  },
  {
    "genre": "Pop",
    "composer": "The Greatest Showman",
    "title": "Rewrite the Stars"
  },
  {
    "genre": "Pop",
    "composer": "Keane",
    "title": "Somewhere Only We Know"
  },
  {
    "genre": "Pop",
    "composer": "Hans Zimmer",
    "title": "Planet Earth II Suite"
  },
  {
    "genre": "Pop",
    "composer": "Sam Smith",
    "title": "Latch "
  },
  {
    "genre": "Pop",
    "composer": "Coldplay",
    "title": "Sky full of Stars"
  },
  {
    "genre": "Pop",
    "composer": "Tina Turner",
    "title": "Simply the Best"
  },
  {
    "genre": "Pop",
    "composer": "Rodgers & Hammerstein",
    "title": "You’ll Never Walk Alone"
  },
  {
    "genre": "Pop",
    "composer": "The Temptations",
    "title": "My Girl"
  },
  {
    "genre": "Pop",
    "composer": "A-ha",
    "title": "Take on Me"
  },
  {
    "genre": "Pop",
    "composer": "Madness",
    "title": "It Must be Love"
  },
  {
    "genre": "Pop",
    "composer": "Journey",
    "title": "Don’t Stop Believing "
  },
  {
    "genre": "Pop",
    "composer": "Wizard of Oz",
    "title": "Over the Rainbow "
  },
  {
    "genre": "Pop",
    "composer": "Nina Simone",
    "title": "Feeling Good"
  },
  {
    "genre": "Pop",
    "composer": "Adele",
    "title": "Skyfall"
  },
  {
    "genre": "Pop",
    "composer": "Beauty and the Beast",
    "title": "Be Our Guest"
  },
  {
    "genre": "Pop",
    "composer": "Michael Buble",
    "title": "Haven’t Met you Yet"
  },
  {
    "genre": "Pop",
    "composer": "Jason Mraz",
    "title": "I’m Yours"
  },
  {
    "genre": "Pop",
    "composer": "Beyonce",
    "title": "Halo"
  },
  {
    "genre": "Pop",
    "composer": "Aerosmith",
    "title": "I Don’t Want to Miss a Thing"
  },
  {
    "genre": "Pop",
    "composer": "U2",
    "title": "Beautiful Day"
  },
  {
    "genre": "Pop",
    "composer": "Elton John",
    "title": "Your Song"
  },
  {
    "genre": "Pop",
    "composer": "Luis Fonsi",
    "title": "Despacito"
  },
  {
    "genre": "Pop",
    "composer": "Ed Sheeran",
    "title": "Shape of You"
  },
  {
    "genre": "Pop",
    "composer": "Ellie Goulding",
    "title": "How Long Will I Love You?"
  },
  {
    "genre": "Pop",
    "composer": "Adele",
    "title": "Make You Feel My Love"
  },
  {
    "genre": "Pop",
    "composer": "Wizard of Oz",
    "title": "Over the Rainbow"
  },
  {
    "genre": "Pop",
    "composer": "Moana",
    "title": "How Far I’ll Go"
  },
  {
    "genre": "Pop",
    "composer": "Star Wars",
    "title": "Cantina Band"
  },
  {
    "genre": "Pop",
    "composer": "Taylor Swift",
    "title": "Shake it Off"
  },
  {
    "genre": "Pop",
    "composer": "Beatles",
    "title": "I Want to Hold Your Hand"
  },
  {
    "genre": "Pop",
    "composer": "Pixies",
    "title": "Here Comes Your Man"
  },
  {
    "genre": "Pop",
    "composer": "Black Eyed Peas",
    "title": "I Gotta Feeling"
  },
  {
    "genre": "Pop",
    "composer": "The Smashing Pumpkins",
    "title": "Tonight Tonight"
  },
  {
    "genre": "Pop",
    "composer": "Elvis  ",
    "title": "Can’t Help Falling in Love"
  },
  {
    "genre": "Pop",
    "composer": "The Kinks",
    "title": "Waterloo Sunset"
  },
  {
    "genre": "Pop",
    "composer": "Lennon/McCartney",
    "title": "In My Life"
  },
  {
    "genre": "Pop",
    "composer": "Earth, Wind and Fire",
    "title": "September"
  },
  {
    "genre": "Pop",
    "composer": "Sam Smith",
    "title": "Stay With Me"
  },
  {
    "genre": "Pop",
    "composer": "Bear McCreary",
    "title": "Shape of Things to Come"
  },
  {
    "genre": "Pop",
    "composer": "Max Richter",
    "title": "Spring (Recomposed)"
  },
  {
    "genre": "Pop",
    "composer": "Sam Mendes",
    "title": "Senorita"
  },
  {
    "genre": "Pop",
    "composer": "Taylor Swift",
    "title": "Me"
  },
  {
    "genre": "Pop",
    "composer": "Temper Trap",
    "title": "Sweet Disposition"
  },
  {
    "genre": "Pop",
    "composer": "Coldplay",
    "title": "Paradise"
  },
  {
    "genre": "Pop",
    "composer": "Pablo Ruiz KMG",
    "title": "Sway"
  },
  {
    "genre": "Pop",
    "composer": "Carly Rae Jepsen",
    "title": "Call Me Maybe"
  },
  {
    "genre": "Pop",
    "composer": "Katie Perry",
    "title": "Firework"
  },
  {
    "genre": "Pop",
    "composer": "Bruno Mars",
    "title": "Just the Way You are"
  },
  {
    "genre": "Pop",
    "composer": "Richard Rodgers",
    "title": "You’ll Never Walk Alone"
  },
  {
    "genre": "Pop",
    "composer": "Bill Withers",
    "title": "Lean on Me"
  },
  {
    "genre": "Pop",
    "composer": "Oasis",
    "title": "Stand By Me"
  },
  {
    "genre": "Pop",
    "composer": "Al Green",
    "title": "Let’s Stay Together"
  },
  {
    "genre": "Pop",
    "composer": "Louis Armstrong",
    "title": "What a Wonderful World"
  },
  {
    "genre": "Pop",
    "composer": "Europe",
    "title": "The Final Countdown"
  },
  {
    "genre": "Pop",
    "composer": "ELO",
    "title": "Mr Blue Sky"
  },
  {
    "genre": "Pop",
    "composer": "Jeff Buckley",
    "title": "Hallelujah"
  },
  {
    "genre": "Pop",
    "composer": "Dirty Dancing",
    "title": "I’ve had the time of My Life"
  },
  {
    "genre": "Pop",
    "composer": "Ben E King",
    "title": "Stand By Me"
  },
  {
    "genre": "Pop",
    "composer": "The Lion King",
    "title": "The Circle of Life"
  },
  {
    "genre": "Pop",
    "composer": "Blur",
    "title": "The Universal"
  },
  {
    "genre": "Pop",
    "composer": "Ed Sheeran",
    "title": "Photograph"
  },
  {
    "genre": "Pop",
    "composer": "Singin' in the Rain",
    "title": "Singin’ in the Rain"
  },
  {
    "genre": "Pop",
    "composer": "Beauty and the Beast",
    "title": "Beauty and the Beast"
  },
  {
    "genre": "Pop",
    "composer": "Taylor Swift",
    "title": "Love Story"
  },
  {
    "genre": "Pop",
    "composer": "Oasis",
    "title": "Champagne Super Nova"
  },
  {
    "genre": "Pop",
    "composer": "Take That",
    "title": "Greatest Day"
  },
  {
    "genre": "Pop",
    "composer": "Green day",
    "title": "Good Riddance (Time of your Life)"
  },
  {
    "genre": "Pop",
    "composer": "Beatles",
    "title": "Here Comes the Sun"
  },
  {
    "genre": "Pop",
    "composer": "John Legend",
    "title": "All of Me"
  },
  {
    "genre": "Pop",
    "composer": "Game of Thrones",
    "title": "Game of Thrones"
  },
  {
    "genre": "Pop",
    "composer": "Abba",
    "title": "Dancing Queen"
  },
  {
    "genre": "Pop",
    "composer": "Rihanna",
    "title": "We Found Love"
  },
  {
    "genre": "Pop",
    "composer": "Roberta Flack",
    "title": "The First TimeEver I Saw Your Face"
  },
  {
    "genre": "Pop",
    "composer": "Ed Sheeran",
    "title": "Perfect "
  },
  {
    "genre": "Pop",
    "composer": "John Williams",
    "title": "Jurassic Park"
  },
  {
    "genre": "Pop",
    "composer": "The Greatest Showman",
    "title": "This is Me"
  },
  {
    "genre": "Pop",
    "composer": "Shirley Bassey",
    "title": "Diamonds are Forever"
  },
  {
    "genre": "Pop",
    "composer": "Aladdin",
    "title": "A Whole New World"
  },
  {
    "genre": "Pop",
    "composer": "The Lion KIng",
    "title": "Can You Feel the Love Tonight?"
  },
  {
    "genre": "Pop",
    "composer": "Kanye West",
    "title": "All of the Lights"
  },
  {
    "genre": "Pop",
    "composer": "Ed Sheeran",
    "title": "Galway Girl"
  },
  {
    "genre": "Pop",
    "composer": "Whitney Houston",
    "title": "I Will Always Love You"
  },
  {
    "genre": "Pop",
    "composer": "Love Actually",
    "title": "Love Actually Theme "
  },
  {
    "genre": "Pop",
    "composer": "Mark Ronson",
    "title": "Up Town Funk"
  },
  {
    "genre": "Pop",
    "composer": "Stevie Wonder",
    "title": "For Once in My Life"
  },
  {
    "genre": "Pop",
    "composer": "Ed Sheeran",
    "title": "Thinking Out Loud"
  },
  {
    "genre": "Pop",
    "composer": "Sam Smith",
    "title": "Lay Me Down"
  },
  {
    "genre": "Pop",
    "composer": "Battlestar Galactica",
    "title": "Passacaglia"
  },
  {
    "genre": "Pop",
    "composer": "Beyonce",
    "title": "Love on Top"
  },
  {
    "genre": "Pop",
    "composer": "Ed Sheeran & Justin Bieber",
    "title": "I Don’t Care"
  },
  {
    "genre": "Pop",
    "composer": "Oasis",
    "title": "Whatever"
  },
  {
    "genre": "Pop",
    "composer": "David Bowie",
    "title": "Heroes"
  },
  {
    "genre": "Pop",
    "composer": "Toploader",
    "title": "Dancing in the Moonlight"
  },
  {
    "genre": "Pop",
    "composer": "Coldplay",
    "title": "Hymn for the Weekend"
  },
  {
    "genre": "Pop",
    "composer": "Ellie Goulding",
    "title": "Love Me Like You Do"
  },
  {
    "genre": "Pop",
    "composer": "Daft Punk",
    "title": "Get Lucky"
  },
  {
    "genre": "Pop",
    "composer": "Adele",
    "title": "Set Fire to the Rain"
  },
  {
    "genre": "Pop",
    "composer": "Dean Martin",
    "title": "That’s Amore"
  },
  {
    "genre": "Pop",
    "composer": "Beatles",
    "title": "All You Need is Love"
  },
  {
    "genre": "Pop",
    "composer": "Beyonce",
    "title": "Crazy in Love"
  },
  {
    "genre": "",
    "composer": "",
    "title": ""
  },
  {
    "genre": "Pop",
    "composer": "Billie Eilish",
    "title": "Bad Guy "
  },
  {
    "genre": "Pop",
    "composer": "Bond/The Spy who loved me",
    "title": "Nobody Does It Better"
  },
  {
    "genre": "Pop",
    "composer": "The Greatest Showman",
    "title": "A Million Dreams "
  },
  {
    "genre": "Pop",
    "composer": "Westlife",
    "title": "You Raise Me Up"
  },
  {
    "genre": "Pop",
    "composer": "Lady Gaga",
    "title": "Alejandro"
  },
  {
    "genre": "Pop",
    "composer": "Breakfast at Tiffany's",
    "title": "Moon River"
  },
  {
    "genre": "Pop",
    "composer": "",
    "title": "Home"
  },
  {
    "genre": "Pop",
    "composer": "Bill Withers",
    "title": "Lean on Me"
  },
  {
    "genre": "Pop",
    "composer": "U2",
    "title": "With or Without You"
  },
  {
    "genre": "Pop",
    "composer": "David Bowie",
    "title": "Life on Mars"
  },
  {
    "genre": "Pop",
    "composer": "Still Dre",
    "title": "Dr.Dre"
  },
  {
    "genre": "Pop",
    "composer": "Abba",
    "title": "Slipping Through my Fingers"
  },
  {
    "genre": "Pop",
    "composer": "Linkin Park",
    "title": "Numb"
  },
  {
    "genre": "Pop",
    "composer": "Love Actually",
    "title": "Portugeuse Love Theme"
  },
  {
    "genre": "Pop",
    "composer": "Portugal the Man",
    "title": "Feel it Still"
  },
  {
    "genre": "Pop",
    "composer": "Eric Clapton",
    "title": "Wonderful Tonight"
  },
  {
    "genre": "Pop",
    "composer": "Snow Patrol",
    "title": "Chasing Cars"
  },
  {
    "genre": "Pop",
    "composer": "Guns 'n' Roses",
    "title": "Sweet Child O' Mine"
  },
  {
    "genre": "Pop",
    "composer": "Les Miserables",
    "title": "I Dreamed a Dream "
  },
  {
    "genre": "Classical",
    "composer": "Mozart",
    "title": "Voi, que sapete from The Marriage of Figaro"
  },
  {
    "genre": "Pop",
    "composer": "The Carpenters",
    "title": "Top of the World"
  },
  {
    "genre": "Pop",
    "composer": "Dr Zhivago",
    "title": "Somewhere my love (Lara's Theme)"
  },
  {
    "genre": "Pop",
    "composer": "David Guetta",
    "title": "Say my name"
  },
  {
    "genre": "Pop",
    "composer": "Righteous Brothers",
    "title": "Unchained Melody"
  },
  {
    "genre": "Pop",
    "composer": "Enrique Iglesias",
    "title": "Bailando"
  },
  {
    "genre": "Classical",
    "composer": "Satie",
    "title": "Gymnopedie No.1"
  },
  {
    "genre": "Pop",
    "composer": "Paul McCartney",
    "title": "Maybe I'm amazed"
  },
  {
    "genre": "Pop",
    "composer": "Candy Staton",
    "title": "You've got the love"
  },
  {
    "genre": "Classical",
    "composer": "Tim Crooks",
    "title": "Morning has broken "
  },
  {
    "genre": "Pop",
    "composer": "Sam Smith",
    "title": "Stay With Me"
  },
  {
    "genre": "Pop",
    "composer": "Alan Walker",
    "title": "Faded"
  },
  {
    "genre": "Pop",
    "composer": "Zayn",
    "title": "Dusk til Dawn"
  },
  {
    "genre": "Pop",
    "composer": "Duke Ellington",
    "title": "It Don't Mean a Thing if it ain't Got That Swing"
  },
  {
    "genre": "Pop",
    "composer": "Billy Strayhorn",
    "title": "Take the A Train"
  },
  {
    "genre": "Pop",
    "composer": "Frank Sinatra",
    "title": "It Had to Be You"
  },
  {
    "genre": "Pop",
    "composer": "Jeeves",
    "title": "Jeeves and Wooster Theme"
  },
  {
    "genre": "Pop",
    "composer": "Arthur Johnson",
    "title": "Pennies from Heaven"
  },
  {
    "genre": "Pop",
    "composer": "Cole Porter",
    "title": "Let's Do It"
  },
  {
    "genre": "Pop",
    "composer": "",
    "title": "Stardust"
  },
  {
    "genre": "Pop",
    "composer": "Dooley Wilson",
    "title": "As Time Goes By"
  },
  {
    "genre": "Pop",
    "composer": "Tony Britten",
    "title": "UEFA Champions League Anthem"
  },
  {
    "genre": "Pop",
    "composer": "Billie Eilish & Khalid",
    "title": "Lovely"
  },
  {
    "genre": "Pop",
    "composer": "Sinatra",
    "title": "Fly me to the moon"
  },
  {
    "genre": "Pop",
    "composer": "Louis Armstrong",
    "title": "What a Wonderful World"
  },
  {
    "genre": "Classical",
    "composer": "Einaudi",
    "title": "I Giorni"
  },
  {
    "genre": "Classical",
    "composer": "Traditional",
    "title": "Amazing Grace"
  },
  {
    "genre": "Bollywood",
    "composer": "Udit Narayan/Alka Yagnik",
    "title": "Kuch Kuch Hota Hai"
  },
  {
    "genre": "Bollywood",
    "composer": "Arijit Singh",
    "title": "Tum Hi Ho"
  },
  {
    "genre": "Bollywood",
    "composer": "Lata Mangeshkar",
    "title": "Ghar Aya"
  },
  {
    "genre": "Bollywood",
    "composer": "A.R. Rahman/The Pussycat Dolls",
    "title": "Jai Ho - Slumdog Millionaire"
  },
  {
    "genre": "Bollywood",
    "composer": "Salman Khan",
    "title": "Main Hoon Hero Tera"
  },
  {
    "genre": "Bollywood",
    "composer": "Sapna Awasthi/Sukwinder Singh",
    "title": "Chaiya Chaiya"
  },
  {
    "genre": "Bollywood",
    "composer": "Rahat Fateh Ali Khan/Shreya Ghoshal",
    "title": "Teri Ore"
  },
  {
    "genre": "Bollywood",
    "composer": "Sonu Nigam/Shreya Ghoshal",
    "title": "Mein Huuna"
  },
  {
    "genre": "Bollywood",
    "composer": "Arijit Singh",
    "title": "Kabhi Jo Baadal Barse"
  },
  {
    "genre": "Bollywood",
    "composer": "Badshah and Indeep Bakshi",
    "title": "Saturday Saturday"
  },
  {
    "genre": "Bollywood",
    "composer": "Alka Yagnik",
    "title": "Teri Chunariya Hello Brother"
  },
  {
    "genre": "Bollywood",
    "composer": "Darshan Raval",
    "title": "Ek Ladki Ko Dekha"
  },
  {
    "genre": "Bollywood",
    "composer": "Jatin Lalit",
    "title": "Tunhe Dekha To"
  },
  {
    "genre": "Bollywood",
    "composer": "Khaled",
    "title": "Aicha"
  },
  {
    "genre": "Bollywood",
    "composer": "Atif Aslam and Shreya Ghoshal",
    "title": "Tere Liye"
  },
  {
    "genre": "Bollywood",
    "composer": "Lata Mangeshkar and Udit Narayan",
    "title": "Humko Hamise Churalo"
  },
  {
    "genre": "Bollywood",
    "composer": "Ankit Tiwari",
    "title": "Teri Galiya"
  },
  {
    "genre": "Bollywood",
    "composer": "Arijit Singh",
    "title": "Khaamoshiyan"
  },
  {
    "genre": "Bollywood",
    "composer": "Lata Mangeshkar",
    "title": "Ajeer Dastan Hai Veh"
  },
  {
    "genre": "Bollywood",
    "composer": "Mahalakshmi Iyer and Udit Narayan",
    "title": "Falak Tak"
  },
  {
    "genre": "Bollywood",
    "composer": "Rahat Fateh Ali Khan",
    "title": "Jag Ghoomeya"
  },
  {
    "genre": "Bollywood",
    "composer": "Kumar Sanu",
    "title": "Do Dil Mil Rahe Hain"
  },
  {
    "genre": "Bollywood",
    "composer": "Shazia Manzoor",
    "title": "Aaja Soniya Shazia Mancoor"
  },
  {
    "genre": "Bollywood",
    "composer": "Alka Yagnik and Arijit Singh",
    "title": "Agar tum Saath Ho"
  },
  {
    "genre": "Bollywood",
    "composer": "Massari",
    "title": "Habibi Ya Nour El Ain"
  },
  {
    "genre": "Bollywood",
    "composer": "Ehab Tawfik",
    "title": "Allah Aleik Ya Sick"
  },
  {
    "genre": "Bollywood",
    "composer": "Stromae",
    "title": "Alors on Danse"
  },
  {
    "genre": "Bollywood",
    "composer": "A.R Rahman",
    "title": "Lakita’s Theme"
  },
  {
    "genre": "Bollywood",
    "composer": "Atif Aslam  ",
    "title": "Pehil Nazar Mein"
  },
  {
    "genre": "Bollywood",
    "composer": "Sonu Nigam",
    "title": "Kal Ho Naa Ho"
  },
  {
    "genre": "Bollywood",
    "composer": "Kishore Kumar and Manna Dey",
    "title": "Sholay - Yeh Dosti"
  },
  {
    "genre": "Bollywood",
    "composer": "Lata Mangeshkar and Udit Narayan",
    "title": "Ho gay Hai"
  },
  {
    "genre": "Bollywood",
    "composer": "Alka Yagnik and Abhijeet Battacharya",
    "title": "Tum Dil Ki"
  },
  {
    "genre": "Bollywood",
    "composer": "Alka Yagnik",
    "title": "Suraj Hua Maddham"
  },
  {
    "genre": "Bollywood",
    "composer": "Alka Yagnik",
    "title": "Pardesi Pardesi"
  },
  {
    "genre": "Bollywood",
    "composer": "Asha Bhosle and Mohammed Rafi",
    "title": "Chura Liya Hai tumne Jo dil Ko "
  },
  {
    "genre": "Bollywood",
    "composer": "Mohammed Rafi",
    "title": "Chaudhvin Ka Chand Ho"
  },
  {
    "genre": "Bollywood",
    "composer": "Mukesh",
    "title": "Awara Hoon"
  },
  {
    "genre": "Bollywood",
    "composer": "Mohammed Rafi",
    "title": "Baharon Phool Barsao"
  },
  {
    "genre": "Pop",
    "composer": "Oasis",
    "title": "Stand By Me"
  },
  {
    "genre": "Pop",
    "composer": "Bob Marley",
    "title": "Is this love?"
  },
  {
    "genre": "Pop",
    "composer": "Stevie Wonder",
    "title": "I just called to say I love you"
  },
  {
    "genre": "Pop",
    "composer": "Depeche Mode",
    "title": "Just can't get enough"
  },
  {
    "genre": "Pop",
    "composer": "John Barry",
    "title": "The beyondness of things"
  },
  {
    "genre": "Pop",
    "composer": "Zayn & Taylor Swift",
    "title": "I don’t wanna live forever "
  },
  {
    "genre": "Pop",
    "composer": "Billy Idol",
    "title": "White wedding"
  },
  {
    "genre": "Pop",
    "composer": "Frankie Vallie",
    "title": "Can't take my eyes off of you"
  },
  {
    "genre": "Pop",
    "composer": "Kings of Leon",
    "title": "Use somebody"
  },
  {
    "genre": "Pop",
    "composer": "Sia",
    "title": "Chandelier"
  },
  {
    "genre": "Pop",
    "composer": "Giorgio Moroder",
    "title": "Take my breath away"
  },
  {
    "genre": "Pop",
    "composer": "Titanic",
    "title": "My heart will go on"
  },
  {
    "genre": "Pop",
    "composer": "Hans Zimmer",
    "title": "Wonder woman"
  },
  {
    "genre": "Pop",
    "composer": "John Williams",
    "title": "Star Wars: Imperial March"
  },
  {
    "genre": "Pop",
    "composer": "Metallica",
    "title": "Nothing else matters"
  },
  {
    "genre": "Pop",
    "composer": "John Legend",
    "title": "Ordinary People"
  },
  {
    "genre": "Pop",
    "composer": "Michael Jackson",
    "title": "Smooth Criminal"
  },
  {
    "genre": "Pop",
    "composer": "McFly",
    "title": "It's all about you"
  },
 
  {
    "genre": "Pop",
    "composer": "The Weekend",
    "title": "Can't feel my face"
  },
  {
    "genre": "Pop",
    "composer": "Dr Dre",
    "title": "The next episode"
  },
  {
    "genre": "Pop",
    "composer": "Ed Sheeran",
    "title": "Give me love"
  },
  {
    "genre": "Pop",
    "composer": "Joy Division",
    "title": "Love will tear us apart"
  },
  {
    "genre": "Pop",
    "composer": "Rihanna",
    "title": "Rude boy"
  },
  {
    "genre": "Pop",
    "composer": "Artic Monkeys",
    "title": "Mardy Bum"
  },
  {
    "genre": "Pop",
    "composer": "Amy Winehouse",
    "title": "Rehab"
  },
  {
    "genre": "Pop",
    "composer": "Bob Marley",
    "title": "Three little birds"
  },
  {
    "genre": "Pop",
    "composer": "Florence & the Machine",
    "title": "Dog days are over"
  },
  {
    "genre": "Classical",
    "composer": "Parry",
    "title": "Jerusalem"
  },
  {
    "genre": "Pop",
    "composer": "Gladiator",
    "title": "Now we are free"
  },
  {
    "genre": "Classical",
    "composer": "Gershwin",
    "title": "I got rhythm"
  },
  {
    "genre": "Classical",
    "composer": "MacDowell",
    "title": "To a Wild Rose"
  },
  {
    "genre": "Classical",
    "composer": "Gershwin",
    "title": "An American in Paris"
  },
  {
    "genre": "Pop",
    "composer": "Sam Smith",
    "title": "Latch "
  },
  {
    "genre": "Pop",
    "composer": "Nicky Jam & Enrique Iglesias",
    "title": "El Perdon"
  },
  {
    "genre": "Pop",
    "composer": "Burt Bacharach",
    "title": "The look of love"
  },
  {
    "genre": "Pop",
    "composer": "Evanescance",
    "title": "Bring me to life"
  },
  {
    "genre": "Pop",
    "composer": "Hozier",
    "title": "From Eden"
  },
  {
    "genre": "Pop",
    "composer": "Christine McVie",
    "title": "Songbird"
  },
  {
    "genre": "Pop",
    "composer": "Paul McCartney",
    "title": "Maybe I'm amazed"
  },
  {
    "genre": "Pop",
    "composer": "Foo Fighters",
    "title": "Everlong"
  },
  {
    "genre": "Pop",
    "composer": "Foo Fighters",
    "title": "All my life"
  },
  {
    "genre": "Pop",
    "composer": "The Darkness",
    "title": "I believe in a thing called love"
  },
  {
    "genre": "Pop",
    "composer": "John Williams",
    "title": "Star Wars: Main Theme"
  },
  {
    "genre": "Classical",
    "composer": "Vaughan Williams",
    "title": "The Lark Ascending"
  },
  {
    "genre": "Pop",
    "composer": "Liam Payne & Rita Ora",
    "title": "For you"
  },
  {
    "genre": "Pop",
    "composer": "Disney/Pixar",
    "title": "Theme from \"Up\""
  },
  {
    "genre": "Pop",
    "composer": "Tom Petty",
    "title": "Free fallin'"
  },
  {
    "genre": "Pop",
    "composer": "Billie Eilish & Khalid",
    "title": "Lovely"
  },
  {
    "genre": "Pop",
    "composer": "Israel K ",
    "title": "Somewhere over the rainbow"
  },
  {
    "genre": "Pop",
    "composer": "Lady Gaga",
    "title": "A star is born"
  },
  {
    "genre": "Pop",
    "composer": "Lord of the Rings",
    "title": "Concerning Hobbits"
  },
  {
    "genre": "Pop",
    "composer": "Coolio",
    "title": "Gangsters Paradise"
  },
  {
    "genre": "Pop",
    "composer": "Harry Potter",
    "title": "Hedwig's Theme"
  },
  {
    "genre": "Pop",
    "composer": "Justin Bieber",
    "title": "Love youself"
  },
  {
    "genre": "Pop",
    "composer": "Justin Timberlake",
    "title": "Mirrors"
  },
  {
    "genre": "Pop",
    "composer": "Harry Potter",
    "title": "Potter Waltz"
  },
  {
    "genre": "Pop",
    "composer": "Stevie Wonder",
    "title": "Sir Duke"
  },
  {
    "genre": "Pop",
    "composer": "Natalie Cole",
    "title": "This will be an everlasting love"
  },
  {
    "genre": "Pop",
    "composer": "Blink 182",
    "title": "What's my age?"
  },
  {
    "genre": "Pop",
    "composer": "Coldplay",
    "title": "Yellow"
  }
 ]

const myTable = document.querySelector("#myTable");

data.forEach((item) => {
  if (item.genre === "Classical") {
    myTable.innerHTML += `
  
    <tr class="songs">
    <td class="title">
        ${item.title}
    </td>
    <td class="composer">
    ${item.composer}
    </td>
    <td class="composer">
    ${item.genre}
    </td>
    </tr>
  
  `;
  }
});

const musicalsAndJazz = document.querySelector("#musicals-and-jazz");

data.forEach((item) => {
  if (item.genre === "Jazz" || item.genre === "musicals") {
    musicalsAndJazz.innerHTML += `
  
    <tr class="songs">
    <td class="title">
        ${item.title}
    </td>
    <td class="composer">
    ${item.composer}
    </td>
    <td class="composer">
    ${item.genre}
    </td>
    </tr>

  `;
  }
});

const pop = document.querySelector("#pop");

data.forEach((item) => {
  if (item.genre === "Pop") {
    pop.innerHTML += `
  
    <tr class="songs">
    <td class="title">
        ${item.title}
    </td>
    <td class="composer">
    ${item.composer}
    </td>
    <td class="composer">
    ${item.genre}
    </td>
    </tr>

  `;
  }
});

const bollywood = document.querySelector("#bollywood");

data.forEach((item) => {
  if (item.genre === "Bollywood") {
    bollywood.innerHTML += `
  
    <tr class="songs">
    <td class="title">
        ${item.title}
    </td>
    <td class="composer">
    ${item.composer}
    </td>
    <td class="composer">
    ${item.genre}
    </td>
    </tr>

  `;
  }
});

// Filter buttons for repertoire list

document.getElementById("all-button").addEventListener("click", showAll);

function showAll() {
  document.getElementById("myTable").style.display = "block";
  document.getElementById("musicals-and-jazz").style.display = "block";
  document.getElementById("pop").style.display = "block";
  document.getElementById("bollywood").style.display = "block";
}

document.getElementById("classical-button").addEventListener("click", showClassical);

function showClassical() {
  document.getElementById("myTable").style.display = "block";
  document.getElementById("musicals-and-jazz").style.display = "none";
  document.getElementById("pop").style.display = "none";
  document.getElementById("bollywood").style.display = "none";
}

document.getElementById("pop-button").addEventListener("click", showPop);

function showPop() {
  document.getElementById("myTable").style.display = "none";
  document.getElementById("musicals-and-jazz").style.display = "none";
  document.getElementById("pop").style.display = "block";
  document.getElementById("bollywood").style.display = "none";
}

document.getElementById("bollywood-button").addEventListener("click", showBollywood);

function showBollywood() {
  document.getElementById("myTable").style.display = "none";
  document.getElementById("musicals-and-jazz").style.display = "none";
  document.getElementById("pop").style.display = "none";
  document.getElementById("bollywood").style.display = "";
}
