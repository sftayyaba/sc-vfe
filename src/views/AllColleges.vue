<template>
    <section>
        <div class="header">

            <Header/>

        </div>

        <div class="container-fluid light-blue">
            <div class="row">
                <div class="col-md-6 offset-md-3 ">
                    <div class="banner mx-auto">
                        <h2>All Favorites Colleges</h2>
                    </div>
                </div>

            </div>
        </div>
        <div class="container-fluid light-blue text-center wait" v-if="loading"><span>Please Wait...</span></div>
        <div class="container-fluid light-blue" v-if="!loading">
            <div class="container">
                <div class="row">
                    <div class="col-md-6 col-lg-4 col-sm-12 col-xs-12" v-for="(college,index) in user_favorite_colleges" :key="index">
                        <div class="white">

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
                                    <a  href="#" v-on:click="routeUser(college.college_name)"><button class="btn btn-success ">Plan Trip</button></a>
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
    import Swal from 'sweetalert2';
    import Axios from 'axios';
    import {configs} from '@/config';
    export default {
        name: "AllColleges",
        components: {
            'Footer': footer,
            'Header': header,

        },
        data(){
            return{
                user_favorite_colleges:[],
                user_id:'',
                loading :true,
            }
        },
        created() {
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

            Axios.post(configs.url + 'api/get_favorite_college',params,config).then(resp=>{
                this.user_favorite_colleges = resp.data;
                this.loading = false;
            });

        },
        methods:{
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
            routeUser(college_name)
            {
                configs.selected_college_city=college_name;
                this.$router.push('/user_dashboard');

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
    .btn-custom
    {
        background-color: #001D3D !important;
        border: 1px solid #001D3D;
        color: #FFFFFF;
    }
    .btn-success
    {
        color: #FFFFFF !important;
    }
    .white
    {
        background: #FFFFFF;
        margin: 40px 0px;
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
    .btn-uni li:last-child
    {
        padding: 0 !important;
    }
    .btn-uni li a,.btn-uni li button{
        width: 105px;
    }

    .light-blue
    {
        background-color: #EBF7FF;
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
    .wait{
        font-size: 40px;
        color: #0D63CC;
        height: 200px;
    }
</style>