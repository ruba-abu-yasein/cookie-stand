'use script';
const hours= ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];
let totalEH=[];
function getRandomNumber(min, max) {
   return Math.floor(Math.random() * (max - min + 1) + min);
  }
function cities(name,min,max,avgCooki){
this.name = name ;
this. min =min; 
this.max = max;
this.avgCooki = avgCooki;
this.avgCookiSale=[];
}
cities.prototype.getAvgCookiSale=function () {
    for (let i = 0; i< hours.length; i++) {
        this.avgCookiSale.push(Math.floor((getRandomNumber(this.min,this.max))*this.avgCooki));
        }
    };
    const container= document.getElementById ('seattle-city');
    const tableEl = document.createElement('table');

    cities.prototype.render= function () {
        let locationsTotale=0
        const dataRowEl=document.createElement('tr');
        tableEl.appendChild(dataRowEl);
        const trEl=document.createElement('td');
        dataRowEl.appendChild(trEl);
        trEl.textContent=this.name
        for(let i =0 ; i<this.avgCookiSale.length ; i++){
            totalEH[i]+=this.avgCookiSale[i]
            const trEl=document.createElement('td');
            dataRowEl.appendChild(trEl);
            trEl.textContent=this.avgCookiSale[i]
            locationsTotale=locationsTotale+this.avgCookiSale[i]

        }
        const trEl2=document.createElement('td');
        dataRowEl.appendChild(trEl2);
        trEl2.textContent=locationsTotale;

    }
    function footer(){
        let total=0
        const footerRow = document.createElement('tr');
        tableEl.appendChild(footerRow);
        const thEl = document.createElement('th');
       footerRow.appendChild(thEl);
       thEl.textContent='totals'
       for (let i = 0; i < totalEH.length; i++) {
           total+=totalEH[i]
           const thEl=document.createElement('th');
           footerRow.appendChild(thEl);
           thEl.textContent=totalEH[i];
           
           
       }
       const thEl2=document.createElement ('th');
       footerRow.appendChild(thEl2);
       thEl2.textContent=total



       
    }
    // const thhEl = document.createElement('th');
    // footerRow.appendChild(thhEl);
    // thhEl.textContent='totals';

    function header(){
    
        container.appendChild(tableEl);
        const headerRow = document.createElement('tr');
        tableEl.appendChild(headerRow);
        const thEl = document.createElement('th');
        headerRow.appendChild(thEl);
        thEl.textContent='location';
        for(let i=0 ; i<hours.length; i++){
            totalEH.push(0)
       const thEl = document.createElement('th');
       headerRow.appendChild(thEl);
       thEl.textContent=hours[i];
  }
  const thhEl = document.createElement('th');
  headerRow.appendChild(thhEl);
  thhEl.textContent='location tools';
    }
   
   

    
    const seattle = new cities(
        'Seattle',
        23,
         65,
         6.3
     );
     const tokyo= new cities(
         'Tokyo',
         3,
         24,
         1.2
         );
         const dubai = new cities(
             'Dubai',
             11,
         38,
         3.7,
         );
         const paris= new cities(
             'Paris',
             20,
             38,
             2.3,
             );
         const lima= new cities(
             'Lima',
             2,
             16,
             4.6,
         );
         
        header();
        seattle.getAvgCookiSale();
        seattle.render();
        tokyo.getAvgCookiSale();
        tokyo.render();
        dubai.getAvgCookiSale();
        dubai.render();
        paris.getAvgCookiSale();
        paris.render();
        lima.getAvgCookiSale();
        lima.render();
        footer();
        

        
        
        
        // const seattle= {
        //     name: 'seattle',
        //     min:23,
        //     max:65,
        //     avgCooki: 6.3,
        //     avgCookiSale: [],
        //     customersPerHour:[],
           

    //   const articleEl=document.createElement('article');
    //     container.appendChild(articleEl);
    //     const h2El=document.createElement('h2');
    //     articleEl.appendChild(h2El);
    //     h2El.textContent= this.name;
    //     const ulEl= document.createElement('ul');
    //     articleEl.appendChild(ulEl);
//         for (let i = 0; i <hours.length; i++) {
//             total=total+this.avgCookiSale[i]
//             const li=document.createElement('li')
//         ulEl.appendChild(li)
//         li.textContent=`${hours[i]} ${this.avgCookiSale[i]} cookies`         }
        
//         const li=document.createElement('li')
//         ulEl.appendChild(li)
//         li.textContent=`total: ${total}  cookies`    }
// }
// function getRandomNumber(min, max) {
//     return Math.floor(Math.random() * (max - min + 1) + min);
//   }
//   seattle.getcustomersPerHour()
//   seattle.getAvgCookiSale()
//   seattle.render()
  

//   const Tokyo= {
//     name: 'Tokyo',
//     min:11,
//     max:38,
//     avgCooki:3.7 ,
//     avgCookiSale: [],
//     customersPerHour:[],
//     getcustomersPerHour:function () {
//         for (let i = 0; i < hours.length; i++) {
//             this.customersPerHour.push(getRandomNumber(this.min,this.max))
//         }
//     },
//     getAvgCookiSale:function () {
//         for (let i = 0; i< this.customersPerHour.length; i++) {
//             this.avgCookiSale.push(Math.floor(this.customersPerHour[i]*this.avgCooki))
//         }
//     },
//     render: function () {
//        let total=0
//         const container= document.getElementById ('seattle-city');
//         const articleEl=document.createElement('article');
//         container.appendChild(articleEl);
//         const h2El=document.createElement('h2');
//         articleEl.appendChild(h2El);
//         h2El.textContent= this.name;
//         const ulEl= document.createElement('ul');
//         articleEl.appendChild(ulEl);
//         for (let i = 0; i <hours.length; i++) {
//             total=total+this.avgCookiSale[i]
//             const li=document.createElement('li')
//         ulEl.appendChild(li)
//        li.textContent=`${hours[i]} ${this.avgCookiSale[i]} cookies` 
//         }
        
//         const li=document.createElement('li')
//         ulEl.appendChild(li)
//        li.textContent=`total: ${total}  cookies`
//     }
// }
// function getRandomNumber(min, max) {
//     return Math.floor(Math.random() * (max - min + 1) + min);
//   }
//   Tokyo.getcustomersPerHour()
//   Tokyo.getAvgCookiSale()
//   Tokyo.render()
  

//   const Dubai= {
//     name: 'Dubai',
//     min:3,
//     max:21,
//     avgCooki:1.2 ,
//     avgCookiSale: [],
//     customersPerHour:[],
//     getcustomersPerHour:function () {
//         for (let i = 0; i < hours.length; i++) {
//             this.customersPerHour.push(getRandomNumber(this.min,this.max))
//         }
//     },
//     getAvgCookiSale:function () {
//         for (let i = 0; i< this.customersPerHour.length; i++) {
//             this.avgCookiSale.push(Math.floor(this.customersPerHour[i]*this.avgCooki))
//         }
//     },
//     render: function () {
//        let total=0
//         const container= document.getElementById ('seattle-city');
//         const articleEl=document.createElement('article');
//         container.appendChild(articleEl);
//         const h2El=document.createElement('h2');
//         articleEl.appendChild(h2El);
//         h2El.textContent= this.name;
//         const ulEl= document.createElement('ul');
//         articleEl.appendChild(ulEl);
//         for (let i = 0; i <hours.length; i++) {
//             total=total+this.avgCookiSale[i]
//             const li=document.createElement('li')
//         ulEl.appendChild(li)
//        li.textContent=`${hours[i]} ${this.avgCookiSale[i]} cookies` 
//         }
        
//         const li=document.createElement('li')
//         ulEl.appendChild(li)
//        li.textContent=`total: ${total}  cookies`
//     }
// }
// function getRandomNumber(min, max) {
//     return Math.floor(Math.random() * (max - min + 1) + min);
//   }
//   Dubai.getcustomersPerHour()
//   Dubai.getAvgCookiSale()
//   Dubai.render()

//   const Paris= {
//     name: 'Paris',
//     min:20,
//     max:38,
//     avgCooki: 2.3,
//     avgCookiSale: [],
//     customersPerHour:[],
//     getcustomersPerHour:function () {
//         for (let i = 0; i < hours.length; i++) {
//             this.customersPerHour.push(getRandomNumber(this.min,this.max))
//         }
//     },
//     getAvgCookiSale:function () {
//         for (let i = 0; i< this.customersPerHour.length; i++) {
//             this.avgCookiSale.push(Math.floor(this.customersPerHour[i]*this.avgCooki))
//         }
//     },
//     render: function () {
//        let total=0
//         const container= document.getElementById ('seattle-city');
//         const articleEl=document.createElement('article');
//         container.appendChild(articleEl);
//         const h2El=document.createElement('h2');
//         articleEl.appendChild(h2El);
//         h2El.textContent= this.name;
//         const ulEl= document.createElement('ul');
//         articleEl.appendChild(ulEl);
//         for (let i = 0; i <hours.length; i++) {
//             total=total+this.avgCookiSale[i]
//             const li=document.createElement('li')
//         ulEl.appendChild(li)
//         li.textContent=`${hours[i]} ${this.avgCookiSale[i]} cookies`         }
        
//         const li=document.createElement('li')
//         ulEl.appendChild(li)
//         li.textContent=`total: ${total}  cookies`    }
// }
// function getRandomNumber(min, max) {
//     return Math.floor(Math.random() * (max - min + 1) + min);
//   }
//   Paris.getcustomersPerHour()
//   Paris.getAvgCookiSale()
//   Paris.render()

//   const Lima= {
//     name: 'Lima',
//     min:2,
//     max:16,
//     avgCooki: 4.6,
//     avgCookiSale: [],
//     customersPerHour:[],
//     getcustomersPerHour:function () {
//         for (let i = 0; i < hours.length; i++) {
//             this.customersPerHour.push(getRandomNumber(this.min,this.max))
//         }
//     },
//     getAvgCookiSale:function () {
//         for (let i = 0; i< this.customersPerHour.length; i++) {
//             this.avgCookiSale.push(Math.floor(this.customersPerHour[i]*this.avgCooki))
//         }
//     },
//     render: function () {
//        let total=0
//         const container= document.getElementById ('seattle-city');
//         const articleEl=document.createElement('article');
//         container.appendChild(articleEl);
//         const h2El=document.createElement('h2');
//         articleEl.appendChild(h2El);
//         h2El.textContent= this.name;
//         const ulEl= document.createElement('ul');
//         articleEl.appendChild(ulEl);
//         for (let i = 0; i <hours.length; i++) {
//             total=total+this.avgCookiSale[i]
//             const li=document.createElement('li')
//         ulEl.appendChild(li)
//         li.textContent=`${hours[i]} ${this.avgCookiSale[i]} cookies`         }
        
//         const li=document.createElement('li')
//         ulEl.appendChild(li)
//         li.textContent=`total: ${total}  cookies`    }
// }
//   Lima.getcustomersPerHour()
//   Lima.getAvgCookiSale()
//   Lima.render()

