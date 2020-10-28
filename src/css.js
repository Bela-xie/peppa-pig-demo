let string = `
/* 您好，接下来让我来为您展示小猪佩奇的绘制过程，当前处于慢速状态，若觉得速度太慢，您可以在右侧随时调整速度快慢或暂停，注意哦，瞧好了您咧 */
   .html {
    background-color: #89b9f7;
} 
  .header .face {
    border: 6px solid #e795c0;
    border-radius: 55% 45% 45% 55% / 60% 55% 45% 40%;
    background-color: #ffc4e0;
  } 
  .header .nose {
    border: 6px solid #e795c0;
    border-radius: 50%;
    transform: rotate(20deg);
    background-color: #ffc4e0;
  }
  .header .nose .nostril {
    border: 5px solid #e795c0;
    border-radius: 50%;
    transform: rotate(20deg); 
    background-color: #ffc4e0;
  }
  .header .nose .nostril::before {
    background-color: #e795c0;
  }
  .header .nose .nostril::after {
    background-color: #e795c0;
  }
  .header .nose::before {
    transform: rotate(5deg);
    background-color: #ffc4e0;
  }
  .header .nose::after {
    background-color: #ffc4e0;
    transform: rotate(5deg);
    border-radius: 70%;
  }
  .header .nose .left_eye {
    border: 6px solid #e795c0;
    background-color: white;
    z-index: 1;
  }
  .header .nose .left_eye::before {
    border-radius: 50%;
    background-color: black;
  }
  .header .nose .right_eye {
    z-index: 1;
    border: 6px solid #e795c0;
    background-color: white;
    
  }
  .header .nose .right_eye::before {
    background-color: black;
  }
  .header .nose .check {
    border-radius: 50%;
    background-color: #f5aacb;
    z-index: 1;
  }
  .header .face .lip {
    border: 6px solid #ef3f85;
    border-radius: 60%;
  }
  .header .left_ear {
    border-radius: 45%;
    transform: rotate(18deg);
    border: 6px solid #e795c0;
    background-color: #ffc4e0;
    z-index: -1;
  }
  .header .right_ear {
    border-radius: 45%;
    border: 6px solid #e795c0;
    transform: rotate(42deg);
    background-color: #ffc4e0;
    z-index: -1;
  }
  .body .belly {
    border: 6px solid #ee5253;
    background-color: #f8756d;
  }
  .body .hidden {
    background-color: #89b9f7;
    border-top: 6px solid #ee5253;
  }
  .body .left_arm {
    border-radius: 10%;
    background-color: #ffc4e0;
    transform: rotate(-30deg);
    z-index: -1;
  }
  .body .left_arm::before {
    background-color: #ffc4e0;
    transform: rotate(45deg);
    border-radius: 15%;
  }
  .body .left_arm::after {
    background-color: #ffc4e0;
    transform: rotate(120deg);
    border-radius: 15%;
  }
  .body .right_arm {
    background-color: #ffc4e0;
    transform: rotate(25deg);
    border-radius: 10%;
    z-index: -1;
  }
  .body .right_arm::before {
    background-color: #ffc4e0;
    transform: rotate(45deg);
    border-radius: 15%;
  }
  .body .right_arm::after {
    background-color: #ffc4e0;
    transform: rotate(120deg);
    border-radius: 15%;
  }
  .body .footer .left_foot {
    width: 8px;
    height: 40px;
    background-color: #ffc4e0;
    margin-left: 50px;
    float: left;
  }
  .body .footer .left_foot::before {
    background-color: #333333;
    border-radius: 50% 64% 64% 50%;
  }
  .body .footer .right_foot {
    width: 8px;
    height: 40px;
    background-color: #ffc4e0;
    float: right;
    margin-right: 50px;
  }
  .body .footer .right_foot::before {
    border-radius: 50% 64% 64% 50%;
    background-color: #333333;
  }  
  .body .footer .shadow {
    width: 170px;
    height: 40px;
    background-color: #678bb9;
    border-radius: 50%;
    margin-top: 22px;
    margin-left: 0px;
  }
  /* 展示完毕，感谢您的观看 */
`;
export default string;