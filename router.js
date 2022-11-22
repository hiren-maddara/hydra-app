const route = event => {
   event = event || window.event;
   event.preventDefault();
   window.history.pushState({}, "", event.target.href);
   let scriptToLoad;
   if (event.target.closest("[data-script]")) {
      scriptToLoad = event.target.closest("[data-script]").dataset.script;
   }
   handleLocation(scriptToLoad);
};

const scripts = {
   main: [
      // "src/scripts/jquery.min.js",
      "vendors/scripts/core.js",
      // "vendors/scripts/script.min.js",
      // "vendors/scripts/process.js",
      // "vendors/scripts/layout-settings.js",
   ],
   calendar: [
      "src/plugins/fullcalendar/fullcalendar.min.js",
      "vendors/scripts/calendar-setting.js",
   ],

   hc: [
      "src/plugins/highcharts-6.0.7/code/highcharts.js",
      "https://code.highcharts.com/highcharts-3d.js",
      "src/plugins/highcharts-6.0.7/code/highcharts-more.js",
      "vendors/scripts/highchart-setting.js",
   ],

   apex: [
      "/plugins/apexcharts/apexcharts.min.js",
      "vendors/scripts/apexcharts-setting.js",
   ],

   jvec: [
      "src/plugins/jvectormap/jquery-jvectormap-2.0.3.min.js",
      "src/plugins/jvectormap/jquery-jvectormap-world-mill-en.js",
      "vendors/scripts/jvectormap-setting.js",
   ],

   knob: [
      "src/plugins/jQuery-Knob-master/jquery.knob.min.js",
      "vendors/scripts/knob-chart-setting.js",
   ],
};

const routes = {};
async function handleLocation(s) {
   const path = window.location.pathname + "";

   const html = await fetch(path).then(data => data.text());
   if (html.includes("hiren-terminate")) return;
   document.querySelector(".main-container").innerHTML = html;

   window.history.pushState({}, "", "/");

   if (!s) return;
   scripts["main"].forEach(script => {
      let scrTag = document.createElement("script");
      scrTag.setAttribute("src", script);
      document.body.appendChild(scrTag);
   });

   scripts[`${s}`].forEach(script => {
      let scrTag = document.createElement("script");
      scrTag.setAttribute("src", script);
      document.body.appendChild(scrTag);
   });
}

window.onpopstate = handleLocation;

document
   .querySelectorAll(".--nav-btn")
   .forEach(btn => btn.addEventListener("click", route));
