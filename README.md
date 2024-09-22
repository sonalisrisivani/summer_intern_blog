# A Simple FireBase Connection and Data adding and Deletion data to Database in FireBase

## To implement this 

### 1. clone this repository using the below command:

``` git clone "https://github.com/sonalisrisivani/summer_intern_blog" ```

### 2. Now, Go to Firebase Console and and Create a Project and name it (I named it story). 

### 3. In Project section -> Go to Settings in Project Overview -> Project Settings -> your apps -> web icon </> in bottom -> appname(dynamic-blog-intern) -> set firebase hosting -> register app -> Add firebase SDK -> Here im using js, so -> use script tag -> copy the firebase cnfig which is displayed 


``` 
   <script type="module">
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyC6CfsdPlIhTlivJmezWKbjleuhIfdfJKg",
    authDomain: "dynamic-blog-intern.firebaseapp.com",
    projectId: "dynamic-blog-intern",
    storageBucket: "dynamic-blog-intern.appspot.com",
    messagingSenderId: "427652086125",
    appId: "1:427652086125:web:bd814d0ef3e5afc0e3c264",
    measurementId: "G-1P33X5BTM6"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
</script>
```
VERY IMP : dont forget to add the databaseURL which you will find in realtime database or firestore database . here i used realtime database.



### 4. Copy your snippet and paste in the html file 

### 5. After Creating project ,in left side: product categories-> build-> Create Database -> Firebase project -> build -> Firestore database -> Create database -> Enter Location -> Test mode -> Next -> Done. 

### 6. we are using realtime database, objects are cerated on their own ,  only thing you have to do its, the link which is present in -realtime datavase -> data -> link inside this -> top -> copy and paste in firebase config -> databaseURL: "https://dynamic-blog-intern-default-rtdb.asia-southeast1.firebasedatabase.app/"
https://dynamic-blog-intern-default-rtdb.asia-southeast1.firebasedatabase.app/



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
(actually there is no format, it is NoSQL db , every entry in entered as an object. based on the code, the columns(keys ) are )

-** Project name **: summer-intern
-** Collection name **: items
-** Fields and their Datatypes **: 
   1. item (String)
   2. details (String)
   3. image_url (String)
