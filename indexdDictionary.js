// ===== элементы страницы =====

const searchInput = document.getElementById("searchInput")
const dictionaryGrid = document.getElementById("dictionaryGrid")
const favoritesGrid = document.getElementById("favoritesGrid")

// ===== избранные слова =====

let favorites = JSON.parse(localStorage.getItem("favorites")) || []

// ===== поиск слова =====

async function searchWord(){

const word = searchInput.value.trim()

if(!word) return

try{

// запрос к словарю
const response = await fetch(
`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
)

const data = await response.json()

displayWord(data[0])

}catch(error){

dictionaryGrid.innerHTML = "<p>Word not found</p>"

}

}

// ===== перевод на русский =====

async function translateToRussian(text){

try{

const response = await fetch(
`https://api.mymemory.translated.net/get?q=${text}&langpair=en|ru`
)

const data = await response.json()

return data.responseData.translatedText

}catch{

return "перевод не найден"

}

}
// ===== отображение слова =====

async function displayWord(data){

dictionaryGrid.innerHTML=""

const definition =
data.meanings?.[0]?.definitions?.[0]?.definition || "No definition"

const example =
data.meanings?.[0]?.definitions?.[0]?.example || ""

const translation = await translateToRussian(data.word)

const card = document.createElement("div")

card.className = "word-card"

card.innerHTML = `

<h3>${data.word}</h3>

<p><b>Перевод:</b> ${translation}</p>

<p>${definition}</p>

<p class="example">${example}</p>

<button onclick="speak('${data.word}')">
🔊 Pronounce
</button>

<button onclick="addFavorite('${data.word}')">
⭐ Add to favorites
</button>

`

dictionaryGrid.appendChild(card)

}

// ===== произношение =====

function speak(word){

const speech = new SpeechSynthesisUtterance(word)

speech.lang = "en-US"

speechSynthesis.speak(speech)

}

// ===== добавить в избранное =====

function addFavorite(word){

if(!favorites.includes(word)){

favorites.push(word)

localStorage.setItem(
"favorites",
JSON.stringify(favorites)
)

displayFavorites()

}

}

// ===== удалить из избранного =====

function removeFavorite(word){

favorites = favorites.filter(w => w !== word)

localStorage.setItem(
"favorites",
JSON.stringify(favorites)
)

displayFavorites()

}

// ===== показать избранные =====

function displayFavorites(){

favoritesGrid.innerHTML=""

favorites.forEach(word=>{

const card = document.createElement("div")

card.className="word-card"

card.innerHTML=`

<h3>${word}</h3>

<button onclick="speak('${word}')">
🔊
</button>

<button onclick="removeFavorite('${word}')">
❌ Remove
</button>

`

favoritesGrid.appendChild(card)

})

}

// ===== поиск по Enter =====

searchInput.addEventListener("keypress", function(e){

if(e.key === "Enter"){

searchWord()

}

})

// ===== загрузка избранного =====

displayFavorites()