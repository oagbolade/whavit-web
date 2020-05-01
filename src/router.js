import Vue from "vue";
import Router from "vue-router";

const LandingPage = () => import("@/components/Main/LandingPage");
const Products = () => import("@/components/Main/Products");
const AboutUs = () => import("@/components/Main/AboutUs");
const Whavpro = () => import("@/components/Main/Whavpro");
const Business = () => import("@/components/Main/Business");
const FaqComponent = () => import("@/components/Main/Faq");
const ContactUs = () => import("@/components/Main/ContactUs");
const Privacy = () => import("@/components/Main/Privacy");
const Terms = () => import("@/components/Main/Terms");
const BossLady = () => import("@/components/Main/BossLady");
const Executive = () => import("@/components/Main/Executive");
const ChooseBookingType = () =>
  import("@/components/Main/Booking/SelectBookingType");

const SuccessPage = () => import("@/components/Main/Booking/SuccessPage");

const FullBooking = () => import("@/components/Main/Booking/FullBooking");
const SpecialBooking = () => import("@/components/Main/Booking/SpecialBooking");
const SelectedSpecialBooking = () =>
  import("@/components/Main/Booking/SelectedSpecialBooking");
const Upholstery = () => import("@/components/Main/Upholstery");
const WhavDeep = () => import("@/components/Main/WhavDeep");
const WhavLight = () => import("@/components/Main/WhavLight");
const Mattress = () => import("@/components/Main/Mattress");
const FloorRestoration = () => import("@/components/Main/FloorRestoration");
const Carpet = () => import("@/components/Main/Carpet");
const ACServicing = () => import("@/components/Main/ACServicing");
const Fumigation = () => import("@/components/Main/Fumigation");
const WhavPremium = () => import("@/components/Main/WhavPremium");
const Disinfection = () => import("@/components/Main/Disinfection");
const QualityAssurance = () => import("@/components/Main/QualityAssurance");
const Moving = () => import("@/components/Main/Moving");
const PostConstruction = () => import("@/components/Main/PostConstruction");

const SelectRegister = () => import("@/components/Auth/SelectUserType");
const UserRegister = () => import("@/components/Auth/UserRegister");
const BusinessRegister = () => import("@/components/Auth/BusinessRegister");
const UserLogin = () => import("@/components/Auth/Login");
const ForgotPassword = () => import("@/components/Auth/ForgotPassword");
const PasswordReset = () => import("@/components/Auth/PasswordReset");

const VendorReg = () => import("@/components/Auth/VendorReg");

import UserWallet from "@/components/User/MyWallet";
import UserRequest from "@/components/User/Requests";
import UserDashboard from "@/components/User/Dashboard";
import UserIndex from "@/components/User/Index";
import UserSettings from "@/components/User/Settings";
import UserSingleRequest from "@/components/User/SingleRequest";
import UserAssignVendor from "@/components/User/AssignVendor";
import UserReferral from "@/components/User/Referral";
import Tip from "@/components/User/Tip";
import Review from "@/components/User/Review";
import RequestTask from "@/components/User/RequestTask";
import RequestReschedule from "@/components/User/Reschedule";
import RequestPayment from "@/components/User/Payment";
import RateVendor from "@/components/User/RateVendor";

import VendorQuestion from "@/components/Vendor/Questions";
import VendorWaitingList from "@/components/Vendor/WaitingList";
import VendorIndex from "@/components/Vendor/Index";
import VendorSettings from "@/components/Vendor/Settings";
import VendorDashboard from "@/components/Vendor/Dashboard";
import SingleRequest from "@/components/Vendor/SingleRequest";
import AllRequests from "@/components/Vendor/AllRequests";
import VendorWallet from "@/components/Vendor/MyWallet";
import AddBank from "@/components/Vendor/AddBank";

import BusinessIndex from "@/components/Business/Index";
import BusinessSettings from "@/components/Business/Settings";
import BusinessWallet from "@/components/Business/MyWallet";
import BusinessDashboard from "@/components/Business/Dashboard";
import BusinessBooking from "@/components/Main/BusinessBooking";
import BusinessSingleRequest from "@/components/Business/SingleRequest";
import BusinessRequest from "@/components/Business/Requests";
import BusinessReschedule from "@/components/Business/Reschedule";
import BusinessVendor from "@/components/Business/Vendors";
import BusinessReferral from "@/components/Business/Referral";

import NotFound from "@/components/Error/404";

Vue.use(Router);
const redirect_url =
  "https://www.whavit.com/?utm_source=oriki%20SPA&utm_medium=business%20partnerships&utm_campaign=1500%20%2B%20Free%20Bathroom%20Disinfection&utm_content=Printed%20Vouchers%20-%20orikispecial";

const router = new Router({
  mode: "history",
  routes: [
    {
      path: "/clean",
      redirect: to => {
        window.location = redirect_url;
      }
    },
    {
      path: "/privacy",
      component: Privacy,
      meta: {
        title: "Whavit - Privacy Policy",
        metaTags: [
          {
            name: "description",
            content: "Hire Cleaning Experts At Ease"
          },
          {
            property: "og:description",
            content:
              "Your home/business workspace cleaning needs a lift. We help several homes and businesses like yours achieve this. We have got you covered."
          }
        ]
      }
    },
    {
      path: "/terms",
      component: Terms,
      meta: {
        title: "Whavit - Terms",
        metaTags: [
          {
            name: "description",
            content: "Hire Cleaning Experts At Ease"
          },
          {
            property: "og:description",
            content:
              "Your home/business workspace cleaning needs a lift. We help several homes and businesses like yours achieve this. We have got you covered."
          }
        ]
      }
    },
    {
      path: "/about",
      component: AboutUs,
      name: "AboutUs",
      meta: {
        title: "Whavit - About",
        metaTags: [
          {
            name: "description",
            content: "Hire Cleaning Experts At Ease"
          },
          {
            property: "og:description",
            content:
              "Your home/business workspace cleaning needs a lift. We help several homes and businesses like yours achieve this. We have got you covered."
          }
        ]
      }
    },
    {
      path: "/whavpro",
      component: Whavpro,
      name: "Whavpro",
      meta: {
        title: "Whavit - Become A WhavPro",
        metaTags: [
          {
            name: "description",
            content: "Hire Cleaning Experts At Ease"
          },
          {
            property: "og:description",
            content:
              "Your home/business workspace cleaning needs a lift. We help several homes and businesses like yours achieve this. We have got you covered."
          }
        ]
      }
    },
    {
      path: "/booking-request",
      component: ChooseBookingType,
      name: "SelectBookingType",
      meta: {
        title: "Whavit - Book Cleaning",
        metaTags: [
          {
            name: "description",
            content: "Hire Cleaning Experts At Ease"
          },
          {
            property: "og:description",
            content:
              "Your home/business workspace cleaning needs a lift. We help several homes and businesses like yours achieve this. We have got you covered."
          }
        ]
      }
    },
    {
      path: "/booking/full",
      component: FullBooking,
      name: "FullBooking",
      meta: {
        title: "Whavit - Book Cleaning",
        metaTags: [
          {
            name: "description",
            content: "Hire Cleaning Experts At Ease"
          },
          {
            property: "og:description",
            content: "Hire Cleaning Experts At Ease"
          }
        ]
      }
    },
    {
      path: "/booking/special",
      component: SpecialBooking,
      name: "SpecialBooking",
      meta: {
        title: "Whavit - Book Cleaning",
        metaTags: [
          {
            name: "description",
            content: "Hire Cleaning Experts At Ease"
          },
          {
            property: "og:description",
            content: "Hire Cleaning Experts At Ease"
          }
        ]
      }
    },
    {
      path: "/book",
      component: SelectedSpecialBooking,
      name: "SelectedSpecialBooking",
      props(route) {
        return { myprop: route.query.myprop };
      },
      meta: {
        title: "Whavit - Book Cleaning",
        metaTags: [
          {
            name: "description",
            content: "Hire Cleaning Experts At Ease"
          },
          {
            property: "og:description",
            content: "Hire Cleaning Experts At Ease"
          }
        ]
      }
    },
    {
      path: "/business/book",
      component: BusinessBooking
    },
    {
      path: "/products",
      component: Products,
      name: "Products",
      meta: {
        guest: true
      }
    },
    {
      path: "/business",
      component: Business,
      name: "Business",
      meta: {
        title: "Whavit - Whavit For Business",
        metaTags: [
          {
            name: "description",
            content: "Hire Cleaning Experts At Ease"
          },
          {
            property: "og:description",
            content:
              "Your home/business workspace cleaning needs a lift. We help several homes and businesses like yours achieve this. We have got you covered."
          }
        ]
      }
    },
    {
      path: "/contact-us",
      component: ContactUs,
      name: "ContactUs",
      meta: {
        title: "Whavit - Get In Touch",
        metaTags: [
          {
            name: "description",
            content: "Hire Cleaning Experts At Ease"
          },
          {
            property: "og:description",
            content:
              "Your home/business workspace cleaning needs a lift. We help several homes and businesses like yours achieve this. We have got you covered."
          }
        ]
      }
    },
    {
      path: "/faqs",
      component: FaqComponent,
      name: "FaqComponent",
      meta: {
        title: "Whavit - Frequently Asked Questions",
        metaTags: [
          {
            name: "description",
            content: "Hire Cleaning Experts At Ease"
          },
          {
            property: "og:description",
            content:
              "Your home/business workspace cleaning needs a lift. We help several homes and businesses like yours achieve this. We have got you covered."
          }
        ]
      }
    },
    {
      path: "/",
      component: LandingPage,
      name: "homepage",
      meta: {
        title: "Whavit - Hire Cleaning Experts",
        metaTags: [
          {
            name: "description",
            content: "Hire Cleaning Experts At Ease"
          },
          {
            property: "og:description",
            content:
              "Your home/business workspace cleaning needs a lift. We help several homes and businesses like yours achieve this. We have got you covered."
          }
        ]
      }
    },
    {
      path: "/disinfection",
      component: Disinfection,
      meta: {
        title: "Whavit - Disinfection",
        metaTags: [
          {
            name: "description",
            content: "Hire Cleaning Experts At Ease"
          },
          {
            property: "og:description",
            content: "Hire Cleaning Experts At Ease"
          }
        ]
      }
    },
    {
      path: "/quality-assurance",
      component: QualityAssurance,
      meta: {
        title: "Whavit - Quality Assurance",
        metaTags: [
          {
            name: "description",
            content: "Hire Cleaning Experts At Ease"
          },
          {
            property: "og:description",
            content: "Hire Cleaning Experts At Ease"
          }
        ]
      }
    },
    {
      path: "/moving",
      component: Moving,
      meta: {
        title: "Whavit - Moving In/Out",
        metaTags: [
          {
            name: "description",
            content: "Hire Cleaning Experts At Ease"
          },
          {
            property: "og:description",
            content: "Hire Cleaning Experts At Ease"
          }
        ]
      }
    },
    {
      path: "/post-construction",
      component: PostConstruction,
      meta: {
        title: "Whavit - Post-Construction",
        metaTags: [
          {
            name: "description",
            content: "Hire Cleaning Experts At Ease"
          },
          {
            property: "og:description",
            content: "Hire Cleaning Experts At Ease"
          }
        ]
      }
    },
    {
      path: "/premium",
      component: WhavPremium,
      meta: {
        title: "Whavit - WhavPremium",
        metaTags: [
          {
            name: "description",
            content: "Hire Cleaning Experts At Ease"
          },
          {
            property: "og:description",
            content: "Hire Cleaning Experts At Ease"
          }
        ]
      }
    },
    {
      path: "/boss-lady",
      component: BossLady,
      meta: {
        title: "Whavit - Boss Lady Subscription",
        metaTags: [
          {
            name: "description",
            content: "Hire Cleaning Experts At Ease"
          },
          {
            property: "og:description",
            content:
              "Your home/business workspace cleaning needs a lift. We help several homes and businesses like yours achieve this. We have got you covered."
          }
        ]
      }
    },
    {
      path: "/executive",
      component: Executive,
      meta: {
        title: "Whavit - Executive Subscription",
        metaTags: [
          {
            name: "description",
            content: "Hire Cleaning Experts At Ease"
          },
          {
            property: "og:description",
            content: "Hire Cleaning Experts At Ease"
          }
        ]
      }
    },
    {
      path: "/upholstery-cleaning",
      component: Upholstery,
      meta: {
        title: "Whavit - Upholstery Cleaning",
        metaTags: [
          {
            name: "description",
            content: "Hire Cleaning Experts At Ease"
          },
          {
            property: "og:description",
            content:
              "Your home/business workspace cleaning needs a lift. We help several homes and businesses like yours achieve this. We have got you covered."
          }
        ]
      }
    },
    {
      path: "/WhavDeep",
      component: WhavDeep
    },
    {
      path: "/WhavLight",
      component: WhavLight
    },
    {
      path: "/floor-restoration",
      component: FloorRestoration,
      meta: {
        title: "Whavit - Floor Restoration",
        metaTags: [
          {
            name: "description",
            content: "Hire Cleaning Experts At Ease"
          },
          {
            property: "og:description",
            content:
              "Your home/business workspace cleaning needs a lift. We help several homes and businesses like yours achieve this. We have got you covered."
          }
        ]
      }
    },
    {
      path: "/mattress-cleaning",
      component: Mattress,
      meta: {
        title: "Whavit - Mattress Cleaining",
        metaTags: [
          {
            name: "description",
            content: "Hire Cleaning Experts At Ease"
          },
          {
            property: "og:description",
            content:
              "Your home/business workspace cleaning needs a lift. We help several homes and businesses like yours achieve this. We have got you covered."
          }
        ]
      }
    },
    {
      path: "/ac-servicing",
      component: ACServicing,
      meta: {
        title: "Whavit - AC Servicing",
        metaTags: [
          {
            name: "description",
            content: "Hire Cleaning Experts At Ease"
          },
          {
            property: "og:description",
            content:
              "Your home/business workspace cleaning needs a lift. We help several homes and businesses like yours achieve this. We have got you covered."
          }
        ]
      }
    },
    {
      path: "/carpet-cleaning",
      component: Carpet,
      meta: {
        title: "Whavit - Carpet Cleaning",
        metaTags: [
          {
            name: "description",
            content: "Hire Cleaning Experts At Ease"
          },
          {
            property: "og:description",
            content:
              "Your home/business workspace cleaning needs a lift. We help several homes and businesses like yours achieve this. We have got you covered."
          }
        ]
      }
    },
    {
      path: "/fumigation",
      component: Fumigation,
      meta: {
        title: "Whavit - Fumigation",
        metaTags: [
          {
            name: "description",
            content: "Hire Cleaning Experts At Ease"
          },
          {
            property: "og:description",
            content:
              "Your home/business workspace cleaning needs a lift. We help several homes and businesses like yours achieve this. We have got you covered."
          }
        ]
      }
    },
    {
      path: "/register",
      component: SelectRegister,
      name: "SelectRegister",
      meta: {
        title: "Whavit - Create An Account",
        metaTags: [
          {
            name: "description",
            content: "Hire Cleaning Experts At Ease"
          },
          {
            property: "og:description",
            content:
              "Your home/business workspace cleaning needs a lift. We help several homes and businesses like yours achieve this. We have got you covered."
          }
        ]
      }
    },
    {
      path: "/user/register/:referral_code?",
      component: UserRegister,
      name: "UserRegister",
      meta: {
        title: "Whavit - Create An Account",
        metaTags: [
          {
            name: "description",
            content: "Hire Cleaning Experts At Ease"
          },
          {
            property: "og:description",
            content: "Hire Cleaning Experts At Ease"
          }
        ]
      }
    },
    {
      path: "/business/register/:referral_code?",
      component: BusinessRegister,
      name: "BusinessRegister",
      meta: {
        title: "Whavit - Create Business Account",
        metaTags: [
          {
            name: "description",
            content: "Hire Cleaning Experts At Ease"
          },
          {
            property: "og:description",
            content: "Hire Cleaning Experts At Ease"
          }
        ]
      }
    },
    {
      path: "/login",
      component: UserLogin,
      name: "UserLogin",
      meta: {
        title: "Whavit - Login",
        metaTags: [
          {
            name: "description",
            content: "Hire Cleaning Experts At Ease"
          },
          {
            property: "og:description",
            content:
              "Your home/business workspace cleaning needs a lift. We help several homes and businesses like yours achieve this. We have got you covered."
          }
        ]
      }
    },
    {
      path: "/forgot/password",
      component: ForgotPassword,
      name: "ForgotPassword",
      meta: {
        guest: true
      }
    },
    {
      path: "/password/reset/:id",
      component: PasswordReset,
      name: "PasswordReset",
      meta: {
        guest: true
      }
    },
    {
      path: "/vendor/register",
      component: VendorReg,
      name: "VendorReg",
      meta: {
        title: "Whavit - Become A WhavPro",
        metaTags: [
          {
            name: "description",
            content: "Hire Cleaning Experts At Ease"
          },
          {
            property: "og:description",
            content:
              "Your home/business workspace cleaning needs a lift. We help several homes and businesses like yours achieve this. We have got you covered."
          }
        ]
      }
    },
    {
      path: "/vendor/on-boarding",
      component: VendorQuestion,
      name: "VendorQuestion"
    },
    {
      path: "/vendor/waiting-list",
      component: VendorWaitingList,
      name: "VendorWaitingList"
    },
    {
      path: "/booking/success",
      component: SuccessPage,
      name: "SuccessPage",
      meta: {
        guest: true
      }
    },
    {
      path: "/user/dashboard/",
      component: UserDashboard,
      meta: {
        requiresAuth: true,
        isUser: true
      },
      children: [
        {
          path: "/",
          component: UserIndex,
          name: "UserDashboard"
        },
        {
          path: "tip/:vendorId",
          component: Tip,
          name: "Tip",
          meta: {
            guest: true
          }
        },
        {
          path: "review/:vendorId",
          component: Review,
          name: "Review",
          meta: {
            guest: true
          }
        },
        {
          path: "referral",
          component: UserReferral,
          name: "UserReferral"
        },
        {
          path: "index",
          component: UserIndex
        },
        {
          path: "profile",
          component: UserSettings
        },
        {
          path: "wallet",
          component: UserWallet
        },
        {
          path: "requests",
          component: UserRequest
        },
        {
          path: "request/:id",
          component: UserSingleRequest
        },
        {
          path: "request/assign/:id",
          component: UserAssignVendor
        },
        {
          path: "request/reschedule/:id",
          component: RequestReschedule
        },
        {
          path: "request/tasks/:id",
          component: RequestTask
        },
        {
          path: "request/rate/:id",
          component: RateVendor
        },
        {
          path: "request/payment/:id",
          component: RequestPayment
        }
      ]
    },
    {
      path: "/vendor/dashboard",
      component: VendorDashboard,
      meta: {
        requiresAuth: true,
        isVendor: true
      },
      children: [
        {
          path: "/",
          component: VendorIndex,
          name: "VendorDashboard"
        },
        {
          path: "index",
          component: VendorIndex
        },
        {
          path: "profile",
          component: VendorSettings
        },
        {
          path: "request/:requestId",
          component: SingleRequest
        },
        {
          path: "requests",
          component: AllRequests
        },
        {
          path: "wallet",
          component: VendorWallet
        },
        {
          path: "add-bank",
          component: AddBank
        }
      ]
    },
    {
      path: "/business/dashboard",
      component: BusinessDashboard,
      meta: {
        requiresAuth: true,
        isBusiness: true
      },
      children: [
        {
          path: "/",
          component: BusinessIndex,
          name: "BusinessDashboard"
        },
        {
          path: "referral",
          component: BusinessReferral,
          name: "BusinessReferral"
        },
        {
          path: "index",
          component: BusinessIndex
        },
        {
          path: "profile",
          component: BusinessSettings
        },
        {
          path: "wallet",
          component: BusinessWallet
        },
        {
          path: "requests",
          component: BusinessRequest
        },
        {
          path: "request/:id",
          component: BusinessSingleRequest
        },
        {
          path: "request/reschedule/:id",
          component: BusinessReschedule
        },
        {
          path: "vendor/:id",
          component: BusinessVendor
        }
      ]
    },
    {
      path: "/404",
      component: NotFound
    },
    {
      path: "*",
      redirect: "/404"
    }
  ],
  scrollBehavior() {
    return { x: 0, y: 0 };
  }
});

router.beforeEach((to, from, next) => {
  // This goes through the matched routes from last to first, finding the closest route with a title.
  // eg. if we have /some/deep/nested/route and /some, /deep, and /nested have titles, nested's will be chosen.
  const nearestWithTitle = to.matched
    .slice()
    .reverse()
    .find(r => r.meta && r.meta.title);

  // Find the nearest route element with meta tags.
  const nearestWithMeta = to.matched
    .slice()
    .reverse()
    .find(r => r.meta && r.meta.metaTags);
  // const previousNearestWithMeta = from.matched.slice().reverse().find(r => r.meta && r.meta.metaTags);

  // If a route with a title was found, set the document (page) title to that value.
  if (nearestWithTitle) document.title = nearestWithTitle.meta.title;

  // Remove any stale meta tags from the document using the key attribute we set below.
  Array.from(document.querySelectorAll("[data-vue-router-controlled]")).map(
    el => el.parentNode.removeChild(el)
  );

  // Skip rendering meta tags if there are none.
  if (!nearestWithMeta) return next();

  // Turn the meta tag definitions into actual elements in the head.
  nearestWithMeta.meta.metaTags
    .map(tagDef => {
      const tag = document.createElement("meta");

      Object.keys(tagDef).forEach(key => {
        tag.setAttribute(key, tagDef[key]);
      });

      // We use this to track which meta tags we create, so we don't interfere with other ones.
      tag.setAttribute("data-vue-router-controlled", "");

      return tag;
    })
    // Add the meta tags to the document head.
    .forEach(tag => document.head.appendChild(tag));

  next();
});

router.afterEach((to, from) => {
  // require ('../public/main.js');
});

export default router;
