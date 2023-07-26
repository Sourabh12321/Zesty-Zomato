<template>
  <footer id="footer">
    <div id="footer-one">
      <ul>
        <li>
          <div>
            <img
              src="https://images.crateandbarrel.com/is/image/Crate/png-icon-CustomerService-white?fmt=png-alpha"
              alt=""
            />
          </div>
          <div>
            <h2>Contact Us</h2>
            
           
          </div>
        </li>
        <li>
          <div class="icon-foot">
            <i
              class="fa fa-credit-card"
              aria-hidden="true"
              style="color: azure"
            ></i>
          </div>
          <div>
            <h2>Zesty Zomata</h2>
            <span>Earn Reward every time</span>
            <span>Order* excluding special Dishes</span>
            <span>Buy premium subscription</span>
            <span>special offers and events.</span>
            <span
              ><a
                href="https://www.crateandbarrel.com/rewards/?sitecode=crbcfbyd0"
                >Apply Now</a
              ></span
            >
            <span
              ><a href="https://www.crateandbarrel.com/#"
                >Manage your Account</a
              ></span
            >
          </div>
        </li>
        <li>
          <div class="icon-foot">
            <i class="fa fa-truck" aria-hidden="true" style="color: azure"></i>
          </div>
          <div>
            <h2>Order Tracking & Schedule Delivery</h2>
            <span>Find out when your online purchase</span>
            <span>will arrive or schedule a delivery.</span>
            <span><a href="">Track your Order</a></span>
            <span><a href="">Sheduled Delivery</a></span>
          </div>
        </li>
        
      </ul>
    </div>
  </footer>
</template>
<script>
export default {
  name: "FooterComp",
};
</script>
<style scoped>
footer {
    font-family: var(--webfont-primary, sans-serif);
    background: black;
    clear: both;
    margin-top: 50px;
    margin-bottom: -20px;
}

#footer-one {
    max-width: 1008px;
    margin: 0 auto;
    clear: both;
    box-sizing: content-box;
}

#footer-one>ul {
    display: flex;
    justify-content: center;
    padding: 75px 0 65px;
    border-bottom: black;
}

#footer-one>ul>li {
    display: flex;
    width: 33.33%;
}

#footer-one>ul>li>div:nth-child(1) {
    margin-top: 5px;
    box-sizing: content-box;
    /* border: 2px solid red; */
    text-align: right;

}

#media>h2 {
    padding-left: 30px;
}

#mediaa>div {
    display: flex;
    color: white;
    /* border: 1px solid red; */
    justify-content: space-between;
    width: 150px;
    height: 1.5cm;
    margin: 10px;
}

#mediaa i {
    font-size: 20px;
}



#footer-one>ul>li>div:nth-child(1) img {
    width: 40%;
}

#footer-one>ul>li>div:nth-child(1) i {
    width: 100%;
    /* border: 1 px solid red; */
}

.icon-foot {
    border: 2 px solid white;


}

.icon-foot>i {
    font-size: 28px;
}

#footer-one>ul>li>div:nth-child(2) {
    margin-left: 18px;
    padding-right: 30px;


}

#footer-one>ul h2 {
    font-size: 14px;
    margin: 0;
    padding-bottom: 5px;
    color: #fff;
    text-decoration: none;
    font-weight: 700;
    text-align: left;
}

#footer-one>ul span {
    display: block;
    font-size: 12px;
    color: #ccc;
    line-height: 20px;
    /* text-align: left; */
    text-align: left;

}

</style>