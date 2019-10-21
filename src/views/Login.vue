<template>
    <section>
        <div class="header">
            <Header/>
            <div class="row extra"></div>
        </div>
        <div class="container" id="scroll_here">
            <div class="row">
                <div class="col-md-12">
                    <nav>
                        <div class="nav nav-tabs nav-fill" id="nav-tab" role="tablist">
                            <a class="nav-item nav-link col-lg-12  col-md-12 col-xs-12 col-sm-12 active" id="nav-login-tab" data-toggle="tab"
                            role="tab" aria-controls="nav-home" aria-selected="true">Login</a>
                        </div>
                    </nav>
                </div>


            </div>
        </div>
        <div class="tab-content">
            <div class="tab-pane  active tab_info" id="login_form">
                <div class="container login_form">
                    <div class="row">
                        <div class="col-md-6 offset-md-3">

                            <div class="row">
                                <div class="col-md-12">
                                    <div class="form-group text-left">
                                        <label for="user-login-email">Email</label>
                                        <input   name="email"
                                        v-model="user_login_emial" type="email" class="form-control" id="user-login-email" placeholder="Email">
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-12">
                                    <div class="form-group text-left" >
                                        <label for="user-login-password">Password</label>
                                        <input  name="password"
                                        v-model="user_login_password" type="password" class="form-control" id="user-login-password" placeholder="Password">
                                        <span class="is-danger">{{ errors.first('password') }}</span>
                                    </div>
                                </div>
                            </div>
                            <div class="row justify-content-center">
                                <span><a href="#" >Forget Password?</a></span>
                            </div>
                            <div class="row justify-content-center login_btn">
                                <button type="submit" class="btn btn-primary btn_register" v-on:click="userlogin()"  >Login</button>
                            </div>
                            <div class="row justify-content-center">

                                <p class="mb-0">OR</p>
                            </div>
                            <div class="row justify-content-center">
                                <ul class="nav nav-tabs custom_tab_link">
                                    <li>
                                        <router-link to="/registration">Create New Account</router-link>
                                    </li>

                                </ul>
                            </div>
                        </div>
                    </div>
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
    import Swal from 'sweetalert2';
    export default {
        name: "Registration",
        components: {
            'Footer': footer,
            'Header': header,
        },
        data(){
            return{
                user_login_emial: '',
                user_login_password : '',
                loggedIn_token : '',
                loggedIn_firstname : '',
                loggedIn_lastname : '',
                loggedIn_id : '',
            }
        },
        methods:{
            userlogin(){
                if(this.user_login_emial!== '' && this.user_login_password !== ''){

                    let params = new URLSearchParams();
                    params.append("email", this.user_login_emial);
                    params.append("password", this.user_login_password);
                    let config = {
                        headers: { 'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'}
                    };

                    Axios.post(configs.url + 'api/user_login',params,config).then(resp=>{
                        if (resp.data)
                        {
                            this.loggedIn_token = resp.data.token;
                            this.loggedIn_firstname = resp.data.first_name;
                            this.loggedIn_lastname = resp.data.last_name;
                            this.loggedIn_id = resp.data.id;

                            localStorage.setItem("scv_user_token" , this.loggedIn_token);
                            localStorage.setItem("scv_user_id" , this.loggedIn_id);
                            this.$router.push('/user_dashboard');
                        }
                        else
                        {
                            Swal.fire({
                                text: "Sorry we cannot find an account associated with this email. Please create a new account!",
                            });
                        }

                        //

                    });
                }else{
                    Swal.fire({
                        text: "Please enter your email and password.",
                    });
                }
            },
        },
        mounted() {
            $('html, body').animate({
                scrollTop: $("#navbarSupportedContent").offset().top
            }, 500);

            let self = this;
            $('.state_dropdown').select2({
                "val" : null,
                "placeholder" : 'Select any state',
                width: '100%'
            }).on("select2:select", function (e) {
                self.selected_state = e.params.data.id;
            });
            $('.country_dropdown').select2({
                "val" : null,
                "placeholder" : 'Select any country',
                width: '100%'
            }).on("select2:select", function (e) {
            });
            $('.select2-selection--single').css({"height": "38px", "border": "1px solid #001D3D", "color": "#001D3D", "width" : "100%"});
            $('.select2-selection__rendered').css({"height": "100%","color": "#001D3D"});
            $('.select2-selection__placeholder').css({"vertical-align": "middle"});
        },
        created(){
            Axios.get(configs.url + 'api/get_state')
                .then(resp => {
                    this.usa_states = resp.data;
                });
        }
    }
</script>

<style scoped>

    @media only screen and (max-width: 600px) {
        .header {
            background-image: none !important;
            background-color: #001D3D;
        }
    }
    .header {
        background-color: #001D3D;

    }
    .header a {
        margin-top: 20px;
    }

    h1, h2, h3, h4, h5, h6, p, span, label, select, div,a,th,tr,thead,tbody, option, input, button {
        font-family: Montserrat !important;
    }


    .nav-tabs {
        margin-top: -30px;
        width: 100%;
    }


    .nav-tabs a {
        background-color: #fff;
        height: 77px;
        color: #0D64CC;
        font-size: 20px;
        padding: 20px 0px;
        border-radius: 0px;
        border: 1px solid #0D64CC;
    }

    .nav-tabs .nav-item.show .nav-link, .nav-tabs .nav-link.active {
        background-color: #0D64CC;
        border: 1px solid #0D64CC;
        color: #fff;
    }
    .extra{
        margin-top: 100px;
    }
    .tab_cell ul li{
        font-size: 14px;
    }

    .tab_div ul {
        list-style: none;
        width: 100%;
    }

    .register_form , .login_form{
        margin: 20px auto;
    }
    .register_form input , .login_form input{
        border: 1px solid #001D3D;
    }
    .register_form label , .login_form label{
        color: #0D64CC;
    }
    .register_form h3,.login_form h3{
        line-height: 100px;
        color: #001D3D;
    }
    .register_form .register_btn ,.login_form .login_btn{
        margin: 10px 0px;
    }
    .register_form .register_btn .btn , .login_form .login_btn .btn{
        width: 130px;
        font-size: 20px;
        background-color: #01A135;
        border: 1px solid #01A135;
        border-radius: 0px;
    }

    .is-danger{
        color: red;
    }
    .register_form .form-check{
        vertical-align: middle;
        margin: 30px 0px;
    }
    .fa-info-circle{
        color: #0D64CC;
    }
    .custom_tab_link.nav-tabs{
        margin-top: 0px;
        width: auto;
        border-bottom: none;
    }
    .custom_tab_link.nav-tabs a{
        border: none;
        color: #001D3D;
        padding: 0px;

    }

    .custom_tab_link.nav-tabs a:hover
    {
        text-decoration: none;
    }


</style>