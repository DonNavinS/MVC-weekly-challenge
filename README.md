# MVC-weekly-challenge
Links to deployed Application: 
https://github.com/DonNavinS/MVC-weekly-challenge
https://mvc-weekly-challenge.herokuapp.com/

This challenge assignment required us to use a variety of node packages to create a blog site in which users can sign up and login, create posts, view other peoples'
posts, and post comments on them. I used sequelize and mySQL node packages to create a database and tables for the users that sign up, as well as for the posts and,
comments, and sessions. Express was used to create various routes for posting and retrieving data such as blog posts and comments. The handlebars package was used 
to generate the templates for the webpages, which were then populated with user data retrieved from the Express routes. connect-session-sequelize was used to 
create sessions for when users log in, and this allowed for different handlebars templates being loaded depending on whether a user was logged in or not.

To use this application, you can look at other peoples posts without signing, but cannot make your own posts or comment on any posts. After signing up and logging in,
these other features are enabled. Overall this challenge was the most difficult and comprehensive challenge yet. I faced many errors and bugs and ultimately could not get 
some of the core functionality to work properly, such as editing posts. Handlebars was also difficult to use because of the new syntax and unfamiliar folder structure (MVC 
paradigm as a whole was tricky). One of the main issues I encountered was referencing and retrieving certain attributes from the Post, User, and Comment models to be 
used in the handlebars templates.
