<template>
  <div>
    <div id="h1">
      <h1>Home Page</h1>
    </div>
    <div>
      <div id="category">
        <div @click="redirectToDishesPage">
          <img
            src="https://b.zmtcdn.com/webFrontend/e5b8785c257af2a7f354f1addaf37e4e1647364814.jpeg?output-format=webp&fit=around|402:360&crop=402:360;*,*"
            alt=""
          />
          <h3>Order Online</h3>
          <p>Stay home</p>
        </div>
        <div @click="redirectToDishesPage">
          <img
            src="https://b.zmtcdn.com/webFrontend/d026b357feb0d63c997549f6398da8cc1647364915.jpeg?output-format=webp&fit=around|402:360&crop=402:360;*,*"
            alt=""
          />
          <h3>Dining</h3>
          <p>View the favourites</p>
        </div>
        <div @click="redirectToDishesPage">
          <img
            src="https://b.zmtcdn.com/webFrontend/d9d80ef91cb552e3fdfadb3d4f4379761647365057.jpeg?output-format=webp&fit=around|402:360&crop=402:360;*,*"
            alt=""
          />
          <h3>Nightlife and Clubs</h3>
          <p>Explore the city's top clubs</p>
        </div>
        <div @click="redirectToDishesPage">
          <img
            src="https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/699e0aef-4008-498a-8687-de63e7146998/28c39fe3-7cab-470c-baa5-8d8b6773ba03/hp_f&v_m_fresh-vegetables_480_250623.jpg"
            alt=""
          />
          <h3>Fresh Vegetables</h3>
          <p>MIN 24% OFF</p>
        </div>
        <div @click="redirectToDishesPage">
          <img
            src="https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/699e0aef-4008-498a-8687-de63e7146998/28c39fe3-7cab-470c-baa5-8d8b6773ba03/hp_f&v_m_fresh-fruits_480_250623.jpg"
            alt=""
          />
          <h3>Fresh Fruits</h3>
          <p>MIN 24% OFF</p>
        </div>
        <div @click="redirectToDishesPage">
          <img
            src="https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/699e0aef-4008-498a-8687-de63e7146998/28c39fe3-7cab-470c-baa5-8d8b6773ba03/hp_f&v_m_cuts-and-exotics_480_250623.jpg"
            alt=""
          />
          <h3>Cuts & Exotics</h3>
          <p>MIN 24% OFF</p>
        </div>
        <div @click="redirectToDishesPage">
          <img
            src="https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/699e0aef-4008-498a-8687-de63e7146998/3c594556-594d-4672-af81-79d2b2a3fbd8/hp_bev_m_tea-coffee_480_250623.jpg"
            alt=""
          />
          <h3>Tea & Coffee</h3>
          <p>UP TO 30% OFF</p>
        </div >
        <div @click="redirectToDishesPage">
          <img
            src="https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/699e0aef-4008-498a-8687-de63e7146998/3c594556-594d-4672-af81-79d2b2a3fbd8/hp_bev_m_flavoured-soya-milk_480_250623.jpg"
            alt=""
          />
          <h3>Flavoured & Soya Milk</h3>
          <p>UP TO 30% OFF</p>
        </div>
        <div @click="redirectToDishesPage">
          <img
            src="https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/699e0aef-4008-498a-8687-de63e7146998/3c594556-594d-4672-af81-79d2b2a3fbd8/hp_bev_m_fruity-indulgence-juices_480_250623.jpg"
            alt=""
          />
          <h3>Juices</h3>
          <p>UP TO 30% OFF</p>
        </div>
      </div>
      <div id="burger">
        <div>
          <img
            src="https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/699e0aef-4008-498a-8687-de63e7146998/0263ff7c-ee9a-4d0f-ab64-b9457003ed3f/hp_dow-topoffersStorefront_m_480_250423_01.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/699e0aef-4008-498a-8687-de63e7146998/0263ff7c-ee9a-4d0f-ab64-b9457003ed3f/hp_big-packs-topoffersStorefront_m_480_250423_02.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/699e0aef-4008-498a-8687-de63e7146998/0263ff7c-ee9a-4d0f-ab64-b9457003ed3f/hp_combos-topoffersStorefront_m_480_250423_03.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/699e0aef-4008-498a-8687-de63e7146998/0263ff7c-ee9a-4d0f-ab64-b9457003ed3f/hp_30-corner-topoffersStorefront_m_480_250423_04.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useRouter } from "vue-router";
export default {
  name: "HomePage",
  setup() {
    const router = useRouter();

    const redirectToDishesPage = () => {
      router.push({ name: "dishes" });
    };

    return {
      redirectToDishesPage,
    };
  },
};

</script>

<style>
#h1 {
  margin-top: -20px;
  text-align: center;
  color: black;
  width: 100%;
  background-color: white;
}
#category {
  width: 100%;
  margin:auto;
  display: grid;
  grid-template-columns: repeat(3,1fr);
}

#category > div {
  
  border: 1px solid white;
  height: 300px;
  margin: auto;
  margin-top: 100px;
  width: 50%;
  background-color: black;
  color: white;
  align-items: center;
  text-align: center;
  transition: transform 0.3s;
}

#category > div:hover {
  transform: scale(1.1);
}

#category > div > img {
  width: 100%;
  height: 200px;
}

#burger {
  margin-top: 100px;
  background-color: white;
  width: 100%;
  /* margin: auto; */
  display: flex;
  justify-content: space-evenly;
}

#burger > div {
  border: 1px solid white;
  height: 200px;
  width: 23%;
  background-color: black;
  color: white;
  align-items: center;
  text-align: center;
  transition: transform 0.3s;
}

#burger > div > img {
  width: 100%;
  height: 100%;
}

#burger > div:hover {
  transform: scale(1.1);
}

@media screen and (max-width: 1024px) {
  
  #category {
  width: 100%;
  margin:auto;
  display: grid;
  grid-template-columns: repeat(2,1fr);
  }


  #category > div {
    width: 90%;
    margin: 20px;
  }

  #burger {
    flex-wrap: wrap;
  }

  #burger > div {
    width: 45%;
    margin: 20px;
  }
}

/* Styles for small screens (mobile devices) */
@media screen and (max-width: 768px) {
  #category {
  width: 100%;
  margin:auto;
  /* margin-right:80px ; */
  display: grid;
  grid-template-columns: repeat(2,1fr);
  }


  #category > div {
    width: 90%;
    margin: 20px;
  }

  #burger {
    flex-wrap: wrap;
  }

  #burger > div {
    width: 100%;
    margin: 20px;
  }
}

@media screen and (max-width: 600px) {
  #category {
  width: 100%;
  margin-top: 100px;

  /* margin-right:80px ; */
  align-items: center;
  display: grid;
  grid-template-columns: repeat(1,1fr);
  }


  #category > div {
    width: 90%;
    margin: 20px;
  }
}
</style>