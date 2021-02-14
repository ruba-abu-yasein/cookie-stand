'use script';
const hours= ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];
const seattle= {
    name: 'seattle',
    min:23,
    max:65,
    avgCooki: 6.3,
    avgCookiSale: [],
    customersPerHour:[],
    getcustomersPerHour:function () {
        for (let i = 0; i < hours.length; i++) {
            this.customersPerHour.push(getRandomNumber(this.min,this.max))
        }
    },
    getAvgCookiSale:function () {
        for (let i = 0; i< this.customersPerHour.length; i++) {
            this.avgCookiSale.push(Math.floor(this.customersPerHour[i]*this.avgCooki))
        }
    },
    render: function () {
       let total=0
        const container= document.getElementById ('seattle-city');
        const articleEl=document.createElement('article');
        container.appendChild(articleEl);
        const h2El=document.createElement('h2');
        articleEl.appendChild(h2El);
        h2El.textContent= this.name;
        const ulEl= document.createElement('ul');
        articleEl.appendChild(ulEl);
        for (let i = 0; i <hours.length; i++) {
            total=total+this.avgCookiSale[i]
            const li=document.createElement('li')
        ulEl.appendChild(li)
        li.textContent=`${hours[i]} ${this.avgCookiSale[i]} cookies`         }
        
        const li=document.createElement('li')
        ulEl.appendChild(li)
        li.textContent=`total: ${total}  cookies`    }
}
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  seattle.getcustomersPerHour()
  seattle.getAvgCookiSale()
  seattle.render()
  

  const Tokyo= {
    name: 'Tokyo',
    min:11,
    max:38,
    avgCooki:3.7 ,
    avgCookiSale: [],
    customersPerHour:[],
    getcustomersPerHour:function () {
        for (let i = 0; i < hours.length; i++) {
            this.customersPerHour.push(getRandomNumber(this.min,this.max))
        }
    },
    getAvgCookiSale:function () {
        for (let i = 0; i< this.customersPerHour.length; i++) {
            this.avgCookiSale.push(Math.floor(this.customersPerHour[i]*this.avgCooki))
        }
    },
    render: function () {
       let total=0
        const container= document.getElementById ('seattle-city');
        const articleEl=document.createElement('article');
        container.appendChild(articleEl);
        const h2El=document.createElement('h2');
        articleEl.appendChild(h2El);
        h2El.textContent= this.name;
        const ulEl= document.createElement('ul');
        articleEl.appendChild(ulEl);
        for (let i = 0; i <hours.length; i++) {
            total=total+this.avgCookiSale[i]
            const li=document.createElement('li')
        ulEl.appendChild(li)
       li.textContent=`${hours[i]} ${this.avgCookiSale[i]} cookies` 
        }
        
        const li=document.createElement('li')
        ulEl.appendChild(li)
       li.textContent=`total: ${total}  cookies`
    }
}
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  Tokyo.getcustomersPerHour()
  Tokyo.getAvgCookiSale()
  Tokyo.render()
  

  const Dubai= {
    name: 'Dubai',
    min:3,
    max:21,
    avgCooki:1.2 ,
    avgCookiSale: [],
    customersPerHour:[],
    getcustomersPerHour:function () {
        for (let i = 0; i < hours.length; i++) {
            this.customersPerHour.push(getRandomNumber(this.min,this.max))
        }
    },
    getAvgCookiSale:function () {
        for (let i = 0; i< this.customersPerHour.length; i++) {
            this.avgCookiSale.push(Math.floor(this.customersPerHour[i]*this.avgCooki))
        }
    },
    render: function () {
       let total=0
        const container= document.getElementById ('seattle-city');
        const articleEl=document.createElement('article');
        container.appendChild(articleEl);
        const h2El=document.createElement('h2');
        articleEl.appendChild(h2El);
        h2El.textContent= this.name;
        const ulEl= document.createElement('ul');
        articleEl.appendChild(ulEl);
        for (let i = 0; i <hours.length; i++) {
            total=total+this.avgCookiSale[i]
            const li=document.createElement('li')
        ulEl.appendChild(li)
       li.textContent=`${hours[i]} ${this.avgCookiSale[i]} cookies` 
        }
        
        const li=document.createElement('li')
        ulEl.appendChild(li)
       li.textContent=`total: ${total}  cookies`
    }
}
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  Dubai.getcustomersPerHour()
  Dubai.getAvgCookiSale()
  Dubai.render()

  const Paris= {
    name: 'Paris',
    min:20,
    max:38,
    avgCooki: 2.3,
    avgCookiSale: [],
    customersPerHour:[],
    getcustomersPerHour:function () {
        for (let i = 0; i < hours.length; i++) {
            this.customersPerHour.push(getRandomNumber(this.min,this.max))
        }
    },
    getAvgCookiSale:function () {
        for (let i = 0; i< this.customersPerHour.length; i++) {
            this.avgCookiSale.push(Math.floor(this.customersPerHour[i]*this.avgCooki))
        }
    },
    render: function () {
       let total=0
        const container= document.getElementById ('seattle-city');
        const articleEl=document.createElement('article');
        container.appendChild(articleEl);
        const h2El=document.createElement('h2');
        articleEl.appendChild(h2El);
        h2El.textContent= this.name;
        const ulEl= document.createElement('ul');
        articleEl.appendChild(ulEl);
        for (let i = 0; i <hours.length; i++) {
            total=total+this.avgCookiSale[i]
            const li=document.createElement('li')
        ulEl.appendChild(li)
        li.textContent=`${hours[i]} ${this.avgCookiSale[i]} cookies`         }
        
        const li=document.createElement('li')
        ulEl.appendChild(li)
        li.textContent=`total: ${total}  cookies`    }
}
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  Paris.getcustomersPerHour()
  Paris.getAvgCookiSale()
  Paris.render()

  const Lima= {
    name: 'Lima',
    min:2,
    max:16,
    avgCooki: 4.6,
    avgCookiSale: [],
    customersPerHour:[],
    getcustomersPerHour:function () {
        for (let i = 0; i < hours.length; i++) {
            this.customersPerHour.push(getRandomNumber(this.min,this.max))
        }
    },
    getAvgCookiSale:function () {
        for (let i = 0; i< this.customersPerHour.length; i++) {
            this.avgCookiSale.push(Math.floor(this.customersPerHour[i]*this.avgCooki))
        }
    },
    render: function () {
       let total=0
        const container= document.getElementById ('seattle-city');
        const articleEl=document.createElement('article');
        container.appendChild(articleEl);
        const h2El=document.createElement('h2');
        articleEl.appendChild(h2El);
        h2El.textContent= this.name;
        const ulEl= document.createElement('ul');
        articleEl.appendChild(ulEl);
        for (let i = 0; i <hours.length; i++) {
            total=total+this.avgCookiSale[i]
            const li=document.createElement('li')
        ulEl.appendChild(li)
        li.textContent=`${hours[i]} ${this.avgCookiSale[i]} cookies`         }
        
        const li=document.createElement('li')
        ulEl.appendChild(li)
        li.textContent=`total: ${total}  cookies`    }
}
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  Lima.getcustomersPerHour()
  Lima.getAvgCookiSale()
  Lima.render()
  