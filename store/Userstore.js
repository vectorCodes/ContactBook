import { Store } from "pullstate";

export const UserProfile = new Store({
  contacts: [
    {
      firstName: "John",
      lastName: "belly",
      age: 30,
      email: "john@12gmail.com",
      address: "23 Streets New York city"
    },
    {
      firstName: "David",
      lastName: "rossy",
      age: 35,
      email: "David@142gmail.com",
      address: "23 Streets London city"
    },
    {
      firstName: "Shroud",
      lastName: "gamer",
      age: 29,
      email: "shroud@189gmail.com",
      address: "23 Streets Las Vagas city"
    },
    {
      firstName: "Andrew",
      lastName: "ritchell",
      age: 45,
      email: "andrew@95gmail.com",
      address: "23 Streets Mexico city"
    }
  ],
  active: {
    firstName: "John",
    lastName: "belly",
    age: 30,
    email: "john@12gmail.com",
    address: "23 Streets New York city"
  }
});
