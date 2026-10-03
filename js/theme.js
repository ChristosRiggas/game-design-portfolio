(function () {
    const root = document.documentElement;
    let saved = '';

    try { saved = localStorage.getItem('theme') || ''; } catch (e) {}

    // Runs immediately (script is in <head>), so there is no flash of the wrong theme
    root.dataset.theme = saved;

    // Wait for the page to load before touching the dropdown
    document.addEventListener('DOMContentLoaded', function () {
        const sel = document.getElementById('theme-select');
        if (!sel) return;                      // pages without a dropdown just keep the saved theme

        sel.value = saved;
        sel.addEventListener('change', function () {
            root.dataset.theme = sel.value;
            try { localStorage.setItem('theme', sel.value); } catch (e) {}
        });
    });
})();