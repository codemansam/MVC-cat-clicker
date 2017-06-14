
      // Function to simplify adding more images
      // Pass in an image file location and the title
      var createImage = function(src, title) {
        var img = new Image();
        img.src = src;
        img.alt = title;
        img.title = title;
        img.count = 0; // will hold the number of clicks
        return img; 
      };

      // Stores our cat images
      var images = [];
      var catClicks = [];
      var currentCat = -1;

      // push images to the array
      images.push(createImage("images/blackie.jpg", "Blackie"));
      images.push(createImage("images/catpedo.jpg", "Catpedo"));
      images.push(createImage("images/funny.jpg", "FunnyBoy"));
      images.push(createImage("images/hairless.jpg", "Hairless"));
      images.push(createImage("images/lulu.jpg", "Lulu"));
      images.push(createImage("images/pudge.jpg", "Pudge"));
      images.push(createImage("images/relaxedBoy.jpg", "Relaxed Boy"));
      images.push(createImage("images/tabby.jpg", "Tabby"));
      images.push(createImage("images/trio.jpg", "Trio"));
      images.push(createImage("images/wolfy.jpg", "Wolfy"));
      // console.log(images);

      function appendItemsToList() {
        //console.log("x");
        for (i = 0; i < images.length; i++) {
          var title = images[i].title;
          var src = images[i].src;
          catClicks[i] = 0;
          console.log(title);
          //$( "#list").append(title);
          //$( "#list").append(lineBreak);
        var listItem = document.createElement("li");
        listItem.id = i;
        var node = document.createTextNode(title);
        listItem.appendChild(node);
        var element = document.getElementById("sideBar");
        element.append(listItem);
      }
  }

  appendItemsToList();

  $( "li").on('click', function() {
    currentCat = this.id;
    $( "#title" ).text(images[currentCat].title);
    $( "#mainImage").attr('src', images[currentCat].src);
    var currentCount = catClicks[currentCat];
    $( "#counter").text("Counter " + currentCount);
    console.log(currentCat);
    
  })

  $( "#mainImage").on('click', function() {

      catClicks[currentCat] = catClicks[currentCat] + 1;
      $( "#counter").text("Counter " + catClicks[currentCat]);
  })

  //console.log("appendItemsToList fired");