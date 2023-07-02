Convert ids in `World_location_map.svg` to English. 


Given the data in `french-english-countries.json`

```js
data
.map(({french, english, chat}) => ({french, english: chat})) 
.filter(({french, english}) => document.querySelector(`[id="${french}"]`))
.forEach(({french, english}) => document.querySelector(`[id="${french}"]`).id = english)
```


Unfortunately it turns out there are `<g>` tags that I missed, so I haven't uploaded yet.

