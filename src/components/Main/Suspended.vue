<template>
    <div>
        <div class="container">
            <div class="row justify-content-center py-5 mt-2">
                <div class="col-md-6">
                    <center class="text-danger">
                        <span class="icon-line-awesome-ban fa-6x"></span>
                        <p class="lead">
                            Your Account has been suspend due to violation of one or more of the site's term of use.
                            <br>Kindly contact the site administrator.
                        </p>
                        <router-link to="/contact">
                            <button class="btn-blue btn">
                                Contact us
                            </button>
                        </router-link>
                    </center>
                </div>
            </div>
        </div>
        <Footer></Footer>
    </div>
</template>
<script>
import Footer from '../components/Includes/Main/Footer.vue'
import GeneralTags from "./../../mixins/gtm.js";

export default {
    name : 'Suspended',
    components : {
        Footer
    },
    created() {
        jQuery($);
    }
    mounted() {
            GeneralTags();

    }
}
</script>