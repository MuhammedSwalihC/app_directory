## A Django-based web application for managing teacher directories.

## Requirements

    Python 3.6 or later
    Django

## Installation Guide

To run this project, follow these steps:

   1. Clone the repository by running git clone https://github.com/MuhammedSwalihC/app_directory.git in your terminal/command line.

   2. Create and activate a virtual environment.

   3. Install dependencies with 'pip install -r requirements.txt'

### Run Database migration commands given below:


  python3 manage.py makemigrations                  
  python3 manage.py migrate

### Create SuperUser By Below Commands:

  python3 manage.py createsuperuser

### Run the development server with

  python manage.py runserver.

## Authentication

This app uses JSON Web Token (JWT) based authentication.


## Model API
APIs URL for MODEL Application  are:

* POST: /teachers     # Create New Model  
    
       {
          "first_name": "string",                                               (required)
          "last_name": "string",                                                (required)
          "profile_picture": ["file.jpeg","file.png"],
          "email_address": "string",                                            (required)
          "phone_number": "number",                                             (required)
          "room_number": "string",                                              (required)
          "subjects_taught":["sub1","sub2","sub3","sub4","sub5"]                (max_limit=5) (required)
        }
        
        Response - { status-code: 200, message: 'Model successfully created' }
        
* GET:  /teachers     
        # Get List Of All Models 
        
* GET:  /teachers      # Retrieve Single model.

*PUT/PATCH  /teachers/id      # Update Single Model
        
        Request
        -------
        
        PUT /teachers/{{pk}}/

        {
          "first_name": "string",                                               (required)
          "last_name": "string",                                                (required)
          "profile_picture": ["file.jpeg","file.png"],
          "email_address": "string",                                            (required)
          "phone_number": "number",                                             (required)
          "room_number": "string",                                              (required)
          "subjects_taught":["sub1","sub2","sub3","sub4","sub5"]                (max-limit=5) 
        }

    Response - { status-code: 200, message: 'Updated successfully'}

* DELETE /teachers/id      # Delete Single Model