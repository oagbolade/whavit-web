<template>
  <div>
    <section id="home" class="home-banner-03">
      <div class="effect"></div>
      <div class="particles-box bg-cover bg-no-repeat" id="particles-box" style="background-image: url('https://res.cloudinary.com/whavit/image/upload/v1570751842/whavit/IMG_6266_pgigdy.jpg')">
        <canvas class="particles-js-canvas-el" width="2880" height="1662" style="width: 100%; height: 100%;"></canvas>
      </div>
      <div class="container">
        <div class="row align-items-center justify-content-center mt-10">
          <div class="col-12 col-lg-10">
            <div class="hb-text text-center">
              <h1>Need a great cleaning experience?</h1>
              <p>
                Our services were created with you in mind. Get started now.
              </p>
            </div>
          </div>
        </div> 
      </div>
    </section>

    <section id="about" class="section-top-up mb-5">
      <div class="container">
        <div class="row">
          <div class="col-md-4 m-15px-tb">
            <div class="feature-box">
              <div class="text-center">
                <img src="https://res.cloudinary.com/whavit/image/upload/v1572048611/Whavit%20Icon/WhavLite_zwoczw.png" width="30%" alt="">
              </div>
              <div class=" text-center feature-content mt-5">
                <h5>Light Cleaning</h5>
                <p>
                  General and maintenance cleaning but hygienic. This service include cleaning of Bedroom, Living Room & Common Areas, Bathrooms,
                  Kitchen, inside windows and general surfaces.
                </p>
                <div class="btn-ba text-center mt-3 ">
                  <router-link class="btn btn-primary btn-md theme-light mt-5" to="/WhavLight">
                    Learn More
                  </router-link>
                </div>
              </div>
            </div>
          </div> 

          <div class="col-md-4 m-15px-tb">
            <div class="feature-box">
              <div class="text-center">
                <img src="https://res.cloudinary.com/whavit/image/upload/v1576865712/Icons/WhavDip_xiamcd.png" width="30%" alt="">
              </div>
              <div class=" text-center feature-content mt-3">
                <h5>Deep Cleaning</h5>
                <p>
                  The deep cleaning is a thorough and more detailed cleaning service. This is achieved through the use of machines such as scrubbing and vacuuming machines. This
                  includes removing layers of dirt like grease and grime, deep stain removal and disinfection. All the nooks and crannies of your home (provided that they are
                  accessible) will be thoroughly cleaned.
                </p>
                <div class="btn-ba text-center mt-3">
                  <router-link class="btn btn-primary btn-md theme-light" to="/WhavDeep">
                    Learn More
                  </router-link>
                </div>
              </div>
            </div>
          </div>

          <div class="col-md-4 m-15px-tb">
            <div class="feature-box">
              <div class="text-center">
                <img src="https://res.cloudinary.com/whavit/image/upload/v1572048613/Whavit%20Icon/Upholstery_Cleaning_db41po.png" width="30%" alt="">
              </div>
              <div class=" text-center feature-content mt-5">
                <h5>Upholstery Cleaning</h5>
                <p>
                   This service offers a thorough cleaning of your upholstery. We use equipment specific products that can clean your upholstery in the most
                   effective way without compromising on the quality of your furniture.
                </p>
                <div class="btn-ba text-center mt-5">
                  <router-link class="btn btn-primary btn-md theme-light mb-5" to="/upholstery-cleaning">
                    Learn More
                  </router-link>
                </div>
              </div>
            </div>
          </div> 

          <div class="col-md-4 m-15px-tb">
            <div class="feature-box">
              <div class="text-center">
                <img src="https://res.cloudinary.com/whavit/image/upload/v1572048611/Whavit%20Icon/Mattress_Hygiene_qdtud2.png" width="30%" alt="">
              </div>
              <div class=" text-center feature-content mt-5">
                <h5>Mattress Cleaning</h5>
                <p>
                  This service not only cleans but provides a total hygienic solution for your mattresses. We get rid of stains, odour, dust mite, bacteria, and
                  allergens.
                </p>
                <div class="btn-ba text-center mt-5">
                  <router-link class="btn btn-primary btn-md theme-light mb-5" to="/mattress-cleaning">
                    Learn More
                  </router-link>
                </div>
              </div>
            </div>
          </div>

          <div class="col-md-4 m-15px-tb">
            <div class="feature-box">
              <div class="text-center">
                <img src="https://res.cloudinary.com/whavit/image/upload/v1572048610/Whavit%20Icon/AC_Servicing_obw5oj.png" width="30%" alt="">
              </div>
              <div class=" text-center feature-content mt-3 mb-2">
                <h5>AC Servicing & Disinfection</h5>
                <p>
                  This involves cleaning and dusting of debris from the condenser & evaporator coil, filters and other key components of your AC.
                  Thereafter, disinfection of filters, drip pan, drip tube and other components.
                </p>
                <div class="btn-ba text-center mt-3">
                  <router-link class="btn btn-primary btn-md theme-light" to="/ac-servicing">
                    Learn More
                  </router-link>
                </div>
              </div>
            </div>
          </div> 

          <div class="col-md-4 m-15px-tb">
            <div class="feature-box">
              <div class="text-center">
                <img src="https://res.cloudinary.com/whavit/image/upload/v1572048610/Whavit%20Icon/Fumigation_puvoda.png" width="30%" alt="">
              </div>
              <div class=" text-center feature-content mt-3">
                <h5>Fumigation</h5>
                <p>
                   Our green fumigation services include control and 
                   extermination of pest such as roaches, rats, and mosquitoes from your environment.
                </p>
                <div class="btn-ba text-center mt-3">
                  <router-link class="btn btn-primary btn-md theme-light mb-5" to="/fumigation">
                    Learn More
                  </router-link>
                </div>
              </div>
            </div>
          </div>

          <div class="col-md-4 m-15px-tb">
            <div class="feature-box">
              <div class="text-center">
                <img src="https://res.cloudinary.com/whavit/image/upload/v1576865712/Icons/Disinfection_daa3uh.png" width="30%" alt="">
              </div>
              <div class=" text-center feature-content mt-2">
                <h5>Disinfection</h5>
                <p>
                  With our disinfection services, we do non-toxic removal and elimination of a broad spectrum of microscopic organisms, including viruses, mildew,
                  fungi, algae and dust mites from your kids’ room, crèches, restaurants and office.
                </p>
                <div class="btn-ba text-center mt-2">
                  <router-link class="btn btn-primary btn-md theme-light" to="/disinfection">
                    Learn More
                  </router-link>
                </div>
              </div>
            </div>
          </div>

          <div class="col-md-4 m-15px-tb">
            <div class="feature-box">
              <div class="text-center">
                <img src="https://res.cloudinary.com/whavit/image/upload/v1572048611/Whavit%20Icon/Carpet_Cleaning_j6v4yn.png" width="30%" alt="">
              </div>
              <div class=" text-center feature-content mt-5">
                <h5>Carpet Cleaning</h5>
                <p>
                  This service offers a thorough cleaning of your carpet. We use equipment specific products that can clean your carpet in the most effective way
                  without compromising on the integrity of your carpet. 
                </p>
                <div class="btn-ba text-center mt-3">
                  <router-link class="btn btn-primary btn-md theme-light mb-5" to="/carpet-cleaning">
                    Learn More
                  </router-link>
                </div>
              </div>
            </div>
          </div> 

          <div class="col-md-4 m-15px-tb">
            <div class="feature-box">
              <div class="text-center">
                <img src="https://res.cloudinary.com/whavit/image/upload/v1576865712/Icons/Post_Contruction_dzw70d.png" width="30%" alt="">
              </div>
              <div class=" text-center feature-content mt-4">
                <h5>Post-Construction</h5>
                <p>
                  With our Post Construction Cleaning, we make your space ready to move into. Our PC Cleaning is well detailed and mechanized. This
                  service includes deep cleaning and removal of debris, cement and paint stains.
                </p>
                <div class="btn-ba text-center mt-3">
                  <router-link class="btn btn-primary btn-md theme-light" to="/post-construction">
                    Learn More
                  </router-link>
                </div>
              </div>
            </div>
          </div> 

          <div class="col-md-4 m-15px-tb">
            <div class="feature-box">
              <div class="text-center">
                <img src="https://res.cloudinary.com/whavit/image/upload/v1576865712/Icons/Floor_Restoration_vypqyc.png" width="30%" alt="">
              </div>
              <div class=" text-center feature-content mt-2">
                <h5>Floor Restoration</h5>
                <p>
                   With the best combination of our floor restoration chemicals and equipment, we can revive your old marble, granite and terrazzo floors to a new
                   shine.
                </p>
                <div class="btn-ba text-center mt-3">
                  <router-link class="btn btn-primary btn-md theme-light" to="/floor-restoration">
                    Learn More
                  </router-link>
                </div>
              </div>
            </div>
          </div> 

        </div> 
      </div>
    </section>
    <Footer />
  </div>
</template>


<script>
/* eslint-disable */

import Footer from "../../components/Includes/Main/Footer.vue";
import GeneralTags from "./../../mixins/gtm.js";


export default {
  name: "Products",
  components: {
    Footer
  },
  data() {
    return {
      base: "",
      token: localStorage.getItem("token")
    };
  },
  methods: {
    
  },
  created() {
    jQuery($);
 
  },
mounted() {
    GeneralTags();

    this.base = this.$store.state.base_url;
  
  }
};
</script>
<style scoped>
</style>

