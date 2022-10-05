
        
<template>

    <div class="section">

        <div class="year">© {{ new Date().getFullYear() }}</div>

        <a class="privacy" href="#">Privacy Policy</a>

    </div>


</template>
    
<style scoped>
.section {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20vh;
    gap: 20px;
}

.privacy{
    text-decoration: none;
    color: #fff;
}

@media (prefers-color-scheme: light) {
    .privacy{
        color: #000;
    }
}

</style>
        