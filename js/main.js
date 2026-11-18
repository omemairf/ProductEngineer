/* ADD YOUR IMAGES HERE
   1. Copy your screenshots into the "img" folder.
   2. Write their file names in the lists below. Example:
      var IMG_BUSINESS = ["img/business-1.jpg", "img/business-2.jpg"]; */
var IMG_BUSINESS = [];
var IMG_STORE = [];

(function(){
var $=function(s,r){return (r||document).querySelector(s)};
/* sprint board */
var cols=["To do","In progress","Done"],tasks=[{t:"Wireframe landing page",c:0},{t:"Build responsive navbar",c:1},{t:"Stakeholder review",c:0},{t:"Accessibility audit",c:1},{t:"Set up CI pipeline",c:2},{t:"Sprint demo",c:0}],root=$("#cols");
function draw(){root.innerHTML="";cols.forEach(function(n,i){var c=document.createElement("div");c.className="col";var s=document.createElement("span");s.textContent=n;c.appendChild(s);
tasks.forEach(function(k){if(k.c!==i)return;var b=document.createElement("button");b.className="card"+(i===2?" d":i===1?" c":"");b.textContent=k.t;b.setAttribute("aria-label",k.t+", "+n+". Move on");b.onclick=function(){k.c=(k.c+1)%3;draw()};c.appendChild(b)});root.appendChild(c)})}
draw();
/* tools marquee */
var tl=["Microsoft Project","Trello","Jira","Asana","Figma","Notion","MS Teams","Excel","Git & GitHub","React","HTML5","CSS3","JavaScript"];
$("#mq").innerHTML=tl.concat(tl).map(function(x){return "<span>"+x+"</span>"}).join("");
/* tabs */
var tabs=[$("#t0"),$("#t1")],panels=[$("#p0"),$("#p1")];
tabs.forEach(function(t,i){t.onclick=function(){tabs.forEach(function(x,j){x.setAttribute("aria-selected",j===i);panels[j].hidden=j!==i})}});
/* carousels */
var data=[{n:"Business website",imgs:IMG_BUSINESS,ph:"Your business website screenshot",d:"Company or personal site, built from scratch.",tech:"HTML, CSS, JavaScript"},{n:"E-commerce store",imgs:IMG_STORE,ph:"Your online store screenshot",d:"Product pages, cart and checkout flow.",tech:"Shopify / WooCommerce / React"}];
data.forEach(function(x,pi){
var p=panels[pi];
p.innerHTML='<div class="show"><div><div class="car"><div class="track"></div><button class="arr l" aria-label="Previous image">&#8249;</button><button class="arr r" aria-label="Next image">&#8250;</button><div class="dots"></div></div>'+
'<label class="up">+ Upload screenshots<input type="file" accept="image/*" multiple hidden></label><p class="note">To show images permanently, put them in the img folder and list the file names at the top of js/main.js. The upload button is only a preview on your own screen.</p></div>'+
'<div class="info"><h3>'+x.n+'</h3><p>'+x.d+'</p><dl><dt>Role</dt><dd>Design and development</dd><dt>Stack</dt><dd>'+x.tech+'</dd><dt>Link</dt><dd>Add live URL</dd><dt>Result</dt><dd>Add one honest outcome</dd></dl></div></div>';
var track=$(".track",p),dots=$(".dots",p),idx=0,timer,hover=false,reduce=matchMedia("(prefers-reduced-motion: reduce)").matches,real=false;
function slides(){return track.children.length}
function go(i){idx=(i+slides())%slides();track.style.transform="translateX(-"+idx*100+"%)";[].forEach.call(dots.children,function(d,j){d.className=j===idx?"on":""})}
function build(){dots.innerHTML="";for(var i=0;i<slides();i++){(function(i){var d=document.createElement("i");d.onclick=function(){go(i)};dots.appendChild(d)})(i)}go(0)}
function ph(k){var s=document.createElement("div");s.className="slide";s.innerHTML="<div><b>"+x.ph+"</b>Slide "+k+". Upload your image to replace this.</div>";return s}
if(x.imgs&&x.imgs.length){real=true;x.imgs.forEach(function(u){var s=document.createElement("div");s.className="slide";var im=document.createElement("img");im.alt=x.n+" screenshot";im.src=u;s.appendChild(im);track.appendChild(s)})}else{[1,2,3].forEach(function(k){track.appendChild(ph(k))})}build();
$(".l",p).onclick=function(){go(idx-1)};$(".r",p).onclick=function(){go(idx+1)};
p.addEventListener("mouseenter",function(){hover=true});p.addEventListener("mouseleave",function(){hover=false});
if(!reduce)setInterval(function(){if(!hover&&!p.hidden&&slides()>1)go(idx+1)},3500);
$("input",p).onchange=function(e){var f=[].slice.call(e.target.files);if(!f.length)return;if(!real){track.innerHTML="";real=true}
f.forEach(function(file){var s=document.createElement("div");s.className="slide";var im=document.createElement("img");im.alt=x.n+" screenshot";im.src=URL.createObjectURL(file);s.appendChild(im);track.appendChild(s)});build()};
});
var pt=[].slice.call(document.querySelectorAll("#pmtabs button")),pp=[].slice.call(document.querySelectorAll(".pmp"));
pt.forEach(function(b,i){b.onclick=function(){pt.forEach(function(x,j){x.setAttribute("aria-selected",j===i);pp[j].hidden=j!==i})}});
var dt=[].slice.call(document.querySelectorAll("#dtabs button")),dpn=[].slice.call(document.querySelectorAll(".dp"));
dt.forEach(function(b,i){b.onclick=function(){dt.forEach(function(x,j){x.setAttribute("aria-selected",j===i);dpn[j].hidden=j!==i})}});
document.getElementById("theme").onclick=function(){var r=document.documentElement,a=r.getAttribute("data-theme"),dark=a?a==="dark":matchMedia("(prefers-color-scheme: dark)").matches;r.setAttribute("data-theme",dark?"light":"dark")};
})();

/* Profile photo: uses img/profile.jpg, shows your initials if the file is missing. Change "YN" to your initials. */
(function(){var pic=document.getElementById("pic");if(!pic)return;
function fb(){var d=document.createElement("div");d.className="pic avatar";d.setAttribute("role","img");d.setAttribute("aria-label","Profile photo placeholder");d.textContent="YN";pic.replaceWith(d)}
pic.onerror=fb;if(pic.complete&&pic.naturalWidth===0)fb()})();
