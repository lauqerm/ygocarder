## Using Ygocarder with Docker

### Prerequisites
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

Now you can access the app at <http://localhost:8080/ygocarder>.

#### Using image from Docker Hub

I have no plan to publish ygocarder's image on Docker Hub yet.