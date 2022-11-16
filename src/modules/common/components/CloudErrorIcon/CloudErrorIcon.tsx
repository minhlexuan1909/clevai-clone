import React from "react";
import "./CloudErrorIcon.css";

type Props = {
  width?: string;
  height?: string;
};

const CloudErrorIcon: React.FC<Props> = (style) => {
  return (
    <svg style={style} viewBox="0 0 93.849 60" className="common-icon-error">
      <defs>
        <style></style>
      </defs>
      <g transform="translate(-130.287 -402.626)">
        <path
          className="a"
          d="M185.952,446.371a1.165,1.165,0,1,1-1.164,1.165A1.164,1.164,0,0,1,185.952,446.371Zm3.96-5.007a9.1,9.1,0,0,1-.2,1.876,1.165,1.165,0,0,1-2.28-.478,6.778,6.778,0,0,0,.145-1.4,7.661,7.661,0,0,0-3.422-6.033,9.817,9.817,0,0,1-1.934,4.986,1.165,1.165,0,0,1-1.862-1.4,7.488,7.488,0,0,0,1.456-5.439,7.84,7.84,0,0,0-7.744-6.671,7.574,7.574,0,0,0-7.057,4.827,9.935,9.935,0,0,1,3.793.03,1.165,1.165,0,0,1-.461,2.283,7.67,7.67,0,0,0-1.518-.153,7.57,7.57,0,0,0,0,15.139,7.482,7.482,0,0,0,4.076-1.19v-3.913l-6.343-3.172a1.164,1.164,0,1,1,1.042-2.082l5.3,2.651v-5.1a1.165,1.165,0,0,1,2.33,0v11.614a8.381,8.381,0,0,0,4.309,1.2,7.929,7.929,0,0,0,1.518-.148,1.166,1.166,0,1,1,.448,2.288,10.427,10.427,0,0,1-1.966.19,10.939,10.939,0,0,1-4.309-.907v12.271h-2.33V450.388a9.9,9.9,0,0,1-11.645-2.656v14.894h-2.329V447.732a9.9,9.9,0,0,1-11.645,2.656v12.238h-2.33V450.355a10.939,10.939,0,0,1-4.309.907c-5.617,0-10.364-4.532-10.364-9.9a10.041,10.041,0,0,1,5.89-8.876,10.08,10.08,0,0,1,5.426-6.947,10.055,10.055,0,0,1-.138-1.646,9.913,9.913,0,0,1,9.165-9.869,9.9,9.9,0,0,1,18.944,0,9.914,9.914,0,0,1,9.16,9.871,10.1,10.1,0,0,1-.138,1.651,10.133,10.133,0,0,1,5.429,6.987C187.043,434.048,189.912,437.253,189.912,441.364Zm-30.977,0a7.568,7.568,0,0,0-2.959-6.008,9.8,9.8,0,0,1-1.932,4.961,1.165,1.165,0,1,1-1.861-1.4,7.57,7.57,0,0,0-6.058-12.11,7.927,7.927,0,0,0-7.263,4.82,10.224,10.224,0,0,1,1.789-.161,12.347,12.347,0,0,1,2.21.2,1.165,1.165,0,1,1-.461,2.283,9.906,9.906,0,0,0-1.749-.153c-4.234,0-8.034,3.457-8.034,7.571,0,4.031,3.753,7.568,8.034,7.568a8.382,8.382,0,0,0,4.309-1.2v-3.908l-6.343-3.172a1.164,1.164,0,1,1,1.042-2.082l5.3,2.651v-5.1a1.165,1.165,0,0,1,2.33,0v11.619a7.482,7.482,0,0,0,4.076,1.19A7.577,7.577,0,0,0,158.935,441.364ZM176.4,423.895a7.579,7.579,0,0,0-7.571-7.569,1.182,1.182,0,0,1-1.315-.937,7.571,7.571,0,1,0-13.942,5.361,1.165,1.165,0,1,1-2.007,1.185,9.913,9.913,0,0,1-1.368-5.028c0-.165,0-.33.013-.493a7.582,7.582,0,0,0-6.419,7.481,7.929,7.929,0,0,0,.048.844,10.1,10.1,0,0,1,2.282-.261,9.9,9.9,0,0,1,9.726,8.06,9.888,9.888,0,0,1,3.084,2.445V418.654a1.165,1.165,0,0,1,2.329,0v5.1l5.3-2.651a1.165,1.165,0,0,1,1.042,2.085l-6.344,3.171v8.621a9.876,9.876,0,0,1,3.084-2.443,9.9,9.9,0,0,1,9.728-8.062,10.1,10.1,0,0,1,2.28.261A7.885,7.885,0,0,0,176.4,423.895Zm43.506,26.283a.96.96,0,1,0,.96-.96A.96.96,0,0,0,219.91,450.178Zm4.226-5.091a7.459,7.459,0,0,1-.161,1.548.961.961,0,0,1-1.88-.4,5.579,5.579,0,0,0,.12-1.153,6.319,6.319,0,0,0-2.823-4.976,8.087,8.087,0,0,1-1.6,4.112.961.961,0,1,1-1.535-1.155,6.183,6.183,0,0,0,1.2-4.486,6.47,6.47,0,0,0-6.388-5.5,6.249,6.249,0,0,0-5.822,3.983,8.193,8.193,0,0,1,3.129.024.96.96,0,0,1-.38,1.883,6.347,6.347,0,0,0-1.252-.126,6.244,6.244,0,0,0,0,12.488,6.173,6.173,0,0,0,3.362-.982v-3.227l-5.233-2.617a.96.96,0,0,1,.86-1.717l4.373,2.186v-4.209a.961.961,0,0,1,1.922,0v9.58a6.913,6.913,0,0,0,3.554.986,6.537,6.537,0,0,0,1.253-.122.961.961,0,1,1,.369,1.887,8.613,8.613,0,0,1-1.622.157,9.025,9.025,0,0,1-3.554-.748v10.122h-1.922v-10.1a8.164,8.164,0,0,1-9.6-2.191v12.286h-1.922V450.34a8.166,8.166,0,0,1-9.606,2.191v10.1h-1.921V452.5a9.034,9.034,0,0,1-3.555.748,8.476,8.476,0,0,1-8.549-8.165,8.286,8.286,0,0,1,4.858-7.322,8.32,8.32,0,0,1,4.476-5.73,8.313,8.313,0,0,1-.113-1.358,8.176,8.176,0,0,1,7.559-8.14,8.168,8.168,0,0,1,15.627,0,8.178,8.178,0,0,1,7.556,8.142,8.363,8.363,0,0,1-.114,1.362,8.358,8.358,0,0,1,4.478,5.764A8.441,8.441,0,0,1,224.136,445.087Zm-25.552,0a6.245,6.245,0,0,0-2.441-4.956,8.085,8.085,0,0,1-1.593,4.092.961.961,0,0,1-1.536-1.155,6.245,6.245,0,0,0-5-9.99,6.537,6.537,0,0,0-5.99,3.976,8.471,8.471,0,0,1,1.475-.132,10.115,10.115,0,0,1,1.823.163.96.96,0,1,1-.38,1.883,8.282,8.282,0,0,0-1.443-.126,6.255,6.255,0,1,0,0,12.488,6.917,6.917,0,0,0,3.555-.986v-3.223l-5.233-2.617a.96.96,0,1,1,.86-1.717l4.373,2.186v-4.209a.96.96,0,1,1,1.921,0v9.584a6.176,6.176,0,0,0,3.363.982A6.249,6.249,0,0,0,198.584,445.087Zm14.41-14.41a6.252,6.252,0,0,0-6.245-6.243.975.975,0,0,1-1.085-.773,6.246,6.246,0,1,0-11.5,4.423.961.961,0,0,1-1.655.977,8.172,8.172,0,0,1-1.128-4.148c0-.136,0-.272.01-.407a6.254,6.254,0,0,0-5.294,6.171,6.452,6.452,0,0,0,.039.7,8.37,8.37,0,0,1,1.882-.214,8.164,8.164,0,0,1,8.023,6.648,8.144,8.144,0,0,1,2.544,2.017v-13.47a.961.961,0,0,1,1.922,0v4.209l4.372-2.186a.961.961,0,1,1,.86,1.719l-5.232,2.617v7.111a8.129,8.129,0,0,1,2.543-2.015,8.166,8.166,0,0,1,8.025-6.65,8.358,8.358,0,0,1,1.88.214A6.419,6.419,0,0,0,212.994,430.677Zm-80.57-20.353a2.989,2.989,0,0,1,1.188-4.058,2.651,2.651,0,0,1,2.021-1.732,3.694,3.694,0,0,1,6.521,1.365,2.99,2.99,0,0,1-.07,5.98h-7.036A2.991,2.991,0,0,1,132.424,410.324Zm1.393-1.435a1.23,1.23,0,0,0,1.231,1.231h7.038a1.231,1.231,0,0,0,0-2.462h-.7a.88.88,0,0,1-.879-.88,1.935,1.935,0,0,0-3.612-.966.873.873,0,0,1-.772.44h-.033a.879.879,0,0,0-.85.759.881.881,0,0,1-.586.714A1.231,1.231,0,0,0,133.817,408.889Zm72.241-.754a5.993,5.993,0,0,1,6.459-5.489.666.666,0,0,1,.39,1.159,4,4,0,0,0,3.568,6.869.665.665,0,0,1,.724.986,5.995,5.995,0,0,1-11.141-3.525Zm2.512,3.609a4.656,4.656,0,0,0,6.576.347,5.333,5.333,0,0,1-4.161-8.016,4.674,4.674,0,0,0-2.415,7.669Zm5.995,8.459h1.3v-1.3h-1.3Zm1.958-1.958h1.305v-1.3h-1.305Zm1.958,1.958h1.3v-1.3h-1.3Zm-1.958,1.958h1.305v-1.305h-1.305Zm-25.411-9.8h.961V411.4h-.961Zm1.442-1.442h.961v-.962h-.961ZM194,412.36h.962V411.4H194Zm-1.442,1.442h.961v-.961h-.961ZM132.81,423.957h1.457V422.5H132.81Zm2.913-2.185h1.457v-1.456h-1.457Zm78.932-14.786h.983V406h-.983Z"
        ></path>
        <path
          className="b"
          d="M208.081,440.154a14.075,14.075,0,0,1-14.058,14.06H163.9a15.942,15.942,0,1,1,0-31.885c.108,0,.218,0,.331,0a14.06,14.06,0,0,1,27.846,2.762c0,.378-.017.759-.047,1.139a14.08,14.08,0,0,1,16.047,13.92Z"
        ></path>
        <path
          className="c"
          d="M188.978,416.3a14.054,14.054,0,0,0-21.927,8.694c-.113,0-.223-.005-.332-.005a15.936,15.936,0,0,0-12.27,26.113,15.937,15.937,0,0,1,9.455-28.771c.108,0,.218,0,.331,0a14.052,14.052,0,0,1,24.743-6.035Z"
        ></path>
        <path
          className="c"
          d="M195.972,426.232a.131.131,0,0,0-.028,0v-.007A.138.138,0,0,1,195.972,426.232Z"
        ></path>
        <path
          className="d"
          d="M187.039,438.3a.887.887,0,0,0-1.158.47,8.531,8.531,0,0,1-16.2-1.548l1.263.846a.883.883,0,0,0,.979-1.47l-2.818-1.879a.881.881,0,0,0-1.228.242l-1.884,2.823a.882.882,0,0,0,1.468.979l.566-.848a10.3,10.3,0,0,0,19.481,1.543A.885.885,0,0,0,187.039,438.3Zm2.766-6.409a.882.882,0,0,0-1.223.247l-.564.848a10.3,10.3,0,0,0-19.434-1.653.882.882,0,1,0,1.616.706,8.532,8.532,0,0,1,16.165,1.637l-1.266-.843a.883.883,0,0,0-.98,1.47l2.819,1.879a.893.893,0,0,0,1.23-.242l1.881-2.825A.883.883,0,0,0,189.8,431.889Zm4.218-5.793a14.045,14.045,0,0,0-1.989.138c.03-.38.047-.761.047-1.139a14.06,14.06,0,0,0-27.846-2.762c-.113,0-.223,0-.331,0a15.942,15.942,0,1,0,0,31.885h2.94a.883.883,0,1,0,0-1.766H163.9a14.176,14.176,0,1,1,0-28.353c.326,0,.667.012,1.007.035a.88.88,0,0,0,.935-.756,12.3,12.3,0,1,1,24.293,3.8.892.892,0,0,0,1.071,1.008,12.295,12.295,0,1,1,2.813,24.264H171a.883.883,0,1,0,0,1.766h23.022a14.059,14.059,0,0,0,0-28.118Z"
        ></path>
      </g>
    </svg>
  );
};

export default CloudErrorIcon;