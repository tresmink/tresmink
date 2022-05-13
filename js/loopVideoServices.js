var VideoCollection = [
    { "format": "video", "type": "beauty", "source": "https://www.youtube.com/embed/4VLlKPr72SQ?loop=1&autoplay=1&controls=1&playlist=4VLlKPr72SQ" },
    { "format": "video", "type": "beauty", "source": "https://www.youtube.com/embed/6tvb9NHGyHo?loop=1&autoplay=1&controls=1&playlist=6tvb9NHGyHo" },
    //{ "format": "video", "type": "nail", "source": "https://www.youtube.com/embed/4VLlKPr72SQ?loop=1&autoplay=1&controls=1&playlist=4VLlKPr72SQ"},
    { "format": "video", "type": "academy", "source": "https://www.youtube.com/embed/XHuGk6F0whI?loop=1&autoplay=1&controls=1&playlist=XHuGk6F0whI" },
    { "format": "video", "type": "academy", "source": "https://www.youtube.com/embed/EMEGukSfZtM?loop=1&autoplay=1&controls=1&playlist=EMEGukSfZtM" }
];
var finalVideoHtml = "";
for (var i = 0; i < VideoCollection.length; i++) {

    var generateVideoHtml = `<div class="col-lg-6 col-md-12 portfolio-item ` + VideoCollection[i].type + ` wow fadeInUp" data-wow-delay="0.1s">
            <div class="rounded overflow-hidden">
                <div class="position-relative overflow-hidden">
                <iframe
                style="width: 100%; height: 300px"
                src="`+ VideoCollection[i].source + `"
                >
              </iframe>
                </div>
            </div>
        </div>`


    finalVideoHtml += generateVideoHtml;
};
document.getElementById("services-video-target").innerHTML = finalVideoHtml;
