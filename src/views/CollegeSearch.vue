<template>
    <section>
        <Header @click="getFilteredResult"></Header>
        <div class="main_content row">
            <div class="col-md-12 p-0">
                <div class="row">
                    <h1>UChoose College Search</h1>
                </div>
                <div class="row">
                    <div class="col-lg-12" style=" padding: 0">
                        <img class="ml-1 align" style="float: left;" src="../../public/assets/img/header/line.png" alt="">
                    </div>
                </div>
                <div class="row range_sliders text-left">
                    <div class="col-md-3 my-2">
                        <div class=" range-field">
                            <span><b>Cost</b><i class="fas fa-info-circle ml-1" data-toggle="tooltip" data-placement="top" title="Use the slider to find the tuition range that fits your budget, or just enter the values you want to search for in the fields below." ></i></span>
                            <form class=" w-100">
                                ​
                                ​
                                <div id="cost-range ">
                                    <div class="sliders_step1">
                                        <div class="cost-slider-range"></div>
                                    </div>
                                </div>
                            </form>
                            <div class="row from_to">
                                <div class="col-md-3 p-0">
                                    <label>From: </label>
                                </div>
                                <div class="col-md-3 p-0">
                                    <input type="text" v-model="cost_from" class="form-control">
                                </div>
                                <div class="col-md-2 offset-md-1 p-0">
                                    <label>To: </label>
                                </div>
                                <div class="col-md-3 p-0">
                                    <input type="text" v-model="cost_to" class="form-control">
                                </div>
                            </div>
                        </div>

                ​
                        </div>
                    <div class="col-md-1"></div>
                        <div class="col-md-3 my-2">
                            <div class="mx-auto range-field">
                                <span><b>GPA</b><i class="fas fa-info-circle ml-1" data-toggle="tooltip" data-placement="top" title="Enter the GPA range or use the slider to get results on the average GPA."></i></span>
                                <form class="  w-100">
                                    ​
                                    <div id="time-range ">
                                        <div class="sliders_step1">
                                            <div class="slider-range"></div>
                                            <!--                          <div id="slider-range1"></div>-->
                                        </div>
                                    </div>
                                </form>
                                <div class="row from_to">
                                    <div class="col-md-3 p-0">
                                        <label>From: </label>
                                    </div>
                                    <div class="col-md-3 p-0">
                                        <input type="text"  v-on:blur="gpaLimit()"  v-model=" gpa_from" class="form-control">
                                    </div>
                                    <div class="col-md-2 offset-md-1 p-0">
                                        <label>To: </label>
                                    </div>
                                    <div class="col-md-3 p-0">
                                        <input type="text"  v-on:blur="gpaLimit()"  v-model="gpa_to" class="form-control">
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div class="col-md-1"></div>
                            <div class="col-md-3 my-2">
                                <div class="range-field">
                                    <span><b>Enrollment</b><i class="fas fa-info-circle ml-1" data-toggle="tooltip" data-placement="top" title="Choose the size college that's right for you! Use the slider or enter the values for your search."></i></span>
                                    <form class=" w-100">
                                        ​
                                        <div id="enrollment-range ">
                                            <div class="sliders_step1">
                                                <div class="enrollment-slider-range"></div>
                                                <!--                          <div id="slider-range1"></div>-->
                                            </div>
                                        </div>
                                    </form>
                                    <div class="row from_to">
                                        <div class="col-md-3 p-0">
                                            <label>From: </label>
                                        </div>
                                        <div class="col-md-3 p-0">
                                            <input type="text" v-model="enrollment_from" class="form-control">
                                        </div>
                                        <div class="col-md-2 offset-md-1 p-0">
                                            <label>To: </label>
                                        </div>
                                        <div class="col-md-3 p-0">
                                            <input type="text" v-model="enrollment_to" class="form-control">
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                <div class="row  text-left custom_row">

                    <div class="col-md-4 my-2">
                        <span><b>Major</b></span>
                        <div class=" my-2">
                            <select class="major_dropdown" name="state">
                                <option></option>
                                <option :selected="(selectedMajor === 'Undecided')? 'selected': ''">Undecided</option>
                                <option v-for="(major,index) in majors" :key="index" :value="major.MajorTitle" :selected="(selectedMajor === major.MajorTitle)? 'selected': ''">
                                    {{major.MajorTitle}}
                                </option>
                            </select>

                        </div>
                    </div>
                    <div class="col-md-4 my-2">
                        <span><b>State</b></span>
                        <div class="my-2">
                            <select class="state_dropdown" name="state">
                                <option></option>
                                <option v-for="(state,index) in usa_states" :key="index" :value="state.state_code" :selected="(selected_state_abbreviation === state.state_code)? 'selected': ''">
                                    {{state.state}}
                                </option>
                            </select>

                        </div>
                    </div>
                    <div class="col-md-4 my-2">
                        <span><b>City</b></span>
                        <div class="my-2">
                            <select class="city_dropdown" name="state">
                                <option v-if="usa_cities.length > 0" value = ''>All Cities</option>
                                <option v-for="(opt,index) in usa_cities" :key="index" :value="opt.city" :selected="(selected_city_name === opt.city)? 'selected': ''">{{opt.city}}
                                </option>
                            </select>
                        </div>
                    </div>
                </div>


                <!--<div class="row major_sports">-->
                <!--<div>-->
                <div class="row custom_row text-left">
                    <div class="col-md-4 text-left">
                        <span><b>University Preference</b></span>

                        <div id="paymentContainer" name="paymentContainer" class="paymentOptions">

                            <div id="payCC" class="floatBlock">
                                <label class="custom-clr" for="public"> <input name="public" id="public" value="1"
                                    v-model="selected_prefrence"
                                    type="radio"/> Public </label>
                            </div>

                            <div id="payInvoice" class="floatBlock">
                                <label class="custom-clr" for="private"> <input type="radio" name="public" id="private"
                                    value="2" v-model="selected_prefrence"/>
                                    Private </label>
                            </div>


                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col-md-3 offset-md-3 col-sm-12 col-xs-12 search_btn text-left">
                        <button class="btn"   v-on:click="filterRecord()">Search</button>
                    </div>
                    <div class="col-md-3 col-sm-12 col-xs-12 reset_btn text-left">
                        <button class="btn"   v-on:click="resetFilters()">Reset</button>
                    </div>
                </div>

                <hr class="hr-line">

                <div class="row mt-5 result">
                    <div class="col-md-12 text-left">
                        <div class="row my-3">
                            <div class="col-md-12">
                                <span><b>UChoose College Search Results</b></span>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-12">
                                <div id="search-table" class="table-responsive ">
                                    <table id="table-search" class="table table-striped text-center search_table" cellspacing="0">
                                        <thead>
                                        <tr>
                                            <th>#</th>
                                            <th>College Name</th>
                                            <th>Cost</th>
                                            <th>GPA</th>
                                            <th>Enrollment</th>
                                            <th>Major</th>
                                            <th>Public/<br>
                                                Private
                                            </th>
                                            <th>Action</th>
                                        </tr>
                                        </thead>
                                        <tbody v-if="filterSearch">
                                        <tr v-for="(result , index) in college_result_data.data" :key="index">
                                            <td>{{pagination_from + index}}</td>
                                            <td class="text-left">
                                                <router-link :to="'/college_profile?id='+result.id">
                                                    {{result.college_name}}
                                                </router-link>
                                            </td>
                                            <td class="text-left"><b>In state:</b> {{formatPrice(result.in_state_tuition)}}<br>
                                                <b>Out of State:</b> {{formatPrice(result.out_state_tuition)}}
                                            </td>
                                            <td class="text-left">{{result.gpa}}</td>

                                            <td class="text-left">{{formatNumber(result.enrollment)}}</td>
                                            <td class="text-left">

                                                <p v-for="(major,index) in  result.majors.slice(0,2)" :key="index">

                                                    {{major.major}}</p>
                                                <button v-if="result.majors.length > 2" type="button" :id="'btn'+index" v-on:click="viewmoreindex(index)" class="btn view"  data-toggle="collapse" :data-target="'#'+index">view more</button>
                                                <div :id="index" class="collapse">
                                                    <p v-for="(major,index) in  result.majors.slice(2)" :key="index">

                                                        {{major.major}}</p>
                                                </div>


                                            </td>
                                            <td class="text-left">{{result.public_private}}</td>
                                            <td class="btn-align">
                                                <button class="btn" v-if="!user_favorite_colleges.includes(result.id)" v-on:click="addToFavorite(result.id)"> Add to Favorites</button><br>
                                                <button class="btn" v-if="user_favorite_colleges.includes(result.id)" v-on:click="removeToFavorite(result.id)"> Remove from Favorites</button>
                                                <router-link :to="'/college_profile?id='+result.id"><button class="btn mt-1 btn-success"> View School Details</button></router-link>
                                            </td>
                                        </tr>
                                        </tbody>
                                        <tbody v-if="!filterSearch">
                                        <tr v-for="(result , index) in college_result_data_search" :key="index">
                                            <td>{{index + 1}}</td>
                                            <td class="text-left">
                                                <router-link :to="'/college_profile?id='+result.id">
                                                    {{result.college_name}}
                                                </router-link>
                                            </td>
                                            <td class="text-left"><b>In state:</b> {{formatPrice(result.in_state_tuition)}}<br>
                                                <b>Out of State:</b> {{formatPrice(result.out_state_tuition)}}
                                            </td>
                                            <td class="text-left">{{result.gpa}}</td>

                                            <td class="text-left">{{formatNumber(result.enrollment)}}</td>
                                            <td class="text-left">
                                                <p v-for="(major,index) in  result.major.slice(0,2)" :key="index">

                                                    {{major.MajorTitle}}</p>
                                                <button v-if="result.major.length > 2" type="button" class="btn view" v-on:click="viewmore()" data-toggle="collapse" data-target="#demo">view more</button>
                                                <div id="demo" class="collapse">
                                                    <p v-for="(major,index) in  result.major.slice(2)" :key="index">

                                                        {{major.MajorTitle}}</p>
                                                </div>

                                            </td>
                                            <td class="text-left">{{result.public_private}}</td>
                                            <td class="btn-align">
                                                <button class="btn" v-if="!user_favorite_colleges.includes(result.id)" v-on:click="addToFavorite(result.id)"> Add to Favorites</button><br>
                                                <button class="btn" v-if="user_favorite_colleges.includes(result.id)" v-on:click="removeToFavorite(result.id)"> Remove from Favorites</button>
                                                <router-link :to="'/college_profile?id='+result.id"><button class="btn mt-1 btn-success"> View School Details</button></router-link>
                                            </td>
                                        </tr>
                                        </tbody>

                                    </table>

                                </div>
                                <div class="loading_text text-center w-100" v-if="loading">
                                    <span>Please Wait...</span>
                                </div>
                                <pagination v-if="filterSearch" :data="college_result_data" align="center" :limit = limit size="small"  @pagination-change-page="filterRecord">
                                <span class="prev_nxt" slot="prev-nav">&lt; Previous</span>
                                <span class="prev_nxt" slot="next-nav">Next &gt;</span>
                                </pagination>
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

    import footer from "@/components/layout_components/Footer";
    import header from "@/components/layout_components/CollegeSearchHeader";
    import Axios from 'axios';
    import {configs} from '@/config';
    import VueSlideBar from 'vue-slide-bar';
    import * as numeral from "numeral";
    import Swal from 'sweetalert2';
    var pagination= require('laravel-vue-pagination');

    export default {
        name: "collegeSearch",
        components: {
            'Footer': footer,
            'Header': header,
            VueSlideBar,
            pagination,
        },
        data() {
            return {
                limit:2,
                college_result_data: {},
                college_result_data_search :[],
                usa_states: [],
                usa_cities: [],
                selected_state: '',
                selected_state_abbreviation: '',
                selected_city_name: '',
                majors: [],
                selectedMajor: '',
                selected_prefrence: '',
                majorCode: '',
                cost_from:'$'+  0.00,
                cost_to: '$'+ 70000.00,
                gpa_from: 0.0,
                gpa_to: 4,
                enrollment_from: 0,
                enrollment_to:  60000,
                ids: [],
                filterSearch : false,
                slider: {
                    lineHeight: 15,
                    processStyle: {
                        backgroundColor: '#AEDEFF'
                    }
                },
                loading :false,
                pagination_from:1,
                user_favorite_colleges:[],



            }
        },
            methods: {

            getFilteredResult(v) {
                this.filterSearch = false;
                this.loading = true;
                this.college_result_data_search = [];
                this.college_result_data = {};
                Axios.get(configs.url + 'api/search_college/' + v.data)
                    .then(resp => {

                        this.loading = false;
                        if (resp.data.length ===0)
                        {
                            Swal.fire({
                                text : "No match found. Please refine your search criteria and try again."
                            });
                        }else{
                            this.college_result_data_search = resp.data;

                            for (let data of this.college_result_data_search) {
                                this.ids.push(data.id);
                                if (data.public_private === 1) {
                                    data.public_private = "Public";
                                } else if (data.public_private === 2) {
                                    data.public_private = "Private not-for-profit";
                                } else if (data.public_private === 3) {
                                    data.public_private = "Private for-profit";
                                } else {
                                    data.public_private = "N/A";
                                }
                            }
                            $('html, body').animate({
                                scrollTop: $("#search-table").offset().top
                            }, 1000);
                        }


                    });
            },
            getSelectedState(abbr) {
                this.selected_state_abbreviation = abbr;
                this.usa_cities = [];

                let params = new URLSearchParams();
                params.append("state", abbr);

                let config = {
                    headers: { 'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'}
                };

                Axios.post(configs.url + 'api/get_state_cities', params,config).then(resp => {
                    this.usa_cities = resp.data;
                });
            },
            getSelectedCity(city) {
                this.selected_city_name = city;
            },
            getSelectedMajor(majorCode) {
                this.majorCode = majorCode;
            },
            setCostValues(value) {
                let costValue = parseInt(value);
                if (costValue !== 70000) {
                    this.cost_from = costValue;
                    this.cost_to = costValue + 5000;
                } else {
                    this.cost_from = 69500;
                    this.cost_to = 70000;

                }
            },
            setCost(lValue, uValue) {
                this.cost_from = this.formatPrice(lValue);
                this.cost_to =  this.formatPrice(uValue);
            },
            setEnrollment(lValue, uValue) {
                this.enrollment_from = this.formatNumber(lValue);
                this.enrollment_to = this.formatNumber(uValue);
            },
            setlowerGpaValue(value) {
                this.gpa_from = this.formatGPA(value);
            },
            setupperGpaValue(value) {
                this.gpa_to = this.formatGPA(value);
            },
            setGpaValues(value) {
                let gpaValue = parseInt(value);
                if (gpaValue !== 4) {
                    this.gpa_from = gpaValue;
                    this.gpa_to = gpaValue + 0.5;
                } else {
                    this.gpa_from = 3.5;
                    this.gpa_to = 4;
                }
            },
            setEnrollmentValues(value) {
                let enrollment_value = parseInt(value);
                if (value !== 60000) {
                    this.enrollment_from = enrollment_value;
                    this.enrollment_to = enrollment_value + 5000;
                } else {
                    this.enrollment_from = 59500;
                    this.enrollment_to = 60000;
                }
            },
            formatPrice(value) {
                if(value !== null){
                    return '$'+numeral(value).format('0,0.00');
                }
            },
                formatNumber(value) {
                if(value!==null){
                    return numeral(value).format('0,0');
                }
            },
                formatGPA(value){
                return numeral(value).format('0.0');
                },
            filterRecord(page) {
                this.loading = true;
                this.filterSearch = true;
                this.college_result_data_search = [];
                this.college_result_data = {};
                let data = [{}];

                let params = new URLSearchParams();

                let config = {
                    headers: { 'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'}
                };

                if (this.majorCode !== '') {
                    if (typeof page === 'undefined') {
                        page = 1;
                    }

                    if(this.majorCode === 'Undecided'){
                        configs.selectedMajor = this.majorCode;
                    }else{

                        params.append("data[0][major]", this.majorCode);
                        configs.selectedMajor = this.majorCode;
                    }

                if (this.selected_state_abbreviation !== '') {
                    params.append("data[0][state]", this.selected_state_abbreviation);
                    configs.selected_state_abbreviation = this.selected_state_abbreviation;
                }

                if (this.selected_city_name !== '') {
                    params.append("data[0][city]", this.selected_city_name);
                    configs.selected_city_name = this.selected_city_name;
                }
                if (this.selected_prefrence !== '') {
                    params.append("data[0][preference]", this.selected_prefrence);
                    configs.selected_prefrence = this.selected_prefrence;
                }

                    params.append("data[0][cost][from]", this.cost_from);
                    params.append("data[0][cost][to]", this.cost_to);

                configs.cost_from = this.cost_from;
                configs.cost_to = this.cost_to;

                    params.append("data[0][gpa][from]", this.gpa_from);
                    params.append("data[0][gpa][to]", this.gpa_to);

                configs.gpa_from = this.gpa_from;
                configs.gpa_to = this.gpa_to;

                    params.append("data[0][enrollment][from]", this.enrollment_from);
                    params.append("data[0][enrollment][to]", this.enrollment_to);

                configs.enrollment_from = this.enrollment_from;
                configs.enrollment_to = this.enrollment_to;


                Axios.post(configs.url + 'api/filter_search?page='+page,params,config).then(resp => {
                    if (resp.data.data.length === 0)
                    {
                        this.loading = false;
                        Swal.fire({
                            text : "No match found. Please refine your search criteria and try again."
                        });
                    }else{



                        $('html, body').animate({
                            scrollTop: $("#search-table").offset().top
                        }, 1000);

                        this.college_result_data = resp.data;
                        this.pagination_from = resp.data.from;

                        for (data of this.college_result_data.data) {
                            let major = [{}];
                            major[0].MajorTitle = data.major;
                            data.major = major;

                            if (data.public_private === 1) {
                                data.public_private = "Public";
                            } else if (data.public_private === 2) {
                                data.public_private = "Private not-for-profit";
                            } else if (data.public_private === 3) {
                                data.public_private = "Private for-profit";
                            } else {
                                data.public_private = "N/A";
                            }

                        }

                        this.loading = false;
                    }
                });

                }else{
                    this.loading = false;
                    Swal.fire({
                        text : "Select any Major!"
                    });
                }
            },
            viewmore(){
                let value=$('.view').text();
                if (value==='view more')
                {
                    $(".view").html('view less');
                }else
                {
                    $(".view").html('view more');
                }
            },
            viewmoreindex(id){
                let value = $('#btn'+id).text();

                if (value==='view more')
                {
                    $('#btn'+id).html('view less');
                }else
                {
                    $('#btn'+id).html('view more');
                }
            },
            addToFavorite(uni_id){
                if(localStorage.getItem("scv_user_token")){
                    let user_id = localStorage.getItem("scv_user_id");

                    let params = new URLSearchParams();
                    params.append("user_id", user_id);
                    params.append("uni_id", uni_id);

                    let config = {
                        headers: { 'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'}
                    };

                    Axios.post(configs.url+ 'api/add_favorite',params,config)
                        .then(resp=>{
                        this.user_favorite_colleges.push(uni_id);
                        Swal.fire('SUCCESS!','Added To Your Favorites','success');
                    })

                }else{
                    let self=this;
                    Swal.fire({
                        text : "Please create an account or login to add to favorites.",
                        showCancelButton: true,
                        confirmButtonText: 'Login',
                        cancelButtonText: 'Cancel'
                    }).then((result) => {
                        if (result.value) {
                            self.$router.push('/login')
                        }
                    });
                }

            },
            removeToFavorite(college_id){
                let user_id = localStorage.getItem("scv_user_id");

                let params = new URLSearchParams();
                params.append("user_id", user_id);
                params.append("uni_id", college_id);

                let config = {
                    headers: { 'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'}
                };
                Axios.post(configs.url+ 'api/remove_favorite',params,config).then(resp=>{
                    let i = 0;
                    for(let college of this.user_favorite_colleges){
                        if(college === college_id){
                            this.user_favorite_colleges.splice(i , 1);
                        }
                        i++;
                    }
                    Swal.fire('SUCCESS!','This College has been removed from your Favorites!','success');
                })

            },
            resetFilters(){
                let self = this;
                this.selected_prefrence = '';
                this.majorCode = '';
                this.selectedMajor = '';
                this.college_result_data_search = [];
                this.college_result_data = {};
                this.selected_state_abbreviation = '';
                this.selected_city_name = '';
                this.usa_cities = [];
                this.loading = false;

                this.cost_from = '$'+  0.00;
                this.cost_to = '$'+ 70000.00;
                this.gpa_from = 0.0;
                this.gpa_to = 4;
                this.enrollment_from = 0;
                this.enrollment_to =  60000;

                $('.major_dropdown').select2('val', '[]');
                $('.state_dropdown').select2('val', '[]');
                $('.city_dropdown').select2('val', '[]');

                $(".cost-slider-range").slider({
                    range: true,
                    min: 0,
                    max: 70000,
                    step: 5000,
                    values: [0, 70000],
                    slide: function (e, ui) {
                        self.setCost(ui.values[0], ui.values[1])
                    }
                });
                $(".enrollment-slider-range").slider({
                    range: true,
                    min: 0,
                    max: 60000,
                    step: 5000,
                    values: [0, 60000],
                    slide: function (e, ui) {
                        self.setEnrollment(ui.values[0], ui.values[1])
                    }
                });
                $(".slider-range").slider({
                    range: true,
                    min: 0,
                    max: 4,
                    step: 0.5,
                    values: [0,4],
                    slide: function (e, ui) {
                        self.setlowerGpaValue(ui.values[0]);
                        self.setupperGpaValue(ui.values[1])
                    }
                });




            },
            gpaLimit(){
                if(this.gpa_to > 5){
                    this.gpa_to = 5;
                    Swal.fire({
                        title: '<span style="color : red">GPA</span>',
                        text : "'To' should be less or equal to 5"
                    });
                }else if(this.gpa_to <= 0){
                    this.gpa_to = 0.5;
                    Swal.fire({
                        title: '<span style="color : red">GPA</span>',
                        text : "'To' should be greater or equal to 0.5"
                    });
                }
                if(this.gpa_from < 0){
                    this.gpa_from = 0;
                    Swal.fire({
                        title: '<span style="color : red">GPA</span>',
                        text : "'From' should be greater or equal to 0"
                    });
                }else if(this.gpa_from >= 5){
                    this.gpa_from = 4.5;
                    Swal.fire({
                        title: '<span style="color : red">GPA</span>',
                        text : "'From' should be less or equal to 4.5"
                    });
                }

                if(this.gpa_from > this.gpa_to){
                    this.gpa_from = 0;
                    this.gpa_to = 4;
                    Swal.fire({
                        title: '<span style="color : red">GPA</span>',
                        text : "'From' should be less than 'To'"
                    });
                }
            }

        },
        mounted() {
            $(".cost-slider-range").slider({
                range: true,
                min: 0,
                max: 70000,
                step: 5000,
                values: [0, 70000],
                slide: function (e, ui) {
                    self.setCost(ui.values[0], ui.values[1])
                }
            });
            $(".enrollment-slider-range").slider({
                range: true,
                min: 0,
                max: 60000,
                step: 5000,
                values: [0, 60000],
                slide: function (e, ui) {
                    self.setEnrollment(ui.values[0], ui.values[1])
                }
            });
            $(".slider-range").slider({
                range: true,
                min: 0,
                max: 4,
                step: 0.5,
                values: [0,4],
                slide: function (e, ui) {
                    self.setlowerGpaValue(ui.values[0]);
                    self.setupperGpaValue(ui.values[1])
                }
            });
            let self = this;
            console.log(configs.url);
            $('.major_dropdown').select2({
                width: '100%',
                "placeholder" : 'Select any major',
            }).on("select2:select", function (e) {
                self.getSelectedMajor(e.params.data.id);
            });
            $('.state_dropdown').select2({
                "val" : null,
                "placeholder" : 'Select any state',
                width: '100%'
            }).on("select2:select", function (e) {
                self.getSelectedState(e.params.data.id);
            });
            $('.city_dropdown').select2({
                width: '100%'
            }).on("select2:select", function (e) {
                self.getSelectedCity(e.params.data.id);
            });
            $('.select2-container--default').css({"width" : "100%"});
            $('.select2-selection--single').css({"height": "32px", "border": "1px solid #001D3D", "color": "#001D3D", "width" : "100%"});
            $('.select2-results__option').css({"color": "#001D3D"});
            $('.select2-selection__rendered').css({"color": "#001D3D"});
            $('.select2-selection__arrow').children().remove();
            $('.select2-selection__arrow').append("<i class='fa fa-angle-down'>");
            $('.select2-selection').click(function(){
                $(this).children().children().toggleClass("fa-angle-up");
            });
        },
        created() {
            let user_id = '';
            if(localStorage.getItem('scv_user_token')){
                user_id = localStorage.getItem('scv_user_id');
            }
            if(user_id !== ''){

                let params = new URLSearchParams();
                params.append("id", user_id);

                let config = {
                    headers: { 'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'}
                };

                Axios.post(configs.url + 'api/user_favorite_college',params,config).then(resp=>{
                    for(let data of resp.data){
                        this.user_favorite_colleges.push(data.UNITID);
                    }
                });
            }
            if(configs.selectedMajor !== ''){
                this.selectedMajor = configs.selectedMajor;
                this.majorCode = configs.selectedMajor;
                if(configs.selected_state_abbreviation!== ''){
                    this.selected_state_abbreviation = configs.selected_state_abbreviation;
                }
                if(configs.selected_city_name !== ''){
                    this.selected_city_name = configs.selected_city_name;
                    console.log(this.selected_city_name);
                }
                if(configs.selected_prefrence !==''){
                    this.selected_prefrence = configs.selected_prefrence;
                }
                this.cost_from = configs.cost_from;
                this.cost_to = configs.cost_to;
                this.gpa_from = configs.gpa_from;
                this.gpa_to = configs.gpa_to;
                this.enrollment_from = configs.enrollment_from;
                this.enrollment_to = configs.enrollment_to;


                let data = [{}];

                let params = new URLSearchParams();

                let config = {
                    headers: { 'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'}
                };

                let  page = 1;
                this.loading = true;
                this.filterSearch = true;
                this.college_result_data_search = [];
                this.college_result_data = {};

                if(this.majorCode !== 'Undecided'){
                    params.append("data[0][major]", this.majorCode);
                }

                if (this.selected_state_abbreviation !== '') {
                    params.append("data[0][state]", this.selected_state_abbreviation);
                }

                if (this.selected_city_name !== '') {
                    params.append("data[0][city]", this.selected_city_name);
                }
                if (this.selected_prefrence !== '') {
                    params.append("data[0][preference]", this.selected_prefrence);
                }

                params.append("data[0][cost][from]", this.cost_from);
                params.append("data[0][cost][to]", this.cost_to);
                params.append("data[0][gpa][from]", this.gpa_from);
                params.append("data[0][gpa][to]", this.gpa_to);

                params.append("data[0][enrollment][from]", this.enrollment_from);
                params.append("data[0][enrollment][to]", this.enrollment_to);

                Axios.post(configs.url + 'api/filter_search?page='+page,params,config)
                    .then(resp => {
                    if (resp.data.data.length === 0)
                    {
                        this.loading = false;
                        Swal.fire({
                            text : "No Match Found for current search criteria. Please refine your selections and try again."
                        });

                    }else{


                        $('html, body').animate({
                            scrollTop: $("#search-table").offset().top
                        }, 1000);

                        this.college_result_data = resp.data;
                        console.log(this.college_result_data);

                        for (data of this.college_result_data.data) {
                            let major = [{}];
                            major[0].MajorTitle = data.major;
                            data.major = major;

                            if (data.public_private === 1) {
                                data.public_private = "Public";
                            } else if (data.public_private === 2) {
                                data.public_private = "Private not-for-profit";
                            } else if (data.public_private === 3) {
                                data.public_private = "Private for-profit";
                            } else {
                                data.public_private = "N/A";
                            }

                        }
                        this.loading = false;

                    }

                });

            }
            Axios.get(configs.url + 'api/get_major')
                .then(resp => {
                    this.majors = resp.data;
                });

            Axios.get(configs.url + 'api/get_state')
                .then(resp => {
                    this.usa_states = resp.data;
                });
        }
    };
</script>
<style scoped>

    h1, h2, h3, h4, h5, h6, p, span, label, select, div, a, th, tr, thead, tbody, option, input, button {
        font-family: Montserrat !important;
    }

    .main_content {
        margin: 15vh 8vw;
    }

    .main_content {
        color: #0D64CC;
    }

    .range_sliders {
        margin-top: 12px;
    }
    .range-field{
        width: 100%;
    }
    .fa-info-circle{
        color: #0D64CC;
    }

    .major_sports, .state_city, .btn_search, .uni_pref {
        margin-top: 41px;
    }

    .range_sliders span {
    }

    .major_sports span, .state_city span, .uni_pref span, .range_sliders span {
        font-size: 20px;
        color: #001D3D;
    }

    .major_dropdown, .city_dropdown, .state_dropdown {
        width: 90%;
        min-width: 87px;
        text-align: right;
        font-size: 20px;
        background-color: #fff;
        border: 1px solid #001D3D;
        color: #0D64CC;
    }

    .uni_pref label {
        font-size: 20px;
        margin-right: 15px;
        color: #0D64CC;
    }

    .uni_pref input {
        margin-right: 15px;
        height: 15px;
        width: 15px;
        border: 1px solid #001D3D;
    }

    .search_btn button {
        margin-top: 10px;
        height: 55px;
        width: 100%;
        font-size: 22px;
        background-color: #01A135;
        color: #fff;
        border-radius: 0;
        min-width: 165px;
    }
    .reset_btn button{
        margin-top: 10px;
        height: 55px;
        width: 100%;
        font-size: 22px;
        background-color: #b71616;
        color: #fff;
        border-radius: 0;
        min-width: 165px;
    }

    .hr-line
    {
        border-top: 2px dashed #01A135;
    }

    .result span {
        font-size: 25px;
        color: #0D64CC;
    }

    .search_table td, th {
        border: 1px solid #0D64CC;
    }

    .search_table thead {
        background-color: #001D3D;
        color: white;
        font-size: 15px;
    }

    .search_table thead th
    {
        text-align: center;
        vertical-align: middle;
    }

    .search_table tbody {
        color: #001D3D;
        font-size: 15px;
    }

    .search_table tbody a {
        color: #001D3D;
        font-size: 15px;
    }

    .search_table {
        width: 100%;
    }

    .search_table tr td button {
        background-color: #0D64CC;
        color: #fff;
        font-size: 15px;
    }
    .table-striped > tbody > tr:nth-child(2n+1) > td {
        background-color: #AEDEFF;
    }
    .table-striped > tbody > tr:nth-child(2n) > td {
        background-color: #EBF7FF;
    }

    .btn_search button {
        background-color: #fff;
        color: #001D3D;
        border: 1px solid #001D3D;
        min-width: 150px;
        min-height: 55px;
        font-size: 22px;
    }
    .from_to{
        margin-top: 20px;
    }

    .from_to label {
        color: #001D3D;
        font-size: 14px;
    }

    .prev_nxt{
        font-size: 14px !important;
    }

    .from_to input {
        height: 32px;
        color: #001D3D;
        font-size: 12px;
        border: 1px solid #001D3D;
    }


    .floatBlock {
        margin: 0 1.81em 0 0;
    }

    .labelish {
        color: #7d7d7d;
        margin: 0;
    }

    .paymentOptions {
        border: none;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        break-before: always;
        margin: 0 0 2em 0;
    }

    #purchaseOrder {
        margin: 0 0 2em 0;
    }


    .custom_row {
        font-size: 20px;
        color: rgb(0, 29, 61);
        margin-top: 15px;
    }

    .custom-clr {
        color: #0D64CC;
    }
    .fa-angle-up:before{
        display: none;
    }
    .btn-success
    {
        background-color: #01A135 !important;
    }
    .btn-align
    {
        vertical-align: middle;
    }

    @media only screen and (max-width: 600px) {
        .align {
float: unset !important;
        }
    }
    .view
    {
        margin-bottom: 4%;
    }


</style>
