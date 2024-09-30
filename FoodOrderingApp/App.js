import React from "react";
import ReactDOM from "react-dom";



const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src="https://thumbs.dreamstime.com/b/creative-food-delivery-logo-icon-design-modern-vector-icon-illustration-creative-food-delivery-logo-design-312369055.jpg" />
            </div>

            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Address</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
};


// restaurant cards
const RestCard = (props) => {
    const { resObj } = props;
    return (
        <div className="res-card">
            <img  className="res-logo" alt = "res-logo" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+ resObj.cloudinaryImageId}/>
            <h4>{resObj.name}</h4>
            <h6>{resObj.cuisines.join(', ')}</h6>
            <h6>{resObj.avgRating} stars</h6>
            <h6>{resObj.sla.slaString} mins</h6>
        </div>
    );
};

const resObj = [
    {
    "id": "401279",
    "name": "KFC",
    "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/17/d08dc977-5e85-46df-8142-feb32cd9873b_401279.JPG",
    "locality": "NH Byepass Road",
    "areaName": "Kulathoor",
    "costForTwo": "₹400 for two",
    "cuisines": [
      "Burgers",
      "Fast Food",
      "Rolls & Wraps"
    ],
    "avgRating": 4.3,
    "parentId": "547",
    "avgRatingString": "4.3",
    "totalRatingsString": "8.9K+",
    "sla": {
      "deliveryTime": 25,
      "lastMileTravel": 3,
      "serviceability": "SERVICEABLE",
      "slaString": "20-25 mins",
      "lastMileTravelString": "3.0 km",
      "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
      "nextCloseTime": "2024-10-01 00:00:00",
      "opened": true
    },
    "badges": {
      "imageBadges": [
        {
          "imageId": "Rxawards/_CATEGORY-Burger.png",
          "description": "Delivery!"
        }
      ]
    },
    "isOpen": true,
    "type": "F",
    "badgesV2": {
      "entityBadges": {
        "imageBased": {
          "badgeObject": [
            {
              "attributes": {
                "description": "Delivery!",
                "imageId": "Rxawards/_CATEGORY-Burger.png"
              }
            }
          ]
        },
        "textBased": {
          
        },
        "textExtendedBadges": {
          
        }
      }
    },
    "aggregatedDiscountInfoV3": {
      "header": "20% OFF",
      "subHeader": "UPTO ₹50"
    },
    "differentiatedUi": {
      "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      "differentiatedUiMediaDetails": {
        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
        "lottie": {
          
        },
        "video": {
          
        }
      }
    },
    "reviewsSummary": {
      
    },
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {
      
    },
    "externalRatings": {
      "aggregatedRating": {
        "rating": "--"
      }
    },
    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
  },
  {
    "id": "140881",
    "name": "McDonald's",
    "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/9/18/3e605b8b-63af-4838-a17b-7ed976323465_140881.jpg",
    "locality": "Shobha City Mall",
    "areaName": "Puzhakkal",
    "costForTwo": "₹400 for two",
    "cuisines": [
      "Burgers",
      "Beverages",
      "Cafe",
      "Desserts"
    ],
    "avgRating": 4.5,
    "parentId": "630",
    "avgRatingString": "4.5",
    "totalRatingsString": "7.0K+",
    "sla": {
      "deliveryTime": 36,
      "lastMileTravel": 6.7,
      "serviceability": "SERVICEABLE",
      "slaString": "35-40 mins",
      "lastMileTravelString": "6.7 km",
      "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
      "nextCloseTime": "2024-09-30 22:45:00",
      "opened": true
    },
    "badges": {
      "imageBadges": [
        {
          "imageId": "Green%20Dot%20Awards/Best%20In%20Veg%20Burger.png",
          "description": "Delivery!"
        },
        {
          "imageId": "Rxawards/_CATEGORY-Burger.png",
          "description": "Delivery!"
        }
      ]
    },
    "isOpen": true,
    "type": "F",
    "badgesV2": {
      "entityBadges": {
        "imageBased": {
          "badgeObject": [
            {
              "attributes": {
                "description": "Delivery!",
                "imageId": "Green%20Dot%20Awards/Best%20In%20Veg%20Burger.png"
              }
            },
            {
              "attributes": {
                "description": "Delivery!",
                "imageId": "Rxawards/_CATEGORY-Burger.png"
              }
            }
          ]
        },
        "textBased": {
          
        },
        "textExtendedBadges": {
          
        }
      }
    },
    "aggregatedDiscountInfoV3": {
      "header": "20% OFF",
      "subHeader": "UPTO ₹50"
    },
    "orderabilityCommunication": {
      "title": {
        
      },
      "subTitle": {
        
      },
      "message": {
        
      },
      "customIcon": {
        
      }
    },
    "differentiatedUi": {
      "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      "differentiatedUiMediaDetails": {
        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
        "lottie": {
          
        },
        "video": {
          
        }
      }
    },
    "reviewsSummary": {
      
    },
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {
      
    },
    "externalRatings": {
      "aggregatedRating": {
        "rating": "--"
      }
    },
    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
},

{

    "id": "74531",
    "name": "Domino's Pizza",
    "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/7/8/159f0685-1f3e-4ee3-b7a3-741e977a74a5_74531.jpg",
    "locality": "RC Bishop House Road",
    "areaName": "Kizhakkumpattukara",
    "costForTwo": "₹400 for two",
    "cuisines": [
      "Pizzas",
      "Italian",
      "Pastas",
      "Desserts"
    ],
    "avgRating": 4.6,
    "parentId": "2456",
    "avgRatingString": "4.6",
    "totalRatingsString": "4.3K+",
    "sla": {
      "deliveryTime": 25,
      "lastMileTravel": 1.5,
      "serviceability": "SERVICEABLE",
      "slaString": "20-25 mins",
      "lastMileTravelString": "1.5 km",
      "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
      "nextCloseTime": "2024-09-30 23:59:00",
      "opened": true
    },
    "badges": {
      "imageBadges": [
        {
          "imageId": "Green%20Dot%20Awards/Best%20In%20Veg%20Pizza.png",
          "description": "Delivery!"
        },
        {
          "imageId": "Rxawards/_CATEGORY-Pizza.png",
          "description": "Delivery!"
        }
      ]
    },
    "isOpen": true,
    "type": "F",
    "badgesV2": {
      "entityBadges": {
        "imageBased": {
          "badgeObject": [
            {
              "attributes": {
                "description": "Delivery!",
                "imageId": "Green%20Dot%20Awards/Best%20In%20Veg%20Pizza.png"
              }
            },
            {
              "attributes": {
                "description": "Delivery!",
                "imageId": "Rxawards/_CATEGORY-Pizza.png"
              }
            }
          ]
        },
        "textBased": {
          
        },
        "textExtendedBadges": {
          
        }
      }
    },
    "aggregatedDiscountInfoV3": {
      "header": "20% OFF",
      "subHeader": "UPTO ₹50"
    },
    "orderabilityCommunication": {
      "title": {
        
      },
      "subTitle": {
        
      },
      "message": {
        
      },
      "customIcon": {
        
      }
    },
    "differentiatedUi": {
      "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      "differentiatedUiMediaDetails": {
        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
        "lottie": {
          
        },
        "video": {
          
        }
      }
    },
    "reviewsSummary": {
      
    },
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {
      
    },
    "externalRatings": {
      "aggregatedRating": {
        "rating": "--"
      }
    },
    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"    

},


]
 

const Body = () => {
    return (
        <div className="body">
            <div className="search">
                <h3>Search</h3>
            </div>
            <div className="res-container">
                <RestCard resObj = {resObj[0]}/>
                <RestCard resObj = {resObj[1]}/>
                <RestCard resObj = {resObj[2]}/>

            </div>
        </div>
    );
};
const AppLayout = () => {
    return (
        <div id="app">
            <Header />  
            <Body />
        </div>
    )
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppLayout />);



