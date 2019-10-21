<template>
    <section>
        <div class="header">
            <Header/>
            <div class="container-fluid">
                <div class="content-header">
                    <div class="row">
                        <div class="col-md-11 offset-md-1">
                            <span class="header-title">Begin Your College Journey</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="container-fluid you_can">
            <div class="row">
                <div class="col-lg-4">
                        <router-link to="/collegeSearch" class="list-inline-item search">
                            <div class="row">
                                <div class="col-sm-4 p-0">
                                    <img class="img-fluid" src="../../public/assets/img/searchCollege.png">
                                </div>
                                <div class="col-sm-8 p-0 my-auto">
                                    <span>Search for colleges that match your criteria</span>
                                </div>
                            </div>
                        </router-link>
                </div>
                <div class="col-lg-4">
                    <router-link to="/user_dashboard" class="list-inline-item favorites">
                        <div class="row">
                            <div class="col-sm-4 p-0">
                                <img class="img-fluid" src="../../public/assets/img/favorites.png">
                            </div>
                            <div class="col-sm-8 p-0 my-auto">
                                <span>Go to favorites</span>
                            </div>
                        </div>
                    </router-link>
                </div>
                <div class="col-lg-4">
                    <router-link to="/personalized" class="list-inline-item resources">
                        <div class="row">
                            <div class="col-sm-4 p-0">
                                <img class="img-fluid" src="../../public/assets/img/mapIcon.png">
                            </div>
                            <div class="col-sm-8 p-0 my-auto">
                                <span>Use our resources to plan your trip</span>
                            </div>
                        </div>
                    </router-link>
                </div>
            </div>
        </div>

        <div class="container ">
            <div class=" featured_articles">

            <div class="row mx-2">
                <div>
                    <span class="heading">Featured Articles</span>
                </div>
            </div>
                <div class="row line mb-5 mx-2">
                </div>
            <div class="row mb-5 mx-2">
                <div class="col-lg-3 col-md-6 img_col p-0 mb-2 " v-for="(data , index) in featured_article" :key="index">
                    <div class="article1 mx-auto">
                        <router-link :to="'/single_article/'+data.slug+'?heading=Featured'">
                            <div class="art" :style="'background-image: linear-gradient(rgba(0, 0, 0, 0.15),  rgba(0, 0, 0, 0.35) ),url('+data.jetpack_featured_media_url+')'">
                                <div class="row article_title ">
                                    <div class="col-md-12 my-auto">
                                        <span class=" ">{{data.title.rendered}}</span>
                                    </div>
                                </div>
                            </div>
                        </router-link>
                    </div>
                </div>
            </div>

        </div>
        </div>
        <div class="container-fluid">
            <div class="row ">
                <div class="blue_chart">
                <div class="col-lg-7 offset-lg-4 ">
                    <div class="row mt-5 text-center">
                        <div class="col-lg-7">
                            <span class="text flex-left">Learn About Our Personalized <br> Planning Concierge Service</span>
                        </div>
                        <div class="col-lg-4">
                            <router-link to="/personalized">  <button>Learn More</button></router-link>
                        </div>
                    </div>

                </div>
                </div>

            </div>
        </div>
        <div class="container-fluid planning">
            <div class="container college_articles">
                <div class="row mt-5 mx-2">
                    <div>
                        <span class="heading">Heading to College Articles</span>
                    </div>
                </div>
                <div class="row line mb-5 mx-2">
                </div>
                <div class="row mb-5 mx-2">
                    <div class="col-lg-3 col-md-6 img_col p-0 mb-2" v-for="(data,index) in college_article">
                        <div class="article1 mx-auto">
                            <router-link :to="'/single_article/'+ data.slug+'?heading=Heading to College'">
                                <div class="art" :style="'background-image: linear-gradient(rgba(0, 0, 0, 0.15),  rgba(0, 0, 0, 0.35) ),url('+data.jetpack_featured_media_url+')'">
                                    <div class="row article_title ">
                                        <div class="col-md-12 my-auto">
                                            <span class=" ">{{data.title.rendered}}</span>
                                        </div>
                                    </div>

                                </div>
                            </router-link>
                        </div>
                    </div>
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
                                <router-link to="/personalized"> <button>Learn More</button></router-link>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </div>

        <div class="container ">
            <div class=" featured_articles">

                <div class="row mx-2">
                    <div>
                        <span class="heading">Dorm Life Article</span>
                    </div>
                </div>
                <div class="row line mb-5 mx-2">
                </div>
                <div class="row mb-5 mx-2">
                    <div class="col-lg-3 col-md-6 img_col p-0 mb-2" v-for="(data,index) in dorm_article">
                        <div class="article1 mx-auto">
                            <router-link :to="'/single_article/'+data.slug+'?heading=Dorm Life'">
                                <div class="art" :style="'background-image: linear-gradient(rgba(0, 0, 0, 0.15),  rgba(0, 0, 0, 0.35) ),url('+data.jetpack_featured_media_url+')'">
                                    <div class="row article_title ">
                                        <div class="col-md-12 my-auto">
                                            <span class=" ">{{data.title.rendered}}</span>
                                        </div>
                                    </div>

                                </div>
                            </router-link>
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
    import Header from "../components/layout_components/Header";
    import Myfooter from "../components/layout_components/Footer";
    import {configs} from '@/config';
    import Axios from 'axios';
    export default {
        name: "Home",
        components: {
            Footer:footer,
            Header},
        data(){
            return{
                featured_article :[],
                college_article :[],
                dorm_article:[],

            }
        },
            created() {
            Axios.get('https://smartcollegevisit.com/wp-json/wp/v2/posts/?categories=4491&per_page=4')
                .then(resp=>{
                for(let data of resp.data){
                    data.title.rendered = data.title.rendered.replace(/&#8217;/g ,"'").replace(/&#038;/g ,"&").replace(/&#8216;/g ,"'").replace(/&#8211;/g ,"-").replace(/&#8230;/g ,"...").replace(/&#8220;/g ,'"').replace(/&#8221;/g ,'"');
                }
                    let promises = [];
                    resp.data.forEach((data, index) => {
                        if(data.featured_media!==0){
                            promises[index] =  Axios.get('https://smartcollegevisit.com/wp-json/wp/v2/media/'+data.featured_media)
                                .then(res=>{
                                    data.jetpack_featured_media_url = res.data.media_details.sizes.full.source_url;
                                });
                        }

                    });
                    Promise.all(promises).then(items => {
                        this.featured_article = resp.data;
                    });
            });
            Axios.get('https://smartcollegevisit.com/wp-json/wp/v2/posts/?categories=4492&per_page=4')
                .then(resp =>{
                    for(let data of resp.data){
                        data.title.rendered = data.title.rendered.replace(/&#8217;/g ,"'").replace(/&#038;/g ,"&").replace(/&#8216;/g ,"'").replace(/&#8211;/g ,"-").replace(/&#8230;/g ,"...").replace(/&#8220;/g ,'"').replace(/&#8221;/g ,'"');
                    }
                    let promises = [];
                    resp.data.forEach((data, index) => {
                        if(data.featured_media!==0){
                            promises[index] =  Axios.get('https://smartcollegevisit.com/wp-json/wp/v2/media/'+data.featured_media)
                                .then(res=>{
                                    data.jetpack_featured_media_url = res.data.media_details.sizes.full.source_url;
                                });
                        }

                    });
                    Promise.all(promises).then(items => {
                        this.college_article = resp.data;
                    });
                });
            Axios.get('https://smartcollegevisit.com/wp-json/wp/v2/posts/?categories=3688&per_page=4')
                .then(resp =>{
                    for(let data of resp.data){
                        data.title.rendered = data.title.rendered.replace(/&#8217;/g ,"'").replace(/&#038;/g ,"&").replace(/&#8216;/g ,"'").replace(/&#8211;/g ,"-").replace(/&#8230;/g ,"...").replace(/&#8220;/g ,'"').replace(/&#8221;/g ,'"');
                    }

                    let promises = [];
                    resp.data.forEach((data, index) => {
                        if(data.featured_media!==0){
                            promises[index] =  Axios.get('https://smartcollegevisit.com/wp-json/wp/v2/media/'+data.featured_media)
                                .then(res=>{
                                    data.jetpack_featured_media_url = res.data.media_details.sizes.full.source_url;
                                });
                        }

                    });
                    Promise.all(promises).then(items => {
                        this.dorm_article = resp.data;
                    });
                });
            if(configs.cities.length <= 0){
                Axios.get(configs.url + 'api/get_cities').then(resp=>{
                    configs.cities = resp.data;
                });
            }


            }
    }
</script>

<style scoped>
    @media only screen and (max-width: 991px) {
        .header {
            background-image: none !important;
            background-color: #001D3D;
        }
        .blue_chart{
            background-image: none !important;
            background-color: #0D64CC;
        }
        .green_chart{
            background-image: none !important;
            background-color: #01A135;
        }
        .you_can{
            margin-top: -2% !important;
        }
    }
    .header {
        background-image: url(../../public/assets/img/header/homeHeader.png);
        background-repeat: no-repeat;
        min-height: 30vw;
        background-size: 100% auto;
    }
    .content-header {
        margin-top: 40px;
        margin-bottom: 20px;
    }
    .header-title{
        font-size: 50px;
        color: #fff;
        text-align: left;

    }
    .you_can{
        margin-top: -5%;
    }
    .you_can .img-fluid{
        height: 80px;
    }
    .you_can .list-inline-item{
        min-height: 127px;
        width: 100%;
        text-align: center;
        color: #fff;
        font-size: calc(7px + 1vw);
        font-weight: bold;
        padding: 25px 25px;
        border-radius: 0px;
    }

    .you_can .search{
        background-color: #01A135;
    }
    .you_can .favorites{
        background-color: #0D64CC;
    }
    .you_can .resources{
        background-color: #4AACFF;
    }
    .you_can i{
        font-size: 60px;
    }
    .you_can a:hover
    {
        text-decoration: none;
    }
    .heading{
        padding: 10px 0px;
        font-size: 30px;
        color: #0D64CC;
    }
    .line
    {
        padding: 10px 0px;
        border-bottom: 4px dashed #01A035;
        border-top: none;
        width: 65px;
        text-align: left;
    }
    .img_col{
        padding: 10px;
        text-align: center;
    }

    .article1{
        height: 250px;
        max-width: 250px;
        margin: 0;
    }
    .article1 a:hover
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
    .article_tags ul{
        list-style: none;
        padding: 0;
        width: 100%;
    }
    .article_tags ul .tag-list{
        background-color: #001D3D;
        font-size: 11px;
        margin-right: 1.5%;
        padding: 0px 15px;
        display: inline-block;
        color: #FFFFFF;

    }
    .planning{
        background-color: #AEDEFF;
    }
    .blue_chart{
        background-image: url("../../public/assets/img/blueChart.png");
        background-size: cover;
        background-repeat: no-repeat;
        width: 100%;
        padding: 40px 0px;
        margin-bottom: -10%;
        height: 275px;
    }
    .blue_chart .text , .green_chart .text{
        font-size: 18px;
        color: #fff;
        font-weight: bold;
    }
    .blue_chart button{
        background-color: #01A135;
        color: #fff;
        padding: 10px;
        border-radius: 2px;
        border:1px solid #01A135;
        cursor: pointer;
    }
    .featured_articles{
        padding: 30px 0px;
    }
    .college_articles{
        padding: 120px 0px;
    }
    .green_chart{
        background-image: url("../../public/assets/img/greenChart.png");
        background-size: cover;
        background-repeat: no-repeat;
        width: 100%;
        padding: 40px 0px;
        margin-top: -9%;
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


    h1, h2, h3, h4, h5, h6, p, span, label, select, div, a, th, tr, thead, tbody, option, input, button {
        font-family: Montserrat !important;
    }
</style>