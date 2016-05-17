

Due to the nature of the technicaul requirements for a mobile app this can be expensive producing native Android (Java) and Apple (IOS / objective C and swift) applications. To simplify the process the mobile application will instead harbour a mobile web application. This will allow for the same codebase to be used for both the website android and IOS applications lowering the costs.

THe other option is to outsource all of the technical requirements to other sources and template engines such as shopify and wordpress. While in the short term the speed in which we are able to bootstrap the application will be faster this will develop a dependency on these platforms which will become increasingly difficult to expand in the future. Most of these applications also cost money for hosting and the use of their themes this will reduce our profit margin. Producing the codebase ourselves however allows a greater understanding and an easier integration with the social media platforms as we can simply integrate with their API. Using the outsourced option however we will be unable to integrate the back-end services and will require the the outsourced option to provide this integration.

The technological stack will be as follows:

-Hosting https://cloudflare.com/
	-Advantages: Pricing model scales with traffic. So during our times of growth we are not leaking costs on hosting.

-Database level https://geteventstore.com/ 
	-Advantages: cloud ready, native javascript integration and strong concurrency
	-How this fits our needs: We will have a limited amount of data beginigng however growing hosting data will provide the option for analysis and web analytics. In addition our native language for this application will be javascript so keeping the language consistent across the stack will simplify future recruitment to maintaing the application.

-Back-end server nodeJS https://nodejs.org/en/:
	-Advantages: Strong concurrency support, javascript native back-end, many third party libraries, simple API connection to our social media platforms

-Front-end simple HTML5/CSS
	-Why?: Our application requires no realtime features so simple static pages will simplify the application and reduce complexity along the stack. In the future however to create a more sophsticated mobile application some form of virtual DOM will be required and the application will transition into ReactJS and Flux architecture. 

-PhoneGap
	-Why?: This is how we will start to package our javascript application into the native languages for both android and IOS.


Advantages of this approach:

-Using this approach to producing the application will simplify the cost and maintainece of our application.
-Allow for the application to be across multiple mobile platforms with the same technology and codebase
-Simplify the process of integrating the social media API's into our application.



