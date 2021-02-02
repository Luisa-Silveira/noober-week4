async function pageLoaded() {
  let response = await fetch('https://kiei451.com/api/rides.json')
  let json = await response.json()

  // console.dir(json)

  console.log('json: ', json)

  let rides = json
  

  for (let i=0; i<rides.length; i++) {
    let ride = rides[i]

    if (ride.length > 1) {
      levelOfService = 'Noober Pool'
      iconColor = 'bg-gray-600'
      borderColor = 'border-gray-900'

    } else if (ride[0].purpleRequested == true) {
      levelOfService = 'Noober Purple'
      iconColor = 'bg-purple-600'
      borderColor = 'border-purple-500'

    } else if (ride[0].numberOfPassengers > 3 ) {
      levelOfService = 'Noober XL'
      iconColor = 'bg-gray-600'
      borderColor = 'border-gray-900'

    } else {
      levelOfService = 'Noober X'
      iconColor = 'bg-gray-600'
      borderColor = 'border-gray-900' 
    }
    // console.log('ride: ', ride)
    for (let j=0; j<ride.length; j++) {
      let leg = ride[j]

      document.querySelector('.rides').insertAdjacentHTML('beforeend',
    
      `<h1 class="inline-block mt-8 px-4 py-2 rounded-xl text-2xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
      <i class="fas fa-car-side"></i>
      <span>${levelOfService}</span>
      </h1>
    
      <div class="border-4 ${borderColor} p-4 my-4 text-left">
        <div class="flex">
          <div class="w-1/2">
            <h2 class="text-2xl py-1">${leg.passengerDetails.first + ' ' + leg.passengerDetails.last}</h2>
            <p class="font-bold text-gray-600">${leg.passengerDetails.phoneNumber}</p>
          </div>
          <div class="w-1/2 text-right">
            <span class="rounded-xl ${iconColor} text-white p-2">
            ${leg.numberOfPassengers} Passangers
            </span>
          </div>
        </div>
        <div class="mt-4 flex">
          <div class="w-1/2">
            <div class="text-sm font-bold text-gray-600">PICKUP</div>
            <p>${leg.pickupLocation.address}</p>
            <p>${leg.pickupLocation.city +',' + ' ' + leg.pickupLocation.state +' ' + leg.pickupLocation.zip}</p>
          </div>
          <div class="w-1/2">
            <div class="text-sm font-bold text-gray-600">DROPOFF</div>
            <p>${leg.dropoffLocation.address}</p>
            <p>${leg.dropoffLocation.city +',' + ' ' + leg.dropoffLocation.state +' ' + leg.dropoffLocation.zip}</p>
          </div>
        </div>
      </div>`) 
    
    }


  }
}



window.addEventListener('DOMContentLoaded', pageLoaded)