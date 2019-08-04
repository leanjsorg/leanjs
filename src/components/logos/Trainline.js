import React from 'react'

const Trainline = ({ colour = '#00d5b5', width, height, y = 0 }) => (
  <svg
    preserveAspectRatio="xMidYMid meet"
    viewBox={`20 ${y} 550 115`}
    width={width}
    height={height}
  >
    <path
      fill={colour}
      d="m 43.901,44.214 c -1.212,5.153 -3.536,8.79 -8.184,11.922 l 15.964,0 0,-11.922 -7.78,0 z m -24.552,0 0,11.922 5.052,0 c 8.992,0 14.448,-4.749 16.57,-11.922 l -21.622,0 z m 22.127,-2.93 c 0.202,-0.808 0.202,-1.718 0.202,-2.728 l 0,-9.194 -12.124,0 0,6.87 c 0,2.021 -0.404,3.84 -1.313,5.052 l 13.235,0 z m -13.134,17.782 0,20.207 c 0,9.598 6.062,15.357 15.761,15.357 4.951,0 7.578,-1.212 7.578,-1.212 l 0,-11.114 c -0.708,0.202 -2.526,0.404 -4.143,0.404 -3.839,0 -5.86,-1.414 -5.86,-5.759 l 0,-17.883 -13.336,0 z M 90.579,44.012 c -1.01,-0.101 -2.021,-0.202 -3.132,-0.202 -4.243,0 -11.114,1.212 -14.145,7.78 l 0,-7.376 -13.033,0 0,49.709 13.437,0 0,-22.733 c 0,-10.709 5.961,-14.044 12.832,-14.044 1.212,0 2.526,0.102 4.041,0.405 l 0,-13.539 z m 5.052,36.373 c 0,7.779 6.466,14.953 17.075,14.953 7.375,0 12.124,-3.436 14.65,-7.376 0,1.92 0.202,4.648 0.505,5.961 l 12.326,0 c -0.303,-1.717 -0.606,-5.254 -0.606,-7.881 l 0,-24.45 c 0,-10.002 -5.86,-18.894 -21.621,-18.894 -13.337,0 -20.51,8.588 -21.319,16.368 l 11.922,2.526 c 0.405,-4.344 3.638,-8.083 9.498,-8.083 5.658,0 8.386,2.93 8.386,6.466 0,1.718 -0.91,3.133 -3.739,3.537 l -12.225,1.818 c -8.285,1.213 -14.852,6.163 -14.852,15.055 m 19.904,4.95 c -4.345,0 -6.466,-2.829 -6.466,-5.759 0,-3.839 2.728,-5.759 6.163,-6.264 l 11.215,-1.718 0,2.223 c 0,8.79 -5.254,11.518 -10.912,11.518 M 345.187,63.411 c 0.303,-4.547 4.143,-9.801 11.114,-9.801 7.679,0 10.912,4.85 11.114,9.801 l -22.228,0 z m 23.541,12.932 c -1.616,4.446 -5.051,7.578 -11.315,7.578 -6.669,0 -12.226,-4.749 -12.529,-11.316 l 35.565,0 c 0,-0.202 0.202,-2.223 0.202,-4.143 0,-15.963 -9.195,-25.764 -24.552,-25.764 -12.73,0 -24.45,10.306 -24.45,26.169 0,16.771 12.023,26.572 25.662,26.572 12.226,0 20.106,-7.174 22.632,-15.762 l -11.215,-3.334 z m -205.606,-32.129 -13.438,0 0,49.709 13.438,0 0,-49.709 z M 148.068,27.947 c 0,4.446 3.738,8.184 8.285,8.184 4.648,0 8.285,-3.738 8.285,-8.184 0,-4.647 -3.637,-8.386 -8.285,-8.386 -4.547,0 -8.285,3.739 -8.285,8.386 m 121.343,16.267 -13.438,0 0,49.709 13.438,0 0,-49.709 z M 254.357,27.947 c 0,4.446 3.738,8.184 8.285,8.184 4.647,0 8.285,-3.738 8.285,-8.184 0,-4.647 -3.638,-8.386 -8.285,-8.386 -4.547,0 -8.285,3.739 -8.285,8.386 M 186.562,65.33 c 0,-5.759 3.436,-10.305 9.296,-10.305 6.466,0 9.194,4.344 9.194,9.901 l 0,28.997 13.437,0 0,-31.321 c 0,-10.911 -5.658,-19.701 -17.984,-19.701 -5.355,0 -11.316,2.323 -14.347,7.476 l 0,-6.163 -13.033,0 0,49.709 13.437,0 0,-28.593 z m 106.188,0 c 0,-5.759 3.435,-10.305 9.295,-10.305 6.467,0 9.195,4.344 9.195,9.901 l 0,28.997 13.437,0 0,-31.321 c 0,-10.911 -5.658,-19.701 -17.984,-19.701 -5.355,0 -11.316,2.323 -14.347,7.476 l 0,-6.163 -13.034,0 0,49.709 13.438,0 0,-28.593 z m -44.253,17.277 c -0.909,0.101 -1.617,0.101 -2.324,0.101 -3.334,0 -5.759,-1.212 -5.759,-5.557 l 0,-56.377 -13.236,0 0,58.6 c 0,9.598 6.063,15.256 15.762,15.256 2.122,0 3.637,-0.202 5.557,-0.606 l 0,-11.417 z"
    />
  </svg>
)

export default Trainline
