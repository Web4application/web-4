pip install mkdocs-material

# Clone this project
git clone https://github.com/YOUR_USERNAME/Web4-Main.git
cd Web4-Main

# Build Docker images
bash build-nacos.sh

# Start services
docker-compose up -d

mkdocs build
mkdocs serve
pip install mkdocs
