$(document).ready(function() {
    // Inicializar o vídeo de fundo
    $('#bgndVideo').YTPlayer({
        useOnMobile: true, // permite a reprodução em dispositivos móveis
        mobileFallbackImage: '', // imagem de fallback para dispositivos móveis
        startAt: 0, // começar a reprodução do vídeo a partir do início
        mute: true, // reprodução do vídeo em mudo
        autoPlay: true, // reprodução automática do vídeo
        opacity: 1, // opacidade do vídeo
        containment: '.video-section', // elemento que contém o vídeo
        quality: 'large', // qualidade do vídeo
    });
});