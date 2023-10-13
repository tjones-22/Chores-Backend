const express = require('express');
const router = express.Router();

router.get("/daily", (req,res)=> {
   res.json({
    daily: [
      {
          title: "Bathrooms",
          tasks: [
              { description: "clean the sinks, mirrors, and the toilet", id: 1 },
              { description: "Clean the showers", "id": 2 },
              { description: "stock the bathrooms", "id": 3 },
              { description: "take out the trash and laundry bin", id: 4 }
          ],
          id: 1
      },
      {
          title: "Kitchen",
          tasks: [
              { description: "Sweep and mop the floors", id: 1 },
              { description: "Refill the flour and the sugar", id: 2 },
              { description: "Unload the dishwasher", id: 3 },
              { description: "Clean the microwave", id: 4 },
              { description: "Clean out the fridge", id: 5 },
              { description: "Take out the trash", id: 6 },
              { description: "Wipe down the counters", id: 7 }
          ],
          id: 2
      },
      {
          title: "Living Room/ Bonus Room",
          tasks: [
              { description: "Pick up toys and put away costumes", id: 1 },
              { description: "Organize movie, bookshelf, and computer areas", id: 2 },
              { description: "Return clutter to people's rooms", id: 3 },
              { description: "Fix couch cushions", id: 4 }
          ],
          id: 3
      },
      {
          title: "Vacuuming",
          tasks: [
              { description: "Hallway", id: 1 },
              { description: "Bonus Room", id: 2 },
              { description: "Stairs", id: 3 },
              { description: "Front/Back", id: 4 },
              { description: "Hallways", id: 5 },
              { description: "Spare Room", id: 6 }
          ],
          id: 4
      },
      {
          title: "Laundry/Linen Closet",
          tasks: [
              { description: "Maintain laundry", id: 1 },
              { description: "Fold laundry and put it into the right bins", id: 2 },
              { description: "Organize and stock linen closet", id: 3 }
          ],
          id: 5
      }
  ],

   });
})


router.get('/dish', (req, res) => {
res.json({
  dish: [
    { title: "Dry Dishes", id: 1 },
    { title: "Dinner Help", id: 2 },
    { title: "Wash Dishes", id: 3 },
    { title: "Tables and Counters", id: 4 },
    { title: "Sweep", id: 5 },
    { title: "Rinse and Load", id: 6 },
    { title: "Dinner Help 2", id: 7 }
]
})});

module.exports = router;
