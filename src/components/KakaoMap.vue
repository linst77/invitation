<template>

  
  
    <div class="map_wrap">
      <div id="map" style="width:100%;height:100%px;position:relative;">
      
      <div class="map_wrap11 pa-2 ma-2" style="width:35%; overflow-y: auto;">
      <div>
        <v-text-field style="padding:0px" placeholder="asdf" variant="outlined" id="keyword" v-model="keyword"> <v-btn type="submit" @click="searchPlaces()">검색하기</v-btn> </v-text-field>
      
        <div class="list-items">
          <div>
            <ul v-for="(item, index) in data" :key="index"> 
            <div class="list-item" @click="showPlace(item)">
            <p style="font-size: 1rem; ">{{item.place_name}}</p>
            <p class="text-caption">{{item.road_address_name}}</p>
            <hr style="opacity:0.3">
            </div>
            </ul>
          </div>
        </div>
      </div>
      </div>
    </div>
  </div>
      
  </template>
  
  <script>
  export default {
    name: "KakaoMap",
    components:{
    },
    data() {
      return {
        markers: [],
        keyword : "",
        infowindow : null,
        mapContainer : null,
        mapOption : null,
        map : null,
        ps : null,
  
  
        data :[],
        list: [
          { name: "John", id: 0 },
          { name: "Joao", id: 1 },
          { name: "Jean", id: 2 }
        ],
      };
    },
    mounted() {
      if (window.kakao && window.kakao.maps) {
        this.initMap();
      } else {
        const script = document.createElement("script");
        /* global kakao */
        script.onload = () => kakao.maps.load(this.initMap);
        script.src =
          "//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=16bfc6e61d7d17a10783625bfc8f3239&libraries=services";
        document.head.appendChild(script);
      }
    },
    methods: {
      initMap() {
        this.mapContainer = document.getElementById("map");
        this.mapOption = {
          center: new kakao.maps.LatLng(33.450701, 126.570667),
          level: 5,
        }
        this.map = new kakao.maps.Map(this.mapContainer, this.mapOption); 
        this.ps = new window.kakao.maps.services.Places();
        this.infowindow = new kakao.maps.InfoWindow({zIndex:1});
      },
  
      searchPlaces(){
        var keyword = document.getElementById('keyword').value;
  
        if (!keyword.replace(/^\s+|\s+$/g, '')) {
          alert('키워드를 입력해주세요!');
          return false;
        }
        this.ps.keywordSearch( keyword, (data, status, pgn) =>{ 
        this.data = data
        this.status = status
        this.pgn =  pgn
        })
  
      },
    showPlace( place){
      var moveLatLon = new kakao.maps.LatLng(place.y, place.x)
      this.map.setCenter(moveLatLon);
      var marker = new kakao.maps.Marker({ 
          position: moveLatLon,
          clickable:true,
      });
      var content = '<div @click="fdfd()"style="width:150px;text-align:center;padding:6px 0;"><button>우리회사</button></div>'
      var infowindow = new kakao.maps.InfoWindow({
      content : content, 
      })
      infowindow.open(this.map, marker);
  
      kakao.maps.event.addListener(infowindow, 'click', () => {
          console.log("works");
      });
  
  
    },
  
  
    fdfd(){
        console.log("works")
      }
    },
  };
  </script>
  <style scoped>
  
  .map_wrap11{
    position: absolute;
    z-index: 10000;
    background-color: rgba(255,255,255,0.5)
  }
  .list-items{
    overflow-y: auto;
    max-height: 350px;
    display: flex 1 1 auto;
    flex-direction: row;
  }
  
  
  .list-item{
    flex : 1 1 auto;
    cursor:pointer;
  }
  .list-item:hover{
    background-color: aliceblue;
  }
  .popup
    {position:relative;width:360px;height:350px;background:url('https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/box_movie.png') no-repeat;padding:15px 10px;}
  
  .map_wrap, .map_wrap * {margin:0;padding:0;font-family:'Malgun Gothic',dotum,'돋움',sans-serif;font-size:12px;}
  .map_wrap a, .map_wrap a:hover, .map_wrap a:active{color:#000;text-decoration: none;}
  .map_wrap {position:relative;width:100%;height:500px; display:flex;}
  
  
  
  .label {margin-bottom: 96px;}
  .label * {display: inline-block;vertical-align: top;}
  .label .left {background: url("https://t1.daumcdn.net/localimg/localimages/07/2011/map/storeview/tip_l.png") no-repeat;display: inline-block;height: 24px;overflow: hidden;vertical-align: top;width: 7px;}
  .label .center {background: url(https://t1.daumcdn.net/localimg/localimages/07/2011/map/storeview/tip_bg.png) repeat-x;display: inline-block;height: 24px;font-size: 12px;line-height: 24px;}
  .label .right {background: url("https://t1.daumcdn.net/localimg/localimages/07/2011/map/storeview/tip_r.png") -1px 0  no-repeat;display: inline-block;height: 24px;overflow: hidden;width: 6px;}
  
  .buttons {
    margin-top: 35px;
  }
  .row-v {
    height: 150px;
    width: 200px;
  }
  .ghost {
    opacity: 0.5;
    background: #c8ebfb;
  }
  </style>
  