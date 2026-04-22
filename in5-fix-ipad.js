(function () {
    var isIPad = (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1) || /iPad/.test(navigator.userAgent);
    if (!isIPad) return;

    document.addEventListener('click', function (e) {
        var target = e.target;
        while (target && target !== document.body) {
            var dataClickPlay = target.getAttribute('data-click-play');
            if (dataClickPlay) {
                var firstID = dataClickPlay.split(',')[0].split(':')[0].trim();
                var videoEl = document.querySelector('video[data-id="' + firstID + '"]');
                
                if (videoEl) {
                    // --- LA SOLUZIONE "HIJACK" ---
                    // 1. Porta il video sopra ogni cosa e rendilo visibile
                    videoEl.style.position = "fixed";
                    videoEl.style.zIndex = "999999";
                    videoEl.style.top = "0";
                    videoEl.style.left = "0";
                    videoEl.style.width = "100px"; // Piccola dimensione per il rendering
                    videoEl.style.height = "100px";
                    videoEl.style.opacity = "1";
                    videoEl.style.display = "block";

                    // 2. Rimuovi l'attributo che blocca il fullscreen
                    videoEl.removeAttribute('playsinline');
                    videoEl.setAttribute('webkit-playsinline', 'false');

                    // 3. Esegui il play
                    videoEl.play();

                    // 4. Tenta il fullscreen con un delay leggermente più lungo 
                    // per permettere a iPadOS di registrare il cambio di posizione del layer
                    setTimeout(function() {
                        if (videoEl.webkitEnterFullscreen) {
                            videoEl.webkitEnterFullscreen();
                        }
                    }, 150);
                }
                return;
            }
            target = target.parentElement;
        }
    }, true);
})();