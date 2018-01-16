import MobileMenu from "./modules/MobileMenu"
import RevealOnScroll from "./modules/RevealOnScroll"
import $ from 'jquery'

new MobileMenu()
new RevealOnScroll($(".feature-item"), "85%")
new RevealOnScroll($(".testimonial"), "60%")