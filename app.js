document.querySelector("#button1").addEventListener("click",getTextFile);
document.querySelector("#button2").addEventListener("click", getJSON);
document.querySelector("#button3").addEventListener("click", getApi);


// TEXT FILE

function getTextFile() {
    fetch("textFile.txt")
    .then(function(response){
        return(response.text());
        
    })
    .then(function(data){
   document.querySelector("#output").innerText += data;
       
    })
    .catch(function(err){
        console.log(err);
    })
}


// JSON FILE
function getJSON() {
    fetch("article.json").then(function(response){
        return(response.json());
        
    })
    .then(function(articles){

       let output = "<ul>";

       articles.forEach(function(article) {
           output += `<li>Title ${article.title} - Body ${article.body}</li>`
           
       })

       output += "</ul>";
       document.getElementById("output").innerHTML += output;
       
    })
    .catch(function(err){
        console.log(err);
    })
}


// API FILE

function getApi() {
    fetch("https://api.github.com/users").then(function(response){
        return(response.json());
        
    })
    .then(function(users){

       let output = "<ul>";

       users.forEach(function(user) {
           output += `<li>UserName: ${user.login}</li>`
           
       })

       output += "</ul>";
       document.getElementById("output").innerHTML += output;
       
    })
    .catch(function(err){
        console.log(err);
    })
}