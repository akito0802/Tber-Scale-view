
document.addEventListener('DOMContentLoaded', () => {
    const keySelect = document.getElementById('key-select');
    const categorySelect = document.getElementById('category-select');
    const scaleSelect = document.getElementById('scale-select');
    const fretboard = document.getElementById('fretboard').querySelector('img');

    const scaleOptions = {
        major: ["major"],
        minor: ["natural_minor", "harmonic_minor", "melodic_minor"],
        church: ["ionian", "dorian", "phrygian", "lydian", "mixolydian", "aeolian", "locrian"]
    };

    function updateScaleSelect() {
        const cat = categorySelect.value;
        scaleSelect.innerHTML = '';
        scaleOptions[cat].forEach(scale => {
            const opt = document.createElement('option');
            opt.value = scale;
            opt.textContent = scale.replace('_', ' ').toUpperCase();
            scaleSelect.appendChild(opt);
        });
        updateFretboard();
    }

    function updateFretboard() {
        const key = keySelect.value;
        const scale = scaleSelect.value;
        fretboard.src = `images/${key}_${scale}.png`;
    }

    categorySelect.addEventListener('change', updateScaleSelect);
    keySelect.addEventListener('change', updateFretboard);
    scaleSelect.addEventListener('change', updateFretboard);

    updateScaleSelect();
});
