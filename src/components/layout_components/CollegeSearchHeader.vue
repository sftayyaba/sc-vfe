<template>
    <section>
        <div class="container-fluid p-0">
            <div class="header">

                <Header/>

                <div class="content-header">
                    <div class="row mx-auto text-left">
                        <div class="col-md-6  mx-auto text-white">
                            <h1> Your College Journey <br> Starts Here! </h1>
                        </div>
                        <div class="col-md-6 mx-auto ">
                            <div class="row ">
                                <div class="col-md-10 p-0">
                                    <div class="custom_form " >
                                        <input class="search_list" v-model="searchName" v-on:keyup="methodToDebounce()"
                                            v-on:keyup.enter="getResult()"  type="search">
                                        <ul class="suggestions search_list">
                                            <li v-for="(suggest ,index) in search_suggestion" :key="index"
                                                v-on:click="getInstitute( suggest.InstitutionName)">
                                                <a href="#">{{suggest.InstitutionName}}</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="col-md-2">
                                    <div class="row mb-auto pt-0">
                                        <button class="btn" v-on:click="getResult()">Search</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </section>
</template>

<script>
    import Axios from 'axios'
    import {configs} from '@/config';
    import _ from 'lodash';
    import header from "@/components/layout_components/Header";

    export default {
        name: "myHeader",
        components: {
            'Header': header,
        },
        data() {
            return {
                searchName: '',
                search_suggestion: [],

            }
        },
        created() {
            this.methodToDebounce = _.debounce(this.methodToDebounce, 500);
        },
        methods: {

            suggestion() {

                if (event.key !== "Enter") {
                    if (this.searchName !== '') {
                        Axios.get(configs.url + 'api/search_college_name/' + this.searchName)
                            .then(resp => {
                                this.search_suggestion = resp.data;

                            });
                    }
                }

            },
            getInstitute(instituteName) {
                this.searchName = instituteName;
                this.search_suggestion = [];

            },
            getResult() {
                this.search_suggestion = [];
                if(this.searchName !== ''){
                    this.$emit('click', {data: this.searchName});
                }
            },
            methodToDebounce() {

                if (true) {
                    if (this.searchName !== '') {
                        Axios.get(configs.url + 'api/search_college_name/' + this.searchName)
                            .then(resp => {
                                this.search_suggestion = [];
                                setTimeout(() => {
                                    this.search_suggestion = resp.data;
                                    this.search_suggestion = resp.data;
                                    this.search_suggestion = resp.data;
                                    this.search_suggestion = resp.data;
                                    this.search_suggestion = resp.data;
                                    this.search_suggestion = resp.data;
                                    this.search_suggestion = resp.data;
                                    this.search_suggestion = resp.data;
                                    this.search_suggestion = resp.data;
                                    this.search_suggestion = resp.data;
                                },1);

                            });
                    }
                }

            },
        },
        mounted(){
            let self = this;
            $('.search_list ').blur(function () {
                setTimeout(function(){
                    self.search_suggestion = [];

                },300)
            });
        }
    };
</script>

<style scoped>
    @media only screen and (max-width: 600px) {
        .header {
            background-image: none !important;
            background-color: #001D3D;
        }
    }

    .header {
        background-image: url(../../../public/assets/img/header/backImage.png);
        background-repeat: no-repeat;
        min-height: 34vw;
        background-size: 100% auto;
    }





    .content-header {
        margin: 10vh 8vw;
    }

    .content-header h1
    {
        font-size: 150%;
    }

    .content-header input {
        height: 55px;
        border-radius: 0;
        border: none;
        padding: 10px;
        width: 100%;
        background-color: #AEDEFF;
        color: #0D64CC;
    }

    .content-header button {
        height: 55px;
        width: 110px;
        background-color: #01A135;
        color: #fff;
        border-radius: 0;
    }

    .suggestions {
        background-color: #fff;
    }


    .custom_form ul {
        /*removing predefined bullet points from list*/
        list-style: none;
        /*removing padding from list items*/
        padding: 0;
        width: 100%;
    }

    .suggestions li {
        overflow: hidden;
        height: 0;
        border-bottom: 1px solid #AEDEFF;
        -webkit-transition: all 0.3s ease-in-out;
        -moz-transition: all 0.3s ease-in-out;
        -o-transition: all 0.3s ease-in-out;
        transition: all 0.3s ease-in-out;
    }
    .suggestions a {
        display: block;
        font-size: 15px;
        text-decoration: none;
        color: #0D64CC;
        height: 34px;
        padding: 10px 0px 2px 8px;
    }

    .custom_form input[type="search"]:focus + .suggestions li {
        height: 35px;
        border-bottom: 1px solid #AEDEFF;
    }



    .custom_form ul
    {
        margin: 0px;
    }




    .custom_form ul {
        padding: 0px;
    }

    h1, h2, h3, h4, h5, h6, p, span, label, select, div, a, th, tr, thead, tbody, option, input, button {
        font-family: Montserrat !important;
    }
</style>
