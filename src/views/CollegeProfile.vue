<template>
    <section>
        <div class="header">

            <Header/>

            <div class="content-header">
                <div class="row">
                    <div class="col-md-6 college_name offset-md-3">
                        <h3 class="header-title">{{smart_data.name}}</h3>
                    </div>
                </div>
                <div class="row fav_btn">
                    <div class="col-md-4 offset-md-4">
                        <div class="mx-auto my-auto">
                            <button class="btn" v-if="!(user_favorite_colleges.includes(collegeId))" v-on:click="addToFavorite()">Add to Favorites</button>
                            <button class="btn" v-if="user_favorite_colleges.includes(collegeId)" v-on:click="removeToFavorite()"> Remove from Favorites</button>

                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class=" row tab_div">
            <div class="col-md-12">

                <nav>
                    <div class="nav nav-tabs nav-fill" id="nav-tab" role="tablist">
                        <a class="nav-item nav-link col-lg-3  col-md-6 col-xs-12 col-sm-12 active" id="nav-home-tab" data-toggle="tab" href="#smartFacts"
                        role="tab" aria-controls="nav-home" aria-selected="true">Smart Facts</a>
                        <a class="nav-item nav-link col-lg-3 col-xs-12  col-md-6 col-sm-12" id="nav-profile-tab" data-toggle="tab" href="#admission"
                        role="tab" aria-controls="nav-profile" aria-selected="false">Admissions</a>
                        <a class="nav-item nav-link  col-lg-3  col-md-6 col-xs-12 col-sm-12" id="nav-contact-tab" data-toggle="tab" href="#college_living"
                        role="tab" aria-controls="nav-contact" aria-selected="false">College Living</a>

                        <a class="nav-item nav-link col-lg-3 col-md-6  col-xs-12 col-sm-12" id="nav-monkey-tab" data-toggle="tab" href="#money_talks"
                        role="tab" aria-controls="nav-contact" aria-selected="false">Money Talk</a>
                    </div>
                </nav>
            </div>


        </div>
        <div class="row tab_div">
            <div class="col-md-12 ">
                <div class="tab-content">
                    <div class="tab-pane  active tab_info" id="smartFacts">
                        <div class="row">
                            <div class="col-md-4 " >
                                <div class="row tab_cell text-left">
                                    <ul class="p-unset" >
                                        <li>
                                            <i class="far fa-circle"></i> <b>College Name: </b> {{smart_data.name}}
                                        </li>
                                        <li>
                                            <i class="far fa-circle"></i> <b>Known As: </b> <p class="inline" v-if="smart_data.know_as!==' '">{{ knownAs(smart_data.know_as) }}</p>
                                            <p class="inline" v-if="smart_data.know_as===' '">N/A</p>
                                        </li>
                                        <li>
                                            <i class="far fa-circle"></i> <b>President: </b>{{smart_data.president}}
                                        </li>
                                        <li>
                                            <i class="far fa-circle"></i> <b>Phone Number: </b> {{smart_data.number | phone}}
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-md-4 border-left-clr">
                                <div class="row tab_cell text-left" id="border">
                                    <ul class="p-unset">
                                        <li class="text-inline">
                                            <i class="far fa-circle"></i> <b>Website: </b>
                                        <span class="overlap-text" v-on:click="linkFormat(smart_data.web_addr)" >{{smart_data.web_addr}}</span>

                                        </li>
                                        <li>
                                            <i class="far fa-circle"></i> <b>Application: </b>
                                            <span class="overlap-text"  v-on:click="linkFormat(smart_data.application_url)">{{smart_data.application_url}}</span>
                                        </li>
                                        <li>
                                            <i class="far fa-circle"></i> <b>Financial Aid: </b>
                                            <span class="overlap-text"  v-on:click="linkFormat(smart_data.financial_aid_url)">{{smart_data.financial_aid_url}}</span>
                                        </li>
                                        <li>
                                            <i class="far fa-circle"></i> <b>College Address: </b> {{smart_data.address+', '+smart_data.city+', '+
                                            smart_data.state+' '+ smart_data.zip }}
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="row tab_cell text-left">
                                    <ul class="p-unset">
                                        <li>
                                            <i class="far fa-circle"></i>  <b>Total Enrollment: </b> {{formatNumber(smart_data.total)}}
                                        </li>
                                        <li>
                                            <i class="far fa-circle"></i>  <b>Men: </b> {{formatNumber(smart_data.totalmale)}}
                                        </li>
                                        <li>
                                            <i class="far fa-circle"></i> <b>Women: </b> {{formatNumber(smart_data.totalfemale)}}
                                        </li>
                                        <li>
                                            <i class="far fa-circle"></i>  <b>Longitude: </b> {{smart_data.longitude}}
                                        </li>
                                        <li>
                                            <i class="far fa-circle"></i> <b>Latitude: </b> {{smart_data.latitude}}
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="tab-pane fade" id="admission">
                        <div class="row border-bottom-clr">
                            <div class="col-md-4 pt-2">
                                <div class="row tab_cell text-left ">
                                    <ul class="mt-4 p-unset">
                                        <span class="tab_heading"></span>
                                        <li>
                                            <i class="far fa-circle"></i> <b>Admissions (URL): </b><span class="overlap-text"  v-on:click="linkFormat(admission_data.admission_url)">{{admission_data.admission_url}}</span>
                                        </li>
                                        <li>
                                            <i class="far fa-circle"></i> <b>Undergrad Application Fee: </b> {{admission_data.app_fee }}
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="row tab_cell text-left border-left-clr" >
                                    <ul class="p-unset">
                                        <span class="tab_heading">GPA</span>
                                        <li>
                                            <i class="far fa-circle"></i> <b>Admitted Average: </b> {{admission_data.avg_gpa}}
                                        </li>
                                        <li v-if="admission_data.gpa === 1">
                                            <i class="far fa-circle"></i> <b>Required: </b> Required
                                        </li>
                                        <li v-if="admission_data.gpa === 2">
                                            <i class="far fa-circle"></i> <b>Required: </b> Recommended
                                        </li>
                                        <li v-if="admission_data.gpa === 3">
                                            <i class="far fa-circle"></i> <b>Required: </b> Neither required nor recommended
                                        </li>
                                        <li v-if="admission_data.gpa === 5">
                                            <i class="far fa-circle"></i> <b>Required: </b> Considered but not required
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="row tab_cell text-left">
                                    <ul class="p-unset">
                                        <span class="tab_heading">Applicants</span>
                                        <li>
                                            <i class="far fa-circle"></i> <b>Total Admitted: </b> {{formatNumber(admission_data.total_admitted)}}
                                        </li>
                                        <li>
                                            <i class="far fa-circle"></i> <b>Total Enrolled: </b> {{formatNumber(admission_data.total_enrolled)}}
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="row table_row">
                            <div class="col col-col-6 table_col ">
                                <span><b>SAT</b></span>
                                <div class="table-responsive ">
                                    <table class="table table-striped text-center sat_table my-auto"
                                        cellspacing="0">
                                        <thead>
                                        <tr>
                                            <th></th>
                                            <th>25 Percentile Score</th>
                                            <th>75 Percentile Score</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr>
                                            <th>Critical Reading</th>
                                            <td>{{sat_data.critical_reading_25th}}</td>
                                            <td>{{sat_data.critical_reading_75th}}</td>
                                        </tr>
                                        <tr>
                                            <th>Math</th>
                                            <td>{{sat_data.math_score_25th}}</td>
                                            <td>{{sat_data.math_score_75th}}</td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div class="col col-col-6 table_col">
                                <span><b>ACT</b></span>
                                <div class="table-responsive ">
                                    <table class="table table-striped text-center act_table my-auto"
                                        cellspacing="0">
                                        <thead>
                                        <tr>
                                            <th></th>
                                            <th>25 Percentile Score</th>
                                            <th>75 Percentile Score</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr>
                                            <th>Composite</th>
                                            <td>{{act_data.composite_25th}}</td>
                                            <td>{{act_data.composite_75th}}</td>
                                        </tr>
                                        <tr>
                                            <th>English</th>
                                            <td>{{act_data.english_score_25th}}</td>
                                            <td>{{act_data.english_score_75th}}</td>
                                        </tr>
                                        <tr>
                                            <th>Math</th>
                                            <td>{{act_data.math_score_25th}}</td>
                                            <td>{{act_data.math_score_75th}}</td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div class="tab-pane fade" id="college_living">
                        <div class="row border-bottom-clr">
                            <div class="col-md-4">
                                <div class="row tab_cell text-left">
                                    <ul class="p-unset">
                                        <span class="tab_heading">Demographics</span>
                                        <li>
                                            <i class="far fa-circle"></i> <b>All Students Total: </b> {{college_living_data.total}}
                                        </li>
                                        <li>
                                            <i class="far fa-circle"></i> <b>Men: </b> {{college_living_data.totalmale}}
                                        </li>
                                        <li>
                                            <i class="far fa-circle"></i> <b>Women: </b> {{college_living_data.totalfemale}}
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="row tab_cell text-left border-left-clr">
                                    <ul class="p-unset">
                                        <span class="tab_heading">Freshman</span>
                                        <li>
                                            <i class="far fa-circle"></i> <b>Freshmen required to live on campus: </b>
                                            {{college_living_data.freshmen_required}}
                                        </li>
                                        <li>
                                            <i class="far fa-circle"></i> <b>Dormitory Capacity: </b> {{college_living_data.dormitory_capacity}}
                                        </li>
                                        <li>
                                            <i class="far fa-circle"></i> <b>Number of meals per week in board charge: </b>
                                            {{college_living_data.meal_pre_week}}
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="row tab_cell text-left">
                                    <ul class="p-unset">
                                        <span class="tab_heading">General</span>
                                        <li>
                                            <i class="far fa-circle"></i> <b>Calendar System: </b> {{college_living_data.calendar_system}}
                                        </li>
                                        <li>
                                            <i class="far fa-circle"></i> <b>ROTC: </b> {{college_living_data.rotc}}
                                        </li>
                                        <li>
                                            <i class="far fa-circle"></i> <b>Library Services: </b> {{college_living_data.library_services}}
                                        </li>
                                        <li>
                                            <i class="far fa-circle"></i> <b>Distance education courses offered: </b>
                                            {{college_living_data.distance_education}}
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="row border-bottom-clr " style="padding-bottom:2%">
                            <div class="col-md-6 offset-md-3  table_col">
                                <span><b>NCAA / NAIA</b></span>
                                <div class="table-responsive ncaa_table">
                                    <table class="table text-center  my-auto"
                                        cellspacing="0">
                                        <thead>
                                        <tr>
                                            <th colspan="4">NCAA / NAIA MEMBER FOR</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr class="ncaa_row_one" >
                                            <td><b>Football</b></td>
                                            <td><b>Basketball</b></td>
                                            <td><b>Baseball</b></td>
                                            <td><b>Cross country/track</b></td>
                                        </tr>
                                        <tr class="ncaa_row_two">
                                            <td>{{ncaa_data.for_football}}</td>
                                            <td>{{ncaa_data.for_basketball}}</td>
                                            <td>{{ncaa_data.for_baseball}}</td>
                                            <td>{{ncaa_data.for_crosscountry_track}}</td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-10 offset-md-1  table_col">
                                <span><b>MEMBER OF</b></span>
                                <div class="table-responsive member_of_table">
                                    <table class="table text-center  my-auto"
                                        cellspacing="0">
                                        <thead>
                                        <tr>
                                            <th>National Athletic Association</th>
                                            <th> NCAA <br> <small>National Collegiate Athletic Association</small></th>
                                            <th>NAIA<br><small>National Association of Intercollegiate Athletics</small></th>
                                            <th>NJCAA<br><small>National Junior College Athletic Association</small></th>
                                            <th>NSCAA<br><small>National Small College Athletic Association</small></th>
                                            <th>NCCAA<br><small>National Christian College Athletic Association</small></th>
                                            <th>OTHER</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr class="memberOf_row_one">
                                            <td>{{member_of_data.NAA}}</td>
                                            <td>{{member_of_data.NCAA}}</td>
                                            <td>{{member_of_data.NAIA}}</td>
                                            <td>{{member_of_data.NJCAA}}</td>
                                            <td>{{member_of_data.NSCAA}}</td>
                                            <td>{{member_of_data.NCCAA}}</td>
                                            <td>{{member_of_data.other}}</td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="tab-pane fade" id="money_talks">
                        <div class="row">
                            <div class="col-md-4">
                                <div class="row tab_cell text-left">
                                    <ul class="p-unset">
                                        <span class="tab_heading">Undergrad Average</span>
                                        <li>
                                            <i class="far fa-circle"></i> <b>In State Full-Time Tuition: </b> {{money_talk_data.in_state_tuition}}
                                        </li>
                                        <li>
                                            <i class="far fa-circle"></i> <b>In State Full-Time Fees: </b> {{money_talk_data.in_state_fee}}
                                        </li>
                                        <li>
                                            <i class="far fa-circle"></i> <b>Out State Full-Time Tuition: </b>
                                        {{money_talk_data.out_state_tuition}}
                                        </li>
                                        <li>
                                            <i class="far fa-circle"></i> <b>Out State Full-Time Fees: </b> {{money_talk_data.out_state_fee}}
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-md-4 border-left-clr">
                                <div class="row tab_cell text-left">
                                    <ul class="p-unset">
                                        <span class="tab_heading">Estimated Expenses</span>
                                        <li>
                                            <i class="far fa-circle"></i>  <b>Typical room for academic year: </b> {{money_talk_data.room_charge}}
                                        </li>
                                        <li>
                                            <i class="far fa-circle"></i>  <b>Typical board for academic year: </b>{{money_talk_data.board_charge}}
                                        </li>
                                        <li>
                                            <i class="far fa-circle"></i>  <b>Combined for room and board: </b> {{money_talk_data.combined_charge}}
                                        </li>
                                        <li>
                                            <i class="far fa-circle"></i>  <b>Books and supplies: </b> {{money_talk_data.books_supplies}}
                                        </li>
                                        <li>
                                            <i class="far fa-circle"></i> <b>Other expenses: </b> {{money_talk_data.other_expenses}}
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="row tab_cell text-left">
                                    <ul class="p-unset">
                                        <span class="tab_heading">Financial Aid</span>
                                        <li>
                                            <i class="far fa-circle"></i>  <b>Total Undergraduates Receiving: </b>
                                            {{formatNumber(money_talk_data.total_receiving)}}
                                        </li>
                                        <li>
                                            <i class="far fa-circle"></i>  <b>Full-time Undergraduates Receiving: </b>
                                            {{formatNumber(money_talk_data.full_time_receiving)}}
                                        </li>
                                        <li>
                                            <i class="far fa-circle"></i>  <b>% of Undergraduates Receiving: </b>
                                            {{money_talk_data.percent_receiving}}%
                                        </li>
                                    </ul>
                                    <ul class="p-unset">
                                        <span class="tab_heading">Grant Money</span>
                                        <li>
                                            <i class="far fa-circle"></i>   <b>Total Undergraduates Receiving: </b>
                                            {{formatNumber(money_talk_data.total_receiving)}}
                                        </li>
                                        <li>
                                            <i class="far fa-circle"></i>  <b>Average Grant Award: </b> {{money_talk_data.avg_grant_award}}
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                            <hr class="hr-line">
                        <div class="row mt-5">
                            <div class="col-md-12">
                                <div class="mx-auto net_price text-center">
                                    <a style="cursor: pointer" v-on:click="linkFormat(net_price)" :link-test="net_price" v-if="net_price_flag"><span><i class="fas fa-calculator"></i></span><span class="txt">Net Price Calculator</span></a>
                                    <span v-if="!net_price_flag"><i class="fas fa-calculator"></i></span><span v-if="!net_price_flag" class="txt">Net Price Calculator is Not Available</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div id="main_content">
            <div class="container-fluid">
                <div class="row ">
                    <div class="col-lg-4 p-0">
                        <section class="hotel_div">
                        <div class="row">
                            <h2>Find a Hotel Near Campus</h2>
                        </div>
                        <div class="row">
                            <div class="col-md-3  text-left p-0">
                                <label>College Name</label>
                            </div>
                            <div class="col-md-9 p-0">
                                <input class=" " type="text" v-model="smart_data.name" disabled>
                            </div>
                        </div>
                        <div class="row mb-3">
                            <div class="col-md-3  text-left p-0">
                                <label>Check In</label>
                            </div>
                            <div class="col-md-9 p-0">
                                <datepicker placeholder="Select Check In" format="MMM/dd/yyyy" @selected='disableDatesForcheckOut()' :disabledDates="disabledDates"  v-model="check_in" id="hotel_check_in"  class="vue-date"></datepicker>
                            </div>
                        </div>
                        <div class="row mb-3">
                            <div class="col-md-3  text-left p-0">
                                <label>Check Out</label>
                            </div>
                            <div class="col-md-9 p-0">
                                <datepicker placeholder="Select Check Out" :open-date="openDate" :disabledDates="disabledDatesCheckOut" format="MMM/dd/yyyy" v-model="check_out" id="hotel_check_out"  class="vue-date"></datepicker>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-3  text-left p-0">
                                <label>Rooms</label>
                            </div>
                            <div class="col-md-9 p-0">
                                        <input class=" " type="number" min="1" v-on:blur="checkInteger()" v-model="room_numbers">
                            </div>
                        </div>
                            <div class="row">
                                <div class="col-md-3  text-left p-0">
                                    <label>No. of Guests</label>
                                </div>
                                <div class="col-md-9 p-0">
                                            <input class=" " type="number" min="1" v-on:blur="checkInteger()" v-model="guests">
                                </div>
                            </div>
                        <div class="row ">
                            <div class="col-lg-4 offset-lg-4 col-md-3 offset-md-9 ">
                                <button class="btn " v-on:click="searchHotels()">Search</button>
                            </div>
                        </div>
                        </section>
                        <section>
                        <div class="row map">
                            <div id="map"></div>
                            </div>
                        </section>
                    </div>
                    <div class="col-lg-8 p-0">
                        <div class=" row article_media">
                            <div class="col-md-12 col-lg-12 article_div">
                                <div class="row">
                                <b class="headline">Articles of Interest <hr class="line"></b>

                                </div>
                                <div class="row">
                                    <div class="col-md-6 col-lg-3 img_col p-2 mb-2" v-for="(data,index) in article_of_interest" :key="index">
                                        <div class="article1 mx-auto">
                                            <router-link :to="'/single_article/'+data.slug">
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
                            <div class="col-md-12 col-lg-12  media_interest_div">
                                <div class="row">
                                    <b class="headline">Media of Interest <hr class="line"></b>

                                </div>
                                <div class="row">
                                    <div class="col-md-5 offset-md-1  text-center">
                                        <iframe class="" width="250" height="250" src="https://www.youtube.com/embed/vtOPju9_S8A" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                    </div>
                                    <div class="col-md-5  text-center">
                                        <iframe width="250" height="250" src="https://www.youtube.com/embed/iN5hJNnLHMI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                    </div>
                                </div>
                                <div class="row mt-2">
                                    <div class="col-md-5 offset-md-1  text-center">
                                        <iframe width="250" height="250" src="https://www.youtube.com/embed/nHNSxQXceH8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                    </div>
                                    <div class="col-md-5  text-center">
                                        <iframe width="250" height="250" src="https://www.youtube.com/embed/GWbCiI-1MmY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                    </div>
                                </div>
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
        </div>
        <div class="container-fluid background_color">
            <div class="row">
                <div class="">

                </div>
            </div>
        </div>
        <Footer/>
    </section>

</template>

<script>
    import Axios from 'axios'
    import footer from "@/components/layout_components/Footer";
    import header from "@/components/layout_components/Header";
    import {configs} from '@/config';
    import * as numeral from "numeral";
    import Swal from 'sweetalert2';
    import Datepicker from 'vuejs-datepicker';
    import moment from 'moment';
    export default {
        name: "CollegeProfile",
        components: {
            'Footer': footer,
            'Header': header,
        Datepicker
        },
        data() {
            return {
                collegeId:'',
                smart_data: [],
                college_city:'',
                admission_data: [],
                college_living_data: [],
                user_favorite_colleges: [],
                money_talk_data: [],
                act_data: [],
                sat_data: [],
                member_of_data :[],
                ncaa_data:[],
                net_price : '',
                net_price_flag : true,
                check_in: '',
                check_out: '',
                hotel_city:[],
                selected_hotel_city_id: '',
                room_numbers: '',
                guests:'',
                article_of_interest:[],
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

        created() {
            this.openDate = new Date(Date.now());
            this.collegeId = parseInt(this.$route.query.id);
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

                Axios.post(configs.url + 'api/user_favorite_college',params,config).then(resp=>{
                    for(let data of resp.data){
                        this.user_favorite_colleges.push(data.UNITID);
                    }
                });
            }

            Axios.get(configs.url + 'api/college_profile/' + this.collegeId)
                .then(resp => {
                    this.smart_data = resp.data['smart_facts'][0];

                    this.initMap();


                    let params1 = new URLSearchParams();
                    params1.append("name", this.smart_data.name);


                    let config1 = {
                        headers: { 'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'}
                    };


                    Axios.post(configs.url + 'api/get_hotel_city',params1,config1).then(resp=>{
                        if(resp.data[0] !== undefined){
                            this.poi_id = resp.data[0].poiid_ppn;
                        }
                    });
                    if(this.smart_data.city){
                        this.college_city = this.smart_data.city;
                    }
                    this.admission_data = resp.data['admission'][0];
                    if(resp.data['net_price'][0]!== null){
                        this.net_price = resp.data['net_price'][0].link;
                    }else{
                        this.net_price_flag = false;
                    }


                    this.admission_data.app_fee = this.formatPrice(this.admission_data.app_fee);
                    if(this.admission_data.avg_gpa === null){
                        this.admission_data.avg_gpa = 'N/A'
                    }
                    this.sat_data = resp.data['SAT'][0];
                    this.act_data = resp.data['ACT'][0];

                    this.college_living_data = resp.data['college_living'][0];

                    this.college_living_data.total = this.formatNumber(this.college_living_data.total);
                    this.college_living_data.totalmale = this.formatNumber(this.college_living_data.totalmale);
                    this.college_living_data.totalfemale = this.formatNumber(this.college_living_data.totalfemale);
                    this.college_living_data.dormitory_capacity = this.formatNumber(this.college_living_data.dormitory_capacity);
                    this.college_living_data.meal_pre_week = this.formatNumber(this.college_living_data.meal_pre_week);



                    if (this.college_living_data.freshmen_required === 1) {
                        this.college_living_data.freshmen_required = 'Yes'
                    } else if (this.college_living_data.freshmen_required === 2) {
                        this.college_living_data.freshmen_required = 'No'
                    } else if (this.college_living_data.freshmen_required === -1) {
                        this.college_living_data.freshmen_required = 'Not reported'
                    } else {
                        this.college_living_data.freshmen_required = 'Not applicable'
                    }

                    if (this.college_living_data.calendar_system === 1) {
                        this.college_living_data.calendar_system = 'Semester'
                    } else if (this.college_living_data.calendar_system === 2) {
                        this.college_living_data.calendar_system = 'Quarter'
                    } else if (this.college_living_data.calendar_system === 3) {
                        this.college_living_data.calendar_system = 'Trimester'
                    } else if (this.college_living_data.calendar_system === 4) {
                        this.college_living_data.calendar_system = 'Four-one-four plan'
                    } else if (this.college_living_data.calendar_system === 5) {
                        this.college_living_data.calendar_system = 'Other academic year'
                    } else if (this.college_living_data.calendar_system === 6) {
                        this.college_living_data.calendar_system = 'Differs by program'
                    } else if (this.college_living_data.calendar_system === 7) {
                        this.college_living_data.calendar_system = 'Continuous'
                    } else {
                        this.college_living_data.calendar_system = 'Not applicable'
                    }

                    if (this.college_living_data.rotc === 1) {
                        this.college_living_data.rotc = 'Yes'
                    } else if (this.college_living_data.rotc === 0) {
                        this.college_living_data.rotc = 'Implied no'
                    } else {
                        this.college_living_data.rotc = 'Not reported'
                    }


                    if (this.college_living_data.distance_education === 1) {
                        this.college_living_data.distance_education = 'yes'
                    } else if (this.college_living_data.distance_education === 0) {
                        this.college_living_data.distance_education = 'Implied no'
                    } else if (this.college_living_data.distance_education === -1) {
                        this.college_living_data.distance_education = 'Not reported'
                    } else {
                        this.college_living_data.distance_education = 'Not applicable'
                    }

                    if (this.college_living_data.library_services === 1) {
                        this.college_living_data.library_services = 'Yes'
                    } else if (this.college_living_data.library_services === 0) {
                        this.college_living_data.library_services = 'Implied no'
                    } else if (this.college_living_data.library_services === -1) {
                        this.college_living_data.library_services = 'Not reported'
                    } else {
                        this.college_living_data.library_services = 'Not applicable'
                    }

                    this.ncaa_data = resp.data['NCAA'][0];

                    if(this.ncaa_data.for_football === 1){
                        this.ncaa_data.for_football = 'Yes'
                    }else{
                        this.ncaa_data.for_football = 'No'
                    }

                    if(this.ncaa_data.for_basketball === 1){
                        this.ncaa_data.for_basketball = 'Yes'
                    }else{
                        this.ncaa_data.for_basketball = 'No'
                    }

                    if(this.ncaa_data.for_baseball === 1){
                        this.ncaa_data.for_baseball = 'Yes'
                    }else{
                        this.ncaa_data.for_baseball = 'No'
                    }

                    if(this.ncaa_data.for_crosscountry_track === 1){
                        this.ncaa_data.for_crosscountry_track = 'Yes'
                    }else{
                        this.ncaa_data.for_crosscountry_track = 'No'
                    }


                    this.member_of_data = resp.data['MEMBER'][0];

                    if(this.member_of_data.NAA === 1){
                        this.member_of_data.NAA = 'Yes'
                    }else{
                        this.member_of_data.NAA = 'No'
                    }

                    if(this.member_of_data.NCAA === 1){
                        this.member_of_data.NCAA = 'Yes'
                    }else{
                        this.member_of_data.NCAA = 'No'
                    }

                    if(this.member_of_data.NAIA === 1){
                        this.member_of_data.NAIA = 'Yes'
                    }else{
                        this.member_of_data.NAIA = 'No'
                    }

                    if(this.member_of_data.NJCAA === 1){
                        this.member_of_data.NJCAA = 'Yes'
                    }else{
                        this.member_of_data.NJCAA = 'No'
                    }

                    if(this.member_of_data.NSCAA === 1){
                        this.member_of_data.NSCAA = 'Yes'
                    }else{
                        this.member_of_data.NSCAA = 'No'
                    }

                    if(this.member_of_data.NCCAA === 1){
                        this.member_of_data.NCCAA = 'Yes'
                    }else{
                        this.member_of_data.NCCAA = 'No'
                    }

                    if(this.member_of_data.other === 1){
                        this.member_of_data.other = 'Yes'
                    }else{
                        this.member_of_data.other = 'No'
                    }

                    this.money_talk_data = resp.data['money_talk'][0];

                    this.money_talk_data.in_state_tuition = this.formatPrice(this.money_talk_data.in_state_tuition);
                    this.money_talk_data.in_state_fee = this.formatPrice(this.money_talk_data.in_state_fee);
                    this.money_talk_data.out_state_tuition = this.formatPrice(this.money_talk_data.out_state_tuition);
                    this.money_talk_data.out_state_fee = this.formatPrice(this.money_talk_data.out_state_fee);
                    this.money_talk_data.room_charge = this.formatPrice(this.money_talk_data.room_charge);
                    this.money_talk_data.board_charge = this.formatPrice(this.money_talk_data.board_charge);
                    this.money_talk_data.books_supplies = this.formatPrice(this.money_talk_data.books_supplies);
                    this.money_talk_data.other_expenses = this.formatPrice(this.money_talk_data.other_expenses);
                    this.money_talk_data.avg_grant_award = this.formatPrice(this.money_talk_data.avg_grant_award);


                    if (this.money_talk_data.combined_charge === '.') {
                        this.money_talk_data.combined_charge = 'N/A'
                    }else{
                        this.money_talk_data.combined_charge = this.formatPrice(this.money_talk_data.combined_charge);
                    }

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
                        this.article_of_interest = resp.data;
                    });

                });

            if(configs.cities.length <= 0){
                Axios.get(configs.url + 'api/get_cities').then(resp=>{
                    configs.cities = resp.data;
                });
            }
        },
        mounted(){

            let self= this;
            $('.vue-date input[type=text]').addClass('date_picker');
            $('.date_picker').css({"height":"30px","width":"100%","padding": ".375rem .75rem","border": "1px solid #001D3D","border-radius": "0px"});

            $('.hotel_city_dropdown').select2({
                "val" : null,
                "placeholder" : 'Select City',
                width: '100%'
            }).on("select2:select", function (e) {
                self.selected_hotel_city_id = e.params.data.id;
            });
            $('select2-container--default').css({"width" : "100%"});
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
            initMap() {
                let self = this;
                let myLatLng =  {
                    lat:this.smart_data.latitude,
                    lng: this.smart_data.longitude
                };
                this.map = new google.maps.Map(document.getElementById('map'), {
                    center:myLatLng,
                    scrollwheel: false,
                    zoom: 8
                });
                let marker = new google.maps.Marker({
                    position: myLatLng,
                    map: self.map,
                    title: self.smart_data.name,
                });
            },
            formatPrice(value) {
                if(value !== null){
                    return '$'+numeral(value).format('0,0.00');
                }

            },
            formatNumber(value) {
                if(value!==null){
                    return numeral(value).format('0,0');
                }
            },
            linkFormat(url){
                if(url.slice(0,4) !== 'http'){
                    window.open('//'+url, "_blank");
                } else {
                    window.open(url, "_blank");
                }
            },
            knownAs(value){
                if(value !== null && value !== undefined){
                    if(value.includes("|")){
                        return value.replace(/\|/g," | ");
                    }else{
                        return value;
                    }
                }else{
                    return '';
                }
            },
            addToFavorite(){
                if(localStorage.getItem("scv_user_token")){
                    let user_id = localStorage.getItem("scv_user_id");

                    let params2 = new URLSearchParams();
                    params2.append("user_id", user_id);
                    params2.append("uni_id", this.collegeId);


                    let config2 = {
                        headers: { 'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'}
                    };

                    Axios.post(configs.url+ 'api/add_favorite', params2,config2).then(resp=>{
                        this.user_favorite_colleges.push(this.collegeId);
                        console.log(this.user_favorite_colleges.includes(this.collegeId));
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
            removeToFavorite(){
                let user_id = localStorage.getItem("scv_user_id");

                let params = new URLSearchParams();
                params.append("user_id", user_id);
                params.append("uni_id", this.collegeId);


                let config = {
                    headers: { 'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'}
                };

                Axios.post(configs.url+ 'api/remove_favorite',params,config).then(resp=>{
                    let i = 0;
                    for(let college of this.user_favorite_colleges){
                        if(college === this.collegeId){
                            this.user_favorite_colleges.splice(i , 1);
                        }
                        i++;
                    }
                    Swal.fire('SUCCESS!','This College has been removed from your Favorites!','success');
                })

            },
            searchHotels(){
                    if(this.check_in  !=='' && this.check_out !==''  &&   this.room_numbers!==''  &&   this.guests !==''){

                        console.log(this.poi_id);
                        if(this.poi_id ===''){
                            let self = this;

                            Swal.fire({
                                text : "Sorry, no accommodations could be found. Please try a manual search.",
                                showCancelButton: true,
                                confirmButtonText: 'OK',
                                cancelButtonText: 'Cancel'
                            }).then((result) => {
                                if (result.value) {
                                    self.$router.push('/manual_search')
                                }
                            });

                        }else{
                            let longitude = this.smart_data.longitude;
                            let latitude = this.smart_data.latitude;
                            let college_name = this.smart_data.name;
                            this.check_in = moment(this.check_in).format('MM DD YYYY');
                            let chkIn = this.check_in.split(' ');
                            this.check_in = '';
                            for(let i of chkIn){
                                this.check_in += '%2F'+ i;
                            }
                            this.check_in = this.check_in.replace('%2F','');
                            this.check_out = moment(this.check_out).format('MM DD YYYY');
                            let chkOut = this.check_out.split(' ');
                            this.check_out = '';
                            for(let i of chkOut){
                                this.check_out += '%2F'+ i;
                            }
                            this.check_out = this.check_out.replace('%2F','');
                            let new_link = 'http://secure.rezserver.com/hotels/results/?refid=2547&poi_id='+ this.poi_id +'&radius=5&check_out=' + this.check_out+'&check_in=' +this.check_in + '&adults='+ this.guests+ '&rooms=' + this.room_numbers ;

                            window.open(new_link, "_blank_blank");

                            this.check_in='';
                            this.check_out='';
                            this.room_numbers='';
                            this.guests='';
                        }



                    }else{
                        Swal.fire({
                            text : "All fields are required!"
                        });
                    }

            }
        },

    };

</script>


<style scoped>

    @media only screen and (max-width: 991px) {

        .blue_chart{
            background-image: none !important;
            background-color: #0D64CC !important;
        }
        .article1{
            height: 250px !important;
            max-width: 250px !important;
        }
        .art{
            background-repeat: no-repeat !important;
            height: 250px !important;
            background-size:cover !important;
        }
    }

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

    @media only screen and (max-width: 767px) {
        .border-left-clr
        {
            border: none !important;
        }
        .border-right-clr
        {
            border: none !important;
        }
        .border-bottom-clr
        {
            border: none !important;
        }


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

    .fav_btn {
        padding: 40px 0px 80px 0px;
    }

    #main_content {
        margin: 40px;
    }

    .hotel_div {
        background-color: #001D3D;
        padding: 35px 20px;
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

    .tab_div {
        margin: 0px 5vw;
    }

    .nav-tabs {
        margin-top: -30px;
        width: 100%;
    }


    .nav-tabs a {
        background-color: #fff;
        height: 77px;
        color: #0D64CC;
        font-size: 20px;
        padding: 20px 0px;
        border-radius: 0px;
        border: 1px solid #0D64CC;
    }

    .nav-tabs .nav-item.show .nav-link, .nav-tabs .nav-link.active {
        background-color: #0D64CC;
        border: 1px solid #0D64CC;
        color: #fff;
    }
    .tab_cell ul li{
    font-size: 14px;
    }

    .tab_div ul {
        list-style: none;
        width: 100%;
    }
    .fa-circle{
        font-size: 9px;
        margin-right: 20px;
        color: #0D64CC;
    }
    .inline{
        display: inline !important;
    }

    .tab_info {
        width: 100%;
        border: 1px solid #0D64CC;
        margin-top: 4vh;
    }

    .tab_cell li {
        margin-top: 30px;
    }

    .tab_cell {
        padding: 20px;
    }

    .tab-content {
        margin-top:20px;
    }

    .tab_heading {
        color: #0D64CC;
        font-size: 20px;
    }

    .table_row {
        padding: 10px;
        margin-top: 10px;
    }

    .table_col {
        text-align: center;
    }

    .act_table thead {
        font-size: 16px;
        background-color: #01A035;
        color: #fff;
    }

    .sat_table thead {
        font-size: 16px;
        background-color: #001D3D;
        color: #fff;
    }

    .act_table tbody th, .sat_table tbody th {
        background-color: #0D63CC;
        border-top: none;
        color: #fff;
        vertical-align : middle;
        width: 35%;
    }

    .table_col span{
        font-size: 30px;
        color:#0D64CC;
        line-height: 110px;
        padding-bottom: 15px;
        border-bottom: 2px dashed #01A035;
    }
    td{
        vertical-align : middle;
    }

    .act_table tbody > tr > td:nth-child(2n), .act_table thead > tr > th:nth-child(2n) {
        border-right: 1px solid #0D63CC;
    }

    .sat_table tbody > tr > td:nth-child(2n), .sat_table thead > tr > th:nth-child(2n) {
        border-right: 1px solid #0D63CC;
    }

    .table-striped > tbody > tr:nth-child(2n+2) > td {
        background-color: #AEDEFF;
    }

    .table-striped > tbody > tr:nth-child(2n+2) > th {
        background-color: #4AACFF;
    }

    .ncaa_table table , .member_of_table table{
        width: 100%;
    }
    .ncaa_table thead{
        border: none;
        background-color: #001D3D;
        color: #fff;
        font-size: 18px;
    }
    .ncaa_row_one{
        background-color: #0D63CC;
        font-size: 16px;
        color:#fff;
    }
    .ncaa_row_two ,.memberOf_row_one{
        background-color: #EBF7FF;
        font-size: 18px;
        color:#001D3D;
    }
    .ncaa_table >table >tbody>tr>td{
        border-right: 1px solid #001D3D;
        vertical-align : middle;
    }
    .ncaa_table >table >tbody>tr>td:nth-last-child(1){
        border: none;
    }
    .member_of_table thead{
        background-color: #01A135;
        font-size: 16px;
        color:#fff;
        text-align: center;
        line-height: 18px;
    }
    .member_of_table thead small{
        font-size: 11px;
    }
    .member_of_table thead th{
        vertical-align : middle;
    }
    .member_of_table >table >tbody>tr>td , .member_of_table >table >thead>tr>th {
        border-right: 1px solid #0D63CC;
    }
    .member_of_table >table >tbody>tr>td:nth-last-child(1), .member_of_table >table >thead>tr>th:nth-last-child(1){
        border-right: none;
    }

    h1, h2, h3, h4, h5, h6, p, span, label, select, div,a,th,tr,thead,tbody, option, input, button {
        font-family: Montserrat !important;
    }
    .overlap-text{
        width: 100%;
        color: #0D64CC;
        cursor: pointer;
        word-break: break-all;
    }

    .border-left-clr{
        border-right: 2px  dashed #01A135;
        border-left:  2px dashed #01A135;
    }

    .border-bottom-clr{
        border-bottom: 2px dashed #01A135;
    }


    .border-right-clr{
        border-right: 2px dashed #01A135;
    }



.header-title{
    color: white;
    font-weight: bold;
}
    .p-unset{
        padding: 0;
    }
    .inline{
    }
    .hr-line
    {
        border-top: 2px dashed #01A135;
    }

    .net_price .txt{
        font-size: 25px;
        color: #0D64CC;
        font-weight: bold;
    }
    .net_price .fas{
        font-size: 35px;
        color: #01A135;
        margin-right: 10px;
    }

    .line
    {
        border-bottom: 4px dashed #01A035;
        width: 35%;
    }
    #map {
        height: 400px;  /* The height is 400 pixels */
        width: 100%;  /* The width is the width of the web page */
    }

    .map img{
        max-height: 275px;
        width: 100%;
    }
    .article_media{
        background-color: #EBF7FF;
        height: 100%;
    }
    .article_div , .media_interest_div{
        margin: 20px;
    }
    .article_div .headline , .media_interest_div .headline{
        text-align: center;
        font-size: 25px;
        color: #0D64CC;
        width: 100%;
        margin: 20px;
    }


    .img_col{
        padding: 10px;
        text-align: center;
    }
    .article1{
        height: 200px;
        max-width: 200px;
        margin: 0;
    }
    .article1 a:hover
    {
        text-decoration: none;
    }

    .art{
        background-repeat: no-repeat;
        height: 200px;
        background-size:cover;
    }
    .article_title{
        width: 100%;
        margin: 0 auto;
        height: 100%;
        font-size: 12px;
        color: #fff;
        font-weight: bold;
    }
    .article_title span{
        position: relative;
        top: 20%;
    }
    .full-width
    {
        margin-right: -15px !important;
        margin-left: -15px !important;
    }
    .footer_background
    {
        background-color: #001D3D;
        width: 100%;
        height:130px;
    }
    .blue_chart{
        background-image: url("../../public/assets/img/blueChart.png");
        background-size: cover;
        background-repeat: no-repeat;
        width: 100%;
        padding: 40px 0px;
        margin-bottom: -10%;
        height: 247px;
        margin-top: 7%;
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
    .background_color
    {
        background-color: #001d3d;
        height: calc(60px + 1vw);
    }
</style>
