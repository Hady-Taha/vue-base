<script setup></script>
<template>
    <div class="d-flex flex-column justify-content-center align-items-center" style="height: 100dvh;">
        <h1 class="gradient-text">Time to build, create, and make your ideas real!</h1>
    </div>
</template>

<style>
    body {
        background-color: black;
    }

    /* Gradient text */
    .gradient-text {
        background: linear-gradient(90deg, #00ff00, #00ffff, #ff00ff, #ffff00, #ff00ff);
        background-size: 300% 300%;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        font-size: 3rem;
        text-align: center;
        animation: gradientMove 30s ease infinite;
    }

    /* Keyframes for moving gradient */
    @keyframes gradientMove {
        0% {
            background-position: 0% 50%;
        }

        50% {
            background-position: 100% 50%;
        }

        100% {
            background-position: 0% 50%;
        }
    }
</style>