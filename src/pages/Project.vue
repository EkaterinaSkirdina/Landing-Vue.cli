<template>    
    <HeaderComponent />

    <ProjectBannerComponent heading='Our Project' pageName='Project' srcImg='@/assets/ProjectImg/projectBanner.png' :isBreadCrumbs='true'/>

    <FooterComponent />


</template>

<script>
import HeaderComponent from '@/components/HeaderComponent.vue';
import FooterComponent from '@/components/FooterComponent.vue';
import ProjectBannerComponent from '@/components/ProjectBannerComponent.vue';

    export default {
        components: {
            HeaderComponent,
            FooterComponent,
            ProjectBannerComponent
        }
    }
</script>

<style scoped>

</style>