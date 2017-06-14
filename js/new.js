/*======= Model =======*/

var model = {
    currentCat: null,
    cats: [
        {
            clickCount: 0,
            name : 'Blackie',
            imgSrc : 'images/blackie.jpg',
        },
        {
            clickCount: 0,
            name : 'Catpdeo',
            imgSrc : 'images/catpedo.jpg',
        },
        {
            clickCount: 0,
            name : 'Funny Boy',
            imgSrc : 'images/funny.jpg',
        },
        {
            clickCount: 0,
            name : 'Smooth Criminal',
            imgSrc : 'images/hairless.jpg',
        },
        {
            clickCount: 0,
            name : 'Lu Lu',
            imgSrc : 'images/lulu.jpg',
        },
        {
            clickCount: 0,
            name : 'Pudge',
            imgSrc : 'images/pudge.jpg',
        },
        {
            clickCount: 0,
            name : 'Gentleman Jack',
            imgSrc : 'images/jack.jpg',
        },
        {
            clickCount: 0,
            name : 'Tabby',
            imgSrc : 'images/tabby.jpg',
        },
        {
            clickCount: 0,
            name : 'Triple Threat',
            imgSrc : 'images/triple.jpg',
        },
        {
            clickCount: 0,
            name : 'Vicious beast',
            imgSrc : 'images/vicious.jpg',
        }
    ]
};

var octopus = {

    init: function() {
        // Set our current cat to the first one in the list
        model.currentCat = model.cats[0];

        // tell our views to initialize
        catListView.init();
        catView.init();
        adminView.init();

    },

    getCurrentCat: function() {
        return model.currentCat;
    },

    getCats: function() {
        return model.cats;
    },

    // set the currently-selected cat to the object passed in
    setCurrentCat: function(cat) {
        model.currentCat = cat;
    },

    incrementCounter: function() {
        model.currentCat.clickCount++;
        catView.render();
    },

    toggleAdmin : function() {
        var adminArea = document.getElementById('adminArea');
        if (adminArea.style.display === 'none') {
            adminArea.style.display = 'block';
        } else {
            adminArea.style.display = 'none';
        }
        adminView.render();
    }
};

/* ========= View ======== */

var catView = {

     init: function() {
        // store pointers to our DOM elements for easy access later
        this.catElem = document.getElementById('cat');
        this.catNameElem = document.getElementById('cat-name');
        this.catImageElem = document.getElementById('cat-img');
        this.countElem = document.getElementById('cat-count');

        // on click, increment the current cat's counter
        this.catImageElem.addEventListener('click', function(e) {
            octopus.incrementCounter();
        });
        
        // render this view (update the DOM elements with the right values)
        this.render();
     },

     render: function() {
        // update the DOM elements with values from the current cat
        var currentCat = octopus.getCurrentCat();
        this.countElem.textContent = currentCat.clickCount;
        this.catNameElem.textContent = currentCat.name
        this.catImageElem.src = currentCat.imgSrc;
     }
};

var catListView = {

    init: function() {
        // store the DOM element for easy access later
        this.catListElem = document.getElementById('cat-list');

        // render this view (update the Dom elements with the right values)
        this.render();
    },

    render: function() {
        // get the cats we'll be rendering from the octopus
        var cats = octopus.getCats();

        // empty the cat list
        this.catListElem.innerHTML = '';

        // loop over the cats
        for (var i = 0; i < cats.length; i++) {
            // this is the cat we are currently looping over
            var cat = cats[i];

            //make a new cat list item and set its text
            var elem = document.createElement('li');
            elem.textContent = cat.name;

            // on click, setCurrentCat and render the catView
            // (this uses our closure in a loop trick to connect the view
            // of the cat variable to the click event function)
            elem.addEventListener('click', (function(cat) {
                return function() {
                    octopus.setCurrentCat(cat);
                    catView.render();
                };
            })(cat));

            // finally, add the element to the list
            this.catListElem.appendChild(elem);
        };
    }
};

var adminView = {
    init: function() {

        var adminArea = document.getElementById('adminArea');
        adminArea.style.display = 'none';

        // store pointers to our DOM elements for easy access later
        this.catNameElem = document.getElementById('catName');
        this.catURLElem = document.getElementById('catURL');
        this.countElem = document.getElementById('counter');

    },

    render: function() {

        var currentCat = octopus.getCurrentCat();
        this.catNameElem.value = currentCat.name;
        this.catURLElem.value = currentCat.imgSrc;
        this.countElem.value = currentCat.clickCount;


    }
}

// make it go

octopus.init();
