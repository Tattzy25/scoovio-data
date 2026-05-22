# Scoovio - Database Schema

This repository contains the complete database schema for a two-sided equipment rental marketplace called Scoovio. The platform connects equipment owners (partners) with individuals or businesses (renters) who need to rent equipment.

## Architecture

*   **Database-centric:** The repository is centered around the PostgreSQL database schema, which is the core of the application's architecture.
*   **Modular Design:** The database schema is broken down into smaller, more manageable chunks, as evidenced by the `batch_*_create_tables.sql` files. This modularity makes it easier to develop, test, and maintain the application.
*   **Robust Security:** The application uses a sophisticated Role-Based Access Control (RBAC) system and Row-Level Security (RLS) to ensure that users can only access the data they are authorized to see.
*   **Comprehensive Functionality:** The database schema supports a wide range of features, including user management, equipment listing, booking and rentals, payments, communication, support, and analytics.
*   **Scalability:** The use of UUIDs for primary keys and the modular design of the database suggest that the application is designed to be scalable.

## Inferred Technology Stack

*   **Database:** PostgreSQL
*   **Backend:** A backend framework that can set session variables in the database (e.g., Node.js with Express, Python with Django or FastAPI, Ruby on Rails, etc.).
*   **Frontend:** A frontend framework that can interact with the backend API.

## Database Setup

To set up the database, you will need to have PostgreSQL installed and running. You can then use the `all_table_schemas.sql` file to create all the tables in the database. Alternatively, you can use the `batch_*_create_tables.sql` files to create the tables in smaller, more manageable chunks.

You will also need to apply the row-level security policies in the `rls_policies.sql` file to secure your database.
