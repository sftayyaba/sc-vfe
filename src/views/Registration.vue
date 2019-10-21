<template>
    <section>
        <div class="header">
        <Header/>
            <div class="row extra"></div>
        </div>
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <nav>
                        <div class="nav nav-tabs nav-fill" id="nav-tab" role="tablist">
                            <a class="nav-item nav-link col-lg-12 col-xs-12  col-md-12 col-sm-12 active" id="nav-register-tab" data-toggle="tab"
                            role="tab" aria-controls="nav-profile" aria-selected="true"><span v-show="!updating">Register Account</span><span v-show="updating">Update Account</span></a>

                        </div>
                    </nav>
                </div>


            </div>
        </div>
        <div class="tab-content">

            <div class="tab-pane active tab_info" id="registration_form">
                <div class="container register_form">
                    <div class="row">
                        <div class="col-md-4">
                            <div class="form-group text-left">
                                <label for="user-first-name">First Name <span class="red_text" >*</span></label><!-- Required-->
                                <input v-model="first_name" type="text" class="form-control" id="user-first-name"  placeholder="First Name">
                                <span v-show="first_name.length===0 && registered" class="is-danger"> The First Name field is required.</span>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="form-group text-left">
                                <label for="user-middle-initial">Middle Initial</label>
                                <input v-model="initial_middle" type="text" class="form-control" id="user-middle-initial"  placeholder="Middle Initial Name">
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="form-group text-left">
                                <label for="user-second-name">Last Name <span class="red_text">*</span></label><!-- Required-->
                                <input v-model="last_name" type="text" class="form-control" id="user-second-name"  placeholder="Last Name">
                                <span v-show="last_name.length===0 && registered" class="is-danger"> The Last Name field is required.</span>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-4">
                            <div class="form-group text-left">
                                <label for="user-preferred-name">Preferred Name</label>
                                <input v-model="preferred_name" type="text" class="form-control" id="user-preferred-name"  placeholder="Preferred Name">
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="form-group text-left">
                                <label for="user-email">Email <span class="red_text" >*</span></label><!-- Required-->
                                <input v-validate="'required|email'" v-model="email" type="email" autocomplete="false" :disabled = "updating"   name="email"  class="form-control" v-on:blur="checkEmail()" id="user-email" placeholder="Email" ref="email">
                                <span v-show="email_check" class="is-danger"> Email already Registered.!</span>
                                <span class="is-danger">{{ errors.first('email') }}</span>
                                <span v-show="email.length===0 && registered" class="is-danger"> The Email field is required.</span>

                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="form-group text-left">
                                <label for="user-confirm-email">Confirm Email <span class="red_text" >*</span></label><!-- Required-->
                                <input v-validate="'confirmed:email'" v-model="confirm_email" autocomplete="false" type="email" :disabled = "updating" class="form-control" id="user-confirm-email" name="email_confirmation" placeholder="Confirm Email" data-vv-as="email">
                                <span v-show="errors.has('email_confirmation')" class="help is-danger">{{ errors.first('email_confirmation') }}</span>
                                <span v-show="confirm_email.length===0 && registered" class="is-danger"> The Confirm Email field is required.</span>
                            </div>

                        </div>

                    </div>
                    <div class="row">
                        <div class="col-md-4">
                            <div class="form-group text-left" >
                                <label for="user-password">Password <span class="red_text" v-if="!updating">*</span></label>
                                <input v-validate="'min:4'" data-vv-as="password" name="password" autocomplete="false" v-model="password" type="password" class="form-control" id="user-password" placeholder="Password" ref="password">
                                <span class="is-danger">{{ errors.first('password') }}</span>
                                <span v-show="password.length===0 && registered && !updating" class="is-danger"> The Password field is required.</span>
                            </div>

                        </div>
                        <div class="col-md-4">
                            <div class="form-group text-left">
                                <label for="user-confirm-password">Confirm Password <span class="red_text" v-if="!updating">*</span></label>
                                <input v-validate="'confirmed:password'"  v-model="confirm_password" autocomplete="false" name="password_confirmation" type="password" class="form-control" id="user-confirm-password" placeholder="Confirm Password" data-vv-as="password">
                                <span v-show="errors.has('password_confirmation')" class="help is-danger">{{ errors.first('password_confirmation') }}</span>
                                <span v-show="confirm_password.length===0 && registered && !updating" class="is-danger"> The Confirm Password field is required.</span>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="form-check text-left">
                                <input v-model="newsletter" type="checkbox" class="form-check-input" id="newsletter">
                                <label class="form-check-label" for="newsletter">Subscribe to our Newsletter</label>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-4">
                            <div class="form-group text-left">
                                <label for="user-birthday">Birthday</label>
                                <date-dropdown id="user-birthday" :default="defaultBirthDay"  min="1950" :max="birthMax" v-model="birthday" />
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="form-group text-left">
                                <label for="user-graduation-date">Graduation Date</label>
                                <date-dropdown id="user-graduation-date" :default="defaultGraduation" min="1950" :max="gradMax" v-model="graduation_date" />
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="form-group text-left">
                                <label for="user-zip-code">Zip Code <span class="red_text" >*</span></label><!-- Required--><i class="fas fa-info-circle ml-1" v-on:click="zipCodPopup()" data-toggle="tooltip" data-placement="top" title="We'll use your zip to determine nearby colleges and applicable scholarships."></i>
                                <input v-model="zip_code" type="text" class="form-control" id="user-zip-code"  placeholder="Enter Your Zip code">
                                <span v-show="zip_code.length===0 && registered" class="is-danger"> The Zip Code field is required.</span>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-4">
                            <div class="form-group text-left">
                                <label for="user-address-line-1">Address Line 1</label>
                                <input v-model="address_line_1" type="text" class="form-control" id="user-address-line-1"  placeholder="Address Line 1">
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="form-group text-left">
                                <label for="user-address-line-2">Address Line 2</label>
                                <input v-model="address_line_2" type="text" class="form-control" id="user-address-line-2"  placeholder="Address Line 2">
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="form-group text-left">
                                <label for="user-city">City</label>
                                <input v-model="city" type="text" class="form-control" id="user-city"  placeholder="City">
                            </div>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-md-4">
                            <div class="form-group text-left">
                                <label for="user-state">State</label>
                                <input v-model="selected_state" type="text" class="form-control" id="user-state"  placeholder="State">

                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="form-group text-left">
                                <label for="user-country">Country</label>
                                <input v-model="country" type="text" class="form-control" id="user-country"  placeholder="Country">
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="form-check text-left">
                                <input v-model="international" type="checkbox" class="form-check-input" id="international">
                                <label class="form-check-label" for="international">International</label>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-4">
                            <div class="form-group text-left">
                                <label for="user-1st-major">1st Major Choice</label><i class="fas fa-info-circle ml-1" v-on:click="majorPopup()" data-toggle="tooltip" data-placement="top" title="We'll send you scholarship or relevant content about majors and fields you're interested in."></i>
                                <input   v-model="major_1st_choice" type="text" class="form-control" id="user-1st-major"  placeholder="1st Major Choice">
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="form-group text-left">
                                <label for="user-2nd-major">2nd Major Choice</label>
                                <input v-model="major_2nd_choice" type="text" class="form-control" id="user-2nd-major"  placeholder="2nd Major Choice">
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="form-group text-left">
                                <label for="user-3rd-major">3rd Major Choice</label>
                                <input v-model="major_3rd_choice" type="text" class="form-control" id="user-3rd-major"  placeholder="3rd Major Choice">
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-8">
                            <div class="form-group text-left">
                                <label for="user-high-school">High school CEEB Code (if known) or High School Name</label>
                                <input v-model="highSchool_name" type="text" class="form-control" id="user-high-school"  placeholder="Enter Here...">
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="form-group text-left">
                                <label for="user-gpa">GPA</label>
                                <input v-model="gpa" type="text" class="form-control" id="user-gpa"  placeholder="GPA">
                            </div>
                        </div>
                    </div>
                    <div class="row justify-content-center register_btn">
                        <button type="submit" v-show="!updating" v-on:click="registerAccount()" class="btn btn-primary ">Register</button>
                        <button type="submit" v-show="updating"  v-on:click="updateAccount()" class="btn btn-primary ">Update</button>
                    </div>
                </div>

            </div>
        </div>

        <Footer/>
    </section>
</template>

<script>

    import Axios from 'axios';
    import moment from 'moment';
    import footer from "@/components/layout_components/Footer";
    import header from "@/components/layout_components/Header";
    import {configs} from '@/config';
    import Swal from 'sweetalert2';
    import Vue from 'vue';
    import VeeValidate from 'vee-validate';
    import Datepicker from 'vuejs-datepicker';
    import DateDropdown from 'vue-date-dropdown'


    Vue.use(VeeValidate);

    export default {
        name: "Registration",
        components: {
            'Footer': footer,
            'Header': header,
            Datepicker,
            DateDropdown
        },
        data(){
            return{
                updating: false,
                user_id: '',
                update: false,
                first_name :'',
                last_name : '',
                initial_middle: '',
                email : '',
                confirm_email : '',
                password : '',
                confirm_password : '',
                preferred_name : '',
                newsletter : false,
                birthday: '',
                graduation_date : '',
                zip_code :'',
                address_line_1 :'',
                address_line_2:'',
                city :'',
                usa_states : '',
                selected_state: '',
                country : '',
                international :false,
                major_1st_choice :'',
                major_2nd_choice :'',
                major_3rd_choice :'',
                highSchool_name:'',
                gpa:'',
                user_login_emial: '',
                user_login_password : '',
                loggedIn_token : '',
                loggedIn_firstname : '',
                loggedIn_lastname : '',
                loggedIn_id : '',
                email_check:false,
                registered: false,
                confirm_email_check: false,
                confirm_password_check:false,
                birthMax:'',
                gradMax:'',
                defaultBirthDay:'',
                defaultGraduation:'',

            }
        },
        created(){
            this.defaultGraduation='2020-01-10';
            this.defaultBirthDay = '1995-01-10';
            let date = new Date();
            this.birthMax = moment(date).format('YYYY');
            let newDate = new Date(date.getFullYear() + 11,date.getMonth(),date.getDate());
            this.gradMax = moment(newDate).format('YYYY');
            if(this.$route.query.id){
                this.user_id = this.$route.query.id;
                this.updating = true;

                Axios.post(configs.url + 'api/get_user_data',{
                    "id" : this.user_id
                }).then(resp=>{
                    let data = resp.data[0];
                    this.address_line_1 = data.address1;
                    this.address_line_2 = data.address2;
                    this.birthday = moment(data.birthday).format('MM-DD-YYYY ');
                    this.defaultBirthDay = this.birthday.toString();
                    console.log(this.defaultBirthDay);
                    this.city = data.city;
                    this.country = data.country;
                    this.email = data.email;
                    this.confirm_email = data.email;
                    this.first_name = data.first_name;
                    this.gpa = data.gpa;
                    this.graduation_date = moment(data.graduation_date).format('MM-DD-YYYY ');
                    this.defaultGraduation = this.graduation_date;
                    this.international = data.international;
                    this.last_name = data.last_name;
                    this.major_1st_choice = data.major1;
                    this.major_2nd_choice = data.major2;
                    this.major_3rd_choice = data.major3;
                    this.initial_middle = data.middle_initial;
                    this.newsletter = data.news_letter;
                    this.preferred_name = data.preferred_name;
                    this.highSchool_name = data.school_name_code;
                    this.selected_state = data.state;
                    this.zip_code = data.zip_code;
                });
            }

            Axios.get(configs.url + 'api/get_state')
                .then(resp => {
                    this.usa_states = resp.data;
                });
        },
        mounted() {

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
            $('.vue-date input[type=text]').addClass('date_picker');
            $('.date_picker').css({"width":"100%","padding": ".375rem .75rem","border": "1px solid #001D3D","border-radius": ".25rem"});

        },
        updated(){
        },
        methods:{
            majorPopup(){
                Swal.fire("","We'll send you scholarship or relevant content about majors and fields you're interested in.");
            },
            zipCodPopup(){
                Swal.fire("","We'll use your zip to determine nearby colleges and applicable scholarships.");
            },
            checkEmail() {
                let params = new URLSearchParams();
                params.append("email", this.email);

                let config = {
                    headers: { 'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'}
                };
                Axios.post(configs.url + 'api/email_check',params,config).then(resp=>{
                    this.email_check = resp.data;
                    });
            },
            updateAccount(){

                this.registered=true;
                if(this.first_name !== '' && this.last_name !== ''  && this.zip_code !==''){
                    if(this.password !== this.confirm_password){
                        this.confirm_password_check=true;
                    }else{
                        if(this.newsletter){
                            this.newsletter = 1;
                        }else{
                            this.newsletter = 0;
                        }
                        if(this.international){
                            this.international = 1;
                        }else{
                            this.international = 0;
                        }
                        if(this.birthday !==''){
                            this.birthday = moment(new Date(this.birthday)).format('YYYY-MM-D');
                        }

                        if(this.graduation_date !==''){
                            this.graduation_date = moment(new Date(this.graduation_date)).format('YYYY-MM-D');
                        }

                        let params = new URLSearchParams();
                        params.append("id", this.user_id);
                        params.append("first_name", this.first_name);
                        params.append("last_name", this.last_name);
                        params.append("middle_initial", this.initial_middle);
                        params.append("preferred_name", this.preferred_name);
                        params.append("email", this.email);
                        params.append("password", this.password);
                        params.append("news_letter", this.newsletter);
                        params.append("birthday", this.birthday);
                        params.append("graduation_date", this.graduation_date);
                        params.append("zip_code", this.zip_code);
                        params.append("address1", this.address_line_1);
                        params.append("address2", this.address_line_2);
                        params.append("state", this.selected_state);
                        params.append("city", this.city);
                        params.append("country", this.country);
                        params.append("international", this.international);
                        params.append("major1", this.major_1st_choice);
                        params.append("major2", this.major_2nd_choice);
                        params.append("major3", this.major_3rd_choice);
                        params.append("school_name_code", this.highSchool_name);
                        params.append("gpa", this.gpa);

                        let config = {
                            headers: { 'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'}
                        };
                        Axios.post(configs.url + 'api/update_user_data',params,config)
                            .then(resp=>{
                                Swal.fire("Success!","Your Account has been updated successfully.","success");
                                this.$router.push('/user_dashboard');
                            });
                    }

                }

            },
            registerAccount(){
                let temp = this.birthday.split('.');
                this.birthday = temp[2]+'-'+temp[1]+'-'+temp[0];
                let temp1 = this.graduation_date.split('.');
                this.graduation_date = temp1[2]+'-'+temp1[1]+'-'+temp1[0];
                console.log(this.birthday);

                this.registered=true;
                if(this.first_name !== '' && this.last_name !== '' && this.email!==''&& this.confirm_email!==''&& this.password!=='' && this.confirm_password!== '' && this.zip_code !==''){
                    if(this.password !== this.confirm_password){
                        this.confirm_password_check=true;
                    }else if(this.email!==this.confirm_email){
                        this.confirm_email_check=true;
                    }else if (this.email_check=== true)
                    {
                        this.email_check=true;
                    }
                    else
                    {

                        if(this.newsletter){
                            this.newsletter = 1;
                        }else{
                            this.newsletter = 0;
                        }
                        if(this.international){
                            this.international = 1;
                        }else{
                            this.international = 0;
                        }
                        if(this.birthday !==''){
                            this.birthday = moment(new Date(this.birthday)).format('YYYY-MM-D');
                        }

                        if(this.graduation_date !==''){
                            this.graduation_date = moment(new Date(this.graduation_date)).format('YYYY-MM-D');
                        }

                        let params = new URLSearchParams();
                        params.append("first_name", this.first_name);
                        params.append("last_name", this.last_name);
                        params.append("middle_initial", this.initial_middle);
                        params.append("preferred_name", this.preferred_name);
                        params.append("email", this.email);
                        params.append("password", this.password);
                        params.append("news_letter", this.newsletter);
                        params.append("birthday", this.birthday);
                        params.append("graduation_date", this.graduation_date);
                        params.append("zip_code", this.zip_code);
                        params.append("address1", this.address_line_1);
                        params.append("address2", this.address_line_2);
                        params.append("state", this.selected_state);
                        params.append("city", this.city);
                        params.append("country", this.country);
                        params.append("international", this.international);
                        params.append("major1", this.major_1st_choice);
                        params.append("major2", this.major_2nd_choice);
                        params.append("major3", this.major_3rd_choice);
                        params.append("school_name_code", this.highSchool_name);
                        params.append("gpa", this.gpa);

                        let config = {
                            headers: { 'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'}
                        };

                        Axios.post(configs.url + 'api/user_register',params,config)
                            .then(resp=>{
                                console.log(resp.data);
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
                            });
                    }

                }else{
                }

            },

        },


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

    .red_text{
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
    }
    .is-danger
    {
        color: red;
    }
    .vue-date .date_picker
    {
        display: block;
        width: 100%;
        padding: .375rem .75rem;
        font-size: 1rem;
        line-height: 1.5;
        color: #495057;
        background-color: #fff;
        background-clip: padding-box;
        border: 1px solid #ced4da;
        border-radius: .25rem;
        transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
    }
</style>