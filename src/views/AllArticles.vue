<template>
    <section>
        <div class="header">

            <Header/>

        </div>

        <div class="container">
            <div class="row">
                <div class="col-md-6 offset-md-3 ">
                    <div class="banner mx-auto">
                        <h2>All Favorites Articles</h2>
                    </div>
                </div>

            </div>
        </div>
        <div class="container text-center wait" v-if="loading"><span>Please Wait...</span></div>
        <div class="container mt-4" v-if="!loading">
            <div class="row">
                <div class="col-md-3" v-for="(articles,index) in user_favorite_articles" :key="index">
                    <div :class="(index%2===0) ? 'article' : 'article1' ">
                        <div class="arti mx-auto">
                            <router-link :to="'/single_article/'+articles.slug">
                                <div class="art" :style="'background-image: linear-gradient(rgba(0, 0, 0, 0.15),  rgba(0, 0, 0, 0.35) ),url('+articles.jetpack_featured_media_url+')'">
                                    <div class="row article_title ">
                                        <div class="col-md-12 my-auto">
                                            <span class=" ">{{ articles.title.rendered.replace('&#8217;' ,"'")}}</span>
                                        </div>
                                    </div>
                                </div>
                            </router-link>
                        </div>
                        <div class="row bottom">
                            <ul class="text-center">
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

        </div>
        <Footer/>
    </section>
</template>

<script>
    import footer from "@/components/layout_components/Footer";
    import header from "@/components/layout_components/Header";
    import Swal from 'sweetalert2';
    import Axios from 'axios';
    import {configs} from '@/config';
    export default {
        name: "AllArticles",
        components: {
            'Footer': footer,
            'Header': header,

        },
        data(){
            return{
                user_favorite_articles:[],
                user_id:'',
                loading :true,
            }
        },
        created(){
            if(localStorage.getItem('scv_user_token')){
                this.user_id = localStorage.getItem('scv_user_id');
            }else{
                this.$router.push('/login');
            }

            let params = new URLSearchParams();
                params.append("id", this.user_id);
            let config = {
                headers: { 'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'}
            };

            Axios.post(configs.url + 'api/user_favorite_articles',params,config).then(resp => {
                let user_favorite_articles = resp.data.slice();
                let promises = [];
                resp.data.forEach((article, index) => {
                    let url = "https://smartcollegevisit.com/wp-json/wp/v2/posts/" + article.article_id;
                        promises[index] =  Axios.get(url)
                            .then(res => {
                                res.data.title.rendered = res.data.title.rendered.replace(/&#8217;/g, "'").replace(/&#038;/g, "&").replace(/&#8216;/g, "'").replace(/&#8211;/g, "-").replace(/&#8230;/g, "...").replace(/&#8220;/g, '"').replace(/&#8221;/g, '"');

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
                    this.loading = false;
                });

            });
        },
        methods:{
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
        width: 50%;
    }
    .btn-list button{
        width: 80%;
    }

    .article1
    {
        margin: 40px 0px;
    }
    .article1 h5
    {
        padding-top: 20px;
        text-align: center;
        text-weight:bold;
        color: #FFFFFF;
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
        width: 50%;
    }
    .wait{
        font-size: 40px;
        color: #0D63CC;
        height: 200px;
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
    .btn-custom
    {
        background-color: #001D3D !important;
        border: 1px solid #001D3D;
        color: #FFFFFF;
    }

</style>