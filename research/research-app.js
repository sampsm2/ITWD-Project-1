//IMPORT
import { nav } from "./components/nav.js";
import { footer } from "./components/footer.js";
import { copyright } from "./components/copyright.js";
import { privacy } from "./components/privacy.js";
import { seo } from "./components/seo.js";
import { hosting } from "./components/hosting.js";
import { maintenance } from "./components/maintenance.js";
import { security } from "./components/security.js";

//Component Integrations
document.getElementById("nav-component").innerHTML = nav.renderUI();
document.getElementById('footer-component').innerHTML = footer.renderUI();
//
document.getElementById('copyright-component').innerHTML = copyright.renderUI();
copyright.addEvent();
//
document.getElementById('privacy-component').innerHTML = privacy.renderUI();
privacy.addEvent();
//
document.getElementById('seo-component').innerHTML = seo.renderUI();
seo.addEvent();
//
document.getElementById('hosting-component').innerHTML = hosting.renderUI();
hosting.addEvent();
//
document.getElementById('maintenance-component').innerHTML = maintenance.renderUI();
maintenance.addEvent();
//
document.getElementById('security-component').innerHTML = security.renderUI();
security.addEvent();