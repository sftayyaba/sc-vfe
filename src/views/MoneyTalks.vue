<template>
    <section>
        <div class="header">
            <Header/>
            <div class="container-fluid">
                <div class="content-header">
                    <div class="row">
                        <div class="col-md-11 offset-md-1">
                            <span class="header-title">Money Talks</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="container-fluid main_body">
            <div class="row">
                <div class="col-lg-4 side-bar">
                    <div class="row">
                        <div class="col-md-12">
                            <div class=" row heading">
                                <h3 class="title">Paying for College</h3>
                            </div>
                            <div class="row tab_cell" >
                                <ul class="p-unset">
                                    <li v-for="(side_article,index) in sidebar_articles" :key="index">
                                        <i class="far fa-circle"></i> <router-link :to="'/single_article/'+side_article.slug">  {{side_article.title.rendered}}</router-link>
                                    </li>
                                </ul>
                            </div>
                            <div class="row ">
                                <div class="col-md-4 offset-md-4  text-centre">
                                    <router-link :to="'/view_all?cat_id='+sidebar_cat_id+'&name=Paying for College'" ><button class="btn blue_btn">View All</button></router-link>
                                </div>

                            </div>

                        </div>

                    </div>

                </div>
                <div class="col-lg-8 main-content">
                    <div class="row head">
                        <div class="col-md-12">
                            <div class="row para">
                                <p>
                                    October means FAFSA MONTH! October 1 is the opening date for the 2020-2021 FAFSA. Yes, you read that right. And the 2018 taxes are the ones you need to use. Use the IRS Retrieval Tool in the FAFSA to make that easier. Get your FAFSA in sooner rather than later! Some scholarships and grants are first-come, first-serve. So read up on all things FAFSA and get it done.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div class="row p-3">
                        <div class="col-md-12">

                            <div class="container">
                                <div class="row mt-5">
                                    <div>
                                        <span class="heading">Financial Aid</span>
                                    </div>
                                </div>
                                <div class="row line mb-5">
                                </div>
                            </div>


                            <div class="row mb-5">
                                <div class="col-lg-3 col-md-6 img_col" v-for="(data,index) in financial_articles">
                                    <div class="article1">
                                        <router-link :to="'/single_article/'+data.slug+'?heading=Financial Aid'">
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
                                <div class="col-lg-3 col-md-6 img_col">
                                    <div class="article1">
                                        <div class="row text-center view-more-uni ">
                                            <div class="col-md-12 p-0">
                                                <router-link :to="'/view_all?cat_id='+financial_cat_id+'&name=Financial Aid'"  class="btn btn-link" ><span class="line">View All</span></router-link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="container">
                                <div class="row mt-5">
                                    <div>
                                        <span class="heading green">Scholarships</span>
                                    </div>
                                </div>
                                <div class="row line mb-5">
                                </div>
                            </div>



                            <div class="row mb-5">
                                <div class="col-lg-3 col-md-6 img_col" v-for="(data,index) in scholarship_articles">
                                    <div class="article1">
                                        <router-link :to="'/single_article/'+data.slug+'?heading=Scholarship'">
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
                                <div class="col-lg-3 col-md-6 img_col">
                                    <div class="article1">
                                        <div class="row text-center view-more-uni ">
                                            <div class="col-md-12 p-0">
                                                <router-link :to="'/view_all?cat_id='+scholarship_cat_id+'&name=Scholarship'"  class="btn btn-link" ><span class="line">View All</span></router-link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div class="container">
                                <div class="row mt-5">
                                    <div>
                                        <span class="heading">Loans</span>
                                    </div>
                                </div>

                                <div class="row line mb-5">
                                </div>
                            </div>


                            <div class="row mb-5">
                                <div class="col-lg-3 col-md-6 img_col" v-for="(data,index) in loan_articles">
                                    <div class="article1">
                                        <router-link :to="'/single_article/'+data.slug+'?heading=Loan'">
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
                                <div class="col-lg-3 col-md-6 img_col">
                                    <div class="article1">
                                        <div class="row text-center view-more-uni ">
                                            <div class="col-md-12 p-0">
                                                <router-link :to="'/view_all?cat_id='+loan_cat_id+'&name=Loan'"  class="btn btn-link" ><span class="line">View All</span></router-link>
                                            </div>
                                        </div>
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
    import footer from "@/components/layout_components/Footer";
    import header from "@/components/layout_components/Header";
    import Axios from 'axios';
    export default {
        name: "MoneyTalks",
        components: {
            'Footer': footer,
            'Header': header

        },
        data(){
            return{
                financial_articles:[],
                financial_cat_id:"3488",
                scholarship_articles:[],
                scholarship_cat_id:"3484",
                loan_articles:[],
                loan_cat_id:"3889",
                sidebar_articles:[],
                sidebar_cat_id:"4490",
            }
        },
        created() {
            Axios.get('https://smartcollegevisit.com/wp-json/wp/v2/posts/?categories=3488&per_page=3')
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
                        this.financial_articles = resp.data;
                    });
                });
            Axios.get('https://smartcollegevisit.com/wp-json/wp/v2/posts/?categories=3484&per_page=3')
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
                        this.scholarship_articles = resp.data;
                    });
                });
            Axios.get('https://smartcollegevisit.com/wp-json/wp/v2/posts/?categories=3889&per_page=3')
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
                        this.loan_articles = resp.data;
                    });
                });
            Axios.get('https://smartcollegevisit.com/wp-json/wp/v2/posts/?categories=4490&per_page=8')
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
                        this.sidebar_articles = resp.data;
                    });
                });


        }
    }
</script>

<style scoped>
    @media only screen and (max-width: 991px) {
        .header {
            background-image: none !important;
            background-color: #001D3D !important;
        }

    }
    .header {
        background-image: url(../../public/assets/img/header/MoneyTalks.png);
        background-color: #EBF7FF;
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
        font-size: 50px;
        color: #fff;
        text-align: left;
    }
    .title{
        margin-top: 50px;
        color: #001D3D;
        font-size: 22px;
        font-weight: bold;
    }
    .tab_cell ul li{
        color: #001D3D;
        font-size: 12px;
        margin-top: 25px;
    }

    .tab_cell ul {
        list-style: none;
        width: 100%;
        padding-inline-start :0px !important;
    }
    .fa-circle{
        font-size: 9px;
        margin-right: 20px;
        color: #0D64CC;
    }

    .side-bar {
        background-color: #EBF7FF;
        padding: 0px 100px;
    }
    .blue_btn{
        background-color: #0D64CC;
        color: #fff;
        margin: 0 auto;
        border-radius: 2px;
        border:1px solid #0D64CC;
        cursor: pointer;
    }
    .main_body{
        margin-top: -2%;
    }
    .main-content .head{
        background-color: #EBF7FF;
        padding: 0px 50px;
        /*height: 300px;*/
    }
    .para{
        color: #001D3D;
        font-size: 14px;
        margin-top: 50px;
        text-align: justify;
        padding-bottom: 50px;
    }
    .heading{
        padding: 10px 0px;
        font-size: 24px;
        font-weight: bold;
        color: #0D64CC;
    }
    .green{
        color: #01A135 !important;
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
        height: 220px;
        max-width: 220px;
        margin: 0 auto;
    }
    .article1 a:hover
    {
        text-decoration: none;
    }
    .art{
        background-image:url("../../public/assets/img/article.png") ;
        background-repeat: no-repeat;
        height: 220px;
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
    .view-more-uni
    {
        position: relative;
        top: 20%;
        text-align: center;
    }
    .view-more-uni a
    {
        color: #0D64CC;
    }
    .view-more-uni a:hover
    {
        text-decoration: none;
    }
    .tab_cell ul li a{
        color: #001D3D;
    }
    .tab_cell ul li a:hover{
        text-decoration: none;
    }
</style>
