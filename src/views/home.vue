<template>
  <div>
   <button type="button" @click="Course"> Course</button>
  </div>
</template>

<script>
export default {
    methods :{
        Course(){
            this.$router.push('/course')
        }
    }
}
</script>

<style>

</style>