# nextOrgChart
Simple orgChart Built in next.js


This is an crudable organizational chart build in the Next.JS framework.

To run locally:
Setup a .env file with MONGO_PASS and MONGO_USER --> use these to setup a connection to your Mongo database.
You will most likely want to modify the MONGO_URI passed in as well in the api/server.js file to point to the apporpriate connection.
npm install
npm run dev


#Using The App:

Click the plus sign next to a user node to start. The app currenly doesn't seed an existing user so you will need to enter or post one manually. You can promote a user if you check the supervisor box in an edit profile.

You can edit users if you click on their name.

You can add users under a supervisor if you l click the "+" sign next to their name

 You can then promote a user to that user's supervisor  you check "Make Supervisor". If you check the "Make Supervisor" checkbox in their edit profile. You cannot delete the seeded "owner" user.

Rank is auto set if you make someone a supervisor 

Rank should be limited to the rules within the evaluation.
