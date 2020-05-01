'use strict';


function displayResults(responseJson){
    console.log(responseJson);
    $('#results-list').empty();

    for(let i=0; i<responseJson.length; i++){

        $('#results-list').append(
            `<li><h3><a href= "${responseJson[i].html_url}">${responseJson[i].name}</h3></a>
            </li>`

        )};
};


/* gets username from api*/
function getUserName(searchName){
    let userUrl = `https://api.github.com/users/${searchName}/repos`;

    fetch(userUrl)
        .then(response => response.json())

        .then(responseJson => displayResults(responseJson))
        .catch( error => alert('Oops Try again later.'));
}

/* watchs for the submit event*/
function submit(){
    $('form').submit(event =>{
        event.preventDefault();
        const searchName = $("#js-search-user").val();
        getUserName(searchName);

    })
}

$(function(){
    console.log("App Ready");
    submit();
});