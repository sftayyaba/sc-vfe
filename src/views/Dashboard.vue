<template>
    <section>
        <div class="header">
          <Header/>

        </div>
        <div class="container user-name-banner">
            <div class="row">
                <div class="col-md-12">
                    <div class="user-name text-center">
                        <h3 class="name">{{'Welcome '+ user_data.first_name+' '+user_data.last_name }}</h3>
                        <router-link :to="'/registration?id='+user_id"><button class="btn btn-list edit_btn">Edit Your Account</button></router-link>

                    </div>
                </div>
            </div>
        </div>
        <div class="container">
        <div class="row">
            <div class="col-md-12">

                <nav>
                    <div class="nav nav-tabs nav-fill"  role="tablist">
                        <a class="nav-item nav-link col-lg-6  col-md-6 col-xs-12 col-sm-12 active" id="nav-home-tab" data-toggle="tab" href="#dashboard"
                           role="tab" aria-controls="nav-home" aria-selected="true">Your Dashboard</a>
                        <a class="nav-item nav-link col-lg-6 col-xs-12  col-md-6 col-sm-12" id="nav-profile-tab" data-toggle="tab" href="#trip_planner"
                           role="tab" aria-controls="nav-profile" aria-selected="false">Trip Planner</a>

                    </div>
                </nav>
            </div>
        </div>
        </div>
                <div class="tab-content">
                    <div class="tab-pane  active tab_info" id="dashboard">
                        <div class="container remove_toggle">
                            <div class="row">
                                <div class="col-md-3" >
                                    <div class="row tab_cell">

                                        <h2 class="number blue">
                                            {{application_days}}
                                        </h2>
                                        <h6 class="green">
                                            Days Until {{application_year}}
                                        </h6>
                                        <h6 class="blue">

                                            Application Deadline
                                        </h6>
                                    </div>
                                </div>
                                <div class="col-md-3">
                                    <div class="row tab_cell">
                                        <h2 class="number blue">
                                            {{sat_days}}
                                        </h2>
                                        <h6 class="green">
                                            Days Until Next SAT EXAM
                                        </h6>
                                        <h6 class="blue">
                                            SAT Deadline
                                        </h6>
                                    </div>
                                </div>
                                <div class="col-md-3">
                                    <div class="row tab_cell">
                                        <h2 class="number blue">
                                           {{fafsa_days}}
                                        </h2>
                                        <h6 class="green">
                                            Days Until {{fafsa_year}}
                                        </h6>
                                        <h6 class="blue">
                                            FAFSA Deadline
                                        </h6>
                                    </div>
                                </div>
                                <div class="col-md-3">
                                    <div class="row tab_cell">
                                        <h3 class="number blue">
                                            {{scholarship_days}}
                                        </h3>
                                        <h6 class="green">
                                            Days Until {{scholarship_year}}
                                        </h6>
                                        <h6 class="blue">
                                            National Candidate Reply Date
                                        </h6>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="favorite-banner bottom-margin">
                                    <h2>Your Favorite Colleges</h2>
                                </div>
                            </div>

                        </div>
                        <div class="container-fluid light-blue">
                            <div class="container">
                            <div class="row">
                                <div class="col-md-6 col-lg-4 col-sm-12 col-xs-12" v-for="(college,index) in user_favorite_colleges" :key="index">
                                    <div class="white" v-if="index < limit">

                                        <h3 :title="college.college_name" class="text-center" >{{college.college_name.substr(0, 55)}}</h3>
                                        <hr class="line">
                                        <div class="row btn-uni text-center mx-auto">
                                            <div class="col-lg-4 col-md-12 col-sm-4 text-center p-0">
                                                <router-link :to="'/college_profile?id='+college.college_id"><button class="btn btn-info">View</button></router-link>
                                            </div>
                                            <div class="col-lg-4 col-md-12 col-sm-4 text-center p-0">
                                                <button class="btn btn-custom " v-on:click="removeFavoriteCollege(college.college_id)">Remove</button>
                                            </div>
                                            <div class="col-lg-4 col-md-12 col-sm-4 text-center p-0">
                                                <a  href="#" v-on:click="activaTab(college.college_name)"><button class="btn btn-success ">Plan Trip</button></a>
                                            </div>

                                        </div>
<!--                                        <ul class="btn-uni text-center">-->

<!--                                            <li><router-link :to="'/college_profile?id='+college.college_id"><button class="btn btn-info">View</button></router-link></li>-->
<!--                                            <li><button class="btn btn-custom " v-on:click="removeFavoriteCollege(college.college_id)">Remove</button></li>-->
<!--                                            <li>-->

<!--                                                <a class="btn btn-success " href="#" v-on:click="activaTab(college.city)">Plan Trip</a>-->

<!--                                            </li>-->
<!--                                        </ul>-->


                                    </div>
                                </div>
<!--                                <div class="col-md-6 col-lg-4 col-sm-12 col-xs-12">-->

<!--                                    <div class="white">-->
<!--                                        <h3>University of Arizona</h3>-->
<!--                                        <hr class="line">-->
<!--                                        <ul class="btn-uni">-->
<!--                                            <li><button class="btn btn-info">View</button></li>-->
<!--                                            <li><button class="btn btn-custom">Remove</button></li>-->
<!--                                            <li><button class="btn btn-success">Plan Trip</button></li>-->
<!--                                        </ul>-->
<!--                                    </div>-->

<!--                                </div>-->
<!--                                <div class="col-md-6 col-lg-4 col-sm-12 col-xs-12">-->
<!--                                        <div class="white">-->


<!--                                        <h3 :title="uni_name">{{uni_name.substr(0, 55) + '..'}}</h3>-->
<!--                                            <hr class="line">-->
<!--                                            <ul class="btn-uni">-->
<!--                                                <li><button class="btn btn-info">View</button></li>-->
<!--                                                <li><button class="btn btn-custom">Remove</button></li>-->
<!--                                                <li><button class="btn btn-success">Plan Trip</button></li>-->
<!--                                            </ul>-->

<!--                                </div>-->
<!--                                </div>-->
                            </div>

                                <div class="row no_records" v-if="!(user_favorite_colleges.length > 0)">
                                    <div class="col-md-12">
                                        <div class="msg text-center">
                                            <b>No records in your Favorites</b>
                                        </div>
                                    </div>
                                </div>
                                <div class="row" v-if="user_favorite_colleges.length > 3">
                                    <div class="col-sm-12">
                                        <div class="view-more-uni">
                                            <router-link to="/all_colleges" class="btn btn-link" >View All</router-link>
                                        </div>
                                    </div>
                                </div>
                        </div>
                        </div>
                        <div class="container">
                            <div class="row">
                                <div class="col-md-12 my-auto">
                                    <div class="favorite-banner top-margin">
                                        <h2>Your Favorite Posts</h2>
                                    </div>
                                </div>
                            </div>

                        <div class="row">
                            <div class="col-md-3 mt-3" v-for="(articles,index) in user_favorite_articles" :key="index">
                                <div :class="(index%2===0) ? 'article' : 'article1' " v-if="index < 4">
                                    <div class="arti mx-auto">
                                        <router-link :to="'/single_article/'+articles.slug">
                                            <div class="art" :style="'background-image: linear-gradient(rgba(0, 0, 0, 0.15),  rgba(0, 0, 0, 0.35) ),url('+articles.jetpack_featured_media_url+')'">
                                                <div class="row article_title ">
                                                    <div class="col-md-12 my-auto">
                                                        <span class=" ">{{articles.title.rendered.replace('&#8217;' ,"'")}}</span>
                                                    </div>
                                                </div>
                                                <!--                            <div class=" row article_tags">-->
                                                <!--                                <div class="col-md-12">-->
                                                <!--                                    <ul>-->
                                                <!--                                        <li class="tag-list" v-for="(tag , index) in data.tags">{{tag}}</li>-->
                                                <!--                                    </ul>-->
                                                <!--                                </div>-->
                                                <!--                            </div>-->
                                            </div>
                                        </router-link>
                                    </div>


<!--                                <h5 :title="articles.title.rendered" >{{articles.title.rendered.substr(0, 35)+'...'}}</h5>-->
<!--                                    <hr class="line">-->
<!--                                <p class="text-justify" v-html="articles.content.rendered.substr(0, 170)+'...'">-->

<!--                                </p>-->
<!--                                <ul class="text-center">-->
<!--                                    <li class="tag-list">Tag 1</li>-->
<!--                                    <li class="tag-list">Tag 2</li>-->
<!--                                    <li class="tag-list">Tag 3</li>-->
<!--                                </ul>-->
                                <div class="row bottom">
                                    <div class="col-md-12 text-center">
                                        <ul class="mx-auto">
                                            <li class="btn-list">
                                                <router-link :to="'/single_article/'+articles.slug">
                                                    <button class="btn btn-success">View</button>
                                                </router-link>
                                            </li>
                                            <li class="btn-list">
                                                <button class="btn btn-custom" v-on:click="removeFavoriteArticles(articles.id)">Remove</button>
                                            </li>
                                        </ul>
                                    </div>


                                </div>
                                </div>

                            </div>
<!--                            <div class="col-md-3">-->
<!--                                <div class="article1">-->


<!--                                <h5>Title of Article</h5>-->
<!--                                <hr class="line">-->
<!--                                <p class="text-justify">-->
<!--                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci alias amet cum ex expedita, maiores perspiciatis quia quibusdam reiciendis repudiandae? Architecto consectetur delectus explicabo fugiat natus quasi quibusdam voluptas voluptatum?-->
<!--                                </p>-->
<!--                                <ul class="text-center">-->
<!--                                    <li class="tag-list">Tag 1</li>-->
<!--                                    <li class="tag-list">Tag 2</li>-->
<!--                                    <li class="tag-list">Tag 3</li>-->
<!--                                </ul>-->
<!--                                <div class="row bottom">-->
<!--                                    <ul class="text-center">-->
<!--                                        <li class="btn-list">-->
<!--                                            <button class="btn btn-success">View</button>-->
<!--                                        </li>-->
<!--                                        <li class="btn-list">-->
<!--                                            <button class="btn btn-custom">Remove</button>-->
<!--                                        </li>-->
<!--                                    </ul>-->
<!--                                </div>-->

<!--                            </div>-->
<!--                            </div>-->
<!--                            <div class="col-md-3">-->
<!--                                <div class="article">-->


<!--                                    <h5>Title of Article</h5>-->
<!--                                    <hr class="line">-->
<!--                                    <p class="text-justify">-->
<!--                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci alias amet cum ex expedita, maiores perspiciatis quia quibusdam reiciendis repudiandae? Architecto consectetur delectus explicabo fugiat natus quasi quibusdam voluptas voluptatum?-->
<!--                                    </p>-->
<!--                                    <ul class="text-center">-->
<!--                                        <li class="tag-list">Tag 1</li>-->
<!--                                        <li class="tag-list">Tag 2</li>-->
<!--                                        <li class="tag-list">Tag 3</li>-->
<!--                                    </ul>-->
<!--                                    <div class="row bottom">-->
<!--                                        <ul class="text-center">-->
<!--                                            <li class="btn-list">-->
<!--                                                <button class="btn btn-success">View</button>-->
<!--                                            </li>-->
<!--                                            <li class="btn-list">-->
<!--                                                <button class="btn btn-custom">Remove</button>-->
<!--                                            </li>-->
<!--                                        </ul>-->

<!--                                    </div>-->
<!--                                </div>-->

<!--                            </div>-->
<!--                            <div class="col-md-3">-->
<!--                                <div class="article1">-->


<!--                                    <h5>Title of Article</h5>-->
<!--                                    <hr class="line">-->
<!--                                    <p class="text-justify">-->
<!--                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci alias amet cum ex expedita, maiores perspiciatis quia quibusdam reiciendis repudiandae? Architecto consectetur delectus explicabo fugiat natus quasi quibusdam voluptas voluptatum?-->
<!--                                    </p>-->
<!--                                    <ul class="text-center">-->
<!--                                        <li class="tag-list">Tag 1</li>-->
<!--                                        <li class="tag-list">Tag 2</li>-->
<!--                                        <li class="tag-list">Tag 3</li>-->
<!--                                    </ul>-->
<!--                                    <div class="row bottom">-->
<!--                                            <ul class="text-center">-->
<!--                                                <li class="btn-list">-->
<!--                                                    <button class="btn btn-success">View</button>-->
<!--                                                </li>-->
<!--                                                <li class="btn-list">-->
<!--                                                    <button class="btn btn-custom">Remove</button>-->
<!--                                                </li>-->
<!--                                            </ul>-->


<!--                                    </div>-->

<!--                                </div>-->
<!--                            </div>-->


                        </div>
                            <div class="row no_records" v-if="!(user_favorite_articles.length > 0)">
                                <div class="col-md-12">
                                    <div class="msg text-center">
                                        <b>No records in your Favorites</b>
                                    </div>
                                </div>
                            </div>

                            <div class="row" v-if="user_favorite_articles.length > 4">
                                <div class="col-sm-12">
                                    <div class="view-more">
                                        <router-link to="/all_articles" class="btn btn-link" >View All</router-link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>

                    <div class="tab-pane fade" id="trip_planner">
                    <div class="container remove_toggle">
                        <div class="row head-line">
                            <div class="col-md-6 offset-md-3 text-center my-auto">

                                <section class="hotel_div">
                                    <div class="row">
                                        <h2>Find a Hotel Near Campus</h2>
                                    </div>
                                    <div class="row mb-3">
                                        <div class="col-md-3  text-left p-0">
                                            <label  v-if="uni_city_flag">College Name</label>
                                            <label  v-if="uni_city_flag_select">City</label>
                                        </div>
                                        <div class="col-md-9">
                                            <input class=" " type="text" v-model="uni_name" disabled  v-if="uni_city_flag">
                                            <div v-if="uni_city_flag_select">
                                                <select class="hotel_city_dropdown" name="city" >
                                                    <option></option>
                                                </select>
                                            </div>

                                        </div>
                                    </div>
                                    <div class="row mb-3">
                                        <div class="col-md-3  text-left p-0">
                                            <label>Check In</label>
                                        </div>
                                        <div class="col-md-9">
                                            <datepicker placeholder="Select Check In" format="MMM/dd/yyyy" @selected='disableDatesForcheckOut()' :disabledDates="disabledDates" v-model="check_in" id="hotel_check_in"  class="vue-date"></datepicker>
                                        </div>
                                    </div>
                                    <div class="row mb-3">
                                        <div class="col-md-3  text-left p-0">
                                            <label>Check Out</label>
                                        </div>
                                        <div class="col-md-9">
                                            <datepicker placeholder="Select Check Out" format="MMM/dd/yyyy" :open-date="openDate" :disabledDates="disabledDatesCheckOut" v-model="check_out" id="hotel_check_out"  class="vue-date"></datepicker>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-3  text-left p-0">
                                            <label>Rooms</label>
                                        </div>
                                        <div class="col-md-9">
                                            <input class=" " type="number" min="1" v-on:blur="checkInteger()" v-model="room_numbers">
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-3  text-left p-0">
                                            <label>No. of Guests</label>
                                        </div>
                                        <div class="col-md-9">
                                            <input class=" " type="number" min="1" v-on:blur="checkInteger()"  v-model="guests">
                                        </div>
                                    </div>
                                    <div class="row ">
                                        <div class="col-lg-4 offset-lg-4 col-md-3 offset-md-9 ">
                                            <button class="btn " v-on:click="searchHotels()">Search</button>
                                        </div>
                                    </div>
                                </section>
                            </div>
                        </div>
                    </div>
                        <div class="container-fluid pl-0">
                            <div class="row ">
                                <div class="green_chart">
                                    <div class="col-lg-7 offset-lg-4 ">
                                        <div class="row mt-5 text-center">
                                            <div class="col-lg-7">
                                                <span class="text flex-left">Learn About Our Personalized <br> Planning Concierge Service</span>
                                            </div>
                                            <div class="col-lg-4">
                                                <router-link to="/personalized"><button>Learn More</button></router-link>
                                            </div>
                                        </div>

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
    import moment from 'moment';
    import footer from "@/components/layout_components/Footer";
    import header from "@/components/layout_components/Header";
    import {configs} from '@/config';
    import Swal from 'sweetalert2';
    import Header from "../components/layout_components/Header";
    import Datepicker from 'vuejs-datepicker';
    export default {
        name: "Dashboard",
        components: {
            Header,
            'Footer': footer,
            Datepicker
        },
        data() {
            return {
                user_data: [],
                user_id:'',
                user_favorite_colleges:[],
                user_favorite_articles:[],
                limit: 3,
                application_days: 0,
                sat_days: 0 ,
                fafsa_days: 0,
                scholarship_days: 0,
                application_year: 0,
                sat_year :0,
                fafsa_year:0,
                scholarship_year:0,
                check_in: '',
                check_out: '',
                hotel_city:[],
                selected_hotel_city_id: '',
                room_numbers: '',
                guests:'',
                uni_name:'',
                uni_city_flag:false,
                uni_city_flag_select:true,
                poi_id:'',
                disabledDates: {
                    to: new Date(Date.now() - 8640000)
                },
                disabledDatesCheckOut:{
                    to: new Date(Date.now() - 8640000)
                },
                openDate:'',

            }
        },
        created(){
            this.openDate = new Date(Date.now());
            let now = moment(new Date()); //todays date
            let now_year = now.year();
            let application_deadline = moment(now_year +'0101','YYYYMMDD'); // another date
            let sat_deadline = moment(now_year +'0601','YYYYMMDD'); // another date
            let fafsa_deadline = moment(now_year +'0630','YYYYMMDD'); // another date
            let scholarship_app_due = moment(now_year +'0501','YYYYMMDD'); // another date

            let app_duration = moment.duration(now.diff(application_deadline));
            if(app_duration > 0){
                this.application_year = now_year + 1;
                application_deadline = moment(this.application_year +'0101','YYYYMMDD');
                app_duration = moment.duration(now.diff(application_deadline));
                this.application_days = -(parseInt(app_duration.asDays()));
            }else{
                this.application_year = now_year;
                this.application_days = -(parseInt(app_duration.asDays()));
            }

            let sat_duration = moment.duration(now.diff(sat_deadline));
            if(sat_duration > 0){
                this.sat_year = now_year + 1;
                sat_deadline = moment(this.sat_year +'0601','YYYYMMDD'); // another date
                sat_duration = moment.duration(now.diff(sat_deadline));
                this.sat_days = -(parseInt(sat_duration.asDays()));
            }else{
                this.sat_year = now_year;
                this.sat_days = -(parseInt(sat_duration.asDays()));
            }


            let fafsa_duration = moment.duration(now.diff(fafsa_deadline));
            if(fafsa_duration >0){
                this.fafsa_year = now_year + 1;
                fafsa_deadline = moment(this.fafsa_year +'0630','YYYYMMDD'); // another date
                fafsa_duration = moment.duration(now.diff(fafsa_deadline));
                this.fafsa_days = -(parseInt(fafsa_duration.asDays()));
            }else{
                this.fafsa_year = now_year;
                this.fafsa_days = -(parseInt(fafsa_duration.asDays()));
            }

            let scholarship_duration = moment.duration(now.diff(scholarship_app_due));
            if(scholarship_duration >0){
                this.scholarship_year = now_year + 1;
                scholarship_app_due = moment(this.scholarship_year +'0501','YYYYMMDD'); // another date
                scholarship_duration = moment.duration(now.diff(scholarship_app_due));
                this.scholarship_days = -(parseInt(scholarship_duration.asDays()));
            }else{
                this.scholarship_year = now_year;
                this.scholarship_days = -(parseInt(scholarship_duration.asDays()));
            }


            if(localStorage.getItem('scv_user_token')){
                this.user_id = localStorage.getItem('scv_user_id');
            }else{
                this.$router.push('/login');
            }
            Axios.get(configs.url + 'api/get_cities').then(resp=>{
                this.hotel_city = resp.data;
            });

            if(this.user_id !== ''){
                let params = new URLSearchParams();
                params.append("id", this.user_id);


                    let config = {
                    headers: { 'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'}
                };

                Axios.post(configs.url + 'api/get_user_data', params,config).then(resp=>{
                    this.user_data = resp.data[0];
                });

                Axios.post(configs.url + 'api/get_favorite_college' , params,config).then(resp=>{
                    this.user_favorite_colleges = resp.data;
                    // console.log(this.user_favorite_colleges);

                });

                Axios.post(configs.url + 'api/user_favorite_articles', params, config).then(resp=>{

                    let user_favorite_articles = resp.data.slice();

                    let promises = [];
                    resp.data.forEach((article, index) => {
                        let url="https://smartcollegevisit.com/wp-json/wp/v2/posts/"+article.article_id;
                        promises[index] =  Axios.get(url)
                            .then(res=>{
                                res.data.title.rendered = res.data.title.rendered.replace(/&#8217;/g ,"'").replace(/&#038;/g ,"&").replace(/&#8216;/g ,"'").replace(/&#8211;/g ,"-").replace(/&#8230;/g ,"...").replace(/&#8220;/g ,'"').replace(/&#8221;/g ,'"');
                                resp.data.forEach((article_child,id_index)=> {
                                    if(res.data.id === article_child.article_id){
                                        user_favorite_articles[id_index] = res.data;
                                    }
                                });
                            });

                    });
                    Promise.all(promises).then(items => {
                        let proms = [];
                        user_favorite_articles.forEach((data, index) => {
                            if(data.featured_media!==0){
                                proms[index] =  Axios.get('https://smartcollegevisit.com/wp-json/wp/v2/media/'+data.featured_media)
                                    .then(res=>{
                                        data.jetpack_featured_media_url = res.data.media_details.sizes.full.source_url;
                                    });
                            }
                        });
                        Promise.all(proms).then(items => {
                            this.user_favorite_articles = user_favorite_articles;
                        });

                    });
                });
            }
            if(configs.cities.length <= 0){
                Axios.get(configs.url + 'api/get_cities').then(resp=>{
                    configs.cities = resp.data;
                    // console.log(configs.cities);
                });
            }


        },
        mounted(){
            if (configs.selected_college_city!=='')
            {
                Swal.close();
                $('a[href="#trip_planner"]').tab('show');
                this.uni_name=configs.selected_college_city;
                configs.selected_college_city='';
                this.uni_city_flag = true;
                this.uni_city_flag_select=false;

            }
            let self= this;
            $('.vue-date input[type=text]').addClass('date_picker');
            $('.date_picker').css({"height":"30px","width":"100%","padding": ".375rem .75rem","border": "1px solid #001D3D","border-radius": "0px"});

            $('.hotel_city_dropdown').select2({
                "placeholder" : 'Search City',
                "val" : null,
                width: '100%',
                minimumInputLength: 2,
                ajax: {
                    url: configs.url + 'api/city_by_name',
                    dataType: 'json',
                    processResults: function (data) {
                        let formated_data=[];
                        for(let res of data){
                            let obj={
                                id:res.city_id,
                                text:res.city+' , '+res.state,
                            };
                            formated_data.push(obj);
                        }
                        return {
                            results: formated_data
                        };
                    },
                },
            }).on("select2:select", function (e) {
                self.selected_hotel_city_id = e.params.data.id;
            });
            $('.select2-container--default').css({"width" : "100%"});
            $('.select2-container--default .select2-selection--single .select2-selection__rendered ').css({"text-align" : "left"});

            $('.select2-selection--single').css({"height": "30px","border-radius":"0px", "color": "#001D3D", "width" : "100%"});
            $('.select2-results__option').css({"color": "#001D3D"});
            $('.select2-selection__rendered').css({"color": "#001D3D"});


        },
        methods:{
            checkInteger(){
                if(this.guests <= 0 && this.guests !== ''){
                    this.guests = '';
                    Swal.fire({
                        title: '<span style="color : red">Guest</span>',
                        text : "Number of Guest should be greater than '0'"
                    });
                }
                if(this.room_numbers <= 0 && this.room_numbers!==''){
                    this.room_numbers = '';
                    Swal.fire({
                        title: '<span style="color : red">Rooms</span>',
                        text : "Number of Rooms should be greater than '0'"
                    });
                }
            },
            disableDatesForcheckOut(){
                this.check_out = '';
                let self = this;
                setTimeout(function(){
                    let newDate = self.check_in.setDate(self.check_in.getDate() + 1);
                    self.disabledDatesCheckOut.to = new Date(newDate - 8640000);
                    self.openDate = new Date(newDate);
                }, 300);
            },
            removeFavoriteCollege(college_id){

                let params = new URLSearchParams();
                params.append("user_id", this.user_id);
                params.append("uni_id", college_id);


                let config = {
                    headers: { 'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'}
                };

                Axios.post(configs.url+ 'api/remove_favorite',params,config).then(resp=>{
                    let i = 0;
                    for(let college of this.user_favorite_colleges){
                        if(college.college_id === college_id){
                            this.user_favorite_colleges.splice(i , 1);
                        }
                        i++;
                    }
                    Swal.fire('SUCCESS!','This College has been removed from your Favorites!','success');
                })
            },

            removeFavoriteArticles(id){

                let params = new URLSearchParams();
                params.append("user_id", this.user_id);
                params.append("article_id", id);


                let config = {
                    headers: { 'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'}
                };

                Axios.post(configs.url+ 'api/remove_favorite_article',params,config).then(resp=>{
                    let i = 0;
                    for(let articles of this.user_favorite_articles){
                        if(articles.id === id){
                            this.user_favorite_articles.splice(i , 1);
                        }
                        i++;
                    }
                    Swal.fire('SUCCESS!','This Article has been removed from your Favorites!','success');
                })
            },
            searchHotels(){

                if(this.uni_city_flag_select) {
                    if (this.check_in !== '' && this.check_out !== '' && this.room_numbers && this.guests !== '' && this.selected_hotel_city_id !== '') {
                        this.check_in = moment(this.check_in).format('MM DD YYYY');
                        let chkIn = this.check_in.split(' ');
                        this.check_in = '';
                        for (let i of chkIn) {
                            this.check_in += '%2F' + i;
                        }
                        this.check_in = this.check_in.replace('%2F', '');
                        this.check_out = moment(this.check_out).format('MM DD YYYY');
                        let chkOut = this.check_out.split(' ');
                        this.check_out = '';
                        for (let i of chkOut) {
                            this.check_out += '%2F' + i;
                        }
                        this.check_out = this.check_out.replace('%2F', '');

                        let new_link = 'http://hotels.smartcollegevisit.com/hotels/results/?check_in='
                            + this.check_in + '&check_out=' + this.check_out + '&rooms=' + this.room_numbers + '&adults=' + this.guests + '&city_id='
                            + this.selected_hotel_city_id + '&refid=2547';
                        window.open(new_link, "_blank");

                        this.check_in = '';
                        this.check_out = '';
                        this.room_numbers = '';
                        this.guests = '';
                    } else {
                        Swal.fire({
                            text: "All fields are required!"
                        });
                    }
                }else{
                        Axios.post(configs.url + 'api/get_hotel_city', {
                            "name": this.uni_name
                        }).then(resp => {
                            if(resp.data[0] !== undefined){
                                this.poi_id = resp.data[0].poiid_ppn;
                            }
                                if (this.check_in !== '' && this.check_out !== '' && this.room_numbers && this.guests !== '') {
                                    if (this.poi_id !== '') {
                                        this.check_in = moment(this.check_in).format('MM DD YYYY');
                                        let chkIn = this.check_in.split(' ');
                                        this.check_in = '';
                                        for (let i of chkIn) {
                                            this.check_in += '%2F' + i;
                                        }
                                        this.check_in = this.check_in.replace('%2F', '');
                                        this.check_out = moment(this.check_out).format('MM DD YYYY');
                                        let chkOut = this.check_out.split(' ');
                                        this.check_out = '';
                                        for (let i of chkOut) {
                                            this.check_out += '%2F' + i;
                                        }
                                        this.check_out = this.check_out.replace('%2F', '');

                                        let new_link = 'http://secure.rezserver.com/hotels/results/?refid=2547&poi_id=' + this.poi_id + '&radius=5&check_out=' + this.check_out + '&check_in=' + this.check_in + '&adults=' + this.guests + '&rooms=' + this.room_numbers;

                                        window.open(new_link, "_blank");

                                        this.check_in = '';
                                        this.check_out = '';
                                        this.room_numbers = '';
                                        this.guests = '';
                                    } else {
                                        let self = this;

                                        Swal.fire({
                                            text : "Sorry, no accommodations could be found. Please try a manual search.",
                                            showCancelButton: true,
                                            confirmButtonText: 'OK',
                                            cancelButtonText: 'Cancel'
                                        }).then((result) => {
                                            if (result.value) {
                                                self.$router.push('/manual_search')
                                            }
                                        });
                                    }
                                }else {
                                    Swal.fire({
                                        text: "All fields are required!"
                                    });
                                }

                        });
                    }

            },

            activaTab(college_name){
                this.uni_city_flag = true;
                this.uni_city_flag_select=false;
                this.uni_name=college_name;
                $('a[href="#trip_planner"]').tab('show');
            },
        }

    }
</script>

<style scoped>


    @media only screen and (max-width: 600px) {
        .header {
            background-image: none !important;
            background-color: #001D3D;
        }
        .hotel_div button{
            width: 100% !important;
        }
        .green_chart{
            background-image: none !important;
            background-color: #01A135;
        }

    }
    #main_content {
        margin: 40px;
    }

    .head-line{
    }
    .head-line span{
        color: #0D64CC;
        font-size: 24px;
    }
    .green_chart .text{
        font-size: 18px;
        color: #fff;
        font-weight: bold;
    }
    .green_chart{
        background-image: url("../../public/assets/img/greenChart.png");
        background-size: cover;
        background-repeat: no-repeat;
        width: 100%;
        padding: 40px 0px;
        height: 275px;
    }
    .green_chart button{
        background-color: #0D64CC;
        color: #fff;
        padding: 10px;
        border-radius: 2px;
        border:1px solid #0D64CC;
        cursor: pointer;
    }

    .hotel_div {
        background-color: #001D3D;
        padding:35px 30px;
    }

    .hotel_div h2 {
        color: #01A135;
        margin-bottom: 30px;
    }

    .hotel_div input {
        width: 100%;
        height: 30px;
        margin-bottom: 20px;
    }

    .hotel_div label {
        color: #fff;
        font-size: 14px;
    }

    .hotel_div button {
        width: 132px;
        background-color: #01A135;
        color: #fff;
        border-radius: 0px;
    }

    .user-name-banner
    {
        background: #0D64CC;
        z-index: 999;
        height: 145px;
        margin-top: -5%;
        max-width: 93%;
    }

    .user-name .name
    {
        color: #fff;
        text-align: center;
        margin-top: 1%;
        font-weight: bold;
    }
    .user-name .edit_btn{
        background-color: #001D3D;
        font-size: 11px;
        color: #fff;
    }
    .number
    {
        border-bottom: 2px dashed #01A135;
        border-top: 2px dashed #01A135;
        padding: 3% 3%;
        width: fit-content;
    }
    .favorite-banner
    {
        background: #001D3D;
        color: #fff;
        width: 100%;
        height: 90px;
    }
    .favorite-banner h2{
        font-weight: bold;
        text-align: center;
        padding-top: 29px;
        line-height: 32px;
    }
    .btn-list
    {
        list-style: none;
    }
    .btn-list .btn
    {
        display: inline-block;
        margin-left:10%;
    }
    .btn-list li:last-child
    {
        margin: 0;
    }

    .article
    {
        margin: 40px 0px;
    }

    .article ul
    {
        list-style: none;
        padding: 0;
        width: 100%;
        margin-top: 10px;
    }
    .article ul .tag-list
    {
        background-color: #001D3D;
        margin-right: 1.5%;
        padding: 0px 15px;
        display: inline-block;
        color: #FFFFFF;

    }
    .article ul .btn-list
    {
        display: inline-block;
        color: #FFFFFF;
        padding-right: 5%;
    }
    .arti{
        height: 250px;
        max-width: 250px;
        margin: 0;
    }
    .arti a:hover
    {
        text-decoration: none;
    }
    .art{
        background-repeat: no-repeat;
        height: 250px;
        background-size:cover;
    }
    .article_title{
        width: 100%;
        margin: 0 auto;
        height: 100%;
        font-size: 18px;
        color: #fff;
        font-weight: bold;
    }
    .article_title span{
        position: relative;
        top: 20%;
    }

    .article1
    {
        margin: 40px 0px;
    }
    .article1 ul
    {
        list-style: none;
        padding: 0;
        width: 100%;
        margin-top: 10px;
    }
    .article1 ul .tag-list
    {
        background-color: #0D64CC;
        margin-right: 1.5%;
        padding: 0px 15px;
        display: inline-block;
        color: #FFFFFF;

    }
    .article1 ul .btn-list
    {
        display: inline-block;
        color: #FFFFFF;
        padding-right: 5%;
    }
    .view-more-uni
    {
        margin-bottom: 12%;
        text-align: center;
    }
    .view-more-uni a
    {
        border-bottom: 2px dashed #01A035;
    }
    .view-more-uni a:hover
    {
        text-decoration: none;
    }
    .view-more
    {
        margin-bottom: 5%;
        text-align: center;
    }
    .view-more a
    {
        border-bottom: 2px dashed #01A035;
    }
    .view-more a:hover
    {
        text-decoration: none;
    }

    .bottom-margin
    {
        margin-bottom: -4%;
    }
    .top-margin
    {
        margin-top: -4%;
    }
    .btn-uni
    {
        list-style: none;
        padding: 0;
        width: 95%;
        text-align: center;
    }
    .btn-uni button{
        width: 95%;
        margin-top: 5px;
    }


    .bottom
    {
        margin: 0;
        background-color: #FFFFFF;
        padding: 10px 0px;
    }
    .btn-custom
    {
        background-color: #001D3D !important;
        border: 1px solid #001D3D;
        color: #FFFFFF;
    }
    .btn-info
    {
        background-color: #0D64CC !important;
        border: 1px solid #0D64CC !important;
    }
    .btn-success
    {
        background-color: #01A035 !important;
        border: 1px solid #01A035 !important;
    }
    .light-blue
    {
        background-color: #EBF7FF;
    }
    .blue
    {
        color: #0D64CC;
    }
    .green
    {
        color: #01A135;
    }
    .white
    {
        background: #FFFFFF;
        margin: 100px 0px 50px 0px;
        padding: 50px 10px 10px 10px;

    }
    .white h3
    {
        height: 99px;
        font-size: calc(16px + 1vw);
    }

    .white .line
    {
        border-top: 4px dashed #01A035;
        width: 35%;
        margin: 9% auto;

    }
    .no_records{
        height:172px;
    }
    .no_records .msg{
        margin-top: 70px;
    }


.header {
background-color: #001D3D;
    min-height: 34vw;

}
.nav-tabs {
margin-top: -30px;
width: 100%;
}


.nav-tabs a {
background-color: #EBF7FF;
height: 77px;
color: #0D64CC;
font-size: 20px;
padding: 20px 0px;
border-radius: 0px;
border: 1px solid #0D64CC;
}

.nav-tabs .nav-item.show .nav-link, .nav-tabs .nav-link.active {
    background-color: #fff;
    border: 1px solid #0D64CC;
    color: #0D64CC;

}
.tab_cell ul li{
font-size: 14px;
}

.tab_div ul {
list-style: none;
width: 100%;
}


.tab_info {
width: 100%;
margin-top: 4vh;
}

.tab_cell li {
margin-top: 30px;
}

.tab_cell {
padding: 20px;
    display: block;
    text-align: -webkit-center;
}

.tab-content {
margin-top:20px;
}


h1, h2, h3, h4, h5, h6, p, span, label, select, div,a,th,tr,thead,tbody, option, input, button {
font-family: Montserrat !important;
}




</style>