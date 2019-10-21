<template>
    <section>
        <div class="header">
            <Header/>
            <div class="container-fluid">
                <div class="content-header">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="head-title">
                                <span class="header-title">Online ESL Program <br> With Sacred Heart <br> University</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <h2 class="heading">Online ESL Program From Sacred Heart University</h2>
                    <hr class="line">
                </div>
            </div>
            <div class="row">
                <div class="col-lg-8 col-md-12" >
                    <div class="row mb-5">
                        <div class="col-md-4">
                            <img src="../../public/assets/img/esl/2.png" class="img-responsive img" alt="">
                        </div>
                        <div class="col-md-8">
                            <div class="description">
                                <h5>The Sacred Heart University (SHU) English Language Institute</h5>
                                <hr class="line">
                                <p>
                                    The Sacred Heart University (SHU) English Language Institute offers a fully online English language program of study, but with professor support via Skype or other online video as needed. The highly-individualized program is a complete four-level English language course available to students either in the United States or internationally. This program allows students to improve their English fluency and communication entirely online.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="row mb-5">
                        <div class="col-md-4">
                            <img src="../../public/assets/img/esl/1.png" class="img-responsive img" alt="">
                        </div>
                        <div class="col-md-8">
                            <div class="description">
                                <h5>ESL Program Details</h5>
                                <hr class="line">
                                <ul class="list">
                                    <li>
                                        <i class="far fa-circle"></i>  Completely online and web-based program, including placement testing and coursework.
                                    </li>
                                    <li>
                                        <i class="far fa-circle"></i>   Your specific professor can customize the program timeline and pacing to your life and needs.

                                    </li>
                                    <li>
                                        <i class="far fa-circle"></i>  Upon completion, students receive a Sacred Heart University Certificate of Completion, as well as a Certificate of Completion from Smart College Visit.

                                    </li>
                                    <li>
                                        <i class="far fa-circle"></i>  In addition, you’ll receive administrative support from Smart College every step of the way.
                                    </li>
                                    <li>
                                        <i class="far fa-circle"></i>   Think of us as your concierge service! The course prepares students for the TOEFL, or similar exam.
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-12">
                    <div class="form-header">
                        <h4>We Want to Know About You!</h4>
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
                            <input type="email"  v-validate="'required|email'" name="email" class="form-control" id="email" v-model="email">
                            <span class="is-danger">{{ errors.first('email') }}</span>
                            <span class="is-danger" v-if="submitted && email.length<=0">Email is required!</span>
                        </div>


                        <div class="form-group">
                        <label  class="full-width">Preferred Contact Method</label>
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
            <div class="col-md-12 footer-background">


            <div class="row">
                <div class="col-lg-3">
                    <h2>About SHU</h2>
                    <hr class="line line-width">
                </div>
                <div class="col-lg-3">
                    <div class="info-box">
                    <h5>Conversation Partners</h5>
                    <p>One-on-one conversation helps non-native speakers learn language organically. Each SHU ELI international student gets individually paired with an American student to discuss topics of interest. It’s also a great way to make new friends!</p>
                    </div>
                </div>
                <div class="col-lg-3">
                    <div class="info-box">
                    <h5>Tutoring</h5>
                    <p>English can be a confusing language to learn. To help, both SHU ELI instructors and academic directors make time to work with students who need extra help, before and after classes. SHU ELI instruction is directly connected to individual student’s needs and goals.</p>

                    </div>
                </div>
                <div class="col-lg-3">
                    <div class="info-box">
                    <h5>Field Trips</h5>
                    <p>On-campus students are able to explore American culture with their peers on short excursions away from campus. Our field trips build community between students, as well as a native understanding of language outside of a classroom setting.</p>
                    </div>
                </div>
            </div>
                <div class="row">
                    <div class="col-md-12 privacy_policy text-right">
                        <router-link to="/privacy_policies">View Privacy Policy</router-link>
                    </div>

                </div>
        </div>
        </div>
        <div class="container-fluid">
            <div class="row full-width">
                <div class="footer_background"></div>
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
                    this.submitted = true;
                    if(this.email !=='' && this.first_name!== '' && this.last_name !== '' && this.phone !==''){

                        let params = new URLSearchParams();
                        params.append("first_name", this.first_name);
                        params.append("last_name", this.last_name);
                        params.append("email", this.email);
                        params.append("contact_method", this.contact_method);
                        params.append("phone", this.phone);
                        params.append("fromPage", 'platform');

                        let config = {
                            headers: { 'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'}
                        };
                        Axios.post(configs.url + 'api/user_email',params,config)
                            .then(resp=> {
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
        .blue_chart{
            background-image: none !important;
            background-color: #0D64CC;
        }
        .green_chart{
            background-image: none !important;
            background-color: #01A135;
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
        font-size: 25px;
        color: #fff;
        text-align: left;
    }
    .head-title{
        width: 55%;
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
    .footer-background
    {
        background: #0D63CC;
        padding: 3% 5%;
        margin-bottom: -15%;
    }
    .footer-background h2
    {
        font-weight: bolder;
        color: #FFFFFF;
    }
    .info-box
    {
        background:#EBF7FF;
        padding: 16% 10%;
        margin-top: 20%;
        height: 300px;
    }
    .info-box h5
    {
        text-align: center;
        font-weight: bolder;
        color: #01A035;
        height: 45px;
    }
    .info-box p
    {
        font-size: 13px;
        text-align: left;
    }
    .footer_background
    {
        background-color: #001D3D;
        width: 100%;
        height:14vw;
    }
    .form-control
    {
        border-radius: 0;
    }
    .privacy_policy a{
        color: #01A135;
        text-decoration: none;
        line-height: 60px;
    }
    .is-danger{
        color: red;
    }
</style>