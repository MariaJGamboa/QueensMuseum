const themes = [
  'ThemeStyles/historical.css',
  'ThemeStyles/900print.css',
  'ThemeStyles/PopArt.css',
  'ThemeStyles/future.css'
];

document.addEventListener('DOMContentLoaded', () => {
  const link = document.getElementById("theme-css");
  if (!link) return;

  // Either selected theme or random
  let savedTheme = sessionStorage.getItem("selectedTheme");
  if (!savedTheme) {
    savedTheme = themes[Math.floor(Math.random() * themes.length)];
    sessionStorage.setItem("selectedTheme", savedTheme);
  }

  // Applies theme
  link.href = savedTheme;
  document.body.style.visibility = "visible"; 
});;



// Change theme on click
function changeTheme(cssFile) {
  const link = document.getElementById("theme-css");
  if (!link) return;

  const currentTheme = sessionStorage.getItem("selectedTheme");

  if (currentTheme === cssFile) {
    // reload
    link.href = cssFile + '?v=' + new Date().getTime();
  } else {
    link.href = cssFile;
    sessionStorage.setItem("selectedTheme", cssFile);
  }

  document.body.style.visibility = "visible"; 
}


// items data
const items = [
  {
    id: 1,
    title: "The Coronation Portrait",
    image: ["images/coronation_portrait2_elizI.jpg", "images/coronation_portrait_elizI.jpg" ],
    metadata: {
      fullName: "The Coronation Portrait",
      date: "1600-1610",
      place: "National Portrait Gallery, London",
      materiality: "Oil on panel",
      room: "Queen Elizabeth I's Room"
    },
    text: {
      historical: {
        children: {
          short: "This painting shows Queen Elizabeth I wearing the clothes, crown, and jewelry she used on the day she became queen. She is holding special objects that show her power as ruler. The painting was made by an unknown artist around 1600–1610.",
          medium: "Queen Elizabeth I became Queen of England on 15 January 1559, when she was only 25 years old. This painting, called The Coronation Portrait, was made by an unknown artist around 1600–1610. It is a copy of an older painting that no longer exists. In the portrait, Elizabeth is wearing a beautiful golden robe that she wore on her coronation day. She is holding two important objects, the orb and the sceptre, which show that she is the queen and has the power to rule England.",
          long: "On 15 January 1559, Elizabeth I became Queen of England when she was just 25 years old. This painting, known as The Coronation Portrait, was painted by an unknown artist around 1600–1610. It is a copy of the original painting made in 1559, which has been lost. Today, this portrait is kept in the National Portrait Gallery in London. In the painting, Elizabeth is shown wearing a golden robe that she wore during her coronation ceremony. The robe had originally been made for her half-sister, Queen Mary I, five years earlier. By wearing the same robe, Elizabeth showed that she was continuing the Tudor family line. The golden color represents power, royalty, and greatness, and some people believe it also suggests the “Golden Age” of Elizabeth’s reign. The robe is decorated with Tudor roses. This rose combines a red rose and a white rose, symbols of two families that were once enemies. Their union created the Tudor dynasty, the family Elizabeth belonged to. Elizabeth is also shown wearing a crown and holding the orb and sceptre. These objects are symbols of her power as queen. The orb is especially important because it shows that Elizabeth was not only queen but also the head of the Church of England."
        },
        adult: {
          short: " The portrait depicts Queen Elizabeth I with the clothes, crown and jewelry that she wore during her coronation ceremony, while holding the symbols of her authority as queen. The painting is from an unknown artist, painted around 1600-1610.",
          medium: "On 15th January 1559 Elizabeth was crowned as Queen of England at only 25 years old. The portrait commonly known as 'The Coronation Portrait' by an Unknown Artist is oil on panel and dates around 1600-1610 is a copy of the original painting of 1559 that now is lost. Elizabeth is portrait  with the gold cloth that she wore during her coronation ceremony that had been made by her half-sister Mary five years before for her coronation. She holds the orb and scepter to symbolise her authority as queen reignant.",
          long: "On 15th January 1559 Elizabeth was crowned as Queen of England at only 25 years old. The portrait commonly known as 'The Coronation Portrait' by an Unknown Artist is oil on panel and dates around 1600-1610 is a copy of the original painting of 1559 that now is lost. The portrait is now held in the National Portrait Gallery, London , UK. Elizabeth is depicted wearing a gold cloth that she wore during her coronation ceremony. The cloth was made for her half-sister Mary I for her own coronation five years early in 1553, the decision of using Mary’s coronation robe may suggest the willingness of Elizabeth of demonstrating the natural continuity between Mary and her own reign, inside of the Tudor dynasty. The color of the cloth, gold is a symbol of royalty, majesty and power, some suggest that it was a hint of the “Golden age” that it would be the Elizabethan reign. The tudor rose features throughout the coronation robe, the rose that combine the white rose of the York family and the red one of the Lancaster family, two houses that were united at the end of the War of roses with the marriage of Henry VII and Elizabeth of York, Elizabeth grandparents that began the Tudor Dynasty. Elizabeth is depicted with the crown and holding the orb and scepter symbols of her authority as queen reignant. Some historians argued the importance of the orb in the portrait, not just because it is a traditional royal symbol but is particularly relevant in Elizabeth's case, since she represents the head of the Church of England, due to her father's controversies with the catholic church and making England a protestant country."
        }
      },
      popculture: {
        children: {
          short:"This painting shows Queen Elizabeth I dressed like she was on the day she became queen. The crown, clothes, and objects she holds helped people recognize her as a powerful ruler. Pictures like this helped everyone know what their queen looked like.",
          medium:"Queen Elizabeth I became queen in 1559. This painting, called The Coronation Portrait, shows her wearing the special clothes, crown, and jewelry from her coronation. At a time when people could not see the queen in person, paintings like this were very important. They helped spread her image across England and showed her as strong, confident, and royal. This portrait helped shape how people imagined their queen.",
          long: "Queen Elizabeth I became Queen of England in 1559, when she was 25 years old. This painting, known as The Coronation Portrait, was made many years later as a copy of the original image from her coronation. In the painting, Elizabeth wears rich golden clothes, a crown, and holds special objects called the orb and sceptre. These items were important symbols that showed her power as queen. The painting was not just meant to show what she looked like, but to send a message about who she was: strong, royal, and in control. In Elizabeth’s time, portraits were like today’s posters or photographs. They helped people recognize their ruler and remember her image. By choosing how she was shown, Elizabeth helped create a powerful royal image that people admired and remembered long after her reign."
        },
        adult:{
          short:"This portrait shows Queen Elizabeth I dressed in the clothing, crown, and jewels she wore at her coronation. More than a record of an event, the image helped create a powerful public image of the queen as a strong and legitimate ruler. Painted by an unknown artist around 1600–1610, it reflects how Elizabeth carefully shaped how she was seen by her people",
          medium:"Queen Elizabeth I was crowned in 1559 at the age of 25. This painting, known as The Coronation Portrait, was created around 1600–1610 as a copy of the original image made at the time of her coronation. Although painted decades later, the portrait became one of the most important images of Elizabeth’s reign. Through her clothing, crown, and the symbols she holds, Elizabeth presents herself as a powerful and rightful monarch. The image was widely copied and circulated, helping to fix her royal identity in the public imagination. It shows how portraits were used as a form of media to control and spread the queen’s image during the Elizabethan age.",
          long:"Queen Elizabeth I was crowned Queen of England on 15 January 1559, when she was just 25 years old. This painting, commonly known as The Coronation Portrait, was created by an unknown artist around 1600–1610 as a copy of the original coronation portrait, which is now lost. Today, the painting is held at the National Portrait Gallery in London. More than a simple likeness, the portrait was a carefully constructed image designed to shape how Elizabeth was seen by her subjects. She is shown wearing the golden coronation robe originally made for her half-sister Mary I, emphasizing continuity and legitimacy within the Tudor dynasty. The gold fabric, rich decoration, and Tudor roses all communicate majesty, power, and stability. Elizabeth holds the orb and sceptre, traditional symbols of royal authority, reinforcing her role as queen and supreme ruler. In a time before photography, portraits like this acted as powerful tools of communication, spreading an idealized image of the monarch throughout the kingdom. Through repeated copies and public display, Elizabeth’s image became iconic, helping to create the lasting visual identity of the “Virgin Queen” that still defines her place in popular culture today"
        }
      }
    },
    order: {
      historical: 1,
      popculture: 3
    }
  },

  {
    id: 2,
      title: "Chequers Ring",
      image: ["images/chequers_ring.jpg", "images/Elizabeth_I_Locket_Ring.jpg"],
      metadata: {
        fullName: "Chequers Ring",
        date: "1570",
        place: "Chequers, country house of the prime minister of the United Kingdom",
        materiality: "A mother of pearl ring, with gold and rubies",
        room: "Queen Elizabeth I's Room"
      },
      text:{ 
      historical: {
        children: {
          short: "The Chequers Ring is one of the few pieces of jewelry that belonged to Queen Elizabeth I that still exists today. It is a pearl ring decorated with rubies. Inside the ring there is a small secret compartment with two portraits: one of Queen Elizabeth and another of a woman who was very important in her life.",
          medium: "The Chequers Ring is one of Queen Elizabeth I’s most loved pieces of jewelry and one of the few that has survived to this day. The ring was made around the 1570s and is decorated with pearls, gold, and rubies. On the top of the ring, small diamonds form the letter E for Elizabeth, and underneath there is an R, which stands for Regina, the Latin word for queen. Inside the ring, there is a hidden locket with two tiny portraits. One shows Queen Elizabeth herself, and the other shows a woman whose identity has been a mystery for many years. Most historians believe this woman is Catherine Parr, Elizabeth’s stepmother.",
          long: "The Chequers Ring is one of the most special jewels owned by Queen Elizabeth I and one of the few that still exists today. The ring is kept at Chequers, the country house of the Prime Minister of the United Kingdom, which is why it is called the Chequers Ring. Although it is part of a private collection, it is sometimes shown to the public. The ring was made in the mid-1570s. It has a band made of mother-of-pearl and is decorated with gold and rubies. On the top of the ring, white diamonds form the letter E for Elizabeth, and below it an R for Regina, meaning queen. On the back of the ring there is a phoenix, a bird that rises from fire. This symbol may represent the Seymour family, who were connected to Elizabeth’s family, or it may simply have been a popular symbol in her jewelry. The most interesting part of the ring is hidden inside. When the ring opens, it reveals a small locket with two portraits. One portrait shows Queen Elizabeth I. The second portrait shows a younger woman, and for many years people have wondered who she is. Some thought it was Elizabeth’s mother, Anne Boleyn, or her half-sister Mary I. Today, many historians believe the woman is Catherine Parr, Elizabeth’s stepmother, who cared for her and played an important role in her life when she was young."
        },
        adult: {
          short: "'Chequers Ring' is one of the few surviving pieces of jewelry used by Queen Elizabeth I. Is a pearl ring with a set of rubies, with a locket with  the portrait of the queen itself and another woman, probably her mother or stepmother.",
          medium: "The 'Chequers Ring' is one of the most beloved jewels worn by Queen Elizabeth I, and one of the few surviving pieces of her jewels to us today. The ring dates mid-1570 and is a pearl ring with a string of gold with a set of table-cut of rubies, on the bezel part of the ring are white diamonds that form the E for Elizabeth and underneath an R for regina in cobalt blue enamel. Inside the basel there is a locket with two portraits, one is Elizabeth herself and the other has been a topic of speculation for several years. At the beginning it was thought that it was her mother Anne Boleyn or her step-sister Mary I, but  probably is Catherin Parr, Elizabeth step-mother.",
          long: "The ring dates to the mid-1570s, is a mother-of-pearl hoop mounted with a sheet of gold with a set of table-cut rubies. On the bezel white diamonds form the letter E for Elizabeth and underneath an R for regina in cobalt blue enamel. In the back of the bezel there is a phoenix, a typical symbol of the Seymour family, some argued that it was a gift from the Seymor Family to Elizabeth  (Jane Saymor was the third wife of Henry VIII, Elizabeth’s father, and the mother of Elizabeth's half brother, Edward VI who died at 15 years old). Others suggest that the phoenix was just a common symbol in other of Elizabeth’s jewellery. The most intriguing part of the ring is inside of the basel where there is a locket with two portraits, one is Elizabeth herself and the other has been a topic of speculation for several years. Due to the juxtaposition of Elizabeth’s portrait, it was said that the other portrait of a younger woman was traditionally said to be her mother, Anne Boleyn, specially because she was executed at a young age, when Elizabeth was just two years old. This was profoundly argued because it is said that Elizabeth mentioned very rarely her mother Anne, and the portrait shows a woman with red-ish hair color, therefore several argued that it was supposed to be her half-sister Mary I. It is likely that the young woman depicted is Catherine Parr (Elizabeth's father, Henry VIII last (six) wife), she is remembered with reddish hair and very close to Elizabeth, being her step-mother and a very important mother figure during adolescence."
        }
      },
      popculture: {
        children: {
          short:"The Chequers Ring is a special ring that belonged to Queen Elizabeth I. It was not just pretty jewelry, it helped show who she was as a queen and as a person. Inside the ring is a secret picture hidden from view.",
          medium:"The Chequers Ring is one of the few pieces of jewelry that belonged to Queen Elizabeth I and still exists today. The ring is decorated with pearls and rubies, and on top it shows the queen’s name and title. Inside the ring is a small hidden locket with two tiny portraits. One shows Queen Elizabeth, and the other shows a woman who was important to her. Jewelry like this helped Elizabeth create a powerful image while still keeping some things private.",
          long: "he Chequers Ring is a beautiful and meaningful ring that belonged to Queen Elizabeth I. It is decorated with pearls, gold, and rubies, and shows the queen’s initials to remind everyone that it belonged to her. What makes the ring special is what is hidden inside. When opened, it reveals two tiny portraits. One is of Elizabeth herself, and the other is of a woman who was very important in her life. This secret part shows that even though Elizabeth was a famous queen, she also had personal feelings and memories. Elizabeth’s clothes and jewelry were carefully chosen and copied by others. People paid close attention to how she looked, and her style became famous. The Chequers Ring helps us understand how Elizabeth used fashion and jewelry to shape her image and become an icon people still remember today."
        },
        adult:{
          short:"The Chequers Ring is one of the few surviving jewels worn by Queen Elizabeth I. More than decoration, the ring expressed identity, memory, and royal image. Its hidden portraits show how Elizabeth used personal jewelry to communicate emotion and meaning within her carefully controlled public image.",
          medium:"The Chequers Ring, dating from the mid-1570s, is one of the most personal pieces of jewelry associated with Queen Elizabeth I. Richly decorated with pearls, rubies, and diamonds, the ring displays the queen’s initials and royal title, turning a private object into a statement of identity. Inside the ring is a hidden locket with two miniature portraits: one of Elizabeth herself and another of a woman close to her. This secret detail contrasts with the queen’s public image and shows how jewelry allowed Elizabeth to express personal relationships while maintaining a carefully managed royal persona. Such objects contributed to the fascination surrounding Elizabeth’s image in popular culture.",
          long:"The Chequers Ring, made in the mid-1570s, is one of the most intimate surviving objects connected to Queen Elizabeth I. Decorated with mother-of-pearl, gold, rubies, and diamonds, the ring combines luxury with symbolism. On the bezel, diamonds form the letter E for Elizabeth, with an R beneath it for Regina, reinforcing her royal identity even in personal adornment. On the reverse is a phoenix, a symbol of rebirth and endurance, often associated with Elizabeth’s image as the eternal queen. The most intriguing feature lies hidden inside the ring: a locket containing two miniature portraits—one of Elizabeth and another of a woman believed to be Catherine Parr, her stepmother. This private element reveals the emotional side behind the queen’s carefully constructed public image. Elizabeth I famously used fashion and jewelry as tools of communication. Her appearance was closely observed, copied, and discussed, turning her into a cultural icon. The Chequers Ring shows how even small personal objects contributed to the myths and stories surrounding the queen, strengthening her lasting presence in popular culture"
        }
      }
    },
    order: {
      historical: 2,
      popculture: 4
    }
  },
  {
    id: 3,
    title: "Tilbury Speech",
    image: ["images/tilbury-speech.jpg"],
    metadata: {
      fullName: "Tilbury Speech",
      date: "1588",
      place: "Harleian Collection, British Library",
      materiality: "Ink on paper",
      room: "Queen Elizabeth I's Room"
    },
    text: {
      historical:{
        children: {
          short: "This is a famous speech given by Queen Elizabeth I in 1588 to her soldiers in Tilbury, England. She spoke to them before a big battle against Spain, encouraging them to be brave and loyal. The speech shows how much the queen cared about protecting her country.",
          medium: "The Tilbury Speech was given by Queen Elizabeth I on 19 August 1588 to English soldiers gathered in Tilbury, Essex. They were preparing to defend England from an invasion by the Spanish Armada. In her speech, Elizabeth encouraged the soldiers to be brave and loyal. She showed that she was ready to stand with them and protect her kingdom. England won this important battle against Spain, and the speech helped make Elizabeth very popular as a strong and caring ruler. The document we have today is a copy of the speech written down years later to remember this important moment in history.",
          long: "The Tilbury Speech was spoken by Queen Elizabeth I on 19 August 1588 to English soldiers gathered in Tilbury, Essex. At that time, England was under threat of invasion by the Spanish Armada, a powerful fleet sent by King Philip II of Spain. He wanted to defeat Elizabeth and bring England back under Catholic rule. Queen Elizabeth visited the army and gave a powerful speech to encourage her soldiers. She told them she trusted them and was ready to stand with them, even in battle. Her words inspired courage, loyalty, and love for their country. The speech showed Elizabeth as a brave and determined leader who was willing to defend England at all costs. Although the war with Spain continued until 1604, England defeated the Spanish Armada in this key battle. After this victory, Elizabeth became even more admired by her people and was seen as the queen who protected the nation. The text we have today is a copy of the speech written down years later, and it is remembered as one of the most important speeches in English history."
        },
        adult: {
          short: "The speech given by Queen Elizabeth I in 1588 to the English army in Tilbury, Essex before facing the Spanish armada. The speech inspired loyalty and courage from the soldiers to face the Spanish invasion, it demonstrated the queen’s dedication to her kingdom.",
          medium:"The “Tilbury Speech” was the speech delivered on August 19th 1588 by Queen Elizabeth to the English troops assembled at Tilbury, Essex while preparing to face the invasion of the Spanish Armada. The speech inspired loyalty and courage from the soldiers to face the Spanish invasion, it demonstrated the queen’s dedication to her kingdom. While the war with Spain would continue until 1604, for this battle England defeated the Spanish Armada, and Elizabeth's popularity increased and became the nation saviour who stood firm to protect her nation. The document is a copy of the speech recorded several years later, to remember one moment that defines English history.",
          long: "The “Tilbury Speech” was the speech delivered on August 19th 1588 by Queen Elizabeth to the English troops assembled at Tilbury, Essex while preparing to face the invasion of the Spanish Armada. England faced an invasion by the Spanish Armada (called at the time the Invincible Armada) sent by the catholic King Philip II of Spain to overthrow the protestant and illegitimate Queen Elizabeth I and restore Catholicism in England. The speech inspired patriotism and courage from the soldiers to face the Spanish invasion, it demonstrated the queen’s resolute leadership and dedication to her kingdom. While the war with Spain would continue until 1604, for this battle England defeated the Spanish Armada, and Elizabeth's popularity increased and became the nation saviour who stood firm to protect her nation. This document is a copy of the speech recorded several years later. The speech became an iconic symbol of national resistance remembered as a moment that defines English history. Here is the full text of the actual speech delivered by Queen Elizabeth."
        }
      },
      popculture: {
        children: {
          short:"In 1588, Queen Elizabeth I gave a famous speech to her soldiers before a big battle. Her strong words helped people see her as a brave leader who cared about her country.",
          medium:"The Tilbury Speech was given by Queen Elizabeth I in 1588 to soldiers who were getting ready to defend England. She spoke to them in person, encouraging them to be brave and loyal. This moment was very important because people remembered not only what she said, but how she said it. The speech helped create the image of Elizabeth as a strong and confident queen, and her words were shared long after the event.",
          long: "In 1588, Queen Elizabeth I went to Tilbury to speak to her soldiers before they faced the Spanish Armada. At a time when many people thought queens should stay out of war, Elizabeth surprised everyone by speaking directly to the army. Her speech showed courage and confidence. She told the soldiers she trusted them and was ready to stand with them. Later, her words were written down and shared, helping people remember her as a brave and powerful ruler. The Tilbury Speech helped shape how people saw Queen Elizabeth I. It turned her into a symbol of strength and leadership, and it is still remembered today as one of the most famous speeches in English history."
        },
        adult:{
          short:"The Tilbury Speech shows how Queen Elizabeth I used words and public appearance to shape her image as a strong ruler. Delivered in 1588 to her soldiers, the speech became a powerful example of how the queen performed leadership and inspired loyalty through carefully chosen language.",
          medium:"The Tilbury Speech was delivered by Queen Elizabeth I on 19 August 1588 to English troops gathered at Tilbury, just before facing the Spanish Armada. More than a military address, the speech was a carefully staged public moment that presented Elizabeth as brave, confident, and committed to her people. By appearing before the army and speaking directly to the soldiers, Elizabeth created a powerful image of leadership. Her words were later written down and circulated, turning the speech into a key part of her public image. Over time, it became one of the most famous examples of how a queen used performance and language to influence popular opinion.",
          long:"On 19 August 1588, Queen Elizabeth I delivered the speech now known as the Tilbury Speech to English soldiers assembled at Tilbury, Essex, as they prepared to defend England against the Spanish Armada. At a moment of national danger, the speech became a carefully crafted act of leadership that combined politics, performance, and image-making. Elizabeth’s appearance before the troops challenged expectations of female rule. By declaring her willingness to live and die alongside her soldiers, she presented herself as both monarch and warrior. The speech was later recorded and shared, allowing the moment to reach a much wider audience than those present at Tilbury. Over time, the Tilbury Speech became one of the most famous texts associated with Elizabeth I. It helped create the enduring image of the queen as a fearless protector of the nation and remains a powerful example of how words, performance, and media shaped royal identity in early modern popular culture."
        }
      }
    },
    order: {
      historical: 3,
      popculture: 1
    }
  },
  {
    id: 4,
    title: "First Folio",
    image: ["images/FF.png","images/shake-FF.jpg"],
    metadata: {
      fullName: "First Folio",
      date: "1623",
      place: "Folger Shakespeare Library",
      materiality: "Printed book",
      room: "Queen Elizabeth I's Room"
    },
    text: {
      historical: {
        children: {
          short: "The First Folio is a book that collects all the plays written by William Shakespeare. It was published in 1623, seven years after his death. Shakespeare wrote his plays during the time of Queen Elizabeth I, and some of them were performed at her royal court.",
          medium: "The First Folio is a famous book that brings together many of the plays written by William Shakespeare. It was published in 1623, seven years after Shakespeare died. The book includes 36 plays and was prepared by two of his friends and fellow actors, John Heminges and Henry Condell. This collection is very important because many of Shakespeare’s plays had never been printed before. If they had not been included in the First Folio, some of his most famous works might have been lost forever. Shakespeare lived and worked during the Elizabethan era, a time when art and theatre were very important, and several of his plays were performed for Queen Elizabeth I herself.",
          long: "The First Folio is one of the most important books in history. It is a collection of plays written by William Shakespeare and was published in 1623, seven years after his death. When it was first printed, it was called “Mr. William Shakespeare’s Comedies, Histories and Tragedies.” The book contains 36 plays and was put together by Shakespeare’s friends and fellow actors, John Heminges and Henry Condell. The First Folio is especially important because, during Shakespeare’s lifetime, only 19 of his plays had been printed. Thanks to this book, about 20 other plays were saved from being lost forever. Famous works such as Macbeth, Julius Caesar, The Tempest, and Twelfth Night were printed for the first time in this collection. The book was printed in a large format called a folio, which is why it is known today as the First Folio. Around 750 copies were originally printed, but only about 235 still exist today. Most of them are kept in libraries, museums, or private collections in England and the United States. Shakespeare lived during the Elizabethan era, also known as the “Golden Age” of English theatre. Queen Elizabeth I strongly supported the arts, and several of Shakespeare’s plays were performed at her court. Her love for theatre helped create the perfect environment for Shakespeare to become one of the most famous playwrights in history."
        },
        adult: {
          short:"The collection of all of William Shakespeare plays, it was published in 1623, seven years after his death. Shakespeare wrote all his plays during the Elizabethan era, and several of the plays in the collection were performed in Queen Elizabethf court.",
          medium:"The 'First Folio' is a collection of plays of William Shakespeare commonly called First Folio by modern scholars, but it was published with the name “Mr. William Shakespeare’s Comedies, Histories and Tragedies”.  Published in 1623, seven years after Shakespeare’s death. The collection contains 36 of the author's plays; it was put together and edited by Shakespeare colleagues John Heminges and Henry Condell. The collection is particularly important because until Shakespeare’s death just 19 of his plays were published, with the collection of plays in the First Folio we have today almost 20 plays that if not published could have been lost forever. Shakespeare wrote his masterpieces during the english renaissance, also called the Elizabethan era, during the reign of Queen Elizabeth I the arts and culture flourish, several of Shakespeare plays were performed in the queen court, she being a big supporter of the arts.",
          long:"The ‘First Folio’ is a collection of plays of William Shakespeare commonly called First Folio by modern scholars, but it was published with the name “Mr. William Shakespeare’s Comedies, Histories and Tragedies”.  Published in 1623, seven years after Shakespeare’s death. The collection contains 36 of the author's plays; it was put together and edited by Shakespeare colleagues John Heminges and Henry Condell. The collection is particularly important because until Shakespeare’s death just 19 of his plays were published, with the collection of plays in the First Folio the only reliable text for about 20 plays that if not published could have been lost forever. For example eighteen of the plays in the First Folio including Macbeth, Julius Caesar, The tempest, Twelfth Night among others were not known to have been previously printed. Printed in folio format, the reason why is called first folio nowadays, there were around 750 copies printed just 235 remain today, most of which are kept in public archives or private collections. Most of the copies are in England and in the Folger Shakespeare Library in Washington D.C, USA. Today is considered as one of the most influential books ever published, especially for the arts and drama. It is commonly known that Shakespeare was very close to the court of Queen Elizabeth I, several of Shakespeare's plays were performed in her court. Queen Elizabeth is remembered as patron to the arts and culture, and is said that her reign brought the Renaissance in England. The Elizabethan age is called the “Golden Age” for the dramatic arts being Shakespeare the perfect example, she supported the theatre and provided a prosper environment for the dramatic arts allowing Shakespeare to become one of the most important playwrights of history."
        }
      },
      popculture: {
        children: {
          short:"Shakespeare’s First Folio is a famous book that helped spread stories about kings and queens. Shakespeare wrote his plays during the time of Queen Elizabeth I, and some of them were performed at her royal court, it shows how plays helped people imagine what rulers were like long ago.",
          medium:"The First Folio is a book that collected Shakespeare’s plays and helped save them for the future. Many of these plays talk about kings, queens, and power.  By turning plays into a book, the stories could reach many more people. This helped shape how people thought about rulers and made theatre an important part of popular culture.",
          long:"Shakespeare’s First Folio, published in 1623, collected many famous plays that had been performed for both royal families and ordinary people. These stories often showed kings and queens making important choices, helping audiences think about power and leadership. Before the book was printed, people could only see these stories on stage. The First Folio helped share them with many more readers, making them part of everyday culture. Because of this book, ideas about queens, rulers, and heroes were passed down for generations. The First Folio shows how stories and books helped shape popular culture and how people remembered their rulers."
          },
        adult:{
          short:"Shakespeare’s First Folio shows how royal power and popular culture were closely connected. By preserving plays written for royal courts and public theatres, the book helped shape ideas about monarchy, authority, and national identity during the age of queens.",
          medium:"Published in 1623, Shakespeare’s First Folio collected 36 plays that had been performed at court and in public theatres. Many of these works reflect the power, image, and challenges of monarchy, themes that resonated strongly in a society shaped by powerful queens such as Elizabeth I. The Folio transformed live performance into a widely shared cultural object. By turning plays into printed texts, it allowed royal ideas, characters, and values to circulate far beyond the stage, helping popular culture play a key role in shaping how rulers were imagined and remembered.",
          long: "Shakespeare’s First Folio, published in 1623, is one of the most important books in English literary history. It preserved 36 plays that were originally written for performance, many of them staged before royal audiences as well as the general public. These works often explored themes of kingship, legitimacy, power, and succession—central concerns in a culture shaped by the reign of Queen Elizabeth I and the early Stuart monarchs. The Folio marked a major shift in how culture was shared. By transforming theatre into print, it allowed royal images and political ideas to reach readers across England and beyond. Plays that once existed only as live performances became lasting cultural references, shaping how people understood monarchy and authority. In this way, the First Folio represents an early form of mass media. It shows how literature and performance helped create powerful images of rulers and queens, contributing to the long-lasting connection between royalty and popular culture."
      
        }
      }
    },
    order: {
      historical: 4,
      popculture: 2
    }
  },
    {
    id: 5,
    title: "Queen Victoria's Wedding Dress",
    image: ["images/qVictoria_wedding-dress.jpg", "images/WDVic.jpg" ],
    metadata: {
      fullName: "Wedding Dress",
      date: "1840",
      place: "Royal Collection, Kensington Palace",
      materiality: "Heavy silk satin, honiton lace",
      room: "Queen Victoria's Room"
    },
    text: {
      historical:{
        children: {
          short: "In February 1840, Queen Victoria married Prince Albert. She wore a beautiful white wedding dress made of silk. At that time, most brides did not wear white, but after Queen Victoria’s wedding, white dresses became a tradition for brides.",
          medium: "On 10 February 1840, Queen Victoria married Prince Albert at St James’s Palace in London. For her wedding, she wore a white dress made of silk and decorated with lace. At the time, queens usually wore rich red or purple robes, but Victoria chose white instead. People saw this as a romantic choice that made her look like a young and loving bride. Her wedding attracted a lot of attention, and soon many brides began choosing white dresses. This is how the white wedding dress became a tradition.",
          long: "On 10 February 1840, Queen Victoria married Prince Albert at St James’s Palace in London. For the ceremony, she wore a white wedding dress made of silk satin and decorated with beautiful lace and orange blossoms. The lace was designed by William Dyce, and the dress was made by Mary Bettans. The dress had a long train that was carried by her bridesmaids. Today, Queen Victoria’s wedding dress is kept at Kensington Palace. At the time, royal brides usually wore rich red or velvet robes to show their power. Queen Victoria chose white instead, which made her look romantic and gentle. Many people loved this image of the queen as a young bride, and the idea of the bride dressed in white quickly became popular, especially among wealthy families in England. White dresses also matched the values of the Victorian age, which focused on modesty and good behavior. After Queen Victoria’s wedding, white became the most common color for brides marrying for the first time. Interestingly, Queen Victoria did not choose white to start a fashion trend. She wanted to support British lace makers, who were struggling because of new machines and factories during the Industrial Revolution. By wearing lace made by hand, she helped bring attention to their work."
        },
        adult: {
          short:"In February of 1840, Queen Victoria married Prince Albert. She wore a white wedding dress made of heavy silk satin. Queen Victoria was one of the first women to get married in a white dress, after her it became a tradition white bridal gowns became a tradition.",
          medium:"On February 10th, 1840 Queen Victoria married Prince Albert Saxe-Coburg and Gotha at St James’s Palace, London. She wore a white wedding dress made of heavy silk satin with a honiton lace. The lace was designed by William Dyce the head of the government school of design and the dress design by Mary Bettans. Queen Victoria was one of the first women to wear a white dress, the decision of the queen of wearing a white dress instead of the crimson velvet robe of state was acknowledged as a romantic gesture and gave the notion of the Queen as an adoring innocent bride. This decision captured the public attention creating the visual idea of the bride in pure white, after which a white wedding dress became the norm for brides marrying for the first time.",
          long:"On February 10th, 1840 Queen Victoria married Prince Albert Saxe-Coburg and Gotha at St James’s Palace, London. She wore a white wedding dress made of heavy silk satin with an elaborate honiton lace flounce, trimmed with orange blossom. The lace was designed by William Dyce the head of the Government School of Design (Royal College of Art) and the dress design by Mary Bettans. The design of the dress was a wide open neckline and a deep-V shaped waistline, it included an eighteen foot long court train of satin, carried by her bridesmaids in the aisle of the church. Today the dress is kept in Kensington Palace Museum. Queen Victoria was not the first woman to wear a white dress, but the decision of the queen of wearing a white dress instead of the crimson velvet robe of state was acknowledged as a romantic gesture and gave the notion of the Queen as an adoring innocent bride.This decision captured the public attention and the visual ideal of the bride in pure white spread quickly specially in english high society. The visual of the pure, untouched virgin bride that the white dress represents spread easily in the Victorian age, which valued modesty and a strict morality. Therefore after the wedding of Queen Victoria a white wedding dress became the norm for brides marrying for the first time. The actual reason of Queen Victoria for choosing a white dress was not to make it a tradition but she wanted to support and stimulate Britain’s lace industry. Several skilled artisans were facing poverty due to the big development in the textile industry brought from the industrial revolution."
        }
      },
      popculture: {
        children: {
          short:"Queen Victoria wore a white wedding dress that changed fashion forever. After her wedding, many brides wanted to dress like the queen.",
          medium:"When Queen Victoria married Prince Albert, she wore a white dress instead of a colorful one. People saw pictures of her wedding and loved her style. Soon, brides everywhere started wearing white dresses too. Her choice showed how a queen’s fashion could inspire people far beyond the palace.",
          long:"At her wedding in 1840, Queen Victoria chose to wear a white dress, which was very unusual at the time. Most brides wore colorful clothes, but Victoria wanted something simple and elegant. Pictures and stories about her wedding spread quickly, and many people wanted to copy her style. Soon, wearing white became a popular tradition for brides. Queen Victoria’s wedding dress shows how fashion and popular culture can be shaped by a queen’s personal choices, turning one dress into a tradition that still exists today."
        },
        adult:{
          short:"Queen Victoria’s wedding dress transformed royal fashion and popular culture. By choosing a white gown, she set a trend that reshaped bridal traditions and continues to influence weddings today.",
          medium:"Queen Victoria’s wedding dress, worn in 1840 for her marriage to Prince Albert, marked a turning point in fashion and popular culture. Instead of wearing a richly colored gown, she chose a white silk satin dress decorated with Honiton lace. This personal fashion choice was widely reproduced in newspapers, prints, and paintings, quickly influencing public taste. The dress helped establish white as the symbol of bridal purity and elegance, showing how a queen’s image could shape everyday customs far beyond the royal court.",
          long: "Queen Victoria’s wedding dress, worn in 1840 when she married Prince Albert, became one of the most influential fashion statements in modern history. At the time, royal brides often wore richly colored dresses, but Victoria chose a white silk satin gown trimmed with handmade Honiton lace, emphasizing craftsmanship and British industry. The wedding was widely reported in newspapers and illustrated prints, allowing Victoria’s image to circulate across the country and beyond. As a result, her dress quickly became a model for brides of all social classes. White, once an unusual choice, was transformed into the standard color for Western wedding gowns. Victoria’s decision shows how a queen’s personal style could shape popular culture. Through media coverage and public fascination, her image bridged royal ceremony and everyday life, turning a private choice into a lasting cultural tradition."
        }
      }
    },
    order: {
      historical: 3,
      popculture: 2
    }
  },
   {
    id: 6,
    title: "Coronation Portrait",
    image: [ "images/Coronation_portrait_of_Queen_Victoria_1838.jpg"],
    metadata: {
      fullName: "Coronation Portrait",
      date: "1838",
      place: "National Portrait Gallery, London",
      materiality: "Oil on canvas",
      room: "Queen Victoria's Room"
    },
    text: {
      historical: {
        children: {
          short: "Queen Victoria became the ruler of the United Kingdom in 1838 when she was only 18 years old. This portrait, painted by George Hayter, shows the young queen wearing the crown, robes, and holding the sceptre she used at her coronation.",
          medium: "Queen Victoria was crowned Queen of the United Kingdom on 28 June 1838 at Westminster Abbey, when she was just 18 years old. This painting was made in the same year by the artist George Hayter. In the portrait, Queen Victoria is shown sitting and wearing her coronation robes. She wears the Imperial State Crown and holds the sceptre with the cross, symbols of her power as queen. This painting is known as her coronation state portrait. Several copies were made later, and one of the most famous can be seen today at the National Portrait Gallery in London.",
          long: "Queen Victoria was crowned Queen of the United Kingdom on 28 June 1838 at Westminster Abbey when she was only 18 years old. This portrait was painted in the same year by the English artist George Hayter using oil on canvas. The painting shows the young queen sitting on a ceremonial chair. She is wearing her coronation robes and the Imperial State Crown, and she holds the sceptre with the cross in her hand. These objects are symbols of her role as queen. The main version of this portrait is kept at Holyrood Palace in Edinburgh, and several copies were made. One well-known copy from 1863 is now in the National Portrait Gallery in London. At first, Hayter planned to place Queen Victoria inside Westminster Abbey, where the coronation took place. Later, he chose a more general royal setting instead. The queen’s face is turned slightly upward and lit by a soft light, which gives the painting a hopeful and powerful feeling. Many people believe this reflects the optimism felt by the British people at the beginning of her long reign. George Hayter also painted a large scene of the coronation ceremony itself in 1839. For many years, he worked closely with Queen Victoria and created several important royal portraits before she later chose other artists."
        },
        adult: {
          short:"Queen Victoria was crowned as the ruler of the United Kingdom in 1838 at the age of 18. The portrait by George Hayter of the same year shows the young queen in the regal gowns, crown and scepter worn during her coronation ceremony.",
          medium:"Queen Victoria was crowned as the ruler of the United Kingdom on June 28 th 1838 at Westminster Abbey when she was just 18 years old. The portrait is oil on canvas, from the same year of the coronation by the English artist George Hayter. The painting portrays the young Queen sitting wearing her coronation robes, while wearing the Imperial state Crown and holding in one hand the scepter with the cross. Hayter was also commissioned to do a painting of a scene from the actual coronation ceremony, which was later done in 1839, while this portrait was called the coronation state portrait of the Queen. There were several copies years after the original portrait, one of the most famous copies is the one in the National Portrait Gallery, London of 1863.",
          long:"Queen Victoria was crowned as the ruler of the United Kingdom on June 28 th 1838 at Westminster Abbey when she was just 18 years old. The painting is Oil on Canvas, dated from the same year of the coronation done by the English artist George Hayter.Today the principal version of the portrait is located at Holyrood Palace, Edinburg, even though several copies of the original painting are at Buckingham Palace and one of the most famous ones is at the National Portrait Gallery, London of 1863. The painting portrays the young Queen sitting in her homage Chair, wearing her Coronation Robes and the Imperial State Crown while holding in one hand the Scepter with the Cross. Hayter’s first idea for the background of the portrait shows the Queen in Westminster Abbey, but later decided to change it and place her in a more generic but still a regal setting. Queen Victoria’s pose with an upturned face illuminated by a shaft of light, the composition of the painting is reminiscent of Baroque painting. Several argued that these features capture the spirit of optimism felt by the nation at the start of her long and strong reign. The artist George Hayter was also commissioned to do a painting of a scene from the actual coronation ceremony, which was later done in 1839 known as The Coronation of Queen Victoria, in addition to painting this portrait called the coronation state portrait of the Queen. Hayter in 1837 was appointed as Victoria’s Painter of History and Portrait and later became Principal Painter of the Ordinary, this led to the production of several royal paintings done by him. Then by 1843 Hater did not receive royal commissions as the Queen came to prefer the work of other artists."
        }
      },
      popculture: {
        children: {
          short:"Queen Victoria became Queen of the United Kingdom  when she was only 18 years old.This portrait shows Queen Victoria at her coronation. It helped people imagine their new young queen.",
          medium:"When Queen Victoria became queen at just 18 years old, an artist painted her coronation portrait. She is shown wearing a crown and royal clothes. Many people saw copies of this image, even if they never saw the queen in real life. The portrait helped everyone recognize and remember her.",
          long: "Queen Victoria became queen when she was only 18 years old. To show people what their new queen looked like, an artist painted her coronation portrait. In the painting, Victoria wears a crown and special royal clothes and holds a sceptre. Copies of the portrait were shared with many people, helping them feel connected to their queen. This portrait shows how pictures of queens helped shape popular culture, letting people learn about royalty through images long before television or social media."
        },
        adult:{
          short:"Queen Victoria became the ruler of the United Kingdom in 1838 when she was only 18 years old.Queen Victoria’s coronation portrait helped shape her public image as a young and powerful monarch. Through this widely copied image, royal portraiture became a key tool in popular culture.",
          medium:"Painted by George Hayter in 1838, Queen Victoria’s coronation portrait presents the young queen as a symbol of authority and renewal. Wearing her coronation robes, crown, and holding the sceptre, Victoria appears both regal and approachable. The portrait was widely reproduced in prints and copies, allowing the queen’s image to circulate beyond the court. This helped establish a visual identity that connected monarchy, media, and popular culture at the beginning of her reign.",
          long:"Queen Victoria’s coronation portrait, painted by George Hayter in 1838, played a crucial role in shaping how the young queen was seen by the public. At just eighteen years old, Victoria used portraiture to project confidence, legitimacy, and continuity at the start of her reign. The painting presents Victoria wearing her coronation robes, the Imperial State Crown, and holding the Sceptre with the Cross. Although rooted in traditional royal symbolism, the portrait emphasizes her youth and calm expression, making her image both powerful and relatable. Hayter’s decision to place the queen in a dignified but generalized setting strengthened her timeless, iconic appearance. Multiple copies and engravings of the portrait were produced and distributed, allowing Victoria’s image to reach a wide audience. In this way, the coronation portrait became an early example of royal image management, showing how monarchy, visual media, and popular culture intersected to shape public perception."
        }
      }
    },
    order: {
      historical: 2,
      popculture: 5
    }
  },
{
    id: 7,
    title: "Love letters between Albert and Victoria",
    image: [ "images/loveletters.jpg"],
    metadata: {
      fullName: "Love letters between Albert and Victoria",
      date: "1836",
      place: "Goethe Insitute, UK",
      materiality: "Ink on Paper",
      room: "Queen Victoria's Room"
    },
    text: {
      historical:{
        children: {
          short: "This letter is part of a collection of love letters written by Queen Victoria and Prince Albert. Their letters show how much they cared for each other before they were married. They help us understand that Queen Victoria was not only a ruler, but also a person in love.",
          medium: "The love letters between Queen Victoria and Prince Albert are part of a large collection of letters they wrote to each other during their courtship. They began writing letters after they first met in 1836. Even though they were cousins, their friendship slowly turned into a romantic relationship. These letters show how deeply Victoria and Albert cared for each other. Through their words, we can see the queen’s feelings, thoughts, and love for Albert. The letters help us understand their strong relationship and are remembered today as part of one of history’s most famous royal love stories.",
          long: "The love letters between Queen Victoria and Prince Albert are part of a large collection of more than 5,000 letters written after they first met in 1836. The letters were written in both English and German, and after their engagement, they mostly wrote to each other in German. Today, these letters are kept in the Royal Archives at Windsor Castle. At first, Victoria and Albert were cousins, but over time their friendship grew into love. Victoria wrote in her diary that Albert was “extremely handsome.” When Albert visited England in 1839, Victoria surprised everyone by proposing to him herself. Their letters from this time are full of strong emotions and show how much they loved each other. On the day they became engaged, Albert wrote that he felt as if Heaven had sent him an angel. These letters are very important because they show a personal side of Queen Victoria. They reveal that behind the serious image of a powerful queen was a woman who loved deeply, shared interests with her husband, and sometimes even argued with him. The letters continued until Albert’s death in 1861 and are remembered today as one of the greatest royal love stories in history."
        },
        adult: {
          short:"This document makes part of the collection of several love letters between Victoria and Albert. The relationship between Victoria and Albert is known as deeply affectionate and caring for each other. The collection of letters between the both of them during their courtship before their wedding demonstrate their love for each other.",
          medium:"The love letters between Queen Victoria and Prince Albert are a collection of several letters primarily written in German, that began in 1836 after their first meeting and continued for the next few years. Although they were cousins since their first meeting their affection grew more over time becoming a romantic interest. The exchange of letters during their courtship before their wedding demonstrated their deep affection and romantic love for each other. Their letters are particularly important items that demonstrated that behind the stoic monarch was a woman that loved with all her heart her husband, providing a look into their strong partnership, shared interest and deep love. Today the collection of letters are a testament of one of history’s great royal romances.",
          long:"The love letters between Queen Victoria and Prince Albert are a collection of over 5000 correspondence that began in 1836 after their first meeting. The letters were written in English and German, but after their engagement, the letters were primarily written in German. Today the letters are held in the Royal Archives at Windsor Castle, UK. Although they were cousins after their first meeting their affection grew more over time becoming a romantic interest, she described him in her journal as “extremely handsome”. The couple’s affection depended over time, when Albert visited England in 1839 Victoria proposed to him. The exchange of letters during their courtship before their wedding demonstrated their passionate and deep love for each other. For instance on their engagement day Albert wrote to her “I... can only believe that Heaven has sent down an angel to me, whose radiance is intended to brighten my life”. The letters are a particularly important item that demonstrated that behind the stoic monarch was a woman who loved her husband with all her heart. They provide a look into their strong partnership, shared interests, and deep love, even detailing marital disagreements. The collection is an invaluable source that humanizes the figure of Queen Victoria and offers an unique view into her personal life, especially because they sharply contrast with the restrained social conventions of the Victorian era. The correspondence continued until Albert's death in 1861 and remains a testament to one of history's great royal romances."
        }
      },
      popculture: {
        children: {
          short:"These letters show that Queen Victoria was deeply in love with Prince Albert. They help us see the queen as a real person with feelings.",
          medium:"Queen Victoria and Prince Albert wrote many love letters to each other before and during their marriage. In these letters, the queen talks about her feelings and how important Albert was to her. These letters helped change how people saw Queen Victoria, showing her not only as a ruler but also as a loving wife.",
          long: "Queen Victoria and Prince Albert exchanged many letters written in English and German. They began writing to each other after they first met, and their letters continued throughout their marriage. The letters show Queen Victoria as a woman in love, not only as a powerful monarch. She writes about her happiness, her worries, and her strong bond with Albert. When these letters became known, they helped shape the public image of the queen as devoted, emotional, and caring. Through these letters, people today can better understand Queen Victoria as both a queen and a person, and how her private life became part of her public image."
        },
        adult:{
          short:"The love letters between Queen Victoria and Prince Albert reveal a deeply affectionate relationship that strongly influenced Victoria’s public image as a devoted wife and emotional monarch.",
          medium:"The correspondence between Queen Victoria and Prince Albert offers a rare insight into the queen’s private emotional life. Written mainly in English and German, the letters reveal a relationship marked by deep affection, admiration, and emotional dependence. Although intended to be private, these letters later helped shape Victoria’s public image. They contributed to the popular perception of the queen as a loving wife and partner, reinforcing Victorian ideals of marriage, morality, and domestic devotion.",
          long:"The love letters exchanged between Queen Victoria and Prince Albert form a collection of over 5,000 pieces of correspondence written between 1836 and Albert’s death in 1861. Written in both English and German, the letters reveal a deeply affectionate and emotionally intense relationship. These personal writings show Queen Victoria not only as a ruler but as a woman in love, expressing desire, vulnerability, joy, and grief. When later studied and published, the letters played an important role in shaping Victoria’s image in popular culture, presenting her as the embodiment of domestic virtue and marital devotion. This image strongly influenced Victorian social values and expectations, turning the queen’s private relationship into a public model of ideal marriage. The letters humanize the monarch and demonstrate how personal expression and private media could shape royal identity and popular culture."
        }
      }
    },
    order: {
      historical: 1,
      popculture: 3
    }
  },
{
    id: 8,
    title: "The Royal Family in 1846",
    image: [ "images/royalfamily.jpg"],
    metadata: {
      fullName: "The Royal Family in 1846",
      date: "1846",
      place: "Royal Collection, Buckingham Palace",
      materiality: "Oil on canvas",
      room: "Queen Victoria's Room"
    },
    text: {
      historical:{
        children: {
          short: "This painting from 1846 shows Queen Victoria and Prince Albert with five of their children. Queen Victoria is often called the “Grandmother of Europe” because her children married into many royal families across Europe, connecting many kings and queens.",
          medium: "The Royal Family is a painting made in 1846 by the artist Franz Xaver Winterhalter. It shows Queen Victoria and her husband, Prince Albert, together with five of their nine children. The painting focuses on family love and closeness, while also showing their royal status through their elegant clothes and jewelry. Queen Victoria later became known as the “Grandmother of Europe” because her children married into royal families in many different European countries. This painting helps us understand how royal families across Europe became closely connected.",
          long: "The Royal Family is an oil painting created in 1846 by the German artist Franz Xaver Winterhalter. Today, it is part of the Royal Collection and can be seen at Buckingham Palace in London. The painting shows Queen Victoria with her husband, Prince Albert, and five of their nine children. It was designed to show not only their royal power but also a sense of family love, peace, and happiness. Queen Victoria is wearing a beautiful crown-like jewel called a diadem, made of emeralds and diamonds, while Prince Albert is dressed in formal court clothes. Their children are shown close to their parents, emphasizing the importance of family. Queen Victoria is often called the “Grandmother of Europe” because most of her children married princes and princesses from other European countries. As a result, many royal families across Europe were related to her. Years later, this meant that some European kings were cousins, even during times of conflict. Queen Victoria herself asked the artist Winterhalter to paint this picture. When it was finished, she loved it very much and wrote in her diary that it was one of her favorite portraits."
        },
        adult: {
          short:"The painting by Franz Xaver Winterhalter of 1846 portraits Queen Victoria and Prince Albert with five of their nine children. Queen Victoria is remembered as the “grandmother of Europe” because all her children married several European royal families, spreading her lineage all over the crowns of Europe.",
          medium:"“The Royal Family” is an 1846 painting, oil on canvas of the German artist Franz Xaver Winterhalter. It depicts Queen Victoria with her consort Prince Albert with the oldest five of their nine children that they had together. The portrait was meant to emphasize the sense of family harmonizing while wearing elements of royal status, such as jewels and attire. In particular Victoria wears an emerald and diamond diadem, while Prince Albert wears a court dress. The representation of Queen Victoria with her children is fundamental to understanding the succession of the royal families of Europe for the following decades after Victoria’s reign. Queen Victoria is sometimes called “The Grandmother of Europe”, due to all her children excluding the heir to the English Crown were married with the heirs of several royal families of European countries, spreading Queen Victoria lineage all over the crowns of Europe.",
          long:"“The Royal Family” is an 1846 painting, oil on canvas of the German artist Franz Xaver Winterhalter. The painting is part of the royal collection and is held at the East Gallery at Buckingham Palace, London. It depicts Queen Victoria with her consort Prince Albert with the oldest five of their nine children that they had together. The portrait was meant to emphasize the sense of family, domestic harmony, peace and happiness with several allusions to royal status, such as jewels, attire, furniture and the continuation of the royal lineage. In particular Victoria wears an emerald and diamond diadem design by Prince Albert in 1845 with matching drop earrings and three brooches attached to her bodice. Prince Albert wears a court dress of black velvet breeches a white waistcoat and a black single-breasted coat. Their children in the painting are: The Prince of Wales, (heir to the British crown), Prince Albert, Victoria Princess Royal, Princess Alice and Princess Helena. The representation of Queen Victoria with her children is fundamental to understanding the succession of the royal families of Europe for the following decades after Victoria’s reign. Queen Victoria is sometimes called “The Grandmother of Europe”, due to all her children excluding the heir the Prince of Wales, were married with the heirs of several royal families of European countries, spreading Queen Victoria lineage all over the crowns of Europe. Even so, by World War I the king of England was a first grade cousin to the German Kaiser and the Russian Zar. The portrait was commissioned by the Queen when in 1846 she wrote to the King of France Louis-Philippe to ask him if he would release the painter Winterhalter from his role as court painter so he could go to England and paint a large picture of the royal family. When finished it was considered by the Queen ‘a “chef d’oevure”, she recorded in her journal that it was one of her three favourite portraits."
        }
      },
      popculture: {
        children: {
          short:"This painting from 1846 shows Queen Victoria, Prince Albert, and five of their children. It presents the royal family as loving and united.",
          medium:"Painted in 1846 by Franz Xaver Winterhalter, this artwork shows Queen Victoria and Prince Albert with five of their nine children. They are dressed in royal clothes and surrounded by beautiful objects. The painting was made to show the royal family as happy and close, while also reminding people of their royal status.",
          long: "This painting, called The Royal Family, was made in 1846 by the artist Franz Xaver Winterhalter. It shows Queen Victoria, her husband Prince Albert, and five of their children. The family is shown together in a calm and peaceful moment. The queen wears royal jewels, and Prince Albert wears formal court clothes. These details show that they are important members of the royal family. At the same time, their closeness shows love and care between parents and children. The painting helped people understand the royal family not only as rulers, but also as a family. Because many of Queen Victoria’s children married into royal families across Europe, she later became known as the “Grandmother of Europe.”"
        },
        adult:{
          short:"This portrait by Franz Xaver Winterhalter of 1846 presents Queen Victoria as both monarch and mother, shaping the popular image of the royal family as a model of domestic harmony. Queen Victoria is remembered as the “grandmother of Europe” because all her children married several European royal families, spreading her lineage all over the crowns of Europe.",
          medium:"Painted by Franz Xaver Winterhalter in 1846, The Royal Family depicts Queen Victoria, Prince Albert, and five of their children in an intimate yet regal setting. Queen Victoria is remembered as the “grandmother of Europe” because all her children married several European royal families, spreading her lineage all over the crowns of Europe. The painting combines symbols of royal status with gestures of affection, presenting the monarchy as a loving family. This image strongly influenced popular culture by promoting ideals of domesticity, morality, and family life. Victoria’s public image as a devoted wife and mother helped redefine monarchy in the Victorian age, aligning royal life with middle class values.",
          long:"The Royal Family (1846), painted by Franz Xaver Winterhalter, played a crucial role in shaping Queen Victoria’s public image and its influence on popular culture. Rather than focusing solely on power and ceremony, the portrait presents the monarchy as a close-knit, affectionate family. Queen Victoria and Prince Albert are shown with five of their children, surrounded by symbols of status such as jewels, elegant clothing, and refined furnishings. At the same time, their relaxed poses and physical closeness emphasize domestic harmony. This carefully constructed image promoted values of love, stability, and moral respectability. The painting was widely admired and reproduced, helping establish the idea of the royal family as a moral model for society. Victoria’s image as a devoted mother shaped public expectations of family life and earned her the nickname “Grandmother of Europe,” highlighting how royal image-making influenced popular culture across generations "
        }
      }
    },
    order: {
      historical: 4,
      popculture: 4
    }
  },
{
    id: 9,
    title: "Queen Victoria Tea set",
    image: ["images/teaS.jpg", "images/tea_set.jpg" ],
    metadata: {
      fullName: "Queen Victoria Tea set",
      date: "1851",
      place: "Royal Collection Trust Shop",
      materiality: "English bone china tea set",
      room: "Queen Victoria's Room"
    },
    text: {
      historical:{
        children:{
          short:"This tea set is inspired by one made for Queen Victoria in 1851. Queen Victoria loved drinking tea and helped make afternoon tea a popular tradition in England. She was also crowned Empress of India during her reign, when England ruled over India.",
          medium:"This tea set was inspired by the one Queen Victoria had for the Great Exhibition in 1851. It is made of English bone china and decorated with the Queen’s initials and pretty floral designs. Queen Victoria became Empress of India during her reign, when England controlled the country. Tea was an important export from India to England, and the Queen loved drinking it. She helped make afternoon tea a popular tradition, turning tea time into a special social occasion.",
          long: "This tea set is inspired by the one Queen Victoria commissioned for the Great Exhibition in 1851. It is made of fine English bone china, decorated with Queen Victoria’s initials surrounded by delicate flowers, and finished with gold details. Today, sets like this are still sold by the Royal Collection. During Queen Victoria’s reign, India was controlled by England. After the Indian Rebellion of 1857, England took full control of India, and in 1876, Victoria was crowned Empress of India. Tea became a very popular drink, exported from India to England and around the world. Queen Victoria enjoyed drinking tea herself, and she helped make afternoon tea a formal and elegant tradition. Her favorite was said to be Earl Grey, and she often wrote about tea in her journal. Thanks to the Industrial Revolution, tea became more affordable and available to many people, not just the wealthy. Today, afternoon tea is still a classic British tradition, and Queen Victoria is remembered as one of the people who made it famous."
        },
        adult:{
          short:"This tea set is inspired by the set commissioned by Queen Victoria for the Great Exhibition in 1851. During her reign she was crowned empress of India, and is famously associated with drinking tea and popularizing the British tradition of afternoon tea.",
          medium:"This tea set is inspired by the set commissioned by Queen Victoria for the Great Exhibition in 1851. It is an english bone china tea set that features the cypher of Queen Victoria surrounded by decorative floral borders. During Queen Victoria’s reign India was under in-direct control of England with the East India company, after the Indian Rebellion of 1857, the UK took direct control of India. After this the territory of India became part of the English Kingdom, therefore Queen Victoria was crowned as Empress of India. During this year England exported a great amount of tea around the world, making it a famous beverage. Victoria was associated with drinking tea; it's said that she popularized the British tradition of afternoon tea.",
          long:"This tea set is inspired by the set commissioned by Queen Victoria for the Great Exhibition in 1851. It is an english bone china tea set that features the cypher of Queen Victoria surrounded by intricate decorative florals borders, the pieces are finished with 22-carat gold. The tea set is sold by the Royal Collection Trust Shop for £ 300. During Queen Victoria’s reign India was under the indirect control of England with the monopolistic control of the East India Company. After the Indian Rebellion of 1857, due to the British exploitation and cultural insensitivity made the UK dissolve the company and assume direct control over India. By 1876 India became fully part of the British empire and Queen Victoria was officially crowned Empress of India. The Imperial expansion facilitated the mass export of goods, including Tea, transforming it into a famous, global beverage. Meanwhile in England, Queen Victoria expressed her personal preference for tea, making it a social ritual, the afternoon tea. Though this practice was not introduced by Victoria but by the Duchess of Bedford, the Queen enthusiastically adopted the ritual, making it become a formal, glamorous social occasion.  It is said that her favourite tea was the Earl Grey and her taste in tea is recorded in her journal where the word tea is written several times.  iDuring the same years the industrial revolution allowed the production and transportation of tea affordable and accessible to all classes and not just for the elite. Later on Tea became a symbol of the Victorian era and a national staple still maintained today for the English afternoon tea."
        }
      },
      popculture: {
        children:{
          short:"Queen Victoria loved drinking tea. This tea set shows how tea became part of everyday life and British culture.",
          medium:"This tea set is inspired by one owned by Queen Victoria. During her reign, tea became very popular in Britain. Because the queen enjoyed tea, people copied her habits. Drinking tea became a social tradition, especially the afternoon tea that many people still enjoy today.",
          long:"This tea set is inspired by one connected to Queen Victoria. During her reign, tea became an important part of British daily life. Queen Victoria was often linked to drinking tea, and many people followed her example. Tea became something people shared with family and friends, especially in the afternoon. Thanks to the queen’s influence and new ways of producing tea, this habit spread to all levels of society. Today, tea is still a symbol of British culture, showing how the queen’s personal tastes became part of everyday life."
        },
        adult:{
          short:"This tea set reflects Queen Victoria’s association with tea drinking, a personal habit that helped turn tea into a defining symbol of British culture.",
          medium:"This tea set is inspired by the one commissioned by Queen Victoria for the Great Exhibition of 1851. During her reign, tea became not only a popular drink but also a cultural ritual. Queen Victoria’s personal preference for tea, combined with Britain’s global trade, helped transform tea into a symbol of domestic comfort, refinement, and British identity. The queen’s habits influenced popular culture, making tea drinking an essential part of everyday life.",
          long:"This tea set is inspired by the one commissioned by Queen Victoria for the Great Exhibition of 1851. Made of English bone china and decorated with the royal cypher, such tea sets reflected status, taste, and national pride. Queen Victoria’s personal association with tea helped elevate it from a luxury item to a cultural ritual. Although afternoon tea was popularized by the Duchess of Bedford, Victoria’s enthusiastic adoption of the practice gave it royal legitimacy, turning tea drinking into a fashionable and widely imitated social habit. At the same time, Britain’s imperial expansion and industrial production made tea affordable and accessible to a wider population. Through royal example, media representation, and everyday objects like tea sets, Queen Victoria’s personal tastes became embedded in popular culture, shaping traditions that remain central to British identity today."
        }
      }
    },
    order: {
      historical: 5,
      popculture: 1
    }
  },
{
    id: 10,
    title: "Wedding Dress",
    image: ["images/wedding-dress-1.jpg", "images/wedding-dress-2.jpg", "images/wedding-dress-3.jpg" ],
    metadata: {
      fullName: "Wedding Dress",
      date: "1947",
      place: "Royal Collection",
      materiality: "Ivory Duchesse satin gown",
      room: "Queen Elizabeth II's Room"
    },
    text: {
      historical: {
        children: {
          short: "On November 20th, 1947, Princess Elizabeth married Prince Philip. She wore a beautiful ivory dress with long sleeves, made by designer Norman Hartnell. The dress had a very long train and lots of tiny pearls on it.",
          medium: "On November 20th, 1947, Elizabeth, who would later become Queen, married Prince Philip, the Duke of Edinburgh. The wedding took place in a big church called Westminster Abbey in London, with about one hundred and fifty guests. Princess Elizabeth wore a ivory dress with long sleeves, designed by Norman Hartnell. The dress had a long train and thousands of tiny pearls sewn on it by hand. It was chosen from a small group of dresses made by different designers. Hartnell said it was the nicest dress he had ever drawn. Over many years, the dress was not kept in a good condition, and its ivory color slowly turned yellow.",
          long: "On November 20th, 1947, Elizabeth Alexandra Mary, before she became Queen, married Prince Philip, the Duke of Edinburgh. The wedding was held in the famous Westminster Abbey in London, with about one hundred and fifty guests watching the happy day. For her wedding day, Princess Elizabeth wore a magical ivory dress with long sleeves, designed by Norman Hartnell, who made many dresses for her in the future. When the wedding was announced, the Princess asked several designers to draw ideas for her dress. Hartnell made twelve drawings, and Elizabeth picked her favorite one. The designer said it was the prettiest dress he had ever made. The dress had a fitted top, a sweet heart-shaped neckline, and many buttons down the back. Its long train was 4.6 meters long and flowed behind her like a fairy tale. The dress was decorated with pearls and shiny stones shaped like flowers, wheat, and roses. Because the war had ended not long before, the Prime Minister wanted to be sure the silk did not come from enemy countries. The silk came from Kent and China. For good luck, the tailors hid a tiny clover inside the dress. Sadly, the dress was not kept very well, and its beautiful ivory color slowly turned yellow."
        },
        adult: {
          short:"On November 20th, 1947, Princess Elizabeth married the new Duke of Edinburgh, Prince Philip in a long-sleeved ivory Duchesse satin gown designed by Normal Hartnell. The dress has a 15-foot train and 10,000 tiny seed pearls in its embroidery.",
          medium:"On November 20th, 1947, Elizabeth Alexandra Mary, before becoming Queen of the United Kingdom and other Commonwealth realms, married Prince Philip, the then new Duke of Edinburgh. The wedding took place in Westminster Abbey located in London with only one hundred and fifty guests. The then Princess Elizabeth got married wearing a long-sleeved ivory Duchesse satin gown designed by Normal Hartnell. The dress is characterized by a 15-foot train and 10,000 tidy seed pearls in its embroidery. It was chosen from a discrete amount of samples by different stylists. Norman Hartnell, the fashion designer who dressed the Queen for many years, said that the dress is the best he has ever drawn. Unfortunately the dress was not properly preserved during the years and its color tone, which was originally ivory, has now become yellowish.",
          long:"On November 20th, 1947, Elizabeth Alexandra Mary, before becoming Queen of the United Kingdom and other Commonwealth realms, married Prince Philip, the then new Duke of Edinburgh. The wedding took place in Westminster Abbey located in London with only one hundred and fifty guests. The then Princess Elizabeth got married wearing a long-sleeved ivory Duchesse satin gown designed by Normal Hartnell. When the wedding was announced the Queen asked many designers to provide proposals for a wedding dress. Norman Hartnell, the fashion designer who dressed the Queen for many years, provided twelve, and the Queen chose one of his samples. Normal Hartnell said that the dress is the best he has ever drawn. The dress has a fitted bodice and a sweetheart neckline and was inspired by Botticelli’s Spring. The closure on the back was created with twenty-two buttons. The train of the dress measures 4.6 meters. The decorations, made with pearls and rhinestones, include lilac flowers, jasmine, star-shaped flowers, ears of wheat, and York roses. During the making of the dress the Prime Minister of the United Kingdom, Clement Attlee, wanted to be reassured that the silkworms used to create the dress did not come from enemy countries like Japan or Italy, since World War II was still an open wound in the counties involved. The silkworms, on the other hand, came from Kent and China. As a good luck charm, the tailors who made the dress sewed a clover hidden in the left side of the dress. Unfortunately the dress was not properly preserved during the years and its color tone, which was originally ivory, has now become yellowish."
        }
      },
      popculture: {
        children: {
          short:"On November 20th, 1947, Princess Elizabeth married Prince Philip wearing a beautiful ivory dress designed by Norman Hartnell. The dress had a very long train and thousands of tiny pearls, making her look like a fairytale princess.",
          medium:"On November 20th, 1947, Princess Elizabeth married Prince Philip at Westminster Abbey. She was the main character that day, wearing a long-sleeved ivory satin dress designed by Norman Hartnell. The dress had a very long train and was decorated with thousands of tiny pearls that sparkled. The dress was made to make people feel happy and hopeful after the difficult years of the war. Many years later, even if the color of the dress changed a little, people still remember it as one of the most beautiful royal wedding dresses ever.",
          long: "On November 20th, 1947, Princess Elizabeth married Prince Philip in a big church called Westminster Abbey. Only a small number of people were there, but many others around the world wanted to see her. Princess Elizabeth wore a beautiful ivory dress made by a famous designer named Norman Hartnell, who later created lots of dresses for her. He made many designs, and Elizabeth chose the one she liked the most. The dress had long sleeves, a very long train that followed her as she walked, and shiny decorations made of pearls and crystals. Some of the decorations looked like flowers and wheat, which represented new beginnings and good luck. Because the wedding happened after the war, everyone wanted the dress to show peace, hope, and happiness for the future. There was even a tiny hidden clover sewn inside the dress to bring good luck. Over the years, the dress became a little yellow instead of ivory, but people never forgot its beauty. The dress helped everyone to view Princess Elizabeth as kind, elegant, and special. Even today, many people still think of her wedding dress when they imagine a royal princess."
        },
        adult:{
          short:"On November 20th, 1947, Princess Elizabeth married Prince Philip wearing a long-sleeved ivory Duchesse satin gown designed by Norman Hartnell. With its 15-foot train and embroidery of 10,000 seed pearls, the dress marked the beginning of Elizabeth’s carefully constructed public image, transforming a private wedding into a moment of collective visual memory.",
          medium:"On November 20th, 1947, Elizabeth Alexandra Mary married Prince Philip, the new Duke of Edinburgh, at Westminster Abbey. Although still a princess, Elizabeth understood the visual and symbolic power of the occasion. She wore a long-sleeved ivory Duchesse satin gown designed by Norman Hartnell, featuring a 15-foot train and embroidery made of 10,000 seed pearls. The dress was chosen from a limited selection of designs and conceived to communicate elegance, stability, and hope to a post-war nation. Hartnell later described it as the finest dress he ever designed. Over time, the gown’s ivory tone has faded to yellow, yet its image has remained fixed in popular culture as one of the most iconic royal wedding dresses ever worn.",
          long:"On November 20th, 1947, Elizabeth Alexandra Mary married Prince Philip at Westminster Abbey in a ceremony attended by only one hundred and fifty guests. Despite the restrained scale of the event, the wedding became a global spectacle through imagery. Elizabeth, not yet Queen, wore a long-sleeved ivory Duchesse satin gown designed by Norman Hartnell, the designer who would shape her public image for decades. When the engagement was announced, several designers were asked to submit proposals. Hartnell provided twelve designs, one of which Elizabeth selected. He later stated that it was the best dress he had ever drawn. The gown featured a fitted bodice, a sweetheart neckline, and a 4.6-meter train. Inspired by Botticelli’s Spring, its embroidery included pearls, rhinestones, lilac flowers, jasmine, star-shaped blossoms, ears of wheat, and York roses, symbols of renewal, prosperity, and continuity. Prime Minister Clement Attlee requested reassurance that the silk did not come from former enemy nations because World War II was still an opern wound in the countries involved. The silk was sourced from Kent and China. As a good luck charm, a clover was sewn into the left side of the dress. Although the dress was not properly preserved and its original ivory color has yellowed, its visual impact has not faded. The gown became a template for royal bridal fashion and a foundational image in Elizabeth’s iconography. More than a wedding dress, it introduced Elizabeth to the world as a figure whose personal choices in fashion would shape her enduring presence in popular culture."
        }
      }
    },
    order: {
      historical: 1,
      popculture: 3
    }
  },
{
    id: 11,
    title: "St Edward’s Crown",
    image: ["images/crown-0.jpg", "images/crown-1.jpg", "images/crown-3.jpg"],
    metadata: {
      fullName: "St Edward’s Crown",
      date: "1661",
      place: "Jewel House, Tower of London",
      materiality: "22-carat gold crown",
      room: "Queen Elizabeth II's Room"
    },
    text: {
      historical:{
        children: {
          short: "St Edward’s Crown was worn by Queen Elizabeth II on her coronation day, June 2nd, 1953, after her father, King George VI, passed away. The crown is very tall and heavy, about 30 cm high and weighing over 2 kg.",
          medium: "When Princess Elizabeth learned that her father, King George VI, had died, she was far away in Kenya. She got the sad news in a telegram and had to fly back to London right away. Because of the rules of the kingdom, she then became Queen of the United Kingdom. After a time of sadness for the country, people began to prepare for her coronation. Elizabeth practiced for many months and said the hardest part was learning how to wear St Edward’s Crown. This special crown is used only for coronations and is named after Saint Edward the Confessor. It is made of gold, very big, and very heavy, weighing 2.23 kg. Kings and queens have worn crowns like this for hundreds of years.",
          long: "When Princess Elizabeth was in Kenya starting a long trip around the Commonwealth, she received very sad news by telegram on February 6, 1952 letting her know that her father, King George VI, had died. She had to return to London immediately. Because of an old law, Elizabeth became Queen of the United Kingdom. After a time when the whole country felt sad, preparations for the coronation began. Princess Elizabeth practiced for many months and later said the hardest part was getting used to wearing St Edward’s Crown. This crown is the most important coronation crown in the Crown Jewels and is named after Saint Edward the Confessor. It is made of shiny gold, is about 30 cm tall, and weighs 2.23 kg. The crown is decorated with lilies, crosses, arches, a golden globe, and a big cross on top. It is covered with hundreds of sparkling gemstones. Kings and queens have worn crowns like this since ages. The crown Elizabeth wore in 1953 was not the very first one. The original crown was destroyed long ago, and this one was made for King Charles II. To practice, Princess Elizabeth wore the crown while doing her daily jobs and even walked across the ballroom at Buckingham Palace with heavy sheets on her shoulders to feel ready. The coronation took place at Westminster Abbey on June 2, 1953, and Queen Elizabeth later said everything went perfectly and it was a magical moment."
        },
        adult: {
          short:"St Edward’s Crown has been worn by Queen Elizabeth II during her coronation day, on June 2nd, 1953 after the sudden death of her father, King George VI. The crown is 30 cm tall and weighs 2.23 kg.",
          medium:"When Princess Elizabeth learned of her father’s death, King George VI, on February 6, 1952, by telegram while she was in Kenya to start a 6 months tour in the Commonwealth countries, she had to return immediately to London. According to the Act of Settlement of 1701 Princess Elizabeth would then become Queen of the United Kingdom. The coronation ceremony preparation began after a period of national mourning. The future Queen spent months preparing for it and she declares that the hardest physical challenge was to get used to wearing St Edward’s Crown. It is the coronation crown of the Crown Jewels of the United Kingdom named after Saint Edward the Confessor. The crown is 22-carat gold, 66 cm large and weighs 2.23 kg. Versions of it have been used by British monarchs during their coronation ceremony since the 13th century.",
          long:"When Princess Elizabeth learned of her father’s death, King George VI, on February 6, 1952, by telegram while she was in Kenya to start a 6 months tour in the Commonwealth countries, she had to return immediately to London. According to the Act of Settlement of 1701 Princess Elizabeth would then become Queen of the United Kingdom. The coronation ceremony preparation began after a period of national mourning. The future Queen spent months preparing for it and she declared that the hardest physical challenge was to get used to wearing St Edward’s Crown. It is the coronation crown of the Crown Jewels of the United Kingdom named after Saint Edward the Confessor, and the most precious jewel belonging to the royal family. The crown is 22-carat gold, 30 cm large and weighs 2.23 kg. The crown has a base of four lilies alternating with four crosses and above there are arches that support a globe and a large cross. It is made of 444 precious stones. Versions of it have been used by British monarchs during their coronation ceremony since the 13th century. Indeed the crown used by Queen Elizabeth during her coronation ceremony on June 2, 1953, is not the original one. The current crown was made by the court jeweler Sir Robert Vyner who made that for King Charles II. This one substituted the previous one which dated back to King Edward the Confessor period. That one was melted in 1649 after King Charles I decapitation. To prepare herself to be crowned, Princess Elizabeth wore the crown while carrying out her daily tasks and used to cross the Buckingham Palace’s ballroom with draped sheets covered with weights on. The ceremony was held at Westminster Abbey and, according to the Queen’s declaration nothing went wrong and it was an amazing moment."
        }
      },
      popculture: {
        children: {
          short:"On June 2nd, 1953, Queen Elizabeth II wore a very big and heavy crown called St Edward’s Crown. That was the day she became Queen and the crown helped everyone understand how important the moment was.",
          medium:"When Princess Elizabeth found out that her father, King George VI, had passed away, her life changed forever. She had to go back to London and become Queen. A special ceremony called a coronation was planned just for her. On that day, she wore St Edward’s Crown, a very old and precious crown used only for kings and queens. The crown is made of gold and is very heavy, so Elizabeth had to practice wearing it for many months. When she finally wore it at Westminster Abbey, everyone watching knew she was now the Queen.",
          long: "One day, while Princess Elizabeth was far away in Kenya, she received a sad message: her father, King George VI, had died. This meant that Elizabeth had to return home and become Queen, even though she was still very young. After a time of sadness, people started preparing a big and important celebration called coronation. For this special day, Elizabeth had to wear St Edward’s Crown. This crown is very old and very important. It is made of shiny gold, is very tall, and is very heavy. The crown is decorated with beautiful stones, crosses, flowers, and a little ball with a cross on top. Kings and queens have worn crowns like this for hundreds of years. Because the crown was so heavy, Elizabeth practiced wearing it every day. She walked around the palace with it on her head and even trained by carrying heavy cloths on her shoulders. Finally, on June 2nd, 1953, she wore the crown at Westminster Abbey. Everything went perfectly, and the moment became famous all over the world. From that day on, the crown and Queen Elizabeth II became symbols that many people still remember today."
        },
        adult:{
          short:"St Edward’s Crown was worn by Queen Elizabeth II on her coronation day, June 2nd, 1953. Tall and heavy, the crown became the visual symbol of her transformation from young princess to global icon of monarchy.",
          medium:"When Princess Elizabeth became Queen after the sudden death of her father, King George VI, the coronation marked not only a constitutional passage but also a carefully staged visual moment. On June 2nd, 1953, Elizabeth II wore St Edward’s Crown during the ceremony at Westminster Abbey. Named after Saint Edward the Confessor, the crown is the most important of the Crown Jewels and is used only for coronations. Made of 22-carat gold and weighing 2.23 kg, it required months of physical preparation. More than an object of power, the crown functioned as an image: heavy, sacred, and instantly recognizable, it fixed Elizabeth’s authority in the collective imagination.",
          long:"On February 6th, 1952, Princess Elizabeth learned of her father’s death, King George VI, through a telegram while she was in Kenya at the beginning of a Commonwealth tour. Her return to London marked the sudden end of her private life and the beginning of her public existence as Queen. After a period of national mourning, preparations began for the coronation, an event designed not only as a constitutional ritual but as a powerful visual statement broadcast to the world. At the center of this image was St Edward’s Crown, the coronation crown of the British monarchy. Named after Saint Edward the Confessor, it is the most symbolic object of the Crown Jewels. The crown is made of 22-carat gold, stands 30 cm tall, and weighs 2.23 kg. Its structure features alternating crosses and fleurs-de-lis, arches supporting a globe, and a large cross, all set with 444 precious stones. Although versions of the crown have been used since the 13th century, the one worn by Elizabeth II was made in the 17th century by court jeweler Sir Robert Vyner for King Charles II, after the original medieval crown was destroyed in 1649. Elizabeth famously trained herself to wear the crown, practicing daily while performing ordinary tasks and walking through Buckingham Palace with weighted sheets draped over her shoulders. The crown was not only a symbol but a physical burden, shaping posture, movement, and presence. On June 2nd, 1953, at Westminster Abbey, the coronation went perfectly, according to the Queen herself. The image of Elizabeth crowned that day became one of the most reproduced royal images of the 20th century, transforming St Edward’s Crown into a icon of endurance, authority, and spectacle."
        }
      }
    },
    order: {
      historical: 2,
      popculture: 5
    }
  },
{
    id: 12,
    title: "The first televised Christmas Broadcast",
    image: ["images/message-1.jpg", "images/message-2.1.jpg"],
    metadata: {
      fullName: "The first televised Christmas Broadcast",
      date: "1957",
      place: "BBC archive",
      materiality: "Video",
      room: "Queen Elizabeth II's Room"
    },
    text: {
      historical: {
        children: {
          short: "Queen Elizabeth II gave a speech every year at Christmas. Her first Christmas message on television was shown in 1957. It was filmed in a big room called the Long Library in Sandringham. By using television, the Queen made this old tradition new and exciting.",
          medium: "The Christmas message is a tradition that started long before Queen Elizabeth became Queen. The first Christmas message was given by her grandfather, King George V, on Christmas Day in 1939. The idea came from John Reith, who helped create the BBC, so the King could speak to people across the Commonwealth. Later, King George VI, Elizabeth’s father, continued the tradition. In 1951, because he was very ill, he had to record his message instead of speaking live. After King George VI passed away, Queen Elizabeth decided to continue the tradition just like her father. She used television, which was new at the time, to speak to people. In her first Christmas message on December 25, 1957, she spoke kindly about her grandfather and father and promised to do her best as Queen.",
          long: "The Christmas message is a special tradition that began many years before Queen Elizabeth’s reign. The very first one was given by her grandfather, King George V, on Christmas Day in 1939. It became a moment for the King or Queen to think about important events in the world and to send kind words to people. During the war, the message helped cheer people up and showed care for those who were suffering. The idea came from John Reith, one of the founders of the BBC, to start a new radio service that could reach people all over the world. King George V spoke from Sandringham, and his message was heard in faraway places like Australia, Canada, India, Kenya, and South Africa. After him, King George VI continued the tradition. In 1951, because he was very sick, he recorded the message instead of speaking live for the first time. When he died, Queen Elizabeth decided to keep the tradition alive. She recorded her messages and watched them with her family before they were shown at Christmas. Queen Elizabeth used television, which was very new and exciting at the time, to speak to her people. Her first televised Christmas message was recorded in the Long Library at Sandringham on December 25, 1957. In that message, she lovingly remembered her grandfather and father, thanked them for their hard work, and promised that she would try her best to continue their work as Queen."
        },
        adult: {
          short:"Queen Elizabeth II used to give a speech every year during Christmas. The first televised Christmas message was broadcast in 1957. The speech was filmed in the Long Library in Sandringham. The Queen renewed the tradition by using the television as a tool to transmit her speech.",
          medium:"The tradition of the Christmas message is something that existed long before Queen Elizabeth reign. The first one was transmitted by Queen Elizabeth's grandfather, King George V on Christmas day in 1939. The idea came from John Reith, founder of the BBC, to inaugurate the Empire World Service. The King spoke to the people of the countries belonging to the Commonwealth. After King George V's reign, King George VI continued with the annual tradition. In 1951, due to complicated health conditions, he had to record the message instead of broadcasting it. When King George VI died, Queen Elizabeth decided to record her messages as her father did and transmit it during Christmas. The Queen exploited the television, the innovation of those years, to speak with the people. In her first message, on December 25, 1957, the Queen remembered her grandfather and father to honour their great work and she declared that she would have tried to continue their work as sovereign.",
          long:"The tradition of the Christmas message is something that existed long before Queen Elizabeth reign. The first one was transmitted by Queen Elizabeth's grandfather, King George V on Christmas day in 1939. The message became an appointment to reflect on global events which influenced the monarch and the people. After the outbreak of the war the message became a way to cheer people up and to show compassion for people suffering. The idea originally came from John Reith, founder of the BBC, to inaugurate the Empire World Service. King George V spoke to the people of the countries belonging to the Commonwealth from an office in Sandringham. The message was received in Australia, Canada, India, Kenya and South Africa.  After King George V's reign, King George VI continued with the annual tradition. In 1951, due to complicated health conditions, he had to record the message instead of broadcasting it and for the first time it was not transmitted live. When King George VI died, Queen Elizabeth decided to record her messages as her father did and transmit them during Christmas, after having watched them with her family. The Queen exploited the television, the innovation of those years, to speak with the people. Her first message was recorded in the Long Library in Sandringham, on December 25, 1957. The Queen remembered her grandfather and father to honour their great work and she declared that she would have tried to continue their work as sovereign. 'Every Christmas, at this time, my beloved Father broadcast a message to his people all over the world... As he used to do, I too now speak to you from my home, where I am spending Christmas with my family... My father [King George VI], and my grandfather [King George V] before him, worked hard all their lives to bring our people ever closer together and to uphold the ideals that were so dear to their hearts. I will strive to carry on their work.' (Extract from Queen Elizabeth’s first Christmas message)"
        }
      },
      popculture: {
        children: {
          short:"In 1957, Queen Elizabeth II spoke to people on TV for the first time at Christmas. She wanted everyone to feel like she was talking just to them, right in their living rooms to create a special connection with her subjects.",
          medium:"A long time before Elizabeth became Queen, her grandfather King George V started the Christmas message to cheer people during hard times. Later, her father, King George VI, continued it. When Elizabeth became Queen, she wanted to keep the tradition alive. On Christmas Day 1957, she recorded her first message in a big library at Sandringham. Using the new invention of television, she could talk to people all over the world. She remembered her grandfather and father and promised to try her best as Queen. Everyone could feel like she was speaking to them personally.",
          long: "A long time ago, Elizabeth’s grandfather, King George V, began the Christmas message to make people happy and hopeful, especially during scary times like war. Then her father, King George VI, kept the tradition going. One year, because he was sick, he had to record his message instead of saying it live on the radio. When Elizabeth became Queen, she wanted to keep this special tradition too. On December 25th, 1957, she made her first Christmas message in the Long Library at Sandringham. She looked at the camera and spoke to everyone as if they were sitting in her room with her. She talked about her family, remembered her grandfather and father, and promised to try to do a good job as Queen. By using television, she showed people that a Queen could be kind, friendly, and serious all at the same time. Her message became a way for everyone to see her smile and hear her voice, making her feel like a real person, not just a Queen far away. From that day on, people looked forward to her Christmas messages every year, and she became a special part of their holidays."
        },
        adult:{
          short:"In 1957, Queen Elizabeth II gave her first televised Christmas message, speaking directly to people in their homes. By using the new medium of television, she transformed a family tradition into a global event, showing how the Queen’s image could connect personally with millions around the world.",
          medium:"The Christmas message was a tradition long before Elizabeth became Queen, started by her grandfather King George V in 1939 to bring hope and cheer during difficult times. When her father, King George VI, passed away, Elizabeth decided to continue this tradition in her own way. On December 25th, 1957, she recorded her first Christmas speech in the Long Library at Sandringham. By using television, the Queen brought a personal and intimate side of monarchy into homes everywhere. She spoke about her family, remembered her grandfather and father, and promised to continue their work, showing the world how a royal could be both authoritative and approachabl, a key moment in shaping her pop culture image.",
          long:"The tradition of the Christmas message began with Queen Elizabeth II’s grandfather, King George V, in 1939. Originally created by John Reith, founder of the BBC, the message was meant to inspire hope and unity across the Commonwealth during a time of war. Her father, King George VI, continued the practice, and in 1951, due to poor health, he recorded his speech instead of broadcasting it live—a first step in turning royal messages into media events. When Elizabeth became Queen, she chose to continue this tradition, but with a modern twist. On December 25th, 1957, she recorded her first Christmas message in the Long Library at Sandringham. By speaking directly into the camera, she transformed a royal duty into an intimate connection with millions of people. The Queen remembered her grandfather and father, honoring their work, and promised to continue their legacy. This broadcast showed how the Queen could use new media to shape her public image. It was more than a speech: it was a cultural moment that defined her as a figure who could be both sovereign and relatable. Her calm, personal, and thoughtful presence on television set the tone for decades, making her voice a symbol of stability, comfort, and authority in British life and popular culture."
        }
      }
    },
    order: {
      historical: 3,
      popculture: 4
    }
  },
{
    id: 13,
    title: "Reigning Queens (Queen Elizabeth)",
    image: ["images/picture-1.jpg", "images/picture-2.jpg", "images/picture-3.jpg" ],
    metadata: {
      fullName: "Reigning Queens (Queen Elizabeth)",
      date: "1985",
      place: "Royal Collection",
      materiality: "Silkscreen",
      room: "Queen Elizabeth II's Room"
    },
    text: {
      historical: {
        children: {
          short: "In 1985, the artist Andy Warhol made a colorful picture of Queen Elizabeth II. He called it Reigning Queens and made her look like a bright, fun pop icon, not just a queen.",
          medium:"Andy Warhol made a series of paintings called Reigning Queens in 1985. He painted four queens, including Queen Elizabeth, using really bright colors like red, blue, pink, and purple. His picture of Elizabeth was based on a photo taken in 1977. Warhol wanted to show that queens could be like famous stars in a fun and modern way. His bright, colorful style made people see the Queen not just as someone in a palace, but as someone super famous and special in pop culture.",
          long:"In 1985, Andy Warhol made a series of colorful pictures called Reigning Queens. He painted four queens: Queen Elizabeth of the United Kingdom, Queen Beatrix of the Netherlands, Queen Margrethe II of Denmark, and Queen Ntombi Twala of Swaziland. Warhol used very bright colors like red, purple, pink, and blue, to make the queens look exciting and modern. The picture of Queen Elizabeth was based on a photo taken in 1977. Warhol made four different versions of her, each with a different main color. By painting her this way, he showed that she was more than just a queen in a palace. She could be a cultural icon, like a superstar. The bright colors and bold style made people see her as fun, famous, and important, showing that even a queen could become part of pop culture."
        },
        adult: {
          short:"Queen Elizabeth portrait by Andy Warhol belongs to a series named Reigning Queens, realized in 1985. The silkscreen is based on a picture taken in 1977 by Peter Grugeon and it contributes to the popular perception of Queen Elizabeth as a pop icon.",
          medium:"Queen Elizabeth portrait it’s a silkscreen by Andy Warhol belonging to the Reigning Queens series, realized in 1985 which included four portraits of Queens including Queen Beatrix of the Netherlands, Queen Margrethe II of Denmark and Queen Ntombi Twala of Swaziland. The works depict four women monarchs highlighting their role, by immortalizing them with vivid colors, in a perfect pop reinterpretation of traditional portraits of royals. The portrait of Queen Elizabeth is based on the photograph from her Silver Jubilee in 1977 by the royal photographer  Peter Grugeon on April 2nd, 1975.Warhol produced four screensprints portraying Queen Elizabeth.They capture Warhol’s fascination with icons who transcend their origins by transforming the subject portrayed a cultural icon.",
          long:"Queen Elizabeth portrait it’s a silkscreen by Andy Warhol belonging to the Reigning Queens series, realized in 1985 which included four portraits of Queens including Queen Beatrix of the Netherlands, Queen Margrethe II of Denmark and Queen Ntombi Twala of Swaziland. The first three are  The works depict four women monarchs highlighting their role, by immortalizing them with vivid colors, in a perfect pop reinterpretation of traditional portraits of royals. The portrait of Queen Elizabeth is based on the photograph from her Silver Jubilee in 1977 by the royal photographer  Peter Grugeon on April 2nd, 1975. Warhol produced four screensprints portraying Queen Elizabeth, and the different versions are identified by numbers: 334, 335, 336 and 337 but they are more frequently addressed with the name of their dominant color: red, purple, pink and blue. The background colors elevate the monarch’s image from formality to fascination. They capture Warhol’s passion for legends who transcend their origins by transforming the subject portrayed in a cultural icon. This is possible through the process of reimagining monarchy through a modern and commercial lens."
        }
      },
      popculture: {
        children: {
          short:"Andy Warhol made a colorful picture of Queen Elizabeth. It is part of his Reigning Queens series from 1985. He used a photo of the Queen from 1977 and made her look bright, fun and unforgettable just like a pop star.",
          medium:"Queen Elizabeth’s picture is a bright, colorful artwork made by Andy Warhol in 1985. It is part of his Reigning Queens series, which also showed Queen Beatrix from the Netherlands, Queen Margrethe II from Denmark, and Queen Ntombi Twala from Swaziland. Warhol used bright colors to make the queens look special, important, and exciting, like a fun pop picture. Queen Elizabeth’s picture is based on a photo taken in 1977 during her Silver Jubilee by Peter Grugeon. Warhol made four prints of her, showing her as a queen who could also be a popular icon.",
          long: "Queen Elizabeth’s picture is a fun and colorful artwork made by Andy Warhol in 1985. It is part of his Reigning Queens series, which also included Queen Beatrix of the Netherlands, Queen Margrethe II of Denmark, and Queen Ntombi Twala of Swaziland. Warhol used bright and bold colors to make these queens look important but also fun and exciting, like pop icons. Queen Elizabeth’s picture comes from a photo taken in 1977 during her Silver Jubilee by Peter Grugeon. Warhol made four prints of her picture. People call them by their main color: red, purple, pink, and blue. The bright colors make the Queen look different from the usual pictures she's in. Warhol loved turning famous people into pop icons, and with this picture, he made Queen Elizabeth turn into one, someone everyone could admire through different lens."
        },
        adult:{
          short:"Andy Warhol’s portrait of Queen Elizabeth is part of his Reigning Queens series from 1985. Using a photo from 1977 by Peter Grugeon, Warhol turned the Queen into a bold, colorful pop icon seeing her through the lens of pop art.",
          medium:"Queen Elizabeth’s silkscreen portrait by Andy Warhol belongs to the 1985 Reigning Queens series, which also featured Queen Beatrix, Queen Margrethe II, and Queen Ntombi Twala. Warhol transforms pictures of the Queens, using bright, electric colors to make them perceivable as icons. The Queen’s portrait is based on a 1977 Silver Jubilee photo by royal photographer Peter Grugeon. Warhol created four screen prints of Elizabeth, capturing the way icons can go beyond their original roles to become true cultural symbols of royalty.",
          long:"Andy Warhol’s portrait of Queen Elizabeth is part of his iconic Reigning Queens series from 1985, which also included Queen Beatrix of the Netherlands, Queen Margrethe II of Denmark, and Queen Ntombi Twala of Swaziland. These works reimagine monarchs in a pop art universe, using vibrant colors to transform the in unforgettable symbols. Elizabeth’s portrait comes from a 1977 Silver Jubilee photo taken by Peter Grugeon. Warhol made four screen prints, often referred to by their main color: red, purple, pink, and blue. The colorful backgrounds surpass traditional representation of royals, blending monarchy with modern celebrity culture. Warhol’s fascination leads him to elevate the Queen from a royal figure to a cultural icon, reinterpretating monarchy with a contemporary lens."
        }
      }
    },
    order: {
      historical: 4,
      popculture: 2
    }
  },
{
    id: 14,
    title: "Statue of Elizabeth II",
    image: ["images/statue-2.jpg", "images/statue.jpg"],
    metadata: {
      fullName: "Statue of Elizabeth II",
      date: "2022",
      place: "Rutland, United Kingdom",
      materiality: "Bronze",
      room: "Queen Elizabeth II's Room"
    },
    text: {
      historical:{
        children: {
          short: "After Queen Elizabeth II passed away, a special bronze statue was made to remember her. She is shown wearing her royal clothes and crown, with her favourite breed of dogs, the corgis,  all around her.",
          medium: "A bronze statue of Queen Elizabeth II was made after she passed away in 2022. It shows her standing tall in her royal robe and crown, surrounded by her beloved corgis. The statue is in Rutland, in the United Kingdom, and was shown to everyone on what would have been her 98th birthday in 2024. Lots of people came to see it. The corgis at her feet show how much she loved her dogs and remind everyone that she kept her country safe, showing her kindness towards the citizens by representing her with her beloved corgis.",
          long: "After Queen Elizabeth II passed away in 2022, a special bronze statue was made to remember her. The artist, Hywel Pratley, worked for four months and used a huge 800 kg of clay to make the Queen and her corgis. The statue shows her wearing her royal robe and crown, standing tall and proud, with her corgis all around her. Pratley looked at many pictures of the Queen and chose to show her as she was in her 40s, when she had her children and was very powerful. The corgis are there because they were her favorite dogs and they make the statue feel friendly and happy. The statue is in Rutland, in the United Kingdom, and it was shown to the public on what would have been her 98th birthday in 2024. Hundreds of people came to see it. The statue reminds everyone how much the Queen loved her dogs and how she cared for her people, just like she cared about her corgis."
        },
        adult: {
          short:"The first memorial after the passing away of Queen Elizabeth II on September 8, 2022. The bronze statue by Hywel Pratley represents the queen in royal garments surrounded by her beloved corgis.",
          medium:"The bronze statue by Hywel Pratley is the first memorial after the passing away of Queen Elizabeth II on September 8, 2022. It represents the queen in royal garments surrounded by her beloved corgis. The statue, located in Rutland, United Kingdom, was inaugurated on April 22,  2024 and it immortalized the Queen’s passion for her dogs. The statue, commissioned by Sarah Furness, the Lord-Lieutenant of Rutland, has a value of £125.000  and was funded primarily by donations from local business and members of the public. It was unveiled on the day of what should have been her 98th birthday to honour with hundreds of people showing up to see the inauguration of the statue dedicated to  the Queen. The Queen is depicted as standing tall while wearing a state robe and a crown. The dogs at her feet are a metaphor for the security and safety that the United Kingdom felt during the Elizabethan era.",
          long:"The bronze statue by Hywel Pratley is the first memorial after the passing away of Queen Elizabeth II on September 8, 2022. It represents the queen in royal garments surrounded by her beloved corgis. The statue, located in Rutland, United Kingdom, was inaugurated on April 22,  2024 and it immortalized the Queen’s passion for her dogs. The statue, commissioned by Sarah Furness, the Lord-Lieutenant of Rutland, has a value of £125.000  and was funded primarily by donations from local business and members of the public. It was unveiled on the day of what should have been her 98th birthday to honour with hundreds of people showing up to see the inauguration of the statue dedicated to  the Queen. The Queen is depicted as standing tall while wearing a state robe and a crown. The dogs at her feet are a metaphor for the security and safety that the United Kingdom felt during the Elizabethan era. Pratley, the artist, started to work on the statue in January 2023. It took him four months and 800 kg of clay to sculpt the Queen and the corgis. Pratley studied various pictures of the Queen to define her look and he chose to represent her while still young, in her 40s, when, he declares, “she had had some children and was at the height of her power”. The dogs are an important addiction to the statue because they give a sense of humanity to the representation."
        
        }
      },
      popculture: {
        children: {
          short:"The first statue to remember Queen Elizabeth II was made by Hywel Pratley. It shows the Queen wearing her crown and royal clothes, with her corgis around her. It celebrates both the Queen and her love for her dogs.",
          medium:"A bronze statue of Queen Elizabeth II was made by Hywel Pratley after she died on September 8, 2022. The statue shows the Queen wearing her crown and royal robes, with her corgis right by her side, making her look both powerful and friendly at the same time. It is in Rutland, United Kingdom, and was revealed on April 22, 2024 on her 98th birthday. Many people came to see it, and the statue was paid for mostly by local donations. The corgis make the Queen feel fun and relatable, like a lovely royals that everyone loves.",
          long: "After Queen Elizabeth II passed away on September 8, 2022, the first statue to honor her was made by artist Hywel Pratley. It shows her wearing her royal robes and crown, standing tall, with her beloved corgis at her feet—making her look like a queen and a pop culture icon at the same time. The statue is in Rutland, United Kingdom, and was revealed on April 22, 2024 on her 98th birthday. Sarah Furness commissioned it, and most of the money came from local donations. Hundreds of people came to see the statue, celebrating the Queen’s life, her reign, and her love for her dogs. Pratley worked on the statue starting in January 2023. He used 800 kg of clay and spent four months making it perfect. He chose to show the Queen as she was in her forties, confident, strong, at the height of her power. The corgis make the statue feel lively, friendly, and fun, showing that even a queen can have personality and charm. This statue is more than just a memorial. It celebrates Queen Elizabeth as a legendary figure, combining history, her love for corgis, and her iconic status into a display that everyone can admire. She looks like a queen you could both respect and look up to."
        },
        adult:{
          short:"The first memorial to Queen Elizabeth II after her passing on September 8, 2022, is a bronze statue by Hywel Pratley. It depicts the Queen in her royal robes, wearing a crown, surrounded by her beloved corgis, honoring both her role as monarch and her personal passion for her dogs.",
          medium:"Hywel Pratley’s bronze statue is the first memorial for Queen Elizabeth II after her passing on September 8, 2022. Located in Rutland, UK, the statue shows the Queen in her regal robes, wearing her crown, and her corgis by her side, portaying her both as a monarch and as a human. Commissioned by Sarah Furness and funded mostly by local donations, the £125,000 statue was unveiled on what would have been the Queen’s 98th birthday, with hundreds gathering to celebrate. The corgis symbolize the security and stability of the Elizabethan era, giving the statue a hidden layer of interpretation.",
          long:"The first memorial for Queen Elizabeth II, who passed away on September 8, 2022, is a bronze statue created by Hywel Pratley. The statue depicts the Queen in her royal robes and crown, accompanied by her corgis, reflecting both her official role as monarch and her personal affection for her dogs. Located in Rutland, United Kingdom, the statue was unveiled on April 22, 2024 on the Queen’s 98th birthday. Commissioned by Sarah Furness, the Lord-Lieutenant of Rutland, and funded primarily through local donations, the memorial cost £125,000. Hundreds of people attended the unveiling, paying tribute to the Queen’s life and legacy. Pratley began work on the statue in January 2023, sculpting the figure over four months using 800 kg of clay. He studied numerous photographs to capture her likeness accurately and chose to represent her in her forties, a period when she had children and had reached the height of her reign. The inclusion of the corgis adds warmth and humanity to the representation, providing a sense of approachability while maintaining her regal presence. The statue serves not only as a tribute to the Queen’s life but also as a symbol of continuity and respect, commemorating her dedication to her country and her enduring personal legacy."
        }
      }
    },
    order: {
      historical: 5,
      popculture: 1
    }
  },
{
    id: 15,
    title: "Charles and Diana Engagement Interview",
    image: ["images/int-1.1.jpg", "images/int-1.jpg" ],
    metadata: {
      fullName: "Charles and Diana Engagement Interview",
      date: "1981",
      place: "ITN Archive",
      materiality: "Video",
      room: "Princess Diana's Room"
    },
    text: {
      historical:{
        children: {
          short: "On February 24, 1981, Prince Charles and Princess Diana told everyone on TV that they were going to get married. But Charles said something upsetting: “Whatever ‘in love’ means” and Diana looked a little  confused and sad.",
          medium: "Prince Charles and Princess Diana had only been seeing each other for six months, but they decided to tell everyone they were getting married. They did a special TV interview at Buckingham Palace on February 24, 1981. Charles said he was amazed and happy that Diana said yes, and Diana said Charles was “pretty amazing.” But then Charles gave a strange answer when asked if they were in love. He said, “Whatever ‘in love’ means,” and Diana didn’t like that at all. It made the interview a little awkward, which led people to remember the interview as a little strange.",
          long: "In 1981, Prince Charles and Princess Diana wanted to tell everyone that they were going to get married. They did a TV interview at Buckingham Palace on February 24th. At first, they said nice things about each other: Charles was amazed that Diana said yes, and Diana said Charles was “pretty amazing.” But then something funny and a little awkward happened. When a reporter asked if they were in love, Charles said, “Whatever ‘in love’ means.” Diana was very surprised and didn’t like that answer. Later, in her book, she said it made her feel confused and a little sad. Even though the interview was tricky, it showed the start of their story together. It was the beginning of a big adventure in their lives, and everyone around the world was watching."
        },
        adult: {
        short:"The royal couple announced their engagement in an exclusive interview by ITN on February 24, 1981. In this famous interview, Prince Charles responded to the interview remark that the couple were in love with the iconic phrase “Whatever ‘in love’ means” causing a displeased reaction in Princess Diana.",
        medium:"The royal couple announced their engagement in an exclusive interview by ITN on February 24, 1981. The couple, who at the time had only been dating for six months, decided to announce their upcoming marriage with an interview recorded at Buckingham Palace. While speaking about the topic Charles said that he was “delighted and frankly amazed” by the fact that Diana agreed to marry him while she described the Prince as “pretty amazing”. Despite the kind words they had for each other, the interview turned out to be awkward because of an ambiguous answer by Prince Charles to a question. He indeed responded to the interview remark that the couple were in love with the iconic phrase “Whatever ‘in love’ means” causing a displeased reaction in Princess Diana.",
        long:"The royal couple announced their engagement in an exclusive interview by ITN on February 24, 1981. The couple, who at the time had only been dating for six months, decided to announce their upcoming marriage with an interview recorded at Buckingham Palace. While speaking about the topic Charles said that he was “delighted and frankly amazed” by the fact that Diana agreed to marry him while she described the Prince as “pretty amazing”. Despite the kind words they had for each other, the interview turned out to be awkward because of an ambiguous answer by Prince Charles to a question. He indeed responded to the interview remark that the couple were in love with the iconic phrase “Whatever ‘in love’ means” causing a displeased reaction in Princess Diana. Later in her biography, Diana: In Her Own Words, the author wrote her point of view on the event. Quoting her words: 'We had this ghastly interview the day we announced our engagement and this ridiculous [reporter] said ‘Are you in love? I thought, what a thick question. So I said, ‘Yes, of course, we are,’ and Charles turned round and said, ‘Whatever love means.’ And that threw me completely. I thought, what a strange answer. It traumatized me.' This was the beginning the intricate engagement and later marriage of the royal couple."
        }
      },
      popculture: {
        children: {
          short:"Prince Charles and Lady Diana announced they were going to get married on February 24, 1981, in a famous TV interview. Charles said the iconic line, “Whatever ‘in love’ means” which made Diana surprised. Everyone remembered it, and it became a famous royal pop culture moment.",
          medium:"On February 24, 1981, Prince Charles and Lady Diana shared big news: they were going to get married! They told everyone in a special TV interview at Buckingham Palace, and people all around the world were watching. Charles said he was “delighted and amazed” that Diana said yes, and Diana said Charles was “pretty amazing.” But the interview became super famous for one awkward moment. When someone asked if they were in love, Charles said, “Whatever ‘in love’ means.” Diana looked surprised, and the line became instantly famous, a royal pop culture moment everyone talked about.",
          long: "On February 24, 1981, the world watched as Prince Charles and Lady Diana announced they were going to get married in a TV interview at Buckingham Palace. They had only been dating six months, but people everywhere were excited. Charles said he was “delighted and amazed” that Diana said yes, and Diana said Charles was “pretty amazing.” The interview became legendary for one moment. When asked if they were in love, Charles said, “Whatever ‘in love’ means.” Diana was surprised and later remembered that it confused her a lot. She wrote in her book that she thought, “What a strange answer. It shocked me.” Even though it was a little awkward, this moment became part of the story that made their engagement so famous. It turned the announcement into a real pop culture event, remembered by everyone as one of the most iconic royal moments ever."
        },
        adult:{
          short:"The royal couple made headlines on February 24, 1981, when they announced their engagement in an exclusive ITN interview. Prince Charles’s unforgettable line, “Whatever ‘in love’ means” became one of the most memorable moments in royal pop culture history.",
          medium:"On February 24, 1981, Prince Charles and Lady Diana Spencer announced their engagement in an ITN interview recorded at Buckingham Palace. At the time, they had only been dating six months, but the world was watching every word. Charles said he was “delighted and frankly amazed” that Diana agreed to marry him, while Diana called Charles “pretty amazing.” However, the interview quickly became legendary for a different reason. When asked if they were in love, Charles responded with the iconic line: “Whatever ‘in love’ means,” leaving Diana visibly unsettled. That awkward moment immediately cemented itself in pop culture, turning a simple engagement announcement into a moment remembered by generations.",
          long:"On February 24, 1981, the world tuned in as Prince Charles and Lady Diana Spencer announced their engagement in an exclusive ITN interview at Buckingham Palace. After dating for just six months, the royal couple shared their excitement with the public and Charles said he was “delighted and frankly amazed” that Diana agreed to marry him while Diana described Charles as “pretty amazing.” But the interview quickly became a pop culture landmark for a different reason. When asked if they were in love, Charles delivered the iconic line: “Whatever ‘in love’ means,” leaving Diana upset and creating one of the most memorable royal moments of the 20th century. Diana later reflected on the interview in her biography Diana: In Her Own Words: “We had this ghastly interview the day we announced our engagement… Charles turned round and said, ‘Whatever love means.’ And that threw me completely. I thought, what a strange answer. It traumatized me.” This brief, awkward moment in front of the cameras became emblematic of their complicated relationship, instantly entering the global pop culture narrative and shaping how the world remembers their engagement and later marriage."
        }
      }
    },
    order: {
      historical: 1,
      popculture: 5
    } 
  },
{
    id: 16,
    title: "Princess Diana Engagement ring",
    image: ["images/ring-1.jpg", "images/ring-2.jpg"],
    metadata: {
      fullName: "Princess Diana Engagement ring",
      date: "1981",
      place: "Royal family's property",
      materiality: "18-carats white gold, 12-carats oval Ceylon sapphire, 14 solitaire diamonds",
      room: "Princess Diana's Room"
    },
    text: {
      historical:{
        children: {
          short: "Prince Charles gave Princess Diana a sparkly ring when he asked her to marry him. It was made of white gold, had a big blue sapphire in the middle, and lots of tiny diamonds around it. Diana picked it herself from the jeweler’s collection.",
          medium: "On February 6, 1981, Prince Charles asked Diana to marry him and gave her a beautiful ring. It was white gold, with a big blue sapphire and 14 shiny diamonds around it. Diana chose the ring herself from the jeweler’s catalog. The ring was special because it wasn’t made just for her, it was already in the collection. Some people thought that was unusual, but Diana liked it because it reminded her of her mother’s ring. She did not care about tadition neither wearing a unique ring, she only chose that  based on what she liked more.",
          long: "On February 6, 1981, Prince Charles asked Princess Diana to marry him, and he gave her a beautiful ring. It was made of white gold, with a big blue sapphire in the middle and 14 sparkling diamonds around it. Diana picked it herself from the jeweler’s catalog because it reminded her of her mother’s ring. Even though the ring wasn’t made just for her, Diana loved it. After she and Charles divorced, she still wore it. Later, when Diana passed away, her two sons, Prince William and Prince Harry, got the ring. Many years later, in 2010, Prince William used the same ring to ask Kate to marry him. The ring became famous all over the world, and everyone remembers Diana’s beautiful blue ring and how happy she looked when she got it."
        },
        adult: {
          short:"The ring that Prince Charles proposed to Princess Diana was an 18 carats white gold topped with a 12 carats oval Ceylon sapphire surrounded by 14 solitaire diamonds. It was chosen by Princess Diana from Garrad’s existing catalogue.",
          medium:"The ring that Prince Charles proposed to Princess Diana was an 18 carats white gold topped with a 12 carats oval Ceylon sapphire surrounded by 14 solitaire diamonds. It was chosen by Princess Diana from the crown jeweler Garrad’s existing catalogue and it was inspired by a brooch Prince Albert gifted as a wedding present for Queen Victoria in 1840. The proposal with the ring happened on February 6, 1981. The ring caused controversies because it drastically broke from tradition, being chosen between already existing samples. Indeed, the ring was not newly designed for the Princess and this also allowed common people to share the same engagement ring as Diana, making that less unique.",
          long:"The ring that Prince Charles proposed to Princess Diana was an 18 carats white gold topped with a 12 carats oval blue Ceylon sapphire surrounded by 14 solitaire diamonds. It was chosen by Princess Diana from the crown jeweler Garrad’s existing catalogue and it was inspired by Queen Victoria’s sapphire and diamond cluster brooch which Prince Albert gifted her as a wedding present in 1840 and which she wore that day. The proposal with the ring happened on February 6, 1981. The ring caused controversies because it drastically broke from tradition, being chosen between already existing samples. Indeed, the ring was not newly designed for the Princess and this also allowed common people to share the same engagement ring as Diana, making that less unique. Diana’s reasons to choose that specific ring were sentimental because it reminded her of her mother’s engagement ring. Given so, she also continued to wear it after her divorce from Prince Charles. After Princess Diana’s death the ring was inherited by her two sons, Prince William and Prince Harry, together with the complete jewellery collection. Prince William later used it in 2010 to propose to his future wife Kate"
        }
      },
      popculture: {
        children: {
          short:"Prince Charles gave Princess Diana a very famous ring when he proposed. It was made of shiny white gold with a big blue sapphire and sparkling diamonds. Diana picked it herself, and it quickly became a symbol of the royal union.",
          medium:"On February 6, 1981, Prince Charles asked Princess Diana to marry him with a ring that would become very famous. Diana chose a big blue sapphire ring with 14 glittering diamonds, all set in shiny white gold. She picked it herself from the crown jeweler Garrard’s catalogue. The design was inspired by a really old royal brooch that Queen Victoria got from Prince Albert. People couldn’t stop talking about it because it wasn’t a custom-made ring meaning that anyone could buy a similar one. Some people disliked this choice while others thought that this would make Diana more relatable to the public.",
          long: "Prince Charles asked Princess Diana to marry him on February 6, 1981, with a ring that instantly became famous around the world. Diana chose it herself: it was 18-carat shiny white gold with a giant, bright blue sapphire in the middle and 14 sparkling diamonds around it. She picked it from the crown jeweler Garrard’s catalogue. The ring’s design was inspired by a very old royal brooch that Queen Victoria got from Prince Albert back in 1840. People went crazy for it because it wasn’t custom-made, lots of fans could get a similar ring, which made Diana feel connected to everyone while still being a royal. Diana also loved it for sentimental reasons because it reminded her of her mom’s engagement ring. She wore it all the time, even after her divorce, and when she passed away, her sons William and Harry inherited it. Later, Prince William used the same ring in 2010 to propose to Kate Middleton, passing Diana’s legendary royal style on to the next generation."
        },
        adult:{
          short:"Prince Charles’s engagement ring for Princess Diana became instantly iconic. Made of 18-carat white gold with a 12-carat Ceylon sapphire surrounded by 14 diamonds, it was chosen by Diana herself from Garrard’s catalogue, breaking tradition for not choosing a customed and unique ring for herself.",
          medium:"The engagement ring Prince Charles gave to Princess Diana on February 6, 1981, quickly became a symbol of royal style and pop culture. Diana chose an 18-carat white gold ring topped with a 12-carat oval blue Ceylon sapphire, surrounded by 14 solitaire diamonds, from the crown jeweler Garrard’s catalogue. The design was inspired by a historic brooch Prince Albert gave Queen Victoria in 1840, blending royal tradition with a modern twist. While it caused some controversy because it was chosen from existing pieces rather than custom-made, it became instantly iconic and allowed the public to connect with Diana by wearing similar rings themselves.",
          long:"On February 6, 1981, Prince Charles proposed to Princess Diana with an engagement ring that would become one of the most famous jewels in modern royal history. Diana picked the ring herself: an 18-carat white gold band topped with a 12-carat oval blue Ceylon sapphire and surrounded by 14 solitaire diamonds. She chose it from the crown jeweler Garrard’s catalogue, inspired by Queen Victoria’s sapphire and diamond cluster brooch given by Prince Albert in 1840. The ring immediately entered pop culture. It broke from royal tradition because it was not custom-made, allowing ordinary people to buy similar rings, making Diana feel relatable while remaining iconic. Diana also had personal reasons for the choice: it reminded her of her mother’s engagement ring. She continued to wear it even after her divorce, and after her death, the ring was inherited by her sons, Prince William and Prince Harry. In 2010, Prince William used it to propose to Kate Middleton, passing Diana’s pop culture legacy into the next generation."
        }
      }
    },
    order: {
      historical: 2,
      popculture: 4 
    }
  },
{
    id: 17,
    title: "Revenge Dress",
    image: ["images/dress-1.jpg", "images/dress-2.jpg" ],
    metadata: {
      fullName: "Revenge Dress",
      date: "1994",
      place: "Graeme Mackenzie collection",
      materiality: "Silk minidress",
      room: "Princess Diana's Room"
    },
    text: {
      historical:{
        children: {
          short: "In June 1994, Princess Diana wore a black silk dress to a garden party after she and Prince Charles divorced. The dress became very famous because everyone kept talking about it even after the event.",
          medium: "Princess Diana wore a black silk dress in June 1994 to a garden party after her divorce from Prince Charles. The dress became very famous because she wore it the same night that Charles told on TV that he had been with someone else while still being married to the Princess. The dress was very different from what most royal people wore. It was short, with off-the-shoulder sleeves, black tights, and high heels. Diana wore the dress to show that she was strong and brave, and people loved how confident she looked. She used the dress to tell her own story and be noticed in the news in a positive way.",
          long: "In June 1994, Princess Diana went to a big garden party. She had recently divorced Prince Charles. That same night, Charles told everyone on TV that he had been with another woman. Diana wore a special black silk dress made by a designer named Christina Stambolian. The dress was very different from what most royal people wore. It was short, had bare shoulders, and she wore black tights and high heels. Diana had owned the dress for many years but was too shy to wear it before because it was very bold and brave. That night, she decided to wear it to show everyone that she was strong and could be happy even after sad news. People loved her confidence and thought she looked amazing. The dress helped Diana tell her own story without saying a word. Later, the dress was sold at an auction, and now a collector in Scotland has it. Diana’s dress became very famous, and many people still remember it today because it showed that she was brave and stylish"
        },
        adult: {
          short:"The black silk minidress created by the designer Christina Stambolian became iconic when Princess Diana wore it in June, 1994 to the garden party held by Vanity Fair, after the divorce from Prince Charles.",
          medium:"The black silk minidress created by the designer Christina Stambolian became iconic when Princess Diana wore it in June, 1994 to the garden party held by Vanity Fair, after the divorce from Prince Charles. The dress became iconic because it was worn by Princess Diana the night Prince Charles confessed on British television that he had cheated on her with Camilla Parker Bowles. The dress is very far from royal choices at the time. It is short, with off the shoulder cleavage baring neckline, paired with black tights and high heels. This dress was a public response to the interview. While the rules of the royal family required the members to wear modest and non provocative clothes, Diana chose to disobey by wearing something risky for a royal woman and still manage to conquer the sympathy of the public opinion. Diana took control of the narrative by diverting the attention from Prince Charles' confession, reclaiming her space in the front pages.",
          long:"The black silk minidress created by the designer Christina Stambolian became iconic when Princess Diana wore it in June, 1994 to the garden party held by Vanity Fair, after the divorce from Prince Charles. The dress became iconic because it was worn by Princess Diana the night Prince Charles confessed on British television that he had cheated on her with Camilla Parker Bowles. The dress is very far from royal choices at the time. It is short, with off the shoulder cleavage baring neckline, paired with black tights and high heels. Diana owned the dress for many years before actually wearing it at a public event. She refused to wear it before because she considered it too bold. This dress was a public response to the interview. While the rules of the royal family required the members to wear modest and non provocative clothes, Diana chose to disobey by wearing something risky for a royal woman and still manage to conquer the sympathy of the public opinion. Diana took control of the narrative by diverting the attention from Prince Charles' confession, reclaiming her space in the front pages. The dress now belongs to the Scottish collector Graeme Mackenzie who bought the dress at an auction in New York on June 25, 1997."
        }
      },
      popculture: {
        children: {
          short:"Princess Diana wore a black silk minidress by Christina Stambolian in June 1994 and everyone remembered it! The dress was bold, short, and off the shoulder. Diana looked amazing and instantly became a style icon that everyone loved.",
          medium:"In June 1994, Princess Diana went to a fancy garden party hosted by Vanity Fair and wore a black silk minidress by Christina Stambolian. It was a very special dress because it was short, off the shoulder, and completely different from what royal ladies usually wore. That night was famous because it happened the same evening Prince Charles admitted on TV that he had been unfaithful. Diana didn’t look sad or scared, she looked powerful and confident. Wearing that dress, she showed everyone she was brave, stylish, and in charge of her own story. The dress became a pop culture moment that people still talk about today.",
          long: "long children"
        },
        adult:{
          short:"Princess Diana’s black silk minidress by Christina Stambolian became instantly legendary when she wore it in June 1994 to Vanity Fair’s garden party. Bold, glamorous, and completely unexpected for a royal, the dress turned Diana into a fashion icon and a pop culture superstar.",
          medium:"In June 1994, Princess Diana made a bold fashion statement at Vanity Fair’s garden party after her divorce from Prince Charles. She wore a black silk minidress designed by Christina Stambolian, a dress that became instantly iconic. The timing was unforgettable because it was the night Prince Charles confessed on TV about his affair with Camilla Parker Bowles. Diana’s short off-the-shoulder dress paired with black tights and heels broke royal fashion rules while capturing public admiration. By wearing it, Diana took control of the story, turning the spotlight on herself and cementing her status as a fearless style icon and pop culture legend.",
          long:"Princess Diana’s black silk minidress by Christina Stambolian became one of the most iconic royal fashion moments of the 1990s. She wore it in June 1994 at Vanity Fair’s garden party following her divorce from Prince Charles. The moment was unforgettable because the dress appeared the same night Charles admitted on television to his affair with Camilla Parker Bowles. The dress was daring for a royal. It was short with an off-the-shoulder neckline and paired with black tights and heels. Diana had owned it for years but had never worn it publicly because she considered it too bold until the perfect moment arrived. By stepping out in the dress she broke the traditional royal dress code, which demanded modesty, and instantly captured public admiration. Diana’s choice was more than fashion. She reclaimed the narrative, diverted attention from Charles’ confession, and reminded the world of her charisma, style, and fearless personality. The dress became a symbol of Diana’s power, independence, and pop culture influence. Today it belongs to Scottish collector Graeme Mackenzie who purchased it at auction in New York on June 25, 1997."
        }
      }
    },
    order: {
      historical: 3,
      popculture: 1
    }
  },
{
    id: 18,
    title: "Lady Diana on holiday in Portofino",
    image: ["images/photo-1.jpg", "images/photo-2.jpg", "images/photo-3.jpg" ],
    metadata: {
      fullName: "Lady Diana on holiday in Portofino",
      date: "1997",
      place: "Getty Images",
      materiality: "Photograph",
      room: "Princess Diana's Room"
    },
    text: {
      historical: {
        children: {
          short: "This is a picture of Princess Diana on holiday in Portofino. She is sitting on the diving board of a big yacht and looking out at the sea. This photo was taken one month before she died in a car accident.",
          medium: "In this picture, Princess Diana is on holiday in Portofino. She is wearing a blue swimsuit and sitting on the diving board of a big yacht owned by Mohammed Al Fayed. She is spending time with Dodi, who was her friend after she and Prince Charles divorced. Diana was also with her two sons, Prince William and Prince Harry. They played, laughed, and had a lot of fun together. Harry later said it was a very happy time. Some photographers followed them, but Diana tried to keep her children safe and happy. This picture is one of the last photos taken of the Princess.",
          long: "Princess Diana went on a holiday to Portofino. She wore a bright blue swimsuit and sat on the diving board of a big yacht. She went with Dodi, her friend after she and Prince Charles divorced. Diana also brought her two sons, Prince William and Prince Harry. They spent time laughing, playing, and enjoying the sun and sea. Harry remembered it as a very happy holiday with his mum. Even on holiday, some photographers tried to take pictures of Diana. She let them take some, but she always wanted to protect her children from the cameras. The TV series The Crown even shows some of these photographers following her on the yacht. After the holiday, Diana and Dodi went back to Paris. Sadly, a few days later, she had a car accident and passed away. This makes the photos from Portofino very special, because they show Diana happy, free, and enjoying life with her sons. Many people remember her as “The People’s Princess” because she cared so much about her children and people, expecially the less fortunate."
        },
        adult: {
          short:"The picture portraits Lady Diana on holiday in Portofino, sitting on the diving board of Mohammed Al Fayed’s yacht, gazing at the horizon. This photograph captures Diana one month before her death caused by a fatal car accident.",
          medium:"The picture portraits Lady Diana on holiday in Portofino, wearing an aqua blue swimsuit sitting on the diving board of Mohammed Al Fayed’s yacht. The Princess is captured in a solitary moment during her vacation with Mohammed Al Fayed’s son, Dodi, with whom she had a romantic affair after the divorce from Prince Charles. She spent this last vacation with her two sons, Prince William and Prince Harry, who remembers the trip fondly because of the quality time they spent with their mother. By spending time together, Prince Harry remembers in his biography Spare how there was much laughter and everything was heavenly during the trip and how their mother seemed to be happy after all the turbulence in her life. Even during this vacation, paparazzi followed her but she turned out to be cooperative with the press to keep her kids safe from the eyes of the public. This is one of the last shots before the tragic accident that caused the early passing away of 'the People’s Princess'.",
          long:"The picture portraits Lady Diana on holiday in Portofino, wearing an aqua blue swimsuit sitting on the diving board of Mohammed Al Fayed’s yacht. The Princess is captured in a solitary moment during her vacation with Mohammed Al Fayed’s son, Dodi, with whom she had a romantic affair after the divorce from Prince Charles. The invitation came at a good time after Prince Charles was throwing a lavish birthday party for Camilla Parker Bowles at Highgrove, the house he shared with Diana. She spent this last vacation with her two sons, Prince William and Prince Harry, who remembers the trip fondly because of the quality time they spent with their mother. By spending time together, Prince Harry remembers in his biography Spare how there was much laughter and everything was heavenly during the trip and how their mother seemed to be happy after all the turbulence in her life. Even during this vacation, paparazzi followed her but she turned out to be cooperative with the press to keep her kids safe from the eyes of the public. The paparazzi issue is also portrayed in the TV series The Crown, which depicts photographers sailing to the Jonikal yacht to take pictures of the Princess. Her willingness to be photographed was probably an attempt to show the British establishments that she was free and to provoke the royal family. The relationship between Diana and Dodi was heavily reported by the press. After their trip they returned to Paris and were chased by the cameras again causing the tragic accident in which Princess Diana passed away. This indeed is one of the last photographs of 'The People’s Princess'."
        }
      },
      popculture: {
        children: {
          short:"This famous photo shows Princess Diana on holiday in Portofino, sitting on the diving board of a big yacht and looking at the sea. It was taken just one month before her tragic accident. Even in a quiet moment, Diana looked graceful and this picture became legendary all over the world.",
          medium:"Princess Diana is sitting on the diving board of Mohammed Al Fayed’s yacht in Portofino wearing a bright aqua blue swimsuit. She was on holiday with her sons, Prince William and Prince Harry, and with Dodi Fayed, who she had a romantic relationship with after her divorce from Prince Charles. Even though paparazzi were around, Diana stayed calm and graceful, protecting her kids while still shining like a true sta. The photo shows her strong, brave, and stylish all at once. People everywhere loved it, and it became a famous pop culture moment showing Diana as the'People’s Princess'.",
          long: "In this iconic photo, Princess Diana is sitting on the diving board of a yacht in Portofino wearing a beautiful aqua blue swimsuit. She was on vacation with her sons, Prince William and Prince Harry, and with Dodi Fayed. This trip came after her divorce from Prince Charles, and it was a happy and special time for Diana and her family. Even though photographers were chasing them, Diana handled the cameras like a true superstar, protecting her children while still looking amazing. She laughed, played, and enjoyed the trip, showing everyone her brave, strong, and stylish side. After the vacation, Diana and Dodi went back to Paris, where a tragic accident happened. This photo is one of the last pictures of her and it reminds the world of her courage, her beauty, and her status as a true pop culture icon. Even in a quiet moment, Diana looked unforgettable and magical."
        },
        adult:{
          short:"This famous photo captures Princess Diana on holiday in Portofino, sitting on the diving board of Mohammed Al Fayed’s yacht and staring at the horizon. Taken just one month before her tragic death, it shows Diana in a quiet, reflective moment that became instantly iconic in pop culture, cementing her image as “the People’s Princess.”",
          medium:"Princess Diana is pictured on holiday in Portofino wearing a stunning aqua blue swimsuit, sitting on the diving board of Mohammed Al Fayed’s yacht. This vacation, spent with Dodi Fayed and her two sons, Prince William and Prince Harry, was one of her last moments of joy after the turmoil of her divorce from Prince Charles. The photograph captures a solitary and intimate side of Diana, showing her strength, grace, and vulnerability all at once. Even with paparazzi nearby, Diana handled the cameras with poise, protecting her children while asserting her independence. This image quickly became a pop culture symbol of Diana’s freedom, charm, and enduring influence on the world.",
          long:"In this iconic photograph, Princess Diana is captured on holiday in Portofino, wearing an aqua blue swimsuit and sitting on the diving board of Mohammed Al Fayed’s yacht. The image shows her in a private, contemplative moment during her vacation with Dodi Fayed, with whom she shared a romantic relationship after her divorce from Prince Charles. The trip came at a pivotal moment in Diana’s life, shortly after Prince Charles hosted a lavish birthday party for Camilla Parker Bowles at Highgrove. Diana spent the vacation with her sons, Prince William and Prince Harry, who later recalled in Spare the laughter, joy, and precious family moments they shared. Despite paparazzi chasing them, Diana skillfully navigated the media to protect her children while maintaining her own public presence. The photograph has become a lasting pop culture image, representing Diana’s courage, independence, and iconic style. Her willingness to be photographed was a subtle assertion of freedom, and her relationship with Dodi was widely covered in the press, making her personal life part of global conversation. The couple returned to Paris after the trip, where paparazzi pursuit ultimately led to the tragic accident that ended Diana’s life. This image remains one of the last enduring visuals of 'the People’s Princess,' a true pop culture legend."
        }
      }
    },
    order: {
      historical: 4,
      popculture: 3
    }
  },
{
    id: 19,
    title: "Diana: Her True Story",
    image: ["images/diana-book.jpg","images/diana-book-back.jpg" ],
    metadata: {
      fullName: "Diana: Her True Story",
      date: "1992",
      place: "Unknown",
      materiality: "Book",
      room: "Princess Diana's Room"
    },
    text: {
      historical:{
        children: {
          short: "Princess Diana had a big book written about her life! It was published on June 16, 1992. The book talked about the hard times she had in her marriage and some of the problems she faced being a princess.",
          medium: "Princess Diana’s life was shared in a book written by Andrew Morton, published on June 16, 1992. The book tells Diana’s story in her own words. She talked about her life, her marriage with Prince Charles, and how it was sometimes really hard to be a princess in the royal family. The book became super famous and was the #1 bestseller because people got to hear Diana’s story directly. She talked about being sad sometimes, feeling unwell, and struggling with her feelings. Even though she helped write it, when the book first came out, people said it was only from her friends and family. Later, we learned Diana really did help write it herself.",
          long: "Princess Diana had a big book about her life. It was written by a man named Andrew Morton and came out on June 16, 1992. The book talks about Diana’s life as a princess and her marriage to Prince Charles. In the book, Diana tells how sometimes she felt very sad and worried. She had some hard times in her marriage and didn’t always feel happy. She also talks about helping people who were having a tough time, which is why many people called her 'The People’s Princess'. At first, people thought Diana didn’t really help write the book, but later we learned she did. After she passed away, the book was updated so that people who cared about her could keep learning from her story. It shows that even princesses can be brave, kind, and strong, even when life is hard."
        },
        adult: {
          short:"Princess Diana’s Biography, written by Andrew Morton was published on June 16, 1992. The book revealed marital issues and difficulties, as well as unhappiness within her marriage and her struggles.",
          medium:"Princess Diana’s Biography, written by Andrew Morton was published on June 16, 1992. The book speaks from Diana’s point of view on her personal life, her marriage with Prince Charles and the struggles she had to face being part of the royal family and being always at the centre of attention of the media. The book became the #1 New York Times bestselling and that is because of the direct participation and witnessing of a royal family member, the Princess, who shared her experience in such a raw and unfiltered way. The biography focuses on her relationship with Queen Elizabeth, her unhappy and difficult marriage and her precarious mental health, as she suffered from depression and bulimia. The direct involvement of Princess Diana was always denied while she was still alive claiming that family and friends were the main source of information. Later on, after the passing away of the Princess, Andrew Morton revealed that Diana had been the primary source while writing her biography.",
          long:"Princess Diana’s Biography, written by Andrew Morton was published on June 16, 1992. The book speaks from Diana’s point of view on her personal life, her marriage with Prince Charles and the struggles she had to face being part of the royal family and being always at the centre of attention of the media. The book became the #1 New York Times bestselling and that is because of the direct participation and witnessing of a royal family member, the Princess, who shared her experience in such a raw and unfiltered way. The biography focuses on her relationship with Queen Elizabeth, her unhappy and difficult marriage caused by Prince Charles infidelity and extramarital affair with Camilla Parker Bowles and her precarious mental health, as she suffered from depression and bulimia. She also emerges as an advocate for important causes because of her special connection and empathy for marginalized people. This is how she got the name of “The People’s Princess”. The direct involvement of Princess Diana was always denied while she was still alive claiming that family and friends were the main source. Later on, after the passing away of the Princess, Andrew Morton revealed that Diana had been the primary source while writing her biography and released the tapes with her confessions on her personal life, breaking the implicit promise of confidentiality. The book was then revisited after Princess Diana’s death in 1997 by adding a layer of poignancy and making sure that her persona will continue to inspire the next generations."
        }
      },
      popculture: {
        children: {
          short:"Princess Diana had a book written about her life by Andrew Morton. It came out on June 16, 1992. The book told everyone about her problems, her sad marriage, and all the hard things she faced as a princess. People loved it and it made Diana even more famous, a popular icon.",
          medium:"In 1992, Andrew Morton published a book about Princess Diana. It talked about her life, her marriage to Prince Charles, and all the tough stuff she had to deal with being a princess. The book was very honest and told her story in her own words. It became a number one bestseller because people felt like they were hearing Diana speak directly to them. The book showed how brave she was, how she sometimes felt sad, and how much she cared about other people. Everyone called her the People’s Princess. The book was a huge pop culture moment and made Diana even more loved around the world.",
          long: "Princess Diana’s life was shared with the world in a book by Andrew Morton. It came out on June 16, 1992. The book told her story from her side, about being a princess, her difficult marriage to Prince Charles, and how hard it was to always be watched by the media. The book became a number one bestseller because Diana’s voice was real and honest. It talked about her struggles with sadness, depression, and bulimia. It also showed how kind she was and how much she cared about people who were having a hard time, which is why everyone called her the 'People’s Princess'. Even though people said Diana didn’t help with the book while she was alive, later it came out that she was the main source. The book shared her personal thoughts and feelings, making it feel like Diana was talking directly to the readers. After she passed away in 1997, the book became even more special. It reminded the world how brave, kind, and amazing she was, and it helped her story stay alive for the people. Diana became a real pop culture icon, a princess who inspired everyone."
        },
        adult:{
          short:"Princess Diana’s biography by Andrew Morton, published on June 16, 1992, shook the world. Revealing her struggles, her unhappy marriage, and life in the royal spotlight, the book instantly became a pop culture phenomenon and cemented Diana’s status as 'the People’s Princess'.",
          medium:"Princess Diana’s biography by Andrew Morton, released on June 16, 1992, gave the world a rare glimpse into her life. Told from her perspective, it shared her challenges in the royal family, her difficult marriage to Prince Charles, and the pressures of constant media attention. The book became a number one New York Times bestseller because Diana’s voice was honest, raw, and unforgettable. Readers learned about her mental health struggles, her relationship with Queen Elizabeth, and her deep empathy for others, which earned her the nickname the People’s Princess. The biography became a pop culture moment, revealing the real Diana behind the royal glamour.",
          long:"Princess Diana’s biography, written by Andrew Morton and published on June 16, 1992, became a worldwide sensation. It offered an inside look at her life from her own perspective, exploring her struggles with the pressures of the royal family, an unhappy marriage, and nonstop media attention. The book became a number one New York Times bestseller because Diana’s voice was at its heart. It shared her difficult relationship with Prince Charles, his affair with Camilla Parker Bowles, her mental health challenges including depression and bulimia, and her empathy for marginalized people, which made her the People’s Princess. Although Diana’s direct involvement was denied while she was alive, it was later revealed that she was the main source for the biography. The tapes of her confessions gave readers a deeply personal view of her life. After her death in 1997, the book took on even greater meaning and helped solidify Diana as a cultural icon whose story continues to inspire generations and shape the pop culture image of royalty, fame, and courage."
        }
      }
    },
    order: {
      historical: 5,
      popculture: 2
    }
  }
]




let currentItemIndex = 0;
let currentImageIndex = 0;
let currentDifficulty = "adult"; // default
let currentTextLevel = 0;       // 0=short, 1=medium, 2=long
let currentNarrative = "historical"; // default
let orderedItems = [];



// Room map -> svg ids
const roomMap = {
    'queen-elizabeth-i': "Queen Elizabeth I's Room",
    'queen-victoria': "Queen Victoria's Room",
    'queen-elizabeth-ii': "Queen Elizabeth II's Room",
    'princess-diana': "Princess Diana's Room"
};


// Orders items according to the narrative
function updateOrderedItems() {
  
    const roomsOrder = [
        "Queen Elizabeth I's Room",
        "Queen Victoria's Room",
        "Queen Elizabeth II's Room",
        "Princess Diana's Room"
    ];

    orderedItems = [];
    roomsOrder.forEach(roomName => {
        const roomItems = items
            .filter(item => item.metadata.room === roomName)
            .sort((a, b) => (a.order?.[currentNarrative] || 0) - (b.order?.[currentNarrative] || 0));
        orderedItems = orderedItems.concat(roomItems);
    });
}


// Shows content in the exhibition.html
function updateContent() {
    const item = orderedItems[currentItemIndex];
    if (!item) return;

    document.getElementById("titolo-item").textContent = item.title;
    document.getElementById("fullName").textContent = item.metadata.fullName;
    document.getElementById("date").textContent = item.metadata.date;
    document.getElementById("place").textContent = item.metadata.place;
    document.getElementById("materiality").textContent = item.metadata.materiality;
    document.getElementById("room").textContent = item.metadata.room;

    showImage(currentImageIndex);

    const textData = item.text?.[currentNarrative]?.[currentDifficulty];
    document.getElementById("shortTextArea").textContent = (currentTextLevel === 0) ? textData.short : "";
    document.getElementById("mediumTextArea").textContent = (currentTextLevel === 1) ? textData.medium : "";
    document.getElementById("longTextArea").textContent = (currentTextLevel === 2) ? textData.long : "";
}

//NEW FUNCTION
function handleNarrativeSwitch(newNarrative) {
    if (currentNarrative === newNarrative) return;
    currentNarrative = newNarrative;
    sessionStorage.setItem('selectedNarrative', newNarrative);

    // Update UI Buttons
    document.getElementById("hist")?.classList.remove('active');
    document.getElementById("pop-cult")?.classList.remove('active');
    
    const activeBtnId = (newNarrative === 'historical') ? "hist" : "pop-cult";
    document.getElementById(activeBtnId)?.classList.add('active');

    // 2. LOGICA DI AGGIORNAMENTO DATI
    const currentId = orderedItems[currentItemIndex]?.id;
    updateOrderedItems();

    if (window.location.pathname.includes("Map.html")) {
        buildList();
    } else {
        const newIndex = orderedItems.findIndex(i => i.id === currentId);
        currentItemIndex = (newIndex >= 0) ? newIndex : 0;
        currentImageIndex = 0;
        currentTextLevel = 0;
        updateContent();
    }
}



function nextItem() {
    currentItemIndex = (currentItemIndex + 1) % orderedItems.length;
    resetItemView();
}

function previousItem() {
    currentItemIndex = (currentItemIndex - 1 + orderedItems.length) % orderedItems.length;
    resetItemView();
}

function resetItemView() {
    currentImageIndex = 0;
    updateContent();
    window.scrollTo({ top: 0, behavior: 'smooth' });
}


// Carousel images in exhibition.html
function showImage(index) {
    const item = orderedItems[currentItemIndex];
    const imgElement = document.querySelector('.item-img');
    if (item.image && item.image.length > 0) {
        imgElement.src = item.image[index];
        imgElement.alt = item.title;
    } else {
        imgElement.src = '';
        imgElement.alt = '';
    }
}


// To change image
function nextImage() {
    const item = orderedItems[currentItemIndex];
    if (!item.image || item.image.length === 0) return;
    currentImageIndex = (currentImageIndex + 1) % item.image.length;
    showImage(currentImageIndex);
}

function prevImage() {
    const item = orderedItems[currentItemIndex];
    if (!item.image || item.image.length === 0) return;
    currentImageIndex = (currentImageIndex - 1 + item.image.length) % item.image.length;
    showImage(currentImageIndex);
}

setInterval(nextImage, 4000);


// To change item
//function previousItem() {
  //  currentItemIndex = (currentItemIndex - 1 + orderedItems.length) % orderedItems.length;
 //   currentImageIndex = 0;
 //   currentTextLevel = 0;
 //   updateContent();
 //   window.scrollTo({ top: 0, behavior: 'smooth' });
//}

//function nextItem() {
 //   currentItemIndex = (currentItemIndex + 1) % orderedItems.length;
 //   currentImageIndex = 0;
  //  currentTextLevel = 0;
 //   updateContent();
 //   window.scrollTo({ top: 0, behavior: 'smooth' });
//}


// To set the narrative through the buttons
//function setNarrative(narrative) {
   
  //  if (currentNarrative === narrative) return;

  //  currentNarrative = narrative

  //  document.querySelectorAll('.button').forEach(btn => {
  //      btn.classList.remove('active');
  //  });

  //  const btn = document.getElementById(narrative);
  //  if(btn) btn.classList.add('active');
    
  //  sessionStorage.setItem('selectedNarrative', narrative);
    // saves id of the current item
   // const currentId = orderedItems[currentItemIndex]?.id;
    // orders the items
  //  updateOrderedItems();

    // finds index of the item in the new order
  //  const newIndex = orderedItems.findIndex(i => i.id === currentId);
  //  if (newIndex >= 0) {
    //    currentItemIndex = newIndex;
  //  } else {
    //    currentItemIndex = 0;
   // }

    // reset
  //  currentImageIndex = 0;
  //  currentTextLevel = 0;

  //  updateContent()
//}


// To clock on rooms
function setupRoomClicks(isExhibition=false) {
    Object.keys(roomMap).forEach(roomClass => {
        const roomEl = document.querySelector(`.${roomClass}`);
        if (roomEl) {
            roomEl.style.cursor = 'pointer';
            roomEl.addEventListener('click', () => {
                // First item in the room according to narrative
                const roomItems = orderedItems.filter(i => i.metadata.room === roomMap[roomClass]);
                if (roomItems.length === 0) return;

                const firstItem = roomItems[0];
              
                if(isExhibition){
                    // Exhibition.html → shows item
                    currentItemIndex = orderedItems.indexOf(firstItem);
                    currentImageIndex = 0;
                    currentTextLevel = 0;
                    updateContent();
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                } else {
                    // Map.html → go to exhibition
                    const url = `exhibition.html?item=${firstItem.id}&narrative=${currentNarrative}`;
                    window.location.href = url;
                }
            });
        }
    });
}


// Text difficulties
function changeTextChildren() {
    currentDifficulty = "children";
    //currentTextLevel = 0;
    updateContent();
    document.querySelectorAll('.button-diff').forEach(btn => btn.classList.remove('active'));
    document.getElementById('ChildrenDifficulty').classList.add('active');
}

function changeTextAdult() {
    currentDifficulty = "adult";
    //currentTextLevel = 0;
    updateContent();
    document.querySelectorAll('.button-diff').forEach(btn => btn.classList.remove('active'));
    document.getElementById('AdultDifficulty').classList.add('active');
}

function showLess() {
    if (currentTextLevel > 0) {
        currentTextLevel--;
        updateContent();
    }
}

function showMore() {
    if (currentTextLevel < 2) {
        currentTextLevel++;
        updateContent();
    }
}


// Build list in Map.html
function buildList() {
    const container = document.querySelector('#items-container');
    if (!container) return;

    container.innerHTML = '';

    const roomsOrder = [
        "Queen Elizabeth I's Room",
        "Queen Victoria's Room",
        "Queen Elizabeth II's Room",
        "Princess Diana's Room"
    ];

    roomsOrder.forEach(roomName => {
        const liRoom = document.createElement('li');
        liRoom.classList.add('room-title');
        liRoom.textContent = roomName;
        container.appendChild(liRoom);

        const ol = document.createElement('ol');
        ol.type = 'a';

        const roomItems = items
            .filter(item => item.metadata.room === roomName)
            .sort((a,b) => (a.order?.[currentNarrative]||0) - (b.order?.[currentNarrative]||0));

        roomItems.forEach(item => {
            const liItem = document.createElement('li');
            liItem.innerHTML = `<a href="#" class="map-link" data-id="${item.id}">${item.text[currentNarrative]?.short || item.title}</a>`;
            ol.appendChild(liItem);
        });

        container.appendChild(ol);
    });

    // Click on links
    container.querySelectorAll('.map-link').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const id = parseInt(link.dataset.id);
            window.location.href = `exhibition.html?item=${id}&narrative=${currentNarrative}`;
        });
    });
}


document.addEventListener('DOMContentLoaded', () => {
    //document.body.style.visibility = "visible";
   // document.body.style.opacity = "1";
    const params = new URLSearchParams(window.location.search);
   
    // 1. Determine Narrative
    currentNarrative = params.get('narrative') || sessionStorage.getItem('selectedNarrative') || 'historical';
    updateOrderedItems();


    // 2. Setup Buttons
    document.getElementById("hist")?.addEventListener('click', () => handleNarrativeSwitch("historical"));
    document.getElementById("pop-cult")?.addEventListener('click', () => handleNarrativeSwitch("popculture"));
   

    const initialBtnId = (currentNarrative === 'historical') ? "hist" : "pop-cult";
    document.getElementById(initialBtnId)?.classList.add("active");


    // 3. Page Logic
    if (window.location.pathname.includes("Map.html")) {
        buildList();
        setupRoomClicks(false);
    }


    if (window.location.pathname.includes("exhibition.html")) {
        const itemId = parseInt(params.get('item'));
        if (!isNaN(itemId)) {
            const index = orderedItems.findIndex(i => i.id === itemId);
            if (index >= 0) currentItemIndex = index;
        }


        currentDifficulty = "adult";
        currentTextLevel = 0;
       
        // Rendi il bottone Adult visivamente attivo
        document.getElementById('AdultDifficulty')?.classList.add('active');
        document.getElementById('ChildrenDifficulty')?.classList.remove('active');
        updateContent();
        setupRoomClicks(true);
    }
});

 