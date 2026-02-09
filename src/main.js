import Alpine from 'alpinejs'
import intersect from '@alpinejs/intersect'
import { socialsLoader, counterSection, articlesData, parallaxSlider, imageSlider } from './utils'

// Expose Alpine components globally
window.Alpine = Alpine
window.socialsLoader = socialsLoader
window.counterSection = counterSection
window.articlesData = articlesData
window.parallaxSlider = parallaxSlider
window.imageSlider = imageSlider


Alpine.start()
Alpine.plugin(intersect)