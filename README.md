# A Simple FireBase Connection and Data adding and Deletion data to Database in FireBase

## To implement this 

### 1. clone this repository using the below command:

``` git clone "https://github.com/sonalisrisivani/dynamic_blog" ```

### 2. Now, Go to Firebase Console and and Create a Project and name it (I named it story). 

### 3. In Project section -> Go to Settings in Project Overview -> Project Settings -> your apps -> web icon </> in bottom -> appname -> set firebase hosting -> register app -> Add firebase SDK -> Here im using js, so -> use script tag -> copy the firebase cnfig which is displayed 


``` 
    <script type="module">
        import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";
        import { getDatabase, ref, onValue } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-database.js";

        const firebaseConfig = {
            apiKey: "AIzaSyC2SQ1nSwkGbli1EClWffp84YJrVI7KxZE",
            authDomain: "dynamic-blog-c41a0.firebaseapp.com",
            databaseURL: "https://dynamic-blog-c41a0-default-rtdb.firebaseio.com",
            projectId: "dynamic-blog-c41a0",
            storageBucket: "dynamic-blog-c41a0.appspot.com",
            messagingSenderId: "977944393868",
            appId: "1:977944393868:web:fc669305460f925f99a3a9",
            measurementId: "G-9FNKR9DHRZ"
        };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
</script>
```



### 4. Copy your snippet and paste in the html file 

### 5. After Creating project , Create Database -> Firebase project -> build -> Firestore database -> Create database -> Enter Location -> Test mode -> Next -> Done. 

### 6. Start collections -> Document ID -> auto generate -> You can create as many collections as you want(I created a collection called items) ->  set columns/attributes for each of the collections with their respective DataTypes (I made 3 fields in the items collection)

## Features:

-** Data adding **:  users can add image , image name and details
-** Data Display **: users can view their added data in new html page
-** Deletion of Data **: users can delete existing data using the item name
-** Firebase Integration **: uses firebase firestore for storing 

## Technologies Used:

- ** HTML **: Structure of the web page.
- ** CSS **: Styling the web page.
- ** JavaScript **: Handling form submissions and Firebase interactions.
- ** Firebase **: Used for database management and authentication.

## Database Format:

-** Project name **: story
-** Collection name **: items
-** Fields and their Datatypes **: 
   1. item (String)
   2. details (String)
   3. image_url (String)
