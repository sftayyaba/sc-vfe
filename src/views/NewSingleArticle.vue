<template>
    <section>
        <div class="header">
            <Header/>
            <div class="row extra"></div>
        </div>
        <div class="container text-center wait" v-if="loading"><span>Please Wait...</span></div>
        <div class="container " v-if="!loading">
            <div class="row mx-2">
                <div class="col-md-12">
                    <div class="row  article_head">
                        <h1>{{title}}</h1>
                    </div>
                    <div class="row">
                        <span class="litle_info">by {{article_author}}   <span class="mx-2"> |</span>    {{article_data.date}}    <span class="mx-2"> |</span>   <span v-for="(cats,index) in article_categories" :key="index"> {{cats}} <span v-if="index<article_categories.length-1">,</span> </span></span>
                    </div>
                    <div class="row mt-3 border_bottom">
                    </div>

                    <div class="row mt-5">
                        <div class="col-md-8 p-0">
                            <div class="row" v-if="article_data.jetpack_featured_media_url!==''">
                                <div class="col-md-12 text-center">
                                    <img class="img-fluid" :src="article_data.jetpack_featured_media_url">
                                </div>

                            </div>
                            <div class="row" :class="article_data.jetpack_featured_media_url!==''? 'mt-5':''">
                                <div class="col-md-12 content ">
                                </div>
                            </div>
                            <div class="row mb-5">
                                <div class="col-md-12 text-center">
                                    <button class="btn_blue" v-if="!user_favorite_article.includes(article_data.id)"  v-on:click="addToFavorite(article_data.id)">Add to Favorites</button>
                                    <button class="btn_blue" v-if="user_favorite_article.includes(article_data.id)"  v-on:click="removeToFavorite(article_data.id)">Remove from Favorites</button>
                                </div>

                            </div>
                        </div>
                        <div class="col-md-4 mb-3">
                            <div class="green_side">
                                <div class="position">
                                    <div class="row text text-right">
                                        <div class="col-md-12 ">
                                            <span class="ques flex-right">Need a Bit More Help?</span><br>
                                            <span class="detail">Learn About Our Personalized Planning Concierge Service</span><br>
                                            <router-link to="/personalized"> <button class="btn_blue">Learn More</button></router-link>
                                        </div>

                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>

                    <div class="row border_bottom_100 mb-5"></div>

                    <div class="row mb-5">
                        <div class="col-md-3 mb-2">
                            <div class="article">
                                <div class="row article_title">
                                    <div class="col-md-12">
                                        <span class=" my-auto">Related Articles and Resources</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-8 mb-2">
                            <div class="row">
                                <div class="col-md-4 img_col mb-2"  v-for="(data,index) in related_articles">
                                    <div class="article1 mx-auto">
                                        <router-link :to="'/single_article/'+data.slug">
                                            <div class="art" :style="'background-image: linear-gradient(rgba(0, 0, 0, 0.15),  rgba(0, 0, 0, 0.35) ),url('+data.jetpack_featured_media_url+')'">
                                                <div class="row article_title ">
                                                    <div class="col-md-12 my-auto">
                                                        <span class=" ">{{data.title.rendered.replace('&#8217;' ,"'").replace('&#038;' ,"&").replace('&#8216;' ,"'").replace('&#8211;' ,"-").replace('&#8230;' ,"...").replace('&#8220;' ,'"').replace('&#8221;' ,'"')}}</span>
                                                    </div>
                                                </div>

                                            </div>
                                        </router-link>
                                    </div>
                                </div>
                            </div>


                        </div>
                        <div class="col-md-1 mb-2">
                            <div class="row text-center view-more-uni ">
                                <div class="col-md-12 mb-2 p-0">
                                    <router-link :to="'/view_all?cat_id='+cat_ids+'&name='+heading" class="btn btn-link" ><span class="line">View All</span></router-link>
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
    import footer from "@/components/layout_components/Footer";
    import header from "@/components/layout_components/Header";
    import {configs} from '@/config';
    import moment from 'moment';
    import Swal from 'sweetalert2';
    export default {
        name: "Test",
        components: {
            'Footer': footer,
            'Header': header,
        },
            data(){
            return{
                year:'',
                month:'',
                slug:'',
                postId:'',
                loading :true,
                heading:'',
                title: '',
                article_data: [],
                article_details: '',
                article_categories:[],
                article_author :'',
                cat_ids:'',
                related_articles:[],
                user_favorite_article:[],
                category:'',
                postArray:[
                            {
                            postSlug: 'weighted-unweighted-gpa-colleges-use.html',
                            postId: 14237,
                            categoryId: '3485'
                            },
                        {
                            postSlug: 'transferring-colleges-mid-year.html',
                            postId: 12762,
                            categoryId: '3486,4474'
                        },
                        {
                            postSlug:'top-10-tips-for-dressing-smart-for-your-college-admissions-interview.html',
                            postId: 1123,
                            categoryId: '06'
                        },
                        {
                            postSlug:'scholarship-mom-tip-122-keeping-track-of-volunteer-hours.html',
                            postId: 7924,
                            categoryId: '3688'
                        },
                        {
                            postSlug: 'student-to-student-questions-to-ask-on-a-college-visit.html',
                            postId: 1132,
                            categoryId: '4167,10'
                        }
                ]
            }
        },
        created() {
            if(this.$route.params.year===undefined && this.$route.params.month===undefined && this.$route.params.month===undefined){
                this.$router.push('/home');
            }else{
                this.year=this.$route.params.year;
                this.month=this.$route.params.month;
                this.slug=this.$route.params.slug;
                    let index = '';
                        index = this.postArray.findIndex(x => x.postSlug ===this.slug);
                    if(index!==-1){
                        this.postId = this.postArray[index].postId;
                        this.cat_ids=this.postArray[index].categoryId;
                        this.getNewArticle();
                    }else{
                        this.getArticle();
                    }
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
                    Axios.post(configs.url + 'api/user_favorite_articles',params,config).then(resp=>{
                        for(let data of resp.data){
                            this.user_favorite_article.push(data.article_id);
                        }
                    });
                }
            }
        },
        methods:{
            getArticle(){
                let newSlug = '';
                if(this.slug.includes('.html')){
                    let array = this.slug.split('.');
                    newSlug=array[0];
                }else{
                    newSlug = this.slug;
                }
                console.log(newSlug);
                Axios.get('https://smartcollegevisit.com/wp-json/wp/v2/posts/?slug='+newSlug)
                    .then(resp=>{
                        this.article_data = resp.data[0];
                        this.title = resp.data[0].title.rendered;

                        this.title = this.title.replace(/&#8217;/g ,"'").replace(/&#038;/g ,"&").replace(/&#8216;/g ,"'").replace(/&#8211;/g ,"-").replace(/&#8230;/g ,"...").replace(/&#8220;/g ,'"').replace(/&#8221;/g ,'"');
                        let promises = [];
                        if(resp.data[0].featured_media!==0){
                            promises[0] =Axios.get('https://smartcollegevisit.com/wp-json/wp/v2/media/'+resp.data[0].featured_media)
                                .then(res=>{
                                    resp.data[0].jetpack_featured_media_url = res.data.media_details.sizes.full.source_url;
                                });
                        }

                        let author_id = this.article_data.author;
                        promises[1]=Axios.get('https://smartcollegevisit.com/wp-json/wp/v2/users/'+author_id)
                            .then(resp=>{
                                this.article_author = resp.data.name;

                                $('.content').append(this.article_details);
                                this.changeURLs();
                            });

                        Promise.all(promises).then(items => {
                        });
                        this.article_details = resp.data[0].content.rendered;
                        this.article_data.date = moment(this.article_data.date).format('MMMM Do YYYY');
                        this.loading = false;


                        let categories_ids = this.article_data.categories;
                        for(let cat_id of categories_ids){
                            this.cat_ids +=','+cat_id;
                            Axios.get('https://smartcollegevisit.com/wp-json/wp/v2/categories/'+cat_id)
                                .then(resp=>{
                                    this.article_categories.push(resp.data.name);
                                    if(this.heading===''){
                                        this.heading = resp.data.name;
                                    }

                                });
                        }
                        this.cat_ids = this.cat_ids.replace(',','');
                        Axios.get('https://smartcollegevisit.com/wp-json/wp/v2/posts/?categories='+this.cat_ids+'&per_page=3')
                            .then(resp =>{
                                for(let data of resp.data){
                                    data.title.rendered = data.title.rendered.replace('&#8217;' ,"'").replace('&#038;' ,"&").replace('&#8216;' ,"'").replace('&#8211;' ,"-").replace('&#8230;' ,"...").replace('&#8220;' ,'"').replace('&#8221;' ,'"');
                                }
                                let promises = [];
                                resp.data.forEach((data, index) => {
                                    promises[index] =  Axios.get('https://smartcollegevisit.com/wp-json/wp/v2/media/'+data.featured_media)
                                        .then(res=>{
                                            data.jetpack_featured_media_url = res.data.media_details.sizes.full.source_url;
                                        });
                                });
                                Promise.all(promises).then(items => {
                                    this.related_articles = resp.data;
                                });
                            });

                    });
            },
            getNewArticle(){
                Axios.get('https://smartcollegevisit.com/wp-json/wp/v2/posts/'+this.postId)
                    .then(resp=>{
                        this.article_data = resp.data;
                        this.title = resp.data.title.rendered;

                        this.title = this.title.replace(/&#8217;/g ,"'").replace(/&#038;/g ,"&").replace(/&#8216;/g ,"'").replace(/&#8211;/g ,"-").replace(/&#8230;/g ,"...").replace(/&#8220;/g ,'"').replace(/&#8221;/g ,'"');
                        let promises = [];
                        if(resp.data.featured_media!==0){
                            promises[0] =Axios.get('https://smartcollegevisit.com/wp-json/wp/v2/media/'+resp.data.featured_media)
                                .then(res=>{
                                    resp.data.jetpack_featured_media_url = res.data.media_details.sizes.full.source_url;
                                });
                        }

                        let author_id = this.article_data.author;
                        promises[1]=Axios.get('https://smartcollegevisit.com/wp-json/wp/v2/users/'+author_id)
                            .then(resp=>{
                                this.article_author = resp.data.name;

                                $('.content').append(this.article_details);
                                this.changeURLs();
                            });

                        Promise.all(promises).then(items => {
                        });
                        this.article_details = resp.data.content.rendered;
                        this.article_data.date = moment(this.article_data.date).format('MMMM Do YYYY');
                        this.loading = false;


                        let categories_ids = this.article_data.categories;
                        for(let cat_id of categories_ids){
                            Axios.get('https://smartcollegevisit.com/wp-json/wp/v2/categories/'+cat_id)
                                .then(resp=>{
                                    this.article_categories.push(resp.data.name);
                                    if(this.heading===''){
                                        this.heading = resp.data.name;
                                    }

                                });
                        }
                        Axios.get('https://smartcollegevisit.com/wp-json/wp/v2/posts/?categories='+this.cat_ids+'&per_page=3')
                            .then(resp =>{
                                for(let data of resp.data){
                                    data.title.rendered = data.title.rendered.replace('&#8217;' ,"'").replace('&#038;' ,"&").replace('&#8216;' ,"'").replace('&#8211;' ,"-").replace('&#8230;' ,"...").replace('&#8220;' ,'"').replace('&#8221;' ,'"');
                                }
                                let promises = [];
                                resp.data.forEach((data, index) => {
                                    promises[index] =  Axios.get('https://smartcollegevisit.com/wp-json/wp/v2/media/'+data.featured_media)
                                        .then(res=>{
                                            data.jetpack_featured_media_url = res.data.media_details.sizes.full.source_url;
                                        });
                                });
                                Promise.all(promises).then(items => {
                                    this.related_articles = resp.data;
                                });
                            });

                    });
            },
            addToFavorite(id){
                let self=this;
                if(localStorage.getItem("scv_user_token")){
                    let user_id = localStorage.getItem("scv_user_id");

                    let params = new URLSearchParams();
                    params.append("user_id", user_id);
                    params.append("article_id", id);
                    let config = {
                        headers: { 'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'}
                    };

                    Axios.post(configs.url+ 'api/add_favorite_article',params,config).then(resp=>{
                        this.user_favorite_article.push(id);
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

            removeToFavorite(id){
                let user_id = localStorage.getItem("scv_user_id");
                let params = new URLSearchParams();
                params.append("user_id", user_id);
                params.append("article_id", id);
                let config = {
                    headers: { 'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'}
                };
                Axios.post(configs.url+ 'api/remove_favorite_article',params,config).then(resp=>{
                    let i = 0;
                    for(let article of this.user_favorite_article){
                        if(article === id){
                            this.user_favorite_article.splice(i , 1);
                        }
                        i++;
                    }
                    Swal.fire('SUCCESS!','This Article has been removed from your Favorites!','success');
                })

            },
            changeURLs(){
                $('.content a').map(function(e) {
                    this.target = '_blank';
                    let slug = '';
                    if(this.href.includes('https://smartcollegevisit.com')||this.href.includes('www.smartcollegevisit.com')||this.href.includes('http://smartcollegevisit.com')){
                        let array = this.href.split('/');
                        if(array[array.length-1].includes('.html')){
                            let newslug = array[array.length-1].split('.');
                            slug = newslug[0];
                        }else{
                            slug = array[array.length-1];
                        }
                        this.href = '/single_article/'+slug;
                    }
                }).get();
            }
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
    .extra{
        margin-top: 50px;
    }
    .wait{
        font-size: 40px;
        color: #0D63CC;
        height: 200px;
    }

    .article_head{
        margin-top: 80px;
    }
    .border_bottom{
        border-bottom: 4px dashed #01A135;
        width: 6%;
        text-align: left;
    }
    .border_bottom_100{
        border-bottom: 4px dashed #01A135;
    }
    .article_head h1{
        color: #0D63CC;
        font-weight: bold;
    }
    .litle_info{
        font-size: 20px;
        color: #0D63CC;
    }
    .content{
        text-align: justify;
    }
    .btn_blue{
        background-color: #0D64CC;
        color: #fff;
        font-size: 18px;
        padding: 7px;
        border: 1px solid #0D64CC;
        border-radius: 3px;
        cursor: pointer;
    }
    .green_side{
        background-image: url("../../public/assets/img/greensidebar.png");
        background-size: cover;
        background-repeat: no-repeat;
        width: 100%;
        min-height: 800px;
    }
    .position{
        padding: 5px;
    }
    .green_side .text{
        margin: 0px;
        padding-top: 250px;
    }
    .ques , .detail{
        color: #fff;
        font-size: 26px;
    }
    .detail{
        font-weight: bold;
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
    .article{
        background-repeat: no-repeat;
        height: 210px;
        background-size:cover;
    }
    .article1{
        height: 230px;
        max-width: 230px;
        margin: auto;
    }
    .article .article_title{
        height: 100%;
        font-size: 18px;
        color: #0D64CC;
        font-weight: bold;
    }
    .art{
        background-image: linear-gradient(rgba(0, 0, 0, 0.15),  rgba(0, 0, 0, 0.35) ),url("../../public/assets/img/article.png") ;
        background-repeat: no-repeat;
        height: 223px;
        background-size:cover;
    }
    .article1 .article_title{
        height: 100%;
        font-size: 18px;
        color: #fff;
        font-weight: bold;
    }
    .article .article_title span{
        position: relative;
        top: 20%;
    }
    .article1 .article_title span{
        position: relative;
        top: 30%;
    }
    .img_col{
        padding: 10px;
        text-align: center;
    }
    .line
    {
        padding: 10px 0px;
        border-bottom: 4px dashed #01A035;
        border-top: none;
        width: 35%;
        text-align: left;
    }
    .article1 a:hover
    {
        text-decoration: none;
    }
</style>