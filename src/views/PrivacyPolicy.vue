<template>
    <section>
        <div class="header">

            <Header/>
            <div class="row extra"></div>
        </div>

        <div class="container">
            <div class="row ">
                <div class="col-md-12">
                    <div class="banner mx-auto">
                        <h2>Privacy Policy</h2>
                    </div>
                </div>

            </div>
        </div>

        <div class="container mt-4">
            <div class="row">
                <div class="col-md-12">
                    <b>Effective Date:  May 1, 2018</b>
                    <p>Your privacy and online security is important to us. With the new standards of GDPR in mind, we have updated our Privacy Policy accordingly.</p>
                    <p>This privacy notice discloses the privacy practices for Smart College Visit and our website; http://smartcollegevisit.com. This privacy notice applies solely to information collected by this website, except where stated otherwise. It will notify you of the following:</p>
                    <ul>
                        <li>What information we collect;</li>
                        <li>With whom it is shared;</li>
                        <li>How it can be corrected;</li>
                        <li>How it is secured;</li>
                        <li>How policy changes will be communicated; and</li>
                        <li>How to address concerns over misuse of personal data.</li>
                    </ul>

                    <h3>Information Collection, Use, and Sharing</h3>
                    <p>We are the sole owners of the information collected on this site. We only have access to/collect information that you voluntarily give us via email or other direct contact from you. We will not sell or rent this information to anyone.</p>
                    <p>We will use your information to respond to you, regarding the reason you contacted us. We will not share your information with any third party outside of our organization, other than as necessary.</p>
                    <p>We primarily collect data to (1) deliver our newsletter and (2) deliver requested information via forms.</p>
                    <p>Unless you ask us not to, we may contact you via email in the future to tell you about specials, new products or services, or changes to this privacy policy.</p>
                    <h3>Your Access to and Control Over Information</h3>
                    <p>You may opt out of any future contacts from us at any time. You can do the following at any time by contacting us via the email address provided on our website:</p>
                    <ul>
                        <li>See what data we have about you, if any.</li>
                        <li>Change/correct any data we have about you.</li>
                        <li>Have us delete any data we have about you.</li>
                        <li>Express any concern you have about our use of your data</li>
                    </ul>
                    <h3>Sharing</h3>
                    <p>We do share aggregated demographic information with our partners and advertisers. This is not linked to any personal information that can identify any individual person.</p>
                    <p>We partner with another party to provide specific services, specifically email handling. When the user signs up for these services, we will share names, or other contact information that is necessary for the third party to provide these services. These parties are not allowed to use personally identifiable information except for the purpose of providing these services.</p>
                    <h3>Security</h3>
                    <p>We take precautions to protect your information. When you submit sensitive information via the website, your information is protected both online and offline.</p>
                    <p>If we ever have the need to collect sensitive information (such as credit card data), that information is encrypted and transmitted to us in a secure way. You can verify this by looking for a closed lock icon at the bottom of your web browser, or looking for “https” at the beginning of the address of the web page.</p>
                    <p>While we use encryption to protect sensitive information transmitted online, we also protect your information offline. Only employees who need the information to perform a specific job (e.g. billing or customer service) are granted access to personally identifiable information. The computers/servers on which we store personally identifiable information are kept in a secure environment.</p>
                    <h3>Cookies</h3>
                    <p>We use “cookies” on this site. A cookie is a piece of data stored on a site visitor’s hard drive to help us improve your access to our site and identify repeat visitors to our site. Cookies can also enable us to track and target the interests of our users to enhance their experience on our site. Some of our business partners may use cookies on our site (e.g., advertisers). However, we have no access to or control over these cookies.</p>
                    <h3>Links</h3>
                    <p>This web site contains links to other sites. Please be aware that we are not responsible for the content or privacy practices of such other sites. We encourage our users to be aware when they leave our site and to read the privacy statements of any other site that collects personally identifiable information.</p>
                    <h3>Surveys & Contests</h3>
                    <p>From time-to-time our site requests information via surveys or contests. Participation in these surveys or contests is completely voluntary and you may choose whether or not to participate and therefore disclose this information. Information requested may include contact information (such as name and shipping address), and demographic information (such as zip code, age level). Contact information will be used to notify the winners and award prizes. Survey information will be used for purposes of monitoring or improving the use and satisfaction of this site.</p>
                    <h3>Notification of Changes</h3>
                    <p>Whenever material changes are made to the privacy notice specify how you will notify consumers.</p>
                    <h3>Other Provisions as Required by Law</h3>
                    <p>Numerous other provisions and/or practices may be required as a result of laws, international treaties, or industry practices. It is up to you to determine what additional practices must be followed and/or what additional disclosures are required. Please take special notice of the California Online Privacy Protection Act (CalOPPA), which is frequently amended and now includes a disclosure requirement for “Do Not Track” signals.</p>
                    <p>If you feel that we are not abiding by this privacy policy, you should contact us immediately via telephone at 540-200-8780 or via email at <span class="green">privacy@smartcollegevisit.com</span>.</p>
                </div>
            </div>

        </div>
        <Footer/>
    </section>
</template>

<script>
    import footer from "@/components/layout_components/Footer";
    import header from "@/components/layout_components/Header";
    export default {
        name: "PrivacyPolicy",
        components: {
            'Footer': footer,
            'Header': header,

        },
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

    h3{
        color: #001d3d;
        font-weight: bold;
        margin: 15px 0px;

    }
    .green{
        color: #01A035;
    }
    p{
        text-align: justify;
        line-height: 1.8em;
        margin: 25px 0px;
        font-weight: 400;

    }
    .extra{
        margin-top: 100px;
    }
</style>