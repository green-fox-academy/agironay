'use strict';

import Restaurant from './restaurant';
import {Waiter, Chef, Manager, Employee} from './employee'

let restaurant: Restaurant = new Restaurant('Risztorante',1982);

let waiter1: Waiter = new Waiter('Joci', 2, 3);
let waiter2: Waiter = new Waiter('Boci', 0, 1);
let cook: Chef = new Chef ('LaciBacsi', 9000);
let boss: Manager = new Manager ('Mr.Krabs', 200)

restaurant.hire(waiter1);
restaurant.hire(waiter2);
restaurant.hire(cook);
restaurant.hire(boss);

restaurant.guestsArrived();
boss.haveAMeeting();
console.log(restaurant)