const route = event => {
   event = event || window.event;
   event.preventDefault();
   window.history.pushState({}, "", event.target.href);
   //    window.history.pushState({}, "", "/");
   //    handleLocation.apply(event);
   handleLocation();
};

const routes = {
   404: "pages/404.html",
   "/": "pages/index.html",
   "/calendar": "/pages/calendar.html",
   "/invoice": "/pages/invoice.html",
   "/basic-table": "/pages/basic-table.html",
   "/faq": "/pages/faq.html",
   "/chat": "/pages/chat.html",
   "/datatable": "/pages/datatable.html",
   403: "/pages/403.html",
   500: "/pages/500.html",
};

async function handleLocation() {
   const path = window.location.pathname + "";
   //    const path = this.target.href + "";
   //     const link = path.slice()
   //    const route = (await routes[link]) ? routes[link] : routes[500];
   //    const html = await fetch(route).then(data => data.text());

   const html = await fetch(path).then(data => data.text());
   console.log(html);

   document.querySelector(".main-container").innerHTML = html;
}

window.onpopstate = handleLocation;

document
   .querySelectorAll(".--nav-btn")
   .forEach(btn => btn.addEventListener("click", route));

// async function handleLocation2() {
//     c
// }
