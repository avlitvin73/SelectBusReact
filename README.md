## Running React for form with dropdown list and pagination
![изображение](https://user-images.githubusercontent.com/78950640/183534965-b31afb91-100e-4124-b46a-db2740b59d05.png)

* Created data for components
 * * json list of category names (at least 5)
 * * * Category object fields {id: <int>, name: <string>, flags: <string>}
* * json-list of names of child elements of categories (at least 2 for each category, names are allowed)
* * * Child element object fields {id: <int>, parent_id: <int>, name: <string>, flags: <string>}
* Implemented redux-storage (using middleware: redux-thunk
* * Section - Categories (category) - type <Array of objects>
* * Section - Child objects (item) - type <Array of objects>
* * Implemented CRUD functionality for creating/modifying/deleting storage partitions.
* * * Note. The read functionality does not need to be implemented.
* Implemented select component with special data
* Implemented multiselect component
* * Drop-down list with filtered data 
* * Forward / backward arrows, the current page from the selection
* Implemented synchronization select with multiselect

### Getting Started
- npm i
- npm run dev
