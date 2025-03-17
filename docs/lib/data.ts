import type { Mood, Song } from "./types"

export const moods: Mood[] = [
  { id: "happy", name: "Euphoric", emoji: "😊", color: "green" },
  { id: "excited", name: "Energized", emoji: "🤩", color: "cyan" },
  { id: "chill", name: "Tranquil", emoji: "😌", color: "blue" },
  { id: "sad", name: "Melancholic", emoji: "😢", color: "purple" },
  { id: "angry", name: "Intense", emoji: "😡", color: "red" },
  { id: "focused", name: "Immersed", emoji: "🧠", color: "yellow" },
]

export const songs: Song[] = [
  // Happy - Normal
  { id: "h1", title: "Happy", artist: "Pharrell Williams", mood: "happy", intensity: 0 },
  { id: "h2", title: "Good as Hell", artist: "Lizzo", mood: "happy", intensity: 0 },
  { id: "h3", title: "Walking on Sunshine", artist: "Katrina & The Waves", mood: "happy", intensity: 0 },
  { id: "h4", title: "Best Day of My Life", artist: "American Authors", mood: "happy", intensity: 0 },
  { id: "h5", title: "Uptown Funk", artist: "Mark Ronson ft. Bruno Mars", mood: "happy", intensity: 0 },
  { id: "h6", title: "Can't Stop the Feeling!", artist: "Justin Timberlake", mood: "happy", intensity: 0 },
  { id: "h7", title: "Shake It Off", artist: "Taylor Swift", mood: "happy", intensity: 0 },
  { id: "h8", title: "I Gotta Feeling", artist: "Black Eyed Peas", mood: "happy", intensity: 0 },
  { id: "h9", title: "Celebration", artist: "Kool & The Gang", mood: "happy", intensity: 0 },

  // Happy - Engaged
  { id: "h10", title: "Don't Stop Me Now", artist: "Queen", mood: "happy", intensity: 1 },
  { id: "h11", title: "I Wanna Dance with Somebody", artist: "Whitney Houston", mood: "happy", intensity: 1 },
  { id: "h12", title: "Dynamite", artist: "BTS", mood: "happy", intensity: 1 },
  { id: "h13", title: "Levitating", artist: "Dua Lipa", mood: "happy", intensity: 1 },
  { id: "h14", title: "Good Vibrations", artist: "The Beach Boys", mood: "happy", intensity: 1 },
  { id: "h15", title: "Blinding Lights", artist: "The Weeknd", mood: "happy", intensity: 1 },
  { id: "h16", title: "24K Magic", artist: "Bruno Mars", mood: "happy", intensity: 1 },
  { id: "h17", title: "Juice", artist: "Lizzo", mood: "happy", intensity: 1 },
  { id: "h18", title: "Watermelon Sugar", artist: "Harry Styles", mood: "happy", intensity: 1 },

  // Happy - Intense
  { id: "h19", title: "Can't Hold Us", artist: "Macklemore & Ryan Lewis", mood: "happy", intensity: 2 },
  { id: "h20", title: "Raise Your Glass", artist: "P!nk", mood: "happy", intensity: 2 },
  { id: "h21", title: "All Star", artist: "Smash Mouth", mood: "happy", intensity: 2 },
  { id: "h22", title: "High Hopes", artist: "Panic! At The Disco", mood: "happy", intensity: 2 },
  { id: "h23", title: "Good Time", artist: "Owl City & Carly Rae Jepsen", mood: "happy", intensity: 2 },
  { id: "h24", title: "On Top Of The World", artist: "Imagine Dragons", mood: "happy", intensity: 2 },
  { id: "h25", title: "The Greatest", artist: "Sia ft. Kendrick Lamar", mood: "happy", intensity: 2 },
  { id: "h26", title: "Firework", artist: "Katy Perry", mood: "happy", intensity: 2 },
  { id: "h27", title: "Shut Up and Dance", artist: "WALK THE MOON", mood: "happy", intensity: 2 },

  // Excited - Normal
  { id: "e1", title: "Physical", artist: "Dua Lipa", mood: "excited", intensity: 0 },
  { id: "e2", title: "Stronger", artist: "Kanye West", mood: "excited", intensity: 0 },
  { id: "e3", title: "Power", artist: "Kanye West", mood: "excited", intensity: 0 },
  { id: "e4", title: "Centuries", artist: "Fall Out Boy", mood: "excited", intensity: 0 },
  { id: "e5", title: "Eye of the Tiger", artist: "Survivor", mood: "excited", intensity: 0 },
  { id: "e6", title: "Confident", artist: "Demi Lovato", mood: "excited", intensity: 0 },
  { id: "e7", title: "Unstoppable", artist: "Sia", mood: "excited", intensity: 0 },
  { id: "e8", title: "Roar", artist: "Katy Perry", mood: "excited", intensity: 0 },
  { id: "e9", title: "Applause", artist: "Lady Gaga", mood: "excited", intensity: 0 },

  // Excited - Engaged
  { id: "e10", title: "Titanium", artist: "David Guetta ft. Sia", mood: "excited", intensity: 1 },
  { id: "e11", title: "This Is Me", artist: "Keala Settle", mood: "excited", intensity: 1 },
  { id: "e12", title: "Believer", artist: "Imagine Dragons", mood: "excited", intensity: 1 },
  { id: "e13", title: "Thunder", artist: "Imagine Dragons", mood: "excited", intensity: 1 },
  { id: "e14", title: "Whatever It Takes", artist: "Imagine Dragons", mood: "excited", intensity: 1 },
  { id: "e15", title: "Radioactive", artist: "Imagine Dragons", mood: "excited", intensity: 1 },
  { id: "e16", title: "Legendary", artist: "Welshly Arms", mood: "excited", intensity: 1 },
  { id: "e17", title: "Hall of Fame", artist: "The Script ft. will.i.am", mood: "excited", intensity: 1 },
  { id: "e18", title: "Survivor", artist: "Destiny's Child", mood: "excited", intensity: 1 },

  // Excited - Intense
  { id: "e19", title: "Till I Collapse", artist: "Eminem", mood: "excited", intensity: 2 },
  { id: "e20", title: "Remember The Name", artist: "Fort Minor", mood: "excited", intensity: 2 },
  { id: "e21", title: "Lose Yourself", artist: "Eminem", mood: "excited", intensity: 2 },
  { id: "e22", title: "Numb/Encore", artist: "Jay-Z/Linkin Park", mood: "excited", intensity: 2 },
  { id: "e23", title: "All I Do Is Win", artist: "DJ Khaled", mood: "excited", intensity: 2 },
  { id: "e24", title: "We Will Rock You", artist: "Queen", mood: "excited", intensity: 2 },
  { id: "e25", title: "Seven Nation Army", artist: "The White Stripes", mood: "excited", intensity: 2 },
  { id: "e26", title: "Uprising", artist: "Muse", mood: "excited", intensity: 2 },
  { id: "e27", title: "Warriors", artist: "Imagine Dragons", mood: "excited", intensity: 2 },

  // Chill - Normal
  { id: "c1", title: "Sunday Morning", artist: "Maroon 5", mood: "chill", intensity: 0 },
  { id: "c2", title: "Banana Pancakes", artist: "Jack Johnson", mood: "chill", intensity: 0 },
  { id: "c3", title: "Breathe", artist: "Télépopmusik", mood: "chill", intensity: 0 },
  { id: "c4", title: "Waves", artist: "Mr. Probz", mood: "chill", intensity: 0 },
  { id: "c5", title: "Sunrise", artist: "Norah Jones", mood: "chill", intensity: 0 },
  { id: "c6", title: "Better Together", artist: "Jack Johnson", mood: "chill", intensity: 0 },
  { id: "c7", title: "Mellow Mood", artist: "Slightly Stoopid", mood: "chill", intensity: 0 },
  { id: "c8", title: "Don't Worry, Be Happy", artist: "Bobby McFerrin", mood: "chill", intensity: 0 },
  { id: "c9", title: "Three Little Birds", artist: "Bob Marley", mood: "chill", intensity: 0 },

  // Chill - Engaged
  { id: "c10", title: "Redbone", artist: "Childish Gambino", mood: "chill", intensity: 1 },
  { id: "c11", title: "Sunflower", artist: "Post Malone & Swae Lee", mood: "chill", intensity: 1 },
  { id: "c12", title: "Circles", artist: "Post Malone", mood: "chill", intensity: 1 },
  { id: "c13", title: "Watermelon Sugar", artist: "Harry Styles", mood: "chill", intensity: 1 },
  { id: "c14", title: "Electric Feel", artist: "MGMT", mood: "chill", intensity: 1 },
  { id: "c15", title: "Toes", artist: "Zac Brown Band", mood: "chill", intensity: 1 },
  { id: "c16", title: "Island In The Sun", artist: "Weezer", mood: "chill", intensity: 1 },
  { id: "c17", title: "Santeria", artist: "Sublime", mood: "chill", intensity: 1 },
  { id: "c18", title: "Pumped Up Kicks", artist: "Foster The People", mood: "chill", intensity: 1 },

  // Chill - Intense
  { id: "c19", title: "Midnight City", artist: "M83", mood: "chill", intensity: 2 },
  { id: "c20", title: "Feel Good Inc", artist: "Gorillaz", mood: "chill", intensity: 2 },
  { id: "c21", title: "Sweater Weather", artist: "The Neighbourhood", mood: "chill", intensity: 2 },
  { id: "c22", title: "Dreams", artist: "Fleetwood Mac", mood: "chill", intensity: 2 },
  { id: "c23", title: "Tongue Tied", artist: "Grouplove", mood: "chill", intensity: 2 },
  { id: "c24", title: "Young Folks", artist: "Peter Bjorn and John", mood: "chill", intensity: 2 },
  { id: "c25", title: "1901", artist: "Phoenix", mood: "chill", intensity: 2 },
  { id: "c26", title: "Stolen Dance", artist: "Milky Chance", mood: "chill", intensity: 2 },
  { id: "c27", title: "Gooey", artist: "Glass Animals", mood: "chill", intensity: 2 },

  // Sad - Normal
  { id: "s1", title: "Someone Like You", artist: "Adele", mood: "sad", intensity: 0 },
  { id: "s2", title: "Fix You", artist: "Coldplay", mood: "sad", intensity: 0 },
  { id: "s3", title: "Skinny Love", artist: "Bon Iver", mood: "sad", intensity: 0 },
  { id: "s4", title: "Say Something", artist: "A Great Big World", mood: "sad", intensity: 0 },
  { id: "s5", title: "All I Want", artist: "Kodaline", mood: "sad", intensity: 0 },
  { id: "s6", title: "Hurt", artist: "Johnny Cash", mood: "sad", intensity: 0 },
  { id: "s7", title: "The Night We Met", artist: "Lord Huron", mood: "sad", intensity: 0 },
  { id: "s8", title: "Hallelujah", artist: "Jeff Buckley", mood: "sad", intensity: 0 },
  { id: "s9", title: "Everybody Hurts", artist: "R.E.M.", mood: "sad", intensity: 0 },

  // Sad - Engaged
  { id: "s10", title: "Tears in Heaven", artist: "Eric Clapton", mood: "sad", intensity: 1 },
  { id: "s11", title: "Nothing Compares 2 U", artist: "Sinéad O'Connor", mood: "sad", intensity: 1 },
  { id: "s12", title: "Creep", artist: "Radiohead", mood: "sad", intensity: 1 },
  { id: "s13", title: "Mad World", artist: "Gary Jules", mood: "sad", intensity: 1 },
  { id: "s14", title: "Breathe Me", artist: "Sia", mood: "sad", intensity: 1 },
  { id: "s15", title: "Falling", artist: "Harry Styles", mood: "sad", intensity: 1 },
  { id: "s16", title: "Liability", artist: "Lorde", mood: "sad", intensity: 1 },
  { id: "s17", title: "Happier", artist: "Marshmello & Bastille", mood: "sad", intensity: 1 },
  { id: "s18", title: "Heather", artist: "Conan Gray", mood: "sad", intensity: 1 },

  // Sad - Intense
  { id: "s19", title: "Snuff", artist: "Slipknot", mood: "sad", intensity: 2 },
  { id: "s20", title: "How to Save a Life", artist: "The Fray", mood: "sad", intensity: 2 },
  { id: "s21", title: "Hurt", artist: "Nine Inch Nails", mood: "sad", intensity: 2 },
  { id: "s22", title: "Adams Song", artist: "Blink-182", mood: "sad", intensity: 2 },
  { id: "s23", title: "Cancer", artist: "My Chemical Romance", mood: "sad", intensity: 2 },
  { id: "s24", title: "Chasing Cars", artist: "Snow Patrol", mood: "sad", intensity: 2 },
  { id: "s25", title: "Whiskey Lullaby", artist: "Brad Paisley & Alison Krauss", mood: "sad", intensity: 2 },
  { id: "s26", title: "Zombie", artist: "The Cranberries", mood: "sad", intensity: 2 },
  { id: "s27", title: "Black", artist: "Pearl Jam", mood: "sad", intensity: 2 },

  // Angry - Normal
  { id: "a1", title: "Break Stuff", artist: "Limp Bizkit", mood: "angry", intensity: 0 },
  { id: "a2", title: "Killing In The Name", artist: "Rage Against The Machine", mood: "angry", intensity: 0 },
  { id: "a3", title: "Bulls On Parade", artist: "Rage Against The Machine", mood: "angry", intensity: 0 },
  { id: "a4", title: "You Oughta Know", artist: "Alanis Morissette", mood: "angry", intensity: 0 },
  { id: "a5", title: "I Hate Everything About You", artist: "Three Days Grace", mood: "angry", intensity: 0 },
  { id: "a6", title: "So What", artist: "P!nk", mood: "angry", intensity: 0 },
  { id: "a7", title: "Platypus (I Hate You)", artist: "Green Day", mood: "angry", intensity: 0 },
  { id: "a8", title: "Sabotage", artist: "Beastie Boys", mood: "angry", intensity: 0 },
  { id: "a9", title: "Gives You Hell", artist: "The All-American Rejects", mood: "angry", intensity: 0 },

  // Angry - Engaged
  { id: "a10", title: "Toxicity", artist: "System of a Down", mood: "angry", intensity: 1 },
  { id: "a11", title: "Down With The Sickness", artist: "Disturbed", mood: "angry", intensity: 1 },
  { id: "a12", title: "Last Resort", artist: "Papa Roach", mood: "angry", intensity: 1 },
  { id: "a13", title: "Chop Suey!", artist: "System of a Down", mood: "angry", intensity: 1 },
  { id: "a14", title: "Bodies", artist: "Drowning Pool", mood: "angry", intensity: 1 },
  { id: "a15", title: "One Step Closer", artist: "Linkin Park", mood: "angry", intensity: 1 },
  { id: "a16", title: "Duality", artist: "Slipknot", mood: "angry", intensity: 1 },
  { id: "a17", title: "Psychosocial", artist: "Slipknot", mood: "angry", intensity: 1 },
  { id: "a18", title: "B.Y.O.B.", artist: "System of a Down", mood: "angry", intensity: 1 },

  // Angry - Intense
  { id: "a19", title: "Angel of Death", artist: "Slayer", mood: "angry", intensity: 2 },
  { id: "a20", title: "Master of Puppets", artist: "Metallica", mood: "angry", intensity: 2 },
  { id: "a21", title: "Raining Blood", artist: "Slayer", mood: "angry", intensity: 2 },
  { id: "a22", title: "Walk", artist: "Pantera", mood: "angry", intensity: 2 },
  { id: "a23", title: "Roots Bloody Roots", artist: "Sepultura", mood: "angry", intensity: 2 },
  { id: "a24", title: "Domination", artist: "Pantera", mood: "angry", intensity: 2 },
  { id: "a25", title: "Hammer Smashed Face", artist: "Cannibal Corpse", mood: "angry", intensity: 2 },
  { id: "a26", title: "Disciple", artist: "Slayer", mood: "angry", intensity: 2 },
  { id: "a27", title: "People = Shit", artist: "Slipknot", mood: "angry", intensity: 2 },

  // Focused - Normal
  { id: "f1", title: "Brain Waves", artist: "Alpha Waves", mood: "focused", intensity: 0 },
  { id: "f2", title: "Concentration", artist: "Study Music", mood: "focused", intensity: 0 },
  { id: "f3", title: "Deep Focus", artist: "Focus Flow", mood: "focused", intensity: 0 },
  { id: "f4", title: "Clarity", artist: "Mind Maps", mood: "focused", intensity: 0 },
  { id: "f5", title: "Thought Process", artist: "Brain Power", mood: "focused", intensity: 0 },
  { id: "f6", title: "Ambient Study", artist: "Study Zone", mood: "focused", intensity: 0 },
  { id: "f7", title: "Zen Focus", artist: "Meditation Masters", mood: "focused", intensity: 0 },
  { id: "f8", title: "Productivity", artist: "Work Flow", mood: "focused", intensity: 0 },
  { id: "f9", title: "Concentration Zone", artist: "Deep Work", mood: "focused", intensity: 0 },

  // Focused - Engaged
  { id: "f10", title: "Time", artist: "Hans Zimmer", mood: "focused", intensity: 1 },
  { id: "f11", title: "Experience", artist: "Ludovico Einaudi", mood: "focused", intensity: 1 },
  { id: "f12", title: "Strobe", artist: "Deadmau5", mood: "focused", intensity: 1 },
  { id: "f13", title: "Intro", artist: "The xx", mood: "focused", intensity: 1 },
  { id: "f14", title: "Comptine d'un autre été", artist: "Yann Tiersen", mood: "focused", intensity: 1 },
  { id: "f15", title: "Divenire", artist: "Ludovico Einaudi", mood: "focused", intensity: 1 },
  { id: "f16", title: "Nuvole Bianche", artist: "Ludovico Einaudi", mood: "focused", intensity: 1 },
  { id: "f17", title: "Avril 14th", artist: "Aphex Twin", mood: "focused", intensity: 1 },
  { id: "f18", title: "Gymnopedie No.1", artist: "Erik Satie", mood: "focused", intensity: 1 },

  // Focused - Intense
  { id: "f19", title: "The Grid", artist: "Daft Punk", mood: "focused", intensity: 2 },
  { id: "f20", title: "Derezzed", artist: "Daft Punk", mood: "focused", intensity: 2 },
  { id: "f21", title: "Genesis", artist: "Justice", mood: "focused", intensity: 2 },
  { id: "f22", title: "Stress", artist: "Justice", mood: "focused", intensity: 2 },
  { id: "f23", title: "Tron Legacy (End Titles)", artist: "Daft Punk", mood: "focused", intensity: 2 },
  { id: "f24", title: "Contact", artist: "Daft Punk", mood: "focused", intensity: 2 },
  { id: "f25", title: "Phantom Pt. II", artist: "Justice", mood: "focused", intensity: 2 },
  { id: "f26", title: "Civilization", artist: "Justice", mood: "focused", intensity: 2 },
  { id: "f27", title: "Busy Earnin'", artist: "Jungle", mood: "focused", intensity: 2 },
]

