var productList = [
    {
        name: "lady shoe",
        price: 290,
        category : "shoe",
        imgUrl : "./images/product8.jpg"
    },
    {
        name: "Bag1",
        price: 300,
        category: "bag",
        imgUrl : "./images/product4.jpg"
    },
    {
        name: "Hoodie",
        price: 460,
        category : "shirts",
        imgUrl : "./images/product5.jpg"
    },
    {
        name: "nike shoe",
        price: 540,
        category : "shoe",
        imgUrl : "./images/promo2.jpg"
    },
    {
        name: "Bag2",
        price: 630,
        category: "bag",
        imgUrl : "./images/product7.jpg"
    },
    {
        name: "Hoodie",
        price: 735,
        category : "shirts",
        imgUrl : "./images/product4.jpg"
    },
    {
        name: "nike shoe",
        price: 790,
        category : "shoe",
        imgUrl : "./images/product10.jpg"
    },
    {
        name: "Bag3",
        price: 840,
        category: "bag",
        imgUrl : "./images/product13.jpg"
    },
    {
        name: "Hoodie",
        price: 950,
        category : "shirts",
        imgUrl : "./images/product2.jpg"
    }
];

document.getElementById('product-total').innerHTML = productList.length;

// product listing in onload 
getProductList();


// to add the product's item
function addProduct(){
    let name = document.getElementById("input-product-name").value
    let price= document.getElementById("input-product-price").value
    let inputFile = document.getElementById("input-product-file").files[0]
    const file = inputFile;
    const reader = new FileReader();

    reader.onloadend = () => {
        productList.push({
            name: name,
            price: price,
            category: "dress",
            imgUrl : reader.result
        })
        getProductList();
        
    };

    reader.readAsDataURL(file);
    
}

// let indicator = document.querySelector('.indicator').children;
// let main = document.querySelector('.items').children;

// for(let i=0; i<indicator; i++)
// {
//     indicator[i].onclick = function(){
//         for(let x=0; x<indicator; x++)
//         {
//             indicator[x].classList.remove('active')
//         }
//         this.classList.add('active');
//         const displayitmes = this.getAttribute('data-filter');
//         for(let z=0; z<main.length; z++)
//         {
//            main[z].style.transform = 'scale(0)';
//            setTimeout(()=>{
//             main[z].style.display = 'none';

//            },500);
//            if((main[z].getAttribute('data-category')== displayitmes) || displayitmes == 'all')
//            {
//             main[z].style.transform = 'scale(1)';
//             setTimeout(()=>{
//              main[z].style.display = 'block';
 
//             },500);
//            }
//         }
//     }
// }

function sortProduct(){
    var range = document.getElementById('sortingRange').value;
    
    if(range == 'low'){
        productList = productList.sort((obj)=> obj.price)
    }
    if(range == 'high'){
    productList = productList.reverse((obj)=> obj.price);
    }
    getProductList();
}


function getProductList(){
     var productItem = ''
    productList.forEach((obj, index)=> {
    
    productItem += `<div class="col-12 col-sm-4">
                <div class="card mb-3">
                <img src=${obj.imgUrl} alt="Card image cap">
                <div class="card-body text-center">
                    <h5>${obj.name}</h5>
                    <p>${obj.price}</p>
                </div>
                <br>
            </div>
        </div>`
    })

document.getElementById('product-item').innerHTML = productItem
}



function uploadBtn(){
    document.getElementById("input-product-file").click()
}
const btns = document.querySelectorAll('.btn');
const storeProducts = document.querySelectorAll('.store-product');
// const search = document.getElementById(search);

for (i = 0; i < btns.length; i++) {

    btns[i].addEventListener('click', (e) => {
        e.preventDefault()
        
        const filter = e.target.dataset.filter;
        console.log(filter);
        
        storeProducts.forEach((product)=> {
            if (filter === 'all'){
                product.style.display = 'block'
            } else {
                if (product.classList.contains(filter)){
                    product.style.display = 'block'
                } else {
                    product.style.display = 'none'
                }
            }
        });
    });
};

$(document).ready(function () {
$('#selectedColumn').DataTable({
  "aaSorting": [],
  columnDefs: [{
  orderable: false,
  targets: 9
  }]
});
  $('.dataTables_length').addClass('bs-select');
});

// SEARCH FILTER
const search = document.getElementById("search");
const productName = document.querySelectorAll(".product-details h2");

// A BETTER WAY TO FILTER THROUGH THE PRODUCTS
search.addEventListener("keyup", filterProducts);


function filterProducts(e) {
    const text = e.target.value.toLowerCase();
    // console.log(productName[0]);
    productName.forEach(function(product) {
        const item = product.firstChild.textContent;
        if (item.toLowerCase().indexOf(text) != -1) {
            product.parentElement.parentElement.style.display = "block"
        } else {
            product.parentElement.parentElement.style.display = "none"
        }
    })
}



// This code has been replaced by the function(filterProducts) above which does a better job

// search.addEventListener("keyup", (e) => {
//     e.preventDefault();
//     const searchValue = search.value.toLowerCase().trim();
//     // alert(search.value);

    
//     for (i = 0; i < storeProducts.length; i++) {
//         if (storeProducts[i].classList.contains(searchValue)) {
//             storeProducts[i].style.display = 'block';
//         } else if (searchValue == "") {
//             storeProducts[i].style.display = 'block';
//         } else {
//             storeProducts[i].style.display = 'none';    
//         }

//     //    if (searchValue == "") {
//     //     storeProducts[i].style.display = 'block';
//     //    }
        
//     }

// })
const slidecontainer = document.querySelector('.slide-container');
 const sort_name_btn = documrnt.querySelector('.sort-options .sort-name');

 function displayList (array =[]){
    slidecontainer.innerHTML="";
    for(let i=0; i<array.length; i++){
        let item = array[i];
         let item_element = document.createElement('div');
         item_element.classList.add('productList');

         let title =  document.createElement('div');
         title.classList.add('item-title');
         title.innerText = item.name;

         item_element.appendChild(title);

         slidecontainer.appendChild(item_element);
    } 
 }
 displayList(productList);


