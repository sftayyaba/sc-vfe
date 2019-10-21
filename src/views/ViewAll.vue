<template>
    <section>
        <div class="header">

            <Header/>

            <div class="content-header">

                <div class="row">
                    <div class="col-md-6 college_name offset-md-3">
                        <h3 class="header-title">All <span>{{name}}</span> Resource</h3>
                    </div>
                </div>

            </div>
        </div>
        <div class="container-fluid text-center wait" v-if="loading"><span>Please Wait...</span></div>
        <div class="container" v-if="!loading">

                <div class="row">
                    <h2 class="cat_name">{{name}}</h2>
                </div>
                <div class="row line mb-5"></div>


            <div class="row">
                <div class="col-md-3 img_col"  v-for="(data,index) in articles">
                    <div class="article1">
                        <router-link :to="'/single_article/'+data.slug+'?heading='+name">
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
        <Footer/>
    </section>
</template>

<script>
    import footer from "@/components/layout_components/Footer";
    import header from "@/components/layout_components/Header";
    import Axios from 'axios';
    export default {
        name: "ViewAll",
        components: {
            'Footer': footer,
            'Header': header,

        },
        data(){
            return{
                cat_id: '',
                name:'',
                articles:[],
                loading :true,
            }
        },
        created() {
            if(this.$route.query.cat_id){
                this.cat_id = this.$route.query.cat_id;
                this.name = this.$route.query.name;

                Axios.get('https://smartcollegevisit.com/wp-json/wp/v2/posts/?categories='+ this.cat_id +'&per_page=100 ')
                    .then(resp=>{
                        console.log(resp.data);
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
                            this.articles = resp.data;
                            this.loading = false;
                        });
                    });
            }

        }
    }
</script>

<style scoped>
    @media only screen and (max-width: 600px) {
        .header {
            background-image: none !important;
            background-color: #001D3D;
        }
        .hotel_div button
        {
            width: 100% !important;
        }
        .sat_table thead, .sat_table tbody, .act_table thead, .act_table tbody{
            font-size: 10px !important;
        }
    }
    .header {
        background-color: #001D3D;

    }
    .row
    {
        margin: 0;
    }

    .text-center
    {
        display: block;
        margin: 3% 0%;
    }
    .text-center span
    {
        color: #0D64CC;
    }
    .text-center ul
    {
        list-style: none;
        display: inline-block;
        padding-left: 1%;
    }
    .text-center .green
    {
        border-bottom: 2px dashed #01A035;
        padding-inline-start: 0px !important;
        margin-left: 1%;
    }
    .text-center ul li
    {
        display: inline-block;
        margin-right: 3px;
    }
    .text-center .green li a
    {
        color: #01A135;


    }

    .text-center ul li a:hover
    {
        text-decoration: none;
    }

    .content-header {
        margin-top: 5vh;
        text-align: center;
    }

    .content-header img {
        width: 100%;
    }

    .content-header button {
        height: 45px;
        padding: 12px;
        background-color: #0D64CC;
        color: #fff;
        border-radius: 0;
    }

    .header-title{
        color: white;
        font-weight: bold;
        padding: 5% 0% 20% 0%;
    }
    .header-title span
    {
        color: #4AACFF;
    }

    .cat_name
    {
        color: #0D64CC;
        margin-top: 5%;
    }
    .line
    {
        border-bottom: 4px dashed #01A035;
        width: 65px;
    }
    .img_col{
        padding: 10px;
        text-align: center;
    }

    .article1{
        background-image:url("../../public/assets/img/article.png") ;
        background-repeat: no-repeat;
        height: 250px;
        max-width: 250px;
        margin: 0 auto;
        background-size:cover;
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
    .article_tags{
        height: 15%;
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
    .wait{
        font-size: 40px;
        color: #0D63CC;
        height: 200px;
    }

</style>