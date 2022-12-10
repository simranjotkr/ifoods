const data = [
    {
        offerTitle: "Get 50% off on using Uber Eats",
        couponCode: "UBER50"
    },
    {
        offerTitle: "Get 50% off on using Skip Eats",
        couponCode: "SKIP50"
    },
    {
        offerTitle: "Get 50% off on using Uber Eats",
        couponCode: "SKIP50"
    }
]

window.onload = (e) => {
    let div = document.getElementById("offerContainer");
    data.forEach(el => {
        div.innerHTML += `<div><h1>${el.offerTitle}</h1>
    </div>
    <div><h1>${el.couponCode}<h1></div>`;
    });

}