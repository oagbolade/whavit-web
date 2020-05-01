export default function GeneralTags() {
  dataLayer.push({ event: "optimize.activate" });
  window.dataLayer = window.dataLayer || [];

  let user = $cookies.get("user");
  const { pathname, href } = location;
  console.log("Logged Output: GeneralTags -> href", href);
  console.log("Logged Output: GeneralTags -> pathname", pathname);
  let pagetitle = pathname.replace(/\//g, "-");
  window.dataLayer.push({
    event: "pageViewed",
    pageUrl: href, //replace with full url including query parameters
    pageHostname: "whavit.com", //leave this like this
    pagePath: pathname, //replace with page path only without query parameters
    accountType: user ? user.type : null, //replace with type of account and leave blank where not present
    userId: user ? user.id : null, //replace with user id leave blank where absence
    loggedinStatus: user ? "logged in" : "logged out", //replace with either logged in or out
    firstName: user ? user.first_name : null, //replace with the user first name in the database or leave blank where absent
    lastName: user ? user.last_name : null, //replace with the user last name in the database or leave blank where absent
    businessName: user ? user.business_name : null, //replace with the user business name in the database or leave blank where absent
    email: user ? user.email : null, //replace with the user email in the database or leave blank where absent
    pageTitle: pagetitle //some arbitrary name for the page/state
  });
}
