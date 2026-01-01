//javascript per cambiare gli stili//

function changeTheme(cssFile) {
        const link = document.getElementById("theme-css");
        if(link) {
      // cambia il tema e forza ricaricamento senza cache
          link.href = cssFile + "?v=" + Date.now();
          sessionStorage.setItem('selectedTheme', cssFile)
    }
      }
  // Applica il tema salvato al caricamento della pagina
        document.addEventListener('DOMContentLoaded', () => {
          const savedTheme = sessionStorage.getItem('selectedTheme');
          if(savedTheme) {
            const link = document.getElementById("theme-css");
            if(link) link.href = savedTheme;
          }
        });

// dati items 

const items = [
  {
    id: 1,
    title: "The Coronation Portrait",
    image: ["images/coronation_portrait2_elizI.jpg", "images/coronation_portrait_elizI.jpg" ],
    metadata: {
      fullName: "The Coronation Portrait",
      date: "circa 1600",
      place: "National Portrait Gallery, London",
      materiality: "Oil on panel",
      room: "Queen Elizabeth I's Room"
    },
    text: {
        children: {
          short: "short children",
          medium: "medium children",
          long: "long children"
        },
        adult: {
          short: " The portrait depicts Queen Elizabeth I with the clothes, crown and jewelry that she wore during her coronation ceremony, while holding the symbols of her authority as queen. The painting is from an unknown artist, painted around 1600-1610.",
          medium: "On 15th January 1559 Elizabeth was crowned as Queen of England at only 25 years old. The portrait commonly known as 'The Coronation Portrait' by an Unknown Artist is oil on panel and dates around 1600-1610 is a copy of the original painting of 1559 that now is lost. Elizabeth is portrait  with the gold cloth that she wore during her coronation ceremony that had been made by her half-sister Mary five years before for her coronation. She holds the orb and scepter to symbolise her authority as queen reignant.",
          long: "On 15th January 1559 Elizabeth was crowned as Queen of England at only 25 years old. The portrait commonly known as 'The Coronation Portrait' by an Unknown Artist is oil on panel and dates around 1600-1610 is a copy of the original painting of 1559 that now is lost. The portrait is now held in the National Portrait Gallery, London , UK. Elizabeth is depicted wearing a gold cloth that she wore during her coronation ceremony. The cloth was made for her half-sister Mary I for her own coronation five years early in 1553, the decision of using Mary’s coronation robe may suggest the willingness of Elizabeth of demonstrating the natural continuity between Mary and her own reign, inside of the Tudor dynasty. The color of the cloth, gold is a symbol of royalty, majesty and power, some suggest that it was a hint of the “Golden age” that it would be the Elizabethan reign. The tudor rose features throughout the coronation robe, the rose that combine the white rose of the York family and the red one of the Lancaster family, two houses that were united at the end of the War of roses with the marriage of Henry VII and Elizabeth of York, Elizabeth grandparents that began the Tudor Dynasty. Elizabeth is depicted with the crown and holding the orb and scepter symbols of her authority as queen reignant. Some historians argued the importance of the orb in the portrait, not just because it is a traditional royal symbol but is particularly relevant in Elizabeth's case, since she represents the head of the Church of England, due to her father's controversies with the catholic church and making England a protestant country."
      }
    }
  },

  {
    id: 2,
      title: "Chequers Ring",
      image: ["images/chequers_ring.jpg"],
      metadata: {
        fullName: "Chequers Ring",
        date: "1570",
        place: "unknown",
        materiality: "mother of pearl, colg, rubies",
        room: "Queen Elizabeth I's Room"
      },
      text:{
        children: {
          short: "short children",
          medium: "medium children",
          long: "long children"
        },
        adult: {
          short: "'Chequers Ring' is one of the few surviving pieces of jewelry used by Queen Elizabeth I. Is a pearl ring with a set of rubies, with a locket with  the portrait of the queen itself and another woman, probably her mother or step-mother.",
          medium: "The 'Chequers Ring' is one of the most beloved jewels worn by Queen Elizabeth I, and one of the few surviving pieces of her jewels to us today. The ring dates mid-1570 and is a pearl ring with a string of gold with a set of table-cut of rubies, on the bezel part of the ring are white diamonds that form the E for Elizabeth and underneath an R for regina in cobalt blue enamel. Inside the basel there is a locket with two portraits, one is Elizabeth herself and the other has been a topic of speculation for several years. At the beginning it was thought that it was her mother Anne Boleyn or her step-sister Mary I, but  probably is Catherin Parr, Elizabeth step-mother.",
          long: "The ring dates to the mid-1570s, is a mother-of-pearl hoop mounted with a sheet of gold with a set of table-cut rubies. On the bezel white diamonds form the letter E for Elizabeth and underneath an R for regina in cobalt blue enamel. In the back of the bezel there is a phoenix, a typical symbol of the Seymour family, some argued that it was a gift from the Seymor Family to Elizabeth  (Jane Saymor was the third wife of Henry VIII, Elizabeth’s father, and the mother of Elizabeth's half brother, Edward VI who died at 15 years old). Others suggest that the phoenix was just a common symbol in other of Elizabeth’s jewellery. The most intriguing part of the ring is inside of the basel where there is a locket with two portraits, one is Elizabeth herself and the other has been a topic of speculation for several years. Due to the juxtaposition of Elizabeth’s portrait, it was said that the other portrait of a younger woman was traditionally said to be her mother, Anne Boleyn, specially because she was executed at a young age, when Elizabeth was just two years old. This was profoundly argued because it is said that Elizabeth mentioned very rarely her mother Anne, and the portrait shows a woman with red-ish hair color, therefore several argued that it was supposed to be her half-sister Mary I. It is likely that the young woman depicted is Catherine Parr (Elizabeth's father, Henry VIII last (six) wife), she is remembered with reddish hair and very close to Elizabeth, being her step-mother and a very important mother figure during adolescence."
      }
    }
  },
  {
    id: 3,
    title: "Tilbury Speech",
    image: [ ],
    metadata: {
      fullName: "Tilbury Speech",
      date: "1588",
      place: "Harleian Collection, British Library",
      materiality: "Ink on paper",
      room: "Queen Elizabeth I's Room"
    },
    text: {
        children: {
          short: "short children",
          medium: "medium children",
          long: "long children"
        },
        adult: {
          short: "The speech given by Queen Elizabeth I in 1588 to the English army in Tilbury, Essex before facing the Spanish armada. The speech inspired loyalty and courage from the soldiers to face the Spanish invasion, it demonstrated the queen’s dedication to her kingdom.",
          medium:"The “Tilbury Speech” was the speech delivered on August 19th 1588 by Queen Elizabeth to the English troops assembled at Tilbury, Essex while preparing to face the invasion of the Spanish Armada. The speech inspired loyalty and courage from the soldiers to face the Spanish invasion, it demonstrated the queen’s dedication to her kingdom. While the war with Spain would continue until 1604, for this battle England defeated the Spanish Armada, and Elizabeth's popularity increased and became the nation saviour who stood firm to protect her nation. The document is a copy of the speech recorded several years later, to remember one moment that defines English history.",
          long: "The “Tilbury Speech” was the speech delivered on August 19th 1588 by Queen Elizabeth to the English troops assembled at Tilbury, Essex while preparing to face the invasion of the Spanish Armada. England faced an invasion by the Spanish Armada (called at the time the Invincible Armada) sent by the catholic King Philip II of Spain to overthrow the protestant and illegitimate Queen Elizabeth I and restore Catholicism in England. The speech inspired patriotism and courage from the soldiers to face the Spanish invasion, it demonstrated the queen’s resolute leadership and dedication to her kingdom. While the war with Spain would continue until 1604, for this battle England defeated the Spanish Armada, and Elizabeth's popularity increased and became the nation saviour who stood firm to protect her nation. This document is a copy of the speech recorded several years later. The speech became an iconic symbol of national resistance remembered as a moment that defines English history. Here is the full text of the actual speech delivered by Queen Elizabeth."
        }
    }
  },
  {
    id: 4,
    title: "First Folio",
    image: ["images/First_folio_VA.jpg","images/shake-FF.jpg" ],
    metadata: {
      fullName: "First Folio",
      date: "1623",
      place: "Folger SHakespeare Library",
      materiality: "Book",
      room: "Queen Elizabeth I's Room"
    },
    text: {
        children: {
          short: "short children",
          medium: "medium children",
          long: "long children"
        },
        adult: {
          short:"The collection of all of William Shakespeare plays, it was published in 1623, seven years after his death. Shakespeare wrote all his plays during the Elizabethan era, and several of the plays in the collection were performed in Queen Elizabethf court.",
          medium:"The 'First Folio' is a collection of plays of William Shakespeare commonly called First Folio by modern scholars, but it was published with the name “Mr. William Shakespeare’s Comedies, Histories and Tragedies”.  Published in 1623, seven years after Shakespeare’s death. The collection contains 36 of the author's plays; it was put together and edited by Shakespeare colleagues John Heminges and Henry Condell. The collection is particularly important because until Shakespeare’s death just 19 of his plays were published, with the collection of plays in the First Folio we have today almost 20 plays that if not published could have been lost forever. Shakespeare wrote his masterpieces during the english renaissance, also called the Elizabethan era, during the reign of Queen Elizabeth I the arts and culture flourish, several of Shakespeare plays were performed in the queen court, she being a big supporter of the arts.",
          long:"The ‘First Folio’ is a collection of plays of William Shakespeare commonly called First Folio by modern scholars, but it was published with the name “Mr. William Shakespeare’s Comedies, Histories and Tragedies”.  Published in 1623, seven years after Shakespeare’s death. The collection contains 36 of the author's plays; it was put together and edited by Shakespeare colleagues John Heminges and Henry Condell. The collection is particularly important because until Shakespeare’s death just 19 of his plays were published, with the collection of plays in the First Folio the only reliable text for about 20 plays that if not published could have been lost forever. For example eighteen of the plays in the First Folio including Macbeth, Julius Caesar, The tempest, Twelfth Night among others were not known to have been previously printed. Printed in folio format, the reason why is called first folio nowadays, there were around 750 copies printed just 235 remain today, most of which are kept in public archives or private collections. Most of the copies are in England and in the Folger Shakespeare Library in Washington D.C, USA. Today is considered as one of the most influential books ever published, especially for the arts and drama. It is commonly known that Shakespeare was very close to the court of Queen Elizabeth I, several of Shakespeare's plays were performed in her court. Queen Elizabeth is remembered as patron to the arts and culture, and is said that her reign brought the Renaissance in England. The Elizabethan age is called the “Golden Age” for the dramatic arts being Shakespeare the perfect example, she supported the theatre and provided a prosper environment for the dramatic arts allowing Shakespeare to become one of the most important playwrights of history."
        }
    }
  },
    {
    id: 5,
    title: "Wedding Dress",
    image: [ ],
    metadata: {
      fullName: "Wedding Dress",
      date: "1840",
      place: "",
      materiality: "Heavy silk satin, honiton lace",
      room: "Queen Victoria's Room"
    },
    text: {
        children: {
          short: "short children",
          medium: "medium children",
          long: "long children"
        },
        adult: {
          short:"In February of 1840, Queen Victoria married Prince Albert. She wore a white wedding dress made of heavy silk satin. Queen Victoria was one of the first women to get married in a white dress, after her it became a tradition white bridal gowns became a tradition.",
          medium:"On February 10th, 1840 Queen Victoria married Prince Albert Saxe-Coburg and Gotha at St James’s Palace, London. She wore a white wedding dress made of heavy silk satin with a honiton lace. The lace was designed by William Dyce the head of the government school of design and the dress design by Mary Bettans. Queen Victoria was one of the first women to wear a white dress, the decision of the queen of wearing a white dress instead of the crimson velvet robe of state was acknowledged as a romantic gesture and gave the notion of the Queen as an adoring innocent bride. This decision captured the public attention creating the visual idea of the bride in pure white, after which a white wedding dress became the norm for brides marrying for the first time.",
          long:"On February 10th, 1840 Queen Victoria married Prince Albert Saxe-Coburg and Gotha at St James’s Palace, London. She wore a white wedding dress made of heavy silk satin with an elaborate honiton lace flounce, trimmed with orange blossom. The lace was designed by William Dyce the head of the Government School of Design (Royal College of Art) and the dress design by Mary Bettans. The design of the dress was a wide open neckline and a deep-V shaped waistline, it included an eighteen foot long court train of satin, carried by her bridesmaids in the aisle of the church. Today the dress is kept in Kensington Palace Museum. Queen Victoria was not the first woman to wear a white dress, but the decision of the queen of wearing a white dress instead of the crimson velvet robe of state was acknowledged as a romantic gesture and gave the notion of the Queen as an adoring innocent bride.This decision captured the public attention and the visual ideal of the bride in pure white spread quickly specially in english high society. The visual of the pure, untouched virgin bride that the white dress represents spread easily in the Victorian age, which valued modesty and a strict morality. Therefore after the wedding of Queen Victoria a white wedding dress became the norm for brides marrying for the first time. The actual reason of Queen Victoria for choosing a white dress was not to make it a tradition but she wanted to support and stimulate Britain’s lace industry. Several skilled artisans were facing poverty due to the big development in the textile industry brought from the industrial revolution."
        }
    }
  },
   {
    id: 6,
    title: "Coronation Portrait",
    image: [ ],
    metadata: {
      fullName: "Coronation Portrait",
      date: "1838",
      place: "",
      materiality: "Oil on canvas",
      room: "Queen Victoria's Room"
    },
    text: {
        children: {
          short: "short children",
          medium: "medium children",
          long: "long children"
        },
        adult: {
          short:"Queen Victoria was crowned as the ruler of the United Kingdom in 1838 at the age of 18. The portrait by George Hayter of the same year shows the young queen in the regal gowns, crown and scepter worn during her coronation ceremony.",
          medium:"Queen Victoria was crowned as the ruler of the United Kingdom on June 28 th 1838 at Westminster Abbey when she was just 18 years old. The portrait is oil on canvas, from the same year of the coronation by the English artist George Hayter. The painting portrays the young Queen sitting wearing her coronation robes, while wearing the Imperial state Crown and holding in one hand the scepter with the cross. Hayter was also commissioned to do a painting of a scene from the actual coronation ceremony, which was later done in 1839, while this portrait was called the coronation state portrait of the Queen. There were several copies years after the original portrait, one of the most famous copies is the one in the National Portrait Gallery, London of 1863.",
          long:"Queen Victoria was crowned as the ruler of the United Kingdom on June 28 th 1838 at Westminster Abbey when she was just 18 years old. The painting is Oil on Canvas, dated from the same year of the coronation done by the English artist George Hayter.Today the principal version of the portrait is located at Holyrood Palace, Edinburg, even though several copies of the original painting are at Buckingham Palace and one of the most famous ones is at the National Portrait Gallery, London of 1863. The painting portrays the young Queen sitting in her homage Chair, wearing her Coronation Robes and the Imperial State Crown while holding in one hand the Scepter with the Cross. Hayter’s first idea for the background of the portrait shows the Queen in Westminster Abbey, but later decided to change it and place her in a more generic but still a regal setting. Queen Victoria’s pose with an upturned face illuminated by a shaft of light, the composition of the painting is reminiscent of Baroque painting. Several argued that these features capture the spirit of optimism felt by the nation at the start of her long and strong reign. The artist George Hayter was also commissioned to do a painting of a scene from the actual coronation ceremony, which was later done in 1839 known as The Coronation of Queen Victoria, in addition to painting this portrait called the coronation state portrait of the Queen. Hayter in 1837 was appointed as Victoria’s Painter of History and Portrait and later became Principal Painter of the Ordinary, this led to the production of several royal paintings done by him. Then by 1843 Hater did not receive royal commissions as the Queen came to prefer the work of other artists."
        }
    }
  },
{
    id: 7,
    title: "Love letters between Albert and Victoria",
    image: [ ],
    metadata: {
      fullName: "Love letters between Albert and Victoria",
      date: "1836",
      place: "",
      materiality: "Letter",
      room: "Queen Victoria's Room"
    },
    text: {
        children: {
          short: "short children",
          medium: "medium children",
          long: "long children"
        },
        adult: {
          short:"This document makes part of the collection of several love letters between Victoria and Albert. The relationship between Victoria and Albert is known as deeply affectionate and caring for each other. The collection of letters between the both of them during their courtship before their wedding demonstrate their love for each other.",
          medium:"The love letters between Queen Victoria and Prince Albert are a collection of several letters primarily written in German, that began in 1836 after their first meeting and continued for the next few years. Although they were cousins since their first meeting their affection grew more over time becoming a romantic interest. The exchange of letters during their courtship before their wedding demonstrated their deep affection and romantic love for each other. Their letters are particularly important items that demonstrated that behind the stoic monarch was a woman that loved with all her heart her husband, providing a look into their strong partnership, shared interest and deep love. Today the collection of letters are a testament of one of history’s great royal romances.",
          long:"The love letters between Queen Victoria and Prince Albert are a collection of over 5000 correspondence that began in 1836 after their first meeting. The letters were written in English and German, but after their engagement, the letters were primarily written in German. Today the letters are held in the Royal Archives at Windsor Castle, UK. Although they were cousins after their first meeting their affection grew more over time becoming a romantic interest, she described him in her journal as “extremely handsome”. The couple’s affection depended over time, when Albert visited England in 1839 Victoria proposed to him. The exchange of letters during their courtship before their wedding demonstrated their passionate and deep love for each other. For instance on their engagement day Albert wrote to her “I... can only believe that Heaven has sent down an angel to me, whose radiance is intended to brighten my life”. The letters are a particularly important item that demonstrated that behind the stoic monarch was a woman who loved her husband with all her heart. They provide a look into their strong partnership, shared interests, and deep love, even detailing marital disagreements. The collection is an invaluable source that humanizes the figure of Queen Victoria and offers an unique view into her personal life, especially because they sharply contrast with the restrained social conventions of the Victorian era. The correspondence continued until Albert's death in 1861 and remains a testament to one of history's great royal romances."
        }
    }
  },
{
    id: 8,
    title: "The Royal Family in 1846",
    image: [ ],
    metadata: {
      fullName: "The Royal Family in 1846",
      date: "1846",
      place: "",
      materiality: "Oil on canvas",
      room: "Queen Victoria's Room"
    },
    text: {
        children: {
          short: "short children",
          medium: "medium children",
          long: "long children"
        },
        adult: {
          short:"The painting by Franz Xaver Winterhalter of 1846 portraits Queen Victoria and Prince Albert with five of their nine children. Queen Victoria is remembered as the “grandmother of Europe” because all her children married several European royal families, spreading her lineage all over the crowns of Europe.",
          medium:"“The Royal Family” is an 1846 painting, oil on canvas of the German artist Franz Xaver Winterhalter. It depicts Queen Victoria with her consort Prince Albert with the oldest five of their nine children that they had together. The portrait was meant to emphasize the sense of family harmonizing while wearing elements of royal status, such as jewels and attire. In particular Victoria wears an emerald and diamond diadem, while Prince Albert wears a court dress. The representation of Queen Victoria with her children is fundamental to understanding the succession of the royal families of Europe for the following decades after Victoria’s reign. Queen Victoria is sometimes called “The Grandmother of Europe”, due to all her children excluding the heir to the English Crown were married with the heirs of several royal families of European countries, spreading Queen Victoria lineage all over the crowns of Europe.",
          long:"“The Royal Family” is an 1846 painting, oil on canvas of the German artist Franz Xaver Winterhalter. The painting is part of the royal collection and is held at the East Gallery at Buckingham Palace, London. It depicts Queen Victoria with her consort Prince Albert with the oldest five of their nine children that they had together. The portrait was meant to emphasize the sense of family, domestic harmony, peace and happiness with several allusions to royal status, such as jewels, attire, furniture and the continuation of the royal lineage. In particular Victoria wears an emerald and diamond diadem design by Prince Albert in 1845 with matching drop earrings and three brooches attached to her bodice. Prince Albert wears a court dress of black velvet breeches a white waistcoat and a black single-breasted coat. Their children in the painting are: The Prince of Wales, (heir to the British crown), Prince Albert, Victoria Princess Royal, Princess Alice and Princess Helena. The representation of Queen Victoria with her children is fundamental to understanding the succession of the royal families of Europe for the following decades after Victoria’s reign. Queen Victoria is sometimes called “The Grandmother of Europe”, due to all her children excluding the heir the Prince of Wales, were married with the heirs of several royal families of European countries, spreading Queen Victoria lineage all over the crowns of Europe. Even so, by World War I the king of England was a first grade cousin to the German Kaiser and the Russian Zar. The portrait was commissioned by the Queen when in 1846 she wrote to the King of France Louis-Philippe to ask him if he would release the painter Winterhalter from his role as court painter so he could go to England and paint a large picture of the royal family. When finished it was considered by the Queen ‘a “chef d’oevure”, she recorded in her journal that it was one of her three favourite portraits."
        }
    }
  },
{
    id: 9,
    title: "Queen Victoria Tea set",
    image: [ ],
    metadata: {
      fullName: "Queen Victoria Tea set",
      date: "1851",
      place: "",
      materiality: "",
      room: "Queen Victoria's Room"
    },
    text: {
        children: {
          short: "short children",
          medium: "medium children",
          long: "long children"
        },
        adult: {
          short:"This tea set is inspired by the set commissioned by Queen Victoria for the Great Exhibition in 1851. During her reign she was crowned empress of India, and is famously associated with drinking tea and popularizing the British tradition of afternoon tea.",
          medium:"This tea set is inspired by the set commissioned by Queen Victoria for the Great Exhibition in 1851. It is an english bone china tea set that features the cypher of Queen Victoria surrounded by decorative floral borders. During Queen Victoria’s reign India was under in-direct control of England with the East India company, after the Indian Rebellion of 1857, the UK took direct control of India. After this the territory of India became part of the English Kingdom, therefore Queen Victoria was crowned as Empress of India. During this year England exported a great amount of tea around the world, making it a famous beverage. Victoria was associated with drinking tea; it's said that she popularized the British tradition of afternoon tea.",
          long:"This tea set is inspired by the set commissioned by Queen Victoria for the Great Exhibition in 1851. It is an english bone china tea set that features the cypher of Queen Victoria surrounded by intricate decorative florals borders, the pieces are finished with 22-carat gold. The tea set is sold by the Royal Collection Trust Shop for £ 300. During Queen Victoria’s reign India was under the indirect control of England with the monopolistic control of the East India Company. After the Indian Rebellion of 1857, due to the British exploitation and cultural insensitivity made the UK dissolve the company and assume direct control over India. By 1876 India became fully part of the British empire and Queen Victoria was officially crowned Empress of India. The Imperial expansion facilitated the mass export of goods, including Tea, transforming it into a famous, global beverage. Meanwhile in England, Queen Victoria expressed her personal preference for tea, making it a social ritual, the afternoon tea. Though this practice was not introduced by Victoria but by the Duchess of Bedford, the Queen enthusiastically adopted the ritual, making it become a formal, glamorous social occasion.  It is said that her favourite tea was the Earl Grey and her taste in tea is recorded in her journal where the word tea is written several times.  iDuring the same years the industrial revolution allowed the production and transportation of tea affordable and accessible to all classes and not just for the elite. Later on Tea became a symbol of the Victorian era and a national staple still maintained today for the English afternoon tea."
        }
    }
  },
{
    id: 10,
    title: "Wedding Dress",
    image: [ ],
    metadata: {
      fullName: "Wedding Dress",
      date: "1947",
      place: "Royal Collection",
      materiality: "Ivory Duchesse satin gown",
      room: "Queen Elizabeth II's Room"
    },
    text: {
        children: {
          short: "short children",
          medium: "medium children",
          long: "long children"
        },
        adult: {
          short:"On November 20th, 1947, Princess Elizabeth married the new Duke of Edinburgh, Prince Philip in a long-sleeved ivory Duchesse satin gown designed by Normal Hartnell. The dress has a 15-foot train and 10,000 tiny seed pearls in its embroidery.",
          medium:"On November 20th, 1947, Elizabeth Alexandra Mary, before becoming Queen of the United Kingdom and other Commonwealth realms, married Prince Philip, the then new Duke of Edinburgh. The wedding took place in Westminster Abbey located in London with only one hundred and fifty guests. The then Princess Elizabeth got married wearing a long-sleeved ivory Duchesse satin gown designed by Normal Hartnell. The dress is characterized by a 15-foot train and 10,000 tidy seed pearls in its embroidery. It was chosen from a discrete amount of samples by different stylists. Norman Hartnell, the fashion designer who dressed the Queen for many years, said that the dress is the best he has ever drawn. Unfortunately the dress was not properly preserved during the years and its color tone, which was originally ivory, has now become yellowish.",
          long:"On November 20th, 1947, Elizabeth Alexandra Mary, before becoming Queen of the United Kingdom and other Commonwealth realms, married Prince Philip, the then new Duke of Edinburgh. The wedding took place in Westminster Abbey located in London with only one hundred and fifty guests. The then Princess Elizabeth got married wearing a long-sleeved ivory Duchesse satin gown designed by Normal Hartnell. When the wedding was announced the Queen asked many designers to provide proposals for a wedding dress. Norman Hartnell, the fashion designer who dressed the Queen for many years, provided twelve, and the Queen chose one of his samples. Normal Hartnell said that the dress is the best he has ever drawn. The dress has a fitted bodice and a sweetheart neckline and was inspired by Botticelli’s Spring. The closure on the back was created with twenty-two buttons. The train of the dress measures 4.6 meters. The decorations, made with pearls and rhinestones, include lilac flowers, jasmine, star-shaped flowers, ears of wheat, and York roses. During the making of the dress the Prime Minister of the United Kingdom, Clement Attlee, wanted to be reassured that the silkworms used to create the dress did not come from enemy countries like Japan or Italy, since World War II was still an open wound in the counties involved. The silkworms, on the other hand, came from Kent and China. As a good luck charm, the tailors who made the dress sewed a clover hidden in the left side of the dress. Unfortunately the dress was not properly preserved during the years and its color tone, which was originally ivory, has now become yellowish."
        }
    }
  },
{
    id: 11,
    title: "St Edward’s Crown",
    image: [ ],
    metadata: {
      fullName: "St Edward’s Crown",
      date: "1661",
      place: "Jewel House, Tower of London",
      materiality: "22-carat gold crown",
      room: "Queen Elizabeth II's Room"
    },
    text: {
        children: {
          short: "short children",
          medium: "medium children",
          long: "long children"
        },
        adult: {
          short:"The St Edward’s Crown has been worn by Queen Elizabeth II during her coronation day, on June 2nd, 1953 after the sudden death of her father, King George VI. The crown is 30 cm tall and weighs 2.23 kg.",
          medium:"When Princess Elizabeth learned of her father’s death, King George VI, on February 6, 1952, by telegram while she was in Kenya to start a 6 months tour in the Commonwealth countries, she had to return immediately to London. According to the Act of Settlement of 1701 Princess Elizabeth would then become Queen of the United Kingdom. The coronation ceremony preparation began after a period of national mourning. The future Queen spent months preparing for it and she declares that the hardest physical challenge was to get used to wearing St Edward’s Crown. It is the coronation crown of the Crown Jewels of the United Kingdom named after Saint Edward the Confessor. The crown is 22-carat gold, 66 cm large and weighs 2.23 kg. Versions of it have been used by British monarchs during their coronation ceremony since the 13th century.",
          long:"When Princess Elizabeth learned of her father’s death, King George VI, on February 6, 1952, by telegram while she was in Kenya to start a 6 months tour in the Commonwealth countries, she had to return immediately to London. According to the Act of Settlement of 1701 Princess Elizabeth would then become Queen of the United Kingdom. The coronation ceremony preparation began after a period of national mourning. The future Queen spent months preparing for it and she declared that the hardest physical challenge was to get used to wearing St Edward’s Crown. It is the coronation crown of the Crown Jewels of the United Kingdom named after Saint Edward the Confessor, and the most precious jewel belonging to the royal family. The crown is 22-carat gold, 30 cm large and weighs 2.23 kg. The crown has a base of four lilies alternating with four crosses and above there are arches that support a globe and a large cross. It is made of 444 precious stones. Versions of it have been used by British monarchs during their coronation ceremony since the 13th century. Indeed the crown used by Queen Elizabeth during her coronation ceremony on June 2, 1953, is not the original one. The current crown was made by the court jeweler Sir Robert Vyner who made that for King Charles II. This one substituted the previous one which dated back to King Edward the Confessor period. That one was melted in 1649 after King Charles I decapitation. To prepare herself to be crowned, Princess Elizabeth wore the crown while carrying out her daily tasks and used to cross the Buckingham Palace’s ballroom with draped sheets covered with weights on. The ceremony was held at Westminster Abbey and, according to the Queen’s declaration nothing went wrong and it was an amazing moment."
        }
    }
  },
{
    id: 12,
    title: "The first televised Christmas Broadcast",
    image: [ ],
    metadata: {
      fullName: "The first televised Christmas Broadcast",
      date: "1957",
      place: "BBC archive",
      materiality: "Video",
      room: "Queen Elizabeth II's Room"
    },
    text: {
        children: {
          short: "short children",
          medium: "medium children",
          long: "long children"
        },
        adult: {
          short:"Queen Elizabeth II used to give a speech every year during Christmas. The first televised Christmas message was broadcast in 1957. The speech was filmed in the Long Library in Sandringham. The Queen renewed the tradition by using the television as a tool to transmit her speech.",
          medium:"The tradition of the Christmas message is something that existed long before Queen Elizabeth reign. The first one was transmitted by Queen Elizabeth's grandfather, King George V on Christmas day in 1939. The idea came from John Reith, founder of the BBC, to inaugurate the Empire World Service. The King spoke to the people of the countries belonging to the Commonwealth. After King George V's reign, King George VI continued with the annual tradition. In 1951, due to complicated health conditions, he had to record the message instead of broadcasting it. When King George VI died, Queen Elizabeth decided to record her messages as her father did and transmit it during Christmas. The Queen exploited the television, the innovation of those years, to speak with the people. In her first message, on December 25, 1957, the Queen remembered her grandfather and father to honour their great work and she declared that she would have tried to continue their work as sovereign.",
          long:"The tradition of the Christmas message is something that existed long before Queen Elizabeth reign. The first one was transmitted by Queen Elizabeth's grandfather, King George V on Christmas day in 1939. The message became an appointment to reflect on global events which influenced the monarch and the people. After the outbreak of the war the message became a way to cheer people up and to show compassion for people suffering. The idea originally came from John Reith, founder of the BBC, to inaugurate the Empire World Service. King George V spoke to the people of the countries belonging to the Commonwealth from an office in Sandringham. The message was received in Australia, Canada, India, Kenya and South Africa.  After King George V's reign, King George VI continued with the annual tradition. In 1951, due to complicated health conditions, he had to record the message instead of broadcasting it and for the first time it was not transmitted live. When King George VI died, Queen Elizabeth decided to record her messages as her father did and transmit them during Christmas, after having watched them with her family. The Queen exploited the television, the innovation of those years, to speak with the people. Her first message was recorded in the Long Library in Sandringham, on December 25, 1957. The Queen remembered her grandfather and father to honour their great work and she declared that she would have tried to continue their work as sovereign. \n Every Christmas, at this time, my beloved Father broadcast a message to his people all over the world... As he used to do, I too now speak to you from my home, where I am spending Christmas with my family... My father [King George VI], and my grandfather [King George V] before him, worked hard all their lives to bring our people ever closer together and to uphold the ideals that were so dear to their hearts. I will strive to carry on their work. (Extract from Queen Elizabeth’s first Christmas message)"
        }
    }
  },
{
    id: 13,
    title: "Reigning Queens (Queen Elizabeth)",
    image: [ ],
    metadata: {
      fullName: "Reigning Queens (Queen Elizabeth)",
      date: "1985",
      place: "Royal Collection",
      materiality: "Silkscreen",
      room: "Queen Elizabeth II's Room"
    },
    text: {
        children: {
          short: "short children",
          medium: "medium children",
          long: "long children"
        },
        adult: {
          short:"Queen Elizabeth portrait by Andy Warhol belongs to a series named Reigning Queens, realized in 1985. The silkscreen is based on a picture taken in 1977 by Peter Grugeon and it contributes to the popular perception of Queen Elizabeth as a pop icon.",
          medium:"Queen Elizabeth portrait it’s a silkscreen by Andy Warhol belonging to the Reigning Queens series, realized in 1985 which included four portraits of Queens including Queen Beatrix of the Netherlands, Queen Margrethe II of Denmark and Queen Ntombi Twala of Swaziland. The works depict four women monarchs highlighting their role, by immortalizing them with vivid colors, in a perfect pop reinterpretation of traditional portraits of royals. The portrait of Queen Elizabeth is based on the photograph from her Silver Jubilee in 1977 by the royal photographer  Peter Grugeon on April 2nd, 1975.Warhol produced four screensprints portraying Queen Elizabeth.They capture Warhol’s fascination with icons who transcend their origins by transforming the subject portrayed a cultural icon.",
          long:"Queen Elizabeth portrait it’s a silkscreen by Andy Warhol belonging to the Reigning Queens series, realized in 1985 which included four portraits of Queens including Queen Beatrix of the Netherlands, Queen Margrethe II of Denmark and Queen Ntombi Twala of Swaziland. The first three are  The works depict four women monarchs highlighting their role, by immortalizing them with vivid colors, in a perfect pop reinterpretation of traditional portraits of royals. The portrait of Queen Elizabeth is based on the photograph from her Silver Jubilee in 1977 by the royal photographer  Peter Grugeon on April 2nd, 1975. Warhol produced four screensprints portraying Queen Elizabeth, and the different versions are identified by numbers: 334, 335, 336 and 337 but they are more frequently addressed with the name of their dominant color: red, purple, pink and blue. The background colors elevate the monarch’s image from formality to fascination. They capture Warhol’s passion for legends who transcend their origins by transforming the subject portrayed in a cultural icon. This is possible through the process of reimagining monarchy through a modern and commercial lens."
        }
    }
  },
{
    id: 14,
    title: "Statue of Elizabeth II",
    image: [ ],
    metadata: {
      fullName: "Statue of Elizabeth II",
      date: "2022",
      place: "Rutland, United Kingdom",
      materiality: "Bronze",
      room: "Queen Elizabeth II's Room"
    },
    text: {
        children: {
          short: "short children",
          medium: "medium children",
          long: "long children"
        },
        adult: {
          short:"The first memorial after the passing away of Queen Elizabeth II on September 8, 2022. The bronze statue by Hywel Pratley represents the queen in royal garments surrounded by her beloved corgis.",
          medium:"The bronze statue by Hywel Pratley is the first memorial after the passing away of Queen Elizabeth II on September 8, 2022. It represents the queen in royal garments surrounded by her beloved corgis. The statue, located in Rutland, United Kingdom, was inaugurated on April 22,  2024 and it immortalized the Queen’s passion for her dogs. The statue, commissioned by Sarah Furness, the Lord-Lieutenant of Rutland, has a value of £125.000  and was funded primarily by donations from local business and members of the public. It was unveiled on the day of what should have been her 98th birthday to honour with hundreds of people showing up to see the inauguration of the statue dedicated to  the Queen. The Queen is depicted as standing tall while wearing a state robe and a crown. The dogs at her feet are a metaphor for the security and safety that the United Kingdom felt during the Elizabethan era.",
          long:"The bronze statue by Hywel Pratley is the first memorial after the passing away of Queen Elizabeth II on September 8, 2022. It represents the queen in royal garments surrounded by her beloved corgis. The statue, located in Rutland, United Kingdom, was inaugurated on April 22,  2024 and it immortalized the Queen’s passion for her dogs. The statue, commissioned by Sarah Furness, the Lord-Lieutenant of Rutland, has a value of £125.000  and was funded primarily by donations from local business and members of the public. It was unveiled on the day of what should have been her 98th birthday to honour with hundreds of people showing up to see the inauguration of the statue dedicated to  the Queen. The Queen is depicted as standing tall while wearing a state robe and a crown. The dogs at her feet are a metaphor for the security and safety that the United Kingdom felt during the Elizabethan era. Pratley, the artist, started to work on the statue in January 2023. It took him four months and 800 kg of clay to sculpt the Queen and the corgis. Pratley studied various pictures of the Queen to define her look and he chose to represent her while still young, in her 40s, when, he declares, “she had had some children and was at the height of her power”. The dogs are an important addiction to the statue because they give a sense of humanity to the representation."
        
        }
    }
  },
{
    id: 15,
    title: "Charles and Diana Engagement Interview",
    image: [ ],
    metadata: {
      fullName: "Charles and Diana Engagement Interview",
      date: "1981",
      place: "ITN Archive",
      materiality: "Video",
      room: "Princess Diana's Room"
    },
    text: {
        children: {
          short: "short children",
          medium: "medium children",
          long: "long children"
        },
        adult: {
        short:"The royal couple announced their engagement in an exclusive interview by ITN on February 24, 1981. In this famous interview, Prince Charles responded to the interview remark that the couple were in love with the iconic phrase “Whatever ‘in love’ means” causing a displeased reaction in Princess Diana.",
        medium:"The royal couple announced their engagement in an exclusive interview by ITN on February 24, 1981. The couple, who at the time had only been dating for six months, decided to announce their upcoming marriage with an interview recorded at Buckingham Palace. While speaking about the topic Charles said that he was “delighted and frankly amazed” by the fact that Diana agreed to marry him while she described the Prince as “pretty amazing”. Despite the kind words they had for each other, the interview turned out to be awkward because of an ambiguous answer by Prince Charles to a question. He indeed responded to the interview remark that the couple were in love with the iconic phrase “Whatever ‘in love’ means” causing a displeased reaction in Princess Diana.",
        long:"The royal couple announced their engagement in an exclusive interview by ITN on February 24, 1981. The couple, who at the time had only been dating for six months, decided to announce their upcoming marriage with an interview recorded at Buckingham Palace. While speaking about the topic Charles said that he was “delighted and frankly amazed” by the fact that Diana agreed to marry him while she described the Prince as “pretty amazing”. Despite the kind words they had for each other, the interview turned out to be awkward because of an ambiguous answer by Prince Charles to a question. He indeed responded to the interview remark that the couple were in love with the iconic phrase “Whatever ‘in love’ means” causing a displeased reaction in Princess Diana. Later in her biography, Diana: In Her Own Words, the author wrote her point of view on the event. Quoting her words: 'We had this ghastly interview the day we announced our engagement and this ridiculous [reporter] said ‘Are you in love? I thought, what a thick question. So I said, ‘Yes, of course, we are,’ and Charles turned round and said, ‘Whatever love means.’ And that threw me completely. I thought, what a strange answer. It traumatized me.' This was the beginning the intricate engagement and later marriage of the royal couple."
        }
    }
  },
{
    id: 16,
    title: "Princess Diana Engagement ring",
    image: [ ],
    metadata: {
      fullName: "Princess Diana Engagement ring",
      date: "1981",
      place: "Royal family's property",
      materiality: "18-carats white gold, 12-carats oval Ceylon sapphire, 14 solitaire diamonds",
      room: "Princess Diana's Room"
    },
    text: {
        children: {
          short: "short children",
          medium: "medium children",
          long: "long children"
        },
        adult: {
          short:"The ring that Prince Charles proposed to Princess Diana was an 18 carats white gold topped with a 12 carats oval Ceylon sapphire surrounded by 14 solitaire diamonds. It was chosen by Princess Diana from Garrad’s existing catalogue.",
          medium:"The ring that Prince Charles proposed to Princess Diana was an 18 carats white gold topped with a 12 carats oval Ceylon sapphire surrounded by 14 solitaire diamonds. It was chosen by Princess Diana from the crown jeweler Garrad’s existing catalogue and it was inspired by a brooch Prince Albert gifted as a wedding present for Queen Victoria in 1840. The proposal with the ring happened on February 6, 1981. The ring caused controversies because it drastically broke from tradition, being chosen between already existing samples. Indeed, the ring was not newly designed for the Princess and this also allowed common people to share the same engagement ring as Diana, making that less unique.",
          long:"The ring that Prince Charles proposed to Princess Diana was an 18 carats white gold topped with a 12 carats oval blue Ceylon sapphire surrounded by 14 solitaire diamonds. It was chosen by Princess Diana from the crown jeweler Garrad’s existing catalogue and it was inspired by Queen Victoria’s sapphire and diamond cluster brooch which Prince Albert gifted her as a wedding present in 1840 and which she wore that day. The proposal with the ring happened on February 6, 1981. The ring caused controversies because it drastically broke from tradition, being chosen between already existing samples. Indeed, the ring was not newly designed for the Princess and this also allowed common people to share the same engagement ring as Diana, making that less unique. Diana’s reasons to choose that specific ring were sentimental because it reminded her of her mother’s engagement ring. Given so, she also continued to wear it after her divorce from Prince Charles. After Princess Diana’s death the ring was inherited by her two sons, Prince William and Prince Harry, together with the complete jewellery collection. Prince William later used it in 2010 to propose to his future wife Kate"
        }
    }
  },
{
    id: 17,
    title: "Revenge Dress",
    image: [ ],
    metadata: {
      fullName: "Revenge Dress",
      date: "1994",
      place: "Graeme Mackenzie collection",
      materiality: "Silk minidress",
      room: "Princess Diana's Room"
    },
    text: {
        children: {
          short: "short children",
          medium: "medium children",
          long: "long children"
        },
        adult: {
          short:"The black silk minidress created by the designer Christina Stambolian became iconic when Princess Diana wore it in June, 1994 to the garden party held by Vanity Fair, after the divorce from Prince Charles.",
          medium:"The black silk minidress created by the designer Christina Stambolian became iconic when Princess Diana wore it in June, 1994 to the garden party held by Vanity Fair, after the divorce from Prince Charles. The dress became iconic because it was worn by Princess Diana the night Prince Charles confessed on British television that he had cheated on her with Camilla Parker Bowles. The dress is very far from royal choices at the time. It is short, with off the shoulder cleavage baring neckline, paired with black tights and high heels. This dress was a public response to the interview. While the rules of the royal family required the members to wear modest and non provocative clothes, Diana chose to disobey by wearing something risky for a royal woman and still manage to conquer the sympathy of the public opinion. Diana took control of the narrative by diverting the attention from Prince Charles' confession, reclaiming her space in the front pages.",
          long:"The black silk minidress created by the designer Christina Stambolian became iconic when Princess Diana wore it in June, 1994 to the garden party held by Vanity Fair, after the divorce from Prince Charles. The dress became iconic because it was worn by Princess Diana the night Prince Charles confessed on British television that he had cheated on her with Camilla Parker Bowles. The dress is very far from royal choices at the time. It is short, with off the shoulder cleavage baring neckline, paired with black tights and high heels. Diana owned the dress for many years before actually wearing it at a public event. She refused to wear it before because she considered it too bold. This dress was a public response to the interview. While the rules of the royal family required the members to wear modest and non provocative clothes, Diana chose to disobey by wearing something risky for a royal woman and still manage to conquer the sympathy of the public opinion. Diana took control of the narrative by diverting the attention from Prince Charles' confession, reclaiming her space in the front pages. The dress now belongs to the Scottish collector Graeme Mackenzie who bought the dress at an auction in New York on June 25, 1997."
        }
    }
  },
{
    id: 19,
    title: "Lady Diana on holiday in Portofino",
    image: [ ],
    metadata: {
      fullName: "Lady Diana on holiday in Portofino",
      date: "1997",
      place: "Getty Images",
      materiality: "Photograph",
      room: "Princess Diana's Room"
    },
    text: {
        children: {
          short: "short children",
          medium: "medium children",
          long: "long children"
        },
        adult: {
          short:"The picture portraits Lady Diana on holiday in Portofino, sitting on the diving board of Mohammed Al Fayed’s yacht, gazing at the horizon. This photograph captures Diana one month before her death caused by a fatal car accident.",
          medium:"The picture portraits Lady Diana on holiday in Portofino, wearing an aqua blue swimsuit sitting on the diving board of Mohammed Al Fayed’s yacht. The Princess is captured in a solitary moment during her vacation with Mohammed Al Fayed’s son, Dodi, with whom she had a romantic affair after the divorce from Prince Charles. She spent this last vacation with her two sons, Prince William and Prince Harry, who remembers the trip fondly because of the quality time they spent with their mother. By spending time together, Prince Harry remembers in his biography Spare how there was much laughter and everything was heavenly during the trip and how their mother seemed to be happy after all the turbulence in her life. Even during this vacation, paparazzi followed her but she turned out to be cooperative with the press to keep her kids safe from the eyes of the public. This is one of the last shots before the tragic accident that caused the early passing away of 'the People’s Princess'.",
          long:"The picture portraits Lady Diana on holiday in Portofino, wearing an aqua blue swimsuit sitting on the diving board of Mohammed Al Fayed’s yacht. The Princess is captured in a solitary moment during her vacation with Mohammed Al Fayed’s son, Dodi, with whom she had a romantic affair after the divorce from Prince Charles. The invitation came at a good time after Prince Charles was throwing a lavish birthday party for Camilla Parker Bowles at Highgrove, the house he shared with Diana. She spent this last vacation with her two sons, Prince William and Prince Harry, who remembers the trip fondly because of the quality time they spent with their mother. By spending time together, Prince Harry remembers in his biography Spare how there was much laughter and everything was heavenly during the trip and how their mother seemed to be happy after all the turbulence in her life. Even during this vacation, paparazzi followed her but she turned out to be cooperative with the press to keep her kids safe from the eyes of the public. The paparazzi issue is also portrayed in the TV series The Crown, which depicts photographers sailing to the Jonikal yacht to take pictures of the Princess. Her willingness to be photographed was probably an attempt to show the British establishments that she was free and to provoke the royal family. The relationship between Diana and Dodi was heavily reported by the press. After their trip they returned to Paris and were chased by the cameras again causing the tragic accident in which Princess Diana passed away. This indeed is one of the last photographs of 'The People’s Princess'."
        }
    }
  },
{
    id: 20,
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
        children: {
          short: "short children",
          medium: "medium children",
          long: "long children"
        },
        adult: {
          short:"Princess Diana’s Biography, written by Andrew Morton was published on June 16, 1992. The book revealed marital issues and difficulties, as well as unhappiness within her marriage and her struggles.",
          medium:"Princess Diana’s Biography, written by Andrew Morton was published on June 16, 1992. The book speaks from Diana’s point of view on her personal life, her marriage with Prince Charles and the struggles she had to face being part of the royal family and being always at the centre of attention of the media. The book became the #1 New York Times bestselling and that is because of the direct participation and witnessing of a royal family member, the Princess, who shared her experience in such a raw and unfiltered way. The biography focuses on her relationship with Queen Elizabeth, her unhappy and difficult marriage and her precarious mental health, as she suffered from depression and bulimia. The direct involvement of Princess Diana was always denied while she was still alive claiming that family and friends were the main source of information. Later on, after the passing away of the Princess, Andrew Morton revealed that Diana had been the primary source while writing her biography.",
          long:"Princess Diana’s Biography, written by Andrew Morton was published on June 16, 1992. The book speaks from Diana’s point of view on her personal life, her marriage with Prince Charles and the struggles she had to face being part of the royal family and being always at the centre of attention of the media. The book became the #1 New York Times bestselling and that is because of the direct participation and witnessing of a royal family member, the Princess, who shared her experience in such a raw and unfiltered way. The biography focuses on her relationship with Queen Elizabeth, her unhappy and difficult marriage caused by Prince Charles infidelity and extramarital affair with Camilla Parker Bowles and her precarious mental health, as she suffered from depression and bulimia. She also emerges as an advocate for important causes because of her special connection and empathy for marginalized people. This is how she got the name of “The People’s Princess”. The direct involvement of Princess Diana was always denied while she was still alive claiming that family and friends were the main source. Later on, after the passing away of the Princess, Andrew Morton revealed that Diana had been the primary source while writing her biography and released the tapes with her confessions on her personal life, breaking the implicit promise of confidentiality. The book was then revisited after Princess Diana’s death in 1997 by adding a layer of poignancy and making sure that her persona will continue to inspire the next generations."
        }
    }
  }




  


]


let currentItemIndex = 0;
let currentImageIndex = 0; // nuova variabile per il carousel dell'immagine
let currentDifficulty = "children"; // default all’apertura
let showFullText = false; // stato iniziale show less
let showMediumOnly = false;



// cambio difficoltà
function changeTextChildren() {
    currentDifficulty = "children";
    showFullText = false;
    updateContent();
}

function changeTextAdult() {
    currentDifficulty = "adult";
    showFullText = false;
    updateContent();
}

// show more / less

let currentTextLevel = 0;

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




//update content
function updateContent() {
  const item = items[currentItemIndex];

  // titolo
  document.getElementById("titolo-item").textContent = item.title;

  // immagine
  const img = document.querySelector(".item-img");
  img.src = item.image[currentImageIndex];
  img.alt = item.title;

  // metadata
  document.getElementById("fullName").textContent = item.metadata.fullName;
  document.getElementById("date").textContent = item.metadata.date;
  document.getElementById("place").textContent = item.metadata.place;
  document.getElementById("materiality").textContent = item.metadata.materiality;
  document.getElementById("room").textContent = item.metadata.room;
  // testi
  const textData = item.text[currentDifficulty];
  // Short sempre visibile solo in showLess
  document.getElementById("shortTextArea").textContent = (currentTextLevel === 0) ? textData.short : "";
  // Medium visibile solo in showMedium
  document.getElementById("mediumTextArea").textContent = (currentTextLevel === 1) ? textData.medium : "";

  // Long visibile solo in showMore
  document.getElementById("longTextArea").textContent = (currentTextLevel === 2) ? textData.long : "";;
}


//cambio img
function prevImage() {
  const item = items[currentItemIndex];
  currentImageIndex = (currentImageIndex - 1 + item.image.length) % item.image.length;
  updateContent();
}

function nextImage() {
  const item = items[currentItemIndex];
  currentImageIndex = (currentImageIndex + 1) % item.image.length;
  updateContent();
}

// Cambio automatico ogni 5 secondi
setInterval(() => {
  nextImage();
}, 4000);

// cambio item
function previousItem() {
    currentItemIndex = (currentItemIndex - 1 + items.length) % items.length;
    currentImageIndex = 0; // reset immagine
    showFullText = false;
    updateContent();

    // scroll all'inizio
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });

}

function nextItem() {
    currentItemIndex = (currentItemIndex + 1) % items.length;
    currentImageIndex = 0; // reset immagine
    showFullText = false;
    updateContent();

    // scroll all'inizio
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}


document.addEventListener('DOMContentLoaded', () => {

    // -------------------------------
    // Mappa dei nomi delle stanze
    // -------------------------------
    const roomMap = {
        'queen-elizabeth-i': "Queen Elizabeth I's Room",
        'queen-victoria': "Queen Victoria's Room",
        'queen-elizabeth-ii': "Queen Elizabeth II's Room",
        'princess-diana': "Princess Diana's Room"
    };

    // -------------------------------
    // 1. Aggiungi click alle stanze SVG
    // -------------------------------
    Object.keys(roomMap).forEach(roomClass => {
        const roomElement = document.querySelector(`.${roomClass}`);
        if (roomElement) {   // <-- qui controlla la variabile giusta
            roomElement.style.cursor = 'pointer'; // cambia cursore
            roomElement.addEventListener('click', () => {
                window.location.href = `exhibition.html?room=${roomClass}`;
            });
        }
    });

    // -------------------------------
    // 2. Genera dinamicamente gli item nella lista invisibile
    // -------------------------------
    const container = document.querySelector('#items-container');
    if (container) {
        items.forEach(item => {
            const li = document.createElement('li');
            li.dataset.id = item.id;
            li.innerHTML = `<a href="#" class="map-link">${item.title}</a>`;
            container.appendChild(li);
        });
    }

    // -------------------------------
    // 3. Leggi parametro ?room= dall'URL
    // -------------------------------
    const params = new URLSearchParams(window.location.search);
    const targetRoom = params.get('room'); // es: "queen-elizabeth-ii"

    if (targetRoom && roomMap[targetRoom]) {
        // Trova indice del primo item della stanza
        const firstItemIndex = items.findIndex(item =>
            item.metadata.room === roomMap[targetRoom]
        );

        if (firstItemIndex !== -1) {
            currentItemIndex = firstItemIndex;

            // Scrolla e evidenzia nella lista invisibile
            const elem = document.querySelector(`[data-id='${items[currentItemIndex].id}']`);
            if (elem) {
                elem.scrollIntoView({ behavior: 'smooth', block: 'start' });
                elem.style.backgroundColor = '#ffff99';
                setTimeout(() => elem.style.backgroundColor = '', 1000);
            }
        } else {
            currentItemIndex = 0; // fallback
        }
    } else {
        currentItemIndex = 0; // nessuna stanza selezionata → primo item in generale
    }

    // -------------------------------
    // 4. Mostra contenuto dell'item corrente
    // -------------------------------
    currentDifficulty = "children"; // default
    showFullText = false;
    updateContent();
});
