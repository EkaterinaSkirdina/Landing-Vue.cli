<template>

    <Header />
    <BlogDetailsBanner />
    <BlogDetailsArticle />
    <Footer />
  </template>
  
  <script>
  import Header from '../components/Header.vue'
  import Footer from '../components/Footer.vue'
  import BlogDetailsBanner from '../components/BlogDetailsBanner.vue'
  import BlogDetailsArticle from '../components/BlogDetailsArticle.vue'
  
  export default {
    name: 'BlogDetails',
    components: {
      Header, 
      Footer, 
      BlogDetailsBanner,
      BlogDetailsArticle,
    }
  }
  </script>
  
  <style lang="scss">
  
  </style>