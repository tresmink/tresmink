// ''''''''''''''''''''''''''''''IMAGES''''''''''''''''''''''''''''''''''''''''''''''''''''
var ImagesCollection = [
    { "type": "hair", "source": "./images/Services/Hair/1.jpeg" },
    { "type": "hair", "source": "./images/Services/Hair/2.jpeg" },
    { "type": "hair", "source": "./images/Services/Hair/3.jpeg" },
    { "type": "hair", "source": "./images/Services/Hair/4.jpeg" },
    { "type": "hair", "source": "./images/Services/Hair/5.jpeg" },
    { "type": "hair", "source": "./images/Services/Hair/6.jpeg" },
    { "type": "hair", "source": "./images/Services/Hair/7.jpeg" },
    { "type": "hair", "source": "./images/Services/Hair/8.jpeg" },
    { "type": "hair", "source": "./images/Services/Hair/9.jpeg" },
    { "type": "hair", "source": "./images/Services/Hair/10.jpeg" },
    { "type": "hair", "source": "./images/Services/Hair/11.jpeg" },
    { "type": "hair", "source": "./images/Services/Hair/12.jpeg" },
    { "type": "hair", "source": "./images/Services/Hair/13.jpeg" },
    { "type": "hair", "source": "./images/Services/Hair/14.jpeg" },
    { "type": "hair", "source": "./images/Services/Hair/15.jpeg" },
    { "type": "hair", "source": "./images/Services/Hair/16.jpeg" },
    { "type": "hair", "source": "./images/Services/Hair/17.jpeg" },
    { "type": "hair", "source": "./images/Services/Hair/18.jpeg" },
    { "type": "hair", "source": "./images/Services/Hair/19.jpeg" },
    { "type": "hair", "source": "./images/Services/Hair/20.jpeg" },
    { "type": "hair", "source": "./images/Services/Hair/21.jpeg" },
    { "type": "color", "source": "./images/Services/Color/1.jpeg" },
    { "type": "color", "source": "./images/Services/Color/2.jpeg" },
    { "type": "color", "source": "./images/Services/Color/3.jpeg" },
    { "type": "color", "source": "./images/Services/Color/4.jpeg" },
    { "type": "color", "source": "./images/Services/Color/5.jpeg" },
    { "type": "color", "source": "./images/Services/Color/6.jpeg" },
    { "type": "color", "source": "./images/Services/Color/7.jpeg" },
    { "type": "color", "source": "./images/Services/Color/8.jpeg" },
    { "type": "color", "source": "./images/Services/Color/9.jpeg" },
    { "type": "color", "source": "./images/Services/Color/10.jpeg" },
    { "type": "color", "source": "./images/Services/Color/11.jpeg" },
    { "type": "color", "source": "./images/Services/Color/12.jpeg" },
    { "type": "color", "source": "./images/Services/Color/13.jpeg" },
    { "type": "color", "source": "./images/Services/Color/14.jpeg" },
    { "type": "color", "source": "./images/Services/Color/15.jpeg" },
    { "type": "color", "source": "./images/Services/Color/16.jpeg" },
    { "type": "color", "source": "./images/Services/Color/17.jpeg" },
    { "type": "color", "source": "./images/Services/Color/18.jpeg" },
    { "type": "color", "source": "./images/Services/Color/19.jpeg" },
    { "type": "color", "source": "./images/Services/Color/20.jpeg" },
    { "type": "nail", "source": "./images/Services/nails/1.jpeg" },
    { "type": "nail", "source": "./images/Services/nails/2.jpeg" }
];
var finalImageHtml = "";
for (var i = 0; i < ImagesCollection.length; i++) {
    var generateImageHtml = `<div class="col-lg-4 col-md-6 portfolio-item ` + ImagesCollection[i].type + ` wow fadeInUp" data-wow-delay="0.1s">
            <div class="rounded overflow-hidden">
                <div class="position-relative overflow-hidden">
                    <img class="img-fluid w-100" src="`+ ImagesCollection[i].source + `" alt="tres mink india">
                </div>
            </div>
        </div>`
    finalImageHtml += generateImageHtml;
};
document.getElementById("services-image-target").innerHTML = finalImageHtml;
