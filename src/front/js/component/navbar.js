import { Link } from "react-router-dom";
import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import Llama from "../../img/llama80.svg";
import "../../styles/home.css";

export const Navbar = () => {
  const { store, actions } = useContext(Context);
  const darkOnClick = () => {
    actions.turnOnDarkMode();
  };

  const [scrolled, setScrolled] = useState();
  const initScrollBehaviour = () => {
    let y = window.scrollY;
    setScrolled(y);
    // console.log(y, "scrolled");
  };

  useEffect(() => {
    window.addEventListener("scroll", () => initScrollBehaviour());
  }, []);


  return (
   
    <nav className="navbar navbar-light bg-white sticky-top">
      <div className="container">
        <Link to="/" className="no-decoration">
         
        <svg width="55" height="55" viewBox="0 0 213 185" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g clip-path="url(#clip0_1_2)">
    <rect width="213" height="185" fill="white" />
    <path d="M174.306 79.2101L179.663 66.4127L171.96 37.9273L153.429 5.50837L143.874 2.33793L134.691 1.32043L140.737 31.5656L110.64 5.80437H98.3048L92.2636 9.60381L120.43 53.3147L91.7498 61.568L48.4282 86.3164L38.9231 114.862L53.7159 118.62L27.9563 124.052V130.582L23.5818 132.233L37.9965 145.292L61.1177 151.409L87.4312 139.98L76.2034 170.452L117.033 183.749L190.369 147.353V116.136L174.306 79.2101Z" fill="#B3ADD8" />
    <path d="M92.3675 124.9L66.5093 120.689L56.2773 118.079L27.9563 124.052V126.986L53.25 132.992L79.875 127.747L79.8537 129.058L92.3675 124.9Z" fill="#8B75A1" />
    <path d="M161.081 55.5231L160.389 50.3431L142.888 2.22693L134.691 1.32043L140.737 31.5656L142.761 34.9211L143.775 39.9993V55.5231H139.781L133.764 42.8044L98.7255 6.96062L98.3048 5.80437L92.2636 9.60381L120.43 53.3147L91.7497 61.568L48.4282 86.3164L38.9231 114.862L53.7159 118.62L58.8679 118.724L66.5092 120.689L76.8397 91.2744L97.8203 79.2031L111.825 71.7106L166.406 55.5231H161.081Z" fill="#DCD5F2" />
    <path d="M122.475 143.398L116.671 179.936L117.033 183.749L76.2034 170.452L87.4312 139.98L89.6623 137.719L99.4683 136.192L122.475 143.398Z" fill="#978FBF" />
    <path d="M53.25 137.892V136.678L29.213 130.106L23.5818 132.233L37.9965 145.292L61.1177 151.409L60.9979 150.167L53.25 137.892Z" fill="#DCD5F2" />
    <path d="M53.25 130.679L27.9563 124.674V130.975L53.25 137.892L55.9125 137.009V130.154L53.25 130.679Z" fill="#F2FAFF" />
    <path d="M81.875 127.435L55.25 132.679V139.892L81.875 131.049V127.435Z" fill="#E1EBF2" />
    <path d="M143.775 148.763V170.475L138.45 173.118V151.399L143.775 148.763Z" fill="#978FBF" />
    <path d="M159.75 140.854V162.548L154.425 165.191V143.491L159.75 140.854Z" fill="#978FBF" />
    <path d="M175.725 154.621V132.899L170.4 135.582V157.262L175.725 154.621Z" fill="#978FBF" />
    <path d="M175.725 79.2031L181.05 66.4844L173.222 37.5319L154.425 4.64812L143.988 1.17937L133.072 -0.0231323L138.716 28.2125L111.186 4.64812H97.8735L90.525 9.27312L118.481 52.6556L91.164 60.5181L70.6095 72.2656L61.4505 77.4919L47.286 85.5856L37.275 115.648L48.564 118.516L26.625 123.141V129.824L21.3 131.836L37.275 146.312L61.2375 152.648L85.2 142.242L74.55 171.148L117.15 185.023L191.7 148.023V115.926L175.725 79.2031ZM189.037 146.682L116.91 182.479L77.8515 169.761L87.7294 142.936L89.673 137.709L84.0019 140.184L60.9979 150.174L38.7127 144.277L25.8795 132.622L27.69 131.951L29.2875 131.35V124.967L49.203 120.759L58.8679 118.724L49.3095 116.296L40.5765 114.076L49.5758 87.0425L64.7254 78.3937L73.9642 73.1212L92.3355 62.6225L119.307 54.8525L122.368 53.9737L120.798 51.5225L94.0129 9.94374L98.7255 6.96062H110.094L136.852 29.8544L142.763 34.9187L141.352 27.8194L136.32 2.65937L143.322 3.44562L152.508 6.47499L170.693 38.3181L178.281 66.3456L173.222 78.4169L172.876 79.2262L173.222 80.0125L189.037 116.342V146.682Z" fill="#8B75A1" />
    <path d="M184.218 98.6975L181.902 99.9694L109.748 139.421L122.475 143.398L185.763 108.803L188.052 107.531L184.218 98.6975Z" fill="#495866" />
    <path d="M111.133 139.837L99.471 136.183L88.182 84.7531L64.7254 78.3938L61.4505 77.4919L70.6095 72.2656L73.9643 73.1213L97.8203 79.2031L111.133 139.837Z" fill="#495866" />
    <path d="M96.071 138.759C96.071 138.759 95.3282 138.764 91.7364 138.787C88.1447 138.81 85.2053 135.723 85.1734 131.891C85.1414 128.059 88.0249 124.935 91.6166 124.912C95.2083 124.889 95.9512 124.884 95.9512 124.884L96.071 138.759Z" fill="#B6C9D6" />
    <path d="M95.8794 138.77C98.8203 138.751 101.178 135.63 101.145 131.798C101.113 127.967 98.7021 124.876 95.7612 124.895C92.8203 124.914 90.4627 128.035 90.4953 131.867C90.528 135.698 92.9385 138.789 95.8794 138.77Z" fill="#8096B0" />
    <path d="M154.425 92.5C154.425 100.164 147.274 106.375 138.45 106.375C129.626 106.375 122.475 100.164 122.475 92.5C122.475 83.25 129.626 69.375 138.45 69.375C147.274 69.375 154.425 83.25 154.425 92.5Z" fill="white" />
    <path d="M61.9723 98.4593L57.297 111.717L62.3557 113.012L68.61 95.3467L61.9723 98.4593Z" fill="#8B75A1" />
    <path d="M57.486 97.3077L53.8198 91.5403L47.8717 109.312L53.037 110.653L57.486 97.3077Z" fill="#8B75A1" />
    <path d="M139.781 92.5C141.987 92.5 143.775 90.947 143.775 89.0312C143.775 87.1155 141.987 85.5625 139.781 85.5625C137.576 85.5625 135.788 87.1155 135.788 89.0312C135.788 90.947 137.576 92.5 139.781 92.5Z" fill="#495866" />
    
      
        <path className={(scrolled > 10 ? "sunglasses " : "sunglasses-off")} d="M157.55 98.6648C159.941 94.2356 160.995 89.3787 159.953 84.7815C158.848 79.8825 155.132 75.5288 151.426 72.7623C147.263 69.6585 142.569 67.2107 138.263 64.274C135.65 62.4974 132.824 61.0223 130.117 59.3644C126.681 57.2528 123.339 55.0224 119.994 52.7701C114.543 49.1101 109.089 45.5083 103.592 41.9187C102.249 41.0466 100.903 40.1525 99.5605 39.2804C96.127 37.0307 92.5871 35.2119 88.3378 34.753C82.8377 34.1619 77.8553 35.9276 73.519 40.4134C71.0049 43.0018 69.0098 45.9672 67.4297 49.2021C65.5634 53.0114 64.1944 56.9636 63.8596 61.0872C63.4342 66.2323 65.1495 70.8072 68.7789 73.7442C71.2697 75.7619 74.2141 76.8138 77.396 77.3397C82.1794 78.1255 87.0532 77.6497 91.972 76.4629C93.9268 75.9919 95.8937 75.5289 97.781 74.6539C100.586 73.3547 103.315 71.8258 105.954 70.0593C109.222 67.8604 112.337 65.4422 114.42 61.8337C114.573 61.5725 114.75 61.5674 114.963 61.586C118.422 61.7919 121.016 63.3565 122.636 66.4487C122.831 66.8157 122.78 67.0823 122.508 67.4463C121.723 68.4963 121.12 69.6652 120.633 70.8693C119.558 73.4324 118.929 76.0847 118.538 78.7715C117.75 84.2613 117.541 89.367 118.58 94.5827C119.542 99.4887 121.316 104.161 124.089 108.043C126.108 110.894 128.584 113.202 131.87 114.396C136.468 116.082 141.039 115.109 145.487 112.136C150.559 108.708 154.569 104.191 157.55 98.6648ZM135.783 64.3241C135.619 64.4172 135.124 64.3763 134.868 64.2899C131.759 63.3312 128.778 62.5757 125.483 64.5767C124.849 64.9651 123.703 65.9814 123.68 64.6264C123.649 63.2854 122.193 62.5602 121.274 61.9436C120.307 61.2953 119.33 60.6611 118.32 60.1051C117.792 59.8223 117.301 59.7234 116.682 59.9015C115.615 60.2086 115.34 59.9102 115.54 58.7999C116.053 56.0323 115.428 52.7455 113.617 50.9096C113.165 50.4562 112.522 50.2181 112.195 49.6257C112.118 49.4761 112.112 49.2719 112.216 49.1392C112.45 48.8314 112.792 49.2135 112.954 49.3386C113.351 49.6363 113.787 49.8997 114.193 50.1833C116.568 51.7653 118.973 53.3271 121.365 54.881C124.308 56.7917 127.25 58.7023 130.192 60.613C131.95 61.7546 133.726 62.8681 135.511 63.9675C135.859 64.1534 135.887 64.2713 135.783 64.3241Z" fill="black" />
        <path className="sunglasses-off" d="M151.725 72.3615L151.725 72.3617C155.485 75.1687 159.3 79.6143 160.441 84.6714C161.516 89.4166 160.421 94.3976 157.99 98.9023M151.725 72.3615L159.953 84.7815C160.995 89.3787 159.941 94.2356 157.55 98.6648C154.569 104.191 150.559 108.708 145.487 112.136C141.039 115.109 136.468 116.082 131.87 114.396C128.584 113.202 126.108 110.894 124.089 108.043M151.725 72.3615C149.624 70.7948 147.392 69.3967 145.159 68.0291C144.825 67.8242 144.49 67.6201 144.156 67.4162C142.255 66.2556 140.365 65.1023 138.545 63.8609L138.544 63.8606C136.892 62.7367 135.134 61.7207 133.393 60.7145C132.375 60.1256 131.362 59.54 130.379 58.9382C126.952 56.8326 123.618 54.6074 120.273 52.3553L120.273 52.355C114.82 48.6936 109.364 45.0905 103.866 41.5L103.865 41.4993C103.194 41.0641 102.523 40.6233 101.851 40.1816L101.85 40.1813C101.179 39.7402 100.506 39.2982 99.8337 38.8616C96.3745 36.5951 92.756 34.7273 88.3915 34.2559L88.3912 34.2558C82.7298 33.6475 77.5975 35.4751 73.1599 40.0654C70.6047 42.6963 68.5806 45.7065 66.9805 48.9824C65.0979 52.8251 63.7029 56.8396 63.3613 61.0464C62.9247 66.3279 64.6859 71.0751 68.4644 74.1329C71.0423 76.2211 74.0765 77.2978 77.3144 77.833L77.3149 77.8331C82.1843 78.633 87.1286 78.1458 92.0892 76.949C92.1429 76.9361 92.1967 76.9231 92.2505 76.9102C94.1456 76.4539 96.1047 75.9822 97.9913 75.1076C100.82 73.7974 103.571 72.2558 106.232 70.4749L106.234 70.4741C109.514 68.2669 112.71 65.7964 114.853 62.0848M151.725 72.3615L114.853 62.0848M157.99 98.9023L157.555 98.6676L157.99 98.9022C157.99 98.9022 157.99 98.9023 157.99 98.9023ZM157.99 98.9023C154.973 104.495 150.91 109.075 145.767 112.55L145.765 112.552C141.222 115.589 136.484 116.62 131.698 114.866M131.698 114.866C131.699 114.866 131.699 114.866 131.699 114.866L131.869 114.397L131.698 114.865C131.698 114.865 131.698 114.865 131.698 114.866ZM131.698 114.866C128.287 113.626 125.737 111.236 123.681 108.332M123.681 108.332C123.682 108.333 123.682 108.333 123.682 108.333L124.089 108.043M123.681 108.332C123.681 108.332 123.681 108.332 123.681 108.332L124.089 108.043M123.681 108.332C120.858 104.38 119.062 99.6373 118.09 94.6799M124.089 108.043C121.316 104.161 119.542 99.4887 118.58 94.5827M118.58 94.5827L118.09 94.6804C118.09 94.6802 118.09 94.6801 118.09 94.6799M118.58 94.5827L118.09 94.6789C118.09 94.6793 118.09 94.6796 118.09 94.6799M118.58 94.5827L114.42 61.8337L114.839 62.0751C114.841 62.0743 114.843 62.0734 114.845 62.0724C114.849 62.0706 114.853 62.0685 114.857 62.0662C114.861 62.0639 114.864 62.0617 114.867 62.0598C114.869 62.0579 114.871 62.0563 114.872 62.0551C114.878 62.0505 114.871 62.0549 114.856 62.0798M118.09 94.6799C117.036 89.3879 117.251 84.2204 118.043 78.7005L118.044 78.6995C118.439 75.9851 119.076 73.2906 120.17 70.6791C120.668 69.4484 121.29 68.2399 122.108 67.1471M122.108 67.1471C122.108 67.147 122.108 67.1468 122.108 67.1467L122.508 67.4463L122.107 67.1477C122.108 67.1475 122.108 67.1473 122.108 67.1471ZM122.108 67.1471C122.222 66.9935 122.247 66.9161 122.252 66.8786C122.255 66.8549 122.259 66.8041 122.194 66.6838L122.193 66.6806C120.66 63.7536 118.229 62.2813 114.933 62.0851L114.92 62.0843L114.92 62.0841C114.896 62.0821 114.878 62.0808 114.863 62.0801C114.86 62.08 114.858 62.0799 114.856 62.0798M114.856 62.0798C114.852 62.0797 114.849 62.0796 114.846 62.0796L114.853 62.0837C114.853 62.0841 114.853 62.0844 114.853 62.0848M114.856 62.0798C114.855 62.0814 114.854 62.083 114.853 62.0848M129.919 61.0323C131.162 61.8393 132.414 62.632 133.67 63.4153C130.983 62.6752 128.221 62.3292 125.223 64.1493L125.222 64.1503C125.121 64.2119 124.994 64.298 124.872 64.3804C124.798 64.4306 124.726 64.4793 124.663 64.5203C124.474 64.6439 124.316 64.735 124.192 64.7816C124.186 64.7423 124.181 64.6891 124.18 64.618L124.18 64.6145C124.16 63.7448 123.672 63.1076 123.141 62.6385C122.754 62.2974 122.287 61.9999 121.903 61.7554C121.775 61.6737 121.656 61.598 121.553 61.5285L121.553 61.5282C120.583 60.8782 119.591 60.234 118.561 59.6671L118.561 59.667L118.556 59.6644C117.937 59.3325 117.311 59.2001 116.544 59.421C116.295 59.4925 116.132 59.5164 116.031 59.5151C116.015 59.5149 116.002 59.5141 115.992 59.5131C115.988 59.4974 115.985 59.4749 115.982 59.444C115.973 59.3277 115.985 59.1503 116.032 58.8902C116.545 56.1191 115.976 52.786 114.172 50.7695C116.465 52.295 118.786 53.8018 121.092 55.2995L121.093 55.3004L121.11 55.3116L121.128 55.3228L121.145 55.3339L121.162 55.3451L121.179 55.3563L121.197 55.3675L121.214 55.3787L121.231 55.3899L121.248 55.4011L121.265 55.4123L121.283 55.4235L121.3 55.4347L121.317 55.4459L121.334 55.4571L121.352 55.4683L121.369 55.4795L121.386 55.4907L121.403 55.5019L121.421 55.5131L121.438 55.5243L121.455 55.5355L121.472 55.5467L121.49 55.5578L121.507 55.569L121.524 55.5802L121.541 55.5914L121.559 55.6026L121.576 55.6138L121.593 55.625L121.61 55.6362L121.627 55.6474L121.645 55.6586L121.662 55.6698L121.679 55.681L121.696 55.6922L121.714 55.7034L121.731 55.7146L121.748 55.7258L121.765 55.737L121.783 55.7482L121.8 55.7594L121.817 55.7706L121.834 55.7818L121.852 55.7929L121.869 55.8041L121.886 55.8153L121.903 55.8265L121.921 55.8377L121.938 55.8489L121.955 55.8601L121.972 55.8713L121.99 55.8825L122.007 55.8937L122.024 55.9049L122.041 55.9161L122.058 55.9273L122.076 55.9385L122.093 55.9497L122.11 55.9609L122.127 55.9721L122.145 55.9833L122.162 55.9945L122.179 56.0057L122.196 56.0169L122.214 56.028L122.231 56.0392L122.248 56.0504L122.265 56.0616L122.283 56.0728L122.3 56.084L122.317 56.0952L122.334 56.1064L122.352 56.1176L122.369 56.1288L122.386 56.14L122.403 56.1512L122.42 56.1624L122.438 56.1736L122.455 56.1848L122.472 56.196L122.489 56.2072L122.507 56.2184L122.524 56.2296L122.541 56.2408L122.558 56.252L122.576 56.2631L122.593 56.2743L122.61 56.2855L122.627 56.2967L122.645 56.3079L122.662 56.3191L122.679 56.3303L122.696 56.3415L122.714 56.3527L122.731 56.3639L122.748 56.3751L122.765 56.3863L122.783 56.3975L122.8 56.4087L122.817 56.4199L122.834 56.4311L122.851 56.4423L122.869 56.4535L122.886 56.4647L122.903 56.4759L122.92 56.4871L122.938 56.4982L122.955 56.5094L122.972 56.5206L122.989 56.5318L123.007 56.543L123.024 56.5542L123.041 56.5654L123.058 56.5766L123.076 56.5878L123.093 56.599L123.11 56.6102L123.127 56.6214L123.145 56.6326L123.162 56.6438L123.179 56.655L123.196 56.6662L123.213 56.6774L123.231 56.6886L123.248 56.6998L123.265 56.711L123.282 56.7221L123.3 56.7333L123.317 56.7445L123.334 56.7557L123.351 56.7669L123.369 56.7781L123.386 56.7893L123.403 56.8005L123.42 56.8117L123.438 56.8229L123.455 56.8341L123.472 56.8453L123.489 56.8565L123.507 56.8677L123.524 56.8789L123.541 56.8901L123.558 56.9013L123.576 56.9125L123.593 56.9237L123.61 56.9349L123.627 56.9461L123.644 56.9572L123.662 56.9684L123.679 56.9796L123.696 56.9908L123.713 57.002L123.731 57.0132L123.748 57.0244L123.765 57.0356L123.782 57.0468L123.8 57.058L123.817 57.0692L123.834 57.0804L123.851 57.0916L123.869 57.1028L123.886 57.114L123.903 57.1252L123.92 57.1364L123.938 57.1476L123.955 57.1588L123.972 57.17L123.989 57.1812L124.006 57.1923L124.024 57.2035L124.041 57.2147L124.058 57.2259L124.075 57.2371L124.093 57.2483L124.11 57.2595L124.127 57.2707L124.144 57.2819L124.162 57.2931L124.179 57.3043L124.196 57.3155L124.213 57.3267L124.231 57.3379L124.248 57.3491L124.265 57.3603L124.282 57.3715L124.3 57.3827L124.317 57.3939L124.334 57.4051L124.351 57.4163L124.368 57.4274L124.386 57.4386L124.403 57.4498L124.42 57.461L124.437 57.4722L124.455 57.4834L124.472 57.4946L124.489 57.5058L124.506 57.517L124.524 57.5282L124.541 57.5394L124.558 57.5506L124.575 57.5618L124.593 57.573L124.61 57.5842L124.627 57.5954L124.644 57.6066L124.662 57.6178L124.679 57.629L124.696 57.6402L124.713 57.6514L124.731 57.6625L124.748 57.6737L124.765 57.6849L124.782 57.6961L124.799 57.7073L124.817 57.7185L124.834 57.7297L124.851 57.7409L124.868 57.7521L124.886 57.7633L124.903 57.7745L124.92 57.7857L124.937 57.7969L124.955 57.8081L124.972 57.8193L124.989 57.8305L125.006 57.8417L125.024 57.8529L125.041 57.8641L125.058 57.8753L125.075 57.8865L125.093 57.8976L125.11 57.9088L125.127 57.92L125.144 57.9312L125.161 57.9424L125.179 57.9536L125.196 57.9648L125.213 57.976L125.23 57.9872L125.248 57.9984L125.265 58.0096L125.282 58.0208L125.299 58.032L125.317 58.0432L125.334 58.0544L125.351 58.0656L125.368 58.0768L125.386 58.088L125.403 58.0992L125.42 58.1104L125.437 58.1215L125.455 58.1327L125.472 58.1439L125.489 58.1551L125.506 58.1663L125.524 58.1775L125.541 58.1887L125.558 58.1999L125.575 58.2111L125.592 58.2223L125.61 58.2335L125.627 58.2447L125.644 58.2559L125.661 58.2671L125.679 58.2783L125.696 58.2895L125.713 58.3007L125.73 58.3119L125.748 58.3231L125.765 58.3343L125.782 58.3455L125.799 58.3566L125.817 58.3678L125.834 58.379L125.851 58.3902L125.868 58.4014L125.886 58.4126L125.903 58.4238L125.92 58.435L125.937 58.4462L125.954 58.4574L125.972 58.4686L125.989 58.4798L126.006 58.491L126.023 58.5022L126.041 58.5134L126.058 58.5246L126.075 58.5358L126.092 58.547L126.11 58.5582L126.127 58.5694L126.144 58.5806L126.161 58.5917L126.179 58.6029L126.196 58.6141L126.213 58.6253L126.23 58.6365L126.248 58.6477L126.265 58.6589L126.282 58.6701L126.299 58.6813L126.317 58.6925L126.334 58.7037L126.351 58.7149L126.368 58.7261L126.385 58.7373L126.403 58.7485L126.42 58.7597L126.437 58.7709L126.454 58.7821L126.472 58.7933L126.489 58.8045L126.506 58.8157L126.523 58.8268L126.541 58.838L126.558 58.8492L126.575 58.8604L126.592 58.8716L126.61 58.8828L126.627 58.894L126.644 58.9052L126.661 58.9164L126.679 58.9276L126.696 58.9388L126.713 58.95L126.73 58.9612L126.747 58.9724L126.765 58.9836L126.782 58.9948L126.799 59.006L126.816 59.0172L126.834 59.0284L126.851 59.0396L126.868 59.0508L126.885 59.0619L126.903 59.0731L126.92 59.0843L126.937 59.0955L126.954 59.1067L126.972 59.1179L126.989 59.1291L127.006 59.1403L127.023 59.1515L127.041 59.1627L127.058 59.1739L127.075 59.1851L127.092 59.1963L127.11 59.2075L127.127 59.2187L127.144 59.2299L127.161 59.2411L127.178 59.2523L127.196 59.2635L127.213 59.2747L127.23 59.2858L127.247 59.297L127.265 59.3082L127.282 59.3194L127.299 59.3306L127.316 59.3418L127.334 59.353L127.351 59.3642L127.368 59.3754L127.385 59.3866L127.403 59.3978L127.42 59.409L127.437 59.4202L127.454 59.4314L127.472 59.4426L127.489 59.4538L127.506 59.465L127.523 59.4762L127.54 59.4874L127.558 59.4986L127.575 59.5098L127.592 59.5209L127.609 59.5321L127.627 59.5433L127.644 59.5545L127.661 59.5657L127.678 59.5769L127.696 59.5881L127.713 59.5993L127.73 59.6105L127.747 59.6217L127.765 59.6329L127.782 59.6441L127.799 59.6553L127.816 59.6665L127.834 59.6777L127.851 59.6889L127.868 59.7001L127.885 59.7113L127.903 59.7225L127.92 59.7337L127.937 59.7449L127.954 59.756L127.971 59.7672L127.989 59.7784L128.006 59.7896L128.023 59.8008L128.04 59.812L128.058 59.8232L128.075 59.8344L128.092 59.8456L128.109 59.8568L128.127 59.868L128.144 59.8792L128.161 59.8904L128.178 59.9016L128.196 59.9128L128.213 59.924L128.23 59.9352L128.247 59.9464L128.265 59.9576L128.282 59.9688L128.299 59.98L128.316 59.9911L128.333 60.0023L128.351 60.0135L128.368 60.0247L128.385 60.0359L128.402 60.0471L128.42 60.0583L128.437 60.0695L128.454 60.0807L128.471 60.0919L128.489 60.1031L128.506 60.1143L128.523 60.1255L128.54 60.1367L128.558 60.1479L128.575 60.1591L128.592 60.1703L128.609 60.1815L128.627 60.1927L128.644 60.2039L128.661 60.215L128.678 60.2262L128.696 60.2374L128.713 60.2486L128.73 60.2598L128.747 60.271L128.764 60.2822L128.782 60.2934L128.799 60.3046L128.816 60.3158L128.833 60.327L128.851 60.3382L128.868 60.3494L128.885 60.3606L128.902 60.3718L128.92 60.383L128.937 60.3942L128.954 60.4054L128.971 60.4166L128.989 60.4278L129.006 60.439L129.023 60.4502L129.04 60.4613L129.058 60.4725L129.075 60.4837L129.092 60.4949L129.109 60.5061L129.126 60.5173L129.144 60.5285L129.161 60.5397L129.178 60.5509L129.195 60.5621L129.213 60.5733L129.23 60.5845L129.247 60.5957L129.264 60.6069L129.282 60.6181L129.299 60.6293L129.316 60.6405L129.333 60.6517L129.351 60.6629L129.368 60.6741L129.385 60.6852L129.402 60.6964L129.42 60.7076L129.437 60.7188L129.454 60.73L129.471 60.7412L129.489 60.7524L129.506 60.7636L129.523 60.7748L129.54 60.786L129.557 60.7972L129.575 60.8084L129.592 60.8196L129.609 60.8308L129.626 60.842L129.644 60.8532L129.661 60.8644L129.678 60.8756L129.695 60.8868L129.713 60.898L129.73 60.9092L129.747 60.9203L129.764 60.9315L129.782 60.9427L129.799 60.9539L129.816 60.9651L129.833 60.9763L129.851 60.9875L129.868 60.9987L129.885 61.0099L129.902 61.0211L129.919 61.0323ZM124.091 64.8087C124.091 64.8086 124.093 64.8083 124.097 64.8085C124.093 64.809 124.091 64.8089 124.091 64.8087ZM115.959 59.507C115.959 59.507 115.96 59.5073 115.962 59.508C115.96 59.5074 115.959 59.5071 115.959 59.507ZM112.365 49.5122C112.365 49.5121 112.366 49.5125 112.369 49.5135C112.367 49.5128 112.365 49.5122 112.365 49.5122Z" stroke="black" />
      
  </g>
  <defs>
    <filter id="filter0_d_1_2" x="58.7961" y="33.6425" width="106.558" height="90.578" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
      <feFlood flood-opacity="0" result="BackgroundImageFix" />
      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
      <feOffset dy="4" />
      <feGaussianBlur stdDeviation="2" />
      <feComposite in2="hardAlpha" operator="out" />
      <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
      <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_2" />
      <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_2" result="shape" />
    </filter>
    <clipPath id="clip0_1_2">
      <rect width="213" height="185" fill="white" />
    </clipPath>
  </defs>
</svg>
</Link>
        
        
        {/* <Link to="/wip">
          <span className="navbar-brand mb-0 h1">Work In Progress</span>
        </Link> */}
        <Link to="/contact">
          <span className="navbar-brand mb-0 h1">Contact</span>
        </Link>
        <div id="">
          {/* <Link to="/time">
					<span className="navbar-brand mb-0 h1">Time To Waste?</span>
				</Link> */}
          <svg
            onClick={darkOnClick}
            id="dark_mode"
            width="25"
            height="25"
            viewBox="0 0 55 55"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              className="moon"
              d="M 27.5 0 C 34.791 0 41.79 2.899 46.945 8.055 C 52.101 13.21 55 20.209 55 27.5 C 55 34.791 52.101 41.79 46.945 46.945 C 41.79 52.101 34.791 55 27.5 55 C 20.209 55 13.21 52.101 8.055 46.945 C 2.899 41.79 0 34.791 0 27.5 C 0 20.209 2.899 13.21 8.055 8.055 C 13.21 2.899 20.209 0 27.5 0 Z"
              fill="#fee140"
            />
          </svg>
        </div>
      </div>
    </nav>
   
  );
};
