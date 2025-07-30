pip install mkdocs-material
mkdocs serve

# Clone the repo
git clone https://github.com/Web4application/web-4.git
cd web-4

# Build and launch services
./build-nacos.sh
docker-compose up
