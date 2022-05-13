document.getElementById("footer-target").innerHTML =
    `
    <!-- tres mink :  Topbar Start -->
    <div class="container-fluid mt-5 text-center" style="background-color: lightgray;">
        <div class="h-100 d-inline-flex align-items-center py-3">
            <a type="button" href="tel:9158983304"class="btn btn-secondary px-10">&nbsp;&nbsp;&nbsp;Hurry!! Book Your Appointment Now&nbsp;&nbsp;&nbsp;</a>
        </div>
    </div>
    <!-- tres mink :  Topbar End -->
    <!-- tres mink :  Footer Start -->
    <div class="container-fluid bg-dark text-light footer pt-5 wow fadeIn" data-wow-delay="0.1s" style="display:block">
        <div class="container">
            <div class="row g-5">
                <div class="col-lg-6 col-md-6">
                    <h4 class="text-light mb-4">Contact us</h4>
                    <p class="mb-2"><a href="tel:9158983304"><i class="fa fa-phone-alt me-3"></i>+91 9158983304</a></p>
                    <p class="mb-2"><a href="tel:9765333304"><i class="fa fa-phone-alt me-3"></i>+91 9765333304</a></p>
                    <h4 class="text-light mb-4 pt-2">Follow us on social media</h4>
                    <div class="d-flex my-2">
                        <a class="btn btn-outline-light btn-social" target="blank" href="https://www.instagram.com/tresminkdeshaileshmistry/"><i class="fab fa-instagram"></i></a>
                        <a class="btn btn-outline-light btn-social" target="blank" href="https://www.facebook.com/MINKbyshailesh/"><i class="fab fa-facebook-f"></i></a>
                        <a class="btn btn-outline-light btn-social" target="blank" href="https://www.youtube.com/channel/UClO_GqnIPvXIFi1lu2insiw"><i class="fab fa-youtube"></i></a>                   
                    </div>
                    <br>
                    <h4 class="text-light mb-4">Locate us on map</h4>
                    <p class="mb-2"><a href="https://g.page/MinkSalonPune?share"><i class="fa fa-map-marker-alt me-3"></i>Liberty Phase-2, Ragvilas Society, Koregaon Park, Pune, Maharashtra-411001</a></p>
                    <br><p class="text-light mb-4">&copy;<script>document.write(new Date().getFullYear())</script> All Rights Reserved By Tres Mink</p>
                </div>
                <div class="col-lg-6 col-md-6">
                    <div class="mapouter"><div class="gmap_canvas">
                        <iframe style="width:100%;height:100%" id="gmap_canvas" 
                        src="https://maps.google.com/maps?q=Tres%20Mink%20de%20Shailesh%20Mistry%20Salon%20&%20Academy&t=&z=13&ie=UTF8&iwloc=&output=embed" 
                        frameborder="1" scrolling="no" marginheight="0" marginwidth="0">
                    </iframe><a href=""></a><br><style>.mapouter{position:relative;text-align:right;width:100%;height:100%}</style>
                    <a href=""></a>
                    <style>.gmap_canvas {overflow:hidden;background:none!important;width:100%;height:100%}
                    </style></div></div>
                </div>
            </div>
        </div>
        <br>
    </div>
    <!-- tres mink :  Footer End -->
`;

window.onload = () =>{
    //window.scrollTo(0, 0);
    document.getElementById("all-click").click();
}
