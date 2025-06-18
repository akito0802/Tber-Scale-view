
document.addEventListener('DOMContentLoaded', () => {
    const keySelect = document.getElementById('key-select');
    const categorySelect = document.getElementById('category-select');
    const scaleSelect = document.getElementById('scale-select');
    const fretboardImg = document.getElementById('fretboard-img');

    const scaleOptions = {
        major: ["major"],
        minor: ["natural_minor", "harmonic_minor", "melodic_minor"],
        church: ["ionian", "dorian", "phrygian", "lydian", "mixolydian", "aeolian", "locrian"]
    };

    function updateScaleOptions() {
        const category = categorySelect.value;
        scaleSelect.innerHTML = "";
        scaleOptions[category].forEach(scale => {
            const opt = document.createElement("option");
            opt.value = scale;
            opt.textContent = scale.replace("_", " ").toUpperCase();
            scaleSelect.appendChild(opt);
        });
        updateImage();
    }

    function updateImage() {
        const key = keySelect.value;
        const scale = scaleSelect.value;
        fretboardImg.src = `images/${key}_${scale}.png`;
    }

    keySelect.addEventListener('change', updateImage);
    categorySelect.addEventListener('change', updateScaleOptions);
    scaleSelect.addEventListener('change', updateImage);

    updateScaleOptions();
});
