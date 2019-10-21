<template>
    <section>
        <div class="header">
            <Header/>
            <div class="container-fluid">
                <div class="content-header">
                    <div class="row">
                        <div class="col-md-11 offset-md-1">
                            <span class="header-title">College Living</span>
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
                                <h3 class="title">College Living</h3>
                            </div>
                            <div class="row tab_cell" >
                                <ul class="p-unset">
                                    <li v-for="(side_article,index) in sidebar_articles" :key="index">
                                        <i class="far fa-circle"></i> <router-link :to="'/single_article/'+side_article.slug">  {{side_article.title.rendered}}</router-link>
                                    </li>
<!--                                    <li>-->
<!--                                        <i class="far fa-circle"></i> I’m a Parent, HELP!!-->
<!--                                    </li>-->
<!--                                    <li>-->
<!--                                        <i class="far fa-circle"></i>College Tour Packing Guide-->
<!--                                    </li>-->
<!--                                    <li>-->
<!--                                        <i class="far fa-circle"></i> How should I tour a campus?-->
<!--                                    </li>-->
<!--                                    <li>-->
<!--                                        <i class="far fa-circle"></i> 10 Questions to ask your tour guide-->
<!--                                    </li>-->
<!--                                    <li>-->
<!--                                        <i class="far fa-circle"></i> I’m a Parent, HELP!!-->
<!--                                    </li>-->
<!--                                    <li>-->
<!--                                        <i class="far fa-circle"></i>College Tour Packing Guide-->
<!--                                    </li>-->
<!--                                    <li>-->
<!--                                        <i class="far fa-circle"></i> How should I tour a campus?-->
<!--                                    </li>-->
                                </ul>
                            </div>
                            <div class="row ">
                                <div class="col-md-4 offset-md-4  text-centre">
                                    <router-link :to="'/view_all?cat_id='+sidebar_cat_id+'&name=College Living'"><button class="btn blue_btn">View All</button></router-link>
                                </div>

                            </div>

                        </div>

                    </div>

                </div>
                <div class="col-lg-8 main-content">
                    <div class="row head">
                        <div class="col-md-12">
<!--                            <div class="row">-->
<!--                                <h3 class="title">Static Copy Block</h3>-->
<!--                            </div>-->
                            <div class="row para">
                                <p>
                                    Now that college life has become “normal,” is everything going ok in your residence hall? How’s the relationship with your roommate or suitemates? We have some advice for students now that the honeymoon is over. And surprise, surprise: It’s time to start thinking about housing for next year already! Once you’re back after winter break, you’ll need to sign a lease or commit to the residence halls again. Read on for more information about that.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div class="row p-3">
                        <div class="col-md-12">

                            <div class="container">
                                <div class="row mt-5">
                                    <div>
                                        <span class="heading">Student Living</span>
                                    </div>
                                </div>
                                <div class="row line mb-5">
                                </div>
                            </div>


                            <div class="row mb-5">
                                <div class="col-lg-3 col-md-6 img_col" v-for="(data,index) in students_life_articles">
                                    <div class="article1">
                                        <router-link :to="'/single_article/'+data.slug+'?heading=Students Life and Success'">
                                            <div class="art" :style="'background-image: linear-gradient(rgba(0, 0, 0, 0.15),  rgba(0, 0, 0, 0.35) ),url('+data.jetpack_featured_media_url+')'">
                                                <div class="row article_title ">
                                                    <div class="col-md-12 my-auto">
                                                        <span class=" ">{{data.title.rendered.replace('&#8217;' ,"'")}}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </router-link>
                                    </div>
                                </div>
<!--                                <div class="col-lg-3 col-md-6 img_col">-->
<!--                                    <div class="article1">-->
<!--                                        <router-link to="">-->
<!--                                            <div class="art">-->
<!--                                                <div class="row article_title ">-->
<!--                                                    <div class="col-md-12">-->
<!--                                                        <span class=" my-auto">10 Best Application Tips</span>-->
<!--                                                    </div>-->
<!--                                                </div>-->
<!--                                            </div>-->
<!--                                        </router-link>-->
<!--                                    </div>-->
<!--                                </div>-->
<!--                                <div class="col-lg-3 col-md-6 img_col">-->
<!--                                    <div class="article1">-->
<!--                                        <router-link to="">-->
<!--                                            <div class="art">-->
<!--                                                <div class="row article_title ">-->
<!--                                                    <div class="col-md-12">-->
<!--                                                        <span class=" my-auto">10 Best Application Tips</span>-->
<!--                                                    </div>-->
<!--                                                </div>-->
<!--                                            </div>-->
<!--                                        </router-link>-->
<!--                                    </div>-->
<!--                                </div>-->
                                <div class="col-lg-3 col-md-6 img_col">
                                    <div class="article1">
                                        <div class="row text-center view-more-uni ">
                                            <div class="col-md-12 p-0">
                                                <router-link :to="'/view_all?cat_id='+student_cat_id+'&name=Students Life and Success'" class="btn btn-link" ><span class="line">View All</span></router-link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="container">
                                <div class="row mt-5">
                                    <div>
                                        <span class="heading green">College Parenting</span>
                                    </div>
                                </div>
                                <div class="row line mb-5">
                                </div>
                            </div>


                            <div class="row mb-5">
                                <div class="col-lg-3 col-md-6 img_col" v-for="(data,index) in parent_support_articles">
                                    <div class="article1">
                                        <router-link :to="'/single_article/'+data.slug+'?heading=Parent Support'">
                                            <div class="art" :style="'background-image: linear-gradient(rgba(0, 0, 0, 0.15),  rgba(0, 0, 0, 0.35) ),url('+data.jetpack_featured_media_url+')'">
                                                <div class="row article_title ">
                                                    <div class="col-md-12 my-auto">
                                                        <span class=" ">{{data.title.rendered.replace('&#8217;' ,"'")}}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </router-link>
                                    </div>
                                </div>
<!--                                <div class="col-lg-3 col-md-6 img_col">-->
<!--                                    <div class="article1">-->
<!--                                        <router-link to="">-->
<!--                                            <div class="art">-->
<!--                                                <div class="row article_title ">-->
<!--                                                    <div class="col-md-12">-->
<!--                                                        <span class=" my-auto">10 Best Application Tips</span>-->
<!--                                                    </div>-->
<!--                                                </div>-->
<!--                                            </div>-->
<!--                                        </router-link>-->
<!--                                    </div>-->
<!--                                </div>-->
<!--                                <div class="col-lg-3 col-md-6 img_col">-->
<!--                                    <div class="article1">-->
<!--                                        <router-link to="">-->
<!--                                            <div class="art">-->
<!--                                                <div class="row article_title ">-->
<!--                                                    <div class="col-md-12">-->
<!--                                                        <span class=" my-auto">10 Best Application Tips</span>-->
<!--                                                    </div>-->
<!--                                                </div>-->
<!--                                            </div>-->
<!--                                        </router-link>-->
<!--                                    </div>-->
<!--                                </div>-->
                                <div class="col-lg-3 col-md-6 img_col">
                                    <div class="article1">
                                        <div class="row text-center view-more-uni ">
                                            <div class="col-md-12 p-0">
                                                <router-link :to="'/view_all?cat_id='+parent_cat_id+'&name=Parent Support'" class="btn btn-link" ><span class="line">View All</span></router-link>
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
        name: "CollegeLiving",
        components: {
            'Footer': footer,
            'Header': header

        },
        data(){
            return{
                students_life_articles:[],
                student_cat_id: "4474,4130",
                parent_support_articles:[],
                parent_cat_id:"3486",
                sidebar_articles:[],
                sidebar_cat_id:"4490",
            }
        },
        created() {
            Axios.get('https://smartcollegevisit.com/wp-json/wp/v2/posts/?categories=4474,4130&per_page=3')
                .then(resp=>{
                    // console.log(resp.data);
                    for(let data of resp.data){
                        // console.log(data.title.rendered);
                        data.title.rendered = data.title.rendered.replace(/&#8217;/g ,"'").replace(/&#038;/g ,"&").replace(/&#8216;/g ,"'").replace(/&#8211;/g ,"-").replace(/&#8230;/g ,"...").replace(/&#8220;/g ,'"').replace(/&#8221;/g ,'"');
                    }
                    let promises = [];
                    resp.data.forEach((data, index) => {
                        if(data.featured_media!==0){
                            promises[index] =  Axios.get('https://smartcollegevisit.com/wp-json/wp/v2/media/'+data.featured_media)
                                .then(res=>{
                                    // console.log(resp.data.media_details.sizes.full.source_url);
                                    data.jetpack_featured_media_url = res.data.media_details.sizes.full.source_url;
                                });
                        }

                    });
                    Promise.all(promises).then(items => {
                        this.students_life_articles = resp.data;
                    });
                });
            Axios.get('https://smartcollegevisit.com/wp-json/wp/v2/posts/?categories=3486&per_page=3')
                .then(resp =>{
                    // console.log(resp.data);
                    for(let data of resp.data){
                        // console.log(data.title.rendered);
                        data.title.rendered = data.title.rendered.replace(/&#8217;/g ,"'").replace(/&#038;/g ,"&").replace(/&#8216;/g ,"'").replace(/&#8211;/g ,"-").replace(/&#8230;/g ,"...").replace(/&#8220;/g ,'"').replace(/&#8221;/g ,'"');
                    }
                    let promises = [];
                    resp.data.forEach((data, index) => {
                        if(data.featured_media!==0){
                            promises[index] =  Axios.get('https://smartcollegevisit.com/wp-json/wp/v2/media/'+data.featured_media)
                                .then(res=>{
                                    // console.log(resp.data.media_details.sizes.full.source_url);
                                    data.jetpack_featured_media_url = res.data.media_details.sizes.full.source_url;
                                });
                        }

                    });
                    Promise.all(promises).then(items => {
                        this.parent_support_articles = resp.data;
                    });
                });
            Axios.get('https://smartcollegevisit.com/wp-json/wp/v2/posts/?categories=4490&per_page=8')
                .then(resp =>{
                    // console.log(resp.data);
                    for(let data of resp.data){
                        // console.log(data.title.rendered);
                        data.title.rendered = data.title.rendered.replace(/&#8217;/g ,"'").replace(/&#038;/g ,"&").replace(/&#8216;/g ,"'").replace(/&#8211;/g ,"-").replace(/&#8230;/g ,"...").replace(/&#8220;/g ,'"').replace(/&#8221;/g ,'"');
                    }
                    let promises = [];
                    resp.data.forEach((data, index) => {
                        if(data.featured_media!==0){
                            promises[index] =  Axios.get('https://smartcollegevisit.com/wp-json/wp/v2/media/'+data.featured_media)
                                .then(res=>{
                                    // console.log(resp.data.media_details.sizes.full.source_url);
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
        background-image: url(../../public/assets/img/header/CollegeLiving.png);
        background-color: #EBF7FF;
        background-repeat: no-repeat;
        min-height: 34vw;
        /*width: 100vw;*/
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
        /*background-image:url("../../public/assets/img/article.png") ;*/
        /*background-repeat: no-repeat;*/
        height: 220px;
        max-width: 220px;
        margin: 0 auto;
        /*background-size:cover;*/
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
        /*background-color: #b7b7b7;*/
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
