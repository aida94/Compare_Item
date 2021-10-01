# Compare Products App

## Documentation

<b>Compare Products Appp</b> is a simple application that alows user to compare products. From this list of products users can hide or show specific product.
I decided to build it in React and Typescript. 

The main reason for using typescript is to have a clear data model from the beginning of the implementation. Also make the application more easier to read and debug. 

For better design I choose to use Bootstrap. It is easy to create layouts and reduce time working with Css. The class names are very descriptive. Among this I used Sass module for specific style. I configured tablet and mobile brekpoints to make application more responsible.

Among other folders I created an atomic-UI folder to include all reusable components. 

After finished the implementation I added some test mostly for reusable component. For tests I used React test library.


## Install

    $ git clone https://github.com/aida94/Compare_Item.git
    $ cd Compare_Item
    $ npm install
    
 ### Start & watch

    $ npm start

### Simple build for production

    $ ng build
    
## Requirements Dependencies  
<li>axios</li>
<li>bootstrap</li>
<li>classnames</li>
<li>font-awesome</li>
<li>node-sass</li>
<li>typescript</li>
