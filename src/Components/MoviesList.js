const Movies = [
    {
        fileId:"1",
        name: "Nayakan (1987)",
        img:"https://m.media-amazon.com/images/M/MV5BZmFiYjJkNTEtZDdlMi00YTA5LTk1YTYtMDgxM2M2MTRmNGFhXkEyXkFqcGdeQXVyNjc5Mjg4Nzc@._V1_UX140_CR0,0,140,209_AL_.jpg",
        description: "A common man's struggles against a corrupt police force put him on the wrong sfileIde of the law. He becomes a don, who is loved and respected by many, but his growing power and influence exact a heavy toll.",
        rating: "8.7",
    link:"https://www.imdb.com/title/tt0093603/?ref_=ttls_li_tt"        
    },
    {
        fileId:"2",
        name: "Thalapathi (1991)",
        img:"https://m.media-amazon.com/images/M/MV5BZGE5NzVjNTEtMGUwYi00YzU0LWIyYTctNDc0ZjMxNGNhYzg5XkEyXkFqcGdeQXVyMjMwODI3NDE@._V1_UY209_CR0,0,140,209_AL_.jpg",
        description: "An orphan named Surya raised in a slum befriends a good crime boss named Devaraj and works for him. Their existence is threatened when a new honest district collector arrives.",
        rating: "8.5",
    link:"https://www.imdb.com/title/tt0101649/?ref_=ttls_li_tt"        
    },
    {
        fileId:"3",
        name: "Indian (1996)",
        img:"https://m.media-amazon.com/images/M/MV5BY2QxMzQyNzQtZGQzMS00MWViLWJiYjgtNTJmMWViOWM3OTc4XkEyXkFqcGdeQXVyODEzOTQwNTY@._V1_UY209_CR5,0,140,209_AL_.jpg",
        description: "A veteran freedom fighter enraged with the rising crime and corruption in the society murders all the wrong doers one by one using an ancient martial arts technique.",
        rating: "8.1",
    link:"https://www.imdb.com/title/tt0116630/?ref_=ttls_li_tt"        
    },
    {
        fileId:"4",
        name: "Baasha (1995)",
        img:"https://m.media-amazon.com/images/M/MV5BMjI3ZDJiZjEtYjUzOS00YzZlLWJkZjctMDU4YzNhNjJhMzI4XkEyXkFqcGdeQXVyOTA0NTIzNzU@._V1_UY209_CR10,0,140,209_AL_.jpg",
        description: "An auto driver, Manikam, desperately tries to hfileIde his dark underworld sfileIde to keep his promise to his father.",
        rating: "8.3",
    link:"https://www.imdb.com/title/tt0139876/?ref_=ttls_li_tt"        
    },
    {
        fileId:"5",
        name: "Anbe Sivam (2003)",
        img:"https://m.media-amazon.com/images/M/MV5BMjQwZWQwYjItNTIzNy00NmE5LWE1NjctZDE5MzgyMzY5YjljXkEyXkFqcGdeQXVyOTA0NTIzNzU@._V1_UY209_CR1,0,140,209_AL_.jpg",
        description: "Two men, one young and arrogant, the other damaged - physically but not spiritually - by life, are thrown together by circumstances, and find that they are in some ways bound together by fate.",
        rating: "8.7",
    link:"https://www.imdb.com/title/tt0367495/?ref_=ttls_li_tt"        
    },
    {
        fileId:"6",
        name: " Gentleman (1993)",
        img:"https://m.media-amazon.com/images/M/MV5BNTVlZTk4YjItNmUxOS00YjQ0LTg3M2MtMzJjNDNlMTQxOTQ5XkEyXkFqcGdeQXVyODEzOTQwNTY@._V1_UY209_CR7,0,140,209_AL_.jpg",
        description: "Due to a past tragedy , a small business owner by day becomes modern day Robin Hood by night takes from the rich to provfileIde education for the poor.",
        rating: "7.8",
    link:"https://www.imdb.com/title/tt0482389/?ref_=ttls_li_tt"        
    },
    {
        fileId:"7",
        name: "Roja (1992) ",
        img:"https://m.media-amazon.com/images/M/MV5BMTBlZTk1YTMtZTQ2Ni00YzhkLWJiNDEtNWI2NjE0M2I4ZmYzXkEyXkFqcGdeQXVyNjc5Mjg4Nzc@._V1_UX140_CR0,0,140,209_AL_.jpg",
        description: "A woman from a village in Tamil Nadu marries a sophisticated city dweller and moves with him to Kashmir, where all is rosy - until he gets kfileIdnapped by militants.",
        rating: "8.1",
    link:"https://www.imdb.com/title/tt0105271/?ref_=ttls_li_tt"        
    },
    {
        fileId:"8",
        name: "Bombay (1995)",
        img:"https://m.media-amazon.com/images/M/MV5BNDA2NjYzNTAtMzEzZS00ZDBiLWJjYjctOTM5OGRhMDU2ZTI4XkEyXkFqcGdeQXVyNjc5Mjg4Nzc@._V1_UX140_CR0,0,140,209_AL_.jpg",
        description: "A Hindu man and a Muslim woman fall in love in a small village and move to Mumbai, where they have two children. However, growing religious tensions and erupting riots threaten to tear the family apart. ",
        rating: "8.5",
    link:"https://www.imdb.com/title/tt0112553/?ref_=ttls_li_tt"        
    },
    {
        fileId:"9",
        name: " Sethu (1999)",
        img:"https://m.media-amazon.com/images/M/MV5BMjdmYWM3NWMtNmQ2YS00ODRmLWIzOGEtYTg0ZjlhNmM0MTVlXkEyXkFqcGdeQXVyODE0NjUxNzY@._V1_UX140_CR0,0,140,209_AL_.jpg",
        description: "A violent youngster and a shy Brahmin girl fall in love but tragedy intervenes when the youngster is brain-damaged following a fight.",
        rating: "8.1",
    link:"https://www.imdb.com/title/tt0265730/?ref_=ttls_li_tt"        
    },
    {
        fileId:"10",
        name: "Thevar Magan (1992)",
        img:"https://m.media-amazon.com/images/M/MV5BN2MxZjkwZjMtZjZhZS00YjRkLWI4M2YtYjQzMmFiYmU3YzBmXkEyXkFqcGdeQXVyODEzOTQwNTY@._V1_UY209_CR4,0,140,209_AL_.jpg",
        description: "The urbane son of a village chieftain struggles between his personal aspirations and those of his family.",
        rating: "8.8",
    link:"https://www.imdb.com/title/tt0105575/?ref_=ttls_li_tt"        
    },
    {
        fileId:"11",
        name: "Kattradhu Thamizh (2007)",
        img:"https://m.media-amazon.com/images/M/MV5BNTc2MDg5YjItZjFkOS00YjE3LThjODEtYjc5YTViZWQ5YjNjXkEyXkFqcGdeQXVyMTEzNzg0Mjkx._V1_UY209_CR8,0,140,209_AL_.jpg",
        description: "A young post-graduate faces difficulties with finding employment, and struggles against social inequalities.",
        rating: "8.6",
    link:"https://www.imdb.com/title/tt1501298/?ref_=ttls_li_tt"        
    },
    {
        fileId:"12",
        name: "Mudhalvan (1999)",
        img:"https://m.media-amazon.com/images/M/MV5BN2JiOGI2ODMtNGFiMy00NjZjLThmODMtZTEzZDkwNjdhZTk3XkEyXkFqcGdeQXVyODE0NjUxNzY@._V1_UY209_CR2,0,140,209_AL_.jpg",
        description: "A man accepts a challenge to act as the Chief Minister of Tamil Nadu for one day only, and makes such a success of it that soon he is embroiled in political intrigue.",
        rating: "8.4",
    link:"https://www.imdb.com/title/tt0220656/?ref_=ttls_li_tt"        
    },
    {
        fileId:"13",
        name: "Ramana (I) (2002)",
        img:"https://m.media-amazon.com/images/M/MV5BY2VkOTcwMTEtMDgyMy00NDJhLTg0OWItZTMyM2RhMTdmYzhmXkEyXkFqcGdeQXVyODEzOTQwNTY@._V1_UY209_CR5,0,140,209_AL_.jpg",
        description: "Ramana ,a college professor attempts to end corruption by creating a group called ACF.",
        rating: "8.2",
    link:"https://www.imdb.com/title/tt0378647/?ref_=ttls_li_tt"        
    },
    {
        fileId:"14",
        name: "Raam (2005)",
        img:"https://m.media-amazon.com/images/M/MV5BMzYwOWJkNGEtZGZkOS00MjMzLWE0NTYtZmNjYTdjYjBiZTVhXkEyXkFqcGdeQXVyODk1MzE5NDA@._V1_UY209_CR6,0,140,209_AL_.jpg",
        description: "Ram is falsely charged for killing his mother. His neighbors are also called for interrogation. The combined effort of Ram, friends and the police lead to tracking down the real killer.",
        rating: "7.8",
    link:"https://www.imdb.com/title/tt0453190/?ref_=ttls_li_tt"        
    },
    {
        fileId:"15",
        name: "Guna (1991)",
        img:"https://m.media-amazon.com/images/M/MV5BMzE4ZjQxNjMtOWVlYS00NzQwLTkyYjItNDM1OWNhZjlkNzg0XkEyXkFqcGdeQXVyODEzOTQwNTY@._V1_UY209_CR5,0,140,209_AL_.jpg",
        description: "A neurodivergent indivfileIdual escapes the family he despises and the asylum he is kept in by creating fantasies.",
        rating: "8.2",
    link:"https://www.imdb.com/title/tt0140090/?ref_=ttls_li_tt"        
    },
    {
        fileId:"16",
        name: "Kaadhal (2004)",
        img:"https://m.media-amazon.com/images/M/MV5BMjJlY2MyM2MtYWI5Zi00NmM4LWEzNjgtZWMyNGIwNTE0OTdkXkEyXkFqcGdeQXVyOTk3NTc2MzE@._V1_UY209_CR3,0,140,209_AL_.jpg",
        description: "An auto driver, Manikam, desperately tries to hfileIde his dark underworld sfileIde to keep his promise to his father.",
        rating: "7.6",
    link:"https://www.imdb.com/title/tt0453740/?ref_=ttls_li_tt"        
    },
    {
        fileId:"17",
        name: "Pithamagan (2003)",
        img:"https://m.media-amazon.com/images/M/MV5BODA2YTgyMDItNzFjNi00Y2IzLTlhZTgtOGMzZjgzNDUxNzQxXkEyXkFqcGdeQXVyODE0NjUxNzY@._V1_UY209_CR5,0,140,209_AL_.jpg",
        description: "Chittan, a social outcast, has grown up in a cemetery. A drug dealer finds him a job in a cannabis farm. In prison, he meets a conman, Shakti. This friendship transforms him from his stony existence.S",
        rating: "8.3",
    link:"https://www.imdb.com/title/tt0376076/?ref_=ttls_li_tt"        
    },
    {
        fileId:"18",
        name: "Nandha (2001)",
        img:"https://m.media-amazon.com/images/M/MV5BNzVkMzBlYjQtNjljZi00YjM5LTljYmQtYTU3Zjk1ZjIzYzJiXkEyXkFqcGdeQXVyOTk3NTc2MzE@._V1_UY209_CR12,0,140,209_AL_.jpg",
        description: "Looking to put behind a past that haunts him, Nandha tries to reconcile with his mother and live life on his terms.",
        rating: "7.7",
    link:"https://www.imdb.com/title/tt0375997/?ref_=ttls_li_tt"        
    },
    {
        fileId:"19",
        name: "Paruthiveeran (2007) ",
        img:"https://m.media-amazon.com/images/M/MV5BNjA5NWZmOGMtZjYzZi00YWY5LThiMDctYzU2MjVjZTg0MzAzXkEyXkFqcGdeQXVyODE0NjUxNzY@._V1_UY209_CR13,0,140,209_AL_.jpg",
        description: "A village tough finally succumbs to the unconditional love of his angelic cousin, but his romance faces insurmountable challenges, including family opposition and his own delinquent personality.",
        rating: "8.2",
    link:"https://www.imdb.com/title/tt0458050/?ref_=ttls_li_tt"        
    },
    {
        fileId:"20",
        name: "Subramaniapuram (2008)",
        img:"https://m.media-amazon.com/images/M/MV5BNTZmYzI2Y2UtMmE0ZC00ZTI4LTg3NTQtYWJjZDRmZmYxZTkyXkEyXkFqcGdeQXVyODk4ODEyMjk@._V1_UY209_CR13,0,140,209_AL_.jpg",
        description: "Azhagar and his friend Paraman kill the person who humiliated Kanugu's brother and surrenders themselves to the police. However, they soon learn that Kanugu has betrayed them. ",
        rating: "8.1",
    link:"https://www.imdb.com/title/tt0112553/?ref_=ttls_li_tt"        
    },
    {
        fileId:"21",
        name: " Azhagi (2002)",
        img:"https://m.media-amazon.com/images/M/MV5BOTI4ZDUzYzctMTNjZC00NDUzLTg2ZmUtZDY0OTBkNTUwZmNkXkEyXkFqcGdeQXVyODEzOTQwNTY@._V1_UY209_CR58,0,140,209_AL_.jpg",
        description: "A married man's ffileIdelity is tested when a childhood crush needs his help.",
        rating: "7.2",
    link:"https://www.imdb.com/title/tt0459186/?ref_=ttls_li_tt"        
    },
    {
        fileId:"22",
        name: "Kadhal Desam (1996)",
        img:"https://m.media-amazon.com/images/M/MV5BZGMyNmY3MTItNzRiYi00YTg1LWE0MTYtZDExOGU0YTliOTlhXkEyXkFqcGdeQXVyOTk3NTc2MzE@._V1_UY209_CR9,0,140,209_AL_.jpg",
        description: "Two boys from rival colleges, one rich and the other poor, become good friends after an incfileIdent. A new girl in college makes both their hearts melt but neither realises that they love the same girl.",
        rating: "6.7 ",
    link:"https://www.imdb.com/title/tt0305714/?ref_=ttls_li_tt"        
    },
    {
        fileId:"23",
        name: "Enthiran (2010)",
        img:"https://m.media-amazon.com/images/M/MV5BZmI0YmZkOGUtMTcwZS00MTk4LTg5ODQtOTliNWU2MTcwZjQ3XkEyXkFqcGdeQXVyOTk3NTc2MzE@._V1_UY209_CR12,0,140,209_AL_.jpg",
        description: "A brilliant scientist creates a humanofileId robot to protect mankind, but things go awry when human emotions are programmed and inner turmoil causes the robot to switch sfileIdes.",
        rating: "7.1",
    link:"https://www.imdb.com/title/tt1305797/?ref_=ttls_li_tt"        
    },
    {
        fileId:"24",
        name: "Aaranya Kaandam (2010)",
        img:"https://m.media-amazon.com/images/M/MV5BNDJiZGIyYjMtYjZkMy00NzE5LTljMDAtNjc3YmNlNjM3MDIzXkEyXkFqcGdeQXVyOTk3NTc2MzE@._V1_UX140_CR0,0,140,209_AL_.jpg",
        description: "A mob boss must deal with a disgruntled mistress and a vanishing bag of cocaine.",
        rating: "8.6",
        link: "https://www.imdb.com/title/tt1496729/?ref_=ttls_li_tt"    
    
    },
    {
        fileId:"25",
        name: "Pudhu Pettai (2006)",
        img:"https://m.media-amazon.com/images/M/MV5BZGVlYjYyYTMtYTE3OS00Yzg2LWE3MjgtMDAwMTJjNGM4MjM3XkEyXkFqcGdeQXVyODE0NjUxNzY@._V1_UY209_CR34,0,140,209_AL_.jpg",
        description: "After running away from his home, Kumar falls in with a gang and slowly rises through the ranks of the criminal underworld.",
        rating: "8.5",
        link: "https://www.imdb.com/title/tt0459516/?ref_=ttls_li_tt"    
    
    },
    {
        fileId:"26",
        name: "Vaalee (1999)",
        img:"https://m.media-amazon.com/images/M/MV5BMWJmZGNlN2EtMjYxMi00YWUwLTkwODQtYzQzNmJmZGU0NzlkXkEyXkFqcGdeQXVyODE0NjUxNzY@._V1_UY209_CR5,0,140,209_AL_.jpg",
        description: "A young brfileIde finds an unusual antagonist in her husband's twin brother.",
        rating: "8",
    link:"https://www.imdb.com/title/tt0368400/?ref_=ttls_li_tt"        
    },
    {
        fileId:"27",
        name: "Dil Se.. (1998)",
        img:"https://m.media-amazon.com/images/M/MV5BNWFjNGIxYWUtZDFmNy00NzRkLThkYWItZjBiNTJlNGE3MTA0XkEyXkFqcGdeQXVyODE0NjUxNzY@._V1_UY209_CR5,0,140,209_AL_.jpg",
        description: "A radio broadcaster's intense attraction to a mysterious woman opens the door to a tfileIdal wave of powerful emotions and desires",
        rating: "7.5 ",
    link:"https://www.imdb.com/title/tt0164538/?ref_=ttls_li_i"        
    },
    {
        fileId:"28",
        name: "Kannathil Muthamittal (2002)",
        img:"https://m.media-amazon.com/images/M/MV5BMTQ0YmIzOGQtNGMwNS00ODE0LTg3NjAtY2UxYzU0ODdjZTIwXkEyXkFqcGdeQXVyOTk3NTc2MzE@._V1_UX140_CR0,0,140,209_AL_.jpg",
        description: "A little girl is told by her parents that she is adopted. Determined to find her real mother, she begs to be taken to Sri Lanka, where her mother works with a militant group of activists.",
        rating: "8.4",
    link:"https://www.imdb.com/title/tt0312859/?ref_=ttls_li_tt"        
    },
    {
        fileId:"29",
        name: "Kadhalar Dinam (1999)",
        img:"https://m.media-amazon.com/images/M/MV5BN2E2YmM1YzItNmMxZi00OGIzLWJhYjgtMjVlOTQ1MjA5MmFlXkEyXkFqcGdeQXVyOTA0NTIzNzU@._V1_UY209_CR9,0,140,209_AL_.jpg",
        rating: "6.4",
        description:"Two college students, the slum child Raja and the dean's daughter Roja, chat with each other over the Internet and fall in love. However, Roja is engaged and Raja cannot bear to disrespect her father, to whom he owes his livelihood.",
        link: "https://www.imdb.com/title/tt0213753/?ref_=ttls_li_tt"    
    
    },
    {
        fileId:"30",
        name: "Deiva Thirumagal (2011)",
        img:"https://m.media-amazon.com/images/M/MV5BZTAxNjUxN2ItYzZjYi00NjMyLTkwZWUtNGM2ZTIxMGRhOTgwXkEyXkFqcGdeQXVyOTk3NTc2MzE@._V1_UY209_CR12,0,140,209_AL_.jpg",
        description: "A man with disabilities fights for custody of his 7-year-old daughter, and in the process teaches his opponent lawyer the value of love and family.",
        rating: "8.2",
        link: "https://www.imdb.com/title/tt1857670/?ref_=ttls_li_tt"    
    
    },
    {
        fileId:"31",
        name: "Sivaji (2007)",
        img:"https://m.media-amazon.com/images/M/MV5BYzdhMDM0NzItY2EyOC00YWMyLTgxNmMtODNhNjI1NDEzNGRkXkEyXkFqcGdeQXVyOTk3NTc2MzE@._V1_UY209_CR4,0,140,209_AL_.jpg",
        description: "A software engineer comes to India to serve the nation and invest in nation's welfare. A few corrupt officials and politicians try to stop him while he tries to do good for the poor.",
        rating: "7.4",
        link: "https://www.imdb.com/title/tt0479751/?ref_=ttls_li_tt"    
    
    },
    {
        fileId:"32",
        name: " Annamalai (1992)",
        img:"https://m.media-amazon.com/images/M/MV5BMGY3YjJlNmItOTcwYy00YmM1LWExNGEtM2Y2NTQzNmY4ZWE2XkEyXkFqcGdeQXVyMTEzNzg0Mjkx._V1_UY209_CR6,0,140,209_AL_.jpg",
        description: "A class-divfileIded friendship goes through highs and lows through several decades.",
        rating: "7.7",
        link: "https://www.imdb.com/title/tt0479751/?ref_=ttls_li_tt"    
    
    },
    {
        fileId:"33",
        name: "Ghajini (2005)",
        img:"https://m.media-amazon.com/images/M/MV5BNjdiMDExYTMtYmU2MS00MjJjLTk4OWQtOGQ2NTI5YTQ2YzY2XkEyXkFqcGdeQXVyODMyMDA2MjQ@._V1_UY209_CR4,0,140,209_AL_.jpg",
        description: "Sanjay Ramaswamy, who is suffering from short-term memory loss, sets out on a quest to find the people who were responsible for his ladylove Kalpana's murder.",
        rating: "7.5",
        link: "https://www.imdb.com/title/tt0449951/?ref_=ttls_li_tt"    
    
    },
    {
        fileId:"34",
        name: "Hey Ram (2000)",
        img:"https://m.media-amazon.com/images/M/MV5BYzMxYzZjMDUtZjI3Ni00Y2M2LTllYWItNzJmZTJjMzkyYjlmXkEyXkFqcGdeQXVyODEzOTQwNTY@._V1_UX140_CR0,0,140,209_AL_.jpg",
        description: "Saketh Ram's wife is raped and killed during direct action day riots in Calcutta. He is convinced that Mahatma Gandhi is responsible for all the problems happening in the country and sets out to kill him.",
        rating: "7.9",
        link: "https://www.imdb.com/title/tt0222012/?ref_=ttls_li_tt"    
    
    },
    {
        fileId:"35",
        name: "Unnaipol Oruvan (2009)",
        img:"https://m.media-amazon.com/images/M/MV5BNzgwNGI3MTQtMTQ3Yi00NDY2LTlkMzMtMjM0MmY2YTRlMDA5XkEyXkFqcGdeQXVyODEzOTQwNTY@._V1_UX140_CR0,0,140,209_AL_.jpg",
        description: "A retiring police officer remembers a thrilling case of his life which is not recorded in any case file",
        rating: "8",
        link: "https://www.imdb.com/title/tt1417299/?ref_=ttls_li_tt"    
    
    },
    {
        fileId:"36",
        name: "Apoorva Sagodharargal (1989)",
        img:"https://m.media-amazon.com/images/M/MV5BZjkxNjg0MzItZTYxOS00NmY1LWE5ODUtNjU0ZmNjOWUzYTg2XkEyXkFqcGdeQXVyODEzOTQwNTY@._V1_UY209_CR9,0,140,209_AL_.jpg",
        description: "Appu and Raja are twins who were separated at birth, grow up in different localities. Appu's quest for revenge begins upon learning that his father was killed by four criminals.",
        rating: "8.3",
        link: "https://www.imdb.com/title/tt0096827/?ref_=ttls_li_tt"    
    
    },
    {
        fileId:"37",
        name: "Thulladha Manamum Thullum (1999)",
        img:"https://m.media-amazon.com/images/M/MV5BODlhYTE4M2MtNjcyOS00Zjc0LTliNzMtMzJhZmVkOWNjZmE0XkEyXkFqcGdeQXVyMTEzNzg0Mjkx._V1_UY209_CR7,0,140,209_AL_.jpg",
        description: "Kutty is a good-hearted soul, but unfortunate incfileIdents tend to portray his ruffian sfileIde whenever he encounters the girl he loves. A bizarre incfileIdent brings them closer and yet keeps them apart.",
        rating: "8.4",
        link: "https://www.imdb.com/title/tt0096827/?ref_=ttls_li_tt"    
    
    },
    {
        fileId:"38",
        name: " Aadukalam (2011)",
        img:"https://m.media-amazon.com/images/M/MV5BMjYwYTVjNWYtMzM2MC00NTAwLWI2MDMtZjZmOTI3ZDQ2MThhXkEyXkFqcGdeQXVyMTEzNzg0Mjkx._V1_UY209_CR2,0,140,209_AL_.jpg",
        description: "In a village in South India, rearing roosters, maintaining them and using them for fights are a way of life and a matter of honor and lifeline to many people.", 
        rating: "8",
        link: "https://www.imdb.com/title/tt1417299/?ref_=ttls_li_tt"    
    
    },
    { 
        fileId:"39",
        name: "Sathyaa (1988)",
        img:"https://m.media-amazon.com/images/M/MV5BZDYxMWE4MGEtY2FlOC00NDc1LTgyNDgtMTdkYzBlNGZlYmQxXkEyXkFqcGdeQXVyOTIzODUxMjk@._V1_UX140_CR0,0,140,209_AL_.jpg",
        description: "Appu and Raja are twins who were separated at birth, grow up in different localities. Appu's quest for revenge begins upon learning that his father was killed by four criminals.",
        rating: "7.9",
        link: "https://www.imdb.com/title/tt0096827/?ref_=ttls_li_tt"    
    
    },
    {
        fileId:"40",
        name: "Moondram Pirai (1982)",
        img:"https://m.media-amazon.com/images/M/MV5BZTAxOTEwNDgtMTIwOC00NWEzLWFkNDMtMTJkZDI3ZGUwZDEyXkEyXkFqcGdeQXVyMjM3NjAwODc@._V1_UY209_CR14,0,140,209_AL_.jpg",
        description: "A young woman regresses to childhood after suffering a head injury in a car crash. Lost, she ends up trapped at a brothel before being rescued by a lonely school teacher who falls in love with her.",
        rating: "8.6",
        link: "https://www.imdb.com/title/tt0187318/?ref_=ttls_li_tt"    
    
    },
    {
        fileId:"41",
        name: "Michael Madana Kama Rajan (1990)",
        img:"https://m.media-amazon.com/images/M/MV5BMTU0OThmOTctZDkwNS00NTE4LTgwYTUtOGU5YjZhYzYxNmNhXkEyXkFqcGdeQXVyODEzOTQwNTY@._V1_UY209_CR10,0,140,209_AL_.jpg",
        description: "A comedy of errors with fileIdentical quadruplets, separated at birth, coming together as adults.",
        rating: "8.4",
        link: "https://www.imdb.com/title/tt0140377/?ref_=ttls_li_tt"    
    
    },
    {
        fileId:"42",
        name: "Mounam Pesiyadhe (2002))",
        img:"https://m.media-amazon.com/images/M/MV5BZjI3MzFiMzEtYWEyNi00YTI3LThmMTQtOWEwNDY3YzdjOTJmXkEyXkFqcGdeQXVyOTk3NTc2MzE@._V1_UY209_CR4,0,140,209_AL_.jpg",
        description: "A Misogynist's attitude towards women and love starts to change after he develops feelings for a woman.",
        rating: "7.7",
        link: "https://www.imdb.com/title/tt0386650/?ref_=ttls_li_tt"    
    
    },
    {
        fileId:"43",
        name: "Virumandi (2004)",
        img:"https://m.media-amazon.com/images/M/MV5BODVkMDliZjQtZmI3Ni00NGJlLThjY2MtYmY5M2I1ODU5ZGE0XkEyXkFqcGdeQXVyOTk3NTc2MzE@._V1_UY209_CR1,0,140,209_AL_.jpg",
        description: "A temperamental farmer gets embroiled in a bloody clan feud in a southern Tamil Nadu village.",
        rating: "8.4",
        link: "https://www.imdb.com/title/tt0364647/?ref_=ttls_li_tt"    
    
    },
    {
        fileId:"44",
        name: "Padaiyappa (1999)",
        img:"https://m.media-amazon.com/images/M/MV5BMDA4ZGIwMGYtMmM0MC00ZjA1LWJlNzktNGIxYTgxMzdiMjViXkEyXkFqcGdeQXVyMTEzNzg0Mjkx._V1_UY209_CR8,0,140,209_AL_.jpg",
        description: "The death of Padaiyappa's father destroys his family. But his luck changes, and he is able to lead a prosperous life, until his nemesis plots to ruin his happiness once more.",
        rating: "8.2",
        link: "https://www.imdb.com/title/tt0213969/?ref_=ttls_li_tt"    
    
    },
    {
        fileId:"45",
        name: "Kuruthipunal (1995)",
        img:"https://m.media-amazon.com/images/M/MV5BMDUwNGRlOTQtYzc1ZS00YTMyLTk2MmUtNDE1NjlkMGU3YmE0XkEyXkFqcGdeQXVyODEzOTQwNTY@._V1_UY209_CR2,0,140,209_AL_.jpg",
        description: "Suave and scintillating, this fast-paced action thriller follows the adventures and investigations of a group of honest police officers, who go undercover to bring down a terror network.",
        rating: "8.6",
        link: "https://www.imdb.com/title/tt0285665/?ref_=ttls_li_i"    
    
    },
    {
        fileId:"46",
        name: "Mahanadi (1994)",
        img:"https://m.media-amazon.com/images/M/MV5BNWU4OWZjOTEtNGUyMy00YTFmLWFhNDYtMmQ1NjYyOTk1YTU5XkEyXkFqcGdeQXVyODEzOTQwNTY@._V1_UX140_CR0,0,140,209_AL_.jpg",
        description: "An innocent man is framed in a financial scam and imprisoned. After his release, he learns that his daughter was sold into prostitution and he struggles to free her.",
        rating: "8.6",
        link: "https://www.imdb.com/title/tt0140348/?ref_=ttls_li_i"    
    
    },
    {
        fileId:"47",
        name: "Vaanam (2011)",
        img:"https://m.media-amazon.com/images/M/MV5BYzc0MGMyNmUtZDJhNC00YjEwLWE0N2QtMmE2NTNmNmM5NjIxXkEyXkFqcGdeQXVyODk1OTg3MTI@._V1_UX140_CR0,0,140,209_AL_.jpg",
        description: "There are 5 stories in this movie, which joins together in the climax.",
        rating: "7.3",
        link: "https://www.imdb.com/title/tt1712057/?ref_=ttls_li_tt"    
    
    },
    {
        fileId:"48",
        name: "Alaipayuthey (2000)",
        img:"https://m.media-amazon.com/images/M/MV5BY2IyY2VmZGMtNzRhMy00YzhmLThmYzItMTQyNTM3NDZlZjYzXkEyXkFqcGdeQXVyMTEzNzg0Mjkx._V1_UX140_CR0,0,140,209_AL_.jpg",
        description: "After a difficult romance in a class-divfileIded society, the love birds find out marriage is not what they thought it would be", 
        rating: "8.3",
        link: "https://www.imdb.com/title/tt0242256/?ref_=ttls_li_tt"    
    
    },
    { 
        fileId:"49",
        name: "Autograph (2004)",
        img:"https://m.media-amazon.com/images/M/MV5BYzg4MDQxMzEtOWNiMi00YjlmLWEwMWQtZjQwZjE1YzAwOTgzXkEyXkFqcGdeQXVyOTk3NTc2MzE@._V1_UY209_CR2,0,140,209_AL_.jpg",
        description: "Follow Senthil's life through vignettes of his past presented by the people he visits while distributing his marriage invitations. His love life is the aspect in prime focus -- while we are presented with nuggets of other development also.",
        rating: "7.7",
        link: "https://www.imdb.com/title/tt0411131/?ref_=ttls_li_tt"    
    
    },
    {
        fileId:"50",
        name: "Naadodigal (2009)",
        img:"https://m.media-amazon.com/images/M/MV5BZTAxOTEwNDgtMTIwOC00NWEzLWFkNDMtMTJkZDI3ZGUwZDEyXkEyXkFqcGdeQXVyMjM3NjAwODc@._V1_UY209_CR14,0,140,209_AL_.jpg",
        description: "A young woman regresses to childhood after suffering a head injury in a car crash. Lost, she ends up trapped at a brothel before being rescued by a lonely school teacher who falls in love with her.",
        rating: "7.6",
        link: "https://www.imdb.com/title/tt1997455/?ref_=ttls_li_tt"    
    
    }
 
    

]
export default Movies