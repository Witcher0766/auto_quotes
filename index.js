AOS.init();
const quotes = document.getElementById("quotes");
const author = document.getElementById("author");
const btn_quotes = document.getElementById("btn_quotes");
const tweet = document.getElementById("tweet");
let realdata = "";
let quotesdata = "";

const tweetFunction = () => {
    // let tweetPost = "https://twitter.com/intent/tweet";
    // https://twitter.com/intent/tweet=${quotesData.text}  inside the template literal 
    let tweetPost = `https://twitter.com/intent/tweet?text=${quotesdata.text} ${quotesdata.author}`;
    window.open(tweetPost);
}

const getNewQuotes = () => {
    let rand = Math.floor(Math.random() * 10);
    // console.log(rand);
    // console.log(realdata[rand].text);
   // console.log(realdata[rand].author);
   quotesdata = realdata[rand]
    quotes.innerText = `${quotesdata.text}`;
  //using terniary operator 
    quotesdata.author = null
    ? (author.innerText = "unknown")
    : (author.innerText = `${quotesdata.author}`);
}
const getquotes = async () => {
const api = "https://type.fit/api/quotes";
    try {
        let data = await fetch(api);
        realdata = await data.json()

    getNewQuotes();
        // console.log(realdata[0].text);
        // console.log(realdata[0].author);
    } catch (error) {
       console.log("Error Found....!") 
    }
}
tweet.addEventListener("click", tweetFunction);
btn_quotes.addEventListener("click", getNewQuotes);

getquotes();

