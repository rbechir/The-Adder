# The-Adder

1st project that I've done in React, can be tested [here](https://theadder.netlify.com/).

### How to use

On the first connection, an account will be created in database using the given pseudo and password.

If the pseudo already exists (so not on the first connection), the given password has to match the database stored password.

To create a column, just click the button 'New column'.

For each column you can define a title and a separator. You can also choose if you want to add your values in base 60 (to add hours for example) or in base 100 (to add items prices for example) by clicking the appropriate button.

Add and delete new lines/columns using the appropriates buttons.

### Good to know

The data are stored using [Firebase](https://firebase.google.com/). THE DATABASE IS NOT SECURED ! Only the username and the password are encrypted using [Bcrypt](https://www.npmjs.com/package/bcryptjs).

This project is not perfect, code may not be as clean as it should be given my absence of professional experience in web development.

However, it shows what I've learned on my own in a few weeks.
