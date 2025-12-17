## Using Ygocarder with Docker

### Prerequisites
* [Docker](https://www.docker.com/get-started) version: 26+ (I'm using v26.1.1)
* [Docker Compose](https://docs.docker.com/compose/install/) version: v2+ (I'm using v2.40.3-desktop.1)

### Quick Start

Manage your things easier with Docker Desktop.

1. Clone the repository
    ```bash
    git clone https://github.com/lauqerm/ygocarder.git
    cd ygocarder
    ```

2. Development with Docker Compose
    ```bash
    docker compose up app-dev --build
    ```

Now you can access the app at <http://localhost:3000>

3. Production build and start serving
    ```bash
    docker compose build app-prod
    docker compose up app-prod
    ```

Now you can access the app at <http://localhost:8080/ygocarder>