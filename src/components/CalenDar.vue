<template>
  <v-calendar 
  is-expanded 
  :attributes="attributes"
  nav-visibility="hidden"
  color="orange"
  />
</template>

<script>

export default {
    data(){
        return{
            attributes: [
                        // This is a single attribute
                        {
                            // An optional key can be used for retrieving this attribute later,
                            // and will most likely be derived from your data object
                            // Attribute type definitions
                            highlight: true,  // Boolean, String, Object
                            dates: new Date(),
                        }
                        ]
        }
    }
};
</script>

<style>
.vc-arrow {
  visibility: hidden;
}
.vc-is-expanded{
    min-width:50%;
}
</style>