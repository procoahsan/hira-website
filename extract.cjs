const fs = require('fs');
const html = fs.readFileSync('old_page.html', 'utf8');

// The elements might have different class names like elementor-accordion-title
const accordionRegex = /<[^>]+class="[^"]*elementor-toggle-title[^"]*"[^>]*>(.*?)<\/[^>]+>[\s\S]*?<div[^>]+class="[^"]*elementor-toggle-text-content[^"]*"[^>]*>([\s\S]*?)<\/div>/gi;
const matches = [...html.matchAll(accordionRegex)];

if (matches.length === 0) {
    // Try accordion
    const accRegex = /<[^>]+class="[^"]*elementor-accordion-title[^"]*"[^>]*>(.*?)<\/[^>]+>[\s\S]*?<div[^>]+class="[^"]*elementor-accordion-text-content[^"]*"[^>]*>([\s\S]*?)<\/div>/gi;
    const matchesAcc = [...html.matchAll(accRegex)];
    if (matchesAcc.length > 0) {
        matchesAcc.forEach(m => console.log('Q: ' + m[1].replace(/<[^>]+>/g, '').trim() + '\nA: ' + m[2].replace(/<[^>]+>/g, '').trim() + '\n'));
    } else {
        // Just extract anything that looks like a title inside elementor-widget-accordion
        console.log("No matches found with specific classes. Trying generic elementor-tab-title");
        const tabRegex = /<[^>]+class="[^"]*elementor-tab-title[^"]*"[^>]*>(.*?)<\/[^>]+>[\s\S]*?<div[^>]+class="[^"]*elementor-tab-content[^"]*"[^>]*>([\s\S]*?)<\/div>/gi;
        const matchesTab = [...html.matchAll(tabRegex)];
        matchesTab.forEach(m => console.log('Q: ' + m[1].replace(/<[^>]+>/g, '').trim() + '\nA: ' + m[2].replace(/<[^>]+>/g, '').trim() + '\n'));
    }
} else {
    matches.forEach(m => console.log('Q: ' + m[1].replace(/<[^>]+>/g, '').trim() + '\nA: ' + m[2].replace(/<[^>]+>/g, '').trim() + '\n'));
}
