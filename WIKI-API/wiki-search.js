var result = $('#main');

window.onload = function(){

    console.log("before");
    
    getWikiResult();
    
    console.log("after");
};


function getWikiResult(){

    var search = "Arachnophobia";

    const settings = {
        "async": true,
        "crossDomain": true,
        "Content-Type": "application/json",
        "url": "https://en.wikipedia.org/w/api.php?origin=*&action=query&prop=revisions&titles="+search+"&rvslots=*&format=json&rvprop=content&formatversion=2",
        "method": "GET"
    };

    $.ajax(settings).done(function (text) {
        
        var result = text.query.pages[0].revisions[0].slots.main.content;

        console.log(result);

        //needs work on selection (position in array may be wrong)
       
        var index = result.search("==Treatment");

        console.log(index);

        console.log(id);

            if(id != null){

    

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
        "url": "https://en.wikipedia.org/w/api.php?action=query&pageids="+id,
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