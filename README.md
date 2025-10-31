## My Todo App A simple Todo app with authentication and basic CRUD functionality.

 1.  **Clone the repository:** ```bash
   git clone <your-repo-url>
   cd <repo-folder>` 

2.  **Install dependencies:**
    
    `npm install # or yarn` 
    
3.  **Environment variables:**
    
    -   Set up Clerk for authentication and add your API keys in `.env`.
        
4.  **Run the app:**
    
    `npm start # or expo start` 
    
5.  **Access the app:**
    
    -   Open on your device or simulator using Expo Go.
        

----------

## Tech Stack Used

-   **Authentication:** [Clerk](https://clerk.com)
    
-   **Frontend / Framework:** React Native + Expo
    
-   **State Management & Storage:** Local storage (with plans for database integration)
- ## Trade-offs & Future Improvements

-   Currently using local storage instead of a full database.
    
-   Group/category feature for todos is not implemented yet.
    
-   Offline detection and synchronization is minimal — plan is **latest update wins** strategy.
    
-   Sorting supports default order; custom sorting not yet implemented.
    
-   These features can be added in future iterations for a better user experience.