(function(){
    var script = {
 "mouseWheelEnabled": true,
 "shadow": false,
 "overflow": "visible",
 "children": [
  "this.MainViewer",
  "this.Image_BEE6FED8_AC35_2F20_41D8_34B6B91DA709",
  "this.Container_806973DA_ADB0_EB72_41E1_4BBDAAEB91FF",
  "this.Container_BC8D06B7_B143_E72C_41CA_E1C4F81682F0",
  "this.HTMLText_B3A95BF7_AD90_5B11_41E1_AC9050095132",
  "this.Container_A797E343_B17D_3EDA_41AB_2CDE4A57AE7C"
 ],
 "horizontalAlign": "left",
 "id": "rootPlayer",
 "borderSize": 0,
 "propagateClick": false,
 "layout": "absolute",
 "scrollBarWidth": 10,
 "start": "this.init(); this.syncPlaylists([this.ThumbnailList_B7480756_AD90_6B13_41A9_86B89E4AD856_playlist,this.mainPlayList]); this.playList_BFAF3C58_B272_59EA_41DC_B3DF6D15AA29.set('selectedIndex', 0)",
 "mobileMipmappingEnabled": false,
 "width": "100%",
 "definitions": [{
 "class": "MapPlayer",
 "movementMode": "constrained",
 "viewerArea": "this.ViewerAreaLabeled_86CAAB5A_AC15_150D_41E5_8B8BF4BD3480",
 "buttonZoomOut": "this.IconButton_A7973343_B17D_3EDA_41E5_A3FC6227C5CE",
 "buttonZoomIn": "this.IconButton_A797F343_B17D_3EDA_41E1_5446CB5EC525",
 "id": "ViewerAreaLabeled_86CAAB5A_AC15_150D_41E5_8B8BF4BD3480MapPlayer"
},
{
 "class": "Map",
 "maximumZoomFactor": 1.2,
 "fieldOfViewOverlayInsideColor": "#FFFFFF",
 "fieldOfViewOverlayOutsideColor": "#000000",
 "label": "Floor Plan",
 "id": "map_F299D27E_B145_5EF5_41B2_3827E5636B60",
 "width": 1116,
 "fieldOfViewOverlayInsideOpacity": 0.4,
 "initialZoomFactor": 1,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/map_F299D27E_B145_5EF5_41B2_3827E5636B60.png",
    "width": 1116,
    "height": 1492
   },
   {
    "class": "ImageResourceLevel",
    "url": "media/map_F299D27E_B145_5EF5_41B2_3827E5636B60_lq.png",
    "width": 221,
    "height": 296,
    "tags": "preload"
   }
  ]
 },
 "thumbnailUrl": "media/map_F299D27E_B145_5EF5_41B2_3827E5636B60_t.png",
 "minimumZoomFactor": 0.5,
 "scaleMode": "fit_inside",
 "overlays": [
  "this.overlay_F299927E_B145_5EF5_41C5_3445D3B699E6",
  "this.overlay_F298427F_B145_5EF3_41E5_5401DEA8AFA9",
  "this.overlay_F298527F_B145_5EF3_41D4_9B4FC22491B8",
  "this.overlay_F298627F_B145_5EF3_41D2_6DE679B09CD7"
 ],
 "fieldOfViewOverlayRadiusScale": 0.3,
 "height": 1492,
 "fieldOfViewOverlayOutsideOpacity": 0
},
{
 "class": "PlayList",
 "items": [
  {
   "class": "MapPlayListItem",
   "media": "this.map_F299D27E_B145_5EF5_41B2_3827E5636B60",
   "begin": "this.ViewerAreaLabeled_86CAAB5A_AC15_150D_41E5_8B8BF4BD3480MapPlayer.set('movementMode', 'free_drag_and_rotation')",
   "player": "this.ViewerAreaLabeled_86CAAB5A_AC15_150D_41E5_8B8BF4BD3480MapPlayer"
  }
 ],
 "id": "playList_BFAF3C58_B272_59EA_41DC_B3DF6D15AA29"
},
{
 "class": "PlayList",
 "items": [
  {
   "class": "MapPlayListItem",
   "media": "this.map_F299D27E_B145_5EF5_41B2_3827E5636B60",
   "begin": "this.ViewerAreaLabeled_86CAAB5A_AC15_150D_41E5_8B8BF4BD3480MapPlayer.set('movementMode', 'free_drag_and_rotation')",
   "player": "this.ViewerAreaLabeled_86CAAB5A_AC15_150D_41E5_8B8BF4BD3480MapPlayer"
  }
 ],
 "id": "playList_BFAF9C58_B272_59EA_41E4_130C42F10C4F"
},
{
 "class": "PanoramaPlayer",
 "mouseControlMode": "drag_acceleration",
 "viewerArea": "this.MainViewer",
 "buttonMoveDown": "this.IconButton_A797B343_B17D_3EDA_41CA_0171986F3D96",
 "buttonMoveRight": "this.IconButton_A797A343_B17D_3EDA_41B1_10FF9F1B46EE",
 "buttonZoomIn": "this.IconButton_A797F343_B17D_3EDA_41E1_5446CB5EC525",
 "buttonMoveLeft": "this.IconButton_A7970343_B17D_3EDA_41DF_8CEDA653A935",
 "buttonMoveUp": "this.IconButton_A7975343_B17D_3EDA_41BF_8955CDC2EDAB",
 "buttonPlayLeft": "this.IconButton_A7971343_B17D_3EDA_41E1_D4B648D50BFF",
 "id": "MainViewerPanoramaPlayer",
 "buttonPause": "this.IconButton_A7974343_B17D_3EDA_41D5_38B6E5F68E61",
 "buttonPlayRight": "this.IconButton_A7979343_B17D_3EDA_41BB_92702E290118",
 "buttonZoomOut": "this.IconButton_A7973343_B17D_3EDA_41E5_A3FC6227C5CE",
 "gyroscopeVerticalDraggingEnabled": true,
 "displayPlaybackBar": true,
 "touchControlMode": "drag_rotation"
},
{
 "class": "SlideInEffect",
 "id": "effect_CCD93AA4_AC7D_17DF_41BE_9DB7786D337B",
 "from": "right",
 "duration": 0,
 "easing": "linear"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "automaticRotationSpeed": 4,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 93.71,
  "pitch": 0
 },
 "id": "camera_BED00CB2_B272_5ABE_41D8_5603D08770C6"
},
{
 "class": "SlideOutEffect",
 "to": "right",
 "id": "effect_2745FDF7_ACED_1161_41D1_B5EC4D857875",
 "duration": 0,
 "easing": "linear"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "automaticRotationSpeed": 4,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -149.81,
  "pitch": 0
 },
 "id": "camera_BEF67C97_B272_5966_41E5_19F4249C56F3"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "automaticRotationSpeed": 4,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_AC7C264A_A743_CE8F_41E4_E2B79B5E9E10_camera"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "automaticRotationSpeed": 4,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_AC67DFB7_A743_DD85_41DF_14B58EA0C272_camera"
},
{
 "class": "Panorama",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "url": "media/panorama_AC640323_A743_C6BD_41D2_FA602DF2E942_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1536
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "url": "media/panorama_AC640323_A743_C6BD_41D2_FA602DF2E942_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "url": "media/panorama_AC640323_A743_C6BD_41D2_FA602DF2E942_0/f/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "url": "media/panorama_AC640323_A743_C6BD_41D2_FA602DF2E942_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1536
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "url": "media/panorama_AC640323_A743_C6BD_41D2_FA602DF2E942_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "url": "media/panorama_AC640323_A743_C6BD_41D2_FA602DF2E942_0/u/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "url": "media/panorama_AC640323_A743_C6BD_41D2_FA602DF2E942_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1536
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "url": "media/panorama_AC640323_A743_C6BD_41D2_FA602DF2E942_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "url": "media/panorama_AC640323_A743_C6BD_41D2_FA602DF2E942_0/r/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_AC640323_A743_C6BD_41D2_FA602DF2E942_t.jpg",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "url": "media/panorama_AC640323_A743_C6BD_41D2_FA602DF2E942_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1536
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "url": "media/panorama_AC640323_A743_C6BD_41D2_FA602DF2E942_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "url": "media/panorama_AC640323_A743_C6BD_41D2_FA602DF2E942_0/b/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "url": "media/panorama_AC640323_A743_C6BD_41D2_FA602DF2E942_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1536
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "url": "media/panorama_AC640323_A743_C6BD_41D2_FA602DF2E942_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "url": "media/panorama_AC640323_A743_C6BD_41D2_FA602DF2E942_0/d/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "url": "media/panorama_AC640323_A743_C6BD_41D2_FA602DF2E942_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1536
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "url": "media/panorama_AC640323_A743_C6BD_41D2_FA602DF2E942_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "url": "media/panorama_AC640323_A743_C6BD_41D2_FA602DF2E942_0/l/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "Guest Lounge",
 "id": "panorama_AC640323_A743_C6BD_41D2_FA602DF2E942",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "backwardYaw": -86.29,
   "yaw": -101.49,
   "panorama": "this.panorama_AC613944_A743_C2FB_41D9_52478824D779",
   "distance": 1
  }
 ],
 "vfov": 180,
 "pitch": 0,
 "thumbnailUrl": "media/panorama_AC640323_A743_C6BD_41D2_FA602DF2E942_t.jpg",
 "hfovMax": 130,
 "hfovMin": "150%",
 "partial": false,
 "overlays": [
  "this.overlay_B3536107_A74C_4286_41DE_0410B8A2BC68"
 ],
 "mapLocations": [
  {
   "class": "PanoramaMapLocation",
   "x": 298.33,
   "angle": 177.56,
   "y": 1012.73,
   "map": "this.map_F299D27E_B145_5EF5_41B2_3827E5636B60"
  }
 ],
 "hfov": 360
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "automaticRotationSpeed": 4,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -135.41,
  "pitch": 0
 },
 "id": "camera_BE1D5C84_B272_595A_41BF_8001D384A538"
},
{
 "class": "Panorama",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "url": "media/panorama_AC7C264A_A743_CE8F_41E4_E2B79B5E9E10_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1536
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "url": "media/panorama_AC7C264A_A743_CE8F_41E4_E2B79B5E9E10_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "url": "media/panorama_AC7C264A_A743_CE8F_41E4_E2B79B5E9E10_0/f/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "url": "media/panorama_AC7C264A_A743_CE8F_41E4_E2B79B5E9E10_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1536
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "url": "media/panorama_AC7C264A_A743_CE8F_41E4_E2B79B5E9E10_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "url": "media/panorama_AC7C264A_A743_CE8F_41E4_E2B79B5E9E10_0/u/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "url": "media/panorama_AC7C264A_A743_CE8F_41E4_E2B79B5E9E10_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1536
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "url": "media/panorama_AC7C264A_A743_CE8F_41E4_E2B79B5E9E10_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "url": "media/panorama_AC7C264A_A743_CE8F_41E4_E2B79B5E9E10_0/r/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_AC7C264A_A743_CE8F_41E4_E2B79B5E9E10_t.jpg",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "url": "media/panorama_AC7C264A_A743_CE8F_41E4_E2B79B5E9E10_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1536
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "url": "media/panorama_AC7C264A_A743_CE8F_41E4_E2B79B5E9E10_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "url": "media/panorama_AC7C264A_A743_CE8F_41E4_E2B79B5E9E10_0/b/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "url": "media/panorama_AC7C264A_A743_CE8F_41E4_E2B79B5E9E10_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1536
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "url": "media/panorama_AC7C264A_A743_CE8F_41E4_E2B79B5E9E10_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "url": "media/panorama_AC7C264A_A743_CE8F_41E4_E2B79B5E9E10_0/d/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "url": "media/panorama_AC7C264A_A743_CE8F_41E4_E2B79B5E9E10_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1536
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "url": "media/panorama_AC7C264A_A743_CE8F_41E4_E2B79B5E9E10_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "url": "media/panorama_AC7C264A_A743_CE8F_41E4_E2B79B5E9E10_0/l/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "VIP Teller",
 "id": "panorama_AC7C264A_A743_CE8F_41E4_E2B79B5E9E10",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_AC613944_A743_C2FB_41D9_52478824D779"
  },
  {
   "class": "AdjacentPanorama",
   "backwardYaw": 97.6,
   "yaw": 163.25,
   "panorama": "this.panorama_AC67DFB7_A743_DD85_41DF_14B58EA0C272",
   "distance": 1
  }
 ],
 "vfov": 180,
 "pitch": 0,
 "thumbnailUrl": "media/panorama_AC7C264A_A743_CE8F_41E4_E2B79B5E9E10_t.jpg",
 "hfovMax": 130,
 "hfovMin": "150%",
 "partial": false,
 "overlays": [
  "this.overlay_BFE70CFF_A744_437F_41B8_EAB68F93E96F",
  "this.overlay_BEC3AF4D_A744_5E83_41E3_3D72546678F1"
 ],
 "mapLocations": [
  {
   "class": "PanoramaMapLocation",
   "x": 693.88,
   "angle": 0,
   "y": 286.93,
   "map": "this.map_F299D27E_B145_5EF5_41B2_3827E5636B60"
  }
 ],
 "hfov": 360
},
{
 "class": "Panorama",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "url": "media/panorama_AC67DFB7_A743_DD85_41DF_14B58EA0C272_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1536
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "url": "media/panorama_AC67DFB7_A743_DD85_41DF_14B58EA0C272_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "url": "media/panorama_AC67DFB7_A743_DD85_41DF_14B58EA0C272_0/f/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "url": "media/panorama_AC67DFB7_A743_DD85_41DF_14B58EA0C272_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1536
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "url": "media/panorama_AC67DFB7_A743_DD85_41DF_14B58EA0C272_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "url": "media/panorama_AC67DFB7_A743_DD85_41DF_14B58EA0C272_0/u/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "url": "media/panorama_AC67DFB7_A743_DD85_41DF_14B58EA0C272_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1536
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "url": "media/panorama_AC67DFB7_A743_DD85_41DF_14B58EA0C272_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "url": "media/panorama_AC67DFB7_A743_DD85_41DF_14B58EA0C272_0/r/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_AC67DFB7_A743_DD85_41DF_14B58EA0C272_t.jpg",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "url": "media/panorama_AC67DFB7_A743_DD85_41DF_14B58EA0C272_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1536
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "url": "media/panorama_AC67DFB7_A743_DD85_41DF_14B58EA0C272_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "url": "media/panorama_AC67DFB7_A743_DD85_41DF_14B58EA0C272_0/b/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "url": "media/panorama_AC67DFB7_A743_DD85_41DF_14B58EA0C272_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1536
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "url": "media/panorama_AC67DFB7_A743_DD85_41DF_14B58EA0C272_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "url": "media/panorama_AC67DFB7_A743_DD85_41DF_14B58EA0C272_0/d/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "url": "media/panorama_AC67DFB7_A743_DD85_41DF_14B58EA0C272_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1536
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "url": "media/panorama_AC67DFB7_A743_DD85_41DF_14B58EA0C272_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "url": "media/panorama_AC67DFB7_A743_DD85_41DF_14B58EA0C272_0/l/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "Private Room",
 "id": "panorama_AC67DFB7_A743_DD85_41DF_14B58EA0C272",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "backwardYaw": 30.19,
   "yaw": 44.59,
   "panorama": "this.panorama_AC613944_A743_C2FB_41D9_52478824D779",
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "backwardYaw": 163.25,
   "yaw": 97.6,
   "panorama": "this.panorama_AC7C264A_A743_CE8F_41E4_E2B79B5E9E10",
   "distance": 1
  }
 ],
 "vfov": 180,
 "pitch": 0,
 "thumbnailUrl": "media/panorama_AC67DFB7_A743_DD85_41DF_14B58EA0C272_t.jpg",
 "hfovMax": 130,
 "hfovMin": "150%",
 "partial": false,
 "overlays": [
  "this.overlay_B05ED2D2_A77C_4786_41B9_0E9FCDC0C0FC",
  "this.overlay_B0D00F79_A77C_5E83_41E0_8CA79D73124F"
 ],
 "mapLocations": [
  {
   "class": "PanoramaMapLocation",
   "x": 893.37,
   "angle": 179.42,
   "y": 587.09,
   "map": "this.map_F299D27E_B145_5EF5_41B2_3827E5636B60"
  }
 ],
 "hfov": 360
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "automaticRotationSpeed": 4,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 78.51,
  "pitch": 0
 },
 "id": "camera_BE083C8E_B272_5966_41B7_33688110C893"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "automaticRotationSpeed": 4,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -82.4,
  "pitch": 0
 },
 "id": "camera_BEE93CA9_B272_5AAA_41C3_90A50C278E2A"
},
{
 "class": "PlayList",
 "items": [
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_AC640323_A743_C6BD_41D2_FA602DF2E942",
   "camera": "this.panorama_AC640323_A743_C6BD_41D2_FA602DF2E942_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_B7480756_AD90_6B13_41A9_86B89E4AD856_playlist, 0, 1)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_AC613944_A743_C2FB_41D9_52478824D779",
   "camera": "this.panorama_AC613944_A743_C2FB_41D9_52478824D779_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_B7480756_AD90_6B13_41A9_86B89E4AD856_playlist, 1, 2)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_AC67DFB7_A743_DD85_41DF_14B58EA0C272",
   "camera": "this.panorama_AC67DFB7_A743_DD85_41DF_14B58EA0C272_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_B7480756_AD90_6B13_41A9_86B89E4AD856_playlist, 2, 3)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_AC7C264A_A743_CE8F_41E4_E2B79B5E9E10",
   "camera": "this.panorama_AC7C264A_A743_CE8F_41E4_E2B79B5E9E10_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_B7480756_AD90_6B13_41A9_86B89E4AD856_playlist, 3, 0)",
   "player": "this.MainViewerPanoramaPlayer"
  }
 ],
 "id": "ThumbnailList_B7480756_AD90_6B13_41A9_86B89E4AD856_playlist"
},
{
 "class": "SlideOutEffect",
 "to": "right",
 "id": "effect_CCD9DAA4_AC7D_17DF_41E2_64CF35750EE8",
 "duration": 0,
 "easing": "linear"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "automaticRotationSpeed": 4,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_AC613944_A743_C2FB_41D9_52478824D779_camera"
},
{
 "class": "Panorama",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "url": "media/panorama_AC613944_A743_C2FB_41D9_52478824D779_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1536
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "url": "media/panorama_AC613944_A743_C2FB_41D9_52478824D779_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "url": "media/panorama_AC613944_A743_C2FB_41D9_52478824D779_0/f/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "url": "media/panorama_AC613944_A743_C2FB_41D9_52478824D779_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1536
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "url": "media/panorama_AC613944_A743_C2FB_41D9_52478824D779_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "url": "media/panorama_AC613944_A743_C2FB_41D9_52478824D779_0/u/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "url": "media/panorama_AC613944_A743_C2FB_41D9_52478824D779_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1536
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "url": "media/panorama_AC613944_A743_C2FB_41D9_52478824D779_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "url": "media/panorama_AC613944_A743_C2FB_41D9_52478824D779_0/r/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_AC613944_A743_C2FB_41D9_52478824D779_t.jpg",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "url": "media/panorama_AC613944_A743_C2FB_41D9_52478824D779_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1536
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "url": "media/panorama_AC613944_A743_C2FB_41D9_52478824D779_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "url": "media/panorama_AC613944_A743_C2FB_41D9_52478824D779_0/b/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "url": "media/panorama_AC613944_A743_C2FB_41D9_52478824D779_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1536
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "url": "media/panorama_AC613944_A743_C2FB_41D9_52478824D779_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "url": "media/panorama_AC613944_A743_C2FB_41D9_52478824D779_0/d/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "url": "media/panorama_AC613944_A743_C2FB_41D9_52478824D779_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1536
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "url": "media/panorama_AC613944_A743_C2FB_41D9_52478824D779_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "url": "media/panorama_AC613944_A743_C2FB_41D9_52478824D779_0/l/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "Private Room Lobby",
 "id": "panorama_AC613944_A743_C2FB_41D9_52478824D779",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "backwardYaw": 44.59,
   "yaw": 30.19,
   "panorama": "this.panorama_AC67DFB7_A743_DD85_41DF_14B58EA0C272",
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "backwardYaw": -101.49,
   "yaw": -86.29,
   "panorama": "this.panorama_AC640323_A743_C6BD_41D2_FA602DF2E942",
   "distance": 1
  }
 ],
 "vfov": 180,
 "pitch": 0,
 "thumbnailUrl": "media/panorama_AC613944_A743_C2FB_41D9_52478824D779_t.jpg",
 "hfovMax": 130,
 "hfovMin": "150%",
 "partial": false,
 "overlays": [
  "this.overlay_B2BCB3A6_A744_4585_41DE_9D6DD1F84E38",
  "this.overlay_B207F346_A744_C680_41E3_CA28B3CDEDDF"
 ],
 "mapLocations": [
  {
   "class": "PanoramaMapLocation",
   "x": 681.05,
   "angle": 0,
   "y": 1157.15,
   "map": "this.map_F299D27E_B145_5EF5_41B2_3827E5636B60"
  }
 ],
 "hfov": 360
},
{
 "class": "SlideInEffect",
 "id": "effect_2745EDF7_ACED_1161_41CE_8D7449621D35",
 "from": "right",
 "duration": 0,
 "easing": "linear"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "automaticRotationSpeed": 4,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -16.75,
  "pitch": 0
 },
 "id": "camera_BEFCECA0_B272_595A_41D2_133678F3CEAF"
},
{
 "class": "PlayList",
 "items": [
  "this.PanoramaPlayListItem_BFAC9C5B_B272_59EE_41E0_20088E56F478",
  "this.PanoramaPlayListItem_BF937C5C_B272_59EA_41C5_9A74EA1D9546",
  "this.PanoramaPlayListItem_BF93CC5C_B272_59EA_41D8_B26C743A16C3",
  "this.PanoramaPlayListItem_BF927C5D_B272_59EA_4186_6C4309F66855"
 ],
 "id": "mainPlayList"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "automaticRotationSpeed": 4,
 "displayOriginPosition": {
  "class": "RotationalCameraDisplayPosition",
  "hfov": 165,
  "yaw": -93.02,
  "stereographicFactor": 1,
  "pitch": -90
 },
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -93.02,
  "pitch": -1.4
 },
 "displayMovements": [
  {
   "class": "TargetRotationalCameraDisplayMovement",
   "duration": 1000,
   "easing": "linear"
  },
  {
   "class": "TargetRotationalCameraDisplayMovement",
   "targetStereographicFactor": 0,
   "duration": 3000,
   "easing": "cubic_in_out",
   "targetPitch": -1.4
  }
 ],
 "id": "panorama_AC640323_A743_C6BD_41D2_FA602DF2E942_camera"
},
{
 "progressBackgroundColorDirection": "vertical",
 "id": "MainViewer",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "playbackBarBottom": 5,
 "toolTipShadowSpread": 0,
 "playbackBarHeadOpacity": 1,
 "progressBorderColor": "#000000",
 "toolTipBorderColor": "#767676",
 "width": "100%",
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipOpacity": 1,
 "playbackBarHeadShadowVerticalLength": 0,
 "toolTipFontSize": "0.6vw",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "transitionMode": "blending",
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "transitionDuration": 0,
 "minHeight": 50,
 "playbackBarHeight": 10,
 "toolTipPaddingBottom": 4,
 "playbackBarRight": 0,
 "playbackBarProgressBorderSize": 0,
 "toolTipTextShadowBlurRadius": 3,
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "toolTipFontWeight": "normal",
 "playbackBarHeadShadowHorizontalLength": 0,
 "minWidth": 100,
 "progressBarBorderSize": 0,
 "toolTipShadowColor": "#333333",
 "height": "100%",
 "paddingLeft": 0,
 "playbackBarBorderRadius": 0,
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderColor": "#000000",
 "toolTipShadowOpacity": 1,
 "progressLeft": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipFontStyle": "normal",
 "playbackBarBorderSize": 0,
 "propagateClick": true,
 "playbackBarBackgroundOpacity": 1,
 "shadow": false,
 "toolTipFontFamily": "Arial",
 "vrPointerSelectionColor": "#FF6600",
 "toolTipTextShadowOpacity": 0,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "borderSize": 0,
 "playbackBarHeadShadowColor": "#000000",
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "toolTipShadowHorizontalLength": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "progressBarBackgroundColorDirection": "vertical",
 "toolTipShadowVerticalLength": 0,
 "playbackBarHeadShadow": true,
 "progressBottom": 0,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "progressHeight": 10,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "paddingRight": 0,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "class": "ViewerArea",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "vrPointerColor": "#FFFFFF",
 "displayTooltipInTouchScreens": true,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "toolTipBorderSize": 1,
 "toolTipPaddingTop": 4,
 "toolTipPaddingLeft": 6,
 "paddingBottom": 0,
 "toolTipPaddingRight": 6,
 "toolTipDisplayTime": 600,
 "paddingTop": 0,
 "progressBorderRadius": 0,
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0
 ],
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarHeadHeight": 15,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#000000",
 "data": {
  "name": "Main Viewer"
 }
},
{
 "shadow": false,
 "propagateClick": false,
 "horizontalAlign": "center",
 "id": "Image_BEE6FED8_AC35_2F20_41D8_34B6B91DA709",
 "left": "3%",
 "borderSize": 0,
 "maxWidth": 214,
 "right": "90%",
 "maxHeight": 85,
 "url": "skin/Image_BEE6FED8_AC35_2F20_41D8_34B6B91DA709.png",
 "paddingRight": 0,
 "verticalAlign": "middle",
 "top": "90.97%",
 "minHeight": 1,
 "bottom": "4%",
 "class": "Image",
 "click": "if(!this.Container_BC8D06B7_B143_E72C_41CA_E1C4F81682F0.get('visible')){ this.setComponentVisibility(this.Container_BC8D06B7_B143_E72C_41CA_E1C4F81682F0, true, 0, null, null, false) } else { this.setComponentVisibility(this.Container_BC8D06B7_B143_E72C_41CA_E1C4F81682F0, false, 0, null, null, false) }",
 "minWidth": 1,
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "paddingTop": 0,
 "scaleMode": "fit_inside",
 "borderRadius": 0,
 "data": {
  "name": "CMED"
 }
},
{
 "shadow": false,
 "propagateClick": false,
 "overflow": "scroll",
 "children": [
  "this.Container_F59EA3FC_AC15_152A_41D3_A68AE3523ABE",
  "this.Container_8F88A174_B17F_DAF3_41E3_9385916D5A3E",
  "this.Container_8E56560D_B147_6613_41E3_B9F30B1AF2C2"
 ],
 "horizontalAlign": "left",
 "id": "Container_806973DA_ADB0_EB72_41E1_4BBDAAEB91FF",
 "left": "79.38%",
 "borderSize": 0,
 "layout": "vertical",
 "scrollBarWidth": 10,
 "right": "1.2%",
 "paddingRight": 0,
 "top": "0%",
 "scrollBarColor": "#000000",
 "minHeight": 1,
 "scrollBarVisible": "rollOver",
 "class": "Container",
 "verticalAlign": "top",
 "contentOpaque": false,
 "height": "100%",
 "minWidth": 1,
 "scrollBarOpacity": 0.5,
 "scrollBarMargin": 2,
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "paddingTop": 0,
 "borderRadius": 0,
 "gap": 10,
 "data": {
  "name": "Right Side Container"
 }
},
{
 "shadow": false,
 "propagateClick": false,
 "overflow": "scroll",
 "children": [
  "this.ThumbnailList_B7480756_AD90_6B13_41A9_86B89E4AD856"
 ],
 "horizontalAlign": "left",
 "id": "Container_BC8D06B7_B143_E72C_41CA_E1C4F81682F0",
 "left": "0%",
 "borderSize": 0,
 "layout": "absolute",
 "scrollBarWidth": 10,
 "right": "84.23%",
 "paddingRight": 0,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "top": "0%",
 "minHeight": 1,
 "bottom": "0%",
 "class": "Container",
 "verticalAlign": "top",
 "contentOpaque": false,
 "scrollBarOpacity": 0.5,
 "minWidth": 1,
 "scrollBarMargin": 2,
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "paddingTop": 0,
 "borderRadius": 0,
 "gap": 10,
 "visible": false,
 "data": {
  "name": "Left Side Container"
 }
},
{
 "shadow": false,
 "propagateClick": false,
 "id": "HTMLText_B3A95BF7_AD90_5B11_41E1_AC9050095132",
 "left": "0.05%",
 "borderSize": 0,
 "scrollBarWidth": 10,
 "right": "49.95%",
 "paddingRight": 20,
 "scrollBarVisible": "rollOver",
 "top": "0%",
 "scrollBarColor": "#000000",
 "minHeight": 1,
 "bottom": "84%",
 "class": "HTMLText",
 "scrollBarOpacity": 0.5,
 "minWidth": 1,
 "scrollBarMargin": 2,
 "paddingBottom": 20,
 "backgroundOpacity": 0,
 "paddingLeft": 20,
 "paddingTop": 20,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vw;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:2.53vw;\"><B>HATTHA KAKSEKAR LIMITED</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vw;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#003366;font-size:1.69vw;\"><B><I>Head Office</I></B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:0.54vw;\"><BR STYLE=\"letter-spacing:0vw;color:#000000;font-size:0.42vw;font-family:Arial, Helvetica, sans-serif;\"/></p></div>",
 "borderRadius": 0,
 "data": {
  "name": "HTMLText53815"
 }
},
{
 "shadow": false,
 "propagateClick": false,
 "overflow": "hidden",
 "children": [
  "this.IconButton_A7973343_B17D_3EDA_41E5_A3FC6227C5CE",
  "this.IconButton_A7971343_B17D_3EDA_41E1_D4B648D50BFF",
  "this.IconButton_A7970343_B17D_3EDA_41DF_8CEDA653A935",
  "this.Container_A7977343_B17D_3EDA_41C0_F47328C07981",
  "this.IconButton_A797A343_B17D_3EDA_41B1_10FF9F1B46EE",
  "this.IconButton_A7979343_B17D_3EDA_41BB_92702E290118",
  "this.IconButton_A797F343_B17D_3EDA_41E1_5446CB5EC525"
 ],
 "horizontalAlign": "center",
 "id": "Container_A797E343_B17D_3EDA_41AB_2CDE4A57AE7C",
 "left": "40%",
 "borderSize": 0,
 "layout": "horizontal",
 "scrollBarWidth": 10,
 "right": "38.77%",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "top": "85.03%",
 "scrollBarColor": "#000000",
 "minHeight": 20,
 "bottom": "0%",
 "class": "Container",
 "verticalAlign": "middle",
 "contentOpaque": false,
 "scrollBarOpacity": 0.5,
 "minWidth": 20,
 "scrollBarMargin": 2,
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "paddingTop": 0,
 "borderRadius": 0,
 "gap": 4,
 "data": {
  "name": "Middle Control"
 }
},
{
 "progressBackgroundColorDirection": "vertical",
 "id": "ViewerAreaLabeled_86CAAB5A_AC15_150D_41E5_8B8BF4BD3480",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "playbackBarBottom": 0,
 "toolTipShadowSpread": 0,
 "playbackBarHeadOpacity": 1,
 "progressBorderColor": "#000000",
 "toolTipBorderColor": "#767676",
 "width": "100%",
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipOpacity": 1,
 "playbackBarHeadShadowVerticalLength": 0,
 "toolTipFontSize": "0.6vw",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "transitionMode": "blending",
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "transitionDuration": 500,
 "minHeight": 1,
 "playbackBarHeight": 10,
 "toolTipPaddingBottom": 4,
 "playbackBarRight": 0,
 "playbackBarProgressBorderSize": 0,
 "toolTipTextShadowBlurRadius": 3,
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "toolTipFontWeight": "normal",
 "playbackBarHeadShadowHorizontalLength": 0,
 "minWidth": 1,
 "progressBarBorderSize": 0,
 "toolTipShadowColor": "#333333",
 "height": "100%",
 "paddingLeft": 0,
 "playbackBarBorderRadius": 0,
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderColor": "#000000",
 "toolTipShadowOpacity": 1,
 "progressLeft": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipFontStyle": "normal",
 "playbackBarBorderSize": 0,
 "propagateClick": false,
 "playbackBarBackgroundOpacity": 1,
 "shadow": false,
 "toolTipFontFamily": "Arial",
 "vrPointerSelectionColor": "#FF6600",
 "toolTipTextShadowOpacity": 0,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "borderSize": 0,
 "playbackBarHeadShadowColor": "#000000",
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "toolTipShadowHorizontalLength": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "progressBarBackgroundColorDirection": "vertical",
 "toolTipShadowVerticalLength": 0,
 "playbackBarHeadShadow": true,
 "progressBottom": 2,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "progressHeight": 10,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "paddingRight": 0,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "class": "ViewerArea",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "vrPointerColor": "#FFFFFF",
 "click": "if(!this.ViewerAreaLabeled_86CAAB5A_AC15_150D_41E5_8B8BF4BD3480.get('visible')){ this.setComponentVisibility(this.ViewerAreaLabeled_86CAAB5A_AC15_150D_41E5_8B8BF4BD3480, true, 0, null, null, false) } else { this.setComponentVisibility(this.ViewerAreaLabeled_86CAAB5A_AC15_150D_41E5_8B8BF4BD3480, false, 0, null, null, false) }",
 "displayTooltipInTouchScreens": true,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "toolTipBorderSize": 1,
 "toolTipPaddingTop": 4,
 "toolTipPaddingLeft": 6,
 "paddingBottom": 0,
 "toolTipPaddingRight": 6,
 "toolTipDisplayTime": 600,
 "paddingTop": 0,
 "progressBorderRadius": 0,
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0
 ],
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarHeadHeight": 15,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "visible": false,
 "progressBarBorderColor": "#000000",
 "data": {
  "name": "Floor Plan Viewer"
 }
},
{
 "shadow": false,
 "propagateClick": false,
 "pressedIconURL": "skin/IconButton_A7973343_B17D_3EDA_41E5_A3FC6227C5CE_pressed.png",
 "horizontalAlign": "center",
 "id": "IconButton_A7973343_B17D_3EDA_41E5_A3FC6227C5CE",
 "borderSize": 0,
 "transparencyActive": false,
 "width": "9.07%",
 "verticalAlign": "middle",
 "paddingRight": 0,
 "minHeight": 0,
 "class": "IconButton",
 "mode": "push",
 "iconURL": "skin/IconButton_A7973343_B17D_3EDA_41E5_A3FC6227C5CE.png",
 "minWidth": 0,
 "height": "23.36%",
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "paddingTop": 0,
 "rollOverIconURL": "skin/IconButton_A7973343_B17D_3EDA_41E5_A3FC6227C5CE_rollover.png",
 "borderRadius": 0,
 "cursor": "hand",
 "data": {
  "name": "Button27662"
 }
},
{
 "shadow": false,
 "propagateClick": false,
 "pressedIconURL": "skin/IconButton_A797F343_B17D_3EDA_41E1_5446CB5EC525_pressed.png",
 "horizontalAlign": "center",
 "id": "IconButton_A797F343_B17D_3EDA_41E1_5446CB5EC525",
 "borderSize": 0,
 "transparencyActive": false,
 "width": "8.91%",
 "verticalAlign": "middle",
 "paddingRight": 0,
 "minHeight": 0,
 "class": "IconButton",
 "mode": "push",
 "iconURL": "skin/IconButton_A797F343_B17D_3EDA_41E1_5446CB5EC525.png",
 "minWidth": 0,
 "height": "23.36%",
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "paddingTop": 0,
 "rollOverIconURL": "skin/IconButton_A797F343_B17D_3EDA_41E1_5446CB5EC525_rollover.png",
 "borderRadius": 0,
 "cursor": "hand",
 "data": {
  "name": "Button27673"
 }
},
{
 "class": "AreaHotspotMapOverlay",
 "map": {
  "class": "HotspotMapOverlayMap",
  "x": 276.02,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "class": "ImageResourceLevel",
     "url": "media/map_F299D27E_B145_5EF5_41B2_3827E5636B60_HS_1_map.gif",
     "width": 16,
     "height": 16
    }
   ]
  },
  "y": 990.42,
  "width": 44.62,
  "offsetY": 0,
  "height": 44.62,
  "offsetX": 0
 },
 "data": {
  "label": "Image"
 },
 "image": {
  "class": "HotspotMapOverlayImage",
  "x": 276.02,
  "y": 990.42,
  "width": 44.62,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "class": "ImageResourceLevel",
     "url": "media/map_F299D27E_B145_5EF5_41B2_3827E5636B60_HS_1.png",
     "width": 44,
     "height": 44
    }
   ]
  },
  "height": 44.62
 },
 "rollOverDisplay": false,
 "useHandCursor": true,
 "id": "overlay_F299927E_B145_5EF5_41C5_3445D3B699E6",
 "areas": [
  {
   "class": "HotspotMapOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 0)",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "class": "AreaHotspotMapOverlay",
 "map": {
  "class": "HotspotMapOverlayMap",
  "x": 658.74,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "class": "ImageResourceLevel",
     "url": "media/map_F299D27E_B145_5EF5_41B2_3827E5636B60_HS_2_map.gif",
     "width": 16,
     "height": 16
    }
   ]
  },
  "y": 1134.84,
  "width": 44.62,
  "offsetY": 0,
  "height": 44.62,
  "offsetX": 0
 },
 "data": {
  "label": "Image"
 },
 "image": {
  "class": "HotspotMapOverlayImage",
  "x": 658.74,
  "y": 1134.84,
  "width": 44.62,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "class": "ImageResourceLevel",
     "url": "media/map_F299D27E_B145_5EF5_41B2_3827E5636B60_HS_2.png",
     "width": 44,
     "height": 44
    }
   ]
  },
  "height": 44.62
 },
 "rollOverDisplay": false,
 "useHandCursor": true,
 "id": "overlay_F298427F_B145_5EF3_41E5_5401DEA8AFA9",
 "areas": [
  {
   "class": "HotspotMapOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 1)",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "class": "AreaHotspotMapOverlay",
 "map": {
  "class": "HotspotMapOverlayMap",
  "x": 871.06,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "class": "ImageResourceLevel",
     "url": "media/map_F299D27E_B145_5EF5_41B2_3827E5636B60_HS_3_map.gif",
     "width": 16,
     "height": 16
    }
   ]
  },
  "y": 564.78,
  "width": 44.62,
  "offsetY": 0,
  "height": 44.62,
  "offsetX": 0
 },
 "data": {
  "label": "Image"
 },
 "image": {
  "class": "HotspotMapOverlayImage",
  "x": 871.06,
  "y": 564.78,
  "width": 44.62,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "class": "ImageResourceLevel",
     "url": "media/map_F299D27E_B145_5EF5_41B2_3827E5636B60_HS_3.png",
     "width": 44,
     "height": 44
    }
   ]
  },
  "height": 44.62
 },
 "rollOverDisplay": false,
 "useHandCursor": true,
 "id": "overlay_F298527F_B145_5EF3_41D4_9B4FC22491B8",
 "areas": [
  {
   "class": "HotspotMapOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 2)",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "class": "AreaHotspotMapOverlay",
 "map": {
  "class": "HotspotMapOverlayMap",
  "x": 671.57,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "class": "ImageResourceLevel",
     "url": "media/map_F299D27E_B145_5EF5_41B2_3827E5636B60_HS_4_map.gif",
     "width": 16,
     "height": 16
    }
   ]
  },
  "y": 264.62,
  "width": 44.62,
  "offsetY": 0,
  "height": 44.62,
  "offsetX": 0
 },
 "data": {
  "label": "Image"
 },
 "image": {
  "class": "HotspotMapOverlayImage",
  "x": 671.57,
  "y": 264.62,
  "width": 44.62,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "class": "ImageResourceLevel",
     "url": "media/map_F299D27E_B145_5EF5_41B2_3827E5636B60_HS_4.png",
     "width": 44,
     "height": 44
    }
   ]
  },
  "height": 44.62
 },
 "rollOverDisplay": false,
 "useHandCursor": true,
 "id": "overlay_F298627F_B145_5EF3_41D2_6DE679B09CD7",
 "areas": [
  {
   "class": "HotspotMapOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 3)",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "shadow": false,
 "propagateClick": false,
 "pressedIconURL": "skin/IconButton_A797B343_B17D_3EDA_41CA_0171986F3D96_pressed.png",
 "horizontalAlign": "center",
 "id": "IconButton_A797B343_B17D_3EDA_41CA_0171986F3D96",
 "borderSize": 0,
 "transparencyActive": false,
 "width": "80%",
 "verticalAlign": "middle",
 "paddingRight": 0,
 "minHeight": 0,
 "class": "IconButton",
 "mode": "push",
 "iconURL": "skin/IconButton_A797B343_B17D_3EDA_41CA_0171986F3D96.png",
 "minWidth": 0,
 "height": "23.36%",
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "paddingTop": 0,
 "rollOverIconURL": "skin/IconButton_A797B343_B17D_3EDA_41CA_0171986F3D96_rollover.png",
 "borderRadius": 0,
 "cursor": "hand",
 "data": {
  "name": "Button27669"
 }
},
{
 "shadow": false,
 "propagateClick": false,
 "pressedIconURL": "skin/IconButton_A797A343_B17D_3EDA_41B1_10FF9F1B46EE_pressed.png",
 "horizontalAlign": "center",
 "id": "IconButton_A797A343_B17D_3EDA_41B1_10FF9F1B46EE",
 "borderSize": 0,
 "transparencyActive": false,
 "width": "8.96%",
 "verticalAlign": "middle",
 "paddingRight": 0,
 "minHeight": 0,
 "class": "IconButton",
 "mode": "push",
 "iconURL": "skin/IconButton_A797A343_B17D_3EDA_41B1_10FF9F1B46EE.png",
 "minWidth": 0,
 "height": "23.36%",
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "paddingTop": 0,
 "rollOverIconURL": "skin/IconButton_A797A343_B17D_3EDA_41B1_10FF9F1B46EE_rollover.png",
 "borderRadius": 0,
 "cursor": "hand",
 "data": {
  "name": "Button27670"
 }
},
{
 "shadow": false,
 "propagateClick": false,
 "pressedIconURL": "skin/IconButton_A7970343_B17D_3EDA_41DF_8CEDA653A935_pressed.png",
 "horizontalAlign": "center",
 "id": "IconButton_A7970343_B17D_3EDA_41DF_8CEDA653A935",
 "borderSize": 0,
 "transparencyActive": false,
 "width": "8.99%",
 "verticalAlign": "middle",
 "paddingRight": 0,
 "minHeight": 0,
 "class": "IconButton",
 "mode": "push",
 "iconURL": "skin/IconButton_A7970343_B17D_3EDA_41DF_8CEDA653A935.png",
 "minWidth": 0,
 "height": "23.36%",
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "paddingTop": 0,
 "rollOverIconURL": "skin/IconButton_A7970343_B17D_3EDA_41DF_8CEDA653A935_rollover.png",
 "borderRadius": 0,
 "cursor": "hand",
 "data": {
  "name": "Button27665"
 }
},
{
 "shadow": false,
 "propagateClick": false,
 "pressedIconURL": "skin/IconButton_A7975343_B17D_3EDA_41BF_8955CDC2EDAB_pressed.png",
 "horizontalAlign": "center",
 "id": "IconButton_A7975343_B17D_3EDA_41BF_8955CDC2EDAB",
 "borderSize": 0,
 "transparencyActive": false,
 "width": "80%",
 "verticalAlign": "middle",
 "paddingRight": 0,
 "minHeight": 0,
 "class": "IconButton",
 "mode": "push",
 "iconURL": "skin/IconButton_A7975343_B17D_3EDA_41BF_8955CDC2EDAB.png",
 "minWidth": 0,
 "height": "23.36%",
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "paddingTop": 0,
 "rollOverIconURL": "skin/IconButton_A7975343_B17D_3EDA_41BF_8955CDC2EDAB_rollover.png",
 "borderRadius": 0,
 "cursor": "hand",
 "data": {
  "name": "Button27667"
 }
},
{
 "shadow": false,
 "propagateClick": false,
 "pressedIconURL": "skin/IconButton_A7971343_B17D_3EDA_41E1_D4B648D50BFF_pressed.png",
 "horizontalAlign": "center",
 "id": "IconButton_A7971343_B17D_3EDA_41E1_D4B648D50BFF",
 "borderSize": 0,
 "transparencyActive": false,
 "width": "11.27%",
 "verticalAlign": "middle",
 "paddingRight": 0,
 "minHeight": 0,
 "class": "IconButton",
 "mode": "push",
 "iconURL": "skin/IconButton_A7971343_B17D_3EDA_41E1_D4B648D50BFF.png",
 "minWidth": 0,
 "height": "29.2%",
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "paddingTop": 0,
 "rollOverIconURL": "skin/IconButton_A7971343_B17D_3EDA_41E1_D4B648D50BFF_rollover.png",
 "borderRadius": 0,
 "cursor": "hand",
 "data": {
  "name": "Button27664"
 }
},
{
 "shadow": false,
 "propagateClick": false,
 "pressedIconURL": "skin/IconButton_A7974343_B17D_3EDA_41D5_38B6E5F68E61_pressed.png",
 "horizontalAlign": "center",
 "id": "IconButton_A7974343_B17D_3EDA_41D5_38B6E5F68E61",
 "borderSize": 0,
 "transparencyActive": false,
 "width": "100%",
 "pressedRollOverIconURL": "skin/IconButton_A7974343_B17D_3EDA_41D5_38B6E5F68E61_pressed_rollover.png",
 "verticalAlign": "middle",
 "paddingRight": 0,
 "minHeight": 0,
 "class": "IconButton",
 "mode": "toggle",
 "iconURL": "skin/IconButton_A7974343_B17D_3EDA_41D5_38B6E5F68E61.png",
 "minWidth": 0,
 "height": "29.2%",
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "paddingTop": 0,
 "rollOverIconURL": "skin/IconButton_A7974343_B17D_3EDA_41D5_38B6E5F68E61_rollover.png",
 "borderRadius": 0,
 "cursor": "hand",
 "data": {
  "name": "Button27668"
 }
},
{
 "shadow": false,
 "propagateClick": false,
 "pressedIconURL": "skin/IconButton_A7979343_B17D_3EDA_41BB_92702E290118_pressed.png",
 "horizontalAlign": "center",
 "id": "IconButton_A7979343_B17D_3EDA_41BB_92702E290118",
 "borderSize": 0,
 "transparencyActive": false,
 "width": "11.17%",
 "pressedRollOverIconURL": "skin/IconButton_A7979343_B17D_3EDA_41BB_92702E290118_pressed_rollover.png",
 "verticalAlign": "middle",
 "paddingRight": 0,
 "minHeight": 0,
 "class": "IconButton",
 "mode": "push",
 "iconURL": "skin/IconButton_A7979343_B17D_3EDA_41BB_92702E290118.png",
 "minWidth": 0,
 "height": "29.2%",
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "paddingTop": 0,
 "rollOverIconURL": "skin/IconButton_A7979343_B17D_3EDA_41BB_92702E290118_rollover.png",
 "borderRadius": 0,
 "cursor": "hand",
 "data": {
  "name": "Button27671"
 }
},
{
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "data": {
  "label": "Arrow 06"
 },
 "rollOverDisplay": false,
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 10.86,
   "yaw": -101.49,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_AC640323_A743_C6BD_41D2_FA602DF2E942_0_HS_1_0_0_map.gif",
      "width": 30,
      "height": 16
     }
    ]
   },
   "pitch": -16.45
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_BC5B7F95_A744_3D83_41D6_E452DFB201B7",
   "pitch": -16.45,
   "yaw": -101.49,
   "hfov": 10.86,
   "distance": 100
  }
 ],
 "id": "overlay_B3536107_A74C_4286_41DE_0410B8A2BC68",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_AC613944_A743_C2FB_41D9_52478824D779, this.camera_BED00CB2_B272_5ABE_41D8_5603D08770C6); this.mainPlayList.set('selectedIndex', 1)",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "data": {
  "label": "Arrow 04c"
 },
 "rollOverDisplay": false,
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 16.85,
   "yaw": -149.35,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_AC7C264A_A743_CE8F_41E4_E2B79B5E9E10_0_HS_0_0_0_map.gif",
      "width": 38,
      "height": 16
     }
    ]
   },
   "pitch": -21.29
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_83F943A7_A744_46B3_41CD_2E81ADC4293C",
   "pitch": -21.29,
   "yaw": -149.35,
   "hfov": 16.85,
   "distance": 100
  }
 ],
 "id": "overlay_BFE70CFF_A744_437F_41B8_EAB68F93E96F",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 1)",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "data": {
  "label": "Arrow 04c"
 },
 "rollOverDisplay": false,
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 11.25,
   "yaw": 163.25,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_AC7C264A_A743_CE8F_41E4_E2B79B5E9E10_0_HS_1_0_0_map.gif",
      "width": 38,
      "height": 16
     }
    ]
   },
   "pitch": -16.45
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_BE054575_A744_4283_41BF_B1B3430EEF10",
   "pitch": -16.45,
   "yaw": 163.25,
   "hfov": 11.25,
   "distance": 100
  }
 ],
 "id": "overlay_BEC3AF4D_A744_5E83_41E3_3D72546678F1",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_AC67DFB7_A743_DD85_41DF_14B58EA0C272, this.camera_BEE93CA9_B272_5AAA_41C3_90A50C278E2A); this.mainPlayList.set('selectedIndex', 2)",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "data": {
  "label": "Arrow 04c"
 },
 "rollOverDisplay": false,
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 13.57,
   "yaw": 97.6,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_AC67DFB7_A743_DD85_41DF_14B58EA0C272_0_HS_0_0_0_map.gif",
      "width": 38,
      "height": 16
     }
    ]
   },
   "pitch": -41.39
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_BE027574_A744_4281_41E3_0F22A7D19C34",
   "pitch": -41.39,
   "yaw": 97.6,
   "hfov": 13.57,
   "distance": 100
  }
 ],
 "id": "overlay_B05ED2D2_A77C_4786_41B9_0E9FCDC0C0FC",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_AC7C264A_A743_CE8F_41E4_E2B79B5E9E10, this.camera_BEFCECA0_B272_595A_41D2_133678F3CEAF); this.mainPlayList.set('selectedIndex', 3)",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "data": {
  "label": "Arrow 04c"
 },
 "rollOverDisplay": false,
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 15.41,
   "yaw": 44.59,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_AC67DFB7_A743_DD85_41DF_14B58EA0C272_0_HS_1_0_0_map.gif",
      "width": 38,
      "height": 16
     }
    ]
   },
   "pitch": -31.59
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_BE022575_A744_4283_41AD_1304026AB969",
   "pitch": -31.59,
   "yaw": 44.59,
   "hfov": 15.41,
   "distance": 100
  }
 ],
 "id": "overlay_B0D00F79_A77C_5E83_41E0_8CA79D73124F",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_AC613944_A743_C2FB_41D9_52478824D779, this.camera_BEF67C97_B272_5966_41E5_19F4249C56F3); this.mainPlayList.set('selectedIndex', 1)",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "data": {
  "label": "Arrow 04c"
 },
 "rollOverDisplay": false,
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 12.37,
   "yaw": 30.19,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_AC613944_A743_C2FB_41D9_52478824D779_0_HS_0_0_0_map.gif",
      "width": 38,
      "height": 16
     }
    ]
   },
   "pitch": -16.45
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_83FA43A6_A744_46B5_41B3_547D7804FC43",
   "pitch": -16.45,
   "yaw": 30.19,
   "hfov": 12.37,
   "distance": 100
  }
 ],
 "id": "overlay_B2BCB3A6_A744_4585_41DE_9D6DD1F84E38",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_AC67DFB7_A743_DD85_41DF_14B58EA0C272, this.camera_BE1D5C84_B272_595A_41BF_8001D384A538); this.mainPlayList.set('selectedIndex', 2)",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "data": {
  "label": "Arrow 04c"
 },
 "rollOverDisplay": false,
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 17.22,
   "yaw": -86.29,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_AC613944_A743_C2FB_41D9_52478824D779_0_HS_1_0_0_map.gif",
      "width": 38,
      "height": 16
     }
    ]
   },
   "pitch": -17.77
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_BE02B574_A744_4281_41D6_5DB70325D730",
   "pitch": -17.77,
   "yaw": -86.29,
   "hfov": 17.22,
   "distance": 100
  }
 ],
 "id": "overlay_B207F346_A744_C680_41E3_CA28B3CDEDDF",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_AC640323_A743_C6BD_41D2_FA602DF2E942, this.camera_BE083C8E_B272_5966_41B7_33688110C893); this.mainPlayList.set('selectedIndex', 0)",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "class": "PanoramaPlayListItem",
 "media": "this.panorama_AC640323_A743_C6BD_41D2_FA602DF2E942",
 "camera": "this.panorama_AC640323_A743_C6BD_41D2_FA602DF2E942_camera",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_BFAC9C5B_B272_59EE_41E0_20088E56F478, this.ViewerAreaLabeled_86CAAB5A_AC15_150D_41E5_8B8BF4BD3480MapPlayer); this.setEndToItemIndex(this.mainPlayList, 0, 1)",
 "player": "this.MainViewerPanoramaPlayer",
 "id": "PanoramaPlayListItem_BFAC9C5B_B272_59EE_41E0_20088E56F478"
},
{
 "class": "PanoramaPlayListItem",
 "media": "this.panorama_AC613944_A743_C2FB_41D9_52478824D779",
 "camera": "this.panorama_AC613944_A743_C2FB_41D9_52478824D779_camera",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_BF937C5C_B272_59EA_41C5_9A74EA1D9546, this.ViewerAreaLabeled_86CAAB5A_AC15_150D_41E5_8B8BF4BD3480MapPlayer); this.setEndToItemIndex(this.mainPlayList, 1, 2)",
 "player": "this.MainViewerPanoramaPlayer",
 "id": "PanoramaPlayListItem_BF937C5C_B272_59EA_41C5_9A74EA1D9546"
},
{
 "class": "PanoramaPlayListItem",
 "media": "this.panorama_AC67DFB7_A743_DD85_41DF_14B58EA0C272",
 "camera": "this.panorama_AC67DFB7_A743_DD85_41DF_14B58EA0C272_camera",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_BF93CC5C_B272_59EA_41D8_B26C743A16C3, this.ViewerAreaLabeled_86CAAB5A_AC15_150D_41E5_8B8BF4BD3480MapPlayer); this.setEndToItemIndex(this.mainPlayList, 2, 3)",
 "player": "this.MainViewerPanoramaPlayer",
 "id": "PanoramaPlayListItem_BF93CC5C_B272_59EA_41D8_B26C743A16C3"
},
{
 "class": "PanoramaPlayListItem",
 "media": "this.panorama_AC7C264A_A743_CE8F_41E4_E2B79B5E9E10",
 "camera": "this.panorama_AC7C264A_A743_CE8F_41E4_E2B79B5E9E10_camera",
 "end": "this.trigger('tourEnded')",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_BF927C5D_B272_59EA_4186_6C4309F66855, this.ViewerAreaLabeled_86CAAB5A_AC15_150D_41E5_8B8BF4BD3480MapPlayer); this.setEndToItemIndex(this.mainPlayList, 3, 0)",
 "player": "this.MainViewerPanoramaPlayer",
 "id": "PanoramaPlayListItem_BF927C5D_B272_59EA_4186_6C4309F66855"
},
{
 "shadow": false,
 "propagateClick": false,
 "overflow": "scroll",
 "children": [
  "this.ViewerAreaLabeled_86CAAB5A_AC15_150D_41E5_8B8BF4BD3480"
 ],
 "horizontalAlign": "center",
 "id": "Container_F59EA3FC_AC15_152A_41D3_A68AE3523ABE",
 "borderSize": 2,
 "layout": "vertical",
 "scrollBarWidth": 10,
 "width": "100%",
 "borderColor": "#000000",
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "scrollBarOpacity": 0.5,
 "minHeight": 1,
 "verticalAlign": "middle",
 "class": "Container",
 "contentOpaque": true,
 "height": "69.727%",
 "minWidth": 1,
 "scrollBarMargin": 2,
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "paddingTop": 0,
 "borderRadius": 50,
 "gap": 5,
 "data": {
  "name": "Floor Plan Container"
 }
},
{
 "shadow": false,
 "propagateClick": false,
 "overflow": "scroll",
 "children": [
  "this.Container_26D3DDC5_AC15_11AC_41E2_6BB5E3BD07D9"
 ],
 "horizontalAlign": "center",
 "id": "Container_8F88A174_B17F_DAF3_41E3_9385916D5A3E",
 "borderSize": 0,
 "layout": "vertical",
 "scrollBarWidth": 10,
 "width": "100%",
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "scrollBarOpacity": 0.5,
 "minHeight": 1,
 "verticalAlign": "middle",
 "class": "Container",
 "contentOpaque": false,
 "height": "19.78%",
 "minWidth": 1,
 "scrollBarMargin": 2,
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "paddingTop": 0,
 "borderRadius": 0,
 "gap": 10,
 "data": {
  "name": "Middle"
 }
},
{
 "shadow": false,
 "propagateClick": false,
 "overflow": "scroll",
 "children": [
  "this.Container_8886944C_AC33_7318_41AB_EB089F4691B5"
 ],
 "horizontalAlign": "center",
 "id": "Container_8E56560D_B147_6613_41E3_B9F30B1AF2C2",
 "borderSize": 0,
 "layout": "vertical",
 "scrollBarWidth": 10,
 "width": "100%",
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "scrollBarOpacity": 0.5,
 "minHeight": 1,
 "verticalAlign": "middle",
 "class": "Container",
 "contentOpaque": false,
 "height": "5.25%",
 "minWidth": 1,
 "scrollBarMargin": 2,
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "paddingTop": 0,
 "borderRadius": 0,
 "gap": 10,
 "data": {
  "name": "Bottom"
 }
},
{
 "itemThumbnailShadowColor": "#000000",
 "horizontalAlign": "left",
 "id": "ThumbnailList_B7480756_AD90_6B13_41A9_86B89E4AD856",
 "left": "10%",
 "scrollBarWidth": 10,
 "itemPaddingBottom": 3,
 "right": "25%",
 "itemMode": "normal",
 "itemLabelFontStyle": "normal",
 "itemLabelGap": 9,
 "itemLabelHorizontalAlign": "center",
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "itemLabelFontFamily": "Arial",
 "scrollBarColor": "#FFFFFF",
 "minHeight": 20,
 "itemThumbnailShadowVerticalLength": 3,
 "verticalAlign": "top",
 "itemBorderRadius": 0,
 "minWidth": 20,
 "itemPaddingLeft": 3,
 "paddingLeft": 20,
 "itemLabelPosition": "bottom",
 "itemThumbnailShadow": true,
 "backgroundOpacity": 0,
 "itemThumbnailShadowSpread": 1,
 "itemThumbnailBorderRadius": 50,
 "itemHorizontalAlign": "center",
 "itemThumbnailShadowHorizontalLength": 3,
 "itemBackgroundOpacity": 0,
 "itemThumbnailOpacity": 1,
 "itemPaddingTop": 3,
 "itemThumbnailShadowOpacity": 0.54,
 "propagateClick": false,
 "shadow": false,
 "itemBackgroundColor": [],
 "itemBackgroundColorRatios": [],
 "borderSize": 0,
 "rollOverItemBackgroundOpacity": 0,
 "rollOverItemLabelFontWeight": "normal",
 "paddingRight": 20,
 "itemLabelTextDecoration": "none",
 "selectedItemLabelFontSize": "0.72vw",
 "rollOverItemLabelFontSize": "0.78vw",
 "itemLabelFontWeight": "normal",
 "bottom": "10%",
 "top": "12%",
 "class": "ThumbnailList",
 "playList": "this.ThumbnailList_B7480756_AD90_6B13_41A9_86B89E4AD856_playlist",
 "itemThumbnailScaleMode": "fit_outside",
 "itemLabelFontSize": "0.84vw",
 "itemVerticalAlign": "middle",
 "selectedItemLabelFontWeight": "bold",
 "itemOpacity": 1,
 "itemThumbnailShadowBlurRadius": 8,
 "itemPaddingRight": 3,
 "scrollBarMargin": 2,
 "selectedItemLabelFontColor": "#FFCC00",
 "paddingBottom": 10,
 "itemLabelFontColor": "#FFFFFF",
 "paddingTop": 10,
 "itemBackgroundColorDirection": "vertical",
 "itemThumbnailHeight": 60,
 "borderRadius": 5,
 "gap": 5,
 "layout": "vertical",
 "data": {
  "name": "ThumbnailList35762"
 }
},
{
 "shadow": false,
 "propagateClick": false,
 "overflow": "hidden",
 "children": [
  "this.IconButton_A7975343_B17D_3EDA_41BF_8955CDC2EDAB",
  "this.IconButton_A7974343_B17D_3EDA_41D5_38B6E5F68E61",
  "this.IconButton_A797B343_B17D_3EDA_41CA_0171986F3D96"
 ],
 "horizontalAlign": "center",
 "id": "Container_A7977343_B17D_3EDA_41C0_F47328C07981",
 "borderSize": 0,
 "layout": "vertical",
 "scrollBarWidth": 10,
 "width": "11.36%",
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "scrollBarOpacity": 0.5,
 "minHeight": 20,
 "verticalAlign": "middle",
 "class": "Container",
 "contentOpaque": false,
 "height": "100%",
 "minWidth": 20,
 "scrollBarMargin": 2,
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "paddingTop": 0,
 "borderRadius": 0,
 "gap": 4,
 "data": {
  "name": "Container27666"
 }
},
{
 "class": "AnimatedImageResource",
 "frameCount": 21,
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_BC5B7F95_A744_3D83_41D6_E452DFB201B7",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_AC640323_A743_C6BD_41D2_FA602DF2E942_0_HS_1_0.png",
   "width": 420,
   "height": 330
  }
 ],
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 21,
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_83F943A7_A744_46B3_41CD_2E81ADC4293C",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_AC7C264A_A743_CE8F_41E4_E2B79B5E9E10_0_HS_0_0.png",
   "width": 480,
   "height": 300
  }
 ],
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 21,
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_BE054575_A744_4283_41BF_B1B3430EEF10",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_AC7C264A_A743_CE8F_41E4_E2B79B5E9E10_0_HS_1_0.png",
   "width": 480,
   "height": 300
  }
 ],
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 21,
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_BE027574_A744_4281_41E3_0F22A7D19C34",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_AC67DFB7_A743_DD85_41DF_14B58EA0C272_0_HS_0_0.png",
   "width": 480,
   "height": 300
  }
 ],
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 21,
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_BE022575_A744_4283_41AD_1304026AB969",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_AC67DFB7_A743_DD85_41DF_14B58EA0C272_0_HS_1_0.png",
   "width": 480,
   "height": 300
  }
 ],
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 21,
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_83FA43A6_A744_46B5_41B3_547D7804FC43",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_AC613944_A743_C2FB_41D9_52478824D779_0_HS_0_0.png",
   "width": 480,
   "height": 300
  }
 ],
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 21,
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_BE02B574_A744_4281_41D6_5DB70325D730",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_AC613944_A743_C2FB_41D9_52478824D779_0_HS_1_0.png",
   "width": 480,
   "height": 300
  }
 ],
 "colCount": 4
},
{
 "shadow": false,
 "propagateClick": false,
 "overflow": "scroll",
 "children": [
  "this.IconButton_217F3EB5_ACF5_33E4_41E2_608DADB8CC7E",
  "this.Container_23BF7E02_AC1D_72AA_41DA_22E1695AF185"
 ],
 "horizontalAlign": "center",
 "id": "Container_26D3DDC5_AC15_11AC_41E2_6BB5E3BD07D9",
 "borderSize": 0,
 "layout": "horizontal",
 "scrollBarWidth": 10,
 "width": "100%",
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "scrollBarOpacity": 0.5,
 "minHeight": 1,
 "creationPolicy": "inAdvance",
 "verticalAlign": "middle",
 "class": "Container",
 "contentOpaque": false,
 "height": "100%",
 "minWidth": 1,
 "scrollBarMargin": 2,
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "paddingTop": 0,
 "borderRadius": 0,
 "gap": 3,
 "visible": false,
 "data": {
  "name": "Contact Us Compo"
 }
},
{
 "shadow": false,
 "propagateClick": false,
 "overflow": "scroll",
 "children": [
  "this.IconButton_91D696C6_B1C5_2631_41D0_5016C4C73829",
  "this.Button_B5551DB1_A8AE_1192_41E0_9815EC3E8FD9",
  "this.Button_BAFF9AB7_AC6D_3778_41DD_EF9D1C21D15E"
 ],
 "horizontalAlign": "center",
 "id": "Container_8886944C_AC33_7318_41AB_EB089F4691B5",
 "borderSize": 0,
 "layout": "horizontal",
 "scrollBarWidth": 10,
 "width": "100%",
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "scrollBarOpacity": 0,
 "minHeight": 1,
 "verticalAlign": "middle",
 "class": "Container",
 "contentOpaque": false,
 "height": "100%",
 "minWidth": 1,
 "scrollBarMargin": 2,
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "paddingTop": 0,
 "borderRadius": 0,
 "gap": 5,
 "data": {
  "name": "Button CU and FP"
 }
},
{
 "shadow": false,
 "propagateClick": false,
 "pressedIconURL": "skin/IconButton_217F3EB5_ACF5_33E4_41E2_608DADB8CC7E_pressed.png",
 "horizontalAlign": "center",
 "id": "IconButton_217F3EB5_ACF5_33E4_41E2_608DADB8CC7E",
 "borderSize": 0,
 "transparencyActive": false,
 "maxHeight": 616,
 "maxWidth": 900,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "width": "81.529%",
 "minHeight": 1,
 "class": "IconButton",
 "mode": "push",
 "click": "if(!this.Container_26D3DDC5_AC15_11AC_41E2_6BB5E3BD07D9.get('visible')){ this.setComponentVisibility(this.Container_26D3DDC5_AC15_11AC_41E2_6BB5E3BD07D9, true, 0, null, null, false) } else { this.setComponentVisibility(this.Container_26D3DDC5_AC15_11AC_41E2_6BB5E3BD07D9, false, 0, null, null, false) }",
 "iconURL": "skin/IconButton_217F3EB5_ACF5_33E4_41E2_608DADB8CC7E.png",
 "minWidth": 1,
 "height": "100%",
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "paddingTop": 0,
 "rollOverIconURL": "skin/IconButton_217F3EB5_ACF5_33E4_41E2_608DADB8CC7E_rollover.png",
 "borderRadius": 0,
 "cursor": "hand",
 "data": {
  "name": "Contact"
 }
},
{
 "shadow": false,
 "propagateClick": false,
 "overflow": "scroll",
 "children": [
  "this.IconButton_D5B1805E_AC13_0F42_41D2_CC3FD0439B48",
  "this.IconButton_D64C3B69_AC13_714E_41C2_32E6C6ABE2F2",
  "this.IconButton_DEE538D8_AC15_3F47_41B7_DF462598A300"
 ],
 "horizontalAlign": "center",
 "id": "Container_23BF7E02_AC1D_72AA_41DA_22E1695AF185",
 "borderSize": 0,
 "layout": "vertical",
 "scrollBarWidth": 10,
 "width": "20%",
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "scrollBarOpacity": 0.5,
 "minHeight": 1,
 "verticalAlign": "middle",
 "class": "Container",
 "contentOpaque": false,
 "height": "100%",
 "minWidth": 1,
 "scrollBarMargin": 2,
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "paddingTop": 0,
 "borderRadius": 0,
 "gap": 12,
 "data": {
  "name": "Left Contact Us"
 }
},
{
 "shadow": false,
 "propagateClick": false,
 "pressedIconURL": "skin/IconButton_91D696C6_B1C5_2631_41D0_5016C4C73829_pressed.png",
 "horizontalAlign": "center",
 "id": "IconButton_91D696C6_B1C5_2631_41D0_5016C4C73829",
 "borderSize": 0,
 "transparencyActive": false,
 "pressedRollOverIconURL": "skin/IconButton_91D696C6_B1C5_2631_41D0_5016C4C73829_pressed_rollover.png",
 "verticalAlign": "middle",
 "paddingRight": 0,
 "width": "13%",
 "minHeight": 0,
 "class": "IconButton",
 "mode": "push",
 "click": "if(!this.Container_BC8D06B7_B143_E72C_41CA_E1C4F81682F0.get('visible')){ this.setComponentVisibility(this.Container_BC8D06B7_B143_E72C_41CA_E1C4F81682F0, true, 0, null, null, false) } else { this.setComponentVisibility(this.Container_BC8D06B7_B143_E72C_41CA_E1C4F81682F0, false, 0, null, null, false) }",
 "iconURL": "skin/IconButton_91D696C6_B1C5_2631_41D0_5016C4C73829.png",
 "minWidth": 0,
 "height": "100%",
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "paddingTop": 0,
 "rollOverIconURL": "skin/IconButton_91D696C6_B1C5_2631_41D0_5016C4C73829_rollover.png",
 "borderRadius": 0,
 "cursor": "hand",
 "data": {
  "name": "Button27669"
 }
},
{
 "textDecoration": "none",
 "shadow": false,
 "backgroundColorRatios": [
  0
 ],
 "data": {
  "name": "Button Contact Info info"
 },
 "iconWidth": 0,
 "horizontalAlign": "center",
 "height": "85.65%",
 "id": "Button_B5551DB1_A8AE_1192_41E0_9815EC3E8FD9",
 "borderSize": 2,
 "propagateClick": false,
 "layout": "horizontal",
 "shadowColor": "#000000",
 "fontFamily": "Montserrat",
 "rollOverBackgroundColor": [
  "#003366"
 ],
 "pressedFontSize": "1vw",
 "rollOverBackgroundOpacity": 0.8,
 "shadowSpread": 1,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColorDirection": "vertical",
 "borderColor": "#FFFFFF",
 "iconBeforeLabel": true,
 "verticalAlign": "middle",
 "pressedBackgroundColorRatios": [
  0
 ],
 "fontColor": "#FFFFFF",
 "paddingRight": 0,
 "pressedRollOverBackgroundColorRatios": [
  0
 ],
 "minHeight": 1,
 "rollOverShadow": false,
 "class": "Button",
 "mode": "push",
 "pressedBackgroundColor": [
  "#003366"
 ],
 "iconHeight": 0,
 "label": "CONTACT US",
 "backgroundColor": [
  "#000000"
 ],
 "shadowBlurRadius": 15,
 "minWidth": 1,
 "pressedRollOverBackgroundColor": [
  "#003366"
 ],
 "fontSize": "1vw",
 "click": "if(!this.Container_26D3DDC5_AC15_11AC_41E2_6BB5E3BD07D9.get('visible')){ this.setComponentVisibility(this.Container_26D3DDC5_AC15_11AC_41E2_6BB5E3BD07D9, true, 0, this.effect_2745EDF7_ACED_1161_41CE_8D7449621D35, 'showEffect', false) } else { this.setComponentVisibility(this.Container_26D3DDC5_AC15_11AC_41E2_6BB5E3BD07D9, false, 0, this.effect_2745FDF7_ACED_1161_41D1_B5EC4D857875, 'hideEffect', false) }",
 "fontStyle": "normal",
 "paddingBottom": 0,
 "backgroundOpacity": 0.15,
 "paddingLeft": 0,
 "paddingTop": 0,
 "pressedBackgroundOpacity": 1,
 "borderRadius": 5,
 "gap": 15,
 "fontWeight": "bold",
 "cursor": "hand",
 "width": "44.1%"
},
{
 "textDecoration": "none",
 "shadow": false,
 "backgroundColorRatios": [
  0
 ],
 "iconWidth": 0,
 "horizontalAlign": "center",
 "id": "Button_BAFF9AB7_AC6D_3778_41DD_EF9D1C21D15E",
 "borderSize": 2,
 "propagateClick": false,
 "layout": "horizontal",
 "shadowColor": "#000000",
 "fontFamily": "Montserrat",
 "rollOverBackgroundColor": [
  "#003366"
 ],
 "rollOverBackgroundOpacity": 0.8,
 "shadowSpread": 1,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColorDirection": "vertical",
 "borderColor": "#FFFFFF",
 "iconBeforeLabel": true,
 "verticalAlign": "middle",
 "pressedBackgroundColorRatios": [
  0
 ],
 "fontColor": "#FFFFFF",
 "paddingRight": 0,
 "width": "44.1%",
 "minHeight": 1,
 "rollOverShadow": false,
 "class": "Button",
 "mode": "push",
 "pressedBackgroundColor": [
  "#003366"
 ],
 "iconHeight": 0,
 "label": "FLOOR PLAN",
 "backgroundColor": [
  "#000000"
 ],
 "shadowBlurRadius": 15,
 "minWidth": 1,
 "fontSize": "1vw",
 "click": "if(!this.ViewerAreaLabeled_86CAAB5A_AC15_150D_41E5_8B8BF4BD3480.get('visible')){ this.setComponentVisibility(this.ViewerAreaLabeled_86CAAB5A_AC15_150D_41E5_8B8BF4BD3480, true, 0, this.effect_CCD93AA4_AC7D_17DF_41BE_9DB7786D337B, 'showEffect', false) } else { this.setComponentVisibility(this.ViewerAreaLabeled_86CAAB5A_AC15_150D_41E5_8B8BF4BD3480, false, 0, this.effect_CCD9DAA4_AC7D_17DF_41E2_64CF35750EE8, 'hideEffect', false) }",
 "fontStyle": "normal",
 "paddingBottom": 0,
 "backgroundOpacity": 0.15,
 "paddingLeft": 0,
 "paddingTop": 0,
 "pressedBackgroundOpacity": 1,
 "borderRadius": 5,
 "gap": 5,
 "fontWeight": "bold",
 "cursor": "hand",
 "pressedRollOverFontSize": "1vw",
 "height": "85.65%",
 "data": {
  "name": "Button Floor Plan"
 }
},
{
 "shadow": false,
 "propagateClick": false,
 "pressedIconURL": "skin/IconButton_D5B1805E_AC13_0F42_41D2_CC3FD0439B48_pressed.png",
 "horizontalAlign": "center",
 "id": "IconButton_D5B1805E_AC13_0F42_41D2_CC3FD0439B48",
 "borderSize": 0,
 "transparencyActive": false,
 "maxHeight": 50,
 "maxWidth": 50,
 "pressedRollOverIconURL": "skin/IconButton_D5B1805E_AC13_0F42_41D2_CC3FD0439B48_pressed_rollover.png",
 "verticalAlign": "middle",
 "paddingRight": 0,
 "width": "100%",
 "minHeight": 1,
 "class": "IconButton",
 "mode": "push",
 "iconURL": "skin/IconButton_D5B1805E_AC13_0F42_41D2_CC3FD0439B48.png",
 "minWidth": 1,
 "height": "25%",
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "paddingTop": 0,
 "rollOverIconURL": "skin/IconButton_D5B1805E_AC13_0F42_41D2_CC3FD0439B48_rollover.png",
 "borderRadius": 0,
 "cursor": "hand",
 "data": {
  "name": "Website"
 }
},
{
 "shadow": false,
 "propagateClick": false,
 "pressedIconURL": "skin/IconButton_D64C3B69_AC13_714E_41C2_32E6C6ABE2F2_pressed.png",
 "horizontalAlign": "center",
 "id": "IconButton_D64C3B69_AC13_714E_41C2_32E6C6ABE2F2",
 "borderSize": 0,
 "transparencyActive": false,
 "maxHeight": 50,
 "maxWidth": 50,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "width": "100%",
 "minHeight": 1,
 "class": "IconButton",
 "mode": "push",
 "click": "this.openLink('https://www.google.com/maps/place/CMED+Construction+Company/@11.5450478,104.9248668,15z/data=!4m5!3m4!1s0x0:0x7e215fce7b5af38c!8m2!3d11.5450478!4d104.9248668', '_blank')",
 "iconURL": "skin/IconButton_D64C3B69_AC13_714E_41C2_32E6C6ABE2F2.png",
 "minWidth": 1,
 "height": "25%",
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "paddingTop": 0,
 "rollOverIconURL": "skin/IconButton_D64C3B69_AC13_714E_41C2_32E6C6ABE2F2_rollover.png",
 "borderRadius": 0,
 "cursor": "hand",
 "data": {
  "name": "Map"
 }
},
{
 "shadow": false,
 "propagateClick": false,
 "pressedIconURL": "skin/IconButton_DEE538D8_AC15_3F47_41B7_DF462598A300_pressed.png",
 "horizontalAlign": "center",
 "id": "IconButton_DEE538D8_AC15_3F47_41B7_DF462598A300",
 "borderSize": 0,
 "transparencyActive": false,
 "maxHeight": 50,
 "maxWidth": 50,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "width": "100%",
 "minHeight": 1,
 "class": "IconButton",
 "mode": "push",
 "click": "this.openLink('https://www.linkedin.com/company/cmedcc/', '_blank')",
 "iconURL": "skin/IconButton_DEE538D8_AC15_3F47_41B7_DF462598A300.png",
 "minWidth": 1,
 "height": "25%",
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "paddingTop": 0,
 "rollOverIconURL": "skin/IconButton_DEE538D8_AC15_3F47_41B7_DF462598A300_rollover.png",
 "borderRadius": 0,
 "cursor": "hand",
 "data": {
  "name": "Linkin"
 }
}],
 "vrPolyfillScale": 0.5,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "minHeight": 20,
 "verticalAlign": "top",
 "class": "Player",
 "defaultVRPointer": "laser",
 "downloadEnabled": false,
 "scripts": {
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "getKey": function(key){  return window[key]; },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "unregisterKey": function(key){  delete window[key]; },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "registerKey": function(key, value){  window[key] = value; },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "existsKey": function(key){  return key in window; },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); }
 },
 "contentOpaque": false,
 "minWidth": 20,
 "scrollBarMargin": 2,
 "paddingBottom": 0,
 "paddingLeft": 0,
 "paddingTop": 0,
 "backgroundPreloadEnabled": true,
 "borderRadius": 0,
 "gap": 10,
 "desktopMipmappingEnabled": false,
 "height": "100%",
 "data": {
  "name": "Player3105"
 }
};

    
    function HistoryData(playList) {
        this.playList = playList;
        this.list = [];
        this.pointer = -1;
    }

    HistoryData.prototype.add = function(index){
        if(this.pointer < this.list.length && this.list[this.pointer] == index) {
            return;
        }
        ++this.pointer;
        this.list.splice(this.pointer, this.list.length - this.pointer, index);
    };

    HistoryData.prototype.back = function(){
        if(!this.canBack()) return;
        this.playList.set('selectedIndex', this.list[--this.pointer]);
    };

    HistoryData.prototype.forward = function(){
        if(!this.canForward()) return;
        this.playList.set('selectedIndex', this.list[++this.pointer]);
    };

    HistoryData.prototype.canBack = function(){
        return this.pointer > 0;
    };

    HistoryData.prototype.canForward = function(){
        return this.pointer >= 0 && this.pointer < this.list.length-1;
    };
    //

    if(script.data == undefined)
        script.data = {};
    script.data["history"] = {};    //playListID -> HistoryData

    TDV.PlayerAPI.defineScript(script);
})();
