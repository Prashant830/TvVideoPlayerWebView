// Fetch the JSON file
$.getJSON('../assets/demoJson.json', function(data) {
    // Stringify the fetched data
    var demoJsondata = JSON.stringify(data);


    var html = $(".itemsRow");

    if (html.length > 0) {

        data.items.forEach(element => {
            
            element.contentList.forEach(reelData => {
                var card = $('<div class="card"></div>');
                card.css('background-image', 'url(' + reelData.image + ')');
                $(".itemsRow").append(card);

                card.click(function() {
                    try {
                        AndroidInterface.showVideoWithNdkMethod(reelData.image);
                        console.log("interface calls")
                    } catch (error) {
                        console.log(error)
                    }
                });

            });

        });

    } else {
        console.log("No elements with class .itemsRow found");
    }
})
.fail(function(jqXHR, textStatus, errorThrown) {
    console.log("Error fetching JSON file:", errorThrown);
});
