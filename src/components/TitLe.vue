<template>
  <div>
    <div class="sub-cont">
      <div class="title-items">저사람</div>
      <div class="title-items">
        <v-icon start icon="mdi-circle-small"></v-icon>
      </div>
      <div class="title-items">이사람</div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.sub-cont {
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 30px 0px 0px 0px;
}
.title-items:nth-child(1) {
  background: white;
  flex-grow: 1;
  width: 33%;
  text-align: right;
}
.title-items:nth-child(2) {
  background: white;
  flex-grow: 0;
  width: 50px;
  text-align: center;
}
.title-items:nth-child(3) {
  background: white;
  flex-grow: 1;
  text-align: left;
  width: 33%;
}
</style>