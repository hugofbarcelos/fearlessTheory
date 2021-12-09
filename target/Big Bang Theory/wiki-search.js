var result = $('#main');

window.onload = function(){

    function successCallback(response) {
        console.log(response);
    }

    function errorCallback(request, status, error) {
        // do something with the error
    }

// perform an ajax http get request
    $.ajax({
        url: 'http://localhost:8080/bigbang/',
        async: true,
        success: successCallback,
        error: errorCallback
    });

    console.log("before");
    
    getWikiResultId();
    
    console.log("after");
};

function getWikiResultId(){

    var search = "arachnophobia";

    const settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=5&srsearch="+search,
        "method": "GET"
    };
    
    $.ajax(settings).done(function (text) {
        
        console.log(text);

        //needs work on selection (position in array may be wrong)
        id = text.query.search[0].pageid;

        console.log(id);

            if(id != null){

                getArticleById(id);

            }
            else{
                alert("Response Error!")
            }
    });

}

function getArticleById(id){

    const settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://en.wikipedia.org/?curid="+id,
        "method": "GET",
    };
    
    $.ajax(settings).done(function (text) {
        
        console.log(text);

        if(response != null){

        }
        else{
            alert("Can't find by ID")
        }
           
    });

}

function clearAll(){
    var numOfRows = crypto_table.rows.length - 1;

    for(var i = 0; i < numOfRows; i++){
        crypto_table.deleteRow(numOfRows-i);
    }
}