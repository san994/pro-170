AFRAME.registerComponent("marker-handler",{
    init:function(){
        this.el.addEventListener("markerFound",(e)=>{
            this.HandleMarkerFound();
        })
        this.el.addEventListener("markerLost",(e)=>{
            this.HandleMarkerLost();
        })
    },
    HandleMarkerFound:function(){
        var button = document.getElementById("button-div");
        button.style.display="flex"

        var ratingButton = documnet.getElementById("rating-button");
        var orderButton = documnet.getElementById("order-button");
        // Handling Click Events 
        ratingButton.addEventListener("click", function () { 
            swal({ icon: "warning", title: "Rate Dish", text: "Work In Progress" }); 
        }); 
        orderButton.addEventListener("click", () => { 
            swal({ icon: "https://i.imgur.com/4NZ6uLY.jpg", title: "Thanks For Order!", text: "Your order will be served soon at your table!" }); 
        });
    },
    HandleMarkerLost:function(){
        var button = document.getElementById("button-div");
        button.style.display="none"
    }
})