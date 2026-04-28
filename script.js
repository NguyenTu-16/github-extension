const missionData = {
    // --- MODERN EMU SUIT ---
    helmet: {
        title: "Modern EMU Helmet",
        fact: "Equipped with a gold-plated polycarbonate visor to block infrared radiation while maintaining perfect optical clarity for the wearer."
    },
    backpack: {
        title: "Modern Life Support",
        fact: "The PLSS manages oxygen, pressure, and the liquid cooling garment. It allows for 8 hours of activity plus 30 minutes of emergency reserve."
    },
    gloves: {
        title: "Pressurized Gloves",
        fact: "Features fingertips with integrated heaters and textured palms for operating complex ISS tools in a vacuum."
    },
    boots: {
        title: "EVA Work Boots",
        fact: "The boots are designed with a heavy 'sole-plate' that allows them to lock into the robotic arms and foot restraints of the Space Station."
    },
    controls: {
        title: "Display & Control Module (DCM)",
        fact: "The chest-mounted panel allows astronauts to monitor suit vitals. The labels are printed backwards so they can be read using a helmet-mounted mirror."
    },
    pocket: {
        title: "Leg Utility Pocket",
        fact: "Used for storing mission-critical checklists, wrist mirrors, and tethers to prevent tools from drifting away in zero-gravity."
    },

    // --- HISTORIC APOLLO SUIT ---
    apollo_materials: {
        title: "A7L Fabric Science",
        fact: "This suit is a masterpiece of materials engineering, consisting of 21 layers including Beta cloth (fire-resistant silica fiber), Kapton, and Teflon."
    },
    camera: {
        title: "Hasselblad 500EL",
        fact: "This electric camera was modified for moon use. It used no viewfinder; astronauts aimed the camera by rotating their entire bodies toward the subject."
    },
    pressure: {
        title: "Atmospheric Integrity",
        fact: "The suit maintained a 100% oxygen environment at 3.7 psi (pounds per square inch). This provided the pressure necessary to keep an astronaut's blood from boiling."
    }
};

const factDisplay = document.getElementById('fact-display');
const titleDisplay = document.getElementById('part-title');
const hotspots = document.querySelectorAll('.Hotspot');

hotspots.forEach(hotspot => {
    hotspot.addEventListener('click', (event) => {
        const partKey = event.currentTarget.getAttribute('data-part');
        const info = missionData[partKey];

        if (info) {
            titleDisplay.innerText = info.title;
            factDisplay.innerText = info.fact;
            
            // Visual feedback glow
            factDisplay.style.borderColor = "#7000ff";
            setTimeout(() => {
                factDisplay.style.borderColor = "#00f2ff";
            }, 300);
        }
    });
});