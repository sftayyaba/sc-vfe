<template>
    <!-- -------------- Page Footer -------------- -->
    <section>
        <div id="content-footer">
            <div class="row" id="content">
            <div class="col-md-3 my-auto">
                <div class="row footer_text">
                    <h4 class="text-left">Smart College Visit Inc.</h4>
                </div>
                <div class="row text-left text-white footer-legal mr-2">
                    <p class="text-justify">
                        Smart College Visit is the educated way to search for college, find campus visit dates, get directions for college trips, and book hotels near campus.
                    </p>
                </div>
                <div class="row footer_text">
                    <span class="footer-legal">©2018 Smart College Visit.</span>
                </div>

            </div>
            <div class="col-md-7 pl-3  text-left">
                <div class="row mb-5">
                <ul class="list-inline nav_css">
                    <li class="list-inline-item p-0"> <router-link to = "/collegeSearch" >COLLEGE SEARCH</router-link></li>
                    <li class="list-inline-item p-1"> <router-link to = "/admission" >ADMISSIONS</router-link></li>
                    <li class="list-inline-item p-0"> <router-link to = "/money_talks" >MONEY TALKS</router-link></li>
                    <li class="list-inline-item p-1"> <router-link to = "/college_living" >COLLEGE LIVING</router-link></li>
                    <li class="list-inline-item p-0"> <router-link to = "/global_education" >GLOBAL EDUCATION</router-link></li>
                    <li class="list-inline-item p-1"> <router-link to = "/about_us" >ABOUT US</router-link></li>
                </ul>
                </div>
                <div class="row ">
                    <div class="col-md-3 p-0 social_links">
                        <ul class="list-inline my-auto">
                            <li class ="list-inline-item icon "><a href="https://www.facebook.com/SmartCollegeVisit/" target="_blank" class="f_tip" title="Facebook"><i class="fab fa-facebook-f "></i></a></li>
                            <li class ="list-inline-item icon " ><a href="https://www.linkedin.com/company/1157217/admin/" target="_blank" class="f_tip" title="Linked In"><i class="fab fa-linkedin-in "></i></a></li>
                            <li class ="list-inline-item icon "><a href="https://twitter.com/collegevisit" target="_blank" class="f_tip" title="Twitter"><i class="fab fa-twitter "></i></a></li>
                            
                        </ul>
                    </div>
                    

                </div>
            </div>
            <div class="col-md-2 footer_logo">
            <router-link to="/"><img class=" img-responsive" src="../../../public/assets/img/footer_logo.png"></router-link>
            </div>
        </div>
        </div>
    </section>
    <!-- -------------- /Page Footer -------------- -->
</template>

<script scoped>
    export default {
        name: "myfooter"
    };
</script>

<style scoped>
    h1, h2, h3, h4, h5, h6, p, span, label, select, div,a,th,tr,thead,tbody, option, input, button {
        font-family: Montserrat !important;
    }

    #content-footer{
    background-color: #001D3D;
}

.nav_css{
    font-size: 12px !important;
    color: #fff;
}
.footer_text{
    color: #0D64CC;
}
.footer_text h4{
    font-size:18px;
}
.icon {
    font-size: 29px;
    color: #0D64CC;
}
.footer-legal{
    font-size: 12px;
}
.nav_css li a{
    text-decoration: none;
    list-style: none;
    color: #fff;
}
#content{
    padding: 15vh 8vw;;
}
    @media only screen and (max-width: 780px){
        .footer_logo{
            margin-top: 50px;
        }
    }
    @media only screen and (max-width: 1130px) and (min-width:769px ) {
        .footer_logo img{
            width: 100%;
        }

    }

    .row{
        margin-right: 0 !important;
        margin-left: 0 !important;
    }
    .social_links li{
        text-align: center;
        width: 27%;
    }
</style>
