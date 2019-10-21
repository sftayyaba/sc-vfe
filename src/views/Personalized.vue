<template>
    <section>
        <div class="header">
            <Header/>
            <div class="container-fluid">
                <div class="content-header">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="head-title">
                                <span class="header-title-green">Personalized Planners:<br></span>
                                <span class="header-title">Let Smart College Visit Do<br>Your College Tour Planning</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <h2 class="heading">What is Personalized Planning?</h2>
                    <hr class="line">
                </div>
            </div>
            <div class="row">
                <div class="col-lg-8 col-md-12">
                    <div class="row mb-5">
                        <div class="col-md-4">
                            <img src="../../public/assets/img/esl/3.png" class="img-responsive img" alt="">
                        </div>
                        <div class="col-md-8">
                            <div class="description">
                                <h5>College Visit Preparation Is A Big Job</h5>
                                <hr class="line">
                                <p>
                                    “Where do we even start?” That’s the number one question we get from students and parents as they approach the college visit planning phase. We totally understand that creating a college visit plan and strategy takes time and research. As such, we’re now offering customized, personalized college visit planning as a service to families, to get you off on the right foot.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="row mb-5">
                        <div class="col-md-4">
                            <img src="../../public/assets/img/esl/5.png" class="img-responsive img" alt="">
                        </div>
                        <div class="col-md-8">
                            <div class="description">
                                <h5>Let the Professionals Do the Visit Planning for You</h5>
                                <hr class="line">
                                <p>
                                    Are you visiting Grandma? Going on vacation? Thinking about “checking out a college or two” on the way there or the way back? Are you just overwhelmed by the possibilities close to home or in your home state? Maybe you want to go just so far away from home … but not past that. Or you are dead set on a major and you want to know what schools offer that (and are those programs any good?)
                                </p>
                                <p>
                                    We can help. We’re travel planners with 20+ years of college
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="row mb-5">
                        <div class="col-md-4">
                            <img src="../../public/assets/img/esl/4.png" class="img-responsive img" alt="">
                        </div>
                        <div class="col-md-8">
                            <div class="description">
                                <h5>Your Personalized Planner</h5>
                                <hr class="line">
                                <p>
                                    Sounds good, right? What do you need to do to get this process started? First, fill out the contact form below. Once we get your basic information, we’ll email you, or arrange for a quick phone call, to find out what’s most important to you. After that, we’ll get to work. You’ll receive a mobile-optimized webpage containing 2-4 schools in the areas specified (if possible), driving information between them, individual school profile information, relevant links, and visit and tour information. We’ll also send you links to recommended hotels and restaurants, and town guides too. And you’ll get a PDF version of the page (for anyone who wants to print it out… we’re looking at you, Dad.)
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-12">
                    <div class="form-header">
                        <h4>Be A Part of Our Soft Launch!</h4>
                        <hr class="line line-width">
                    </div>
                    <div class="form">
                        <div class="form-group">
                            <label for="f-name">First Name</label>
                            <input type="text" class="form-control" id="f-name" v-model="first_name">
                            <span class="is-danger" v-if="submitted && first_name.length<=0">First Name is required!</span>
                        </div>

                        <div class="form-group">
                            <label for="l-name">Last Name</label>
                            <input type="text" class="form-control" id="l-name" v-model="last_name">
                            <span class="is-danger" v-if="submitted && last_name.length<=0">Last Name is required!</span>
                        </div>

                        <div class="form-group">
                            <label for="phone">Phone #</label>
                            <input type="text" class="form-control" id="phone" v-model="phone">
                            <span class="is-danger" v-if="submitted && phone.length<=0">Phone # is required!</span>
                        </div>

                        <div class="form-group">
                            <label for="email">Email</label>
                            <input type="email"   v-validate="'required|email'" name="email" class="form-control" id="email" v-model="email">
                            <span class="is-danger">{{ errors.first('email') }}</span>
                            <span class="is-danger" v-if="submitted && email.length<=0">Email is required!</span>
                        </div>


                        <div class="form-group">
                            <label for="" class="full-width">Preferred Contact Method</label>
                        </div>
                        <div class="form-check-inline">
                            <label class="form-check-label">
                                Phone <input type="radio" class="form-check-input" name="optradio" value="Phone" v-model="contact_method">
                            </label>
                        </div>
                        <div class="form-check-inline">
                            <label class="form-check-label">
                                Email <input type="radio" class="form-check-input" name="optradio" value="Email" v-model="contact_method">
                            </label>
                        </div>
                        <div class="form-group">

                            <button class="btn btn-success top" v-on:click="submit()">Submit</button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <h3 class="meet-team">Meet our Planning Team!</h3>
                    <hr class="line">
                </div>
            </div>
            <div class="row team-section">
                <div class="col-md-6">
                    <img src="../../public/assets/img/team/KellyQueijo.jpg" class="img-responsive team-img" alt="">
                    <h5>Z. Kelly Queijo </h5>
                    <h6>Founder | President | Business Development Lead</h6>
                    <p>
                        Z. Kelly Queijo is passionate about two things: college admissions and marketing technology. She is a Virginia Tech alumnus and founder of Smart College Visit, Inc., a college search and college visit planning portal. Kelly held the position of Undergraduate Admissions Marketing and Public Relations Coordinator for Virginia Tech from 1993-2000. She is the former Director of i-Recruitment Services for Carnegie Communications, and Internet Sales Manager for CollegeNET. She launched SmartCollegeVisit.com in November of 2009 and since then, her site has been listed in the Top 100 education advice blogs by College Scholarships, and as on of the op 5 College Visit Sites by Parents Countdown to College Coach. She is the 2010 VT KnowledgeWorks Entrepreneurial Summit award winner for best business concept. In 2013, Smart College Visit won the Outstanding Technology company award by the Montgomery County Chamber of Commerce.
                    </p>
                </div>
                <div class="col-md-6">
                    <img src="../../public/assets/img/team/KileyThompson.jpg" class="img-responsive team-img" alt="">
                    <h5>Kiley Thompson</h5>
                    <h6>VP of Marketing | Digital Strategist | Engagement Expert | Social Media Guru</h6>
                    <p>
                        Kiley holds a B.A. and M.A. in English from Virginia Tech. She’s worked in higher education in Undergraduate Admissions, Alumni Relations and Annual Giving at Virginia Tech, corporate marketing at United Pet Group, and entertainment and social media for Tribune Media. During her time in admissions, she loved helping students discover the kernel of love for their chosen university, and helping them find their ways as young adults and academics.
                    </p>
                </div>
            </div>
        </div>
        <Footer/>
    </section>
</template>

<script>
    import Axios from 'axios';
    import footer from "@/components/layout_components/Footer";
    import header from "@/components/layout_components/Header";
    import {configs} from '@/config';
    import Vue from 'vue';
    import VeeValidate from 'vee-validate';
    import Swal from 'sweetalert2';
    Vue.use(VeeValidate);


    export default {
        name: "ESL_lander",
        components: {
            'Footer': footer,
            'Header': header

        },
        data(){
            return{
                first_name: '',
                last_name : '',
                phone : '',
                email : '',
                contact_method:'',
                submitted:false,

            }
        },
        methods:
            {
                submit()
                {
                    console.log(this.contact_method);
                    this.submitted = true;
                    if(this.email !=='' && this.first_name!== '' && this.last_name !== '' && this.phone !==''){

                        let params = new URLSearchParams();
                        params.append("first_name", this.first_name);
                        params.append("last_name", this.last_name);
                        params.append("email", this.email);
                        params.append("contact_method", this.contact_method);
                        params.append("phone", this.phone);
                        params.append("fromPage", 'softlaunch');

                        let config = {
                            headers: { 'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'}
                        };

                        Axios.post(configs.url + 'api/user_email',params,config).then(resp=>{
                            this.first_name = '';
                            this.last_name = '';
                            this.phone = '';
                            this.email = '';
                            this.contact_method='';
                            this.submitted = false;
                            Swal.fire('SUCCESS!','Your request has been sent to Smart College Team. One of our team member will get in touch with you shortly!','success');
                        }).catch(function (error) {
                            this.submitted=false;
                            Swal.fire({
                                text : "Our servers seem to be busy right now. Please try again in a few minutes."
                            });
                        });
                    }
                },
            },

    }
</script>

<style scoped>
    @media only screen and (max-width: 991px) {
        .header {
            background-image: none !important;
            background-color: #001D3D !important;
        }
    }
    @media only screen and (max-width: 660px)
    {
        .content-header {
            height: 200px !important;
        }
    }
    .header {
        background-image: url(../../public/assets/img/header/Admissions.png);
        background-repeat: no-repeat;
        min-height: 34vw;
        background-size: 100% auto;
    }
    .content-header {
        margin-top: 40px;
        margin-bottom: 20px;
        height: 150px;
    }
    .header-title{
        font-size: 22px;
        color: #fff;
        text-align: left;
        display: inline-block;
    }
    .header-title-green
    {
        color: #01A035;
        font-size: 20px;
    }
    .head-title{
        margin: 1% 7%;
    }
    .heading
    {
        color: #0D64CC;
        font-weight: bolder;
    }
    .img
    {
        width: 245px;
    }
    .line
    {
        border-top: 2px dashed #01A035;
        width:6%;
        float: left;
    }
    .line-width
    {
        width: 28% !important;
    }
    .description
    {
        background: #EBF7FF;
        padding: 5% 5% 3% 6%;
        margin-left: -20px;
    }
    .description h5
    {
        color: #0D63CC;
        font-weight: bolder;
    }
    .description p
    {
        display: inline-block;
        text-align: left;
        font-size: 13px;
    }
    .list
    {
        display: inline-block;
        padding-inline-start: 0;
        list-style: none;
    }
    .list i
    {
        color: #0D63CC;
    }
    .list li
    {
        line-height: 35px;
        font-size: 13px;
    }
    .form-header
    {
        background: #0D64CC;
        height: 100px;
        padding: 6% 9%;
    }
    .form-header h4
    {
        color: #FFFFFF;
        font-weight: bolder;
        font-size: 20px;
    }
    .form
    {
        background: #001D3D;
        padding: 6% 9%;
    }
    .form label
    {
        color: #FFFFFF;
        font-weight: bolder;
    }
    .top
    {
        margin-top: 15%;
    }

    .meet-team
    {
        color: #0D63CC;
        font-weight: bolder;
    }
    .team-img
    {
    }
    .team-row
    {
        margin-bottom: 3%;
    }
    .team-section
    {
        margin-top: 3%;
        margin-bottom: 10%;
    }
    .team-section h5
    {
        margin-top: 5%;
        font-weight: bolder;
    }
    .team-section h6
    {
        color: #01A135;
    }
    .team-section p
    {
        text-align: justify;
    }
    .team-section ul
    {
        list-style: none;
        padding-inline-start: 0;
    }
    .team-section ul li
    {
        display: inline-block;
        margin-right: 10%;
    }
    .team-section ul li:last-child
    {
        margin-right: 0;
    }
    .team-section ul li i
    {
        color: #0D63CC;
    }
    .team-section img{
        height: 200px;
    }
    .form-control
    {
        border-radius: 0;
    }
    .is-danger{
        color: red;
    }

</style>