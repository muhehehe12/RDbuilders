document.addEventListener("DOMContentLoaded", function () {
    
    // 1. Loading Screen Outro
    const loader = document.getElementById("loading-screen");
    window.addEventListener("load", function () {
        setTimeout(() => {
            loader.style.opacity = "0";
            loader.style.visibility = "hidden";
        }, 600); // Elegant deliberate linger for custom premium loading feel
    });

    // 2. Mobile Hamburger Menu Engine
    const hamburger = document.getElementById("hamburger");
    const navMenu = document.getElementById("nav-menu");
    const navLinks = document.querySelectorAll(".nav-link");

    function toggleMenu() {
        hamburger.classList.toggle("active");
        navMenu.classList.toggle("active");
    }

    hamburger.addEventListener("click", toggleMenu);

    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            if(navMenu.classList.contains("active")) {
                toggleMenu();
            }
        });
    });

    // 3. High Performance Scroll Animations (Intersection Observer)
    const elementsToReveal = document.querySelectorAll(".scroll-reveal");
    
    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("revealed");
                observer.unobserve(entry.target); // Trigger only once for slick UX
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    });

    elementsToReveal.forEach(el => revealObserver.observe(el));

    // 4. Multi-Language Engine (English / German Translation Maps)
    const langButtons = document.querySelectorAll("[data-lang-btn]");
    const translatableElements = document.querySelectorAll(".data-lang");

    const dictionary = {
        en: {
            "Home": "Home",
            "Availability": "Availability",
            "Services": "Services",
            "Contact": "Contact",
            "Call Now": "Call Now",
            "10+ Years of Master Workmanship": "10+ Years of Master Workmanship",
            "Prestige Building & Home Renovations": "Prestige Building & Home Renovations",
            "Based in Great Barr, serving Birmingham, Sandwell, the West Midlands, and surrounding areas with high-quality guaranteed craftsmanship.": "Based in Great Barr, serving Birmingham, Sandwell, the West Midlands, and surrounding areas with high-quality guaranteed craftsmanship.",
            "Immediate Project Availability": "Immediate Project Availability",
            "Due to temporary planning permission delays on a current site, our elite team has immediate capacity to begin new projects over the coming weeks.": "Due to temporary planning permission delays on a current site, our elite team has immediate capacity to begin new projects over the coming weeks.",
            "Chat via WhatsApp": "Chat via WhatsApp",
            "Request Free Quote": "Request Free Quote",
            "Why Choose RD Builders": "Why Choose RD Builders",
            "At RD Builders & Home Improvements, led by Raman, we operate on a simple principle: no job is too big or too small. We combine a decade of technical expertise with premium materials to deliver pristine structures that stand the test of time.": "At RD Builders & Home Improvements, led by Raman, we operate on a simple principle: no job is too big or too small. We combine a decade of technical expertise with premium materials to deliver pristine structures that stand the test of time.",
            "We provide complete transparency, fixed-price free quotes, and verified references upon request to guarantee absolute peace of mind.": "We provide complete transparency, fixed-price free quotes, and verified references upon request to guarantee absolute peace of mind.",
            "Years Experience": "Years Experience",
            "Guaranteed Work": "Guaranteed Work",
            "Free Quotes": "Free Quotes",
            "Reliable Service": "Reliable Service",
            "Our Specialized Expertise": "Our Specialized Expertise",
            "Comprehensive architectural and structural solutions engineered to perfection.": "Comprehensive architectural and structural solutions engineered to perfection.",
            "Structural Extensions": "Structural Extensions",
            "Premium home extensions and bespoke garage conversions tailored to maximize liveable luxury.": "Premium home extensions and bespoke garage conversions tailored to maximize liveable luxury.",
            "Loft Conversions": "Loft Conversions",
            "Transforming unutilized attic layouts into architectural masterpieces and high-end bedrooms.": "Transforming unutilized attic layouts into architectural masterpieces and high-end bedrooms.",
            "Kitchen & Bathroom Fitting": "Kitchen & Bathroom Fitting",
            "Bespoke luxury installation featuring precision tiling, custom plumbing, and premium finishes.": "Bespoke luxury installation featuring precision tiling, custom plumbing, and premium finishes.",
            "Media Walls & Ceilings": "Media Walls & Ceilings",
            "Contemporary custom integrated media walls, structural suspended units, and down-lighting ceilings.": "Contemporary custom integrated media walls, structural suspended units, and down-lighting ceilings.",
            "Structural Brickwork & Roofing": "Structural Brickwork & Roofing",
            "Expert brickwork, safe chimney removals, structural plastering, and weather-proof roofing mechanics.": "Expert brickwork, safe chimney removals, structural plastering, and weather-proof roofing mechanics.",
            "Insulation, Damp Proofing & Diagnostics": "Insulation, Damp Proofing & Diagnostics",
            "Advanced home insulation, continuous damp proofing systems, and emergency leak repairs.": "Advanced home insulation, continuous damp proofing systems, and emergency leak repairs.",
            "Full Capabilities Roster:": "Full Capabilities Roster:",
            "Flooring & Underfloor Heating": "Flooring & Underfloor Heating",
            "Certified Electrical Work": "Certified Electrical Work",
            "Premium Door Fittings": "Premium Door Fittings",
            "General Building Upgrades": "General Building Upgrades",
            "Secure Your Priority Booking": "Secure Your Priority Booking",
            "Contact Raman today to secure our immediate availability window. We provide prompt site visits and transparent estimates completely free of charge.": "Contact Raman today to secure our immediate availability window. We provide prompt site visits and transparent estimates completely free of charge.",
            "Direct Line": "Direct Line",
            "Operational Hub": "Operational Hub",
            "Select Your Preferred Method": "Select Your Preferred Method",
            "Click to Call Direct": "Click to Call Direct",
            "Instant Message": "Instant Message",
            "Guaranteed premium workmanship throughout the West Midlands.": "Guaranteed premium workmanship throughout the West Midlands.",
            "Call Raman": "Call Raman"
        },
        de: {
            "Home": "Startseite",
            "Availability": "Verfügbarkeit",
            "Services": "Leistungen",
            "Contact": "Kontakt",
            "Call Now": "Jetzt Anrufen",
            "10+ Years of Master Workmanship": "Über 10 Jahre Meisterhandwerk",
            "Prestige Building & Home Renovations": "Prestige Bau & Hausrenovierungen",
            "Based in Great Barr, serving Birmingham, Sandwell, the West Midlands, and surrounding areas with high-quality guaranteed craftsmanship.": "Ansässig in Great Barr, tätig in Birmingham, Sandwell, den West Midlands und Umgebung mit garantierter handwerklicher Spitzenqualität.",
            "Immediate Project Availability": "Sofortige Projektverfügbarkeit",
            "Due to temporary planning permission delays on a current site, our elite team has immediate capacity to begin new projects over the coming weeks.": "Aufgrund von Verzögerungen bei der Baugenehmigung auf einer aktuellen Baustelle hat unser Elite-Team sofortige Kapazitäten frei, um neue Projekte zu beginnen.",
            "Chat via WhatsApp": "Per WhatsApp Chatten",
            "Request Free Quote": "Kostenloses Angebot anfordern",
            "Why Choose RD Builders": "Warum RD Builders",
            "At RD Builders & Home Improvements, led by Raman, we operate on a simple principle: no job is too big or too small. We combine a decade of technical expertise with premium materials to deliver pristine structures that stand the test of time.": "Bei RD Builders & Home Improvements unter der Leitung von Raman gilt ein einfaches Prinzip: Kein Auftrag ist zu groß oder zu klein. Wir verbinden ein Jahrzehnt technischer Expertise mit Premium-Materialien.",
            "We provide complete transparency, fixed-price free quotes, and verified references upon request to guarantee absolute peace of mind.": "Wir bieten vollständige Transparenz, Festpreis-Angebote und verifizierte Referenzen auf Anfrage, um Ihnen absolute Sicherheit zu garantieren.",
            "Years Experience": "Jahre Erfahrung",
            "Guaranteed Work": "Garantierte Arbeit",
            "Free Quotes": "Gratis Angebote",
            "Reliable Service": "Zuverlässigkeit",
            "Our Specialized Expertise": "Unsere Spezialisierten Leistungen",
            "Comprehensive architectural and structural solutions engineered to perfection.": "Umfassende Bau- und Architekturlösungen in Perfektion ausgeführt.",
            "Structural Extensions": "Hausanbauten",
            "Premium home extensions and bespoke garage conversions tailored to maximize liveable luxury.": "Erstklassige Hausanbauten und maßgeschneiderte Garagenumwandlungen für maximalen Wohnluxus.",
            "Loft Conversions": "Dachgeschossausbau",
            "Transforming unutilized attic layouts into architectural masterpieces and high-end bedrooms.": "Verwandlung ungenutzter Dachböden in architektonische Meisterwerke und High-End-Räume.",
            "Kitchen & Bathroom Fitting": "Küchen- & Badinstallation",
            "Bespoke luxury installation featuring precision tiling, custom plumbing, and premium finishes.": "Maßgeschneiderte Luxusinstallationen mit Präzisionsfliesen, individueller Sanitärtechnik und edlen Oberflächen.",
            "Media Walls & Ceilings": "Medienwände & Decken",
            "Contemporary custom integrated media walls, structural suspended units, and down-lighting ceilings.": "Moderne, maßgeschneiderte Medienwände, abgehängte Decken und integrierte LED-Beleuchtungssysteme.",
            "Structural Brickwork & Roofing": "Mauerwerk & Bedachung",
            "Expert brickwork, safe chimney removals, structural plastering, and weather-proof roofing mechanics.": "Fachgerechtes Mauerwerk, sichere Schornsteinentfernungen, Verputzarbeiten und wetterfeste Bedachungen.",
            "Insulation, Damp Proofing & Diagnostics": "Isolierung & Feuchtigkeitsschutz",
            "Advanced home insulation, continuous damp proofing systems, and emergency leak repairs.": "Fortschrittliche Hausisolierung, nachhaltige Bauwerksabdichtung und Notfall-Leckparatur.",
            "Full Capabilities Roster:": "Gesamtes Leistungsspektrum:",
            "Flooring & Underfloor Heating": "Bodenbeläge & Fußbodenheizung",
            "Certified Electrical Work": "Zertifizierte Elektroarbeiten",
            "Premium Door Fittings": "Premium Türmontage",
            "General Building Upgrades": "Allgemeine Gebäudesanierung",
            "Secure Your Priority Booking": "Sichern Sie sich Ihren Wunschtermin",
            "Contact Raman today to secure our immediate availability window. We provide prompt site visits and transparent estimates completely free of charge.": "Kontaktieren Sie Raman noch heute, um sich unsere sofort freien Projektkapazitäten zu sichern. Kostenlose Besichtigungen vor Ort.",
            "Direct Line": "Direktkontakt",
            "Operational Hub": "Betriebssitz",
            "Select Your Preferred Method": "Wählen Sie Ihren Kontaktweg",
            "Click to Call Direct": "Direkt anrufen",
            "Instant Message": "Sofortnachricht",
            "Guaranteed premium workmanship throughout the West Midlands.": "Garantierte erstklassige Handwerksqualität in den gesamten West Midlands.",
            "Call Raman": "Raman Anrufen"
        }
    };

    function switchLanguage(lang) {
        // Toggle Active State Buttons
        langButtons.forEach(btn => {
            if (btn.getAttribute("data-lang-btn") === lang) {
                btn.classList.add("active");
            } else {
                btn.classList.remove("active");
            }
        });

        // Set Elements Text Content Smoothly
        translatableElements.forEach(el => {
            const key = el.getAttribute("data-en"); // We use the English text as static target keys
            if (dictionary[lang] && dictionary[lang][key]) {
                el.textContent = dictionary[lang][key];
            }
        });
    }

    langButtons.forEach(button => {
        button.addEventListener("click", function() {
            const selectedLang = this.getAttribute("data-lang-btn");
            switchLanguage(selectedLang);
        });
    });
});
