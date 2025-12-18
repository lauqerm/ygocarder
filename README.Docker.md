## Using Ygocarder with Docker

### Preparation

Before working with the app, you will need to prepare your own `.env.docker` file, which the following attributes:
```env
### Template file used for batch import function
REACT_APP_TEMPLATE_FILE="https://drive.google.com/file/d/xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx/view?usp=sharing"
### Sentry DSN Link if you want to use the feedback function
REACT_APP_SENTRY_DSN="https://32e20d849c5724b2e63eab9d0a57c165@o4508424630697984.ingest.us.sentry.io/xxxxxxxxxxxxxxxx"
```
It's okay to leave the file empty, it will simply disable features related to them.

Prerequisites:
* [Docker](https://www.docker.com/get-started) version: 26+ (I'm using v26.1.1)
* [Docker Compose](https://docs.docker.com/compose/install/) version: 2+ (I'm using v2.40.3-desktop.1)

### Quick Start

#### Create and manage your own image

1. Clone the repository
    ```bash
    git clone https://github.com/lauqerm/ygocarder.git
    cd ygocarder
    ```

2. Start developing
    ```bash
    docker compose build app-dev
    docker compose up app-dev
    ```

Now you can access the app at <http://localhost:3000>.

3. Production build and start serving
    ```bash
    docker compose build app-prod
    docker compose up app-prod
    ```

Now you can access the app at <http://localhost:8080/ygocarder>. This is just a basic webserver using nginx.

#### Using image from Docker Hub

I have no plan to publish ygocarder's image on Docker Hub yet.