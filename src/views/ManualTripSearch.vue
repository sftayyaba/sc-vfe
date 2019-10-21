<template>
    <section>
    <div class="header">

        <Header/>
        <div class="row extra"></div>
    </div>

        <div class="container">
            <div class="row ">
                <div class="col-md-12">
                    <div class="banner mx-auto">
                        <h2>Plan Your Trip</h2>
                    </div>
                </div>

            </div>
        </div>
        <div class="container my-5">
            <div class="row head-line">
                <div class="col-md-6 offset-md-3 text-center my-auto">

                    <section class="hotel_div">
                        <div class="row">
                            <div class="col-md-12">
                                <h2>Find a Hotel Near Campus</h2>
                            </div>
                        </div>
                        <div class="row mb-3">
                            <div class="col-md-3  text-left p-0">
                                <label>City</label>
                            </div>
                            <div class="col-md-9">
                                <div>
                                    <select class="hotel_city_dropdown1" name="city" >
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
                                <datepicker placeholder="Select Check In" format="MMM/dd/yyyy" @selected='disableDatesForcheckOut()'  :disabledDates="disabledDates" v-model="check_in" id="hotel_check_in"  class="vue-date"></datepicker>
                            </div>
                        </div>
                        <div class="row mb-3">
                            <div class="col-md-3  text-left p-0">
                                <label>Check Out</label>
                            </div>
                            <div class="col-md-9">
                                <datepicker placeholder="Select Check Out" format="MMM/dd/yyyy" :open-date="openDate" :disabledDates="disabledDatesCheckOut"  v-model="check_out" id="hotel_check_out"  class="vue-date"></datepicker>
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
                                <input class=" " type="number" min="1" v-on:blur="checkInteger()" v-model="guests">
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



    <Footer/>
    </section>
</template>

<script>
    import Axios from 'axios';
    import moment from 'moment';
    import footer from "@/components/layout_components/Footer";
    import header from "@/components/layout_components/Header";
    import Datepicker from 'vuejs-datepicker';
    import {configs} from '@/config';
    import Swal from 'sweetalert2';
    export default {
        name: "manualTripSearch",
        components: {
            'Footer': footer,
            'Header': header,
            Datepicker

        },
        data(){
            return{
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
        },
        mounted() {
            $('html, body').animate({
                scrollTop: $("#navbarSupportedContent").offset().top
            }, 500);
            let self= this;
            $('.vue-date input[type=text]').addClass('date_picker');
            $('.date_picker').css({"height":"30px","width":"100%","padding": ".375rem .75rem","border": "1px solid #001D3D","border-radius": "0px"});

            $('.hotel_city_dropdown1').select2({
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
            searchHotels(){
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
                    console.log(new_link);
                    window.open(new_link, "_blank");

                    this.check_in = '';
                    this.check_out = '';
                    this.room_numbers = '';
                    this.guests = '';
                }else {
                    Swal.fire({
                        text: "All fields are required!"
                    });
                }
            },
        }
    }
</script>

<style scoped>
    @media only screen and (max-width: 991px) {
        .header {
            background-image: none !important;
            background-color: #001D3D;
        }
    }

    .header {
        background-color: #001D3D;
        background-repeat: no-repeat;
        min-height: 20vw;
        background-size: 100% auto;
    }
    .banner
    {
        background: #0D64CC;
        width: fit-content;
        padding: 4% 8%;
        margin-top: -9%;
    }
    .banner h2
    {
        color: #FFFFFF;
        font-weight: bolder;
    }
    .extra{
        margin-top: 100px;
    }
    .head-line{
    }
    .head-line span{
        color: #0D64CC;
        font-size: 24px;
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

</style>