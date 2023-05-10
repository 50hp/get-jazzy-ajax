$(document).ready(onReady);

//runs everything on page load. 

function onReady() {
    //calls artistList function on page load. 
   artistList();
   songList();
   albumList();;
    // TODO Add ajax request for /songs and display on DOM
}
//function to render to DOM when called
function render () {
   
    artistList();
    songList();
    albumList();;
} 

function artistList() {
    //using jquery to call ajax
    //using ajax to get /artist from the server.
    $('artistTableBody').empty();

    $.ajax({
        type: 'GET',
        url: '/artist'
        //using the .then method to use the response (artistList array )from the server 
        //to loop through the artistListArray and using jquery to append to the table on the DOM 
    }).then(function (response) {
        //takes the server "response" and loops through each item of the array
        for (let i = 0; i < response.length; i++) {
            let artist = response[i];
            $('#artistTableBody').append(`
                <tr>
                    <td>${artist.name}</td>
                    <td>${artist.born}</td>
                    <td>${artist.died}</td>
                </tr>
            `);
        }
    });
}
//created a function when called calls the server to get song data.
//function render to DOM. 
function songList() {

        $('#songTableBody').empty();

        $.ajax({
            type: 'GET',
            url: '/songs'

        }).then(function ( response ) {

            let songs = response;

            for (let song of songs ) {
                $('#songTableBody').append(`
                    <tr>
                        <td>${song.title}</td>
                        <td>${song.artist}</td>
                    </tr>
                `);
            }
        }).catch(function(err) {
            alert('Song Request Failed');
            console.log('Request failed', err)
        });


}
//created a function when called calls the server to get album data.
//function render to DOM.
function albumList() {

        $('#albumTableBody').empty();

        $.ajax({
            type: 'GET',
            url: '/albums'
        }).then(function(response) {

            let albums = response
            
            for ( let album of albums ) {
                $('#albumTableBody').append(`
                    <tr>
                        <td>${album.title}</td>
                        <td>${album.year}</td>
                    </tr>
                `);
            }
        }).catch(function(err) {
            alert('Album Request Failed');
            console.log('Request failed', err)
        });
}