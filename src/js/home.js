// Fetch the JSON file
$.getJSON('../assets/demoJson.json', function(data) {
    // Stringify the fetched data
    var demoJsondata = JSON.stringify(data);


    var html = $(".itemsRow");

    if (html.length > 0) {


        console.log(data.items[0].contentList[0])


               // jdk method 
            var card = $('<div class="card"></div>');
                card.css('background-image', 'url(' + data.items[0].contentList[0].image + ')');
                $(".itemsRow").append(card);

                card.click(function() {
                    try {
                        console.log("interface calls for jdk")
                        AndroidInterface.showVideoWithJdkMethod(data.items[0].contentList[0].image);
                    } catch (error) {
                        console.log(error)
                    }
                });


                // ndk method 

            var card = $('<div class="card"></div>');
                card.css('background-image', 'url(' +data.items[0].contentList[1].image + ')');
                $(".itemsRowNdk").append(card);

                card.click(function() {
                    try {
                        console.log("interface calls for Ndk")
                        AndroidInterface.showVideoWithNdkMethod(data.items[0].contentList[1].image);
                    } catch (error) {
                        console.log(error)
                    }
                });        

 

    } else {
        console.log("No elements with class .itemsRow found");
    }
})
.fail(function(jqXHR, textStatus, errorThrown) {
    console.log("Error fetching JSON file:", errorThrown);
});
