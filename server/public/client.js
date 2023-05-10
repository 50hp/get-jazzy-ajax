$(document).ready(onReady);

//runs everything on page load. 

function onReady() {
    //calls artistList function on page load. 
   render();
    // TODO Add ajax request for /songs and display on DOM
}
//function to render to DOM when called
function render() {

    artistList();
    songList();
    albumList();

}

function artistList() {
    //using jquery to call ajax
    //using ajax to get /artist from the server.
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

        $.ajax({
            type: 'GET',
            url: '/songs'

        }).then(function (songs) {

            for (let song of response ) {
                $('#songTableBody').append(`
                    <tr>
                        <td>${song.title}</td>
                        <td>${song.artist}</td>
                    </tr>
                `);
            }
        }).catch(function(err) {
            alert('Request Failed');
            console.log('Request failed', err)

        })


}
//created a function when called calls the server to get album data.
//function render to DOM.
function albumList() {

        $.ajax({
            type: 'GET',
            url: '/albums'
        }).then(function(response) {
            
            for ( let album of response ) {
                $('#albumTableBody').append(`
                    <tr>
                        <td>${album.title}</td>
                        <td>${album.year}</td>
                    </tr>
                `);
            }
        }).catch(function(err) {
            alert('Request Failed');
            console.log('Request failed', err)

        })
}