# Compare Products App

## Documentation

<b>Compare Products Appp</b> is a simple application that alows user to compare products. From this list of products users can hide or show specific product.
I decided to build it in React and Typescript. 

The main reason for using typescript is to have a clear data model from the beginning of the implementation. Also make the application more easier to read and debug. 

For better design I choose to use Bootstrap. It is easy to create layouts and reduce time working with Css. The class names are very descriptive. Among this I used Sass module for specific style. I configured tablet and mobile brekpoints to make application more responsible.

Among other folders I created an atomic-UI folder to include all reusable components. 

After finished the implementation I added some test mostly for reusable component. For tests I used React test library.

Details:
<li>Name of the selected stop</li>
<li>An icon that shows if this stop is favorite or not, which is editable</li>
<li>Departures component lists departures for the selected stop that have not occured yet</li>
<li>Arrivals component lists arrivals for the selected stop that have not occured yet</li>
<li>Departures/Arrivals info: line name, direction/provenance, remaining time, transport product, delay</li>
</br>

To have easier access to his favorite stops user can save the stop and all his favorite stops will be displayed in the marked stops in Homepage.</br>
He can remove them from his favorite list at any time.</br></br>

I also worked with <b> Offline Version </b> of the app. I added Angular Service Worker for this.</br>
When user is online in each request I handle te set in local storage all the information. When user is offline in each request I looked if in local storage have corresponding information, if yes return this data, esle throw error 




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
