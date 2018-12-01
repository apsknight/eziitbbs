console.log();

let navBar = document.getElementsByClassName("navbar-nav")[0];

let erpLi = document.createElement("li");
erpLi.setAttribute("class", "nav-item");
let erpLink = document.createElement("a");
erpLink.setAttribute("href", "https://accounts.google.com/o/oauth2/auth?response_type=code&redirect_uri=http%3A%2F%2Ferp.iitbbs.ac.in%2Fhome.php&client_id=940509041453-n5borgvsn8uoruqadeg5j3g0ldh88gnq.apps.googleusercontent.com&scope=https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.profile+https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.email&access_type=offline&approval_prompt=force");
erpLink.appendChild(document.createTextNode("ERP"));
erpLink.setAttribute("target", "_blank");
erpLi.appendChild(erpLink);

let curriculamLi = document.createElement("li");
curriculamLi.setAttribute("class", "nav-item");
let curriculamLink = document.createElement("a");
curriculamLink.setAttribute("href", "http://www.iitbbs.ac.in/curriculum-b.tech..php");
curriculamLink.appendChild(document.createTextNode("Curriculam"));
curriculamLink.setAttribute("target", "_blank");
curriculamLi.appendChild(curriculamLink);

let transportaionLi = document.createElement("li");
transportaionLi.setAttribute("class", "nav-item");
let transportaionLink = document.createElement("a");
transportaionLink.setAttribute("href", "http://www.iitbbs.ac.in/transportation.php");
transportaionLink.appendChild(document.createTextNode("Bus Schedule"));
transportaionLink.setAttribute("target", "_blank");
transportaionLi.appendChild(transportaionLink);

navBar.children[9].style.display = "none";  // Hide R&D
navBar.children[12].style.display = "none"; // Hide Jobs 
navBar.children[13].style.display = "none"; // Hide outreach
navBar.children[14].style.display = "none"; // Hide Programs
navBar.appendChild(erpLi);
navBar.appendChild(curriculamLi);
navBar.appendChild(transportaionLi);

let getJSON = function(url, callback) {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'json';
    xhr.onload = function() {
      let status = xhr.status;
      if (status === 200) {
        callback(null, xhr.response);
      } else {
        callback(status, xhr.response);
      }
    };
    xhr.send();
};

const bbsApi = "https://iitbbs.herokuapp.com/bus";
getJSON(bbsApi, function(err, data) {
    if (err != null) {
        return;
    }
    else {
        console.log(data);
        transportaionLink.setAttribute("href", "http://" + data.pdf);
    }
});