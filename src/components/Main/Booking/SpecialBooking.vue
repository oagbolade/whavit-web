<template>
  <div>
    <div class="full-page-container" :class="{ 'mt-10': auth != true }">
      <div class="full-page-content-container container-fluid">
        <div class="full-page-content-inner">
          <div class="container-fluid">
            <div>
              <b-alert
                class="text-center timer"
                variant="primary"
                fade
                :show="showDismissibleAlert"
                @dismissed="showDismissibleAlert = false"
              >
                <h4>
                  {{ timeDetails.minutes }}m : {{ timeDetails.seconds }}s Hurry!
                  use this code <b>WhavFirst</b> to get N1000 discount on your
                  first order
                </h4>
              </b-alert>
            </div>
            <div class="dashboard-headline text-center">
              <h3>Start With Whavit! Book Cleaning!</h3>
            </div>
            <div class="row reverse-row" style="margin-bottom: 20px;">
              <div class="col-lg-9">
                <div class="alert alert-danger" v-if="$v.$error">
                  Please check your inputs and try again
                </div>
                <form @submit.prevent="submit">
                  <vue-good-wizard
                    :steps="steps"
                    :onNext="nextClicked"
                    :onBack="backClicked"
                  >
                    <div slot="page1">
                      <fieldset
                        id="form"
                        class="dashboard-box margin-top-0 border-primary"
                      >
                        <div class="headline">
                          <h4 class="text-primary">
                            1. Choose Special Cleaning Services?
                          </h4>
                        </div>

                        <div class="content with-padding">
                          <div class="row">
                            <div class="col-lg-12">
                              <!-- <h4 class="text-muted">Other Services</h4> -->
                              <!-- <p>Get more services.</p> -->
                              <div class="switches-list">
                                <div
                                  class="switch-container"
                                  v-for="service in services"
                                  :key="service.id"
                                >
                                  <label class="switch">
                                    <input
                                      type="checkbox"
                                      :checked="
                                        checkArrayToggle(service.id, true)
                                      "
                                      @click="toggleChecked(service.id)"
                                      v-on:change="checkService(service)"
                                      :id="'service' + service.id"
                                    />
                                    <span class="switch-button"></span>
                                    {{ service.title }}
                                  </label>

                                  <!-- <b-modal :id="'modal-1'+service.id" :title="'Let us get more information to provide an excellent '+service.title +' service'" no-enforce-focus>
                                       <ul class="list-group ml-4"
                                        v-for="(attribute,index) in service.attribute_name"
                                        :key="`a${index}`">
                                        <h5 class="text-capitalize text-underline ml-4">{{ attribute.name }}</h5>
                                        <li
                                          class="list-grou"
                                          v-for="(attr,index) in attribute.attribute"
                                          :key="`b${index}`"
                                        >
                                          <label :for="`radio-2${attr.id}`" class="" style="text-transform:capitalize">
                                            <span class="radio-label"></span>
                                            {{ attr.measurement }} 
                                          </label>
                                          <input type="number" @input="checkMeta(attr,attribute,$event.target.value)" >
                                        </li>
                                        
                                      </ul> -->

                                  <div
                                    class="mt-1"
                                    :id="'cards' + service.id"
                                    v-if="
                                      service.attribute_name.length >= 1 &&
                                        service.clicked ===
                                          'clicked' + service.id
                                    "
                                  >
                                    <ul
                                      class="list-group ml-4 attribute-input"
                                      v-for="(attribute,
                                      index) in service.attribute_name"
                                      :key="`a${index}`"
                                    >
                                      <!-- <h5 class="text-capitalize text-underline ml-4">{{ attribute.name }}</h5> -->
                                      <li
                                        class="list-group"
                                        v-for="(attr,
                                        index) in attribute.attribute"
                                        :key="`b${index}`"
                                      >
                                        <div class="col-lg-6">
                                          <img
                                            class="attribute-image"
                                            :src="attr.image_icons"
                                            alt="image"
                                          />
                                          <label
                                            :for="`radio-2${attr.id}`"
                                            class=""
                                            style="text-transform:capitalize"
                                          >
                                            <span class="radio-label"></span
                                            ><br />
                                            {{ attr.measurement }}
                                          </label>
                                          <input
                                            v-if="
                                              service.title === 'Fumigation'
                                            "
                                            type="number"
                                            :placeholder="placeHolderValue"
                                            min="0"
                                            max="10"
                                            oninput="validity.valid||(value='');"
                                            @input="
                                              checkMetaFumigation(
                                                attr,
                                                attribute,
                                                $event.target.value
                                              )
                                            "
                                          />
                                          <input
                                            v-else
                                            type="number"
                                            :placeholder="placeHolderValue"
                                            min="0"
                                            oninput="validity.valid||(value='');"
                                            @input="
                                              checkMeta(
                                                attr,
                                                attribute,
                                                $event.target.value
                                              )
                                            "
                                          />
                                        </div>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <GuaranteeView />
                      </fieldset>
                    </div>
                    <div slot="page2">
                      <fieldset
                        id="form"
                        class="dashboard-box margin-top-0 border-primary"
                      >
                        <div class="headline">
                          <h4 class="text-primary">
                            2. Want Extra Services?
                          </h4>
                        </div>

                        <div class="content with-padding">
                          <div class="row">
                            <div class="col-lg-12">
                              <h4 class="text-muted">
                                Extra Cleaning You Want?
                              </h4>
                              <p>
                                We can offer cleaning for areas your want but
                                cleaning type doesn't cover.
                              </p>

                              <div class="switches-list">
                                <div
                                  class="switch-container"
                                  v-for="extra in extras"
                                  :key="extra.id"
                                >
                                  <label class="switch mt-2"
                                    >{{ extra.title }}
                                    <input
                                      type="checkbox"
                                      v-on:change="checkExtra(extra)"
                                      :checked="checkArrayToggle(extra.id)"
                                      @click="toggleChecked(extra.id)"
                                      :id="'extras' + extra.id"
                                      value=""
                                    />
                                    <span class="switch-button"></span>
                                  </label>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </fieldset>
                    </div>

                    <div slot="page3">
                      <fieldset
                        id="form"
                        class="dashboard-box margin-top-0 border-primary"
                      >
                        <div class="headline">
                          <h4 class="text-primary">
                            <i class="icon-material-outline-access-time"></i>
                            Timing and Location
                          </h4>
                        </div>

                        <div class="content with-padding">
                          <div class="row">
                            <div class="col-lg-12">
                              <div class="form-group form-row">
                                <div class="required col-md-6">
                                  <label for="time" class="text-muted"
                                    >Time</label
                                  >
                                  <!-- <input type="time" class="border" id="time" v-model="time" /> -->
                                  <!-- <vue-timepicker name="time" v-model="time" class="w-time" :format="YourFormat"></vue-timepicker> -->
                                  <select name="time" v-model="time">
                                    <option>8:00 AM</option>
                                    <option>9:00 AM</option>
                                    <option>10:00 AM</option>
                                    <option>11:00 AM</option>
                                    <option>12:00 PM</option>
                                    <option>1:00 PM</option>
                                    <option>2:00 PM</option>
                                    <option>3:00 PM</option>
                                    <option>4:00 PM</option>
                                  </select>
                                  <div v-if="time_error">
                                    <h6 class="feedback">Time is required</h6>
                                  </div>
                                </div>
                                <div class="required col-md-6">
                                  <label for="date" class="text-muted"
                                    >Set Date</label
                                  >
                                  <!-- <input type="text" readonly="readonly" class="border" id="start_date" v-model="start_date" /> -->
                                  <datepicker
                                    name="start_date"
                                    :format="customFormatter"
                                    v-model="start_date"
                                    :disabled-dates="state.disabledDates"
                                  ></datepicker>
                                  <div v-if="start_date_error">
                                    <h6 class="feedback">Date is required</h6>
                                  </div>
                                </div>
                              </div>
                              <div class="form-group form-row">
                                <div class="required col-md-6">
                                  <label for="location" class="text-muted"
                                    >Select Location
                                    <small class="float-right mr-lg-3"
                                      >or location closest to you</small
                                    ></label
                                  >

                                  <select
                                    name
                                    id="location"
                                    class="border full-booking-select"
                                    v-model="location"
                                  >
                                    <option
                                      :value="previouslySelectedLocation"
                                      :selected="true"
                                      v-if="previouslySelectedLocation !== null"
                                    >
                                      {{ previouslySelectedLocation }}
                                    </option>
                                    <option
                                      v-for="(location, index) in locations"
                                      :key="index"
                                      :value="location"
                                      >{{ location.name }}</option
                                    >
                                  </select>
                                  <div v-if="location_error">
                                    <h6 class="feedback">
                                      Location is required
                                    </h6>
                                  </div>
                                </div>
                                <div class="required col-md-6">
                                  <label for="address" class="text-muted"
                                    >Address</label
                                  >
                                  <input
                                    type="text"
                                    class="border full-booking-select"
                                    id="address"
                                    placeholder="House address"
                                    v-model="address"
                                  />
                                  <div v-if="address_error">
                                    <h6 class="feedback">
                                      Address is required
                                    </h6>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </fieldset>
                    </div>
                    <div slot="page4">
                      <fieldset
                        id="form"
                        class="dashboard-box margin-top-0 border-primary"
                      >
                        <div class="headline">
                          <h4 class="text-primary">
                            4. Discount
                          </h4>
                        </div>

                        <div class="content with-padding">
                          <div class="row">
                            <div class="col-lg-12 form-inline">
                              <div class="form-group">
                                <label for="discount_code" class="text-muted"
                                  >Discount Code</label
                                >
                                <input
                                  type="text"
                                  class="border"
                                  id="discount_code"
                                  placeholder="Code"
                                  v-model="discount_code"
                                />
                              </div>
                              <div class="form-group ml-4 mt-2">
                                <button
                                  id="removeDiscount"
                                  @click.prevent="removeDiscount()"
                                  class="btn btn-md btn-danger"
                                  hidden="true"
                                >
                                  Remove Discount
                                </button>
                                <button
                                  id="addDiscount"
                                  @click.prevent="checkDiscount()"
                                  type="button"
                                  class="btn btn-md btn-primary"
                                >
                                  Apply Code
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </fieldset>
                    </div>
                    <div slot="page5">
                      <fieldset
                        id="form"
                        class="dashboard-box margin-top-0 border-primary"
                      >
                        <div class="headline">
                          <h4 class="text-primary">
                            <i class="icon-brand-cc-mastercard"></i> Payment
                          </h4>
                        </div>

                        <div class="content with-padding">
                          <div class="row">
                            <div class="col-lg-12">
                              <div class="form-group form-row" v-if="!auth">
                                <div class="required col-md-6">
                                  <label for="first_name" class="text-muted"
                                    >First Name</label
                                  >
                                  <input
                                    type="text"
                                    class="border"
                                    placeholder="First Name"
                                    v-model="first_name"
                                    value=""
                                  />
                                </div>
                                <div class="required col-md-6">
                                  <label for="last_name" class="text-muted"
                                    >Last Name</label
                                  >
                                  <input
                                    type="text"
                                    class="border"
                                    placeholder="Last Name"
                                    v-model="last_name"
                                    required
                                  />
                                </div>
                              </div>

                              <div class="form-group form-row" v-if="!auth">
                                <div class="required col-md-6">
                                  <label for="email" class="text-muted"
                                    >Email Address</label
                                  >
                                  <input
                                    type="email"
                                    name
                                    id="email"
                                    class="border"
                                    placeholder="Email address"
                                    v-model="email"
                                    required
                                  />
                                </div>
                              </div>

                              <div class="form-group form-row" v-if="!auth">
                                <div class="required col-md-6">
                                  <label for="password" class="text-muted"
                                    >Create Password</label
                                  >
                                  <input
                                    type="password"
                                    name="password"
                                    class="border"
                                    placeholder="Password"
                                    v-model="password"
                                    required
                                  />
                                </div>

                                <div class="required col-md-6">
                                  <label for="password" class="text-muted"
                                    >Confirm Password</label
                                  >
                                  <input
                                    type="password"
                                    name="confirm_password"
                                    class="border"
                                    placeholder="Confirm Password"
                                    v-model="password2"
                                    required
                                  />
                                  <div v-if="$v.$error">
                                    <span
                                      class="text-danger text-bold"
                                      v-if="!$v.password2.sameAs"
                                      >* Passwords don't match</span
                                    >
                                  </div>
                                </div>
                              </div>

                              <div class="form-group form-row">
                                <div class="col-md-12">
                                  <h5 class="my-2 text-muted">
                                    Select Payment method:
                                  </h5>
                                  <div class="card border mb-0" v-if="auth">
                                    <div class="card-header">
                                      <div class="float-left">
                                        <div class="radio">
                                          <input
                                            id="radio-1"
                                            name="radio"
                                            type="radio"
                                            value="wallet"
                                            v-model="payment_method"
                                          />
                                          <label for="radio-1" class="pl-4">
                                            <span
                                              class="radio-label mr-2"
                                            ></span>
                                            Wallet
                                          </label>
                                        </div>
                                      </div>
                                      <div class="float-right mt-1" v-if="auth">
                                        <span>Balance:</span>
                                        &#8358;
                                        {{ formatPrice(wallet.balance) }}
                                      </div>
                                    </div>
                                  </div>
                                  <div class="card border my-1">
                                    <div class="card-header">
                                      <div class="float-left">
                                        <div class="radio">
                                          <input
                                            id="radio-2"
                                            name="radio"
                                            type="radio"
                                            value="card"
                                            v-model="payment_method"
                                          />
                                          <label for="radio-2" class="pl-4">
                                            <span
                                              class="radio-label mr-2"
                                            ></span>
                                            Pay With Card
                                          </label>
                                        </div>
                                      </div>
                                      <div class="float-right mt-1">
                                        <span></span>
                                      </div>
                                    </div>
                                  </div>
                                  <button
                                    v-if="discount_type === 'fixed'"
                                    type="submit"
                                    class="btn btn-primary btn-lg mt-3 text-center"
                                  >
                                    Pay & Complete Booking &#8358;{{
                                      formatPrice(
                                        calculatePrice - discount_fixed_price
                                      )
                                    }}
                                  </button>
                                  <button
                                    v-else
                                    type="submit"
                                    class="btn btn-primary btn-lg mt-3 text-center"
                                  >
                                    Pay & Complete Booking &#8358;{{
                                      formatPrice(
                                        calculatePrice -
                                          this.discount_percentage *
                                            calculatePrice
                                      )
                                    }}
                                  </button>
                                  <GuaranteeView />
                                </div>
                              </div>
                              <hr />

                              <div v-if="$v.$error">
                                <span
                                  class="text-danger text-bold mt-1"
                                  v-if="!$v.product.required"
                                  >* Product Category is required</span
                                >
                                <span
                                  class="text-danger text-bold mt-1"
                                  v-if="!$v.email.required"
                                  >* Email is required</span
                                >
                                <span
                                  class="text-danger text-bold mt-1"
                                  v-if="!$v.payment_method.required"
                                  >* Payment Method is required</span
                                >
                                <span
                                  class="text-danger text-bold mt-1"
                                  v-if="!$v.no_of_rooms.required"
                                  >* No of Rooms is required</span
                                >
                                <span
                                  class="text-danger text-bold mt-1"
                                  v-if="!$v.schedule.required"
                                  >* Schedule must be selected</span
                                >
                                <span
                                  class="text-danger text-bold mt-1"
                                  v-if="!$v.last_name.required"
                                  >* Last Name is required</span
                                >
                                <span
                                  class="text-danger text-bold mt-1"
                                  v-if="!$v.first_name.required"
                                  >* First Name is required</span
                                >
                                <span
                                  class="text-danger text-bold mt-1"
                                  v-if="!$v.time.required"
                                  >* Time for cleaning is required</span
                                >
                                <span
                                  class="text-danger text-bold mt-1"
                                  v-if="!$v.start_date.required"
                                  >* Set date is required</span
                                >
                                <span
                                  class="text-danger text-bold mt-1"
                                  v-if="!$v.location.required"
                                  >* Please select your location</span
                                >
                                <span
                                  class="text-danger text-bold mt-1"
                                  v-if="!$v.address.required"
                                  >* Address is required</span
                                >
                                <span
                                  class="text-danger text-bold mt-1"
                                  v-if="!$v.password.required"
                                  >* Password is required</span
                                >
                                <span
                                  class="text-danger text-bold mt-1"
                                  v-if="!$v.password.minLength"
                                  >* Password cannot be less than 8
                                  characters</span
                                >
                                <span
                                  class="text-danger text-bold mt-1"
                                  v-if="!$v.email.email"
                                  >* Email must be a valid email address</span
                                >
                              </div>
                            </div>
                          </div>
                        </div>
                      </fieldset>
                    </div>
                  </vue-good-wizard>
                </form>
              </div>
              <!-- First One -->
              <div
                class="col-lg-3 col-md-3 side-bar d-none d-lg-block d-xl-block d-md-none"
              >
                <div class="bg-primary p-4">
                  <div class="sidebar-info-block">
                    <div class="">
                      <div class="">
                        <div class="payment-section">
                          <div class="checkout-row info-row">
                            <div class="payment-info-content info-sidebar-text">
                              <div class="">
                                <h2 class="text-white"><b>Home Cleaning</b></h2>
                                <span
                                  class="text-white"
                                  style="text-transform:Capitalize;"
                                  >{{ schedule }} -</span
                                >
                                <span class="text-white">
                                  Cleaning Schedule</span
                                >
                              </div>
                              <div v-if="product != null">
                                <small class="text-white"
                                  >Areas to be cleaned</small
                                >
                                <ul class="mr-5">
                                  <li
                                    v-for="(area, index) in product.area"
                                    :key="index"
                                    class="text-white"
                                  >
                                    <small>{{ area.title }}</small>
                                  </li>
                                </ul>
                                <!-- <small v-if="booking_service.length != 0" class="text-white">Services included</small>
                                    <ul v-if="booking_service.length != 0" class="mr-5">
                                      <li v-for="(service,index) in product.service" :key="index" class="text-white"><small>{{ service.title }}</small></li>
                                    </ul> -->
                              </div>
                              <div class="home-hero-form editable-summary">
                                <div class="pad-top">
                                  <div class="form-group text-white">
                                    <span v-if="start_date"
                                      >{{ customFormatter(start_date) }} @
                                      {{ time }}</span
                                    >
                                  </div>
                                  <!-- <div class="form-group text-white">
                                            <span>
                                            1 bed, 1 bath (up to
                                            </span><span class="js-job-hours">4</span><span>
                                            hours)
                                            </span>
                                        </div> -->
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <hr class="hr-bg-white bg-white" />
                        <div class="mb-5" id="">
                          <div
                            data-commitment-unit="months"
                            id="commitment"
                          ></div>
                          <div class="payment-section">
                            <div class="checkout-row">
                              <div
                                class="payment-summary-credits payment-summary-row hidden"
                                style=""
                              >
                                <div class="float-left text-white">
                                  Per cleaning
                                </div>
                                <div class="float-right text-white">
                                  &#8358; {{ formatPrice(calculatePrice) }}
                                </div>
                                <br />
                                <div v-if="discount_type !== 'fixed'">
                                  <div class="float-left text-white">
                                    Coupon
                                  </div>
                                  <div class="float-right text-white">
                                    {{ this.discount_percentage }}%
                                  </div>
                                  <br />
                                </div>
                                <!-- <div class="float-left text-white">Special Offer</div>
                                        <div class="float-right text-white">– &#8358; 0.00</div><br> -->
                                <div class="float-left text-white">
                                  Discount
                                </div>
                                <div
                                  v-if="discount_type === 'fixed'"
                                  class="float-right text-white"
                                >
                                  - &#8358;
                                  {{ formatPrice(discount_fixed_price) }}
                                </div>
                                <div
                                  v-else-if="discount_type === 'percentage'"
                                  class="float-right text-white"
                                >
                                  - &#8358;
                                  {{
                                    formatPrice(
                                      this.discount_percentage * calculatePrice
                                    )
                                  }}
                                </div>
                                <div v-else class="float-right text-white">
                                  - &#8358; {{ formatPrice(calculatePrice) }}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <hr class="hr-bg-white bg-white" />
                        <div class="checkout-row total-price-row">
                          <div class="total-price-text">
                            <span class="float-left text-white">TOTAL</span>
                          </div>
                          <div class="float-right mt-3">
                            <h3
                              v-if="discount_type === 'fixed'"
                              class="text-white"
                            >
                              &#8358;
                              {{
                                formatPrice(
                                  calculatePrice - discount_fixed_price
                                )
                              }}
                              <!-- <small class="text-white">.00</small> -->
                            </h3>
                            <h3 v-else class="text-white">
                              &#8358;
                              {{
                                formatPrice(
                                  calculatePrice -
                                    this.discount_percentage * calculatePrice
                                )
                              }}
                              <!-- <small class="text-white">.00</small> -->
                            </h3>
                          </div>
                        </div>
                        <br /><br />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Second One -->
              <div
                class="col-lg-3 thing_to_stick pricing-row d-block d-sm-block d-md-none"
              >
                <div
                  class="bg-primary pl-2 p-2"
                  style="margin-right: 15px;margin-left: -20px;"
                >
                  <div class="sidebar-info-block ">
                    <div class="">
                      <div class="">
                        <div class="payment-section">
                          <div class="checkout-row info-row">
                            <div class="payment-info-content info-sidebar-text">
                              <div class="">
                                <h2 class="text-white"><b>Home Cleaning</b></h2>
                                <span
                                  class="text-white"
                                  style="text-transform:Capitalize;"
                                  >{{ schedule }} -</span
                                >
                                <span class="text-white">
                                  Cleaning Schedule</span
                                >
                              </div>
                            </div>
                          </div>
                        </div>
                        <hr class="hr-bg-white bg-white" />
                        <div class="mb-4" id="">
                          <div
                            data-commitment-unit="months"
                            id="commitment"
                          ></div>
                          <div class="payment-section">
                            <div class="checkout-row">
                              <div
                                class="payment-summary-credits payment-summary-row hidden"
                                style=""
                              >
                                <div class="float-left text-white">
                                  Per cleaning
                                </div>
                                <div class="float-right text-white">
                                  &#8358; {{ formatPrice(calculatePrice) }}
                                </div>
                                <br />
                                <div class="float-left text-white">Coupon</div>
                                <div class="float-right text-white">
                                  {{ this.discount_percentage }}%
                                </div>
                                <br />
                                <!-- <div class="float-left text-white">Special Offer</div>
                                        <div class="float-right text-white">– &#8358; 0.00</div><br> -->
                                <div class="float-left text-white">
                                  Discount
                                </div>
                                <div class="float-right text-white">
                                  - &#8358;
                                  {{
                                    formatPrice(
                                      this.discount_percentage * calculatePrice
                                    )
                                  }}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <hr class="hr-bg-white bg-white" />
                        <div class="checkout-row total-price-row">
                          <div class="total-price-text">
                            <span class="float-left text-white">TOTAL</span>
                          </div>
                          <div class="float-right">
                            <h3
                              v-if="discount_type === 'fixed'"
                              class="text-white"
                            >
                              &#8358;
                              {{
                                formatPrice(
                                  calculatePrice - discount_fixed_price
                                )
                              }}
                              <!-- <small class="text-white">.00</small> -->
                            </h3>
                            <h3 v-else class="text-white">
                              &#8358;
                              {{
                                formatPrice(
                                  calculatePrice -
                                    this.discount_percentage * calculatePrice
                                )
                              }}
                              <!-- <small class="text-white">.00</small> -->
                            </h3>
                          </div>
                          <br />
                          <!-- <u href="" @click="moreDetails" class="float-left text-white"><u>view details</u></a> -->
                          <div>
                            <!-- <b-button v-b-modal.modal-1>Launch demo modal</b-button> -->
                            <b-link
                              href="#"
                              v-b-modal.modal-1
                              class="float-left text-white"
                              ><u>view details</u></b-link
                            >
                            <!-- <b-button variant="outline-primary">Button</b-button> -->

                            <!-- Modal to view prices on mobile view -->
                            <b-modal
                              size="sm"
                              id="modal-1"
                              title="Pricing Details"
                            >
                              <p class="my-4">
                                <b>Per Cleaning:</b>
                                {{ formatPrice(calculatePrice) }}
                              </p>
                              <p v-if="discount_type !== 'fixed'" class="my-4">
                                <b>Coupon:</b> {{ this.discount_percentage }}%
                              </p>
                              <p v-if="discount_type === 'fixed'" class="my-4">
                                <b>Discount:</b>
                                {{ formatPrice(discount_fixed_price) }}
                              </p>
                              <p v-else class="my-4">
                                <b>Discount:</b>
                                {{
                                  formatPrice(
                                    this.discount_percentage * calculatePrice
                                  )
                                }}
                              </p>
                              <p v-if="discount_type === 'fixed'" class="my-4">
                                <b
                                  >Total: &#8358;{{
                                    formatPrice(
                                      calculatePrice - discount_fixed_price
                                    )
                                  }}</b
                                >
                              </p>
                              <p v-else class="my-4">
                                <b
                                  >Total: &#8358;{{
                                    formatPrice(
                                      calculatePrice -
                                        this.discount_percentage *
                                          calculatePrice
                                    )
                                  }}</b
                                >
                              </p>
                              <template
                                v-slot:modal-footer="{ ok, cancel, hide }"
                              >
                                <b-button variant="primary" @click="ok()">
                                  OK
                                </b-button>
                              </template>
                            </b-modal>
                          </div>
                        </div>
                        <br />
                        <br />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="container">
            <div class="row" id="faq">
              <div class="col-md-8"></div>
              <div class="col-md-4"></div>
            </div>
          </div>
        </div>
        <Footer></Footer>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */

import $ from "jquery";
import jQuery from "../../../mixins/jqueryHelper";
import "../../../dashboard-assets/jquery.sticky";
import Footer from "../../../components/Includes/Main/Footer.vue";
import Datepicker from "vuejs-datepicker";
import moment from "moment";
import VueTimepicker from "vue2-timepicker";
import "vue2-timepicker/dist/VueTimepicker.css";
import {
  required,
  requiredIf,
  minLength,
  email,
  sameAs
} from "vuelidate/lib/validators";
import GeneralTags from "./../../../mixins/gtm.js";
import GuaranteeView from "./../GuaranteeView/GuaranteeView";

var state = {
  disabledDates: {
    to: new Date(
      moment()
        .add(1, "days")
        .format("YYYY,MM,D")
    )
  }
};

export default {
  name: "SpecialBooking",
  components: {
    Footer,
    Datepicker,
    VueTimepicker,
    GuaranteeView
  },
  data() {
    return {
      YourFormat: "hh:mm A",
      steps: [
        {
          label: "Choose Special Cleaning",
          slot: "page1"
        },
        // Extra cleaning does not show for special booking
        // {
        //   label: 'Need Extra Cleaning',
        //   slot: 'page2',
        // },
        {
          label: "Timing and Location",
          slot: "page3"
        },
        {
          label: "Discount",
          slot: "page4"
        },
        {
          label: "Payment",
          slot: "page5",
          options: {
            nextDisabled: true // control whether next is disabled or not
          }
        }
      ],
      seen: false,
      cardStatus: null,
      state,
      base: null,
      token: localStorage.getItem("token"),
      user: [],
      extras: [],
      services: [],
      products: [],
      locations: [],
      booking_extra: [],
      booking_service: [],
      meta: [],
      meta_amount: null,
      wallet: {
        balance: 0
      },
      placeHolderValue: 0,
      previouslySelectedLocation: null,
      checked: false,
      currentlyChecked: [],
      discount_code: null,
      discount_type: 0,
      discount_percentage: 0,
      discount_fixed_price: 0,
      product: null,
      no_of_rooms: 0,
      schedule: "once",
      time: null,
      time_error: false,
      address_error: false,
      start_date_error: false,
      location_error: false,
      start_date: null,
      address: null,
      location: null,
      price: null,
      payment_method: null,
      callback: "",
      first_name: "",
      last_name: "",
      password: "",
      password2: "",
      email: "",
      booking: null,
      timeDetails: {
        minutes: 0,
        seconds: 0
      },
      isTimerFor30minsExpired: false,
      showDismissibleAlert: true
    };
  },
  validations: {
    first_name: {
      required: requiredIf(function() {
        return !this.auth;
      })
    },
    last_name: {
      required: requiredIf(function() {
        return !this.auth;
      })
    },
    email: {
      required: requiredIf(function() {
        return !this.auth;
      }),
      email
    },
    password: {
      required: requiredIf(function() {
        return !this.auth;
      }),
      minLength: minLength(8)
    },
    password2: { sameAs: sameAs("password") },
    payment_method: { required },
    // no_of_rooms: { required },
    schedule: { required },
    time: { required },
    start_date: { required },
    address: { required },
    location: { required }
  },
  methods: {
    checkArrayToggle(id, services = false) {
      // if (services === true) {
      //   if(!this.checked){
      //     this.inputIds.forEach(inputId => {
      //       this.otherServicesInput[inputId] = "";
      //     });
      //     console.log(this.otherServicesInput);
      //     return false;
      //   }
      //   else if(this.checked){
      //     return true;
      //   }
      // }

      if (this.currentlyChecked.includes(id)) {
        return true;
      }
      return false;
    },
    toggleChecked(id) {
      if (this.currentlyChecked.includes(id)) {
        let indexToDelete = this.currentlyChecked.indexOf(id);
        this.currentlyChecked.splice(indexToDelete, 1);

        // to remove inputs and reset pricing
        let inputIds = this.services.forEach(service => {
          if (service.attribute_name.length > 0) {
            console.log(service.attribute_name);
            // service.attribute_name.filter(attribute_value => {
            //   return attribute_value.service_id === id;
            // })
          }
        });

        console.log(inputIds);

        // this.services.filter((service)=>{
        //   service.forEach(attribute => {
        //     attribute.attribute_name.forEach(attribute_value => {
        //       console.log(attribute_value);
        //     })

        //   })

        // })
        return false;
      } else if (!this.currentlyChecked.includes(id)) {
        this.currentlyChecked.push(id);
        return true;
      }
    },
    formatPrice(value) {
      let val = value;
      val = parseFloat(val);
      return val.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,");
    },
    nextClicked(currentPage) {
      //Vue validate is not working on this page, dont know why
      //this.$v.$touch();

      console.log("current page " + currentPage);

      if (currentPage === 1) {
        if (!this.time) {
          this.time_error = true;
          return false;
        }

        if (!this.start_date) {
          this.start_date_error = true;
          return false;
        }

        if (!this.address) {
          this.address_error = true;
          return false;
        }

        if (!this.location) {
          this.location_error = true;
          return false;
        }
      }

      this.time_error = false;
      this.start_date_error = false;
      this.location_error = false;
      this.address_error = false;

      return true; //return false if you want to prevent moving to next page
    },
    backClicked(currentPage) {
      console.log("back clicked", currentPage);
      return true; //return false if you want to prevent moving to previous page
    },
    getProducts() {
      const url = this.base + "product-category/all";

      // const loader = this.$loading.show({
      //   backgroundColor: "#ffffff",
      //   zIndex: 99999,
      //   opacity: 1
      // });

      this.$http({
        url: url,
        method: "GET"
      })
        .then(res => {
          this.products = res.data.data;
          console.log("Logged Output: getProducts -> product", this.products);
          // loader.hide();
        })
        .catch(err => {
          // loader.hide();
        });
    },
    getExtras() {
      const url = `${this.base}extra/all`;
      this.$http({ url: url })
        .then(res => {
          this.extraLoaded = true;
          this.extras = res.data.data;
        })
        .catch(err => {});
    },
    getServices() {
      const url = `${this.base}service/all`;
      this.$http({ url: url })
        .then(res => {
          this.serviceLoaded = true;
          this.services = res.data.data;
        })
        .catch(err => {});
    },
    checkExtra(extra) {
      if (this.booking_extra.indexOf(extra) === -1) {
        this.booking_extra.push(extra);
        console.log(this.booking_extra);
      } else {
        this.booking_extra.splice(this.booking_extra.indexOf(extra), 1);
      }
    },
    checkService(service) {
      if (
        service.hasOwnProperty("clicked") == false &&
        service.attribute_name.length >= 1
      ) {
        Object.assign(service, { clicked: "clicked" + service.id });
        this.$bvModal.show("modal-1" + service.id);
        this.booking_service.push(service);
        console.log(this.booking_service);
      } else {
        if (service.attribute_name.length >= 1) {
          delete service.clicked;
          console.log(service);
          $("#cards" + service.id).hide();
        }
        this.booking_service.splice(this.booking_service.indexOf(service), 1);
      }
      // if (extra.attribute_name.length > 0) {
      //     this.booking_extra.push(extra);
      //     console.log(this.booking_extra);
      // } else {
      //   this.booking_extra.splice(this.booking_extra.indexOf(extra), 1);
      // }
    },
    search(nameKey, myArray) {
      for (var i = 0; i < myArray.length; i++) {
        if (myArray[i].attribute_name_id === nameKey) {
          return myArray[i];
        }
      }
    },
    checkMetaFumigation(attr, attribute, meta_amount) {
      const FumigationPricingMap = {
        "1": 25000,
        "2": 25000,
        "3": 35000,
        "4": 45100,
        "5": 54180,
        "6": 62307,
        "7": 68537,
        "8": 75391,
        "9": 82930,
        "10": 91223
      };
      console.log(this.meta.some(el => el.id == attr.id));

      if (this.meta.some(el => el.id == attr.id) == false) {
        Object.assign(attr, {
          meta_main_price: FumigationPricingMap[meta_amount]
            ? FumigationPricingMap[meta_amount]
            : 0
        });
        this.meta.push(attr);
        console.log(this.meta);
      } else if (this.meta.some(el => el.id == attr.id) == true) {
        this.meta.splice(this.meta.indexOf(attr), 1);
        Object.assign(attr, {
          meta_main_price: FumigationPricingMap[meta_amount]
            ? FumigationPricingMap[meta_amount]
            : 0
        });
        this.meta.push(attr);
      } else {
        this.meta.splice(this.meta.indexOf(attr), 1);
      }
    },
    checkMeta(attr, attribute, meta_amount) {
      // if(this.search(attr.attribute_name_id,this.meta) != null){
      //   this.meta.splice(this.meta.indexOf(this.search(attr.attribute_name_id,this.meta)), 1);
      //   console.log("done");
      // }
      console.log(this.meta.some(el => el.id == attr.id));
      if (this.meta.some(el => el.id == attr.id) == false) {
        Object.assign(attr, { meta_main_price: attr.price * meta_amount });
        this.meta.push(attr);
        console.log(this.meta);
      } else if (this.meta.some(el => el.id == attr.id) == true) {
        this.meta.splice(this.meta.indexOf(attr), 1);
        Object.assign(attr, { meta_main_price: attr.price * meta_amount });
        this.meta.push(attr);
      } else {
        this.meta.splice(this.meta.indexOf(attr), 1);
        // console.log(this.meta);
      }
    },
    getLocations() {
      const url = this.base + "location/all";
      this.$http({
        url: url
      })
        .then(res => {
          this.locations = res.data;
        })
        .catch(err => {
          console.log(err);
        });
    },
    checkDiscount() {
      if (this.discount_code !== null && this.isTimerFor30minsExpired) {
        this.$swal.fire({
          type: "info",
          text: "This discount code has expired"
        });
        return false;
      }

      if (this.discount_code !== null) {
        let loader = this.$loading.show({
          backgroundColor: "#ffffff",
          zIndex: 99999,
          opacity: 1
        });
        this.$http({
          url: this.base + "booking/discount/check/" + this.discount_code
        })
          .then(res => {
            let discount = res.data.data;
            window.dataLayer = window.dataLayer || [];
            window.dataLayer.push({
              event: "couponCodeApplied",
              couponcode: discount.code, //fill with the coupon code used
              validationStatus: discount.status === 1 ? "Successful" : "Failed", //return successful if it is, and if it failed return failed
              couponType: discount.discount_type, //replace with type of coupon where anything percent off is percentage discount and 200 off is money off
              accountType: this.user.type ? this.user.type : "", //replace with type of account and leave blank where not present
              couponamount: discount.fixed_price || discount_percentage //fill this with the amount of the coupon, remember to convert percentage to whole number and leave in double decimal places
            });
            console.log(discount);
            if (discount != null) {
              this.discount_code = discount.code;
              this.discount_type = discount.discount_type;
              discount.discount_type === "percentage"
                ? (this.discount_percentage = discount.percentage)
                : (this.discount_fixed_price = discount.fixed_price);
            }
            loader.hide();
            $("#discount_code").attr("disabled", "true");
            $("#addDiscount").hide();
            $("#removeDiscount").removeAttr("hidden");
            this.$swal.fire({
              type: "info",
              text: "Discount Has Been Added"
            });
          })
          .catch(err => {
            loader.hide();
            this.$swal.fire({
              type: "info",
              text: "Discount is not valid"
            });
          });
      }
    },
    addDiscount(booking) {
      let bookingId = booking.id;
      if (this.token !== null && this.discount_code !== null) {
        this.$http({
          url:
            this.base +
            "booking/" +
            bookingId +
            "/update/discount/add/" +
            this.discount_code +
            "?token=" +
            this.token,
          method: "PUT"
        })
          .then(res => {
            let discount = res.data.data;
            console.log(discount);
          })
          .catch(err => {
            console.log(err);
          });
      }
    },
    removeDiscount() {
      if (this.discount_code !== null) {
        this.discount_code = null;
        this.discount_percentage = null;
        $("#removeDiscount").attr("hidden", "true");
        $("#discount_code").removeAttr("disabled");
        $("#addDiscount").show();

        this.$swal.fire({
          type: "info",
          text: "Discount Has Been Removed"
        });
        console.log(discount_code);
      }
    },
    verifyPayment() {
      const urlParams = new URLSearchParams(window.location.search);
      var reference = urlParams.get("reference");

      console.log(urlParams);
      if (reference != null) {
        let booking_id = localStorage.getItem("booking_id");
        if (booking_id == null) {
          this.$router.push("/login");
        }
        let verifyUrl = `${this.base}booking/pay_with_card?reference=${reference}&booking_id=${booking_id}&token=${this.token}`;

        let loader2 = this.$loading.show({
          backgroundColor: "#000000",
          zIndex: 99999
        });

        this.$http({
          url: verifyUrl
        })
          .then(res => {
            var uri = window.location.toString();
            if (uri.indexOf("?") > 0) {
              var clean_uri = uri.substring(0, uri.indexOf("?"));
              window.history.replaceState({}, document.title, clean_uri);
            }

            loader2.hide();

            this.$swal
              .fire({
                type: "success",
                text: "Booking payment confirmed!"
              })
              .then(res => {
                this.$router.push("/user/dashboard/request/" + booking_id);
              });
            localStorage.removeItem("booking_id");
          })
          .catch(err => {
            localStorage.removeItem("booking_id");
            this.$swal
              .fire({
                type: "error",
                text: "Some error occured"
              })
              .then(res => {
                this.$router.push("/user/dashboard/");
              });
            loader2.hide();
          });
      }
    },
    payWithCard(bookingData) {
      let loader = this.$loading.show({
        backgroundColor: "#000000",
        opacity: 0.5
      });

      const url = this.base + "payment/initialize?token=" + this.token;

      const data = {
        callback_url: this.callback,
        amount: this.calculatePrice,
        booking_id: bookingData.id
      };

      this.$http({
        url: url,
        data: data,
        method: "POST"
      })
        .then(res => {
          loader.hide();
          localStorage.setItem("booking_id", bookingData.id);
          window.location = res.data.data.authorization_url;
        })
        .catch(err => {
          loader.hide();
          console.log(err);
        });
    },
    paymentFirstStep(bookingData) {
      if (this.payment_method == "wallet") {
        if (this.wallet.balance < this.price) {
          this.$toastr.error(
            "Insufficient wallet balance,try paying with card",
            "",
            4000
          );
        } else {
          this.payWithWallet(bookingData);
        }
      } else if (this.payment_method == "card") {
        this.payWithCard(bookingData);
      } else {
        return this.$toastr.error("Please select a payment method", "", 4000);
      }
    },
    getWallet() {
      if (this.token != null) {
        // let loader = this.$loading.show({
        //   backgroundColor: "#ffffff",
        //   zIndex: 99999,
        //   opacity: 1
        // });

        this.$http({
          url: this.base + "wallet/view?token=" + this.token
        })
          .then(res => {
            let wallet = res.data.data;
            // console.log(wallet);
            if (wallet != null) {
              this.wallet = wallet;
            }
            // loader.hide();
          })
          .catch(err => {
            // loader.hide();
          });
      } else {
        return;
      }
    },
    submit() {
      this.$v.$touch();
      if (this.$v.$error) return;
      // to form submit after this
      console.log("Form submitted");
      this.makeBooking();
    },
    makeBooking() {
      let loader = this.$loading.show({
        backgroundColor: "#000000",
        opacity: 0.5
      });

      //set price
      this.price = this.calculatePrice;

      let extra_ids = "";
      let service_ids = "";
      if (this.booking_extra.length > 0) {
        for (let index = 0; index < this.booking_extra.length; index++) {
          extra_ids = extra_ids + this.booking_extra[index].id + ",";
        }
        extra_ids = extra_ids.substring(0, extra_ids.length - 1);
      } else {
        // extra_ids = this.booking_extra[0].id;
        extra_ids = null;
      }

      if (this.booking_service.length > 0) {
        for (let index = 0; index < this.booking_service.length; index++) {
          service_ids = service_ids + this.booking_service[index].id + ",";
        }
        service_ids = service_ids.substring(0, service_ids.length - 1);
      } else {
        console.log("No extra service selected");
        // service_ids = this.booking_service[0].id;
        service_ids = null;
      }

      console.log(this.meta);
      let service_attributes = [];
      if (this.meta.length > 0) {
        for (let index = 0; index < this.meta.length; index++) {
          service_attributes.push([
            this.meta[index].id,
            this.meta[index].meta_main_price
          ]);
        }
      }
      // console.log(service_attributes);

      let net_amount = 0;
      let discount = 0;
      if (this.discount_type === "fixed") {
        net_amount = this.price - this.discount_fixed_price;
        discount = this.discount_fixed_price;
      } else {
        net_amount = this.price - this.discount_percentage * this.price;
        discount = this.discount_percentage;
      }

      let startDate = this.customFormatter(this.start_date);

      let location =
        typeof this.location.name === "undefined"
          ? this.location
          : this.location.name;
      localStorage.location = location;

      let booking = {
        booking_service: service_ids,
        booking_extra: extra_ids,
        booking_service_attributes: service_attributes,
        no_of_rooms: this.no_of_rooms,
        schedule: this.schedule,
        time: this.time,
        start_date: startDate,
        address: this.address,
        location: location,
        base_price: this.price,
        net_price: net_amount,
        discount: discount,
        payment_method: this.payment_method
      };

      console.log(booking);

      if (!this.auth) {
        const user = {
          first_name: this.first_name,
          last_name: this.last_name,
          email: this.email,
          password: this.password,
          type: "user"
        };

        this.$store
          .dispatch("register", user)
          .then(res => {
            this.token = res.data.token;
            this.createBooking(booking);
          })
          .catch(err => {
            var errorObj = err.response.data.errors;

            for (const key in errorObj) {
              if (errorObj.hasOwnProperty(key)) {
                this.$swal.fire({
                  type: "error",
                  text: errorObj[key]
                });
              }
            }
            loader.hide();
          });
        //authenticate user, save booking in localstorage
      } else {
        // create booking directly here
        this.createBooking(booking);
      }
    },
    createBooking(booking) {
      let loader = this.$loading.show({
        backgroundColor: "#000000",
        opacity: 0.5
      });

      if (this.booking != null) {
        this.paymentFirstStep();
      }
      // let booking = booking
      const url = `${this.base}booking/full?token=${this.token}`;
      this.$http({
        url: url,
        data: booking,
        method: "POST"
      })
        .then(res => {
          let bookingData = res.data.data;
          window.dataLayer = window.dataLayer || [];
          window.dataLayer.push({
            event: "specialCleaningBooked",
            transactionID: bookingData.id, //return the ID of the transaction done
            productID: booking.product, //return the selected product ID if available
            price: bookingData.net_price, //return the total amount of the cleaning cost requested by the user and also keep in double digit decimals
            serviceCategory: "Special Cleaning Service", //leave this like this
            selectedCleaningServices: [
              "Mattress Hygiene",
              "Carpet Cleaning",
              "Upholstery Cleaning",
              "Fumigation"
            ], //array of all the selected services in the form when booikg fo
            numberOfBedRoom: 456,
            numberOfBeds: 34,
            userBedTypes: ["Baby Size", "King Size", "X-Large", "Medium"],
            numberOfAC: 2345,
            typeOfAC: ["Split AC", "Standing AC", "Cassette AC"],
            timeSelected: 4.0, //return the hour for the scheduled cleaning, leaving the value in double digit
            timeCategory: "AM/PM", //return the time category for the scheduled cleaning with either pm or am
            dateSelected: "27-02-2020", //return the date selected in the calendar by te customer
            daySelected: "monday", //return day, do this by extracting the day from the date selected
            cleaningLocation: "ikoyi", //return the location selected by the user while requesting for cleaning
            cleaningAddress: "9a Abagbon Cl, Victoria Island, Lagos, Nigeria", //return the full address of the user, inputed in the address bar
            accountType: "Whavit For Home" //replace with type of account and leave blank where not present
          });
          if (this.discount_code !== null) {
            this.addDiscount(bookingData);
          }
          loader.hide();
          this.paymentFirstStep(bookingData);
        })
        .catch(err => {
          var errorObj = err;

          console.log(errorObj);

          this.$swal.fire({
            text: "Error occured, try again",
            type: "error"
          });

          // Loader was originally commented, I uncommented it
          loader.hide();
        });
    },
    payWithWallet(bookingData) {
      let loader = this.$loading.show({
        backgroundColor: "#000000",
        opacity: 0.5
      });

      const url = `${this.base}booking/${bookingData.id}/debit_from_wallet?token=+${this.token}`;

      this.$http({
        url: url
      })
        .then(res => {
          loader.hide();

          this.$swal.fire({
            type: "success",
            text: "Payment Successful, booking price deducted from wallet"
          });

          this.$router.push("/user/dashboard/request/" + bookingData.id);

          setTimeout(function() {
            window.location = window.location;
          }, 1200);
        })
        .catch(err => {
          loader.hide();

          var errorSingle = err.response.data.message;

          if (!!errorSingle) {
            this.$toastr.error(errorSingle, "", 4000);
          }
        });
    },
    customFormatter(date) {
      return moment(date).format("D/MM/YYYY");
    },
    setNewCookie() {
      let timeRangeFor30mins = 1800; // 30 minutes in seconds
      let timeRangeFor24hrs = 86400; // 24hrs in seconds
      let currentTime = new Date().getTime();
      //let expirationAfter24hrs = 30 * 60 * 60 * 24;
      let expirationAfter24hrs =
        Math.floor(currentTime / 1000) + timeRangeFor30mins + timeRangeFor24hrs;
      let cookieData = {
        now: currentTime,
        expiry: expirationAfter24hrs
      };
      this.$cookies.set("DiscountTimer", cookieData, expirationAfter24hrs);
      this.now = currentTime;
    },
    isCookieExpired(expiry) {
      let currentTime = new Date().getTime();
      let isExpired = Math.floor(currentTime / 1000) - expiry;

      if (isExpired >= 0) {
        this.setNewCookie();
        return true;
      }
      return false;
    },
    checkTimerCookie() {
      if (!this.$cookies.isKey("DiscountTimer")) {
        this.setNewCookie();
      } else {
        let cookieValue = this.$cookies.get("DiscountTimer");
        if (this.isCookieExpired(cookieValue.expiry)) {
          this.setNewCookie();
        }

        this.now = cookieValue.now;
      }
    },
    showCountdownTimer() {
      const self = this;
      let timeRange = 1800000; // 30 minutes in milli seconds
      var endDate = this.now + timeRange;

      this.timeInterval = setInterval(function() {
        self.isTimerFor30minsExpired = false;

        let countdown = endDate - new Date().getTime();
        if (countdown >= 0) {
          //let days = Math.floor(countdown / (1000 * 60 * 60 * 24));
          //let hours = Math.floor((countdown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
          let mins = Math.floor((countdown % (1000 * 60 * 60)) / (1000 * 60));
          let secs = Math.floor((countdown % (1000 * 60)) / 1000);

          self.timeDetails.minutes = mins;
          self.timeDetails.seconds = secs;

          //console.log(`Minutes: ${mins}, Seconds: ${secs}`);
        } else {
          // To uncomment later
          // self.isTimerFor30minsExpired = true;
          clearInterval(this.timeInterval);
        }
      }, 1000);
    }
  },
  computed: {
    auth() {
      return this.$store.getters.isLoggedIn;
    },
    calculatePrice() {
      let net_price,
        product_price,
        service_price,
        extra_price,
        discount,
        meta_price;

      net_price = 0;
      product_price = 0;
      if (this.product != null) {
        let rooms = "one";
        switch (this.no_of_rooms) {
          case "1":
            rooms = "one";
            break;
          case "2":
            rooms = "two";
            break;
          case "3":
            rooms = "three";
            break;
          case "4":
            rooms = "four";
            break;
          case "5":
            rooms = "five";
            break;
          case "6":
            rooms = "six";
            break;
          case "7":
            rooms = "seven";
            break;
          case "8":
            rooms = "eight";
            break;
          case "9":
            rooms = "nine";
            break;
          case "10":
            rooms = "ten";
            break;
          default:
            rooms = "one";
            break;
        }
        product_price = this.product.price[rooms];
      }

      service_price = 0;
      for (const service in this.booking_service) {
        if (this.booking_service.hasOwnProperty(service)) {
          const element = this.booking_service[service];
          service_price += element.price;
        }
      }

      meta_price = 0;
      for (const attr in this.meta) {
        if (this.meta.hasOwnProperty(attr)) {
          const element = this.meta[attr];
          // meta_price += element.price;
          meta_price += element.meta_main_price;
        }
      }

      extra_price = 0;
      for (const extra in this.booking_extra) {
        if (this.booking_extra.hasOwnProperty(extra)) {
          const element = this.booking_extra[extra];
          extra_price += element.price;
        }
      }

      net_price = service_price + extra_price + product_price + meta_price;

      this.total_price = net_price;
      return net_price;
    }
  },
  created() {
    this.checkTimerCookie();
    jQuery($);
  },
  mounted() {
    GeneralTags();

    this.showCountdownTimer();

    $(".vue__time-picker input").removeClass("display-time");

    if (this.auth !== false) {
      this.user = this.$cookies.get("user");
    }

    this.base = this.$store.state.base_url;
    this.getProducts();
    this.getExtras();
    this.getServices();

    this.getLocations();
    this.getWallet();

    // Kinda hacky but I will manage
    if (localStorage.location) {
      this.previouslySelectedLocation = localStorage.location;
      this.location = localStorage.location;
    }

    if (this.auth) {
      this.verifyPayment();
    }

    if (process.env.NODE_ENV == "development") {
      this.callback = "http://localhost:8080/booking/success";
    } else {
      this.callback = "https://whavit.com/booking/success";
    }
  }
};
</script> 

<style scoped>
/* To make side div sticky */
/* .side-bar{
  z-index: 9999;
  position: fixed;
  right:15px;
} */

/* To make input arrow to always show */
input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  opacity: 1;
}

.attribute-input {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
}

@media only screen and (max-width: 600px) {
  .attribute-input {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
  }
}

@media only screen and (max-width: 960px) {
  .timer {
    margin-top: 60px;
  }

  .reverse-row {
    display: flex;
    flex-direction: column-reverse;
  }

  .thing_to_stick {
    z-index: 100;
    top: 0px;
    left: 0;
    position: fixed;
    padding-top: 60px;
    margin-left: 20px;
    margin-right: 20px;
    width: 100%;
  }

  .checkout-row {
    height: 10px;
    padding: 0;
    margin: 0;
  }

  .hr-bg-white {
    display: none;
  }
  .payment-section {
    display: none;
    height: 10px;
  }

  .pricing-row {
    margin-bottom: 20px;
  }

  .dashboard-headline h3 {
    margin-top: 60px;
    font-size: 20px;
    color: #1181dd;
  }

  .dashboard-headline {
    margin-bottom: 0px;
  }

  .mobile-row {
    padding: 0 0 100px;
  }

  .wizard__step.vgw-mobile[data-v-c21d83ca] {
    display: none;
  }

  .wizard__body__step[data-v-c21d83ca] {
    padding: 0px;
  }

  .wizard__body.vgw-mobile[data-v-c21d83ca] {
    margin-left: -5px;
    margin-right: -5px;
  }

  .dashboard-box[data-v-1fa831ae] {
    /* padding: 20px; */
  }
}
.attribute-image {
  height: 60px;
  width: 60px;
  border-radius: 50%;
}

.feedback {
  color: #e32;
}

.required label {
  font-weight: bold;
}
.required label:after {
  color: #e32;
  content: " *";
  display: inline;
}

.full-booking-select {
  height: 60px;
}

.dashboard-box {
  padding: 20px;
}

.dashboard-box .headline {
  display: block;
  padding: 20px 30px;
  border-bottom: 1px solid #1181dd;
  position: relative;
  /* background-color: #1181dd; */
}

.loading-status {
  position: absolute;
  bottom: 20%;
  width: 100%;
  text-align: center;
  z-index: 1000;
}

.text-underline {
  text-decoration: underline;
}
</style>