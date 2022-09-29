<template>
  <div>
    <div>
      <v-icon icon="mdi-circle-small"></v-icon>
    </div>

    <!-- grid gallery/ -->
    <div class="grid">
      <div
        class="item"
        style="
          background-image: url(https://images.unsplash.com/photo-1439209306665-700c9bca794c?dpr=1&auto=format&fit=crop&w=1500&h=1000&q=80&cs=tinysrgb&crop=);
        "
      ></div>
      <div
        class="item"
        style="
          background-image: url(https://images.unsplash.com/photo-1466853817435-05b43fe45b39?dpr=1&auto=compress,format&fit=crop&w=1199&h=871&q=80&cs=tinysrgb&crop=);
        "
      ></div>
      <div
        class="item"
        style="
          background-image: url(https://images.unsplash.com/photo-1488572384981-eac03dfeb6b9?dpr=1&auto=compress,format&fit=crop&w=1199&h=799&q=80&cs=tinysrgb&crop=);
        "
      ></div>
      <div
        class="item"
        style="
          background-image: url(https://images.unsplash.com/photo-1470091688026-38b51162c8df?dpr=1&auto=compress,format&fit=crop&w=1199&h=750&q=80&cs=tinysrgb&crop=);
        "
      ></div>
      <div
        class="item"
        style="
          background-image: url(https://images.unsplash.com/photo-1475139450941-3b6464b2dde3?dpr=1&auto=compress,format&fit=crop&w=1199&h=673&q=80&cs=tinysrgb&crop=);
        "
      ></div>
    </div>

    <div class="c-heroImageGrid">
      <div class="container">
        <div class="column"></div>
        <div class="column">
          <div class="row"></div>
          <div class="row">
            <div>
              <div class="text">
                <h6>Beutifyl Mement</h6>
                <p>Lorem ipsum dolor sit amet, consectetuer</p>
              </div>
            </div>
            <div></div>
          </div>
          <div class="row"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
h6,
p {
  font-family: sans-serif;
}

.c-heroImageGrid {
  position: relative;
  overflow: hidden;
  height: 50vw;
  background: #fff;
  margin-bottom: 60px;
}

.c-heroImageGrid .container {
  display: flex;
  align-items: flex-end;
  position: absolute;
  top: -20vw;
  left: -8vw;
  transform: rotateZ(45deg);
  height: 100vw;
  width: 107vw;
}

.c-heroImageGrid .container .column {
  overflow: hidden;
  position: relative;
}

.c-heroImageGrid .container .column:nth-of-type(1) {
  border-right: 8px solid white;
  width: 25%;
  height: 66vw;
}

.c-heroImageGrid .container .column:nth-of-type(1):hover {
  opacity: 0.75;
  cursor: pointer;
}

.c-heroImageGrid .container .column:nth-of-type(1):before {
  position: absolute;
  top: 8.4vw;
  left: 8.1vw;
  background-repeat: no-repeat;
  background-size: cover;
  transform: rotateZ(-45deg);
  content: "";
  width: 37vw;
  height: 38vw;
  background-image: url(https://images.pexels.com/photos/132037/pexels-photo-132037.jpeg?cs=srgb&dl=beach-blur-boardwalk-132037.jpg&fm=jpg);
}

.c-heroImageGrid .container .column:nth-of-type(2) {
  display: flex;
  flex-direction: column-reverse;
  width: 75%;
  height: 109.1vw;
}

.c-heroImageGrid .container .column:nth-of-type(2) .row {
  border-top: 8px solid #fff;
}

.c-heroImageGrid .container .column:nth-of-type(2) .row:nth-of-type(1) {
  position: relative;
  overflow: hidden;
  height: 50vw;
}

.c-heroImageGrid .container .column:nth-of-type(2) .row:nth-of-type(1):hover {
  opacity: 0.75;
  cursor: pointer;
}

.c-heroImageGrid .container .column:nth-of-type(2) .row:nth-of-type(1):before {
  position: absolute;
  top: -10.1vw;
  left: -14.3vw;
  background-repeat: no-repeat;
  background-size: cover;
  transform: rotateZ(-45deg);
  content: "";
  width: 65vw;
  height: 39vw;
  background-image: url(https://images.pexels.com/photos/814499/pexels-photo-814499.jpeg?cs=srgb&dl=arch-bridge-clouds-814499.jpg&fm=jpg);
}

.c-heroImageGrid .container .column:nth-of-type(2) .row:nth-of-type(2) {
  display: flex;
  height: 40.5vw;
}

.c-heroImageGrid .container .column:nth-of-type(2) .row:nth-of-type(3) {
  border-top: none;
}

.c-heroImageGrid
  .container
  .column:nth-of-type(2)
  .row:nth-of-type(2)
  div:nth-of-type(1) {
  overflow: hidden;
  width: 30%;
  background-color: #8b8b8a;
}

.c-heroImageGrid
  .container
  .column:nth-of-type(2)
  .row:nth-of-type(2)
  div:nth-of-type(1)
  .text {
  width: 100%;
  height: 100%;
  overflow: visible;
  transform: rotateZ(-45deg);
  position: relative;
}

.c-heroImageGrid
  .container
  .column:nth-of-type(2)
  .row:nth-of-type(2)
  div:nth-of-type(1)
  .text
  h6 {
  position: absolute;
  color: #fff;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 1.35vw;
  width: 20vw;
  top: 16vw;
  left: 7vw;
  line-height: 1.55vw;
}

.c-heroImageGrid
  .container
  .column:nth-of-type(2)
  .row:nth-of-type(2)
  div:nth-of-type(1)
  .text
  p {
  text-align: right;
  position: absolute;
  color: #fff;
  font-size: 0.9vw;
  width: 18vw;
  top: 23.5vw;
  left: -3.5vw;
}

.c-heroImageGrid
  .container
  .column:nth-of-type(2)
  .row:nth-of-type(2)
  div:nth-of-type(2) {
  position: relative;
  width: 70%;
  border-left: 8px solid white;
  overflow: hidden;
}

.c-heroImageGrid
  .container
  .column:nth-of-type(2)
  .row:nth-of-type(2)
  div:nth-of-type(2):hover {
  opacity: 0.75;
  cursor: pointer;
}

.c-heroImageGrid
  .container
  .column:nth-of-type(2)
  .row:nth-of-type(2)
  div:nth-of-type(2):before {
  position: absolute;
  top: 0;
  left: -40vw;
  width: 110.1vw;
  height: 110vw;
  background-repeat: no-repeat;
  background-size: cover;
  transform: rotateZ(-45deg);
  content: "";
  background-image: url(https://images.pexels.com/photos/414171/pexels-photo-414171.jpeg?cs=srgb&dl=adventure-calm-clouds-414171.jpg&fm=jpg);
}

.c-heroImageGrid .container .column:nth-of-type(2) .row:nth-of-type(3) {
  position: relative;
  height: 18.6vw;
  overflow: hidden;
}

.c-heroImageGrid .container .column:nth-of-type(2) .row:nth-of-type(3):hover {
  opacity: 0.75;
  cursor: pointer;
}

.c-heroImageGrid .container .column:nth-of-type(2) .row:nth-of-type(3):before {
  position: absolute;
  top: 7.5vw;
  left: 25vw;
  width: 33vw;
  height: 27vw;
  background-repeat: no-repeat;
  background-size: cover;
  transform: rotateZ(-45deg);
  content: "";
  background-image: url(https://images.unsplash.com/photo-1518098268026-4e89f1a2cd8e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80);
}
















.grid {
  display: grid;
  grid-template-rows: 
    repeat(4, 100px);
  grid-template-columns: 
    repeat(3, 1fr);
  grid-gap: 5px;
}

.item:nth-child(1) {
  grid-row: 1 / 4;
}

.item:nth-child(2) {
  grid-column: 2 / 4;
  grid-row: 1 / 3;
}

.item:nth-child(3) {
  grid-column: 3 / 4;
  grid-row: 3 / 5;
}

.item:nth-child(4) {
  grid-column: 2 / 3;
  grid-row: 3 / 4;
}

.item:nth-child(5) {
  grid-column: 1 / 3;
  grid-row: 4 / 5;
}

/* styling code */

.grid {
  margin:20px auto;
  max-width:1000px;
}

.grid > .item {
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}





</style>