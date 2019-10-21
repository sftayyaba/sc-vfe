<template>
    <section>
            <nav class="navbar navbar-expand-lg navbar-dark px-5">
                <router-link class="navbar-brand" to="/">
                    <img class="img-fluid img-custom d-none d-block d-sm-block d-md-block d-lg-none"
                        src="../../../public/assets/img/header/logo-small.png">
                </router-link>
                <button class="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse " id="navbarSupportedContent">
                    <ul class="navbar-nav ml-auto head-ul">
                        <li class="nav-item ">
                            <router-link class="nav-link" to="/">HOME</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link" to="/collegeSearch">COLLEGE SEARCH</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link" to="/admission">ADMISSIONS</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link" to="/money_talks">MONEY TALKS</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link" to="/college_living">COLLEGE LIVING</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link" to="/global_education">GLOBAL EDUCATION</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link" to="/about_us">ABOUT US</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link" to="/personalized">PLANNING PORTAL</router-link>
                        </li>
                        <li class="nav-item" v-if="!loggedIn">
                            <router-link to="/login" class="nav-link" >LOGIN</router-link>
                        </li>
                        <li class="nav-item" v-if="loggedIn" v-on:click="logOut()">
                            <router-link class="nav-link" to="">LOG OUT</router-link>
                        </li>
                    </ul>
                </div>
            </nav>
            <div class="row px-4" style="margin-left:1.5rem !important;">
                <router-link to="/"><img class="img-fluid d-none d-sm-none d-md-none d-lg-block"
                    src="../../../public/assets/img/header/logo.png"></router-link>
            </div>

    </section>
    
</template>

<script>

    import Swal from 'sweetalert2';
    export default {
        name: "Header",
        data(){
        return{
            loggedIn : false,
        }
        },
        created(){
            if(localStorage.getItem("scv_user_token")){
                this.loggedIn = true;
            }else{
                this.loggedIn = false;
            }
        },
        methods:{
            logOut(){
                this.loggedIn = false;
                Swal.fire('Success','Successfully logged out.','success');
                localStorage.removeItem('scv_user_token');
                localStorage.removeItem('scv_user_id');
                this.$router.push('/');
            }
        }
    }
</script>

<style scoped>
    .row
    {
        margin: 0;
    }
    a {
        margin-top: 20px;
    }

    .img-custom {
        width: 75%;
    }

    @media only screen and (max-width: 1000px) {
        .img-custom {

            float: right;
        }

        .navbar-brand {
            display: contents !important;
        }
    }


    h1, h2, h3, h4, h5, h6, p, span, label, select, div,a,th,tr,thead,tbody, option, input, button {
        font-family: Montserrat !important;
    }

    .head-ul {
        margin-top: 1%;
    }
    .head-ul > li > a , .navbar-dark .navbar-nav .nav-link
    {
        font-size: 10px;
        color: rgba(255,255,255, 1);
    }


</style>