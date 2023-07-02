
fr.map((f,i) => ([f, en[i], chat[i]]))
.map(([fr, en, chat]) => ({french: fr, english: en, chat }))

.map(({french, english, chat}) => ({french, english: chat})) 
.filter(({french, english}) => document.querySelector(`[id="${french}"]`))
.forEach(({french, english}) => document.querySelector(`[id="${french}"]`).id = english)


copy(document.querySelector('svg').outerHTML)