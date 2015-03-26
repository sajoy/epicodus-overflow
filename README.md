# Welcome to Epicodus Overflow
Visit Epicodus Overflow online at http://epicodusoverflow.site44.com/#/


Have you ever been a student at Epicodus?
Have you ever not been perfect at coding immediately after picking it up?
Have you ever wanted to talk to another human about your shortcomings?
Have you ever wanted to comment on another person's shortcomings, laughing at them for forgetting the .concat() method?
If any of these sound like you, we built this app with you in mind.

Epicodus Overflow was created to give current Epicodus students a place to reach out for help from other students. While working on daily projects,  students often seek help from other pairs by walking around the classroom and asking other pairs at random for help. Epicodus Overflow will help students quickly find others dealing with similar error messages or problems, as well as provide an online venue for conversation about submitted errors.

Further, the permanent database of errors and solutions can serve as a resource for future students, hopefully accelerating learning for future classes. This is our gift to future students, a thank you to Epicodus.

# Application Details
The application has an AngularJS front end with a Firebase database for the backend.
On the home page you'll find the day's errors (in brief, but expandable) as well as the form to add new errors (complete with who you are, the software language you're using, the error message, and further details). You can also click the MeToo! button to let others know that the error displayed is an error you also ran into.

Click the comment button, and you're taken to that specific error's page, complete with any comments made and the ability to add new comments. You can also "like" the replies, giving support to the best answers.

The archive keeps the record of all errors. Since you can search for errors related to your own specific language/problem from the navbar, if you don't find help from that day, try searching from the archives. Use the language query first to limit the past errors to those in your language, and then use keywords in the main query field (one of the major benefits of angular is its powerful query).


# Installation & Running
1. `git clone` this repository
2. `cd epicodus-overflow`
3. `python -m HTTPServer"`
4. visit localhost:8000

# No Known Bugs

# Possible Future Features
1. Add ability to search replies
2. Add restricted editing of errors, replies
3. Show how many replies each error has on main page
4. Refactor controllers/ factories (oneUp function for starters)
5. MeToo currently only applies to that day. Maybe MeToo could appear on the Archives...if it reaches a high enough number to be of note.

# Contribute
1. Fork this repo
2. Make changes
3. Commit
4. Submit a pull request

```
### Authors

Tyler Brown
Jackie Fletcher
Benjamin Herson
Sarah Joy Calpo
Grace Mekarski
Whitney Reans

#### Special Thanks To:

Dustin Brown
Kelly Becker
Jay Sivakumaran
